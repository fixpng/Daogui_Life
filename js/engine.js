// === GAME ENGINE ===
var gameState = {
  talents:[], location:null, age:0, year:0,
  sanity:100, baseSanity:100, cultivation:0,
  wealth:10, connections:0, faction:'none',
  comprehension:10, karma:0, qiyun:0, constitution:50,
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
  gameState.items = []; gameState.faction = 'none';
  gameState.visitedLocations = []; gameState.factionHistory = [];
  gameState.eventHistory = new Set(); gameState.dualCultWarned = false;

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
    gameState.year = Math.floor(Math.random()*60)-30;
  }

  gameState.visitedLocations.push(gameState.location.id);

  showPanel('born');
  document.getElementById('born-location').textContent = gameState.location.name;
  document.getElementById('born-desc').textContent = gameState.location.desc;
}

function confirmBorn() {
  showPanel('game');
  document.getElementById('log').innerHTML = '';
  var names = gameState.talents.map(function(t){return '<span class="itm">'+t.name+'</span>';}).join('、');
  addLog('出生于<span class="loc">'+gameState.location.name+'</span>');
  addLog('天赋: '+names);
  addLog('大梁'+(gameState.year<0?'前'+Math.abs(gameState.year):gameState.year)+'年');

  // Check 天崩开局: all 3 talents are bad/cursed
  var allBad = gameState.talents.every(function(t){ return t.type === 'bad'; });
  if(allBad) unlockAchieve('tianbeng');

  initTooltips();
  updateDisplay();

  // Initialize audio state when game starts
  updateAudioState();
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

// === NEXT YEAR ===
function nextYear() {
  if(!gameState.alive) return;
  if(waitingForChoice) return;
  gameState.age++; gameState.year++;

  // Cultivation gain (comprehension affects cultivation speed)
  var compBonus = Math.floor(gameState.comprehension / 30); // 0-3 bonus from comprehension
  var cultGain = 1 + Math.floor(Math.random()*2) + compBonus;
  if(gameState.talents.find(function(t){return t.id==='dao_xian';})) cultGain += 3;
  if(gameState.talents.find(function(t){return t.id==='jie_dan';}) && gameState.cultivation<60) cultGain += 2;
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

  // Constitution natural drift (age affects constitution)
  if(gameState.age > 50) gameState.constitution -= 1;
  if(gameState.age > 70) gameState.constitution -= 1;
  // Comprehension slow growth from experience
  if(gameState.age > 10 && Math.random() < 0.15) gameState.comprehension += 1;
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

  // Add special events
  SPECIAL_EVENTS.forEach(function(se){
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

  // Trigger event or quiet year
  if(Math.random() < 0.72) {
    var ev = eventPool[Math.floor(Math.random()*eventPool.length)];
    showEvent(ev);
  } else {
    quietYear();
  }

  // Death checks
  if(isXinsu && gameState.sanity <= 0) { unlockAchieve('mad'); gameOver('你彻底分不清<span class="mys">现实与幻觉</span>，在无尽的噩梦中彻底迷失了。'); return; }
  if(gameState.constitution <= 0) { unlockAchieve('body_break'); gameOver('你的<span class="danger-text">肉身崩溃</span>，经脉尽断，再也无法支撑下去。'); return; }
  var maxAge = gameState.talents.find(function(t){return t.id==='shou_xing';}) ? 95 : 82;
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
    addLog('第'+a+'年：'+msgs[Math.floor(Math.random()*msgs.length)]);
  } else {
    var msgs = ['平淡的一年','日子不好不坏','又一年过去了','波澜不惊','日复一日'];
    addLog('第'+a+'年：'+msgs[Math.floor(Math.random()*msgs.length)]);
  }
}

// === SHOW EVENT ===
// Check if a choice's requirements are met
function checkChoiceReq(c) {
  if(!c.req) return {met:true, reason:''};
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
  var validChoices = event.choices.filter(function(c){return !c.check || gameState.talents.find(function(t){return t.id===c.check;});});
  if(!validChoices.length) { quietYear(); return; }

  // Play event sound
  if(typeof DaoguiAudio !== 'undefined') DaoguiAudio.playEventSound();

  if(autoMode) {
    // Auto mode: pick random choice from those with met requirements
    var autoChoices = validChoices.filter(function(c){ return checkChoiceReq(c).met; });
    if(!autoChoices.length) autoChoices = validChoices; // fallback if all locked
    var c = autoChoices[Math.floor(Math.random()*autoChoices.length)];
    applyChoice(c);
    return;
  }
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
  document.getElementById('btn-next').disabled = true;
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
    var factionData = FACTIONS[targetFaction];
    // Check requirements
    var canJoin = true;
    var rejectReason = '';
    if(factionData && factionData.requirement) {
      var req = factionData.requirement;
      if(req.cultivation && gameState.cultivation < req.cultivation) { canJoin = false; rejectReason = '修为不足'; }
      if(req.connections && gameState.connections < req.connections) { canJoin = false; rejectReason = '人脉不足'; }
      if(req.constitution && gameState.constitution < req.constitution) { canJoin = false; rejectReason = '体魄不足'; }
      if(req.wealth_max !== undefined && gameState.wealth > req.wealth_max) { canJoin = false; rejectReason = '家资太厚，非贫苦之人'; }
      if(req.karma_max !== undefined && gameState.karma > req.karma_max) { canJoin = false; rejectReason = '因果太重，不适合此道'; }
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
  }

  // Direct faction set (for leaving faction via event choices)
  if(c.effect.faction !== undefined && !c.factionJoin) {
    var newFaction = c.effect.faction;
    gameState.faction = newFaction;
    if(newFaction !== 'none' && !gameState.factionHistory.includes(newFaction)) gameState.factionHistory.push(newFaction);
    if(gameState.factionHistory.length>=3) unlockAchieve('faction_all');
    if(oldFaction !== newFaction && typeof DaoguiAudio !== 'undefined') {
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
  if(c.achieve) unlockAchieve(c.achieve);
  addLog(c.log);
  document.getElementById('choices').innerHTML = '';
  document.getElementById('event-text').innerHTML = '命运的齿轮继续转动...';
  waitingForChoice = false;
  document.getElementById('btn-next').disabled = false;

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
  document.getElementById('faction').textContent = (FACTIONS[gameState.faction] && FACTIONS[gameState.faction].name) || '无';
  document.getElementById('connections').textContent = gameState.connections;
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

// === TRAVEL ===
function openTravel() {
  if(gameState.age < 12) { addLog('你还太小，不能独自远行。'); return; }
  var modal = document.getElementById('travel-modal');
  var opts = document.getElementById('travel-options');
  var cost = 10 + Math.floor(gameState.age/10)*5;
  opts.innerHTML = LOCATIONS.filter(function(l){return l.id!==gameState.location.id;}).map(function(l){
    return '<div class="location-option" onclick="travelTo(\''+l.id+'\','+cost+')">' +
      '<div class="loc-name">'+l.name+' <span style="color:var(--text-dim);font-size:0.8em;">（花费'+cost+'金银）</span></div>' +
      '<div class="loc-desc">'+l.desc+' · 危险度: '+l.danger+'</div>' +
    '</div>';
  }).join('');
  modal.classList.add('active');
}

function travelTo(locId, cost) {
  if(gameState.wealth < cost) { addLog('金银不足，无法远行。'); closeTravel(); return; }
  gameState.wealth -= cost;
  gameState.location = LOCATIONS.find(function(l){return l.id===locId;});
  if(!gameState.visitedLocations.includes(locId)) gameState.visitedLocations.push(locId);
  if(gameState.visitedLocations.length>=5) unlockAchieve('traveler');
  addLog('你启程前往<span class="loc">'+gameState.location.name+'</span>。');

  // Trigger travel event
  if(typeof TRAVEL_EVENTS !== 'undefined' && Math.random() < 0.65) {
    var travelPool = TRAVEL_EVENTS.filter(function(te){
      if(te.locReq && te.locReq !== locId) return false;
      if(te.trigger) {
        if(te.trigger.minAge && gameState.age < te.trigger.minAge) return false;
        if(te.trigger.cultivation && gameState.cultivation < te.trigger.cultivation) return false;
      }
      return true;
    });
    if(travelPool.length > 0) {
      var te = travelPool[Math.floor(Math.random()*travelPool.length)];
      showEvent(te);
      updateDisplay();
      closeTravel();
      return;
    }
  }

  updateDisplay();
  closeTravel();
}

function closeTravel() {
  document.getElementById('travel-modal').classList.remove('active');
}

// === AUTO & SPEED ===
function toggleAuto() {
  autoMode = !autoMode;
  var btn = document.getElementById('btn-auto');
  btn.classList.toggle('active', autoMode);
  btn.textContent = autoMode ? '停止自动' : '自动轮回';
  if(autoMode && gameState.alive) nextYear();
  else clearTimeout(autoTimer);
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
function gameOver(reason) {
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
  // Karma cycle: started negative, ended positive > 50
  if(gameState.talents.find(function(t){return t.effect.karma && t.effect.karma < -10;}) && gameState.karma > 50) unlockAchieve('karma_cycle');

  gameState.totalRuns++;
  localStorage.setItem('dg_runs', gameState.totalRuns);
  localStorage.setItem('dg_achievements', JSON.stringify(achievements));

  // Multi-run achievements
  if(gameState.totalRuns >= 3) unlockAchieve('runs_3');
  if(gameState.totalRuns >= 5) unlockAchieve('runs_5');
  if(gameState.totalRuns >= 10) unlockAchieve('runs_10');
  if(gameState.totalRuns >= 20) unlockAchieve('runs_20');

  var realm = getRealmName(gameState.cultivation);
  var ending = reason;
  if(gameState.cultivation>=400) ending = '你超脱了一切，达到了<span class="itm">造化</span>之境，与天地同寿！';
  else if(gameState.cultivation>=300) ending = '你成为了<span class="itm">大傩</span>，俯瞰芸芸众生！';
  else if(gameState.sanity<=0 && gameState.cultivation>=100 && gameState.talents.find(function(t){return t.id==='xinsu';})) ending = '你看到了太多真相，在疯狂中窥见了大道的本质。';

  showPanel('ending');
  var factionName = (FACTIONS[gameState.faction] && FACTIONS[gameState.faction].name) || '无';
  var qiyunDesc = gameState.qiyun > 30 ? '气运旺盛' : gameState.qiyun < -30 ? '气运衰败' : '气运平平';
  var karmaDesc = gameState.karma > 30 ? '善因善果' : gameState.karma < -30 ? '业障深重' : '因果中平';
  document.getElementById('ending-text').innerHTML =
    '<p>享年: <span style="color:var(--gold)">'+gameState.age+'</span> 岁</p>' +
    '<p>境界: <span style="color:var(--gold)">'+realm+'</span></p>' +
    '<p>金银: <span style="color:var(--gold)">'+gameState.wealth+'</span></p>' +
    '<p>势力: <span style="color:var(--gold)">'+factionName+'</span></p>' +
    '<p>悟性: <span style="color:var(--gold)">'+gameState.comprehension+'</span> · 因果: <span style="color:var(--gold)">'+gameState.karma+' ('+karmaDesc+')</span></p>' +
    '<p>气运: <span style="color:var(--gold)">'+gameState.qiyun+' ('+qiyunDesc+')</span> · 体魄: <span style="color:var(--gold)">'+gameState.constitution+'</span></p>' +
    '<p>物品: <span style="color:var(--gold)">'+(gameState.items.length?gameState.items.map(function(i){return i.name;}).join('、'):'无')+'</span></p>' +
    (gameState.factionHistory.length > 1 ? '<p style="color:var(--danger);">曾叛出门派 '+gameState.factionHistory.length+'次 — 双修之路，九死一生</p>' : '') +
    '<div class="ending-reason">'+ending+'</div>';
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
  document.getElementById('btn-auto').textContent = '自动轮回';

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
  gameState.totalRuns++;
  autoMode = true;
  document.getElementById('btn-auto').classList.add('active');
  document.getElementById('btn-auto').textContent = '停止自动';
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
  // Close travel modal on backdrop click
  document.getElementById('travel-modal').addEventListener('click', function(e){
    if(e.target === e.currentTarget) closeTravel();
  });
});
