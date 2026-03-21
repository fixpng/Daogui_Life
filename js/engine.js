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
  dualCultWarned:false,
  lastLifeTalents:[]
};
var autoMode = false, speed = 1, autoTimer = null, availableTalents = [];
var SPEED_DELAYS = {1:3000, 2:1500, 3:1000, 4:500, 5:250};
var keptTalent = null; // talent kept from previous life
var waitingForChoice = false;
var achievements = JSON.parse(localStorage.getItem('dg_achievements')||'{}');

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
  gameState.baseSanity = 100; gameState.wealth = 10; gameState.connections = 0;
  gameState.cultivation = 0; gameState.age = 0; gameState.alive = true;
  gameState.comprehension = 10; gameState.karma = 0; gameState.qiyun = 0; gameState.constitution = 50;
  gameState.items = []; gameState.faction = 'none'; gameState.factionRank = 0;
  gameState.visitedLocations = []; gameState.factionHistory = [];
  gameState.eventHistory = new Set(); gameState.dualCultWarned = false;

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
  gameState.location = LOCATIONS[Math.floor(Math.random()*LOCATIONS.length)];
  gameState.wealth += Math.floor(gameState.location.wealth/2);

  // Year assignment: ancient person or normal
  if(gameState.talents.find(function(t){return t.id==='gu_ren';})) {
    gameState.year = -(200 + Math.floor(Math.random() * 1800));
  } else {
    gameState.year = Math.floor(Math.random()*60)-50;
  }

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
  var delay = SPEED_DELAYS[speed] || 3000;
  clearTimeout(autoTimer);
  autoTimer = setTimeout(nextYear, delay);
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
  if(y<-1500) return '混沌初开';
  if(y<-1000) return '万仙大战';
  if(y<-500) return '上古仙朝';
  if(y<-200) return '百家争道';
  if(y<-100) return '仙道衰微';
  if(y<-10) return '丹阳子时期';
  if(y<0) return '清风观覆灭后';
  if(y<5) return '李火旺成长期';
  if(y<15) return '坐忘道动乱';
  if(y<25) return '法教入侵';
  if(y<35) return '白玉京之战';
  return '末法时代';
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
  // 150岁后年岁跨度随机增大，修为越高跨度越大
  var ageStep = 1;
  if(gameState.age >= 150) {
    var cultLevel = gameState.cultivation;
    if(cultLevel >= 400) ageStep = Math.floor(Math.random() * 30) + 10; // 造化: 10-39年
    else if(cultLevel >= 300) ageStep = Math.floor(Math.random() * 20) + 5; // 大傩: 5-24年
    else if(cultLevel >= 200) ageStep = Math.floor(Math.random() * 15) + 3; // 大乘: 3-17年
    else if(cultLevel >= 150) ageStep = Math.floor(Math.random() * 10) + 2; // 化神: 2-11年
    else if(cultLevel >= 100) ageStep = Math.floor(Math.random() * 7) + 2; // 元婴: 2-8年
    else if(cultLevel >= 60) ageStep = Math.floor(Math.random() * 5) + 1; // 金丹: 1-5年
    else ageStep = Math.floor(Math.random() * 3) + 1; // 其他: 1-3年
  }
  gameState.age += ageStep; gameState.year += ageStep;
  gameState.lastAgeStep = ageStep;

  // Cultivation gain - 极低概率，模拟修仙之路极为艰难
  // 普通人没有机缘难以突破修为，每年只有约3%概率能获得提升
  var compBonus = Math.floor(gameState.comprehension / 100); // 悟性影响很小，最多+1
  var cultGain = 0;
  var hasCultivationChance = Math.random() < 0.03; // 降低到3%概率
  
  if (hasCultivationChance) {
    // 即使有机会，基础提升也只有0-1点（普通人很难突破瓶颈）
    cultGain = Math.floor(Math.random() * 2) + compBonus;
    // 天赋加成（但仍需要有机缘才能触发）
    if(gameState.talents.find(function(t){return t.id==='dao_xian';})) cultGain += 2;
    if(gameState.talents.find(function(t){return t.id==='jie_dan';}) && gameState.cultivation<60) cultGain += 1;
    if(gameState.talents.find(function(t){return t.id==='xian_gu';})) cultGain += 1;
    if(gameState.talents.find(function(t){return t.id==='wu_xing';})) cultGain += 1;
  }
  if(gameState.faction!=='none' && FACTIONS[gameState.faction]) {
    var fb = FACTIONS[gameState.faction].bonus;
    if(fb.cultivation) cultGain += Math.floor(fb.cultivation/3);
    if(fb.wealth) gameState.wealth += Math.floor(fb.wealth/4);
    if(fb.connections) gameState.connections += Math.floor(fb.connections/4);
    if(fb.sanity && gameState.talents.find(function(t){return t.id==='xinsu';})) gameState.sanity += fb.sanity;
    if(fb.comprehension) gameState.comprehension += fb.comprehension;
    if(fb.qiyun) gameState.qiyun += fb.qiyun;
    if(fb.karma) gameState.karma += fb.karma;
    if(fb.constitution) gameState.constitution += fb.constitution;
  }

  // Ancient person cultivation bonus
  if(gameState.talents.find(function(t){return t.id==='gu_ren';}) && gameState.year < -100) cultGain += 2; // 远古灵气充沛

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

  // 散修 bonus: no faction but has experience, self-reliance
  var isSanxiu = gameState.faction === 'none' && gameState.factionHistory.length > 0;
  if(isSanxiu) {
    cultGain += 1; // 散修自悟
    if(Math.random() < 0.1) gameState.comprehension += 1; // 散修更善于独立思考
  }

  gameState.cultivation += cultGain;

  // Bad talent hidden positive effects (small yearly bonuses)
  if(gameState.talents.find(function(t){return t.id==='ji_bing';}) && Math.random()<0.12) { gameState.cultivation += 2; }
  if(gameState.talents.find(function(t){return t.id==='pin_kun';}) && Math.random()<0.1) { gameState.wealth += 5; }
  if(gameState.talents.find(function(t){return t.id==='wu_qin';}) && gameState.age>=12) { gameState.cultivation += 1; }
  if(gameState.talents.find(function(t){return t.id==='yu_ben';}) && Math.random()<0.15) { gameState.connections += 2; }
  if(gameState.talents.find(function(t){return t.id==='e_meng';}) && Math.random()<0.08) { gameState.cultivation += 5; }
  if(gameState.talents.find(function(t){return t.id==='du_zhai';}) && Math.random()<0.1) { gameState.connections += 3; }
  if(gameState.talents.find(function(t){return t.id==='chou_lou';}) && Math.random()<0.1) { gameState.cultivation += 2; }
  if(gameState.talents.find(function(t){return t.id==='sha_qi';}) && Math.random()<0.1) { gameState.cultivation += 3; }
  if(gameState.talents.find(function(t){return t.id==='mo_ying';}) && Math.random()<0.08) { gameState.cultivation += 4; }
  if(gameState.talents.find(function(t){return t.id==='can_ji';}) && Math.random()<0.1) { gameState.cultivation += 3; }
  if(gameState.talents.find(function(t){return t.id==='zai_min';}) && Math.random()<0.1) { gameState.cultivation += 2; gameState.connections += 1; }
  if(gameState.talents.find(function(t){return t.id==='bai_bing';}) && Math.random()<0.08) { gameState.cultivation += 3; }
  // New talent yearly effects
  if(gameState.talents.find(function(t){return t.id==='ye_zhang';}) && Math.random()<0.10) { gameState.cultivation += 3; }
  if(gameState.talents.find(function(t){return t.id==='ti_ruo';}) && Math.random()<0.08) { gameState.comprehension += 2; }
  // Qiyun-focused talent effects
  if(gameState.talents.find(function(t){return t.id==='tian_yun';}) && Math.random()<0.15) { gameState.qiyun += 2; gameState.wealth += 3; }
  if(gameState.talents.find(function(t){return t.id==='zhuan_yun';}) && Math.random()<0.12) { gameState.qiyun += 1; gameState.constitution += 1; }
  if(gameState.talents.find(function(t){return t.id==='po_yun';}) && Math.random()<0.10) { gameState.qiyun -= 2; gameState.cultivation += 3; }
  // New novel-based talent yearly effects
  if(gameState.talents.find(function(t){return t.id==='tian_sha';}) && Math.random()<0.08) { gameState.connections -= 2; gameState.cultivation += 3; }
  if(gameState.talents.find(function(t){return t.id==='shi_yi';}) && Math.random()<0.06) { gameState.comprehension += 3; } // 前世记忆闪回
  if(gameState.talents.find(function(t){return t.id==='gui_ying';}) && Math.random()<0.08) { gameState.cultivation += 4; gameState.sanity = Math.max(0, gameState.sanity - 2); }
  if(gameState.talents.find(function(t){return t.id==='fan_gu';}) && Math.random()<0.10) { gameState.comprehension += 2; gameState.cultivation += 1; }
  if(gameState.talents.find(function(t){return t.id==='duan_ming';}) && Math.random()<0.05) { gameState.constitution -= 1; } // 命格短促
  if(gameState.talents.find(function(t){return t.id==='dan_yang_chuan';}) && Math.random()<0.08) { gameState.cultivation += 3; gameState.comprehension += 1; }
  if(gameState.talents.find(function(t){return t.id==='she_dao_ren';}) && Math.random()<0.10) { gameState.connections += 2; }
  if(gameState.talents.find(function(t){return t.id==='nuo_wu_ti';}) && Math.random()<0.08) { gameState.cultivation += 2; gameState.sanity = Math.min(120, gameState.sanity + 1); }
  if(gameState.talents.find(function(t){return t.id==='shuang_sheng';}) && Math.random()<0.10) { gameState.comprehension += 2; gameState.sanity = Math.max(0, gameState.sanity - 2); }
  if(gameState.talents.find(function(t){return t.id==='ba_xu_xue_mai';}) && Math.random()<0.08) { gameState.cultivation += 3; gameState.constitution += 1; }
  if(gameState.talents.find(function(t){return t.id==='ling_gen';}) && Math.random()<0.15) { gameState.cultivation += 2; }
  if(gameState.talents.find(function(t){return t.id==='yi_xin';}) && Math.random()<0.12) { gameState.constitution += 1; }

  // Constitution natural drift (age affects constitution, cultivation slows aging)
  var agingReduction = Math.floor(gameState.cultivation / 50); // high cultivation slows aging
  if(gameState.age > 50 + agingReduction * 10) gameState.constitution -= 1;
  if(gameState.age > 70 + agingReduction * 15) gameState.constitution -= 1;
  // Comprehension slow growth from experience
  if(gameState.age > 10 && Math.random() < 0.15) gameState.comprehension += 1;

  // === STAT INTERACTION EFFECTS ===
  // High comprehension accelerates cultivation
  if(gameState.comprehension >= 50 && Math.random() < 0.10) gameState.cultivation += 1;
  if(gameState.comprehension >= 70 && Math.random() < 0.08) gameState.cultivation += 1;
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

  // Dual cultivation risk: if factionHistory > 1 and currently in a faction, risk events
  var dualCultRisk = gameState.factionHistory.length > 1 && gameState.faction !== 'none';
  if(dualCultRisk && Math.random() < 0.15) {
    // 15% chance per year of dual cultivation side effects
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

  // Filter out gender-mismatched events and check trigger conditions on base events
  eventPool = eventPool.filter(function(ev){
    if(ev.genderReq && ev.genderReq !== gameState.gender) return false;
    if(ev.locReq && !gameState.visitedLocations.includes(ev.locReq)) return false;
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

  // Add dual cultivation events (if player has betrayed a faction)
  if(typeof DUAL_CULTIVATION_EVENTS !== 'undefined' && gameState.factionHistory.length > 1 && gameState.faction !== 'none') {
    eventPool.push.apply(eventPool, DUAL_CULTIVATION_EVENTS);
  }

  // Add 散修 events (left faction, currently unaffiliated)
  if(typeof SANXIU_EVENTS !== 'undefined' && gameState.faction === 'none' && gameState.factionHistory.length > 0) {
    SANXIU_EVENTS.forEach(function(se){
      if(se.trigger) {
        if(se.trigger.minAge && gameState.age < se.trigger.minAge) return;
        if(se.trigger.cultivation && gameState.cultivation < se.trigger.cultivation) return;
      }
      eventPool.push(se);
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

  // Add cultivation-tier events
  if(typeof CULTIVATION_TIER_EVENTS !== 'undefined') {
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
    showEvent(ev);
  } else if(Math.random() < eventChance && eventPool.length > 0) {
    // Filter out already-seen mandatory events from pool, keep non-mandatory (replayable)
    var availablePool = eventPool.filter(function(ev){
      return !ev.mandatory || !gameState.eventHistory.has(ev.text);
    });
    if(availablePool.length > 0) {
      var ev = availablePool[Math.floor(Math.random()*availablePool.length)];
      if(ev.mandatory) gameState.eventHistory.add(ev.text);
      showEvent(ev);
    } else {
      quietYear();
    }
  } else {
    quietYear();
  }

  // Death checks
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

  // Sanity visual effects
  applySanityEffects();

  // Update audio state
  updateAudioState();

  updateDisplay();
  // x1=3s, x2=1.5s, x3=1s, x4=0.5s, x5=0.25s
  var delay = SPEED_DELAYS[speed] || 3000;
  if(autoMode && gameState.alive) { clearTimeout(autoTimer); autoTimer = setTimeout(nextYear, delay); }
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
    var msgs = ['学会了走路，摇摇晃晃像只小鸭子','开始牙牙学语，叫出了第一声"娘"','在院子里爬来爬去，对什么都好奇'];
    addLog('第'+a+'年：'+msgs[Math.floor(Math.random()*msgs.length)]);
  } else if(a <= 5) {
    var msgs = ['跟着邻家小孩在泥地里打滚','蹲在门口看蚂蚁搬家，一看就是半天','缠着大人讲故事，听到鬼怪的部分既害怕又着迷','学会了数数，能从一数到一百了'];
    addLog('第'+a+'年：'+msgs[Math.floor(Math.random()*msgs.length)]);
  } else if(a <= 9) {
    var msgs = ['和小伙伴捉迷藏，躲在草垛里睡着了','帮家里喂鸡，被大公鸡追得满院子跑','偷偷跑去河边摸鱼，被母亲揪着耳朵拎回来','开始在私塾念书，先生夸你记性好','跟着父亲去田里，学会了简单的农活'];
    addLog('第'+a+'年：'+msgs[Math.floor(Math.random()*msgs.length)]);
  } else if(a <= 14) {
    var msgs = ['帮家里放牛，在山坡上看云','去镇上跑腿买东西，对集市上的杂耍看得入迷','和同龄人比赛爬树，你总是最快的','开始懂事了，知道帮父母分担家务','在私塾里和同窗争论，先生罚你们抄书'];
    addLog('第'+a+'年：'+msgs[Math.floor(Math.random()*msgs.length)]);
  } else if(a <= 19) {
    var msgs = ['开始思考人生的方向','对远方的世界充满了好奇','在田间劳作，感到一丝对未来的迷茫','听老人们讲起修仙的传说，心中若有所动','有时候会独自坐在山头，看日落很久'];
    if(gameState.gender === 'female') msgs.push('母亲开始教你女红，但你心思不在这上面','镇上的姑娘们叽叽喳喳讨论嫁人的事，你却想着远方');
    if(gameState.gender === 'male') msgs.push('父亲开始让你独自去镇上办事，你觉得自己长大了','和同龄少年比试武艺，你总是不服输');
    addLog('第'+a+'年：'+msgs[Math.floor(Math.random()*msgs.length)]);
  } else {
    var step = gameState.lastAgeStep || 1;
    var msgs;
    if(step > 1) {
      msgs = [step+'年光阴如白驹过隙',step+'年弹指一挥间','这'+step+'年波澜不惊','又是'+step+'年匆匆而过','岁月悠悠，'+step+'年转瞬即逝'];
    } else {
      msgs = ['平淡的一年','日子不好不坏','又一年过去了','波澜不惊','日复一日'];
    }
    if(gameState.gender === 'female' && a > 20 && a < 35) msgs.push('邻家嫂子又来催你成家的事了');
    if(gameState.gender === 'male' && a > 25 && a < 40) msgs.push('你开始承担更多养家的责任');
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
  if(!validChoices.length) { quietYear(); return; }

  // Play event sound
  if(typeof DaoguiAudio !== 'undefined') DaoguiAudio.playEventSound();

  // Pause auto-advance and show choices to player
  clearTimeout(autoTimer);
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
  applyChoice(c);
}

function applyChoice(c) {
  var isXinsu = gameState.talents.find(function(t){return t.id==='xinsu';});
  var oldFaction = gameState.faction;

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
      var delay = SPEED_DELAYS[speed] || 3000;
      if(autoMode && gameState.alive) { clearTimeout(autoTimer); autoTimer = setTimeout(nextYear, delay); }
      return;
    } else {
      // Weak but not hopeless - take extra damage
      gameState.constitution -= 8;
      addLog('<span class="danger-text">你险胜，但伤得不轻。</span>');
    }
  }

  if(c.effect.sanity && isXinsu) gameState.sanity = Math.max(0,Math.min(120,gameState.sanity+c.effect.sanity));
  if(c.effect.cultivation) gameState.cultivation += c.effect.cultivation;
  if(c.effect.wealth) gameState.wealth += c.effect.wealth;
  if(c.effect.connections) gameState.connections += c.effect.connections;
  if(c.effect.comprehension) gameState.comprehension = Math.max(0,Math.min(100,gameState.comprehension+c.effect.comprehension));
  if(c.effect.qiyun) gameState.qiyun = Math.max(-100,Math.min(100,gameState.qiyun+c.effect.qiyun));
  if(c.effect.karma) gameState.karma = Math.max(-100,Math.min(100,gameState.karma+c.effect.karma));
  if(c.effect.constitution) gameState.constitution = Math.max(0,Math.min(100,gameState.constitution+c.effect.constitution));

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
      if(req.karma_min !== undefined && gameState.karma < req.karma_min) { canJoin = false; rejectReason = '恶行太多，佛门不收'; }
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
  if(c.visit && !gameState.visitedLocations.includes(c.visit)) {
    gameState.visitedLocations.push(c.visit);
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

  updateDisplay();
  var delay = SPEED_DELAYS[speed] || 3000;
  if(autoMode && gameState.alive) { clearTimeout(autoTimer); autoTimer = setTimeout(nextYear, delay); }
}

// === DISPLAY ===
function updateDisplay() {
  if(!gameState.location) return; // safety check
  var isXinsu = gameState.talents.find(function(t){return t.id==='xinsu';});
  document.getElementById('age').textContent = gameState.age;
  var sv = document.getElementById('sanity');
  if(isXinsu) {
    sv.textContent = gameState.sanity;
    sv.className = 'stat-value' + (gameState.sanity<30?' danger':gameState.sanity<60?' low':'');
    document.getElementById('sanity-section').classList.remove('sanity-hidden');
  } else {
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
      nextYear();
    }
  } else {
    clearTimeout(autoTimer);
  }
}

function setSpeedFromSlider(val) {
  speed = parseInt(val);
  document.getElementById('speed-label').textContent = speed + 'x';
}

// Legacy function for compatibility
function setSpeed(s) {
  speed = s;
}

// === GAME OVER ===
var lastDeathReason = ''; // 保存死因
function gameOver(reason) {
  lastDeathReason = reason; // 保存死因
  gameState.alive = false;
  autoMode = false;
  waitingForChoice = false;
  clearTimeout(autoTimer);
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
  if(gameState.talents.find(function(t){return t.id==='gu_ren';}) && gameState.cultivation>=100) unlockAchieve('ancient_master');

  // New attribute achievements
  if(gameState.qiyun>=80) unlockAchieve('good_qiyun');
  if(gameState.qiyun<=-80) unlockAchieve('evil_qiyun');
  if(gameState.karma>=80) unlockAchieve('good_karma');
  if(gameState.karma<=-80) unlockAchieve('evil_karma');
  if(gameState.constitution>=90) unlockAchieve('iron_body');
  if(gameState.comprehension>=80) unlockAchieve('epiphany');
  if(gameState.factionHistory.length > 1 && gameState.age >= 50) unlockAchieve('dual_cult_survive');
  if(gameState.factionHistory.length === 1 && gameState.faction !== 'none') unlockAchieve('loyal');
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
  if(gameState.faction === 'bingjia' && FACTIONS.bingjia && (gameState.factionRank || 0) >= FACTIONS.bingjia.ranks.length - 1) unlockAchieve('bingjia_marshal');
  if(gameState.faction === 'fomen' && FACTIONS.fomen && (gameState.factionRank || 0) >= FACTIONS.fomen.ranks.length - 1) unlockAchieve('fomen_abbot');
  if(gameState.factionHistory.length >= 5) unlockAchieve('all_factions');
  if(gameState.faction === 'nanjiang' && gameState.constitution >= 60) unlockAchieve('gu_master_survive');
  if(gameState.faction === 'fomen' && gameState.karma <= -30) unlockAchieve('buddha_evil');

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
  if(gameState.cultivation>=400) ending = '你超脱了一切，达到了<span class="itm">造化</span>之境，与天地同寿！';
  else if(gameState.cultivation>=300) ending = '你成为了<span class="itm">大傩</span>，俯瞰芸芸众生！';
  else if(gameState.cultivation>=200 && factionName === '散修') ending = '你以<span class="itm">散修之身</span>达到大乘境界，百家之长融于一身，成为江湖传说！';
  else if(gameState.cultivation>=200 && rankName) ending = '你以<span class="itm">' + factionName + '·' + rankName + '</span>之身达到大乘境界，名震天下！';
  else if(gameState.sanity<=0 && gameState.cultivation>=100 && gameState.talents.find(function(t){return t.id==='xinsu';})) ending = '你看到了太多真相，在疯狂中窥见了大道的本质。';
  // Stat-influenced endings
  else if(gameState.karma>=60 && gameState.cultivation>=60) ending = '你一生行善积德，功德圆满。金光护体之中，你安详地闭上了双眼——死后有万民自发送行。';
  else if(gameState.karma<=-60 && gameState.cultivation>=60) ending = '你一生造业无数，业障深重。临终之际，无数冤魂在你面前浮现——你在恐惧中走完了这一世。';
  else if(gameState.constitution<=0 && gameState.cultivation>=100) ending = '你修为高深却肉身崩溃——修仙之路，终究不能忽视根基。';
  else if(gameState.qiyun>=50 && gameState.age>=70) ending = '你一生鸿运当头，善始善终。临终之际，天降祥瑞，后人将你的一生编成传奇故事。';
  else if(gameState.qiyun<=-50) ending = '你一生时运不济，厄运缠身。临终之际，你不禁感叹——命运从未眷顾过你。';
  else if(gameState.comprehension>=70 && gameState.cultivation>=30) ending = '你悟性通天，虽未能成就大道，但留下的道论将启发后来者。';
  else if(gameState.connections>=60 && gameState.cultivation<10) ending = '你虽是凡人，却人脉广达，一生交友无数。临终之际，故友旧交纷纷前来送行——这一世，值了。';
  else if(gameState.wealth>=200 && gameState.cultivation<10) ending = '你虽无修仙之缘，却富甲一方。临终之际，金银堆满了灵堂，但你知道这些带不走。';

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
    (gameState.factionHistory.length > 1 ? '<p style="color:var(--danger);">曾叛出门派 '+gameState.factionHistory.length+'次 — 双修之路，九死一生</p>' : '') +
    (factionName === '散修' ? '<p style="color:var(--gold);">散修之身，不拘一格 — 曾历'+gameState.factionHistory.map(function(f){return FACTIONS[f]?FACTIONS[f].name:f;}).join('、')+'</p>' : '') +
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
  clearTimeout(autoTimer);
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
  grid.innerHTML = '<div style="text-align:center;color:var(--gold);margin-bottom:16px;font-size:1.1em;">前世天赋 — 选择一个保留至来世（或跳过）</div>' +
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
  grid.innerHTML = '<div style="text-align:center;color:var(--gold);margin-bottom:10px;font-size:0.95em;">保留天赋: <span style="color:var(--crimson)">'+keptTalent.name+'</span> — 再选三个</div>' +
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
    if(autoMode) nextYear();
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
