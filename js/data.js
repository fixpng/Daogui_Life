// === GAME DATA ===
const TALENTS = {
  special: [
    {id:'xinsu',name:'心素',desc:'先天一炁，可感知两个世界的边界',effect:{sanity:30,cultivation:5,comprehension:10},type:'special',rarity:'legendary',hint:'神志+30 修为+5 悟性+10'},
    {id:'jie_dan',name:'金丹种子',desc:'天生金丹资质，修炼事半功倍',effect:{cultivation:30,comprehension:15},type:'special',rarity:'legendary',hint:'修为+30 悟性+15'},
    {id:'bai_ci',name:'白瓷',desc:'天生特殊体质，不惧邪祟侵蚀',effect:{sanity:20,cultivation:10,constitution:15},type:'special',rarity:'legendary',hint:'神志+20 修为+10 体魄+15'},
    {id:'tian_yan',name:'天眼',desc:'能窥见常人不可见之物',effect:{sanity:-10,cultivation:15,comprehension:20},type:'special',rarity:'epic',hint:'修为+15 悟性+20 神志-10'},
    {id:'gui_mai',name:'鬼脉',desc:'先天通灵体质，与亡者共鸣',effect:{sanity:-15,cultivation:20,qiyun:-10,karma:-5},type:'special',rarity:'epic',hint:'修为+20 气运-10 因果-5 神志-15'},
    {id:'gu_ren',name:'古人',desc:'你并非此世之人，出生于数百乃至上千年前的远古时代',effect:{cultivation:15,connections:-15,comprehension:10},type:'special',rarity:'legendary',hint:'修为+15 悟性+10 人脉-15 出生年份为远古时代'},
  ],
  good: [
    {id:'dao_xian',name:'道缘',desc:'天资聪颖，修炼速度极快',effect:{cultivation:10,comprehension:10},type:'good',rarity:'rare',hint:'修为+10 悟性+10 每年额外修炼加成'},
    {id:'fu_gui',name:'富贵',desc:'出身富足，家有余财',effect:{wealth:50,qiyun:5},type:'good',rarity:'rare',hint:'金银+50 气运+5'},
    {id:'ji_xing',name:'吉星',desc:'运气极好，逢凶化吉',effect:{luck:30,qiyun:10},type:'good',rarity:'rare',hint:'遭遇危险时有概率化解 气运+10'},
    {id:'jian_kang',name:'健康',desc:'体魄强健，百病不侵',effect:{sanity:10,constitution:15},type:'good',rarity:'uncommon',hint:'神志+10 体魄+15'},
    {id:'shou_xing',name:'寿星',desc:'天生长寿之相',effect:{lifespan:15,constitution:10},type:'good',rarity:'rare',hint:'寿命上限大幅提升 体魄+10'},
    {id:'mei_mao',name:'美貌',desc:'生得一副好皮囊',effect:{connections:10,qiyun:5},type:'good',rarity:'uncommon',hint:'人脉+10 气运+5'},
    {id:'kou_cai',name:'口才',desc:'能言善辩，左右逢源',effect:{connections:15},type:'good',rarity:'uncommon',hint:'人脉+15'},
    {id:'zhi_hui',name:'聪慧',desc:'头脑灵光，过目不忘',effect:{cultivation:5,connections:5,comprehension:10},type:'good',rarity:'uncommon',hint:'修为+5 人脉+5 悟性+10'},
    {id:'wu_xing',name:'武星',desc:'筋骨奇佳，天生习武之才',effect:{cultivation:8,constitution:10},type:'good',rarity:'uncommon',hint:'修为+8 体魄+10'},
    {id:'gui_ren',name:'贵人',desc:'命中有贵人相助',effect:{connections:20,qiyun:10},type:'good',rarity:'rare',hint:'人脉+20 气运+10'},
    {id:'xian_gu',name:'仙骨',desc:'骨骼清奇，天生道体',effect:{cultivation:12,comprehension:15,constitution:5},type:'good',rarity:'rare',hint:'修为+12 悟性+15 体魄+5'},
    {id:'fu_yuan',name:'福缘',desc:'前世积德，今生有福',effect:{karma:20,qiyun:10,wealth:10},type:'good',rarity:'uncommon',hint:'因果+20 气运+10 金银+10'},
  ],
  bad: [
    {id:'ji_bing',name:'疾病',desc:'体弱多病，时常卧床',effect:{sanity:-20,constitution:-15},type:'bad',rarity:'common',hint:'神志-20 体魄-15 但久病成医，偶有奇遇'},
    {id:'pin_kun',name:'贫困',desc:'出身贫寒，衣食无着',effect:{wealth:-30},type:'bad',rarity:'common',hint:'金银-30 但穷则思变，意志坚韧'},
    {id:'can_ji',name:'残疾',desc:'身有残缺，行动不便',effect:{sanity:-15,connections:-10,constitution:-20},type:'bad',rarity:'cursed',hint:'神志-15 人脉-10 体魄-20 但心志超凡'},
    {id:'wu_qin',name:'孤儿',desc:'无父无母，孤苦伶仃',effect:{connections:-20,qiyun:-5},type:'bad',rarity:'common',hint:'人脉-20 气运-5 但无牵无挂，修道少阻'},
    {id:'zai_min',name:'灾民',desc:'出身战乱之地',effect:{wealth:-20,sanity:-10,constitution:-5},type:'bad',rarity:'cursed',hint:'金银-20 神志-10 体魄-5 但见惯生死'},
    {id:'yu_ben',name:'愚钝',desc:'资质鲁钝，修道无望',effect:{cultivation:-10,comprehension:-10},type:'bad',rarity:'common',hint:'修为-10 悟性-10 但大智若愚，心性沉稳'},
    {id:'e_meng',name:'噩梦',desc:'夜夜噩梦缠身',effect:{sanity:-15,comprehension:5},type:'bad',rarity:'common',hint:'神志-15 悟性+5 但梦中偶见天机'},
    {id:'du_zhai',name:'赌债',desc:'家中欠了巨额赌债',effect:{wealth:-50,qiyun:-10},type:'bad',rarity:'cursed',hint:'金银-50 气运-10 但逆境求生，人脉广'},
    {id:'chou_lou',name:'丑陋',desc:'面容丑陋，人见人避',effect:{connections:-15},type:'bad',rarity:'common',hint:'人脉-15 但不为色所困'},
    {id:'bai_bing',name:'百病',desc:'先天不足，诸疾缠身',effect:{sanity:-25,constitution:-20},type:'bad',rarity:'cursed',hint:'神志-25 体魄-20 但对药理极为敏感'},
    {id:'sha_qi',name:'煞气',desc:'命带煞气，亲近之人皆遭厄运',effect:{connections:-10,sanity:-5,qiyun:-5,karma:-10},type:'bad',rarity:'common',hint:'人脉-10 神志-5 气运-5 因果-10 但邪祟不近身'},
    {id:'mo_ying',name:'魔影',desc:'总感觉背后有东西跟着',effect:{sanity:-20,comprehension:5},type:'bad',rarity:'cursed',hint:'神志-20 悟性+5 但灵觉异常敏锐'},
    {id:'ye_zhang',name:'业障',desc:'前世造业深重，今生因果沉重',effect:{karma:-30,qiyun:-10,sanity:-10},type:'bad',rarity:'cursed',hint:'因果-30 气运-10 神志-10 但业火焚身，偶可借力修炼'},
    {id:'ti_ruo',name:'体弱',desc:'先天体弱，弱不禁风',effect:{constitution:-25},type:'bad',rarity:'common',hint:'体魄-25 但心思细腻，悟性偶有提升'},
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
  none: {name:'无', bonus:{}, desc:'', requirement:null},
  zuowang: {name:'坐忘道', bonus:{cultivation:5,sanity:-5,comprehension:2}, desc:'心无挂碍，坐而忘之。以"坐忘"之法修行，忘却七情六欲以求大道。',
    requirement:{cultivation:10}, requireDesc:'需修为境界达锻体以上'},
  jiantian: {name:'监天司', bonus:{wealth:10,connections:5,qiyun:3}, desc:'监察天下异事的官方机构，隶属大梁朝廷。',
    requirement:{connections:10}, requireDesc:'需人脉10以上'},
  aojing: {name:'袄景教', bonus:{cultivation:8,connections:3,qiyun:-2}, desc:'信奉火神的神秘宗教，教义晦涩，仪式残忍。',
    requirement:{cultivation:20}, requireDesc:'需修为境界达练气以上'},
  bailian: {name:'白莲教', bonus:{connections:8,sanity:-3,qiyun:-3}, desc:'底层百姓的秘密结社，以推翻朝廷为己任。',
    requirement:{wealth_max:50}, requireDesc:'金银不超过50方可入教'},
  biaoju: {name:'镖局', bonus:{wealth:8,connections:5,constitution:2}, desc:'刀口舔血，押镖为生。江湖人的正道营生。',
    requirement:{constitution:30}, requireDesc:'需体魄30以上'},
  fa_jiao: {name:'法教', bonus:{cultivation:10,sanity:-8,karma:-5,qiyun:-3}, desc:'来自异域的强大宗教势力，以活人祭祀闻名，修行邪法。',
    requirement:{cultivation:30,karma_max:10}, requireDesc:'需修为筑基以上且因果不高于10'},
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
  // === NEW ITEMS ===
  {id:'yin_yang_jing',name:'阴阳镜',desc:'可映照气运业力',effect:{comprehension:15,qiyun:10}},
  {id:'po_jie_zhu',name:'破戒珠',desc:'佛门叛逆之物，蕴含极端力量',effect:{cultivation:25,qiyun:-20}},
  {id:'tian_ji_pan',name:'天机盘',desc:'可推演天命走向',effect:{comprehension:20}},
  {id:'long_hu_dan',name:'龙虎丹',desc:'淬炼体魄的灵丹',effect:{constitution:25,cultivation:10}},
  {id:'nuo_mian',name:'傩面',desc:'大傩仪式所用面具，戴上后人格会变',effect:{cultivation:30,sanity:-20,qiyun:-15}},
  {id:'dan_yang_jian',name:'丹阳遗剑',desc:'丹阳子遗物，剑身有裂痕',effect:{cultivation:20,comprehension:10}},
];

const ACHIEVEMENTS = [
  {id:'first_death',name:'初入轮回',desc:'第一次死亡',icon:'☠'},
  {id:'reach_jindan',name:'金丹大道',desc:'达到金丹境界',icon:'⭕'},
  {id:'reach_danuo',name:'超凡入圣',desc:'达到大傩境界',icon:'👁'},
  {id:'rich',name:'富甲一方',desc:'金银超过200',icon:'💰'},
  {id:'mad',name:'疯人院',desc:'心素天赋且神志归零',icon:'🌀'},
  {id:'old',name:'长命百岁',desc:'活到80岁以上',icon:'🧓'},
  {id:'faction_all',name:'见多识广',desc:'加入过3个不同势力（叛徒之路）',icon:'🏴'},
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
  {id:'tianbeng',name:'天崩开局',desc:'三个天赋全选厄运',icon:'🔥'},
  // === NEW ACHIEVEMENTS ===
  {id:'good_karma',name:'功德圆满',desc:'因果达到80以上',icon:'🙏'},
  {id:'evil_karma',name:'万劫不复',desc:'因果降至-80以下',icon:'👹'},
  {id:'good_qiyun',name:'鸿运当头',desc:'气运达到80以上',icon:'🍀'},
  {id:'evil_qiyun',name:'时运不济',desc:'气运降至-80以下',icon:'🌑'},
  {id:'iron_body',name:'金刚不坏',desc:'体魄达到90以上',icon:'💪'},
  {id:'epiphany',name:'大彻大悟',desc:'悟性达到80以上',icon:'💡'},
  {id:'betrayer',name:'六亲不认',desc:'叛出门派后加入新门派',icon:'🗡'},
  {id:'loyal',name:'从一而终',desc:'始终效忠同一门派至死',icon:'🛡'},
  {id:'dual_cult_survive',name:'九死一生',desc:'双修后存活至50岁',icon:'⚡'},
  {id:'karma_cycle',name:'因果轮回',desc:'因果从负转正超过50',icon:'☯'},
  {id:'body_break',name:'肉身崩溃',desc:'体魄降至0死亡',icon:'💔'},
  {id:'meet_danyang',name:'丹阳遗风',desc:'遇到丹阳子的传承',icon:'⚔'},
  {id:'nuo_ritual',name:'大傩祭司',desc:'完成大傩仪式',icon:'🎭'},
  // === MULTI-RUN ACHIEVEMENTS ===
  {id:'runs_3',name:'轮回不息',desc:'完成3次轮回',icon:'🔄'},
  {id:'runs_5',name:'五世轮转',desc:'完成5次轮回',icon:'🔁'},
  {id:'runs_10',name:'十世修行',desc:'完成10次轮回',icon:'♾'},
  {id:'runs_20',name:'永恒轮回',desc:'完成20次轮回',icon:'🌀'},
  {id:'rebirth_talent',name:'重启人生',desc:'重生时保留了前世天赋',icon:'🌅'},
];

// === EVENTS ===
const CHILDHOOD_EVENTS = [
  {text:'你在村口玩耍，<span class="npc">王大娘</span>给了你一块饴糖。',choices:[
    {text:'吃掉',effect:{sanity:5},log:'糖很甜，这是童年为数不多的甜'},{text:'留给父母',effect:{connections:5,qiyun:3,karma:3},log:'父母夸你孝顺'}]},
  {text:'你突然<span class="danger-text">发起高烧</span>，烧得神志不清。',choices:[
    {text:'找郎中',effect:{wealth:-10},log:'药到病除'},{text:'硬扛过去',effect:{sanity:-10,constitution:-3},log:'落下了病根'}]},
  {text:'<span class="npc">村里的孩子们</span>围着你，推搡嘲弄。',choices:[
    {text:'告诉长辈',effect:{connections:5},log:'大人出面教训了他们'},{text:'默默忍受',effect:{sanity:-5,comprehension:2},log:'从此变得沉默寡言'}]},
  {text:'深夜，你看到窗外有一道<span class="mys">模糊的人影</span>站在月光里。',choices:[
    {text:'蒙上被子',effect:{sanity:-5},log:'一夜未眠'},{text:'走出去看',effect:{sanity:-10,cultivation:3,comprehension:3},log:'什么都没有...真的什么都没有吗？'}]},
  {text:'<span class="npc">父亲</span>带你去镇上赶集，你看到一个<span class="npc">算命先生</span>。',choices:[
    {text:'让他算一卦',effect:{cultivation:3,wealth:-5,comprehension:2},log:'他说你命格奇特'},{text:'不信这个',effect:{sanity:3},log:'理性是最好的护盾'}]},
  {text:'你帮<span class="npc">母亲</span>在田里干活，累得满头大汗。',choices:[
    {text:'坚持干完',effect:{connections:5,cultivation:2,constitution:2},log:'母亲很欣慰'},{text:'偷懒跑去玩',effect:{connections:-3},log:'被父亲训斥了一顿'}]},
  {text:'村里来了一队<span class="fac">道士</span>，在祠堂里做法事。',choices:[
    {text:'偷偷观看',effect:{cultivation:5,comprehension:3},log:'那些符箓和咒语深深印入脑海'},{text:'害怕跑开',effect:{sanity:3},log:'离那些怪事远一点'}]},
  {text:'后山传来奇怪的<span class="mys">哭声</span>，整个村子的狗都在叫。',choices:[
    {text:'假装没听到',effect:{sanity:-3},log:'那声音在梦里反复出现'},{text:'和小伙伴去探险',effect:{sanity:-8,cultivation:5,constitution:2},log:'在山洞里发现了奇怪的符文'}]},
  {text:'你<span class="danger-text">饿了好几天</span>，肚子咕咕叫。',choices:[
    {text:'忍着',effect:{sanity:-5,constitution:-2},log:'饥饿让人坚强'},{text:'去镇上讨饭',effect:{connections:-5,wealth:5,qiyun:-2},log:'学会了低头'}]},
  {text:'过年了，<span class="npc">父母</span>给你做了新衣裳。',choices:[
    {text:'开心地穿上',effect:{sanity:10,qiyun:2},log:'这是最快乐的一天'},{text:'想着村外的世界',effect:{cultivation:2,comprehension:2},log:'你心里藏着远方'}]},
  {text:'你在河边洗衣服，看到水中倒映的<span class="mys">不是自己的脸</span>。',choices:[
    {text:'揉揉眼睛再看',effect:{sanity:-8},log:'再看时一切正常...大概是错觉'},{text:'告诉大人',effect:{connections:-3,sanity:3},log:'没人相信你'}]},
  {text:'一只<span class="mys">黑猫</span>每天跟着你，村里人说它不吉利。',choices:[
    {text:'收养它',effect:{connections:-5,sanity:5,qiyun:5},log:'它成了你唯一的伙伴'},{text:'赶走它',effect:{sanity:-3,qiyun:-3},log:'它临走前回头看了你一眼'}]},
  // === NEW CHILDHOOD EVENTS ===
  {text:'你在井边打水，看到井底似乎有<span class="mys">一双眼睛</span>在盯着你。',choices:[
    {text:'大声呼喊',effect:{connections:3,sanity:-3},log:'大人赶来时什么都没有'},{text:'回盯那双眼睛',effect:{sanity:-8,comprehension:5,cultivation:3},log:'那双眼睛眨了一下就消失了'}]},
  {text:'村里的<span class="npc">老秀才</span>教你识字，你对"道"字格外感兴趣。',choices:[
    {text:'追问"道"的含义',effect:{comprehension:5,cultivation:2},log:'老秀才说道可道非常道'},{text:'认真学其他字',effect:{connections:3,wealth:2},log:'读书识字是正途'}]},
  {text:'你不小心踩死了一只蝴蝶，心里有种奇怪的<span class="mys">愧疚感</span>。',choices:[
    {text:'把它埋了',effect:{qiyun:5,sanity:2,karma:3},log:'你第一次感受到因果'},{text:'不以为意',effect:{qiyun:-3,karma:-2},log:'不过是只虫子罢了'}]},
];

const TEENAGE_EVENTS = [
  {text:'遇到一位<span class="npc">游方道士</span>，他端详你许久，说你有仙缘。',choices:[
    {text:'拜师学道',effect:{cultivation:20,connections:10,comprehension:5},log:'踏上修仙之路！'},{text:'婉言谢绝',effect:{sanity:5},log:'也许错过了什么'}]},
  {text:'<span class="fac">坐忘道</span>的人在镇上设坛讲法，围观者甚众。',choices:[
    {text:'揭穿骗局',effect:{connections:15,wealth:-10,qiyun:5},log:'引来坐忘道的敌意'},
    {text:'请求入道',effect:{sanity:-20,wealth:30},log:'坐忘道弟子考验你...',factionJoin:'zuowang'},
    {text:'默默走开',effect:{},log:'与你无关'}]},
  {text:'<span class="npc">县太爷</span>贴出告示征兵，抵御南疆蛮族。',choices:[
    {text:'投军报国',effect:{connections:20,wealth:20,cultivation:5,constitution:5,qiyun:5},log:'成为一名士兵'},{text:'想办法逃避',effect:{connections:-15,qiyun:-5},log:'躲在山里三个月'}]},
  {text:'夜里，你看到自己同时出现在<span class="mys">两个不同的地方</span>。',choices:[
    {text:'"这是幻觉"',effect:{sanity:-10},log:'但那感觉太真实了'},{text:'"我果然与众不同"',effect:{cultivation:8,sanity:-5,comprehension:5},log:'你开始理解这个世界的裂痕'}],check:'xinsu'},
  {text:'一位<span class="npc">白化女子</span>在路边哭泣，请你帮忙寻找丢失的妹妹。',choices:[
    {text:'帮助她',effect:{connections:20,sanity:-5,qiyun:10},log:'她叫白灵淼，你们成了朋友'},{text:'抱歉走开',effect:{connections:-5,qiyun:-5},log:'她哀伤的眼神挥之不去'}]},
  {text:'你在山中发现一具<span class="mys">穿道袍的枯骨</span>，旁边有一卷竹简。',choices:[
    {text:'取走竹简',effect:{cultivation:15,sanity:-8,comprehension:5},log:'竹简上记载着奇怪的功法',item:'jing_shu'},{text:'合掌离去',effect:{sanity:5,qiyun:5},log:'入土为安'}]},
  {text:'<span class="npc">镇上的铁匠</span>说可以教你打铁的手艺。',choices:[
    {text:'拜师学艺',effect:{wealth:15,cultivation:3,constitution:5},log:'多了一门谋生的手艺'},{text:'不感兴趣',effect:{},log:'你志不在此'}]},
  {text:'一个<span class="npc">同龄少年</span>邀你结拜为兄弟。',choices:[
    {text:'义结金兰',effect:{connections:15,qiyun:5},log:'多了一个可以托付性命的兄弟'},{text:'婉拒',effect:{},log:'你不习惯与人走近'}]},
  {text:'你在溪边打水，水面突然泛起<span class="mys">血红色</span>。',choices:[
    {text:'伸手触碰',effect:{sanity:-15,cultivation:10,qiyun:-5},log:'一股奇异的力量涌入体内'},{text:'立刻后退',effect:{sanity:5},log:'感觉躲过了一劫'}]},
  {text:'<span class="fac">监天司</span>的人来村里调查异事，盘问每一个人。',choices:[
    {text:'主动配合',effect:{connections:10,qiyun:3},log:'监天司记下了你的名字'},{text:'避而不见',effect:{connections:-5},log:'不想惹上官府'}]},
  // === NEW TEENAGE EVENTS ===
  {text:'你在山中修炼时，突然感到体内有一股<span class="mys">异样的力量</span>在冲撞经脉。',choices:[
    {text:'引导力量运行',effect:{cultivation:10,constitution:5,comprehension:5},log:'你找到了力量的正确走向'},{text:'强行压制',effect:{constitution:-5,sanity:-5},log:'力量暂时平息，但隐患犹存'}]},
  {text:'你偶然看到<span class="npc">一个衣衫褴褛的老者</span>在街上画符，符纸自燃。',choices:[
    {text:'上前请教',effect:{cultivation:15,comprehension:8,wealth:-5},log:'老者传你三道符箓之法'},{text:'觉得是骗子',effect:{sanity:3},log:'也许真是个骗子...也许不是'}]},
  {text:'月圆之夜，你做了一个奇怪的梦——梦里有人叫你的<span class="mys">另一个名字</span>。',choices:[
    {text:'努力记住那个名字',effect:{comprehension:8,sanity:-10,cultivation:5},log:'醒来后只记得一个模糊的音节'},{text:'惊醒后拼命忘掉',effect:{sanity:5},log:'那个名字在记忆边缘若隐若现'}]},
  // === GENDER-SPECIFIC TEENAGE EVENTS ===
  {text:'村里的<span class="npc">媒婆</span>找上门来，说要给你说一门亲事。',choices:[
    {text:'答应相看',effect:{connections:10,qiyun:3},log:'对方家境殷实，但你心里另有打算'},
    {text:'婉言谢绝',effect:{connections:-5},log:'媒婆嘀嘀咕咕地走了'}]},
  {text:'一位<span class="npc">江湖女侠</span>路见不平拔刀相助，你恰好在旁边。',choices:[
    {text:'上前帮忙',effect:{connections:10,cultivation:5,constitution:3},log:'你们联手击退了恶人',genderReq:'male'},
    {text:'上前帮忙',effect:{connections:10,cultivation:5,constitution:3},log:'两位女侠并肩作战',genderReq:'female'},
    {text:'在旁观看',effect:{comprehension:3},log:'看她的身手，受益匪浅'}]},
  {text:'你在镇上被<span class="npc">一群纨绔子弟</span>围住，他们看你不顺眼。',choices:[
    {text:'以武力突围',effect:{cultivation:5,constitution:3,connections:-5},log:'你打翻了几个，但也结了仇',req:{constitution:20}},
    {text:'以言语化解',effect:{connections:5,comprehension:2},log:'你三言两语化解了冲突',req:{connections:5}},
    {text:'忍气吞声',effect:{sanity:-5,karma:3},log:'被人欺负的滋味不好受'}]},
];

const ADULT_EVENTS = [
  {text:'<span class="fac">监天司</span>正在追捕一名<span class="danger-text">邪修</span>，你恰好在附近。',choices:[
    {text:'出手相助',effect:{connections:25,wealth:30,cultivation:5,qiyun:10},log:'监天司赏你银两',req:{cultivation:30}},{text:'趁乱捞一笔',effect:{wealth:20,connections:-10,qiyun:-10},log:'乱世中求财'},
    {text:'赶紧跑',effect:{},log:'明哲保身'}]},
  {text:'在<span class="loc">深山古洞</span>中，你发现了一处<span class="mys">上古遗迹</span>。',choices:[
    {text:'深入探索',effect:{cultivation:25,wealth:40,sanity:-20,comprehension:10},log:'获得了难以想象的机缘！',item:'tian_shu',req:{constitution:30}},{text:'原路返回',effect:{sanity:5},log:'好奇心害死猫'}]},
  {text:'一个<span class="npc">神秘商人</span>向你兜售一颗<span class="itm">来历不明的丹药</span>。',choices:[
    {text:'买来服下',effect:{cultivation:15,sanity:-25,wealth:-20,constitution:5},log:'修为暴涨，但总感觉哪里不对...',item:'dan_yao'},
    {text:'谢绝',effect:{sanity:5},log:'来路不明的东西不能乱吃'}]},
  {text:'有人带你去见<span class="mys">黑太岁</span>——一种能让人看到另一个世界的东西。',choices:[
    {text:'吞食黑太岁',effect:{sanity:-50,cultivation:40,comprehension:15,qiyun:-15},log:'你看到了！两个世界叠加在一起！',item:'hei_tai_sui',req:{constitution:40}},
    {text:'坚决不吃',effect:{sanity:10},log:'你选择留在"正常"的世界'}]},
  {text:'<span class="npc">镖局</span>正在招募好手，押一批贵重货物去边境。',choices:[
    {text:'应聘镖师',effect:{connections:30,wealth:40,constitution:5},log:'成为镖师，刀口舔血',factionJoin:'biaoju'},
    {text:'不去',effect:{},log:'这行当太危险'}]},
  {text:'<span class="fac">白莲教</span>暗中传教，许诺信徒来世荣华。',choices:[
    {text:'请求入教',effect:{connections:20,sanity:-20},log:'白莲教考验你的忠心...',factionJoin:'bailian'},
    {text:'向官府举报',effect:{connections:15,wealth:20,qiyun:-5},log:'官府封赏了你'},
    {text:'假装没看见',effect:{},log:'多一事不如少一事'}]},
  {text:'<span class="danger-text">山贼</span>拦路抢劫，为首的是个独眼大汉。',choices:[
    {text:'拼死反抗',effect:{cultivation:10,sanity:-5,constitution:3,qiyun:3},log:'打跑了山贼，身上添了几道伤疤',req:{constitution:20}},
    {text:'乖乖交钱',effect:{wealth:-30},log:'破财免灾'},
    {text:'动之以情',effect:{connections:5,comprehension:2},log:'居然说动了他，放你一马',req:{connections:10}}]},
  {text:'你在客栈休息时，隔壁传来<span class="mys">诡异的念经声</span>，持续了一整夜。',choices:[
    {text:'敲门查看',effect:{sanity:-15,cultivation:8,comprehension:5},log:'房间里空无一人...但经声还在继续'},
    {text:'用被子捂住耳朵',effect:{sanity:-5},log:'一夜噩梦'}]},
  {text:'路遇一位<span class="npc">老道</span>，他说你身上有<span class="mys">不干净的东西</span>。',choices:[
    {text:'请他驱邪',effect:{sanity:15,wealth:-20,qiyun:5},log:'他画了一道符给你',item:'fu_lu'},
    {text:'不信这些',effect:{sanity:-5},log:'老道叹了口气走了'}]},
  {text:'<span class="fac">袄景教</span>的圣女向你伸出手，邀你加入圣火之下。',choices:[
    {text:'加入袄景教',effect:{connections:40,cultivation:30},log:'你在圣火前立誓',factionJoin:'aojing'},
    {text:'敬而远之',effect:{},log:'宗教的事还是别掺和'}]},
  {text:'你在市集上看到有人贩卖<span class="itm">一块温润的白玉佩</span>。',choices:[
    {text:'买下（花费30金银）',effect:{wealth:-30,sanity:15},log:'白玉佩温润通灵，心神为之一宁',item:'bai_yu_pei',req:{wealth:30}},
    {text:'太贵了',effect:{},log:'钱要省着花'}]},
  {text:'一群<span class="fac">法教</span>信徒正在进行血腥的<span class="danger-text">献祭仪式</span>。',choices:[
    {text:'阻止他们',effect:{cultivation:10,connections:-15,sanity:-10,qiyun:15},log:'你打断了仪式，但法教记住了你',req:{cultivation:20}},
    {text:'加入法教',effect:{cultivation:20,sanity:-25},log:'你跪在血泊中宣誓效忠',factionJoin:'fa_jiao'},
    {text:'悄悄离开',effect:{sanity:-10,qiyun:-5},log:'那些尖叫声将长久萦绕'}]},
  {text:'一位<span class="npc">垂死的修士</span>将毕生修为传给你。',choices:[
    {text:'接受传承',effect:{cultivation:35,sanity:-15,comprehension:10},log:'巨大的力量涌入丹田！',req:{cultivation:30}},
    {text:'帮他安详离去',effect:{connections:10,sanity:10,qiyun:10},log:'他走得很平静'}]},
  {text:'你听说<span class="loc">鬼市</span>今夜会出现，可以买到奇物。',choices:[
    {text:'前往鬼市',effect:{wealth:-15,sanity:-10,cultivation:10,qiyun:-5},log:'用阳寿换了一件法器',item:'gui_mian',req:{wealth:15}},
    {text:'不去那种地方',effect:{sanity:5},log:'还是阳间好'}]},
  {text:'夜里有<span class="mys">敲门声</span>，打开门却空无一人，只有地上一滩血迹。',choices:[
    {text:'追出去',effect:{sanity:-20,cultivation:10,comprehension:5},log:'你在黑暗中看到了不该看到的东西'},
    {text:'关门上锁',effect:{sanity:-5},log:'一整夜门外都有窸窣声'}]},
  {text:'<span class="npc">一个孩子</span>拉着你的衣角说："叔叔，你后面跟着个<span class="mys">东西</span>。"',choices:[
    {text:'回头看',effect:{sanity:-15,comprehension:3},log:'什么都没有...但脖子后面一直发凉'},
    {text:'给孩子一颗糖',effect:{wealth:-2,sanity:-5,qiyun:2},log:'孩子跑开了，留下一串诡异的笑声'}]},
  // === NEW ADULT EVENTS ===
  {text:'你在山间遇到一名<span class="npc">行脚僧</span>，他说你身上气运深重。',choices:[
    {text:'请他指点',effect:{qiyun:15,sanity:10,wealth:-10,comprehension:5},log:'僧人为你诵经三日，胸中块垒稍解'},
    {text:'我不信佛',effect:{qiyun:-5},log:'僧人双手合十，念了声阿弥陀佛走了'}]},
  {text:'你的体内突然涌出一股<span class="danger-text">暴戾之气</span>，差点伤了无辜路人。',choices:[
    {text:'运功压制',effect:{constitution:-10,cultivation:8,comprehension:5},log:'暴戾之气暂时被镇压，但身体遭了罪'},
    {text:'任其爆发',effect:{constitution:5,qiyun:-15,connections:-10},log:'你伤了几个人，事后追悔莫及'}]},
  {text:'有人出高价请你<span class="danger-text">杀人</span>，目标是一个富商。',choices:[
    {text:'接下暗杀',effect:{wealth:60,qiyun:-25,karma:-30,connections:-5},log:'你在黑暗中取了一条人命',req:{constitution:25}},
    {text:'通知目标',effect:{connections:15,qiyun:15,karma:15,wealth:10},log:'富商感恩戴德，你多了个朋友',req:{qiyun_min:-20}},
    {text:'不趟这浑水',effect:{},log:'杀人的买卖做不得'}]},
  {text:'一位<span class="npc">采药老人</span>摔下山崖，命悬一线。',choices:[
    {text:'冒险救人',effect:{constitution:-5,qiyun:15,karma:15,connections:10},log:'你冒死将他背下山，自己也摔伤了',req:{constitution:20}},
    {text:'叫人来帮忙',effect:{qiyun:5,karma:3,connections:5},log:'等人来时老人已经咽气了'}]},
  {text:'你在修炼中感到<span class="mys">一道灵光</span>掠过脑海，似乎悟到了什么。',choices:[
    {text:'深入冥想',effect:{comprehension:12,cultivation:15,sanity:-5},log:'你触碰到了大道的边缘！',req:{comprehension:30}},
    {text:'稳扎稳打',effect:{comprehension:5,cultivation:5},log:'积跬步以至千里'}]},
  {text:'市集上有人卖<span class="itm">阴阳镜</span>，据说能映照气运。',choices:[
    {text:'买下试试',effect:{wealth:-25,comprehension:10},log:'镜中映出了你过去的善恶',item:'yin_yang_jing',req:{wealth:25}},
    {text:'太邪门了',effect:{},log:'气运这种事还是不知道的好'}]},
  {text:'你遇到一个<span class="npc">濒死的镖师</span>，他怀中抱着一个<span class="itm">龙虎丹</span>。',choices:[
    {text:'救治他',effect:{qiyun:10,karma:10,connections:15},log:'镖师感激涕零'},
    {text:'取走龙虎丹',effect:{qiyun:-20,karma:-15,constitution:15},log:'你看着他咽了气，心中有愧',item:'long_hu_dan'}]},
  {text:'你感觉自己的<span class="mys">体魄</span>到了极限，再突破一步便是脱胎换骨。',choices:[
    {text:'以命搏命突破',effect:{constitution:15,cultivation:10,sanity:-10},log:'一番痛苦之后，你感到浑身轻盈'},
    {text:'徐徐图之',effect:{constitution:5,comprehension:3},log:'循序渐进也是一种智慧'}],
    trigger:{minAge:25,constitution:50}},
  // === GENDER-SPECIFIC ADULT EVENTS ===
  {text:'你到了成家的年纪，<span class="npc">长辈</span>催促你成婚。',choices:[
    {text:'娶妻成家',effect:{connections:15,wealth:-20,qiyun:5,karma:5},log:'你成了家，多了牵挂也多了动力',genderReq:'male'},
    {text:'嫁为人妇',effect:{connections:15,wealth:10,qiyun:5,karma:5},log:'你出了嫁，多了依靠也多了责任',genderReq:'female'},
    {text:'一心修道',effect:{cultivation:10,connections:-10,comprehension:5},log:'你拒绝了婚事，一心向道'}]},
  {text:'一位<span class="npc">美貌女子</span>在路边向你求助，声称被人追杀。',genderReq:'male',choices:[
    {text:'英雄救美',effect:{connections:15,karma:5,constitution:-3},log:'你击退了追兵，她对你感激涕零'},
    {text:'假装没看见',effect:{karma:-5},log:'你心中有愧地走开了'},
    {text:'识破圈套',effect:{comprehension:5,wealth:10},log:'果然是仙人跳，你反将一军',req:{comprehension:25}}]},
  {text:'一位<span class="npc">俊朗少年</span>在路边向你搭话，言语间颇为殷勤。',genderReq:'female',choices:[
    {text:'与他结伴同行',effect:{connections:15,qiyun:3},log:'他是个有趣的旅伴，一路上你们聊得很开心'},
    {text:'保持距离',effect:{comprehension:3},log:'独行侠不需要同伴'},
    {text:'识破居心',effect:{comprehension:5,connections:-3},log:'他别有用心，你看穿了他的伎俩',req:{comprehension:20}}]},
  {text:'<span class="fac">门派</span>举办比武大会，冠军可获丰厚奖赏。',choices:[
    {text:'报名参加',effect:{cultivation:10,connections:15,constitution:3,wealth:20},log:'你在比武中大放异彩！',req:{cultivation:20}},
    {text:'台下观战',effect:{comprehension:5,connections:5},log:'看别人打架也能学到不少'}]},
  {text:'你在酒楼饮酒时，隔壁桌有人议论<span class="npc">你的师门</span>是非。',choices:[
    {text:'拍案而起',effect:{connections:-10,cultivation:5,karma:-3},log:'你打了一架，维护了师门名声',req:{faction:'zuowang'}},
    {text:'拍案而起',effect:{connections:-10,cultivation:5,karma:-3},log:'你打了一架，维护了师门名声',req:{faction:'aojing'}},
    {text:'默默听完',effect:{comprehension:5},log:'有时候忍耐比冲动更需要勇气'},
    {text:'喝完酒走人',effect:{sanity:3},log:'和自己无关的事不必在意'}]},
];

const SPECIAL_EVENTS = [
  {text:'你遇到了一个<span class="npc">疯疯癫癫的少年</span>，他自称<span class="npc">李火旺</span>，说这个世界是假的。',
    trigger:{minAge:15,maxAge:50,yearMin:-5,yearMax:35},choices:[
    {text:'帮助他',effect:{connections:50,cultivation:20,qiyun:15},log:'李火旺感谢了你，你看到他眼中的挣扎',achieve:'meet_li',req:{qiyun_min:-10}},
    {text:'攻击他',effect:{connections:-30,cultivation:10,qiyun:-20},log:'他轻松躲开了...这个人不简单',req:{cultivation:30}},
    {text:'静静旁观',effect:{sanity:-20,cultivation:5,comprehension:10},log:'你看到了不可思议的一幕'}]},
  {text:'听闻<span class="npc">诸葛渊</span>正在<span class="loc">杏岛</span>收徒，天下修士趋之若鹜。',
    trigger:{minAge:20,cultivation:50,yearMin:-20,yearMax:30},choices:[
    {text:'前去拜访',effect:{connections:60,cultivation:40,comprehension:15},log:'诸葛渊亲自指点了你！'},
    {text:'不凑这个热闹',effect:{},log:'错过就是错过了'}]},
  {text:'你在梦中见到了<span class="npc">太清真人</span>，他在无尽虚空中打坐。',
    trigger:{minAge:25,cultivation:80},choices:[
    {text:'请教大道',effect:{cultivation:50,sanity:-20,comprehension:20},log:'太清真人传你一段真言'},
    {text:'跪拜后退出',effect:{cultivation:15,sanity:10,qiyun:5},log:'得到了太清真人的认可'}]},
  {text:'<span class="mys">牛头大马面</span>在街上走过，只有你能看到他们。',
    trigger:{minAge:15},choices:[
    {text:'跟上去',effect:{sanity:-30,cultivation:20,comprehension:10},log:'你看到了阴阳两界的交汇处'},
    {text:'闭上眼睛',effect:{sanity:-10},log:'假装什么都没发生'}],check:'xinsu'},
  {text:'<span class="loc">白玉京</span>出现在天际，巨大的倒悬之城遮蔽了半个天空。',
    trigger:{minAge:30,cultivation:100,yearMin:20,yearMax:40},choices:[
    {text:'飞升前往',effect:{cultivation:80,sanity:-40,qiyun:-20},log:'你踏入了白玉京！',req:{cultivation:200}},
    {text:'跪地膜拜',effect:{cultivation:20,sanity:-10,qiyun:5},log:'那是神的居所'}]},
  {text:'你的<span class="mys">影子</span>开始独立行动，它在墙上向你招手。',
    trigger:{minAge:20},choices:[
    {text:'与影子对话',effect:{sanity:-25,cultivation:15,comprehension:8},log:'影子说了一些你不愿相信的话'},
    {text:'点亮所有灯',effect:{sanity:-5,wealth:-10},log:'灯亮了，影子消失了...暂时'}]},
  {text:'<span class="npc">白灵淼</span>再次出现，她说南疆有大变故，请你帮忙。',
    trigger:{minAge:20,maxAge:60,yearMin:-5,yearMax:30},choices:[
    {text:'随她前往南疆',effect:{connections:30,cultivation:15,sanity:-10,qiyun:10},log:'你踏入了南疆的瘴气之中'},
    {text:'爱莫能助',effect:{connections:-10,qiyun:-5},log:'她独自离去，身影消失在雾中'}]},
  // === NEW SPECIAL EVENTS ===
  {text:'你在古道上遇到一柄<span class="itm">断裂的长剑</span>，剑身上刻着"<span class="npc">丹阳</span>"二字。',
    trigger:{minAge:18,cultivation:30,yearMin:-15,yearMax:30},choices:[
    {text:'尝试修复此剑',effect:{cultivation:25,comprehension:15,sanity:-10},log:'你感受到了丹阳子残留的剑意！',item:'dan_yang_jian',achieve:'meet_danyang'},
    {text:'将剑安葬于此',effect:{qiyun:10,sanity:5},log:'你为前辈立了一座剑冢'}]},
  {text:'<span class="npc">柳若飞</span>从天而降，他的眼神冰冷如刀锋。他问你："你信这个世界是真的吗？"',
    trigger:{minAge:20,cultivation:60,yearMin:0,yearMax:35},choices:[
    {text:'"信"',effect:{sanity:10,qiyun:5,comprehension:5},log:'柳若飞冷笑一声消失了'},
    {text:'"不信"',effect:{sanity:-20,cultivation:20,comprehension:10},log:'柳若飞看你的眼神变了："那你和我是同路人。"'},
    {text:'"不知道"',effect:{comprehension:15},log:'柳若飞沉默片刻："也许这才是最诚实的回答。"'}]},
  {text:'你被卷入了一场<span class="mys">大傩仪式</span>——无数戴着面具的人在跳傩舞。',
    trigger:{minAge:25,cultivation:80},choices:[
    {text:'戴上傩面加入',effect:{cultivation:40,sanity:-30,qiyun:-20,comprehension:15},log:'你在傩舞中看到了生死轮回的真相！',item:'nuo_mian',achieve:'nuo_ritual'},
    {text:'拼命挣脱',effect:{sanity:-10,constitution:-5},log:'那些面具人的笑声将永远萦绕在你耳边'}]},
  {text:'你偶遇<span class="npc">清风观</span>的遗址，断壁残垣中隐约有人影闪过。',
    trigger:{minAge:15,maxAge:40,yearMin:-2,yearMax:30},choices:[
    {text:'进入探索',effect:{cultivation:20,sanity:-15,comprehension:10},log:'你在废墟中找到了丹阳子留下的修炼笔记'},
    {text:'原路离开',effect:{sanity:5},log:'有些地方，不去比去好'}]},
  {text:'你修炼时突然感到<span class="mys">两个世界在你体内碰撞</span>，痛苦异常。',
    trigger:{minAge:20,cultivation:100},choices:[
    {text:'以身合道',effect:{cultivation:60,sanity:-35,comprehension:20,constitution:-10},log:'你的身体成了两个世界的桥梁！',req:{constitution:40}},
    {text:'强行分离',effect:{cultivation:15,sanity:-10,constitution:5},log:'你暂时稳住了，但裂痕已经出现'}],check:'xinsu'},
  {text:'你在气运纠缠中看到了<span class="mys">自己的前世</span>——一个屠夫。',
    trigger:{minAge:30},choices:[
    {text:'接受前世记忆',effect:{cultivation:20,qiyun:-15,comprehension:10,constitution:5},log:'前世的杀意让你战斗本能大增'},
    {text:'封印前世记忆',effect:{sanity:10,qiyun:5},log:'有些事情不知道更好'}],
    qiyunCheck:{max:0}},
  {text:'你在<span class="loc">鬼市</span>中遇到一个自称<span class="npc">黑太岁商人</span>的诡异存在。',
    trigger:{minAge:25},choices:[
    {text:'和他做交易',effect:{cultivation:30,sanity:-20,wealth:30,qiyun:-15,comprehension:8},log:'他笑着说："买卖做成了，但你欠我一个人情。"'},
    {text:'拒绝他',effect:{sanity:-5},log:'他的笑声在你走后还在鬼市中回荡'}]},
  {text:'<span class="npc">监天司</span>的<span class="npc">张总旗</span>找到你，说有一桩关于<span class="mys">傀儡戏</span>的案子需要你帮忙。',
    trigger:{minAge:20,cultivation:40,yearMin:5,yearMax:25},choices:[
    {text:'答应调查',effect:{connections:25,cultivation:15,sanity:-15,comprehension:8},log:'那些傀儡在没人操控时自己动了起来...'},
    {text:'委婉拒绝',effect:{connections:-5},log:'这种案子，怎么想都不简单'}]},
  {text:'你在梦中来到了<span class="loc">六欲天</span>，那里的一切都在诱惑你放弃修行。',
    trigger:{minAge:25,cultivation:60},choices:[
    {text:'坚定道心',effect:{cultivation:30,comprehension:15,qiyun:10},log:'你在诱惑中磨砺了道心'},
    {text:'沉溺其中',effect:{cultivation:-15,sanity:-20,qiyun:-15},log:'醒来时你发现失去了一部分修为'}]},
  {text:'天降<span class="mys">血雨</span>，大地龟裂，这是<span class="danger-text">天地异变</span>的前兆。',
    trigger:{minAge:35,cultivation:120},choices:[
    {text:'以身镇压异变',effect:{cultivation:50,constitution:-15,sanity:-20,qiyun:25},log:'你燃烧修为稳住了一方天地！',req:{cultivation:150,constitution:30}},
    {text:'趁机修炼',effect:{cultivation:35,qiyun:-10},log:'乱世中你吸收了大量游离灵气'},
    {text:'保全自身',effect:{sanity:-5},log:'天地异变不是你能管的'}]},
];

// Faction-specific events
const FACTION_EVENTS = {
  zuowang: [
    {text:'<span class="fac">坐忘道</span>要求你参加"坐忘"仪式，忘却七情六欲。',choices:[
      {text:'参加仪式',effect:{sanity:-20,cultivation:25,comprehension:10},log:'你忘记了一些重要的东西...',req:{comprehension:20}},{text:'找借口推脱',effect:{connections:-10},log:'师兄们对你不满'}]},
    {text:'<span class="fac">坐忘道</span>掌教让你去刺探<span class="fac">监天司</span>的情报。',choices:[
      {text:'接受任务',effect:{connections:15,wealth:20,sanity:-10,qiyun:-10},log:'间谍生涯开始了'},{text:'拒绝',effect:{connections:-20},log:'你在坐忘道的地位动摇'}]},
    // === NEW ZUOWANG EVENTS ===
    {text:'<span class="fac">坐忘道</span>内部分裂，掌教与长老对"坐忘"之法的理解产生严重分歧。',choices:[
      {text:'站掌教',effect:{connections:15,cultivation:10,qiyun:-5},log:'你选择了权力一方'},{text:'站长老',effect:{connections:-10,cultivation:15,comprehension:10},log:'你认为长老的道理更纯粹'},{text:'两不相帮',effect:{connections:-5,comprehension:5},log:'你选择明哲保身'}]},
    {text:'你在坐忘修炼中触碰到了<span class="mys">"道"的碎片</span>，但代价是忘记了一段重要的记忆。',choices:[
      {text:'继续深入',effect:{cultivation:30,sanity:-25,comprehension:15},log:'你忘记了...忘记了什么来着？'},{text:'退出坐忘',effect:{sanity:10,cultivation:5},log:'有些记忆比修为更重要'}]},
    {text:'坐忘道发现你私下还在研习<span class="mys">其他功法</span>，掌教召你问话。',choices:[
      {text:'坦白认错',effect:{connections:-10,qiyun:5},log:'掌教罚你面壁三月'},{text:'据理力争',effect:{connections:-20,comprehension:8,cultivation:5},log:'掌教对你大为不满，但你的见解让一些师兄刮目相看'}]},
  ],
  jiantian: [
    {text:'<span class="fac">监天司</span>派你去调查一桩<span class="mys">灵异命案</span>。',choices:[
      {text:'深入调查',effect:{cultivation:15,sanity:-15,wealth:20,comprehension:5},log:'真相令人不寒而栗'},{text:'草草了事',effect:{connections:-10},log:'上司对你很失望'}]},
    {text:'<span class="fac">监天司</span>要提拔你为百户，但需要你处置一个无辜的人。',choices:[
      {text:'服从命令',effect:{connections:20,wealth:30,sanity:-15,qiyun:-20},log:'你升了官，但夜夜噩梦'},{text:'抗命不从',effect:{connections:-25,qiyun:10},log:'你被贬为最底层的小卒'}]},
    // === NEW JIANTIAN EVENTS ===
    {text:'<span class="fac">监天司</span>派你追踪一名<span class="danger-text">法教邪修</span>，线索指向南疆。',choices:[
      {text:'孤身前往',effect:{cultivation:20,sanity:-15,constitution:-5,qiyun:10},log:'你在南疆九死一生，终于找到了邪修的踪迹'},
      {text:'请求增援',effect:{connections:10,wealth:-10},log:'等增援到时邪修已经跑了，但你保住了命'}]},
    {text:'监天司查获了一件<span class="itm">天机盘</span>，上司让你保管。',choices:[
      {text:'公事公办上交',effect:{connections:10,qiyun:5},log:'你的忠诚得到了认可'},
      {text:'私下研究',effect:{comprehension:15,qiyun:-10},log:'天机盘向你展示了一些不该看的东西',item:'tian_ji_pan'}]},
    {text:'大梁皇帝下旨，要<span class="fac">监天司</span>调查一桩<span class="mys">大傩祭祀</span>失控事件。',choices:[
      {text:'接旨前往',effect:{cultivation:15,sanity:-20,comprehension:10,qiyun:5},log:'你在傩祭现场看到了令人作呕的场景'},
      {text:'称病推辞',effect:{connections:-15,sanity:5},log:'同僚们看你的眼神变了'}]},
  ],
  aojing: [
    {text:'<span class="fac">袄景教</span>圣火仪式，需要你以血献祭。',choices:[
      {text:'割破手掌',effect:{cultivation:20,sanity:-15,constitution:-5,qiyun:-10},log:'圣火为你燃烧更旺'},{text:'退出教派',effect:{faction:'none',connections:-20,qiyun:5},log:'你脱离了袄景教'}]},
    // === NEW AOJING EVENTS ===
    {text:'<span class="fac">袄景教</span>内部爆发权力斗争，圣女与大祭司对立。',choices:[
      {text:'支持圣女',effect:{connections:20,qiyun:5,cultivation:10},log:'圣女胜出，你成了她的心腹'},
      {text:'支持大祭司',effect:{cultivation:20,sanity:-10,qiyun:-10},log:'大祭司传你一段秘法'},
      {text:'两边下注',effect:{connections:-15,qiyun:-10},log:'被两边都发现了，你的日子不好过'}]},
    {text:'圣火突然暴走，<span class="danger-text">焚烧了半个神殿</span>，教内人心惶惶。',choices:[
      {text:'以身挡火',effect:{constitution:-10,cultivation:25,qiyun:10,connections:20},log:'你以肉身抵挡圣火，保护了教众',req:{constitution:35}},
      {text:'趁乱逃跑',effect:{faction:'none',connections:-15,qiyun:-5},log:'你趁乱离开了袄景教'}]},
    {text:'你发现<span class="fac">袄景教</span>与<span class="fac">法教</span>之间存在<span class="mys">不为人知的联系</span>。',choices:[
      {text:'深入调查',effect:{comprehension:10,sanity:-15,cultivation:10},log:'真相令人震惊——两教竟同源！'},
      {text:'装作不知',effect:{sanity:-5,qiyun:-5},log:'有些真相太危险了'}]},
  ],
  bailian: [
    {text:'<span class="fac">白莲教</span>密谋起义，你被拉入核心圈子。',choices:[
      {text:'参与起义',effect:{connections:30,wealth:-20,sanity:-10,qiyun:-10},log:'血与火的一夜'},{text:'告密',effect:{faction:'none',wealth:50,connections:-30,qiyun:-15},log:'你出卖了同伴'}]},
    // === NEW BAILIAN EVENTS ===
    {text:'<span class="fac">白莲教</span>的<span class="npc">圣母</span>突然现身，传你<span class="itm">红莲业火</span>之法。',choices:[
      {text:'接受传法',effect:{cultivation:25,sanity:-15,qiyun:-10},log:'红莲业火在你体内燃烧！',item:'hong_lian'},
      {text:'恭敬推辞',effect:{connections:-10},log:'圣母面无表情地走了'}]},
    {text:'官府大军围剿<span class="fac">白莲教</span>据点，情况危急。',choices:[
      {text:'拼死突围',effect:{constitution:-10,cultivation:15,connections:10,qiyun:-5},log:'你带着几个兄弟杀出重围',req:{constitution:25}},
      {text:'投降官府',effect:{faction:'none',connections:-30,qiyun:-20,wealth:30},log:'你出卖了白莲教换取自己的安全'},
      {text:'断后掩护',effect:{constitution:-15,qiyun:15,connections:25},log:'你身负重伤，但教众安全撤退'}]},
    {text:'白莲教中有人传言你是<span class="mys">叛徒</span>，要对你动手。',choices:[
      {text:'揪出造谣者',effect:{connections:10,sanity:-5,qiyun:-5},log:'原来是对手安插的间谍'},
      {text:'自证清白',effect:{connections:5,wealth:-20},log:'你散尽钱财帮助教众以示忠心'}]},
  ],
  biaoju: [
    {text:'押镖途中遇到<span class="danger-text">百人马贼</span>，镖头让你断后。',choices:[
      {text:'誓死断后',effect:{cultivation:15,connections:25,sanity:-10,constitution:5,qiyun:10},log:'你浴血奋战，九死一生',req:{constitution:30}},{text:'弃镖而逃',effect:{faction:'none',connections:-30,qiyun:-15},log:'你成了逃兵'}]},
    // === NEW BIAOJU EVENTS ===
    {text:'镖局接到一单<span class="danger-text">死亡委托</span>——护送一名<span class="npc">神秘女子</span>穿越南疆。',choices:[
      {text:'接下委托',effect:{wealth:50,sanity:-15,constitution:-5,cultivation:10},log:'一路险象环生，那女子似乎不是普通人'},
      {text:'推掉委托',effect:{connections:-10},log:'镖头对你很失望'}]},
    {text:'你在押镖途中遇到了<span class="fac">坐忘道</span>弟子劫镖，声称镖物是"不祥之物"。',choices:[
      {text:'誓死护镖',effect:{cultivation:10,constitution:3,connections:15,qiyun:5},log:'你打退了坐忘道弟子，名声大振'},
      {text:'交出镖物',effect:{connections:-15,wealth:-20,qiyun:3},log:'镖局的招牌被你砸了'},
      {text:'打开检验',effect:{sanity:-15,comprehension:8},log:'镖物里...是一颗还在跳动的心脏'}]},
    {text:'镖局的<span class="npc">老镖头</span>临终前将一套<span class="itm">秘传武学</span>传给你。',choices:[
      {text:'全力修习',effect:{cultivation:20,constitution:10,comprehension:5},log:'这套武学蕴含着锻体极境的奥秘'},
      {text:'传给所有镖师',effect:{connections:20,qiyun:10},log:'镖局上下对你感恩戴德'}]},
  ],
  fa_jiao: [
    {text:'<span class="fac">法教</span>大祭司要你完成一场<span class="danger-text">活人祭</span>。',choices:[
      {text:'执行',effect:{cultivation:30,sanity:-30,connections:-10,qiyun:-30,karma:-30},log:'你的双手沾满了鲜血'},{text:'反叛',effect:{faction:'none',cultivation:-10,connections:-20,qiyun:15,karma:10},log:'你背叛了法教，成为叛徒'}]},
    // === NEW FA_JIAO EVENTS ===
    {text:'<span class="fac">法教</span>大祭司要传你<span class="mys">异域邪法</span>，但需要你献出一段记忆。',choices:[
      {text:'献出记忆',effect:{cultivation:35,sanity:-25,comprehension:10,qiyun:-15},log:'你忘记了一个重要的人...但获得了强大的力量'},
      {text:'拒绝',effect:{connections:-15,sanity:-5},log:'大祭司的眼中闪过杀意'}]},
    {text:'<span class="fac">法教</span>计划大举入侵<span class="loc">大梁</span>，你被要求为先锋。',choices:[
      {text:'率军先行',effect:{cultivation:20,connections:15,qiyun:-25,constitution:-5},log:'你在大梁腹地掀起了血雨腥风'},
      {text:'暗中通敌',effect:{faction:'none',qiyun:10,connections:-20,wealth:20},log:'你将法教的计划透露给了监天司'},
      {text:'阳奉阴违',effect:{qiyun:-5,connections:-5},log:'你消极怠工，两边都没讨好'}]},
    {text:'法教内部有人试图<span class="danger-text">召唤异界存在</span>，仪式失控。',choices:[
      {text:'协助稳定仪式',effect:{cultivation:30,sanity:-30,comprehension:15,qiyun:-20},log:'那个"东西"看了你一眼...你的灵魂都在颤抖'},
      {text:'趁机破坏仪式',effect:{faction:'none',qiyun:20,sanity:-15,connections:-25},log:'你阻止了一场浩劫，但法教将你视为死敌'}]},
  ],
};

const RARITY_NAMES = {
  common: '凡品', uncommon: '良品', rare: '珍品', epic: '仙品', legendary: '天命', cursed: '厄运'
};

// === ANCIENT ERA EVENTS ===
const ANCIENT_EVENTS = [
  {text:'你见证了<span class="mys">万仙大战</span>的余波，天地间灵气剧烈震荡。',
    trigger:{minAge:15,maxYear:-1000},choices:[
    {text:'吸收散逸灵气',effect:{cultivation:40,sanity:-15,comprehension:10},log:'你在战场废墟中得到了无上机缘'},
    {text:'远离战场',effect:{sanity:10},log:'活着比什么都重要'}]},
  {text:'一位<span class="npc">上古大能</span>路过你的村庄，随手指点了你的修炼。',
    trigger:{minAge:10,maxYear:-500},choices:[
    {text:'叩谢大恩',effect:{cultivation:50,comprehension:15},log:'他的一句话胜过十年苦修'},
    {text:'请求拜师',effect:{cultivation:30,connections:20},log:'他笑了笑，留下一枚玉简便消失了'}]},
  {text:'你发现了一处<span class="mys">远古传送阵</span>，似乎可以穿越时空。',
    trigger:{minAge:20,maxYear:-200},choices:[
    {text:'踏入传送阵',effect:{cultivation:25,sanity:-20,comprehension:10},log:'你穿越了百年时光，看到了未来的景象'},
    {text:'记录下阵法',effect:{cultivation:15,comprehension:8},log:'这些知识也许日后有用'}]},
  {text:'<span class="loc">仙朝</span>覆灭在即，遍地都是逃难的修士。',
    trigger:{minAge:15,maxYear:-800},choices:[
    {text:'趁乱搜刮遗宝',effect:{wealth:60,cultivation:20,connections:-10,qiyun:-15},log:'你得到了不少好东西'},
    {text:'帮助难民',effect:{connections:30,wealth:-10,qiyun:20,karma:15},log:'他们中有几位日后成为了一方大能'}]},
  {text:'你在山中遇到一位<span class="npc">即将飞升的仙人</span>，他正在散去毕生修为。',
    trigger:{minAge:25,maxYear:-500},choices:[
    {text:'接受他的传承',effect:{cultivation:80,sanity:-25,comprehension:20},log:'滔天的修为涌入你的身体！'},
    {text:'请教飞升之法',effect:{cultivation:30,comprehension:10},log:'他说了三个字：忘却一切'}]},
  {text:'上古<span class="fac">天庭</span>残留的<span class="mys">神兵</span>从天而降，落在你面前。',
    trigger:{minAge:20,maxYear:-1000},choices:[
    {text:'尝试炼化',effect:{cultivation:60,sanity:-30,constitution:10},log:'神兵认主！你感受到了上古神威'},
    {text:'埋入地下封印',effect:{cultivation:10,sanity:10,qiyun:15},log:'这等凶器不该留在人间'}]},
  {text:'远古<span class="mys">灵脉</span>尚未枯竭，你找到了一处灵气浓郁之地。',
    trigger:{minAge:10,maxYear:-300},choices:[
    {text:'就地闭关修炼',effect:{cultivation:35,comprehension:10},log:'灵气充沛，修炼事半功倍'},
    {text:'标记位置，日后再来',effect:{cultivation:5,connections:5},log:'你把消息卖给了其他修士'}]},
  {text:'你偶然进入了<span class="loc">昆仑秘境</span>，这里时间流速不同。',
    trigger:{minAge:30,maxYear:-500},choices:[
    {text:'在秘境中修炼百年',effect:{cultivation:100,connections:-20,comprehension:20},log:'出来时外面已过去了数十年'},
    {text:'取走入口处的宝物就离开',effect:{cultivation:15,wealth:40},log:'贪心不足，但也算有所收获'}]},
];

// === KARMA EVENTS (triggered by karma thresholds) ===
const QIYUN_EVENTS = [
  // Good karma events (karma > 30)
  {text:'你在路边看到一朵<span class="mys">金色莲花</span>凭空绽放——这是功德显化。',
    qiyunReq:{min:30},choices:[
    {text:'采摘莲花',effect:{cultivation:20,sanity:10,comprehension:10},log:'金莲入体，你感到从未有过的安宁'},
    {text:'合掌而过',effect:{qiyun:10,sanity:5},log:'不取不求，功德自增'}]},
  {text:'你过去帮助过的一个<span class="npc">老人</span>找上门来，原来他是<span class="npc">隐世高手</span>。',
    qiyunReq:{min:50},choices:[
    {text:'接受他的回报',effect:{cultivation:30,comprehension:15,connections:20},log:'善因善果，他将一身所学倾囊相授'},
    {text:'婉拒好意',effect:{qiyun:15},log:'施恩不图报，他更加钦佩你'}]},
  // Bad karma events (karma < -30)
  {text:'你做了一个<span class="danger-text">可怕的噩梦</span>——梦中所有被你伤害过的人都在索命。',
    qiyunReq:{max:-30},choices:[
    {text:'在梦中忏悔',effect:{sanity:-15,qiyun:10,comprehension:5},log:'部分冤魂散去，但仍有人在暗处盯着你'},
    {text:'以力镇压',effect:{cultivation:10,qiyun:-10,sanity:-10},log:'你用修为强行镇压了噩梦，但厄运更深了'}]},
  {text:'走在路上，你的<span class="mys">影子</span>突然变成了血红色，地上隐约出现无数哀嚎的面孔。',
    qiyunReq:{max:-50},choices:[
    {text:'寻高僧化解',effect:{wealth:-30,qiyun:20,sanity:10},log:'高僧说你业障深重，但尚可救'},
    {text:'不理会',effect:{qiyun:-10,sanity:-15,constitution:-5},log:'气运之债，迟早要还'}]},
  // Karma cycle event
  {text:'你在修炼中突然感到气运之力在你体内<span class="mys">逆转翻涌</span>。',
    qiyunReq:{abs:40},choices:[
    {text:'顺势引导',effect:{cultivation:20,comprehension:10,qiyun:0},log:'气运之力化为修炼的养分，你感到了一种奇妙的平衡'},
    {text:'强行压制',effect:{sanity:-10,constitution:-5},log:'你压制住了，但身体遭了罪'}]},
];

// === DUAL CULTIVATION EVENTS (triggered when having faction history) ===
const DUAL_CULTIVATION_EVENTS = [
  {text:'你前门派的<span class="danger-text">追杀者</span>找上门来，他们要你以血偿还叛逃之罪。',choices:[
    {text:'迎战',effect:{cultivation:10,constitution:-10,sanity:-10,qiyun:-5},log:'你击退了追杀者，但身上多了几道伤口'},
    {text:'逃跑',effect:{connections:-10,sanity:-5},log:'你仓皇逃窜，丢尽了颜面'},
    {text:'请现门派保护',effect:{connections:-5,qiyun:-5},log:'新门派出面，但对你的忠诚产生了怀疑'}]},
  {text:'你发现自己修炼两种不同的功法后，体内出现了<span class="danger-text">走火入魔</span>的迹象。',choices:[
    {text:'全力压制',effect:{constitution:-15,sanity:-15,cultivation:-10},log:'你强行压制了冲突，但修为倒退了'},
    {text:'尝试融合',effect:{cultivation:30,constitution:-10,sanity:-20,comprehension:10},log:'痛苦异常！但你隐约找到了融合的可能'},
    {text:'放弃一种功法',effect:{cultivation:-20,sanity:10,constitution:5},log:'你忍痛放弃，身体终于稳定下来'}]},
  {text:'两个门派的<span class="mys">功法</span>在你体内激烈冲突，你感到<span class="danger-text">经脉几近崩溃</span>。',choices:[
    {text:'以命搏命突破',effect:{cultivation:40,constitution:-20,sanity:-25},log:'你在生死之间找到了一线生机！',req:{constitution:30}},
    {text:'散去所有修为重来',effect:{cultivation:-50,constitution:10,sanity:10,comprehension:15},log:'你从头来过，但这次走得更稳'}]},
  {text:'你的新门派发现你曾经<span class="danger-text">背叛旧主</span>，门内开始疏远你。',choices:[
    {text:'用实力证明自己',effect:{cultivation:10,connections:10,qiyun:-5},log:'他们暂时接受了你，但信任不再'},
    {text:'不在意',effect:{connections:-15},log:'独来独往也不是坏事'}]},
  {text:'你在修炼中看到了<span class="mys">两个门派祖师</span>在你识海中争斗。',choices:[
    {text:'任其争斗',effect:{sanity:-20,comprehension:15},log:'你在争斗中悟到了两种道的共通之处'},
    {text:'将一方驱逐',effect:{cultivation:-15,sanity:10},log:'你彻底与一种道诀别了'}]},
];

// === TALENT CONFLICTS (bidirectional) ===
const TALENT_CONFLICTS = {
  jian_kang: ['ti_ruo','ji_bing','bai_bing'],
  ti_ruo: ['jian_kang','wu_xing','xian_gu'],
  fu_gui: ['pin_kun','du_zhai','wu_qin'],
  pin_kun: ['fu_gui'],
  du_zhai: ['fu_gui'],
  wu_qin: ['gui_ren','fu_gui'],
  gui_ren: ['wu_qin','sha_qi'],
  zhi_hui: ['yu_ben'],
  yu_ben: ['zhi_hui'],
  fu_yuan: ['ye_zhang','sha_qi'],
  ye_zhang: ['fu_yuan'],
  mei_mao: ['chou_lou'],
  chou_lou: ['mei_mao'],
  wu_xing: ['can_ji','ti_ruo'],
  can_ji: ['wu_xing','jian_kang'],
  xian_gu: ['ti_ruo'],
  ji_bing: ['jian_kang'],
  bai_bing: ['jian_kang'],
  sha_qi: ['gui_ren','fu_yuan'],
};

// === ATTRIBUTE TOOLTIP DESCRIPTIONS ===
const STAT_TOOLTIPS = {
  age: '你在这一世的年龄',
  sanity: '神志：仅心素天赋可见。降至0则陷入永恒疯狂。受两界之力影响波动。',
  cultivation: '修为：修炼境界，决定你在这个世界的力量等级。从凡人到造化，共十个境界。',
  wealth: '金银：身上的钱财。降至-80会饿死街头。游历、购物都需要金银。',
  connections: '人脉：你在江湖中的社交关系网络。影响可触发的事件和势力互动。',
  comprehension: '悟性：对道的理解程度(0-100)。每30点悟性提升1点年修炼速度。影响高级事件触发。',
  qiyun: '气运：气运值(-100~100)。正值为善运，负值为厄运。极端值触发气运事件，影响结局。',
  karma: '因果：因果值(-100~100)。善行增因果，恶行减因果。极端值触发因果事件。影响门派准入和特殊结局。',
  constitution: '体魄：身体强度(0-100)。50岁后每年自然衰退。降至0则肉身崩溃而死。部分门派入门有体魄要求。',
  faction: '当前所属势力。只能加入一个门派，叛出有严重代价。双修会导致功法冲突风险。',
};

// === KARMA EVENTS (triggered by karma thresholds) ===
const KARMA_EVENTS = [
  // Good karma events
  {text:'你周身散发出<span class="mys">金色光芒</span>，过往善行化为护体之力。',
    karmaReq:{min:30},choices:[
    {text:'引导善力修炼',effect:{cultivation:20,sanity:10,karma:5},log:'善因善果，修为精进'},
    {text:'将善力分给他人',effect:{karma:15,connections:15},log:'你的善行感化了身边的人'}]},
  {text:'一位<span class="npc">白衣僧人</span>出现在你面前，说你前世行善积德，今世当有大造化。',
    karmaReq:{min:50},choices:[
    {text:'请教佛法',effect:{cultivation:30,comprehension:15,karma:10},log:'僧人传你无上心法，因果圆满'},
    {text:'恳辞好意',effect:{karma:10,sanity:10},log:'功德不求回报'}]},
  // Bad karma events
  {text:'你夜间看到<span class="danger-text">血手印</span>爬满了墙壁——这是业障显化。',
    karmaReq:{max:-30},choices:[
    {text:'诵经忏悔',effect:{sanity:-10,karma:15,comprehension:5},log:'部分业障消散，但仍有余孽'},
    {text:'以力镇压',effect:{cultivation:10,karma:-10,sanity:-10},log:'你用修为压制了业障，但造了更多因果'}]},
  {text:'你被卷入一场<span class="mys">因果劫</span>——过去的恶行化为实体向你索命。',
    karmaReq:{max:-50},choices:[
    {text:'坦然受之',effect:{karma:25,constitution:-10,sanity:-10},log:'你承受了因果报应，业障减轻'},
    {text:'奋力反抗',effect:{cultivation:15,karma:-15,constitution:-5},log:'你击退了因果劫，但又添新孽'}]},
  // Karma balance event
  {text:'你在修炼中感到<span class="mys">因果之力</span>在体内流转，善恶交织。',
    karmaReq:{abs:40},choices:[
    {text:'寻求平衡',effect:{comprehension:15,cultivation:10,karma:0},log:'因果相抵，你领悟了善恶一体的道理'},
    {text:'偏向一端',effect:{cultivation:15,sanity:-10},log:'你选择了极端，力量更强但也更危险'}]},
];

// === TRAVEL EVENTS (triggered when traveling) ===
const TRAVEL_EVENTS = [
  {text:'游历途中，你在<span class="loc">山间小路</span>遇到一伙<span class="danger-text">山贼</span>拦路。',choices:[
    {text:'出手击退',effect:{cultivation:5,constitution:3,karma:5},log:'你教训了山贼，路人纷纷道谢',req:{constitution:25}},
    {text:'绕路而行',effect:{wealth:-5},log:'多走了半天路，但安全抵达'},
    {text:'以言语退敌',effect:{connections:5,comprehension:2},log:'三言两语说得山贼放行',req:{connections:15}}]},
  {text:'途经一座<span class="loc">破败古庙</span>，庙里传来诵经之声。',choices:[
    {text:'进去一探',effect:{cultivation:10,sanity:-8,comprehension:5,karma:3},log:'庙中无人，经声却一直不断...你在墙壁上发现了古老的功法'},
    {text:'绕庙而行',effect:{sanity:3},log:'有些地方，不进为妙'}]},
  {text:'路上遇到一位<span class="npc">受伤的旅人</span>，他恳求你帮忙。',choices:[
    {text:'出手相救',effect:{connections:10,karma:10,wealth:-5},log:'旅人感激不尽，给了你一条重要情报'},
    {text:'视而不见',effect:{karma:-5},log:'你从他身旁走过，头也不回'}]},
  {text:'你在路边的<span class="loc">茶摊</span>歇脚，听到江湖传闻。',choices:[
    {text:'仔细打听',effect:{connections:8,comprehension:3,wealth:-3},log:'你得知了附近门派的秘辛'},
    {text:'喝完茶就走',effect:{sanity:3},log:'清茶一杯，身心舒畅'}]},
  {text:'行至一处<span class="loc">悬崖</span>，崖壁上刻着<span class="mys">上古铭文</span>。',
    trigger:{cultivation:20},choices:[
    {text:'参悟铭文',effect:{cultivation:15,comprehension:10,sanity:-5},log:'铭文中蕴含着前人的道意'},
    {text:'刻下自己的名字',effect:{qiyun:-3},log:'到此一游...不太合适'}]},
  {text:'夜宿荒野，你看到远处有<span class="mys">诡异的灯火</span>在游荡。',choices:[
    {text:'靠近查看',effect:{sanity:-12,cultivation:8,qiyun:-5},log:'那是一队鬼火，它们围着你转了三圈才散去'},
    {text:'背对灯火入睡',effect:{sanity:-5},log:'一夜噩梦，但总算安全过了'}]},
  {text:'你在渡口等船时，一位<span class="npc">老渔夫</span>跟你讲述了水底<span class="mys">龙宫</span>的传说。',choices:[
    {text:'入水探索',effect:{cultivation:15,sanity:-10,constitution:-3,qiyun:5},log:'水底确有蹊跷，你找到了一枚灵石',req:{constitution:30}},
    {text:'权当故事听听',effect:{comprehension:3},log:'老渔夫的故事倒也有趣'}]},
  {text:'途经<span class="loc">南疆</span>边境，空气中弥漫着奇异的<span class="mys">瘴气</span>。',
    locReq:'nan_jiang',choices:[
    {text:'以功法抵御瘴气前行',effect:{cultivation:10,constitution:-5,comprehension:5},log:'瘴气中隐含奇药之效',req:{cultivation:15}},
    {text:'退回安全地带',effect:{sanity:5},log:'南疆的瘴气不是闹着玩的'}]},
  {text:'你在<span class="loc">鬼市</span>外围看到有人在卖<span class="itm">来路不明的法器</span>。',
    locReq:'gui_shi',choices:[
    {text:'砍价购买',effect:{wealth:-20,cultivation:10,karma:-5},log:'法器来历可疑，但确实好用'},
    {text:'报官处理',effect:{connections:10,karma:10},log:'你阻止了赃物流通'}]},
  {text:'前往<span class="loc">玉清山</span>的路上，你感受到浓郁的<span class="mys">灵气</span>。',
    locReq:'shan_qu',choices:[
    {text:'就地打坐吸收',effect:{cultivation:12,comprehension:8},log:'灵气入体，修为精进'},
    {text:'继续赶路',effect:{},log:'山中灵气虽好，但你急于赶路'}]},
  {text:'你在行路途中遇到一场<span class="danger-text">暴雨</span>，被困在一个山洞中。',choices:[
    {text:'洞中修炼',effect:{cultivation:8,comprehension:5},log:'雨声入耳，心神空灵，竟有所悟'},
    {text:'冒雨前行',effect:{constitution:-3,sanity:-3},log:'淋了一身雨，有些着凉'}]},
  {text:'路遇一支<span class="fac">送葬队伍</span>，棺材里传出<span class="mys">敲击声</span>。',choices:[
    {text:'提醒他们',effect:{connections:5,sanity:-10,karma:5},log:'打开棺材一看...里面的人确实还活着'},
    {text:'装作没听到',effect:{karma:-5,sanity:-5},log:'那声音在你脑海中回荡了很久'}]},
];
