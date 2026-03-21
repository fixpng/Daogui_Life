// === GAME DATA ===
const TALENTS = {
  special: [
    {id:'xinsu',name:'心素',desc:'先天一炁，可感知两个世界的边界',effect:{sanity:30,cultivation:5},type:'special',rarity:'legendary',hint:'神志+30 修为+5'},
    {id:'jie_dan',name:'金丹种子',desc:'天生金丹资质，修炼事半功倍',effect:{cultivation:30},type:'special',rarity:'legendary',hint:'修为+30'},
    {id:'bai_ci',name:'白瓷',desc:'天生特殊体质，不惧邪祟侵蚀',effect:{sanity:20,cultivation:10},type:'special',rarity:'legendary',hint:'神志+20 修为+10'},
    {id:'tian_yan',name:'天眼',desc:'能窥见常人不可见之物',effect:{sanity:-10,cultivation:15},type:'special',rarity:'epic',hint:'修为+15 神志-10'},
    {id:'gui_mai',name:'鬼脉',desc:'先天通灵体质，与亡者共鸣',effect:{sanity:-15,cultivation:20},type:'special',rarity:'epic',hint:'修为+20 神志-15'},
    {id:'gu_ren',name:'古人',desc:'你并非此世之人，出生于数百乃至上千年前的远古时代',effect:{cultivation:15,connections:-15},type:'special',rarity:'legendary',hint:'修为+15 人脉-15 出生年份为远古时代'},
  ],
  good: [
    {id:'dao_xian',name:'道缘',desc:'天资聪颖，修炼速度极快',effect:{cultivation:10},type:'good',rarity:'rare',hint:'修为+10 每年额外修炼加成'},
    {id:'fu_gui',name:'富贵',desc:'出身富足，家有余财',effect:{wealth:50},type:'good',rarity:'rare',hint:'金银+50'},
    {id:'ji_xing',name:'吉星',desc:'运气极好，逢凶化吉',effect:{luck:30},type:'good',rarity:'rare',hint:'遭遇危险时有概率化解'},
    {id:'jian_kang',name:'健康',desc:'体魄强健，百病不侵',effect:{sanity:10},type:'good',rarity:'uncommon',hint:'神志+10'},
    {id:'shou_xing',name:'寿星',desc:'天生长寿之相',effect:{lifespan:15},type:'good',rarity:'rare',hint:'寿命上限大幅提升'},
    {id:'mei_mao',name:'美貌',desc:'生得一副好皮囊',effect:{connections:10},type:'good',rarity:'uncommon',hint:'人脉+10'},
    {id:'kou_cai',name:'口才',desc:'能言善辩，左右逢源',effect:{connections:15},type:'good',rarity:'uncommon',hint:'人脉+15'},
    {id:'zhi_hui',name:'聪慧',desc:'头脑灵光，过目不忘',effect:{cultivation:5,connections:5},type:'good',rarity:'uncommon',hint:'修为+5 人脉+5'},
    {id:'wu_xing',name:'武星',desc:'筋骨奇佳，天生习武之才',effect:{cultivation:8},type:'good',rarity:'uncommon',hint:'修为+8'},
    {id:'gui_ren',name:'贵人',desc:'命中有贵人相助',effect:{connections:20},type:'good',rarity:'rare',hint:'人脉+20'},
  ],
  bad: [
    {id:'ji_bing',name:'疾病',desc:'体弱多病，时常卧床',effect:{sanity:-20},type:'bad',rarity:'common',hint:'神志-20 但久病成医，偶有奇遇'},
    {id:'pin_kun',name:'贫困',desc:'出身贫寒，衣食无着',effect:{wealth:-30},type:'bad',rarity:'common',hint:'金银-30 但穷则思变，意志坚韧'},
    {id:'can_ji',name:'残疾',desc:'身有残缺，行动不便',effect:{sanity:-15,connections:-10},type:'bad',rarity:'cursed',hint:'神志-15 人脉-10 但心志超凡'},
    {id:'wu_qin',name:'孤儿',desc:'无父无母，孤苦伶仃',effect:{connections:-20},type:'bad',rarity:'common',hint:'人脉-20 但无牵无挂，修道少阻'},
    {id:'zai_min',name:'灾民',desc:'出身战乱之地',effect:{wealth:-20,sanity:-10},type:'bad',rarity:'cursed',hint:'金银-20 神志-10 但见惯生死'},
    {id:'yu_ben',name:'愚钝',desc:'资质鲁钝，修道无望',effect:{cultivation:-10},type:'bad',rarity:'common',hint:'修为-10 但大智若愚，心性沉稳'},
    {id:'e_meng',name:'噩梦',desc:'夜夜噩梦缠身',effect:{sanity:-15},type:'bad',rarity:'common',hint:'神志-15 但梦中偶见天机'},
    {id:'du_zhai',name:'赌债',desc:'家中欠了巨额赌债',effect:{wealth:-50},type:'bad',rarity:'cursed',hint:'金银-50 但逆境求生，人脉广'},
    {id:'chou_lou',name:'丑陋',desc:'面容丑陋，人见人避',effect:{connections:-15},type:'bad',rarity:'common',hint:'人脉-15 但不为色所困'},
    {id:'bai_bing',name:'百病',desc:'先天不足，诸疾缠身',effect:{sanity:-25},type:'bad',rarity:'cursed',hint:'神志-25 但对药理极为敏感'},
    {id:'sha_qi',name:'煞气',desc:'命带煞气，亲近之人皆遭厄运',effect:{connections:-10,sanity:-5},type:'bad',rarity:'common',hint:'人脉-10 神志-5 但邪祟不近身'},
    {id:'mo_ying',name:'魔影',desc:'总感觉背后有东西跟着',effect:{sanity:-20},type:'bad',rarity:'cursed',hint:'神志-20 但灵觉异常敏锐'},
  ]
};

const LOCATIONS = [
  {id:'zhao_cun',name:'赵家村',desc:'大梁腹地的普通村落，民风淳朴',danger:10,wealth:20},
  {id:'li_cun',name:'李家村',desc:'偏远山村，消息闭塞',danger:20,wealth:5},
  {id:'lu_cheng',name:'鲁城',desc:'小城镇，商贾往来不绝',danger:15,wealth:40},
  {id:'yang_cheng',name:'阳城',desc:'中等城市，官府势力强大',danger:10,wealth:60},
  {id:'da_liang',name:'大梁城',desc:'大梁国都，天子脚下',danger:5,wealth:80},
  {id:'shan_qu',name:'玉清山',desc:'山高林密，传闻有修仙洞府',danger:50,wealth:15},
  {id:'bian_jing',name:'边境',desc:'大梁与南疆交界，战乱频繁',danger:70,wealth:10},
  {id:'wai_jiao',name:'城外郊野',desc:'荒郊野外，偶有匪患',danger:30,wealth:25},
  {id:'nan_jiang',name:'南疆',desc:'瘴气弥漫，蛊毒横行',danger:65,wealth:30},
  {id:'xing_dao',name:'杏岛',desc:'海外仙岛，传说中修仙圣地',danger:20,wealth:50},
  {id:'gui_shi',name:'鬼市',desc:'只在夜间出现的诡异集市',danger:60,wealth:70},
];

const FACTIONS = {
  none: {name:'无', bonus:{}},
  zuowang: {name:'坐忘道', bonus:{cultivation:5,sanity:-5}, desc:'心无挂碍，坐而忘之'},
  jiantian: {name:'监天司', bonus:{wealth:10,connections:5}, desc:'监察天下异事的官方机构'},
  aojing: {name:'袄景教', bonus:{cultivation:8,connections:3}, desc:'信奉火神的神秘宗教'},
  bailian: {name:'白莲教', bonus:{connections:8,sanity:-3}, desc:'底层百姓的秘密结社'},
  biaoju: {name:'镖局', bonus:{wealth:8,connections:5}, desc:'刀口舔血，押镖为生'},
  fa_jiao: {name:'法教', bonus:{cultivation:10,sanity:-8}, desc:'来自异域的强大宗教势力'},
};

const ITEMS = [
  {id:'fu_lu',name:'镇邪符箓',desc:'可抵御邪祟一次',effect:{sanity:15}},
  {id:'dan_yao',name:'筑基丹',desc:'提升修为',effect:{cultivation:20}},
  {id:'jing_shu',name:'太清真经',desc:'记载上古功法',effect:{cultivation:30,sanity:-10}},
  {id:'gui_mian',name:'鬼面',desc:'戴上可融入鬼市',effect:{connections:10,sanity:-5}},
  {id:'hun_po_shi',name:'魂魄石',desc:'封印魂魄之物',effect:{sanity:20}},
  {id:'xue_yu',name:'血玉',desc:'以血为引的邪物',effect:{cultivation:15,sanity:-15}},
  {id:'tian_shu',name:'天书残页',desc:'记载天机的残卷',effect:{cultivation:25}},
  {id:'hei_tai_sui',name:'黑太岁',desc:'食之可见两界，但代价极大',effect:{cultivation:40,sanity:-40}},
  {id:'bai_yu_pei',name:'白玉佩',desc:'温润通灵，安神定魄',effect:{sanity:25}},
  {id:'hong_lian',name:'红莲业火种',desc:'白莲教至宝',effect:{cultivation:20,sanity:-10}},
];

const ACHIEVEMENTS = [
  {id:'first_death',name:'初入轮回',desc:'第一次死亡',icon:'☠'},
  {id:'reach_jindan',name:'金丹大道',desc:'达到金丹境界',icon:'⭕'},
  {id:'reach_danuo',name:'超凡入圣',desc:'达到大傩境界',icon:'👁'},
  {id:'rich',name:'富甲一方',desc:'金银超过200',icon:'💰'},
  {id:'mad',name:'疯人院',desc:'神志归零',icon:'🌀'},
  {id:'old',name:'长命百岁',desc:'活到80岁以上',icon:'🧓'},
  {id:'faction_all',name:'见多识广',desc:'加入过3个不同势力',icon:'🏴'},
  {id:'traveler',name:'走遍天下',desc:'去过5个不同地方',icon:'🗺'},
  {id:'collector',name:'收藏家',desc:'持有5件以上物品',icon:'📦'},
  {id:'meet_li',name:'命运交织',desc:'遇到李火旺',icon:'🔥'},
  {id:'early_death',name:'夭折',desc:'10岁前死亡',icon:'💀'},
  {id:'peaceful',name:'平淡一生',desc:'以凡人之身安享晚年',icon:'🕊'},
  {id:'orphan_rise',name:'草根崛起',desc:'孤儿出身却人脉超过50',icon:'🌱'},
  {id:'poor_rich',name:'白手起家',desc:'贫困出身却金银超过150',icon:'🏆'},
  {id:'sick_healer',name:'久病成医',desc:'疾病天赋却活过60岁',icon:'💊'},
  {id:'ugly_charm',name:'以德服人',desc:'丑陋却人脉超过40',icon:'🎭'},
  {id:'nightmare_seer',name:'梦中天机',desc:'噩梦天赋且修为达筑基',icon:'🌙'},
  {id:'disabled_warrior',name:'身残志坚',desc:'残疾天赋且修为达金丹',icon:'⚔'},
  {id:'debt_free',name:'还清赌债',desc:'赌债出身且金银超过100',icon:'🎲'},
  {id:'shadow_friend',name:'与影共生',desc:'魔影天赋且活过50岁',icon:'👤'},
  {id:'ancient_master',name:'远古遗民',desc:'以古人身份达到元婴境界',icon:'🏛'},
];

// === EVENTS ===
const CHILDHOOD_EVENTS = [
  {text:'你在村口玩耍，<span class="npc">王大娘</span>给了你一块饴糖。',choices:[
    {text:'吃掉',effect:{sanity:5},log:'糖很甜，这是童年为数不多的甜'},{text:'留给父母',effect:{connections:5},log:'父母夸你孝顺'}]},
  {text:'你突然<span class="danger-text">发起高烧</span>，烧得神志不清。',choices:[
    {text:'找郎中',effect:{wealth:-10},log:'药到病除'},{text:'硬扛过去',effect:{sanity:-10},log:'落下了病根'}]},
  {text:'<span class="npc">村里的孩子们</span>围着你，推搡嘲弄。',choices:[
    {text:'告诉长辈',effect:{connections:5},log:'大人出面教训了他们'},{text:'默默忍受',effect:{sanity:-5},log:'从此变得沉默寡言'}]},
  {text:'深夜，你看到窗外有一道<span class="mys">模糊的人影</span>站在月光里。',choices:[
    {text:'蒙上被子',effect:{sanity:-5},log:'一夜未眠'},{text:'走出去看',effect:{sanity:-10,cultivation:3},log:'什么都没有...真的什么都没有吗？'}]},
  {text:'<span class="npc">父亲</span>带你去镇上赶集，你看到一个<span class="npc">算命先生</span>。',choices:[
    {text:'让他算一卦',effect:{cultivation:3,wealth:-5},log:'他说你命格奇特'},{text:'不信这个',effect:{sanity:3},log:'理性是最好的护盾'}]},
  {text:'你帮<span class="npc">母亲</span>在田里干活，累得满头大汗。',choices:[
    {text:'坚持干完',effect:{connections:5,cultivation:2},log:'母亲很欣慰'},{text:'偷懒跑去玩',effect:{connections:-3},log:'被父亲训斥了一顿'}]},
  {text:'村里来了一队<span class="fac">道士</span>，在祠堂里做法事。',choices:[
    {text:'偷偷观看',effect:{cultivation:5},log:'那些符箓和咒语深深印入脑海'},{text:'害怕跑开',effect:{sanity:3},log:'离那些怪事远一点'}]},
  {text:'后山传来奇怪的<span class="mys">哭声</span>，整个村子的狗都在叫。',choices:[
    {text:'假装没听到',effect:{sanity:-3},log:'那声音在梦里反复出现'},{text:'和小伙伴去探险',effect:{sanity:-8,cultivation:5},log:'在山洞里发现了奇怪的符文'}]},
  {text:'你<span class="danger-text">饿了好几天</span>，肚子咕咕叫。',choices:[
    {text:'忍着',effect:{sanity:-5},log:'饥饿让人坚强'},{text:'去镇上讨饭',effect:{connections:-5,wealth:5},log:'学会了低头'}]},
  {text:'过年了，<span class="npc">父母</span>给你做了新衣裳。',choices:[
    {text:'开心地穿上',effect:{sanity:10},log:'这是最快乐的一天'},{text:'想着村外的世界',effect:{cultivation:2},log:'你心里藏着远方'}]},
  {text:'你在河边洗衣服，看到水中倒映的<span class="mys">不是自己的脸</span>。',choices:[
    {text:'揉揉眼睛再看',effect:{sanity:-8},log:'再看时一切正常...大概是错觉'},{text:'告诉大人',effect:{connections:-3,sanity:3},log:'没人相信你'}]},
  {text:'一只<span class="mys">黑猫</span>每天跟着你，村里人说它不吉利。',choices:[
    {text:'收养它',effect:{connections:-5,sanity:5},log:'它成了你唯一的伙伴'},{text:'赶走它',effect:{sanity:-3},log:'它临走前回头看了你一眼'}]},
];

const TEENAGE_EVENTS = [
  {text:'遇到一位<span class="npc">游方道士</span>，他端详你许久，说你有仙缘。',choices:[
    {text:'拜师学道',effect:{cultivation:20,connections:10},log:'踏上修仙之路！'},{text:'婉言谢绝',effect:{sanity:5},log:'也许错过了什么'}]},
  {text:'<span class="fac">坐忘道</span>的人在镇上设坛讲法，围观者甚众。',choices:[
    {text:'揭穿骗局',effect:{connections:15,wealth:-10},log:'引来坐忘道的敌意'},{text:'加入坐忘道',effect:{sanity:-20,wealth:30,faction:'zuowang'},log:'成为坐忘道弟子'},
    {text:'默默走开',effect:{},log:'与你无关'}]},
  {text:'<span class="npc">县太爷</span>贴出告示征兵，抵御南疆蛮族。',choices:[
    {text:'投军报国',effect:{connections:20,wealth:20,cultivation:5},log:'成为一名士兵'},{text:'想办法逃避',effect:{connections:-15},log:'躲在山里三个月'}]},
  {text:'夜里，你看到自己同时出现在<span class="mys">两个不同的地方</span>。',choices:[
    {text:'"这是幻觉"',effect:{sanity:-10},log:'但那感觉太真实了'},{text:'"我果然与众不同"',effect:{cultivation:8,sanity:-5},log:'你开始理解这个世界的裂痕'}],check:'xinsu'},
  {text:'一位<span class="npc">白化女子</span>在路边哭泣，请你帮忙寻找丢失的妹妹。',choices:[
    {text:'帮助她',effect:{connections:20,sanity:-5},log:'她叫白灵淼，你们成了朋友'},{text:'抱歉走开',effect:{connections:-5},log:'她哀伤的眼神挥之不去'}]},
  {text:'你在山中发现一具<span class="mys">穿道袍的枯骨</span>，旁边有一卷竹简。',choices:[
    {text:'取走竹简',effect:{cultivation:15,sanity:-8},log:'竹简上记载着奇怪的功法',item:'jing_shu'},{text:'合掌离去',effect:{sanity:5},log:'入土为安'}]},
  {text:'<span class="npc">镇上的铁匠</span>说可以教你打铁的手艺。',choices:[
    {text:'拜师学艺',effect:{wealth:15,cultivation:3},log:'多了一门谋生的手艺'},{text:'不感兴趣',effect:{},log:'你志不在此'}]},
  {text:'一个<span class="npc">同龄少年</span>邀你结拜为兄弟。',choices:[
    {text:'义结金兰',effect:{connections:15},log:'多了一个可以托付性命的兄弟'},{text:'婉拒',effect:{},log:'你不习惯与人走近'}]},
  {text:'你在溪边打水，水面突然泛起<span class="mys">血红色</span>。',choices:[
    {text:'伸手触碰',effect:{sanity:-15,cultivation:10},log:'一股奇异的力量涌入体内'},{text:'立刻后退',effect:{sanity:5},log:'感觉躲过了一劫'}]},
  {text:'<span class="fac">监天司</span>的人来村里调查异事，盘问每一个人。',choices:[
    {text:'主动配合',effect:{connections:10},log:'监天司记下了你的名字'},{text:'避而不见',effect:{connections:-5},log:'不想惹上官府'}]},
];

const ADULT_EVENTS = [
  {text:'<span class="fac">监天司</span>正在追捕一名<span class="danger-text">邪修</span>，你恰好在附近。',choices:[
    {text:'出手相助',effect:{connections:25,wealth:30,cultivation:5},log:'监天司赏你银两'},{text:'趁乱捞一笔',effect:{wealth:20,connections:-10},log:'乱世中求财'},
    {text:'赶紧跑',effect:{},log:'明哲保身'}]},
  {text:'在<span class="loc">深山古洞</span>中，你发现了一处<span class="mys">上古遗迹</span>。',choices:[
    {text:'深入探索',effect:{cultivation:25,wealth:40,sanity:-20},log:'获得了难以想象的机缘！',item:'tian_shu'},{text:'原路返回',effect:{sanity:5},log:'好奇心害死猫'}]},
  {text:'一个<span class="npc">神秘商人</span>向你兜售一颗<span class="itm">来历不明的丹药</span>。',choices:[
    {text:'买来服下',effect:{cultivation:15,sanity:-25,wealth:-20},log:'修为暴涨，但总感觉哪里不对...',item:'dan_yao'},
    {text:'谢绝',effect:{sanity:5},log:'来路不明的东西不能乱吃'}]},
  {text:'有人带你去见<span class="mys">黑太岁</span>——一种能让人看到另一个世界的东西。',choices:[
    {text:'吞食黑太岁',effect:{sanity:-50,cultivation:40},log:'你看到了！两个世界叠加在一起！',item:'hei_tai_sui'},
    {text:'坚决不吃',effect:{sanity:10},log:'你选择留在"正常"的世界'}]},
  {text:'<span class="npc">镖局</span>正在招募好手，押一批贵重货物去边境。',choices:[
    {text:'应聘镖师',effect:{connections:30,wealth:40,faction:'biaoju'},log:'成为镖师，刀口舔血'},
    {text:'不去',effect:{},log:'这行当太危险'}]},
  {text:'<span class="fac">白莲教</span>暗中传教，许诺信徒来世荣华。',choices:[
    {text:'加入',effect:{connections:20,sanity:-20,faction:'bailian'},log:'加入白莲教'},
    {text:'向官府举报',effect:{connections:15,wealth:20},log:'官府封赏了你'},
    {text:'假装没看见',effect:{},log:'多一事不如少一事'}]},
  {text:'<span class="danger-text">山贼</span>拦路抢劫，为首的是个独眼大汉。',choices:[
    {text:'拼死反抗',effect:{cultivation:10,sanity:-5},log:'打跑了山贼，身上添了几道伤疤'},
    {text:'乖乖交钱',effect:{wealth:-30},log:'破财免灾'},
    {text:'动之以情',effect:{connections:5},log:'居然说动了他，放你一马'}]},
  {text:'你在客栈休息时，隔壁传来<span class="mys">诡异的念经声</span>，持续了一整夜。',choices:[
    {text:'敲门查看',effect:{sanity:-15,cultivation:8},log:'房间里空无一人...但经声还在继续'},
    {text:'用被子捂住耳朵',effect:{sanity:-5},log:'一夜噩梦'}]},
  {text:'路遇一位<span class="npc">老道</span>，他说你身上有<span class="mys">不干净的东西</span>。',choices:[
    {text:'请他驱邪',effect:{sanity:15,wealth:-20},log:'他画了一道符给你',item:'fu_lu'},
    {text:'不信这些',effect:{sanity:-5},log:'老道叹了口气走了'}]},
  {text:'<span class="fac">袄景教</span>的圣女向你伸出手，邀你加入圣火之下。',choices:[
    {text:'加入袄景教',effect:{connections:40,cultivation:30,faction:'aojing'},log:'你在圣火前立誓'},
    {text:'敬而远之',effect:{},log:'宗教的事还是别掺和'}]},
  {text:'你在市集上看到有人贩卖<span class="itm">一块温润的白玉佩</span>。',choices:[
    {text:'买下（花费30金银）',effect:{wealth:-30,sanity:15},log:'白玉佩温润通灵，心神为之一宁',item:'bai_yu_pei'},
    {text:'太贵了',effect:{},log:'钱要省着花'}]},
  {text:'一群<span class="fac">法教</span>信徒正在进行血腥的<span class="danger-text">献祭仪式</span>。',choices:[
    {text:'阻止他们',effect:{cultivation:10,connections:-15,sanity:-10},log:'你打断了仪式，但法教记住了你'},
    {text:'加入法教',effect:{cultivation:20,sanity:-25,faction:'fa_jiao'},log:'你跪在血泊中宣誓效忠'},
    {text:'悄悄离开',effect:{sanity:-10},log:'那些尖叫声将长久萦绕'}]},
  {text:'一位<span class="npc">垂死的修士</span>将毕生修为传给你。',choices:[
    {text:'接受传承',effect:{cultivation:35,sanity:-15},log:'巨大的力量涌入丹田！'},
    {text:'帮他安详离去',effect:{connections:10,sanity:10},log:'他走得很平静'}]},
  {text:'你听说<span class="loc">鬼市</span>今夜会出现，可以买到奇物。',choices:[
    {text:'前往鬼市',effect:{wealth:-15,sanity:-10,cultivation:10},log:'用阳寿换了一件法器',item:'gui_mian'},
    {text:'不去那种地方',effect:{sanity:5},log:'还是阳间好'}]},
  {text:'夜里有<span class="mys">敲门声</span>，打开门却空无一人，只有地上一滩血迹。',choices:[
    {text:'追出去',effect:{sanity:-20,cultivation:10},log:'你在黑暗中看到了不该看到的东西'},
    {text:'关门上锁',effect:{sanity:-5},log:'一整夜门外都有窸窣声'}]},
  {text:'<span class="npc">一个孩子</span>拉着你的衣角说："叔叔，你后面跟着个<span class="mys">东西</span>。"',choices:[
    {text:'回头看',effect:{sanity:-15},log:'什么都没有...但脖子后面一直发凉'},
    {text:'给孩子一颗糖',effect:{wealth:-2,sanity:-5},log:'孩子跑开了，留下一串诡异的笑声'}]},
];

const SPECIAL_EVENTS = [
  {text:'你遇到了一个<span class="npc">疯疯癫癫的少年</span>，他自称<span class="npc">李火旺</span>，说这个世界是假的。',
    trigger:{minAge:15,maxAge:50},choices:[
    {text:'帮助他',effect:{connections:50,cultivation:20},log:'李火旺感谢了你，你看到他眼中的挣扎',achieve:'meet_li'},
    {text:'攻击他',effect:{connections:-30,cultivation:10},log:'他轻松躲开了...这个人不简单'},
    {text:'静静旁观',effect:{sanity:-20,cultivation:5},log:'你看到了不可思议的一幕'}]},
  {text:'听闻<span class="npc">诸葛渊</span>正在<span class="loc">杏岛</span>收徒，天下修士趋之若鹜。',
    trigger:{minAge:20,cultivation:50},choices:[
    {text:'前去拜访',effect:{connections:60,cultivation:40},log:'诸葛渊亲自指点了你！'},
    {text:'不凑这个热闹',effect:{},log:'错过就是错过了'}]},
  {text:'你在梦中见到了<span class="npc">太清真人</span>，他在无尽虚空中打坐。',
    trigger:{minAge:25,cultivation:80},choices:[
    {text:'请教大道',effect:{cultivation:50,sanity:-20},log:'太清真人传你一段真言'},
    {text:'跪拜后退出',effect:{cultivation:15,sanity:10},log:'得到了太清真人的认可'}]},
  {text:'<span class="mys">牛头大马面</span>在街上走过，只有你能看到他们。',
    trigger:{minAge:15},choices:[
    {text:'跟上去',effect:{sanity:-30,cultivation:20},log:'你看到了阴阳两界的交汇处'},
    {text:'闭上眼睛',effect:{sanity:-10},log:'假装什么都没发生'}],check:'xinsu'},
  {text:'<span class="loc">白玉京</span>出现在天际，巨大的倒悬之城遮蔽了半个天空。',
    trigger:{minAge:30,cultivation:100},choices:[
    {text:'飞升前往',effect:{cultivation:80,sanity:-40},log:'你踏入了白玉京！'},
    {text:'跪地膜拜',effect:{cultivation:20,sanity:-10},log:'那是神的居所'}]},
  {text:'你的<span class="mys">影子</span>开始独立行动，它在墙上向你招手。',
    trigger:{minAge:20},choices:[
    {text:'与影子对话',effect:{sanity:-25,cultivation:15},log:'影子说了一些你不愿相信的话'},
    {text:'点亮所有灯',effect:{sanity:-5,wealth:-10},log:'灯亮了，影子消失了...暂时'}]},
  {text:'<span class="npc">白灵淼</span>再次出现，她说南疆有大变故，请你帮忙。',
    trigger:{minAge:20,maxAge:60},choices:[
    {text:'随她前往南疆',effect:{connections:30,cultivation:15,sanity:-10},log:'你踏入了南疆的瘴气之中'},
    {text:'爱莫能助',effect:{connections:-10},log:'她独自离去，身影消失在雾中'}]},
];

// Faction-specific events
const FACTION_EVENTS = {
  zuowang: [
    {text:'<span class="fac">坐忘道</span>要求你参加"坐忘"仪式，忘却七情六欲。',choices:[
      {text:'参加仪式',effect:{sanity:-20,cultivation:25},log:'你忘记了一些重要的东西...'},{text:'找借口推脱',effect:{connections:-10},log:'师兄们对你不满'}]},
    {text:'<span class="fac">坐忘道</span>掌教让你去刺探<span class="fac">监天司</span>的情报。',choices:[
      {text:'接受任务',effect:{connections:15,wealth:20,sanity:-10},log:'间谍生涯开始了'},{text:'拒绝',effect:{connections:-20},log:'你在坐忘道的地位动摇'}]},
  ],
  jiantian: [
    {text:'<span class="fac">监天司</span>派你去调查一桩<span class="mys">灵异命案</span>。',choices:[
      {text:'深入调查',effect:{cultivation:15,sanity:-15,wealth:20},log:'真相令人不寒而栗'},{text:'草草了事',effect:{connections:-10},log:'上司对你很失望'}]},
    {text:'<span class="fac">监天司</span>要提拔你为百户，但需要你处置一个无辜的人。',choices:[
      {text:'服从命令',effect:{connections:20,wealth:30,sanity:-15},log:'你升了官，但夜夜噩梦'},{text:'抗命不从',effect:{connections:-25},log:'你被贬为最底层的小卒'}]},
  ],
  aojing: [
    {text:'<span class="fac">袄景教</span>圣火仪式，需要你以血献祭。',choices:[
      {text:'割破手掌',effect:{cultivation:20,sanity:-15},log:'圣火为你燃烧更旺'},{text:'退出教派',effect:{faction:'none',connections:-20},log:'你脱离了袄景教'}]},
  ],
  bailian: [
    {text:'<span class="fac">白莲教</span>密谋起义，你被拉入核心圈子。',choices:[
      {text:'参与起义',effect:{connections:30,wealth:-20,sanity:-10},log:'血与火的一夜'},{text:'告密',effect:{faction:'none',wealth:50,connections:-30},log:'你出卖了同伴'}]},
  ],
  biaoju: [
    {text:'押镖途中遇到<span class="danger-text">百人马贼</span>，镖头让你断后。',choices:[
      {text:'誓死断后',effect:{cultivation:15,connections:25,sanity:-10},log:'你浴血奋战，九死一生'},{text:'弃镖而逃',effect:{faction:'none',connections:-30},log:'你成了逃兵'}]},
  ],
  fa_jiao: [
    {text:'<span class="fac">法教</span>大祭司要你完成一场<span class="danger-text">活人祭</span>。',choices:[
      {text:'执行',effect:{cultivation:30,sanity:-30,connections:-10},log:'你的双手沾满了鲜血'},{text:'反叛',effect:{faction:'none',cultivation:-10,connections:-20},log:'你背叛了法教，成为叛徒'}]},
  ],
};

const RARITY_NAMES = {
  common: '凡品', uncommon: '良品', rare: '珍品', epic: '仙品', legendary: '天命', cursed: '厄运'
};

// === ANCIENT ERA EVENTS ===
const ANCIENT_EVENTS = [
  {text:'你见证了<span class="mys">万仙大战</span>的余波，天地间灵气剧烈震荡。',
    trigger:{minAge:15,maxYear:-1000},choices:[
    {text:'吸收散逸灵气',effect:{cultivation:40,sanity:-15},log:'你在战场废墟中得到了无上机缘'},
    {text:'远离战场',effect:{sanity:10},log:'活着比什么都重要'}]},
  {text:'一位<span class="npc">上古大能</span>路过你的村庄，随手指点了你的修炼。',
    trigger:{minAge:10,maxYear:-500},choices:[
    {text:'叩谢大恩',effect:{cultivation:50},log:'他的一句话胜过十年苦修'},
    {text:'请求拜师',effect:{cultivation:30,connections:20},log:'他笑了笑，留下一枚玉简便消失了'}]},
  {text:'你发现了一处<span class="mys">远古传送阵</span>，似乎可以穿越时空。',
    trigger:{minAge:20,maxYear:-200},choices:[
    {text:'踏入传送阵',effect:{cultivation:25,sanity:-20},log:'你穿越了百年时光，看到了未来的景象'},
    {text:'记录下阵法',effect:{cultivation:15},log:'这些知识也许日后有用'}]},
  {text:'<span class="loc">仙朝</span>覆灭在即，遍地都是逃难的修士。',
    trigger:{minAge:15,maxYear:-800},choices:[
    {text:'趁乱搜刮遗宝',effect:{wealth:60,cultivation:20,connections:-10},log:'你得到了不少好东西'},
    {text:'帮助难民',effect:{connections:30,wealth:-10},log:'他们中有几位日后成为了一方大能'}]},
  {text:'你在山中遇到一位<span class="npc">即将飞升的仙人</span>，他正在散去毕生修为。',
    trigger:{minAge:25,maxYear:-500},choices:[
    {text:'接受他的传承',effect:{cultivation:80,sanity:-25},log:'滔天的修为涌入你的身体！'},
    {text:'请教飞升之法',effect:{cultivation:30},log:'他说了三个字：忘却一切'}]},
  {text:'上古<span class="fac">天庭</span>残留的<span class="mys">神兵</span>从天而降，落在你面前。',
    trigger:{minAge:20,maxYear:-1000},choices:[
    {text:'尝试炼化',effect:{cultivation:60,sanity:-30},log:'神兵认主！你感受到了上古神威'},
    {text:'埋入地下封印',effect:{cultivation:10,sanity:10},log:'这等凶器不该留在人间'}]},
  {text:'远古<span class="mys">灵脉</span>尚未枯竭，你找到了一处灵气浓郁之地。',
    trigger:{minAge:10,maxYear:-300},choices:[
    {text:'就地闭关修炼',effect:{cultivation:35},log:'灵气充沛，修炼事半功倍'},
    {text:'标记位置，日后再来',effect:{cultivation:5,connections:5},log:'你把消息卖给了其他修士'}]},
  {text:'你偶然进入了<span class="loc">昆仑秘境</span>，这里时间流速不同。',
    trigger:{minAge:30,maxYear:-500},choices:[
    {text:'在秘境中修炼百年',effect:{cultivation:100,connections:-20},log:'出来时外面已过去了数十年'},
    {text:'取走入口处的宝物就离开',effect:{cultivation:15,wealth:40},log:'贪心不足，但也算有所收获'}]},
];
