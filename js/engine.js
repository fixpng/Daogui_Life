// === GAME ENGINE ===
var gameState = {
  talents:[], location:null, age:0, year:0,
  sanity:100, baseSanity:100, cultivation:0,
  wealth:10, connections:0, faction:'none',
  comprehension:10, karma:0, qiyun:0, constitution:50,
  gender:'male', factionRank:0,
  alive:true, totalRuns:parseInt(localStorage.getItem('dg_runs')||'0'),
  items:[], visitedLocations:[], factionHistory:[],
  eventHistory: new Set(),
  npcMet: {},   // NPC记忆: {npc_id: {favor: 数值, met_age: 首次相遇年龄, tag: '标签'}}
  flags: {},    // 事件标记: {flag_name: true/value} 用于事件前后联系
  dualCultWarned:false,
  lastLifeTalents:[],
  xinpan: null // 心蟠状态: null 或 'jizai'|'doumo'|'baxi'|'wusheng'|'panchi'|'yuer'|'sanqing'
};
var autoMode = false, speed = 1, autoTimer = null, availableTalents = [];
var SPEED_DELAYS = {1:3000, 2:1500, 3:750, 4:350, 5:200};
var keptTalent = null; // talent kept from previous life
var waitingForChoice = false;
var achievements = JSON.parse(localStorage.getItem('dg_achievements')||'{}');

// Centralized auto-advance scheduler
function scheduleNext() {
  if(autoTimer) { clearTimeout(autoTimer); autoTimer = null; }
  if(autoMode && gameState.alive && !waitingForChoice) {
    var delay = SPEED_DELAYS[speed] || 3000;
    autoTimer = setTimeout(function(){ autoTimer = null; nextYear(); }, delay);
  }
}

// === TALENT DRAW ===
function drawTalents() {
  var pool = [];
  var sp = [].concat(TALENTS.special).sort(function(){return Math.random()-0.5;});
  // 15% chance per slot for special (up to 2)
  for (var i=0;i<2;i++) if (Math.random()<0.15 && sp.length) pool.push(sp.pop());
  var good = [].concat(TALENTS.good).sort(function(){return Math.random()-0.5;});
  pool.push.apply(pool, good.slice(0, Math.max(0, 5-pool.length)));
  var bad = [].concat(TALENTS.bad).sort(function(){return Math.random()-0.5;});
  pool.push.apply(pool, bad.slice(0, Math.max(0, 10-pool.length)));
  return pool.slice(0,10).sort(function(){return Math.random()-0.5;});
}

function initTalents() {
  availableTalents = drawTalents();
  gameState.talents = [];
  var grid = document.getElementById('talent-options');
  grid.innerHTML = availableTalents.map(function(t,i){return (
    '<div class="talent-card rarity-'+t.rarity+'" onclick="selectTalent('+i+')" id="talent-'+i+'">' +
      '<div class="talent-name">'+t.name+'</div>' +
      '<div class="talent-desc">'+t.desc+'</div>' +
      '<div class="talent-hint">'+(t.hint||'')+'</div>' +
      '<span class="talent-tag">'+(RARITY_NAMES[t.rarity]||'凡品')+'</span>' +
    '</div>');
  }).join('');
  updateSelectCount();
}

function refreshTalents() {
  gameState.talents = [];
  initTalents();
}

function selectTalent(i) {
  var t = availableTalents[i], card = document.getElementById('talent-'+i);
  if (card.classList.contains('disabled')) return;
  if (card.classList.contains('selected')) {
    card.classList.remove('selected');
    gameState.talents = gameState.talents.filter(function(x){return x.id!==t.id;});
  } else if (gameState.talents.length<3) {
    // Check conflicts
    if(typeof TALENT_CONFLICTS !== 'undefined' && TALENT_CONFLICTS[t.id]) {
      var conflicts = TALENT_CONFLICTS[t.id];
      var conflicting = gameState.talents.find(function(sel){
        return conflicts.indexOf(sel.id) !== -1;
      });
      if(conflicting) {
        showConflictWarning(t.name, conflicting.name);
        return;
      }
    }
    card.classList.add('selected');
    gameState.talents.push(t);
  }
  document.querySelectorAll('.talent-card').forEach(function(c,j){
    if (!c.classList.contains('selected') && gameState.talents.length>=3) c.classList.add('disabled');
    else if (!c.classList.contains('selected')) c.classList.remove('disabled');
  });
  updateSelectCount();
}

function showConflictWarning(name1, name2) {
  var el = document.getElementById('conflict-popup');
  if(!el) return;
  el.querySelector('.conflict-msg').innerHTML = '「<span style="color:var(--gold)">' + name1 + '</span>」与「<span style="color:var(--gold)">' + name2 + '</span>」相克，不可同时选择！';
  el.classList.add('active');
  setTimeout(function(){ el.classList.remove('active'); }, 2500);
}

function updateSelectCount() {
  document.getElementById('selected-count').textContent = gameState.talents.length;
  document.getElementById('btn-start').disabled = gameState.talents.length!==3;
}

// === GAME START ===
function startGame() {
  // FULL RESET of gameState - ensure no carryover from previous runs
  gameState = {
    talents: gameState.talents, // Keep talents for this run selection
    location: null,
    age: 0,
    year: 0,
    sanity: 100,
    baseSanity: 100,
    cultivation: 0,  // ALWAYS reset to 0 - new life starts fresh
    wealth: 10,
    connections: 0,
    faction: 'none',
    comprehension: 10,
    karma: 0,
    qiyun: 0,
    constitution: 50,
    gender: 'male',
    factionRank: 0,
    alive: true,
    totalRuns: gameState.totalRuns, // Keep totalRuns counter
    items: [],
    visitedLocations: [],
    factionHistory: [],  // Reset faction history for new run
    eventHistory: new Set(),
    npcMet: {},
    flags: {},
    dualCultWarned: false,
    lastLifeTalents: gameState.lastLifeTalents || [],  // Keep last life's talents for carry-over feature
    xinpan: null // 心蟠状态重置
  };

  // Assign gender randomly
  gameState.gender = Math.random() < 0.5 ? 'male' : 'female';

  // If a talent was kept from previous life, add it
  if(keptTalent && !gameState.talents.find(function(t){return t.id===keptTalent.id;})) {
    gameState.talents.unshift(keptTalent);
    if(gameState.totalRuns > 0) unlockAchieve('rebirth_talent');
  }

  gameState.talents.forEach(function(t){
    if(t.effect.sanity) gameState.baseSanity += t.effect.sanity;
    if(t.effect.wealth) gameState.wealth += t.effect.wealth;
    if(t.effect.connections) gameState.connections += t.effect.connections;
    if(t.effect.cultivation) gameState.cultivation += t.effect.cultivation;
    if(t.effect.comprehension) gameState.comprehension += t.effect.comprehension;
    if(t.effect.karma) gameState.karma += t.effect.karma;
    if(t.effect.qiyun) gameState.qiyun += t.effect.qiyun;
    if(t.effect.constitution) gameState.constitution += t.effect.constitution;
  });
  gameState.sanity = gameState.baseSanity;
  // Filter out locations that can't be birthplaces
  var invalidBirths = ['baiyu_jing','xu_kong','gui_shi','tian_chen','qing_feng','an_ci','zheng_de_si','long_min'];
  var birthLocations = LOCATIONS.filter(function(l){ return invalidBirths.indexOf(l.id) === -1; });
  gameState.location = birthLocations[Math.floor(Math.random()*birthLocations.length)];
  gameState.wealth += Math.floor(gameState.location.wealth/2);

  // Year assignment
  gameState.year = Math.floor(Math.random()*60)-50;

  gameState.visitedLocations.push(gameState.location.id);

  showPanel('born');
  document.getElementById('born-location').textContent = gameState.location.name;
  var genderText = gameState.gender === 'male' ? '男子' : '女子';
  document.getElementById('born-desc').innerHTML =
    '<span style="color:var(--gold)">' + genderText + '</span> · ' +
    gameState.location.desc + ' · 气运: ' +
    (gameState.qiyun > 0 ? '+' + gameState.qiyun : gameState.qiyun);
}

function confirmBorn() {
  showPanel('game');
  document.getElementById('log').innerHTML = '';
  var names = gameState.talents.map(function(t){return '<span class="itm">'+t.name+'</span>';}).join('、');
  var genderName = gameState.gender === 'male' ? '男' : '女';
  addLog('出生于<span class="loc">'+gameState.location.name+'</span>（'+genderName+'）');
  addLog('天赋: '+names);
  addLog('大梁'+(gameState.year<0?'前'+Math.abs(gameState.year):gameState.year)+'年');

  // Explicitly set year/era/location/gender display
  document.getElementById('era-name').textContent = getEraName();
  document.getElementById('year-display').textContent =
    '大梁'+(gameState.year<0?'前'+Math.abs(gameState.year):gameState.year)+'年';
  document.getElementById('current-location').textContent = gameState.location.name;
  document.getElementById('total-runs').textContent = gameState.totalRuns;
  var genderEl = document.getElementById('gender');
  if(genderEl) genderEl.textContent = genderName;

  // Check 天崩开局: all 3 talents are bad/cursed
  var allBad = gameState.talents.every(function(t){ return t.type === 'bad'; });
  if(allBad) unlockAchieve('tianbeng');

  initTooltips();
  updateDisplay();

  // Initialize audio state when game starts
  updateAudioState();

  // Auto-start: game runs automatically from birth
  autoMode = true;
  var btn = document.getElementById('btn-auto');
  btn.classList.add('active');
  btn.textContent = '⏸ 暂停';
  scheduleNext();

  // 启动看门狗：每5秒检测是否卡住
  clearInterval(window._watchdog);
  window._watchdog = setInterval(function(){
    if(autoMode && gameState.alive && !waitingForChoice && !autoTimer) {
      console.warn('watchdog: game stuck detected, resuming');
      scheduleNext();
    }
  }, 3000);
}

// === TOOLTIPS ===
function initTooltips() {
  if(typeof STAT_TOOLTIPS === 'undefined') return;
  var mappings = [
    {sel:'#age', key:'age'}, {sel:'#sanity', key:'sanity'}, {sel:'#cultivation', key:'cultivation'},
    {sel:'#wealth', key:'wealth'}, {sel:'#connections', key:'connections'},
    {sel:'#comprehension', key:'comprehension'}, {sel:'#karma', key:'karma'}, {sel:'#qiyun', key:'qiyun'},
    {sel:'#constitution', key:'constitution'}, {sel:'#faction', key:'faction'}
  ];
  mappings.forEach(function(m){
    var el = document.querySelector(m.sel);
    if(!el || !STAT_TOOLTIPS[m.key]) return;
    // Apply tooltip to parent stat-box or detail-row
    var parent = el.closest('.stat-box') || el.closest('.detail-row');
    if(parent) {
      parent.classList.add('has-tooltip');
      parent.setAttribute('data-tip', STAT_TOOLTIPS[m.key]);
      parent.addEventListener('click', function(e){
        showStatTooltip(e, STAT_TOOLTIPS[m.key]);
      });
    }
  });
}

function showStatTooltip(e, text) {
  var tip = document.getElementById('stat-tooltip');
  if(!tip) return;
  tip.textContent = text;
  tip.classList.add('active');
  // Position near click
  var rect = e.currentTarget.getBoundingClientRect();
  tip.style.top = (rect.bottom + 8) + 'px';
  tip.style.left = Math.min(rect.left, window.innerWidth - 280) + 'px';
  clearTimeout(window._tipTimer);
  window._tipTimer = setTimeout(function(){ tip.classList.remove('active'); }, 3000);
}

// === REALM & ERA ===
// 修为瓶颈函数：修为越高，从事件获得的修为越少
function applyCultResistance(gain) {
  if(gain <= 0) return gain; // 负值不做修改
  var cult = gameState.cultivation;
  var ratio = 1.0;
  if(cult >= 200) ratio = 0.10;       // 大乘以上: 只获得10%
  else if(cult >= 150) ratio = 0.15;   // 化神: 15%
  else if(cult >= 100) ratio = 0.20;   // 元婴: 20%
  else if(cult >= 60) ratio = 0.30;    // 金丹: 30%
  else if(cult >= 30) ratio = 0.50;    // 筑基: 50%
  else if(cult >= 10) ratio = 0.70;    // 练气: 70%
  var result = Math.max(1, Math.round(gain * ratio));
  // 有悟性加成：高悟性减缓瓶颈
  if(gameState.comprehension >= 60) result = Math.max(result, Math.round(gain * ratio * 1.2));
  return result;
}

function getRealmName(c) {
  if(c>=400) return '造化';
  if(c>=300) return '大傩';
  if(c>=200) return '大乘';
  if(c>=150) return '化神';
  if(c>=100) return '元婴';
  if(c>=60) return '金丹';
  if(c>=30) return '筑基';
  if(c>=10) return '练气';
  if(c>=3) return '锻体';
  return '凡人';
}

function getEraName() {
  var y = gameState.year;
  if(y<-500) return '远古';
  if(y<-100) return '乱世';
  if(y<-10) return '邪道横行';
  if(y<1) return '清风观之变';
  if(y<5) return '妖邪四起';
  if(y<15) return '坐忘道之乱';
  if(y<25) return '龙脉异动';
  if(y<35) return '天降异象';
  if(y<50) return '天地巨变';
  return '太平年间';
}

// === LIFESPAN BY CULTIVATION ===
function getMaxAge() {
  var base = 70;
  if(gameState.talents.find(function(t){return t.id==='shou_xing';})) base = 90;
  if(gameState.talents.find(function(t){return t.id==='duan_ming';})) base -= 20;
  // 体魄影响：每10点体魄增加5年寿命
  var constitutionBonus = Math.floor(gameState.constitution / 10) * 5;
  base += constitutionBonus;
  var c = gameState.cultivation;
  if(c>=400) return 1200;
  if(c>=300) return 800;
  if(c>=200) return 500;
  if(c>=150) return 300;
  if(c>=100) return 200;
  if(c>=60) return 150;
  if(c>=30) return 120;
  if(c>=10) return Math.max(base, 85);
  if(c>=3) return Math.max(base, 80);
  return base;
}

// === NEXT YEAR ===
function nextYear() {
  if(!gameState.alive) return;
  if(waitingForChoice) return;
  try {
  // 90岁后年岁跨度随机增大，修为越高跨度越大
  // 但有重大事件的年头不会被跳过（先试算事件池）
  var ageStep = 1;
  if(gameState.age >= 90) {
    var cultLevel = gameState.cultivation;
    if(cultLevel >= 400) ageStep = Math.floor(Math.random() * 30) + 10; // 造化: 10-39年
    else if(cultLevel >= 300) ageStep = Math.floor(Math.random() * 20) + 5; // 大傩: 5-24年
    else if(cultLevel >= 200) ageStep = Math.floor(Math.random() * 15) + 3; // 大乘: 3-17年
    else if(cultLevel >= 150) ageStep = Math.floor(Math.random() * 10) + 2; // 化神: 2-11年
    else if(cultLevel >= 100) ageStep = Math.floor(Math.random() * 7) + 2; // 元婴: 2-8年
    else if(cultLevel >= 60) ageStep = Math.floor(Math.random() * 5) + 1; // 金丹: 1-5年
    else ageStep = Math.floor(Math.random() * 3) + 1; // 其他: 1-3年
    // 如果跨度>1，检查中间是否有重大事件（CANONICAL_EVENTS/RANK_EVENTS/XINPAN_EVENTS）
    // 若有则缩减到该事件年龄
    if(ageStep > 1) {
      var nextAge = gameState.age + ageStep;
      var nextYear = gameState.year + ageStep;
      var hasImportant = false;
      for(var step=1; step<ageStep; step++) {
        var testAge = gameState.age + step;
        var testYear = gameState.year + step;
        // 检查CANONICAL_EVENTS
        if(typeof CANONICAL_EVENTS !== 'undefined') {
          hasImportant = CANONICAL_EVENTS.some(function(ce){
            if(ce.trigger) {
              if(ce.trigger.minAge !== undefined && ce.trigger.maxAge !== undefined) {
                if(testAge >= ce.trigger.minAge && testAge <= ce.trigger.maxAge) return true;
              }
              if(ce.trigger.yearMin !== undefined && ce.trigger.yearMax !== undefined) {
                if(testYear >= ce.trigger.yearMin && testYear <= ce.trigger.yearMax) return true;
              }
            }
            return false;
          });
        }
        // 检查XINPAN_EVENTS
        if(!hasImportant && typeof XINPAN_EVENTS !== 'undefined' && gameState.xinpan) {
          hasImportant = XINPAN_EVENTS.some(function(xe){
            if(xe.xinpanReq && xe.xinpanReq !== gameState.xinpan) return false;
            if(xe.trigger && xe.trigger.minAge !== undefined) {
              if(testAge >= xe.trigger.minAge && testAge <= (xe.trigger.maxAge||999)) return true;
            }
            return false;
          });
        }
        // 检查CULTIVATION_TIER_EVENTS（突破事件）
        if(!hasImportant && typeof CULTIVATION_TIER_EVENTS !== 'undefined') {
          hasImportant = CULTIVATION_TIER_EVENTS.some(function(ce){
            if(ce.cultReq && gameState.cultivation >= ce.cultReq.min && gameState.cultivation <= ce.cultReq.max) return true;
            return false;
          });
        }
        if(hasImportant) {
          ageStep = step;
          break;
        }
      }
    }
  }
  gameState.age += ageStep; gameState.year += ageStep;
  gameState.lastAgeStep = ageStep;

  // Cultivation gain - 修为提升极难，且有瓶颈阻碍
  // 6岁以下不可能有修为增长
  // 修为越高，自然提升概率越低（瓶颈效应）
  var compBonus = Math.floor(gameState.comprehension / 100); // 悟性影响很小，最多+1
  var cultGain = 0;
  if(gameState.age >= 7) {
  // 基础概率随修为递减：凡人2%, 练气1.5%, 筑基1%, 金丹0.5%, 元婴0.2%, 化神+几乎0
  var baseCultChance = 0.02;
  if(gameState.cultivation >= 150) baseCultChance = 0.005;
  else if(gameState.cultivation >= 100) baseCultChance = 0.008;
  else if(gameState.cultivation >= 60) baseCultChance = 0.01;
  else if(gameState.cultivation >= 30) baseCultChance = 0.012;
  else if(gameState.cultivation >= 10) baseCultChance = 0.015;
  var hasCultivationChance = Math.random() < baseCultChance;

  if (hasCultivationChance) {
    cultGain = Math.floor(Math.random() * 2) + compBonus;
    // 天赋加成（但仍需要有机缘才能触发）
    if(gameState.talents.find(function(t){return t.id==='dao_xian';})) cultGain += 1;
    if(gameState.talents.find(function(t){return t.id==='xian_gu';})) cultGain += 1;
    if(gameState.talents.find(function(t){return t.id==='wu_xing';})) cultGain += 1;
  }
  if(gameState.faction!=='none' && FACTIONS[gameState.faction]) {
    var fb = FACTIONS[gameState.faction].bonus;
    // 门派修为加成大幅削减，且高修为时减弱
    if(fb.cultivation) {
      var factionCultBonus = Math.floor(fb.cultivation / 5);
      if(gameState.cultivation >= 60) factionCultBonus = Math.max(0, factionCultBonus - 1);
      if(Math.random() < 0.5) cultGain += factionCultBonus; // 50%概率才触发
    }
    if(fb.wealth) gameState.wealth += Math.floor(fb.wealth/4);
    if(fb.connections) gameState.connections += Math.floor(fb.connections/4);
    if(fb.sanity && gameState.talents.find(function(t){return t.id==='xinsu';})) gameState.sanity += fb.sanity;
    if(fb.comprehension) gameState.comprehension += fb.comprehension;
    if(fb.qiyun) gameState.qiyun += fb.qiyun;
    if(fb.karma) gameState.karma += fb.karma;
    if(fb.constitution) gameState.constitution += fb.constitution;
  }

  // Ancient person cultivation bonus

  // Faction rank progression
  if(gameState.faction !== 'none' && FACTIONS[gameState.faction] && FACTIONS[gameState.faction].rankReqs) {
    var fData = FACTIONS[gameState.faction];
    var curRank = gameState.factionRank || 0;
    if(curRank < fData.rankReqs.length - 1) {
      var nextReq = fData.rankReqs[curRank + 1];
      if(gameState.cultivation >= nextReq && gameState.age >= (fData.rankAgeReqs ? fData.rankAgeReqs[curRank+1] || 0 : 0)) {
        gameState.factionRank = curRank + 1;
        var newRankName = fData.ranks[gameState.factionRank];
        addLog('你在<span class="fac">' + fData.name + '</span>中晋升为<span class="itm">' + newRankName + '</span>！');
        // Rank-up bonus
        gameState.connections += 5;
        gameState.cultivation += 3;
        gameState.qiyun += 2;
      }
    }
  }

  // 散修 bonus: no faction but has experience, self-reliance (reduced)
  var isSanxiu = gameState.faction === 'none' && gameState.factionHistory.length > 0;
  if(isSanxiu) {
    if(Math.random() < 0.3) cultGain += 1; // 散修自悟概率降低
    if(Math.random() < 0.05) gameState.comprehension += 1; // 散修更善于独立思考
  }
  } // end if(gameState.age >= 7) - 6岁以下无修为增长

  gameState.cultivation += cultGain;

  // Bad talent hidden positive effects (small yearly bonuses - reduced)
  if(gameState.talents.find(function(t){return t.id==='ji_bing';}) && Math.random()<0.06) { gameState.cultivation += 1; }
  if(gameState.talents.find(function(t){return t.id==='pin_kun';}) && Math.random()<0.08) { gameState.wealth += 3; }
  if(gameState.talents.find(function(t){return t.id==='wu_qin';}) && gameState.age>=12 && Math.random()<0.3) { gameState.cultivation += 1; }
  if(gameState.talents.find(function(t){return t.id==='yu_ben';}) && Math.random()<0.10) { gameState.connections += 1; }
  if(gameState.talents.find(function(t){return t.id==='e_meng';}) && Math.random()<0.05) { gameState.cultivation += 2; }
  if(gameState.talents.find(function(t){return t.id==='du_zhai';}) && Math.random()<0.08) { gameState.connections += 2; }
  if(gameState.talents.find(function(t){return t.id==='chou_lou';}) && Math.random()<0.06) { gameState.cultivation += 1; }
  if(gameState.talents.find(function(t){return t.id==='sha_qi';}) && Math.random()<0.06) { gameState.cultivation += 1; }
  if(gameState.talents.find(function(t){return t.id==='mo_ying';}) && Math.random()<0.05) { gameState.cultivation += 2; }
  if(gameState.talents.find(function(t){return t.id==='can_ji';}) && Math.random()<0.06) { gameState.cultivation += 1; }
  if(gameState.talents.find(function(t){return t.id==='zai_min';}) && Math.random()<0.06) { gameState.cultivation += 1; }
  if(gameState.talents.find(function(t){return t.id==='bai_bing';}) && Math.random()<0.05) { gameState.cultivation += 1; }
  // New talent yearly effects
  if(gameState.talents.find(function(t){return t.id==='ye_zhang';}) && Math.random()<0.06) { gameState.cultivation += 1; }
  if(gameState.talents.find(function(t){return t.id==='ti_ruo';}) && Math.random()<0.05) { gameState.comprehension += 1; }
  // Qiyun-focused talent effects
  if(gameState.talents.find(function(t){return t.id==='tian_yun';}) && Math.random()<0.12) { gameState.qiyun += 1; gameState.wealth += 2; }
  if(gameState.talents.find(function(t){return t.id==='zhuan_yun';}) && Math.random()<0.08) { gameState.qiyun += 1; }
  if(gameState.talents.find(function(t){return t.id==='po_yun';}) && Math.random()<0.06) { gameState.qiyun -= 1; gameState.cultivation += 1; }

  // Good talent yearly effects (影响他人和自身)
  if(gameState.talents.find(function(t){return t.id==='fu_gui';})) {
    if(Math.random()<0.08) gameState.wealth += 3; // 家底丰厚
    if(Math.random()<0.05) gameState.connections += 1; // 有钱好办事
  }
  if(gameState.talents.find(function(t){return t.id==='ji_xing';})) {
    // 逢凶化吉——每年有概率在危难中恢复属性
    if(gameState.constitution < 30 && Math.random()<0.10) { gameState.constitution += 3; }
    if(gameState.sanity < 30 && Math.random()<0.08) { gameState.sanity = Math.min(120, gameState.sanity + 5); }
  }
  if(gameState.talents.find(function(t){return t.id==='mei_mao';})) {
    if(Math.random()<0.06) gameState.connections += 1; // 美貌引来更多人
    if(Math.random()<0.03) gameState.wealth += 2; // 外表优势
  }
  if(gameState.talents.find(function(t){return t.id==='kou_cai';})) {
    if(Math.random()<0.08) gameState.connections += 2; // 能说会道
    if(Math.random()<0.04) gameState.karma += 1; // 劝人行善
  }
  if(gameState.talents.find(function(t){return t.id==='gui_ren';})) {
    // 贵人天命——低概率获得机缘
    if(Math.random()<0.05) { gameState.qiyun += 2; gameState.connections += 2; }
  }
  if(gameState.talents.find(function(t){return t.id==='fu_yuan';})) {
    // 福缘——善事更容易回报
    if(gameState.karma > 10 && Math.random()<0.06) { gameState.qiyun += 1; }
  }
  if(gameState.talents.find(function(t){return t.id==='duo_mou';})) {
    if(Math.random()<0.05) gameState.comprehension += 1; // 善于筹划
  }
  if(gameState.talents.find(function(t){return t.id==='shou_xing';})) {
    // 长寿天命——延缓衰老
    if(gameState.age > 60 && Math.random()<0.15) gameState.constitution = Math.min(100, gameState.constitution + 1);
  }
  if(gameState.talents.find(function(t){return t.id==='jian_kang';})) {
    // 健康体魄自然维持
    if(gameState.constitution < 60 && Math.random()<0.10) gameState.constitution += 1;
  }
  // New novel-based talent yearly effects
  if(gameState.talents.find(function(t){return t.id==='tian_sha';}) && Math.random()<0.05) { gameState.connections -= 2; gameState.cultivation += 1; }
  if(gameState.talents.find(function(t){return t.id==='shi_yi';}) && Math.random()<0.04) { gameState.comprehension += 2; } // 前世记忆闪回
  if(gameState.talents.find(function(t){return t.id==='gui_ying';}) && Math.random()<0.05) { gameState.cultivation += 2; gameState.sanity = Math.max(0, gameState.sanity - 2); }
  if(gameState.talents.find(function(t){return t.id==='fan_gu';}) && Math.random()<0.06) { gameState.comprehension += 1; }
  if(gameState.talents.find(function(t){return t.id==='duan_ming';}) && Math.random()<0.08) { gameState.constitution -= 1; } // 命格短促
  if(gameState.talents.find(function(t){return t.id==='ling_gen';}) && Math.random()<0.08) { gameState.cultivation += 1; }
  if(gameState.talents.find(function(t){return t.id==='yi_xin';}) && Math.random()<0.08) { gameState.constitution += 1; }

  // === 心素深度影响：一生受两界裂隙折磨 ===
  if(gameState.talents.find(function(t){return t.id==='xinsu';})) {
    // 身体是药引——每年有概率被人盯上，失去人脉或体魄
    if(Math.random()<0.08) { gameState.connections = Math.max(-50, gameState.connections - 2); }
    if(gameState.age > 15 && Math.random()<0.05) { gameState.constitution = Math.max(0, gameState.constitution - 1); } // 被人取材
    // 两界闪烁——随机神志波动，且修为越高波动越大
    var xinsuFlicker = Math.floor(Math.random()*5) - 2;
    if(gameState.cultivation > 60) xinsuFlicker = Math.floor(Math.random()*9) - 4;
    if(Math.random() < 0.25) gameState.sanity = Math.max(0, Math.min(120, gameState.sanity + xinsuFlicker));
    // 以假修真——低概率获得修为但必定掉神志
    if(gameState.cultivation >= 30 && Math.random()<0.06) {
      gameState.cultivation += 2;
      gameState.sanity = Math.max(0, gameState.sanity - 3);
    }
    // 幻觉导致做出错误判断——低概率失去金银或人脉
    if(Math.random()<0.06) { gameState.wealth = Math.max(-100, gameState.wealth - 3); }
    // 先天一炁吸引邪祟
    if(gameState.age > 20 && Math.random()<0.04) { gameState.qiyun -= 1; }
  }

  // === 心浊深度影响：遗忘吞噬一切 ===
  if(gameState.talents.find(function(t){return t.id==='xin_zhuo';})) {
    // 基础遗忘：每年高概率遗忘各种东西
    if(Math.random()<0.15) { gameState.connections = Math.max(-50, gameState.connections - 2); } // 忘记朋友
    if(gameState.age > 20 && Math.random()<0.12) { gameState.wealth = Math.max(-80, gameState.wealth - 5); } // 忘记藏钱的地方
    if(gameState.age > 30 && Math.random()<0.10) { gameState.comprehension = Math.max(0, gameState.comprehension - 1); } // 忘记领悟的道理
    if(gameState.age > 40 && Math.random()<0.08) { gameState.karma = Math.min(100, Math.max(-100, gameState.karma + (Math.random()<0.5?1:-1))); } // 因果混乱
    // 空间之力被动触发——随机"藏"东西
    if(Math.random()<0.10) {
      var lostStat = Math.floor(Math.random()*3);
      if(lostStat===0) gameState.wealth = Math.max(-80, gameState.wealth - 3);
      else if(lostStat===1) gameState.connections = Math.max(-50, gameState.connections - 1);
      else gameState.constitution = Math.max(0, gameState.constitution - 1);
    }
    // 空间之力带来的修为——遗忘换力量
    if(Math.random()<0.10) { gameState.cultivation += 2; }
    // 头发被觊觎
    if(gameState.age > 15 && Math.random()<0.04) { gameState.connections -= 1; }
    // 年龄越大遗忘越严重
    if(gameState.age > 50 && Math.random()<0.15) { gameState.sanity = Math.max(0, gameState.sanity - 2); }
  }

  // 心浊：随机遗忘（已整合到上面的深度影响中）
  // 白化病：外貌引来的关注，白莲教好感，但也被觊觎
  if(gameState.talents.find(function(t){return t.id==='bai_hua';})) {
    if(Math.random()<0.08) { gameState.connections -= 1; } // 外人排斥
    if(gameState.faction === 'bailian' && Math.random()<0.10) { gameState.karma += 2; gameState.connections += 2; } // 白莲教内受尊崇
  }

  // Constitution natural drift (age affects constitution, cultivation slows aging)
  var agingReduction = Math.floor(gameState.cultivation / 50); // high cultivation slows aging
  if(gameState.age > 50 + agingReduction * 10) gameState.constitution -= 1;
  if(gameState.age > 70 + agingReduction * 15) gameState.constitution -= 1;
  // Comprehension slow growth from experience
  if(gameState.age > 10 && Math.random() < 0.15) gameState.comprehension += 1;

  // === STAT INTERACTION EFFECTS ===
  // High comprehension accelerates cultivation (reduced)
  if(gameState.comprehension >= 60 && Math.random() < 0.05) gameState.cultivation += 1;
  if(gameState.comprehension >= 80 && Math.random() < 0.03) gameState.cultivation += 1;
  // Low constitution hinders cultivation
  if(gameState.constitution < 20 && Math.random() < 0.15) gameState.cultivation -= 1;
  // High karma slowly improves qiyun
  if(gameState.karma > 30 && Math.random() < 0.08) gameState.qiyun += 1;
  // Low karma slowly worsens qiyun
  if(gameState.karma < -30 && Math.random() < 0.08) gameState.qiyun -= 1;
  // High connections slowly increase wealth (social opportunities)
  if(gameState.connections > 30 && Math.random() < 0.10) gameState.wealth += 3;
  // High cultivation maintains constitution (body refinement)
  if(gameState.cultivation >= 60 && gameState.constitution < 60 && Math.random() < 0.08) gameState.constitution += 1;
  // Very low qiyun can harm constitution (unlucky accidents)
  if(gameState.qiyun < -40 && Math.random() < 0.05) gameState.constitution -= 1;
  // High qiyun occasionally grants wealth (fortune)
  if(gameState.qiyun > 40 && Math.random() < 0.08) gameState.wealth += 5;
  // Low wealth can decrease connections (people avoid the poor)
  if(gameState.wealth < -30 && Math.random() < 0.08) gameState.connections -= 1;
  // Faction membership slowly builds connections
  if(gameState.faction !== 'none' && Math.random() < 0.10) gameState.connections += 1;
  // Qiyun slowly returns toward 0 (natural balance)
  if(gameState.qiyun > 5 && Math.random() < 0.05) gameState.qiyun -= 1;
  if(gameState.qiyun < -5 && Math.random() < 0.05) gameState.qiyun += 1;
  // Karma slowly returns toward 0
  if(gameState.karma > 5 && Math.random() < 0.03) gameState.karma -= 1;
  if(gameState.karma < -5 && Math.random() < 0.03) gameState.karma += 1;
  // Clamp values
  gameState.comprehension = Math.max(0, Math.min(100, gameState.comprehension));
  gameState.karma = Math.max(-100, Math.min(100, gameState.karma));
  gameState.qiyun = Math.max(-100, Math.min(100, gameState.qiyun));
  gameState.constitution = Math.max(0, Math.min(100, gameState.constitution));

  // Track bingjia blood_warrior achievement
  if(gameState.faction === 'bingjia' && gameState.constitution < 10) gameState._bingjiaLowConst = true;
  if(gameState._bingjiaLowConst && gameState.constitution >= 50) unlockAchieve('blood_warrior');

  // === XINPAN (心蟠) PASSIVE EFFECTS ===
  if(gameState.xinpan) {
    var xp = gameState.xinpan;
    if(xp === 'jizai') {
      // 季灾心蟠: 迷惘天道 - 修为缓增, 悟性增, 神志波动
      if(Math.random()<0.15) gameState.cultivation += 2;
      if(Math.random()<0.10) gameState.comprehension = Math.min(100, gameState.comprehension + 1);
      if(isXinsu && Math.random()<0.20) gameState.sanity = Math.max(0, Math.min(120, gameState.sanity + (Math.floor(Math.random()*7) - 3)));
    } else if(xp === 'doumo') {
      // 斗姥心蟠: 谎言天道 - 修为增, 人脉增, 神志降, 因果不稳
      if(Math.random()<0.12) gameState.cultivation += 2;
      if(Math.random()<0.10) gameState.connections += 1;
      if(isXinsu && Math.random()<0.15) gameState.sanity = Math.max(0, gameState.sanity - 1);
      if(Math.random()<0.08) gameState.karma -= 1;
    } else if(xp === 'baxi') {
      // 巴虺心蟠: 痛苦天道 - 修为增, 体魄自回复, 神志降
      if(Math.random()<0.12) gameState.cultivation += 2;
      if(gameState.constitution < 80 && Math.random()<0.15) gameState.constitution += 1;
      if(isXinsu && Math.random()<0.12) gameState.sanity = Math.max(0, gameState.sanity - 1);
    } else if(xp === 'wusheng') {
      // 无生老母心蟠: 慈悲天道 - 因果增, 人脉增, 修为缓增, 神志稳
      if(Math.random()<0.10) gameState.cultivation += 1;
      if(Math.random()<0.12) gameState.karma = Math.min(100, gameState.karma + 1);
      if(Math.random()<0.10) gameState.connections += 1;
      if(isXinsu && Math.random()<0.10) gameState.sanity = Math.min(120, gameState.sanity + 1);
    } else if(xp === 'panchi') {
      // 蟠螭心蟠: 秩序天道 - 气运增, 修为增, 体魄稳, 属性回归平衡
      if(Math.random()<0.12) gameState.cultivation += 2;
      if(Math.random()<0.10) gameState.qiyun = Math.min(100, gameState.qiyun + 1);
      if(gameState.constitution < 70 && Math.random()<0.10) gameState.constitution += 1;
      // 秩序之力使极端属性向中间靠拢
      if(gameState.karma > 50 && Math.random()<0.08) gameState.karma -= 1;
      if(gameState.karma < -50 && Math.random()<0.08) gameState.karma += 1;
    } else if(xp === 'yuer') {
      // 于儿心蟠: 法教至高神 - 修为大增, 因果降, 神志降, 体魄增
      if(Math.random()<0.15) gameState.cultivation += 3;
      if(Math.random()<0.10) gameState.karma = Math.max(-100, gameState.karma - 1);
      if(isXinsu && Math.random()<0.15) gameState.sanity = Math.max(0, gameState.sanity - 2);
      if(Math.random()<0.08) gameState.constitution = Math.min(100, gameState.constitution + 1);
    } else if(xp === 'sanqing') {
      // 三清心蟠: 秘密天道 - 悟性大增, 修为增, 因果不稳(窥见太多秘密)
      if(Math.random()<0.12) gameState.cultivation += 2;
      if(Math.random()<0.15) gameState.comprehension = Math.min(100, gameState.comprehension + 2);
      if(isXinsu && Math.random()<0.15) gameState.sanity = Math.max(0, gameState.sanity - 2);
      if(Math.random()<0.08) gameState.karma += (Math.random()<0.5 ? 1 : -1);
    }
  }

  // Faction betrayal risk: if factionHistory > 1 and currently in a faction, risk events
  var betrayalRisk = gameState.factionHistory.length > 1 && gameState.faction !== 'none';
  if(betrayalRisk && Math.random() < 0.15) {
    // 15% chance per year of betrayal consequences
    gameState.constitution -= 2;
    gameState.sanity = Math.max(0, gameState.sanity - 3);
  }

  // Sanity drift - ONLY for xinsu talent holders
  var isXinsu = gameState.talents.find(function(t){return t.id==='xinsu';});
  if(isXinsu) {
    var sanityDrift = Math.floor(Math.random()*6) - 3;
    if(gameState.talents.find(function(t){return t.id==='e_meng';})) sanityDrift -= 2;
    if(gameState.talents.find(function(t){return t.id==='mo_ying';})) sanityDrift -= 1;
    gameState.sanity = Math.max(0, Math.min(120, gameState.sanity + sanityDrift));
  }

  // Pick event
  var eventPool;
  if(gameState.age < 10) eventPool = [].concat(CHILDHOOD_EVENTS);
  else if(gameState.age < 18) eventPool = [].concat(CHILDHOOD_EVENTS.slice(-4), TEENAGE_EVENTS);
  else eventPool = [].concat(ADULT_EVENTS);

  // Filter out events that require a faction when player has none
  eventPool = eventPool.filter(function(ev){
    if(ev.factionReq === true && gameState.faction === 'none') return false;
    if(ev.factionReq && ev.factionReq !== true && gameState.faction !== ev.factionReq) return false;
    return true;
  });

  // Filter out faction join events for factions already in factionHistory
  // and reduce faction join event probability by 70%
  eventPool = eventPool.filter(function(ev){
    // Check if this event has choices with factionJoin
    if(!ev.choices) return true;
    var hasFactionJoin = ev.choices.some(function(c){ return c.factionJoin; });
    if(!hasFactionJoin) return true;
    
    // For events with factionJoin, keep only choices for factions not in factionHistory
    // This is handled in showEvent when displaying choices
    return true;
  });

  // Filter choices in events to remove factionJoin options for already-joined factions
  eventPool.forEach(function(ev){
    if(ev.choices) {
      ev.choices = ev.choices.filter(function(c){
        if(!c.factionJoin) return true;
        // Skip if already in this faction's history
        return !gameState.factionHistory.includes(c.factionJoin);
      });
    }
  });

  // Filter out events that have no valid choices after filtering
  eventPool = eventPool.filter(function(ev){
    return !ev.choices || ev.choices.length > 0;
  });

  // Filter out gender-mismatched events and check trigger conditions on base events
  eventPool = eventPool.filter(function(ev){
    if(ev.genderReq && ev.genderReq !== gameState.gender) return false;
    if(ev.locReq && !gameState.visitedLocations.includes(ev.locReq)) return false;
    if(ev.noTalent && gameState.talents.find(function(t){return t.id===ev.noTalent;})) return false;
    if(ev.check && !gameState.talents.find(function(t){return t.id===ev.check;})) return false;
    // NPC/flag条件过滤
    if(ev.flagReq && !gameState.flags[ev.flagReq]) return false;
    if(ev.flagReq2 && !gameState.flags[ev.flagReq2]) return false;
    if(ev.noFlag && gameState.flags[ev.noFlag]) return false;
    if(ev.noFlag2 && gameState.flags[ev.noFlag2]) return false;
    if(ev.npcReq && !gameState.npcMet[ev.npcReq]) return false;
    if(ev.npcFavorMin && (!gameState.npcMet[ev.npcReq] || gameState.npcMet[ev.npcReq].favor < ev.npcFavorMin)) return false;
    if(ev.trigger) {
      if(ev.trigger.minAge && gameState.age < ev.trigger.minAge) return false;
      if(ev.trigger.maxAge && gameState.age > ev.trigger.maxAge) return false;
      if(ev.trigger.cultivation && gameState.cultivation < ev.trigger.cultivation) return false;
      if(ev.trigger.constitution && gameState.constitution < ev.trigger.constitution) return false;
    }
    return true;
  });

  // Add special events
  SPECIAL_EVENTS.forEach(function(se){
    if(se.genderReq && se.genderReq !== gameState.gender) return;
    // Filter factionJoin choices for already-joined factions
    if(se.choices) {
      se.choices = se.choices.filter(function(c){
        if(!c.factionJoin) return true;
        return !gameState.factionHistory.includes(c.factionJoin);
      });
    }
    // Skip events with no valid choices after filtering
    if(se.choices && se.choices.length === 0) return;
    
    if(!se.trigger) { eventPool.push(se); return; }
    if(gameState.age >= (se.trigger.minAge||0) && gameState.age <= (se.trigger.maxAge||999)) {
      if(!se.trigger.cultivation || gameState.cultivation >= se.trigger.cultivation) {
        if(!se.trigger.constitution || gameState.constitution >= se.trigger.constitution) {
          // Check year constraints for timeline-bound events
          if(se.trigger.yearMin !== undefined && gameState.year < se.trigger.yearMin) return;
          if(se.trigger.yearMax !== undefined && gameState.year > se.trigger.yearMax) return;
          if(!se.check || gameState.talents.find(function(t){return t.id===se.check;})) {
            // Check qiyun requirements
            if(se.qiyunCheck) {
              if(se.qiyunCheck.max !== undefined && gameState.qiyun > se.qiyunCheck.max) return;
              if(se.qiyunCheck.min !== undefined && gameState.qiyun < se.qiyunCheck.min) return;
            }
            eventPool.push(se);
          }
        }
      }
    }
  });

  // Add ancient events
  if(gameState.year < -100) {
    ANCIENT_EVENTS.forEach(function(ae){
      if(!ae.trigger) return;
      if(gameState.age >= ae.trigger.minAge && gameState.age <= (ae.trigger.maxAge||999)) {
        if(!ae.trigger.maxYear || gameState.year <= ae.trigger.maxYear) {
          eventPool.push(ae);
        }
      }
    });
  }

  // Add faction events
  if(gameState.faction!=='none' && FACTION_EVENTS[gameState.faction]) {
    eventPool.push.apply(eventPool, FACTION_EVENTS[gameState.faction]);
  }

  // Add karma events
  if(typeof KARMA_EVENTS !== 'undefined') {
    KARMA_EVENTS.forEach(function(ke){
      if(!ke.karmaReq) { eventPool.push(ke); return; }
      if(ke.karmaReq.min !== undefined && gameState.karma < ke.karmaReq.min) return;
      if(ke.karmaReq.max !== undefined && gameState.karma > ke.karmaReq.max) return;
      if(ke.karmaReq.abs !== undefined && Math.abs(gameState.karma) < ke.karmaReq.abs) return;
      eventPool.push(ke);
    });
  }

  // Add qiyun events
  if(typeof QIYUN_EVENTS !== 'undefined') {
    QIYUN_EVENTS.forEach(function(ke){
      if(!ke.qiyunReq) { eventPool.push(ke); return; }
      if(ke.qiyunReq.min !== undefined && gameState.qiyun < ke.qiyunReq.min) return;
      if(ke.qiyunReq.max !== undefined && gameState.qiyun > ke.qiyunReq.max) return;
      if(ke.qiyunReq.abs !== undefined && Math.abs(gameState.qiyun) < ke.qiyunReq.abs) return;
      eventPool.push(ke);
    });
  }

  // Add 散修 events (unaffiliated with faction history, includes former dual cult events)
  if(typeof SANXIU_EVENTS !== 'undefined' && (gameState.faction === 'none' && gameState.factionHistory.length > 0) || gameState.factionHistory.length > 1) {
    SANXIU_EVENTS.forEach(function(se){
      if(se.trigger) {
        if(se.trigger.minAge && gameState.age < se.trigger.minAge) return;
        if(se.trigger.cultivation && gameState.cultivation < se.trigger.cultivation) return;
        if(se.trigger.factionHistoryMin && gameState.factionHistory.length < se.trigger.factionHistoryMin) return;
      }
      // Skip faction-betrayal events if currently in a faction (those need faction === 'none' unless factionHistoryMin is set)
      if(!se.trigger || !se.trigger.factionHistoryMin) {
        if(gameState.faction !== 'none') return;
        if(gameState.factionHistory.length === 0) return;
      }
      eventPool.push(se);
    });
  }

  // Add romance events
  if(typeof ROMANCE_EVENTS !== 'undefined' && gameState.age >= 16) {
    ROMANCE_EVENTS.forEach(function(re){
      if(re.genderReq && re.genderReq !== gameState.gender) return;
      if(re.trigger) {
        if(re.trigger.minAge && gameState.age < re.trigger.minAge) return;
        if(re.trigger.cultivation && gameState.cultivation < re.trigger.cultivation) return;
      }
      if(re.flagReq && !gameState.flags[re.flagReq]) return;
      if(re.flagReq2 && !gameState.flags[re.flagReq2]) return;
      if(re.noFlag && gameState.flags[re.noFlag]) return;
      if(re.noFlag2 && gameState.flags[re.noFlag2]) return;
      if(re.factionReq === true && gameState.faction === 'none') return;
      eventPool.push(re);
    });
  }

  // Add shuangxiu (dual cultivation) events - 五智如来法门
  if(typeof SHUANGXIU_EVENTS !== 'undefined' && gameState.age >= 18) {
    SHUANGXIU_EVENTS.forEach(function(se){
      if(se.genderReq && se.genderReq !== gameState.gender) return;
      if(se.trigger) {
        if(se.trigger.minAge && gameState.age < se.trigger.minAge) return;
        if(se.trigger.cultivation && gameState.cultivation < se.trigger.cultivation) return;
      }
      if(se.flagReq && !gameState.flags[se.flagReq]) return;
      if(se.flagReq2 && !gameState.flags[se.flagReq2]) return;
      if(se.noFlag && gameState.flags[se.noFlag]) return;
      eventPool.push(se);
    });
  }

  // Add crossworld events (大齐·天陈·龙脉)
  if(typeof CROSSWORLD_EVENTS !== 'undefined' && gameState.age >= 15) {
    CROSSWORLD_EVENTS.forEach(function(cwe){
      if(cwe.genderReq && cwe.genderReq !== gameState.gender) return;
      if(cwe.trigger) {
        if(cwe.trigger.minAge && gameState.age < cwe.trigger.minAge) return;
        if(cwe.trigger.maxAge && gameState.age > cwe.trigger.maxAge) return;
        if(cwe.trigger.cultivation && gameState.cultivation < cwe.trigger.cultivation) return;
      }
      if(cwe.flagReq && !gameState.flags[cwe.flagReq]) return;
      if(cwe.flagReq2 && !gameState.flags[cwe.flagReq2]) return;
      if(cwe.noFlag && gameState.flags[cwe.noFlag]) return;
      if(cwe.locReq && !gameState.visitedLocations.includes(cwe.locReq)) return;
      if(cwe.itemReq && !gameState.items.find(function(it){return it.id===cwe.itemReq;})) return;
      if(cwe.check && !gameState.talents.find(function(t){return t.id===cwe.check;})) return;
      eventPool.push(cwe);
    });
  }

  // Add canonical events (major novel events by timeline)
  if(typeof CANONICAL_EVENTS !== 'undefined') {
    CANONICAL_EVENTS.forEach(function(ce){
      if(ce.genderReq && ce.genderReq !== gameState.gender) return;
      if(ce.trigger) {
        if(ce.trigger.minAge !== undefined && gameState.age < ce.trigger.minAge) return;
        if(ce.trigger.maxAge !== undefined && gameState.age > ce.trigger.maxAge) return;
        if(ce.trigger.cultivation !== undefined && gameState.cultivation < ce.trigger.cultivation) return;
        if(ce.trigger.yearMin !== undefined && gameState.year < ce.trigger.yearMin) return;
        if(ce.trigger.yearMax !== undefined && gameState.year > ce.trigger.yearMax) return;
        if(ce.trigger.faction && gameState.faction !== ce.trigger.faction) return;
      }
      if(ce.check && !gameState.talents.find(function(t){return t.id===ce.check;})) return;
      if(ce.locReq && !gameState.visitedLocations.includes(ce.locReq)) return;
      if(ce.flagReq && !gameState.flags[ce.flagReq]) return;
      if(ce.npcReq && !gameState.npcMet[ce.npcReq]) return;
      eventPool.push(ce);
    });
  }

  // Add local stories (birthplace/location-specific events)
  if(typeof LOCAL_STORIES !== 'undefined') {
    LOCAL_STORIES.forEach(function(ls){
      if(ls.locReq && !gameState.visitedLocations.includes(ls.locReq)) return;
      if(ls.genderReq && ls.genderReq !== gameState.gender) return;
      if(ls.trigger) {
        if(ls.trigger.minAge !== undefined && gameState.age < ls.trigger.minAge) return;
        if(ls.trigger.maxAge !== undefined && gameState.age > ls.trigger.maxAge) return;
        if(ls.trigger.cultivation !== undefined && gameState.cultivation < ls.trigger.cultivation) return;
        if(ls.trigger.yearMin !== undefined && gameState.year < ls.trigger.yearMin) return;
        if(ls.trigger.yearMax !== undefined && gameState.year > ls.trigger.yearMax) return;
      }
      if(ls.check && !gameState.talents.find(function(t){return t.id===ls.check;})) return;
      eventPool.push(ls);
    });
  }

  // Add travel/journey events (random encounters while moving between places)
  if(typeof TRAVEL_EVENTS !== 'undefined' && gameState.age >= 12) {
    TRAVEL_EVENTS.forEach(function(te){
      if(te.locReq && !gameState.visitedLocations.includes(te.locReq)) return;
      if(te.trigger) {
        if(te.trigger.minAge && gameState.age < te.trigger.minAge) return;
        if(te.trigger.cultivation && gameState.cultivation < te.trigger.cultivation) return;
      }
      eventPool.push(te);
    });
  }

  // Add rank-up events
  if(typeof RANK_EVENTS !== 'undefined' && gameState.faction !== 'none' && RANK_EVENTS[gameState.faction]) {
    RANK_EVENTS[gameState.faction].forEach(function(re){
      if(re.rankReq !== undefined && (gameState.factionRank || 0) < re.rankReq) return;
      if(re.trigger) {
        if(re.trigger.minAge && gameState.age < re.trigger.minAge) return;
        if(re.trigger.cultivation && gameState.cultivation < re.trigger.cultivation) return;
      }
      eventPool.push(re);
    });
  }

  // Add constitution events
  if(typeof CONSTITUTION_EVENTS !== 'undefined') {
    CONSTITUTION_EVENTS.forEach(function(ce){
      if(ce.constReq) {
        if(ce.constReq.min !== undefined && gameState.constitution < ce.constReq.min) return;
        if(ce.constReq.max !== undefined && gameState.constitution > ce.constReq.max) return;
      }
      if(ce.trigger) {
        if(ce.trigger.minAge && gameState.age < ce.trigger.minAge) return;
        if(ce.trigger.cultivation && gameState.cultivation < ce.trigger.cultivation) return;
      }
      eventPool.push(ce);
    });
  }

  // Add comprehension events
  if(typeof COMPREHENSION_EVENTS !== 'undefined') {
    COMPREHENSION_EVENTS.forEach(function(ce){
      if(ce.compReq) {
        if(ce.compReq.min !== undefined && gameState.comprehension < ce.compReq.min) return;
        if(ce.compReq.max !== undefined && gameState.comprehension > ce.compReq.max) return;
      }
      if(ce.trigger) {
        if(ce.trigger.minAge && gameState.age < ce.trigger.minAge) return;
        if(ce.trigger.cultivation && gameState.cultivation < ce.trigger.cultivation) return;
      }
      eventPool.push(ce);
    });
  }

  // Add wealth events
  if(typeof WEALTH_EVENTS !== 'undefined') {
    WEALTH_EVENTS.forEach(function(we){
      if(we.wealthReq) {
        if(we.wealthReq.min !== undefined && gameState.wealth < we.wealthReq.min) return;
        if(we.wealthReq.max !== undefined && gameState.wealth > we.wealthReq.max) return;
      }
      if(we.trigger) {
        if(we.trigger.minAge && gameState.age < we.trigger.minAge) return;
        if(we.trigger.cultivation && gameState.cultivation < we.trigger.cultivation) return;
      }
      eventPool.push(we);
    });
  }

  // Add connections events
  if(typeof CONNECTIONS_EVENTS !== 'undefined') {
    CONNECTIONS_EVENTS.forEach(function(ce){
      if(ce.connReq) {
        if(ce.connReq.min !== undefined && gameState.connections < ce.connReq.min) return;
        if(ce.connReq.max !== undefined && gameState.connections > ce.connReq.max) return;
      }
      if(ce.trigger) {
        if(ce.trigger.minAge && gameState.age < ce.trigger.minAge) return;
        if(ce.trigger.cultivation && gameState.cultivation < ce.trigger.cultivation) return;
      }
      eventPool.push(ce);
    });
  }

  // Add cultivation breakthrough events
  if(typeof BREAKTHROUGH_EVENTS !== 'undefined') {
    BREAKTHROUGH_EVENTS.forEach(function(be){
      if(be.cultReq) {
        if(be.cultReq.min !== undefined && gameState.cultivation < be.cultReq.min) return;
        if(be.cultReq.max !== undefined && gameState.cultivation > be.cultReq.max) return;
      }
      if(be.trigger) {
        if(be.trigger.minAge && gameState.age < be.trigger.minAge) return;
      }
      eventPool.push(be);
    });
  }

  // Add stat combination events
  if(typeof STAT_COMBO_EVENTS !== 'undefined') {
    STAT_COMBO_EVENTS.forEach(function(se){
      if(se.comboReq) {
        if(se.comboReq.karma_min !== undefined && gameState.karma < se.comboReq.karma_min) return;
        if(se.comboReq.karma_max !== undefined && gameState.karma > se.comboReq.karma_max) return;
        if(se.comboReq.comp_min !== undefined && gameState.comprehension < se.comboReq.comp_min) return;
        if(se.comboReq.comp_max !== undefined && gameState.comprehension > se.comboReq.comp_max) return;
        if(se.comboReq.cult_min !== undefined && gameState.cultivation < se.comboReq.cult_min) return;
        if(se.comboReq.cult_max !== undefined && gameState.cultivation > se.comboReq.cult_max) return;
        if(se.comboReq.qiyun_min !== undefined && gameState.qiyun < se.comboReq.qiyun_min) return;
        if(se.comboReq.qiyun_max !== undefined && gameState.qiyun > se.comboReq.qiyun_max) return;
        if(se.comboReq.wealth_min !== undefined && gameState.wealth < se.comboReq.wealth_min) return;
        if(se.comboReq.wealth_max !== undefined && gameState.wealth > se.comboReq.wealth_max) return;
        if(se.comboReq.conn_min !== undefined && gameState.connections < se.comboReq.conn_min) return;
        if(se.comboReq.conn_max !== undefined && gameState.connections > se.comboReq.conn_max) return;
        if(se.comboReq.const_min !== undefined && gameState.constitution < se.comboReq.const_min) return;
        if(se.comboReq.const_max !== undefined && gameState.constitution > se.comboReq.const_max) return;
        if(se.comboReq.sanity_min !== undefined && gameState.sanity < se.comboReq.sanity_min) return;
        if(se.comboReq.sanity_max !== undefined && gameState.sanity > se.comboReq.sanity_max) return;
      }
      if(se.trigger) {
        if(se.trigger.minAge && gameState.age < se.trigger.minAge) return;
        if(se.trigger.cultivation && gameState.cultivation < se.trigger.cultivation) return;
      }
      if(se.check && !gameState.talents.find(function(t){return t.id===se.check;})) return;
      eventPool.push(se);
    });
  }

  // Add item acquisition events
  if(typeof ITEM_EVENTS !== 'undefined') {
    ITEM_EVENTS.forEach(function(ie){
      // Skip if player already has this item
      if(ie.itemGive && gameState.items.find(function(it){return it.id===ie.itemGive;})) return;
      // Rarity-based probability filter
      var rarityChance = 0.35;
      if(ie.itemRarity === 'uncommon') rarityChance = 0.12;
      else if(ie.itemRarity === 'rare') rarityChance = 0.05;
      else if(ie.itemRarity === 'epic') rarityChance = 0.01;
      else if(ie.itemRarity === 'legendary') rarityChance = 0.002;
      if(Math.random() > rarityChance) return;
      // Standard trigger checks
      if(ie.check && !gameState.talents.find(function(t){return t.id===ie.check;})) return;
      if(ie.flagReq && !gameState.flags[ie.flagReq]) return;
      if(ie.factionReq === true && gameState.faction === 'none') return;
      if(ie.factionReq && ie.factionReq !== true && gameState.faction !== ie.factionReq) return;
      if(ie.locReq && !gameState.visitedLocations.includes(ie.locReq)) return;
      if(ie.trigger) {
        if(ie.trigger.minAge && gameState.age < ie.trigger.minAge) return;
        if(ie.trigger.maxAge && gameState.age > ie.trigger.maxAge) return;
        if(ie.trigger.cultivation && gameState.cultivation < ie.trigger.cultivation) return;
        if(ie.trigger.yearMin !== undefined && gameState.year < ie.trigger.yearMin) return;
        if(ie.trigger.yearMax !== undefined && gameState.year > ie.trigger.yearMax) return;
      }
      eventPool.push(ie);
    });
  }

  // Add item story events (持有道具触发的剧情)
  if(typeof ITEM_STORY_EVENTS !== 'undefined') {
    ITEM_STORY_EVENTS.forEach(function(ise){
      // Check item requirement
      if(ise.itemReq && !gameState.items.find(function(it){return it.id===ise.itemReq;})) return;
      if(ise.check && !gameState.talents.find(function(t){return t.id===ise.check;})) return;
      if(ise.flagReq && !gameState.flags[ise.flagReq]) return;
      if(ise.trigger) {
        if(ise.trigger.minAge && gameState.age < ise.trigger.minAge) return;
        if(ise.trigger.maxAge && gameState.age > ise.trigger.maxAge) return;
        if(ise.trigger.cultivation && gameState.cultivation < ise.trigger.cultivation) return;
      }
      eventPool.push(ise);
    });
  }

  // Add cultivation-tier events
  if(typeof CULTIVATION_TIER_EVENTS !== 'undefined') {

  // Add talent-specific events
  if(typeof TALENT_EVENTS !== 'undefined') {
    TALENT_EVENTS.forEach(function(te){
      if(te.check && !gameState.talents.find(function(t){return t.id===te.check;})) return;
      if(te.trigger) {
        if(te.trigger.minAge && gameState.age < te.trigger.minAge) return;
        if(te.trigger.maxAge && gameState.age > te.trigger.maxAge) return;
        if(te.trigger.cultivation && gameState.cultivation < te.trigger.cultivation) return;
      }
      eventPool.push(te);
    });
  }

  // Add linked events (前后联系事件)
  if(typeof LINKED_EVENTS !== 'undefined') {
    LINKED_EVENTS.forEach(function(le){
      if(le.check && !gameState.talents.find(function(t){return t.id===le.check;})) return;
      if(le.flagReq && !gameState.flags[le.flagReq]) return;
      if(le.npcReq && !gameState.npcMet[le.npcReq]) return;
      if(le.trigger) {
        if(le.trigger.minAge && gameState.age < le.trigger.minAge) return;
        if(le.trigger.maxAge && gameState.age > le.trigger.maxAge) return;
        if(le.trigger.cultivation && gameState.cultivation < le.trigger.cultivation) return;
      }
      eventPool.push(le);
    });
  }

    CULTIVATION_TIER_EVENTS.forEach(function(ce){
      if(ce.cultMin !== undefined && gameState.cultivation < ce.cultMin) return;
      if(ce.cultMax !== undefined && gameState.cultivation > ce.cultMax) return;
      if(ce.factionReq && gameState.faction !== ce.factionReq) return;
      if(ce.locReq && !gameState.visitedLocations.includes(ce.locReq)) return;
      if(ce.trigger) {
        if(ce.trigger.minAge && gameState.age < ce.trigger.minAge) return;
        if(ce.trigger.cultivation && gameState.cultivation < ce.trigger.cultivation) return;
        if(ce.trigger.yearMin !== undefined && gameState.year < ce.trigger.yearMin) return;
        if(ce.trigger.yearMax !== undefined && gameState.year > ce.trigger.yearMax) return;
      }
      if(ce.check && !gameState.talents.find(function(t){return t.id===ce.check;})) return;
      eventPool.push(ce);
    });
  }

  // Add death events
  if(typeof DEATH_EVENTS !== 'undefined') {
    DEATH_EVENTS.forEach(function(de){
      if(de.cultMin !== undefined && gameState.cultivation < de.cultMin) return;
      if(de.cultMax !== undefined && gameState.cultivation > de.cultMax) return;
      if(de.factionReq && gameState.faction !== de.factionReq) return;
      if(de.locReq && !gameState.visitedLocations.includes(de.locReq)) return;
      if(de.karmaMin !== undefined && gameState.karma < de.karmaMin) return;
      if(de.karmaMax !== undefined && gameState.karma > de.karmaMax) return;
      if(de.trigger) {
        if(de.trigger.minAge && gameState.age < de.trigger.minAge) return;
        if(de.trigger.yearMin !== undefined && gameState.year < de.trigger.yearMin) return;
        if(de.trigger.yearMax !== undefined && gameState.year > de.trigger.yearMax) return;
      }
      if(de.check && !gameState.talents.find(function(t){return t.id===de.check;})) return;
      eventPool.push(de);
    });
  }

  // Add era-specific events (world state changes)
  if(typeof ERA_EVENTS !== 'undefined') {

  // Add xinpan (心蟠) post-events - only when player has become a xinpan
  if(typeof XINPAN_EVENTS !== 'undefined' && gameState.xinpan) {
    XINPAN_EVENTS.forEach(function(xe){
      if(xe.xinpanReq && xe.xinpanReq !== gameState.xinpan) return;
      if(xe.trigger) {
        if(xe.trigger.minAge && gameState.age < xe.trigger.minAge) return;
        if(xe.trigger.maxAge && gameState.age > xe.trigger.maxAge) return;
        if(xe.trigger.cultivation && gameState.cultivation < xe.trigger.cultivation) return;
        if(xe.trigger.yearMin !== undefined && gameState.year < xe.trigger.yearMin) return;
        if(xe.trigger.yearMax !== undefined && gameState.year > xe.trigger.yearMax) return;
      }
      if(xe.check && !gameState.talents.find(function(t){return t.id===xe.check;})) return;
      eventPool.push(xe);
    });
  }

    ERA_EVENTS.forEach(function(ee){
      if(ee.trigger) {
        if(ee.trigger.minAge && gameState.age < ee.trigger.minAge) return;
        if(ee.trigger.yearMin !== undefined && gameState.year < ee.trigger.yearMin) return;
        if(ee.trigger.yearMax !== undefined && gameState.year > ee.trigger.yearMax) return;
        if(ee.trigger.cultivation && gameState.cultivation < ee.trigger.cultivation) return;
      }
      if(ee.locReq && !gameState.visitedLocations.includes(ee.locReq)) return;
      if(ee.check && !gameState.talents.find(function(t){return t.id===ee.check;})) return;
      eventPool.push(ee);
    });
  }

  // Trigger event or quiet year
  // 凡人阶段(cultivation < 10)事件触发概率大幅降低 - 修仙之路艰难
  var eventChance = 0.72;
  if(gameState.cultivation < 10) {
    eventChance = 0.25; // 凡人只有25%概率触发事件
  } else if(gameState.cultivation < 30) {
    eventChance = 0.45; // 锻体-练气阶段降低
  } else if(gameState.cultivation < 60) {
    eventChance = 0.60; // 筑基阶段适中
  }
  // Stat modifiers on event chance
  if(gameState.qiyun > 30) eventChance += 0.08; // 高气运更易遇到事件
  if(gameState.qiyun < -30) eventChance += 0.05; // 低气运也容易遇到（坏）事件
  if(gameState.connections > 30) eventChance += 0.05; // 人脉广，事情多
  if(gameState.comprehension > 50) eventChance += 0.03; // 悟性高，感知到更多机缘

  // Priority: mandatory events that haven't been seen yet are guaranteed to trigger
  var mandatoryPool = eventPool.filter(function(ev){
    return ev.mandatory && !gameState.eventHistory.has(ev.text);
  });
  if(mandatoryPool.length > 0) {
    var ev = mandatoryPool[Math.floor(Math.random()*mandatoryPool.length)];
    gameState.eventHistory.add(ev.text);
    updateDisplay(); // 先刷新面板再显示事件
    showEvent(ev);
    return; // 立即返回，让浏览器渲染选项按钮
  } else if(Math.random() < eventChance && eventPool.length > 0) {
    // Filter out already-seen mandatory events from pool, keep non-mandatory (replayable)
    var availablePool = eventPool.filter(function(ev){
      return !ev.mandatory || !gameState.eventHistory.has(ev.text);
    });
    if(availablePool.length > 0) {
      var ev = availablePool[Math.floor(Math.random()*availablePool.length)];
      if(ev.mandatory) gameState.eventHistory.add(ev.text);
      updateDisplay(); // 先刷新面板再显示事件
      showEvent(ev);
      return; // 立即返回，让浏览器渲染选项按钮
    } else {
      quietYear();
    }
  } else {
    quietYear();
  }

  // Death checks - 仅在未等待选择时执行（避免事件显示中途被打断）
  if(!waitingForChoice) {
  if(isXinsu && gameState.sanity <= 0) { unlockAchieve('mad'); gameOver('你彻底分不清<span class="mys">现实与幻觉</span>，在无尽的噩梦中彻底迷失了。'); return; }
  if(gameState.constitution <= 0) { unlockAchieve('body_break'); gameOver('你的<span class="danger-text">肉身崩溃</span>，经脉尽断，再也无法支撑下去。'); return; }
  var maxAge = getMaxAge();
  if(gameState.age >= maxAge) {
    if(gameState.age>=80) unlockAchieve('old');
    if(gameState.cultivation<10) unlockAchieve('peaceful');
    gameOver('你安详地合上了双眼，走完了这一世。'); return;
  }
  if(gameState.wealth <= -80) { gameOver('你因<span class="danger-text">饥寒交迫</span>，倒毙在冰冷的街头。'); return; }
  if(gameState.age<=10 && !gameState.alive) unlockAchieve('early_death');
  }

  // Sanity visual effects
  applySanityEffects();

  // Update audio state
  updateAudioState();

  updateDisplay();
  scheduleNext();
  } catch(e) {
    console.error('nextYear error:', e);
    // 保证游戏不会卡住
    scheduleNext();
  }
}

// === AUDIO STATE UPDATE ===
function updateAudioState() {
  if(typeof DaoguiAudio === 'undefined') return;
  
  var isXinsu = gameState.talents.find(function(t){return t.id==='xinsu';});
  
  // Update music state with current game values
  DaoguiAudio.updateMusicState(
    gameState.age,
    gameState.faction,
    gameState.cultivation,
    isXinsu,
    gameState.location.id,
    gameState.sanity
  );
  
  // Update sanity intensity for xinsu players
  if(isXinsu) {
    var intensity = Math.max(0, 1 - (gameState.sanity / 100));
    DaoguiAudio.setSanityIntensity(intensity);
  }
}

function quietYear() {
  var a = gameState.age;
  var isXinsu = gameState.talents.find(function(t){return t.id==='xinsu';});
  if(isXinsu && gameState.sanity < 30 && a >= 10) {
    addLog('第'+a+'年：你看到了<span class="mys">两个世界的裂缝</span>...那些不存在的东西越来越真实。');
    gameState.cultivation += 3;
  } else if(gameState.location.danger > 50 && Math.random() < 0.25 && a >= 8) {
    addLog('第'+a+'年：在<span class="loc">'+gameState.location.name+'</span>遭遇危险，险些丧命。');
    if(isXinsu) gameState.sanity -= 12;
  } else if(a <= 1) {
    var msgs = ['呱呱坠地，哭声响亮','在襁褓中安睡，偶尔睁开眼看看这个世界'];
    addLog('第'+a+'年：'+msgs[Math.floor(Math.random()*msgs.length)]);
  } else if(a <= 3) {
    var msgs = ['学会了走路，摇摇晃晃像只小鸭子','开始牙牙学语','在院子里爬来爬去，对什么都好奇'];
    addLog('第'+a+'年：'+msgs[Math.floor(Math.random()*msgs.length)]);
  } else if(a <= 5) {
    var msgs = ['跟着邻家小孩在泥地里打滚','蹲在门口看蚂蚁搬家，一看就是半天','缠着大人讲故事，听到鬼怪的部分既害怕又着迷','学会了数数，能从一数到一百了'];
    addLog('第'+a+'年：'+msgs[Math.floor(Math.random()*msgs.length)]);
  } else if(a <= 9) {
    var isOrphan = gameState.talents.find(function(t){return t.id==='wu_qin';});
    var msgs = ['和小伙伴捉迷藏，躲在草垛里睡着了','被大公鸡追得满院子跑','偷偷跑去河边摸鱼','开始在私塾念书，先生夸你记性好'];
    if(!isOrphan) msgs.push('跟着父亲去田里，学会了简单的农活','被母亲揪着耳朵拎回来');
    else msgs.push('一个人蹲在墙角发呆，看着别人家的炊烟','又饿了一天，只好去河边摸鱼果腹');
    addLog('第'+a+'年：'+msgs[Math.floor(Math.random()*msgs.length)]);
  } else if(a <= 14) {
    var isOrphan = gameState.talents.find(function(t){return t.id==='wu_qin';});
    var msgs = ['去镇上跑腿买东西，对集市上的杂耍看得入迷','和同龄人比赛爬树，你总是最快的','在私塾里和同窗争论，先生罚你们抄书'];
    if(!isOrphan) msgs.push('帮家里放牛，在山坡上看云','开始懂事了，知道帮父母分担家务');
    else msgs.push('靠打零工勉强度日，比同龄人更早学会了察言观色','独自在山坡上看云，想着自己的未来');
    addLog('第'+a+'年：'+msgs[Math.floor(Math.random()*msgs.length)]);
  } else if(a <= 19) {
    var isOrphan = gameState.talents.find(function(t){return t.id==='wu_qin';});
    var msgs = ['开始思考人生的方向','对远方的世界充满了好奇','听老人们讲起修仙的传说，心中若有所动','有时候会独自坐在山头，看日落很久'];
    if(!isOrphan) {
      if(gameState.gender === 'female') msgs.push('母亲开始教你女红，但你心思不在这上面');
      if(gameState.gender === 'male') msgs.push('父亲开始让你独自去镇上办事，你觉得自己长大了');
    } else {
      msgs.push('无依无靠反而让你比别人更自由——你开始远行');
      msgs.push('你比同龄人更早地成熟了，眼神里多了一些沧桑');
    }
    msgs.push('和同龄少年比试武艺，你总是不服输','镇上的年轻人在讨论未来，你却想着远方');
    addLog('第'+a+'年：'+msgs[Math.floor(Math.random()*msgs.length)]);
  } else {
    var step = gameState.lastAgeStep || 1;
    var msgs;
    if(step > 1) {
      msgs = [step+'年光阴如白驹过隙',step+'年弹指一挥间','这'+step+'年波澜不惊','又是'+step+'年匆匆而过','岁月悠悠，'+step+'年转瞬即逝'];
    } else {
      msgs = ['平淡的一年','日子不好不坏','又一年过去了','波澜不惊','日复一日'];
    }
    if(gameState.gender === 'female' && a > 20 && a < 35 && !gameState.flags.married) msgs.push('邻家嫂子又来催你成家的事了');
    if(gameState.gender === 'male' && a > 25 && a < 40 && !gameState.flags.married) msgs.push('你开始承担更多养家的责任');
    // Married life quiet year messages
    if(gameState.flags.married && gameState.flags.has_child) {
      msgs.push('你回到家中，孩子扑上来抱住你的腿——平凡的一天');
      msgs.push('伴侣做了你爱吃的菜，一家人围坐在桌前');
      if(a > 40) msgs.push('看着孩子一天天长大，你感到时光飞逝');
    } else if(gameState.flags.married) {
      msgs.push('你和伴侣在院中闲坐，岁月静好');
      msgs.push('伴侣叮嘱你修炼时小心些。你点了点头');
    }
    if(gameState.flags.shuangxiu_deep) {
      msgs.push('夜深人静时，你感到五智如来的目光仿佛穿透了虚空');
    }
    // Stat-influenced quiet year messages
    if(gameState.constitution < 20) msgs.push('你的身体越来越差，连起床都费力');
    if(gameState.constitution > 80) msgs.push('你精力充沛，清晨打了一套拳便觉神清气爽');
    if(gameState.karma > 40) msgs.push('你行善积德，路人见你皆面带微笑');
    if(gameState.karma < -40) msgs.push('你走在路上，总觉得背后有目光在追随');
    if(gameState.qiyun > 30) msgs.push('你随手在路边捡到了一颗品相不错的灵石');
    if(gameState.qiyun < -30) msgs.push('你出门摔了一跤，还被泼了一身脏水');
    if(gameState.comprehension > 60) msgs.push('你在冥想中若有所悟，修行精进');
    if(gameState.comprehension < 15 && a > 18) msgs.push('你看着别人修炼，自己却怎么也参不透');
    if(gameState.connections > 40) msgs.push('你在茶楼与三五好友谈天说地');
    if(gameState.connections < -10) msgs.push('你独自行走，连个说话的人都没有');
    if(gameState.wealth > 100) msgs.push('你坐拥万贯家财，锦衣玉食');
    if(gameState.wealth < -30) msgs.push('你饿着肚子又过了一天，前路茫茫');
    if(gameState.cultivation >= 100 && step <= 1) msgs.push('你盘坐在山巅，俯瞰云海翻涌');
    if(gameState.cultivation >= 200 && step <= 1) msgs.push('天地灵气在你周身自然汇聚');
    addLog('第'+a+'年：'+msgs[Math.floor(Math.random()*msgs.length)]);
  }
}

// === SHOW EVENT ===
// Check if a choice's requirements are met
function checkChoiceReq(c) {
  if(!c.req) return {met:true, reason:''};
  // Combat choices are always available (difficulty resolved on pick)
  if(c.combat && !c.req) return {met:true, reason:''};
  var req = c.req;
  var reasons = [];
  if(req.cultivation !== undefined && gameState.cultivation < req.cultivation) reasons.push('需修为'+getRealmName(req.cultivation)+'以上');
  if(req.wealth !== undefined && gameState.wealth < req.wealth) reasons.push('需金银'+req.wealth+'以上');
  if(req.connections !== undefined && gameState.connections < req.connections) reasons.push('需人脉'+req.connections+'以上');
  if(req.comprehension !== undefined && gameState.comprehension < req.comprehension) reasons.push('需悟性'+req.comprehension+'以上');
  if(req.constitution !== undefined && gameState.constitution < req.constitution) reasons.push('需体魄'+req.constitution+'以上');
  if(req.qiyun_min !== undefined && gameState.qiyun < req.qiyun_min) reasons.push('需气运'+req.qiyun_min+'以上');
  if(req.qiyun_max !== undefined && gameState.qiyun > req.qiyun_max) reasons.push('需气运'+req.qiyun_max+'以下');
  if(req.karma_min !== undefined && gameState.karma < req.karma_min) reasons.push('需因果'+req.karma_min+'以上');
  if(req.karma_max !== undefined && gameState.karma > req.karma_max) reasons.push('需因果'+req.karma_max+'以下');
  if(req.sanity_max !== undefined && gameState.sanity > req.sanity_max) reasons.push('需神志'+req.sanity_max+'以下');
  if(req.sanity_min !== undefined && gameState.sanity < req.sanity_min) reasons.push('需神志'+req.sanity_min+'以上');
  if(req.faction && gameState.faction !== req.faction) {
    var fName = (FACTIONS[req.faction] && FACTIONS[req.faction].name) || req.faction;
    reasons.push('需属于'+fName);
  }
  if(req.no_faction && gameState.faction !== 'none') reasons.push('需无门派');
  if(req.item) {
    var hasItem = gameState.items.find(function(it){return it.id===req.item;});
    if(!hasItem) {
      var itemData = ITEMS.find(function(it){return it.id===req.item;});
      reasons.push('需持有'+(itemData?itemData.name:req.item));
    }
  }
  if(req.talent) {
    var hasTalent = gameState.talents.find(function(t){return t.id===req.talent;});
    if(!hasTalent) reasons.push('需天赋');
  }
  if(req.age_min !== undefined && gameState.age < req.age_min) reasons.push('需年岁'+req.age_min+'以上');
  return {met: reasons.length===0, reason: reasons.join('；')};
}

function showEvent(event) {
  var validChoices = event.choices.filter(function(c){
    if(c.check && !gameState.talents.find(function(t){return t.id===c.check;})) return false;
    if(c.genderReq && c.genderReq !== gameState.gender) return false;
    return true;
  });
  if(!validChoices.length) { quietYear(); scheduleNext(); return; }

  // 检查是否有任何选项能被点击（req满足）
  var anyClickable = validChoices.some(function(c){ return checkChoiceReq(c).met; });
  if(!anyClickable) {
    // 所有选项都锁定——解锁第一个作为兜底（降低效果）
    // 或者添加一个"离开"选项
    validChoices.push({text:'无能为力，只好离开', effect:{sanity:-3}, log:'这件事超出了你目前的能力范围'});
  }

  // Play event sound
  if(typeof DaoguiAudio !== 'undefined') DaoguiAudio.playEventSound();

  // Pause auto-advance and show choices to player
  if(autoTimer) { clearTimeout(autoTimer); autoTimer = null; }
  document.getElementById('event-text').innerHTML = '<strong>【第'+gameState.age+'年】</strong> '+event.text;
  document.getElementById('choices').innerHTML = validChoices.map(function(c,i){
    var reqResult = checkChoiceReq(c);
    if(reqResult.met) {
      return '<button class="choice-btn" onclick="handleChoice('+i+')" data-idx="'+i+'">'+c.text+'</button>';
    } else {
      return '<button class="choice-btn locked" data-idx="'+i+'">'+c.text+'<span class="choice-req">'+reqResult.reason+'</span></button>';
    }
  }).join('');
  // Store choices for handler
  window._currentChoices = validChoices;
  waitingForChoice = true;
}

function handleChoice(idx) {
  // Play choice sound
  if(typeof DaoguiAudio !== 'undefined') DaoguiAudio.playChoiceSound();

  var c = window._currentChoices[idx];
  if(!c) {
    // 防止无效选项导致卡住
    console.warn('handleChoice: invalid idx', idx);
    waitingForChoice = false;
    document.getElementById('choices').innerHTML = '';
    document.getElementById('event-text').innerHTML = '命运的齿轮继续转动...';
    scheduleNext();
    return;
  }
  applyChoice(c);
}

function applyChoice(c) {
  try {
  var isXinsu = gameState.talents.find(function(t){return t.id==='xinsu';});
  var oldFaction = gameState.faction;
  if(!c.effect) c.effect = {}; // 防止effect未定义导致崩溃

  // === COMBAT RESOLUTION ===
  // If the choice has a combat difficulty, resolve based on player power
  if(c.combat) {
    var power = gameState.cultivation + Math.floor(gameState.constitution / 2);
    var diff = c.combat;
    if(power >= diff * 3) {
      // Dominate
      addLog('你以碾压之势击败了对手，毫发无损！');
      gameState.cultivation += 3;
      gameState.qiyun += 5;
      gameState.connections += 5;
    } else if(power >= diff) {
      // Normal win - use default effects
    } else if(power < Math.floor(diff / 2)) {
      // Severely outmatched - risk death
      gameState.constitution -= 15;
      if(isXinsu) gameState.sanity = Math.max(0, gameState.sanity - 10);
      addLog('<span class="danger-text">你实力悬殊，被打得奄奄一息！</span>');
      if(gameState.constitution <= 0) {
        gameOver('你实力太弱，在战斗中被<span class="danger-text">击杀</span>了。');
        return;
      }
      // Apply reduced effects (no positive cultivation/connection gain)
      if(c.effect.wealth) gameState.wealth += c.effect.wealth;
      if(c.effect.karma) gameState.karma = Math.max(-100,Math.min(100,gameState.karma+c.effect.karma));
      addLog(c.log.replace(/打跑了|击退了|打退了|教训了/g, '勉强逃过一劫，'));
      document.getElementById('choices').innerHTML = '';
      document.getElementById('event-text').innerHTML = '命运的齿轮继续转动...';
      waitingForChoice = false;
      updateDisplay();
      scheduleNext();
      return;
    } else {
      // Weak but not hopeless - take extra damage
      gameState.constitution -= 8;
      addLog('<span class="danger-text">你险胜，但伤得不轻。</span>');
    }
  }

  if(c.effect.sanity && isXinsu) gameState.sanity = Math.max(0,Math.min(120,gameState.sanity+c.effect.sanity));
  if(c.effect.cultivation) {
    // 6岁以下不可能有修为增长
    if(gameState.age < 7 && c.effect.cultivation > 0) {
      // 幼年不可修炼，忽略正向修为
    } else {
      var cultReward = c.effect.cultivation > 0 ? applyCultResistance(c.effect.cultivation) : c.effect.cultivation;
      gameState.cultivation += cultReward;
    }
  }
  if(c.effect.wealth) gameState.wealth += c.effect.wealth;
  if(c.effect.connections) gameState.connections += c.effect.connections;
  if(c.effect.comprehension) gameState.comprehension = Math.max(0,Math.min(100,gameState.comprehension+c.effect.comprehension));
  if(c.effect.qiyun) gameState.qiyun = Math.max(-100,Math.min(100,gameState.qiyun+c.effect.qiyun));
  if(c.effect.karma) gameState.karma = Math.max(-100,Math.min(100,gameState.karma+c.effect.karma));
  if(c.effect.constitution) gameState.constitution = Math.max(0,Math.min(100,gameState.constitution+c.effect.constitution));

  // 持有特定道具时获得额外加成
  if(c.itemBonus) {
    var bonusItem = gameState.items.find(function(it){return it.id===c.itemBonus.item;});
    if(bonusItem) {
      addLog('<span class="itm">'+bonusItem.name+'</span>发挥了作用！');
      if(c.itemBonus.effect) {
        for(var bk in c.itemBonus.effect) {
          if(gameState[bk] !== undefined) gameState[bk] += c.itemBonus.effect[bk];
        }
      }
    }
  }

  // === FACTION JOIN LOGIC (one faction only, betrayal mechanics) ===
  if(c.factionJoin) {
    var targetFaction = c.factionJoin;
    // Skip if already in this faction
    if(targetFaction === gameState.faction) {
      addLog('你已经是<span class="fac">'+(FACTIONS[targetFaction]?FACTIONS[targetFaction].name:targetFaction)+'</span>的一员。');
    } else {
    var factionData = FACTIONS[targetFaction];
    // Check requirements
    var canJoin = true;
    var rejectReason = '';
    if(factionData && factionData.requirement) {
      var req = factionData.requirement;
      if(req.cultivation && gameState.cultivation < req.cultivation) { canJoin = false; rejectReason = '修为不足'; }
      if(req.connections && gameState.connections < req.connections) { canJoin = false; rejectReason = '人脉不足'; }
      if(req.constitution && gameState.constitution < req.constitution) { canJoin = false; rejectReason = '体魄不足'; }
      if(req.comprehension && gameState.comprehension < req.comprehension) { canJoin = false; rejectReason = '悟性不足'; }
      if(req.wealth_max !== undefined && gameState.wealth > req.wealth_max) { canJoin = false; rejectReason = '家资太厚，非贫苦之人'; }
      if(req.karma_max !== undefined && gameState.karma > req.karma_max) { canJoin = false; rejectReason = '因果太重，不适合此道'; }
      if(req.karma_min !== undefined && gameState.karma < req.karma_min) { canJoin = false; rejectReason = '恶行太多，正德寺不收'; }
    }
    if(canJoin) {
      // If already in a faction, trigger betrayal
      if(gameState.faction !== 'none') {
        var oldName = FACTIONS[gameState.faction] ? FACTIONS[gameState.faction].name : '旧门派';
        addLog('<span class="danger-text">你叛出了' + oldName + '！</span>这将带来严重的后果...');
        gameState.connections -= 15;
        gameState.karma -= 15;
        gameState.qiyun -= 5;
        if(isXinsu) gameState.sanity = Math.max(0, gameState.sanity - 10);
        gameState.constitution -= 5;
        unlockAchieve('betrayer');
      }
      gameState.faction = targetFaction;
      gameState.factionRank = 0;
      if(!gameState.factionHistory.includes(targetFaction)) gameState.factionHistory.push(targetFaction);
      if(gameState.factionHistory.length >= 3) unlockAchieve('faction_all');
      var newName = factionData ? factionData.name : targetFaction;
      addLog('你加入了<span class="fac">' + newName + '</span>！');
      // Trigger faction change music
      if(oldFaction !== targetFaction && typeof DaoguiAudio !== 'undefined') {
        DaoguiAudio.onFactionChange(targetFaction);
      }
    } else {
      addLog('入门被拒：<span class="danger-text">' + rejectReason + '</span>（' + (factionData ? factionData.requireDesc : '') + '）');
    }
    } // end else (not already in faction)
  }

  // Direct faction set (for leaving faction via event choices)
  if(c.effect.faction !== undefined && !c.factionJoin) {
    var newFaction = c.effect.faction;
    var leavingFaction = gameState.faction;
    gameState.faction = newFaction;
    if(newFaction !== 'none' && !gameState.factionHistory.includes(newFaction)) gameState.factionHistory.push(newFaction);
    if(gameState.factionHistory.length>=3) unlockAchieve('faction_all');
    // If leaving a faction to become 散修
    if(newFaction === 'none' && leavingFaction !== 'none' && gameState.factionHistory.length > 0) {
      addLog('你脱离了门派，成为了<span class="fac">散修</span>——从此天高地阔，孤身一人。');
      unlockAchieve('sanxiu_path');
    }
    if(leavingFaction !== newFaction && typeof DaoguiAudio !== 'undefined') {
      DaoguiAudio.onFactionChange(newFaction);
    }
  }
  if(c.item) {
    var itemData = ITEMS.find(function(it){return it.id===c.item;});
    if(itemData && !gameState.items.find(function(it){return it.id===c.item;})) {
      gameState.items.push(Object.assign({}, itemData));
      if(gameState.items.length>=5) unlockAchieve('collector');
    }
  }
  // === XINPAN (心蟠) ASSIGNMENT ===
  if(c.xinpan) {
    gameState.xinpan = c.xinpan;
    addLog('<span class="mys">你成为了' + (
      c.xinpan==='jizai'?'季灾':c.xinpan==='doumo'?'阴阳斗姥':c.xinpan==='baxi'?'巴虺':
      c.xinpan==='wusheng'?'无生老母':c.xinpan==='panchi'?'蟠螭':c.xinpan==='yuer'?'于儿神':'未知司命'
    ) + '的心蟠！天道之力与你相合。</span>');
    // Unlock xinpan achievements
    unlockAchieve('xinpan_' + c.xinpan);
    unlockAchieve('xinpan_any');
  }
  if(c.visit && !gameState.visitedLocations.includes(c.visit)) {
    gameState.visitedLocations.push(c.visit);
  }
  // NPC记忆系统
  if(c.npcMeet) {
    var nid = c.npcMeet;
    if(!gameState.npcMet[nid]) gameState.npcMet[nid] = {favor:0, met_age:gameState.age};
    if(c.npcFavor) gameState.npcMet[nid].favor += c.npcFavor;
    if(c.npcTag) gameState.npcMet[nid].tag = c.npcTag;
  }
  // 事件标记系统
  if(c.setFlag) {
    if(typeof c.setFlag === 'string') gameState.flags[c.setFlag] = true;
    else if(typeof c.setFlag === 'object') { for(var fk in c.setFlag) gameState.flags[fk] = c.setFlag[fk]; }
  }
  if(c.relocate) {
    var newLoc = LOCATIONS.find(function(l){return l.id===c.relocate;});
    if(newLoc) {
      gameState.location = newLoc;
      if(!gameState.visitedLocations.includes(c.relocate)) gameState.visitedLocations.push(c.relocate);
      document.getElementById('current-location').textContent = newLoc.name;
      addLog('你辗转来到了<span class="loc">'+newLoc.name+'</span>。');
    }
  }
  // Death event handling
  if(c.die) {
    var deathMsg = c.deathMsg || '你在这次事件中失去了生命。';
    addLog(c.log);
    gameOver(deathMsg);
    return;
  }
  if(c.achieve) unlockAchieve(c.achieve);
  addLog(c.log);
  document.getElementById('choices').innerHTML = '';
  document.getElementById('event-text').innerHTML = '命运的齿轮继续转动...';
  waitingForChoice = false;

  // Check stat-based achievements
  if(gameState.cultivation>=60) unlockAchieve('reach_jindan');
  if(gameState.cultivation>=300) unlockAchieve('reach_danuo');
  if(gameState.wealth>=200) unlockAchieve('rich');
  if(gameState.qiyun>=80) unlockAchieve('good_qiyun');
  if(gameState.qiyun<=-80) unlockAchieve('evil_qiyun');
  if(gameState.karma>=80) unlockAchieve('good_karma');
  if(gameState.karma<=-80) unlockAchieve('evil_karma');
  if(gameState.constitution>=90) unlockAchieve('iron_body');
  if(gameState.comprehension>=80) unlockAchieve('epiphany');
  if(gameState.factionHistory.length > 1 && gameState.age >= 50) unlockAchieve('dual_cult_survive');
  // Marriage and family achievements
  if(gameState.flags.married && gameState.flags.has_child) unlockAchieve('married_life');
  if(gameState.flags.married && gameState.cultivation >= 60) unlockAchieve('family_protector');
  if(gameState.flags.shuangxiu_master) unlockAchieve('shuangxiu_master');
  // Crossworld achievements
  if(gameState.flags.daqi_youdu_dream || gameState.flags.crossed_worlds) unlockAchieve('daqi_explorer');
  if(gameState.flags.met_zuoqiu) unlockAchieve('tianchen_contact');
  if(gameState.flags.longmai_succession) unlockAchieve('longmai_hero');

  updateDisplay();
  scheduleNext();
  } catch(e) {
    // 任何错误都不能导致游戏卡住
    console.error('applyChoice error:', e);
    waitingForChoice = false;
    document.getElementById('choices').innerHTML = '';
    document.getElementById('event-text').innerHTML = '命运的齿轮继续转动...';
    updateDisplay();
    scheduleNext();
  }
}
function updateDisplay() {
  if(!gameState.location) return; // safety check
  var isXinsu = gameState.talents.find(function(t){return t.id==='xinsu';});
  document.getElementById('age').textContent = gameState.age;
  var sanityBox = document.getElementById('sanity-stat-box');
  var sv = document.getElementById('sanity');
  if(isXinsu) {
    if(sanityBox) sanityBox.style.display = '';
    sv.textContent = gameState.sanity;
    sv.className = 'stat-value' + (gameState.sanity<30?' danger':gameState.sanity<60?' low':'');
    document.getElementById('sanity-section').classList.remove('sanity-hidden');
  } else {
    if(sanityBox) sanityBox.style.display = 'none';
    sv.textContent = '稳固';
    sv.className = 'stat-value';
    document.getElementById('sanity-section').classList.add('sanity-hidden');
  }
  document.getElementById('cultivation').textContent = getRealmName(gameState.cultivation);
  document.getElementById('wealth').textContent = gameState.wealth;
  // Faction display
  var factionDisplay = '无';
  if(gameState.faction !== 'none' && FACTIONS[gameState.faction]) {
    factionDisplay = FACTIONS[gameState.faction].name;
    // Show rank if available
    if(FACTIONS[gameState.faction].ranks) {
      var ri = Math.min(gameState.factionRank || 0, FACTIONS[gameState.faction].ranks.length - 1);
      factionDisplay += ' · ' + FACTIONS[gameState.faction].ranks[ri];
    }
  } else if(gameState.faction === 'none' && gameState.factionHistory.length > 0) {
    factionDisplay = '散修';
  }
  document.getElementById('faction').textContent = factionDisplay;
  document.getElementById('connections').textContent = gameState.connections;
  // Gender display
  var genderEl = document.getElementById('gender');
  if(genderEl) genderEl.textContent = gameState.gender === 'male' ? '男' : '女';
  // New attributes
  var compEl = document.getElementById('comprehension');
  if(compEl) compEl.textContent = gameState.comprehension;
  var qiyunEl = document.getElementById('qiyun');
  if(qiyunEl) {
    var qiyunText = gameState.qiyun > 30 ? '旺' : gameState.qiyun < -30 ? '衰' : '平';
    qiyunEl.textContent = gameState.qiyun + ' (' + qiyunText + ')';
    qiyunEl.className = 'detail-value' + (gameState.qiyun < -30 ? ' danger' : gameState.qiyun > 30 ? ' good-karma' : '');
  }
  var karmaEl = document.getElementById('karma');
  if(karmaEl) {
    var karmaText = gameState.karma > 30 ? '善' : gameState.karma < -30 ? '恶' : '中';
    karmaEl.textContent = gameState.karma + ' (' + karmaText + ')';
    karmaEl.className = 'detail-value' + (gameState.karma < -30 ? ' danger' : gameState.karma > 30 ? ' good-karma' : '');
  }
  var constEl = document.getElementById('constitution');
  if(constEl) {
    constEl.textContent = gameState.constitution;
    constEl.className = 'detail-value' + (gameState.constitution < 20 ? ' danger' : gameState.constitution < 35 ? ' low' : '');
  }
  // Spouse display
  var spouseEl = document.getElementById('spouse-display');
  if(spouseEl) {
    if(gameState.flags.married) {
      var spouseName = gameState.flags.spouse_candidate || '伴侣';
      var childText = gameState.flags.children ? ' · 子嗣'+gameState.flags.children+'人' : '';
      spouseEl.textContent = spouseName + childText;
      spouseEl.className = 'detail-value good-karma';
    } else if(gameState.flags.romance_met) {
      spouseEl.textContent = '有情人';
      spouseEl.className = 'detail-value';
    } else {
      spouseEl.textContent = '未婚';
      spouseEl.className = 'detail-value';
    }
  }
  document.getElementById('current-location').textContent = gameState.location.name;
  document.getElementById('era-name').textContent = getEraName();
  document.getElementById('total-runs').textContent = gameState.totalRuns;
  document.getElementById('year-display').textContent =
    '大梁'+(gameState.year<0?'前'+Math.abs(gameState.year):gameState.year)+'年';

  // Sanity bar
  var pct = Math.max(0,Math.min(100,Math.round(gameState.sanity/1.2*100)/100));
  document.getElementById('sanity-bar').style.width = pct+'%';
  document.getElementById('sanity-pct').textContent = Math.round(pct)+'%';

  // Items
  var itemsEl = document.getElementById('items-display');
  if(gameState.items.length) {
    itemsEl.innerHTML = gameState.items.map(function(it){return '<span class="item-badge" title="'+it.desc+'">'+it.name+'</span>';}).join('');
  } else {
    itemsEl.innerHTML = '';
  }
  // Xinpan (心蟠) display
  if(gameState.xinpan) {
    var xinpanNames = {jizai:'季灾·迷惘',doumo:'斗姥·谎言',baxi:'巴虺·痛苦',wusheng:'无生老母·慈悲',panchi:'蟠螭·秩序',yuer:'于儿·法教',sanqing:'三清·秘密'};
    itemsEl.innerHTML += '<span class="item-badge" style="border-color:var(--mystery);color:var(--mystery);" title="司命的人间因缘">心蟠: '+(xinpanNames[gameState.xinpan]||'未知')+'</span>';
  }
}

function addLog(text, type) {
  var log = document.getElementById('log');
  var entry = document.createElement('div');
  entry.className = 'log-entry';
  entry.innerHTML = '<span class="log-year">年岁: '+gameState.age+'</span><span class="log-content">'+text+'</span>';
  log.insertBefore(entry, log.firstChild);
}

// === SANITY EFFECTS ===
function applySanityEffects() {
  var isXinsu = gameState.talents.find(function(t){return t.id==='xinsu';});
  if(!isXinsu) { document.body.style.filter = ''; return; }
  var container = document.querySelector('.container');
  if(gameState.sanity < 20) {
    container.classList.add('glitch-text');
    setTimeout(function(){container.classList.remove('glitch-text');}, 300);
    document.body.style.filter = 'hue-rotate('+(Math.random()*10-5)+'deg) saturate('+(1.1+Math.random()*0.3)+')';
  } else if(gameState.sanity < 40) {
    if(Math.random()<0.3) {
      container.classList.add('insane-mild');
      setTimeout(function(){container.classList.remove('insane-mild');}, 500);
    }
    document.body.style.filter = '';
  } else {
    document.body.style.filter = '';
  }
}

// === PAUSE / RESUME ===
function toggleAuto() {
  autoMode = !autoMode;
  var btn = document.getElementById('btn-auto');
  btn.classList.toggle('active', autoMode);
  btn.textContent = autoMode ? '⏸ 暂停' : '▶ 继续';
  if(autoMode && gameState.alive) {
    if(!waitingForChoice) {
      nextYear(); // 立即推进一步，后续由 scheduleNext 接管
    }
  } else {
    if(autoTimer) { clearTimeout(autoTimer); autoTimer = null; }
  }
}

function setSpeedFromSlider(val) {
  speed = parseInt(val);
  document.getElementById('speed-label').textContent = speed + 'x';
  // Restart timer with new speed if auto-playing
  if(autoMode && gameState.alive && !waitingForChoice) {
    scheduleNext();
  }
}

// Legacy function for compatibility
function setSpeed(s) {
  speed = s;
  if(autoMode && gameState.alive && !waitingForChoice) {
    scheduleNext();
  }
}

// === GAME OVER ===
var lastDeathReason = ''; // 保存死因
function gameOver(reason) {
  lastDeathReason = reason; // 保存死因
  gameState.alive = false;
  autoMode = false;
  waitingForChoice = false;
  if(autoTimer) { clearTimeout(autoTimer); autoTimer = null; }
  document.body.style.filter = '';

  unlockAchieve('first_death');
  if(gameState.age<=10) unlockAchieve('early_death');
  if(gameState.age>=80) unlockAchieve('old');
  if(gameState.cultivation>=60) unlockAchieve('reach_jindan');
  if(gameState.cultivation>=300) unlockAchieve('reach_danuo');
  if(gameState.wealth>=200) unlockAchieve('rich');
  if(gameState.cultivation<10 && gameState.age>=70) unlockAchieve('peaceful');

  // Bad talent achievements
  if(gameState.talents.find(function(t){return t.id==='wu_qin';}) && gameState.connections>=50) unlockAchieve('orphan_rise');
  if(gameState.talents.find(function(t){return t.id==='pin_kun';}) && gameState.wealth>=150) unlockAchieve('poor_rich');
  if(gameState.talents.find(function(t){return t.id==='ji_bing';}) && gameState.age>=60) unlockAchieve('sick_healer');
  if(gameState.talents.find(function(t){return t.id==='chou_lou';}) && gameState.connections>=40) unlockAchieve('ugly_charm');
  if(gameState.talents.find(function(t){return t.id==='e_meng';}) && gameState.cultivation>=30) unlockAchieve('nightmare_seer');
  if(gameState.talents.find(function(t){return t.id==='can_ji';}) && gameState.cultivation>=60) unlockAchieve('disabled_warrior');
  if(gameState.talents.find(function(t){return t.id==='du_zhai';}) && gameState.wealth>=100) unlockAchieve('debt_free');
  if(gameState.talents.find(function(t){return t.id==='mo_ying';}) && gameState.age>=50) unlockAchieve('shadow_friend');

  // Ancient person achievement

  // New attribute achievements
  if(gameState.qiyun>=80) unlockAchieve('good_qiyun');
  if(gameState.qiyun<=-80) unlockAchieve('evil_qiyun');
  if(gameState.karma>=80) unlockAchieve('good_karma');
  if(gameState.karma<=-80) unlockAchieve('evil_karma');
  if(gameState.constitution>=90) unlockAchieve('iron_body');
  if(gameState.comprehension>=80) unlockAchieve('epiphany');
  if(gameState.factionHistory.length > 1 && gameState.age >= 50) unlockAchieve('dual_cult_survive');
  if(gameState.factionHistory.length === 1 && gameState.faction !== 'none') unlockAchieve('loyal');
  // Marriage, family and shuangxiu achievements at death
  if(gameState.flags.married && gameState.flags.has_child) unlockAchieve('married_life');
  if(gameState.flags.married && gameState.cultivation >= 60) unlockAchieve('family_protector');
  if(gameState.flags.shuangxiu_master) unlockAchieve('shuangxiu_master');
  // Crossworld achievements at death
  if(gameState.flags.daqi_youdu_dream || gameState.flags.crossed_worlds) unlockAchieve('daqi_explorer');
  if(gameState.flags.met_zuoqiu) unlockAchieve('tianchen_contact');
  if(gameState.flags.longmai_succession) unlockAchieve('longmai_hero');
  // 散修 achievements
  if(gameState.faction === 'none' && gameState.factionHistory.length > 0) {
    unlockAchieve('sanxiu_path');
    if(gameState.cultivation >= 100) unlockAchieve('sanxiu_master');
    if(gameState.factionHistory.length >= 3) unlockAchieve('sanxiu_all');
  }
  // Karma cycle: started negative, ended positive > 50
  if(gameState.talents.find(function(t){return t.effect.karma && t.effect.karma < -10;}) && gameState.karma > 50) unlockAchieve('karma_cycle');
  // Long life and century achievements
  if(gameState.age >= 100) unlockAchieve('century');
  if(gameState.age >= 150) unlockAchieve('long_life');
  // Max rank achievement
  if(gameState.faction !== 'none' && FACTIONS[gameState.faction] && FACTIONS[gameState.faction].ranks) {
    if((gameState.factionRank || 0) >= FACTIONS[gameState.faction].ranks.length - 1) unlockAchieve('rank_max');
  }
  // New faction-specific achievements
  if(gameState.faction === 'luo_jiao' && FACTIONS.luo_jiao && (gameState.factionRank || 0) >= FACTIONS.luo_jiao.ranks.length - 1) unlockAchieve('luo_master');
  if(gameState.faction === 'nanjiang' && FACTIONS.nanjiang && (gameState.factionRank || 0) >= FACTIONS.nanjiang.ranks.length - 1) unlockAchieve('gu_king');
  // 三心成就
  if(gameState.talents.find(function(t){return t.id==='xin_zhuo';}) && gameState.cultivation>=60) unlockAchieve('forgotten');
  if(gameState.talents.find(function(t){return t.id==='bai_hua';}) && gameState.faction==='bailian') unlockAchieve('saint');
  if(gameState.faction === 'bingjia' && FACTIONS.bingjia && (gameState.factionRank || 0) >= FACTIONS.bingjia.ranks.length - 1) unlockAchieve('bingjia_marshal');
  if(gameState.faction === 'fomen' && FACTIONS.fomen && (gameState.factionRank || 0) >= FACTIONS.fomen.ranks.length - 1) unlockAchieve('fomen_abbot');
  if(gameState.faction === 'qingfeng' && FACTIONS.qingfeng && (gameState.factionRank || 0) >= FACTIONS.qingfeng.ranks.length - 1) unlockAchieve('qingfeng_master');
  if(gameState.faction === 'guoshi' && FACTIONS.guoshi && (gameState.factionRank || 0) >= FACTIONS.guoshi.ranks.length - 1) unlockAchieve('guoshi_top');
  if(gameState.faction === 'chaoting' && FACTIONS.chaoting && (gameState.factionRank || 0) >= FACTIONS.chaoting.ranks.length - 1) unlockAchieve('chaoting_minister');
  if(gameState.factionHistory.length >= 5) unlockAchieve('all_factions');
  if(gameState.faction === 'nanjiang' && gameState.constitution >= 60) unlockAchieve('gu_master_survive');
  if(gameState.faction === 'fomen' && gameState.karma <= -30) unlockAchieve('buddha_evil');

  // Xinpan achievements at death
  if(gameState.xinpan) {
    unlockAchieve('xinpan_any');
    unlockAchieve('xinpan_' + gameState.xinpan);
    if(gameState.cultivation >= 200) unlockAchieve('xinpan_ascend');
    if(gameState.xinpan === 'jizai' && gameState.cultivation >= 150) unlockAchieve('xinpan_jizai_master');
    if(gameState.xinpan === 'doumo' && gameState.connections >= 50) unlockAchieve('xinpan_doumo_master');
    if(gameState.xinpan === 'wusheng' && gameState.karma >= 60) unlockAchieve('xinpan_wusheng_master');
    if(gameState.xinpan === 'panchi' && gameState.qiyun >= 40 && gameState.constitution >= 60) unlockAchieve('xinpan_panchi_master');
  }

  gameState.totalRuns++;
  localStorage.setItem('dg_runs', gameState.totalRuns);
  localStorage.setItem('dg_achievements', JSON.stringify(achievements));

  // Multi-run achievements
  if(gameState.totalRuns >= 3) unlockAchieve('runs_3');
  if(gameState.totalRuns >= 5) unlockAchieve('runs_5');
  if(gameState.totalRuns >= 10) unlockAchieve('runs_10');
  if(gameState.totalRuns >= 20) unlockAchieve('runs_20');

  var realm = getRealmName(gameState.cultivation);
  var factionName = '无';
  if(gameState.faction !== 'none' && FACTIONS[gameState.faction]) {
    factionName = FACTIONS[gameState.faction].name;
  } else if(gameState.faction === 'none' && gameState.factionHistory.length > 0) {
    factionName = '散修';
  }
  var rankName = '';
  if(gameState.faction !== 'none' && FACTIONS[gameState.faction] && FACTIONS[gameState.faction].ranks) {
    var ri = Math.min(gameState.factionRank || 0, FACTIONS[gameState.faction].ranks.length - 1);
    rankName = FACTIONS[gameState.faction].ranks[ri];
  }

  var ending = reason;
  // Xinpan-specific endings (highest priority among custom endings)
  if(gameState.xinpan === 'jizai' && gameState.cultivation >= 200) ending = '你是<span class="itm">季灾的心蟠</span>——迷惘天道的人间因缘。你在清醒与迷惘之间找到了自己的道，白玉京中季灾向你投来赞许的目光。';
  else if(gameState.xinpan === 'doumo' && gameState.cultivation >= 200) ending = '你是<span class="itm">阴阳斗姥的心蟠</span>——谎言天道在你体内燃烧。你已分不清什么是真什么是假，但你已不在意——谎言即是你的真实。';
  else if(gameState.xinpan === 'baxi' && gameState.cultivation >= 200) ending = '你是<span class="itm">巴虺的心蟠</span>——痛苦天道贯穿全身。你以痛苦为粮、以献祭为道，肉身已化为承载痛苦天道的不朽容器。';
  else if(gameState.xinpan === 'wusheng' && gameState.cultivation >= 200) ending = '你是<span class="itm">无生老母的心蟠</span>——慈悲天道与你同在。你以一己之身承载众生苦乐，白灵淼曾走过的路，如今由你继续。';
  else if(gameState.xinpan === 'panchi' && gameState.cultivation >= 200) ending = '你是<span class="itm">蟠螭的心蟠</span>——秩序天道在你血脉中流淌。你化为龙脉的一部分，守护着大梁的安宁。皇朝兴衰，天道不灭。';
  else if(gameState.xinpan === 'yuer' && gameState.cultivation >= 200) ending = '你是<span class="itm">于儿神的心蟠</span>——一个超越凡人理解的存在选中了你。你的修行已不属于任何门派，而是属于另一种法则。';
  else if(gameState.xinpan && gameState.cultivation >= 100) ending = '你身为<span class="itm">司命的心蟠</span>，天道之力与你同在。虽未能达到极致，但你的存在已超越了普通修士——你是天道在人间的锚点。';
  else if(gameState.cultivation>=400) ending = '你超脱了一切，达到了<span class="itm">造化</span>之境，与天地同寿！';
  else if(gameState.cultivation>=300) ending = '你成为了<span class="itm">大傩</span>，俯瞰芸芸众生！';
  else if(gameState.cultivation>=200 && factionName === '散修') ending = '你以<span class="itm">散修之身</span>达到大乘境界，百家之长融于一身，成为江湖传说！';
  else if(gameState.cultivation>=200 && rankName) ending = '你以<span class="itm">' + factionName + '·' + rankName + '</span>之身达到大乘境界，名震天下！';
  else if(gameState.sanity<=0 && gameState.cultivation>=100 && gameState.talents.find(function(t){return t.id==='xinsu';})) ending = '你看到了太多真相，在疯狂中窥见了大道的本质——以假修真，两界归一。';
  else if(gameState.cultivation>=100 && gameState.talents.find(function(t){return t.id==='xin_zhuo';})) ending = '你把自己也藏进了那个空间——姓名、年龄、过去、性别，全部消失了。但你的力量化为一片永恒的虚空，连司命都无法窥探。';
  else if(gameState.cultivation>=60 && gameState.talents.find(function(t){return t.id==='bai_hua';})) ending = '白发红瞳，一生被视为不祥。但你用慈悲之力证明了自己——无生老母的标记不是诅咒，而是渡世的烙印。';
  // Stat-influenced endings
  else if(gameState.karma>=60 && gameState.cultivation>=60) ending = '你一生行善积德，功德圆满。金光护体之中，你安详地闭上了双眼——死后有万民自发送行。';
  else if(gameState.karma<=-60 && gameState.cultivation>=60) ending = '你一生造业无数，业障深重。临终之际，无数冤魂在你面前浮现——你在恐惧中走完了这一世。';
  else if(gameState.constitution<=0 && gameState.cultivation>=100) ending = '你修为高深却肉身崩溃——修仙之路，终究不能忽视根基。';
  else if(gameState.qiyun>=50 && gameState.age>=70) ending = '你一生鸿运当头，善始善终。临终之际，天降祥瑞，后人将你的一生编成传奇故事。';
  else if(gameState.qiyun<=-50) ending = '你一生时运不济，厄运缠身。临终之际，你不禁感叹——命运从未眷顾过你。';
  else if(gameState.comprehension>=70 && gameState.cultivation>=30) ending = '你悟性通天，虽未能成就大道，但留下的道论将启发后来者。';
  else if(gameState.connections>=60 && gameState.cultivation<10) ending = '你虽是凡人，却人脉广达，一生交友无数。临终之际，故友旧交纷纷前来送行——这一世，值了。';
  else if(gameState.wealth>=200 && gameState.cultivation<10) ending = '你虽无修仙之缘，却富甲一方。临终之际，金银堆满了灵堂，但你知道这些带不走。';
  // Family and shuangxiu endings
  else if(gameState.flags.shuangxiu_master && gameState.cultivation>=100) ending = '你修成了<span class="itm">五智如来的欢喜禅</span>，以肉欲天道之力突破了凡人的极限。但你分不清那力量到底是你的还是五智如来的——也许从一开始，双修者就只是它的容器。';
  else if(gameState.flags.married && gameState.flags.has_child && gameState.cultivation>=60) ending = '你一手修道，一手持家，在修仙与红尘之间找到了平衡。临终之际，伴侣和孩子守在床前——在这个满是邪祟的世界里，你守住了人间最珍贵的东西。';
  else if(gameState.flags.married && gameState.flags.has_child && gameState.age>=60) ending = '你虽无大成就，但儿孙满堂、夫妻恩爱。临终之际你想：李火旺选择了迷惘与爱，你也选择了平凡与温暖——这未必不是另一种道。';
  else if(gameState.flags.married && gameState.age>=50) ending = '你与伴侣携手走过了大半辈子。世间多诡谲，但你们从未放开彼此的手。这就够了。';
  // Crossworld endings
  else if(gameState.flags.longmai_succession && gameState.cultivation>=80) ending = '你亲眼见证了<span class="itm">三重历史交汇</span>与龙脉续接。大齐、大梁、天陈——三个世界的边界因你而松动。你在三条龙脉的共鸣中度过余生，成为极少数理解天地秩序真相的凡人。';
  else if(gameState.flags.crossed_worlds && gameState.cultivation>=60) ending = '你穿越了两重历史的边界，亲眼看到了大齐的永恒白昼。临终之际你能同时感受到两个世界——也许死后，你会在幽都的街道上继续行走。';
  else if(gameState.flags.met_zuoqiu) ending = '你见过了<span class="itm">左丘咏</span>——掌管生长天道的肉身司命。那一面之缘让你明白：凡人与神之间的距离，远比你想象的要近。';

  showPanel('ending');
  var genderName = gameState.gender === 'male' ? '男' : '女';
  var qiyunDesc = gameState.qiyun > 30 ? '气运旺盛' : gameState.qiyun < -30 ? '气运衰败' : '气运平平';
  var karmaDesc = gameState.karma > 30 ? '善因善果' : gameState.karma < -30 ? '业障深重' : '因果中平';
  // 解析死因
  var deathReasonText = lastDeathReason || reason;
  document.getElementById('ending-text').innerHTML =
    '<p>享年: <span style="color:var(--gold)">'+gameState.age+'</span> 岁 · 性别: <span style="color:var(--gold)">'+genderName+'</span></p>' +
    '<p>死因: <span style="color:var(--danger)">'+deathReasonText+'</span></p>' +
    '<p>境界: <span style="color:var(--gold)">'+realm+'</span></p>' +
    '<p>金银: <span style="color:var(--gold)">'+gameState.wealth+'</span></p>' +
    '<p>势力: <span style="color:var(--gold)">'+factionName+(rankName?' · '+rankName:'')+'</span></p>' +
    '<p>悟性: <span style="color:var(--gold)">'+gameState.comprehension+'</span> · 因果: <span style="color:var(--gold)">'+gameState.karma+' ('+karmaDesc+')</span></p>' +
    '<p>气运: <span style="color:var(--gold)">'+gameState.qiyun+' ('+qiyunDesc+')</span> · 体魄: <span style="color:var(--gold)">'+gameState.constitution+'</span></p>' +
    '<p>物品: <span style="color:var(--gold)">'+(gameState.items.length?gameState.items.map(function(i){return i.name;}).join('、'):'无')+'</span></p>' +
    (gameState.xinpan ? '<p style="color:var(--mystery);">心蟠: ' + (
      gameState.xinpan==='jizai'?'季灾（迷惘天道）':gameState.xinpan==='doumo'?'阴阳斗姥（谎言天道）':
      gameState.xinpan==='baxi'?'巴虺（痛苦天道）':gameState.xinpan==='wusheng'?'无生老母（慈悲天道）':
      gameState.xinpan==='panchi'?'蟠螭（秩序天道）':gameState.xinpan==='yuer'?'于儿神（法教天道）':'未知'
    ) + '</p>' : '') +
    (gameState.factionHistory.length > 1 ? '<p style="color:var(--danger);">曾叛出门派 '+gameState.factionHistory.length+'次 — 散修之路，九死一生</p>' : '') +
    (factionName === '散修' ? '<p style="color:var(--gold);">散修之身，不拘一格 — 曾历'+gameState.factionHistory.map(function(f){return FACTIONS[f]?FACTIONS[f].name:f;}).join('、')+'</p>' : '') +
    (gameState.flags.married ? '<p style="color:var(--gold);">红尘有伴 — '+(gameState.flags.spouse_candidate||'佳人')+'相随'+(gameState.flags.children ? '，育有'+gameState.flags.children+'子' : '')+'</p>' : '') +
    (gameState.flags.shuangxiu_master ? '<p style="color:var(--mystery);">五智如来·欢喜禅 — 双修法门已成</p>' : '') +
    (gameState.flags.longmai_succession ? '<p style="color:var(--gold);">三界见证者 — 亲历龙脉续接，见证大齐·大梁·天陈交汇</p>' : gameState.flags.daqi_youdu_dream ? '<p style="color:var(--mystery);">曾踏入大齐幽都</p>' : '') +
    (gameState.flags.met_zuoqiu ? '<p style="color:var(--accent-green);">曾面见天陈·左丘咏</p>' : '') +
    '<div class="ending-reason">'+ending+'</div>';

  // Copy life log to ending panel
  var endingLog = document.getElementById('ending-log');
  var gameLog = document.getElementById('log');
  if(endingLog && gameLog) {
    endingLog.innerHTML = gameLog.innerHTML;
  }

  renderAchievements();
}

// === ACHIEVEMENTS ===
function unlockAchieve(id) {
  if(!achievements[id]) {
    achievements[id] = true;
    localStorage.setItem('dg_achievements', JSON.stringify(achievements));
    // Show popup notification
    var achData = ACHIEVEMENTS.find(function(a){return a.id===id;});
    if(achData) showAchievePopup(achData);
  }
}

function showAchievePopup(achData) {
  var popup = document.getElementById('achieve-popup');
  if(!popup) return;
  popup.querySelector('.achieve-popup-icon').textContent = achData.icon;
  popup.querySelector('.achieve-popup-name').textContent = achData.name;
  popup.querySelector('.achieve-popup-desc').textContent = achData.desc;
  popup.classList.remove('active');
  void popup.offsetWidth; // force reflow for re-animation
  popup.classList.add('active');
  clearTimeout(window._achievePopupTimer);
  window._achievePopupTimer = setTimeout(function(){ popup.classList.remove('active'); }, 3000);
}

function renderAchievements() {
  var el = document.getElementById('achieve-display');
  el.innerHTML = ACHIEVEMENTS.map(function(a){
    if(achievements[a.id]) {
      return '<div class="achieve-badge unlocked" title="解锁条件：'+a.desc+'">' +
        '<div class="achieve-icon">'+a.icon+'</div>' +
        '<div>'+a.name+'</div>' +
      '</div>';
    } else {
      return '<div class="achieve-badge">' +
        '<div class="achieve-icon">'+a.icon+'</div>' +
        '<div>???</div>' +
      '</div>';
    }
  }).join('');
}

// === RESTART ===
function restart() {
  autoMode = false;
  waitingForChoice = false;
  if(autoTimer) { clearTimeout(autoTimer); autoTimer = null; }
  document.body.style.filter = '';
  document.getElementById('btn-auto').classList.remove('active');
  document.getElementById('btn-auto').textContent = '▶ 继续';

  // Store last life's talents for carry-over
  gameState.lastLifeTalents = gameState.talents.slice();
  keptTalent = null;

  // If we have last life talents, show talent carry-over screen
  if(gameState.lastLifeTalents.length > 0 && gameState.totalRuns > 0) {
    showTalentCarryOver();
  } else {
    showPanel('setup');
    initTalents();
  }
}

function showTalentCarryOver() {
  showPanel('setup');
  var grid = document.getElementById('talent-options');
  grid.innerHTML = '<div class="talent-grid-header" style="text-align:center;color:var(--gold);margin-bottom:16px;font-size:1.1em;">前世天赋 — 选择一个保留至来世（或跳过）</div>' +
    gameState.lastLifeTalents.map(function(t,i){return (
      '<div class="talent-card rarity-'+t.rarity+'" onclick="keepTalent('+i+')" id="keep-talent-'+i+'">' +
        '<div class="talent-name">'+t.name+'</div>' +
        '<div class="talent-desc">'+t.desc+'</div>' +
        '<div class="talent-hint">'+(t.hint||'')+'</div>' +
        '<span class="talent-tag">'+(RARITY_NAMES[t.rarity]||'凡品')+'</span>' +
      '</div>');
    }).join('') +
    '<button class="btn btn-secondary" onclick="skipKeepTalent()" style="margin-top:14px;">不保留，全部重来</button>';
  document.getElementById('selected-count').textContent = '0';
  document.getElementById('btn-start').disabled = true;
  document.getElementById('btn-start').style.display = 'none';
}

function keepTalent(idx) {
  keptTalent = gameState.lastLifeTalents[idx];
  unlockAchieve('rebirth_talent');
  // Now show normal talent selection but with max 3 selections (1 kept + 3 drawn = 4 total)
  initTalentsWithKept();
}

function skipKeepTalent() {
  keptTalent = null;
  document.getElementById('btn-start').style.display = '';
  initTalents();
}

function initTalentsWithKept() {
  availableTalents = drawTalents().filter(function(t){return t.id !== keptTalent.id;}).slice(0,10);
  gameState.talents = [];
  var grid = document.getElementById('talent-options');
  grid.innerHTML = '<div class="talent-grid-header" style="text-align:center;color:var(--gold);margin-bottom:10px;font-size:0.95em;">保留天赋: <span style="color:var(--crimson)">'+keptTalent.name+'</span> — 再选三个</div>' +
    availableTalents.map(function(t,i){return (
      '<div class="talent-card rarity-'+t.rarity+'" onclick="selectTalent('+i+')" id="talent-'+i+'">' +
        '<div class="talent-name">'+t.name+'</div>' +
        '<div class="talent-desc">'+t.desc+'</div>' +
        '<div class="talent-hint">'+(t.hint||'')+'</div>' +
        '<span class="talent-tag">'+(RARITY_NAMES[t.rarity]||'凡品')+'</span>' +
      '</div>');
    }).join('');
  document.getElementById('btn-start').style.display = '';
  updateSelectCount();
}

function restartAuto() {
  gameState.lastLifeTalents = gameState.talents.slice();
  keptTalent = null;
  // Note: totalRuns already incremented in gameOver(), don't double-count
  autoMode = true;
  document.getElementById('btn-auto').classList.add('active');
  document.getElementById('btn-auto').textContent = '⏸ 暂停';
  showPanel('setup');
  initTalents();
  // Auto-select 3 random talents and start
  setTimeout(function(){
    while(gameState.talents.length<3) {
      var remaining = availableTalents.filter(function(t){return !gameState.talents.find(function(x){return x.id===t.id;});});
      if(!remaining.length) break;
      var pick = remaining[Math.floor(Math.random()*remaining.length)];
      var idx = availableTalents.indexOf(pick);
      selectTalent(idx);
    }
    startGame();
    confirmBorn();
    // confirmBorn() already sets autoMode and schedules via scheduleNext()
  }, 100);
}

// === PANEL SHOW/HIDE ===
function showPanel(id) {
  ['setup','born','game','ending'].forEach(function(p){document.getElementById(p).classList.add('hidden');});
  document.getElementById(id).classList.remove('hidden');
}

// === INIT ===
document.addEventListener('DOMContentLoaded', function(){
  initTalents();
});
