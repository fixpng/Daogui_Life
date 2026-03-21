// === GAME DATA ===
const TALENTS = {
  special: [
    {id:'xinsu',name:'心素',desc:'先天一炁，体内能同时存在于现实与大傩两个世界，是天道规则的“扰动者”。无意识“心想事成”可将幻觉实体化，身体是顶级“药引/材料”被各方争夺。精神极不稳定，易陷入疯狂与自我怀疑。代表：李火旺、杨娜等。',effect:{sanity:30,cultivation:5,comprehension:10},type:'special',rarity:'legendary',hint:'神志+30 修为+5 悟性+10 穿梭两界 身体是顶级药引 易陷入疯狂'},
    {id:'jie_dan',name:'金丹种子',desc:'天生金丹资质，修炼事半功倍',effect:{cultivation:30,comprehension:15},type:'special',rarity:'legendary',hint:'修为+30 悟性+15'},
    {id:'bai_ci',name:'白瓷',desc:'天生特殊体质，不惧邪祟侵蚀',effect:{sanity:20,cultivation:10,constitution:15},type:'special',rarity:'legendary',hint:'神志+20 修为+10 体魄+15'},
    {id:'tian_yan',name:'天眼',desc:'能窥见常人不可见之物',effect:{sanity:-10,cultivation:15,comprehension:20},type:'special',rarity:'epic',hint:'修为+15 悟性+20 神志-10'},
    {id:'gui_mai',name:'鬼脉',desc:'先天通灵体质，与亡者共鸣',effect:{sanity:-15,cultivation:20,qiyun:-10,karma:-5},type:'special',rarity:'epic',hint:'修为+20 气运-10 因果-5 神志-15'},
    {id:'gu_ren',name:'古人',desc:'你并非此世之人，出生于数百乃至上千年前的远古时代',effect:{cultivation:15,connections:-15,comprehension:10},type:'special',rarity:'legendary',hint:'修为+15 悟性+10 人脉-15 出生年份为远古时代'},
    // === 道诡异仙特色天赋 ===
    {id:'long_mai',name:'龙脉之体',desc:'天生与龙脉相合，可吸收龙脉之力修炼',effect:{cultivation:25,constitution:10},type:'special',rarity:'legendary',hint:'修为+25 体魄+10 可感应龙脉'},
    {id:'si_ming',name:'司命之种',desc:'身负成为司命的潜质，感知天道之力',effect:{cultivation:20,comprehension:20,qiyun:15},type:'special',rarity:'legendary',hint:'修为+20 悟性+20 气运+15 风险与机遇并存'},
    {id:'yang_tian',name:'阳男',desc:'先天纯阳之体，修炼阳刚功法进境极快',effect:{cultivation:20,constitution:15,sanity:10},type:'special',rarity:'epic',hint:'修为+20 体魄+15 神志+10'},
    {id:'yin_nv',name:'阴女',desc:'先天纯阴之体，修炼阴柔功法进境极快',effect:{cultivation:20,comprehension:10,sanity:15},type:'special',rarity:'epic',hint:'修为+20 悟性+10 神志+15'},
    // === 更多道诡异仙原创天赋 ===
    {id:'wang_zai',name:'罔灾',desc:'坐忘道斗姥选中之人，注定成为灾祸的化身',effect:{cultivation:30,sanity:-25,qiyun:-15},type:'special',rarity:'legendary',hint:'修为+30 神志-25 气运-15 坐忘道有特殊机遇'},
    {id:'tian_nai',name:'天内',desc:'生而为天内，天生能够看见白玉京',effect:{sanity:-20,cultivation:25,comprehension:15},type:'special',rarity:'legendary',hint:'神志-20 修为+25 悟性+15 白玉京对你敞开门户'},
    {id:'xin_bo',name:'心蟠',desc:'身负无生老母的心蟠，擅长身份伪装与阵营庇护。可掩盖自身特质规避因果律束缚，坐忘道的欺骗手段对你效果较弱。加入监天司等势力可获得额外庇护。',effect:{cultivation:15,sanity:25,karma:10,connections:15},type:'special',rarity:'legendary',hint:'神志+25 人脉+15 因果+10 伪装身份 势力庇护'},
    {id:'xin_zhuo',name:'心浊',desc:'空间干扰者，其存在可扰乱现实。头发可强化法器对空间的干扰，可形成领域性干扰场域影响敌人感知。常作为顶级法器材料被争夺。',effect:{cultivation:25,sanity:-15,qiyun:-10,constitution:10},type:'special',rarity:'legendary',hint:'修为+25 体魄+10 气运-10 空间扰动 法器强化'},
    {id:'xu_jing',name:'虚静',desc:'天生与虚空相合，不为幻象所迷',effect:{cultivation:20,sanity:15,comprehension:10},type:'special',rarity:'epic',hint:'修为+20 神志+15 悟性+10 虚空中自有一片天地'},
    {id:'kuang_lu',name:'狂卢',desc:'体内流淌着巴虺的血脉，痛苦即是力量',effect:{cultivation:25,constitution:15,sanity:-10},type:'special',rarity:'epic',hint:'修为+25 体魄+15 神志-10 袄景教视你为血脉后裔'},
    {id:'qi_chen',name:'七晨',desc:'生辰特殊，每月七日出生，与季灾有天然联系',effect:{cultivation:15,qiyun:10,comprehension:15},type:'special',rarity:'epic',hint:'修为+15 气运+10 悟性+15 季灾对你有所关注'},
    {id:'ji_jing',name:'极镜',desc:'心如明镜，能看穿一切幻象与谎言',effect:{comprehension:25,sanity:10,cultivation:5},type:'special',rarity:'epic',hint:'悟性+25 神志+10 修为+5 破除虚妄'},
    {id:'hong_yan',name:'火眼',desc:'修炼火功法门事半功倍，与红莲业火有缘',effect:{cultivation:20,constitution:10},type:'special',rarity:'epic',hint:'修为+20 体魄+10 火系功法威力倍增'},
    {id:'dan_yang_chuan',name:'丹阳传承',desc:'身负丹阳子残留道意，与天书有天然联系',effect:{cultivation:20,comprehension:15,sanity:-5},type:'special',rarity:'legendary',hint:'修为+20 悟性+15 神志-5 与丹阳子传承相关事件概率提升'},
    {id:'she_dao_ren',name:'赊刀人血统',desc:'监天司赊刀人后裔，天生能感知邪祟',effect:{cultivation:15,connections:15,comprehension:10},type:'special',rarity:'epic',hint:'修为+15 人脉+15 悟性+10 监天司好感度提升'},
    {id:'wu_sheng_xin_pan',name:'无生老母心蟠',desc:'你是无生老母的心蟠之一，天生拥有慈悲之力',effect:{cultivation:25,sanity:15,karma:20,connections:10},type:'special',rarity:'legendary',hint:'修为+25 神志+15 因果+20 人脉+10 白莲教视你为圣物'},
    {id:'ba_xu_xue_mai',name:'巴虺血脉',desc:'体内流淌着远古巴虺的血液，以痛苦喂养力量',effect:{cultivation:20,constitution:20,sanity:-15,karma:-10},type:'special',rarity:'epic',hint:'修为+20 体魄+20 神志-15 因果-10 袄景教视你为圣体'},
    {id:'fu_sheng_tian_yin',name:'福生天印',desc:'被福生天污染的胎记，天生与腐朽之力相连',effect:{cultivation:25,sanity:-25,qiyun:-15,comprehension:10},type:'special',rarity:'legendary',hint:'修为+25 悟性+10 神志-25 气运-15 能感知福生天的气息'},
    {id:'nuo_wu_ti',name:'傩巫体',desc:'天生可以承载傩面的力量，大傩仪式中人格不会崩溃',effect:{cultivation:15,sanity:10,constitution:10,comprehension:10},type:'special',rarity:'epic',hint:'修为+15 神志+10 体魄+10 悟性+10 傩面对你无副作用'},
    {id:'shuang_sheng',name:'双生',desc:'你有一个看不见的"双生体"，ta存在于另一个世界',effect:{cultivation:15,sanity:-20,comprehension:15,qiyun:5},type:'special',rarity:'epic',hint:'修为+15 悟性+15 气运+5 神志-20 偶尔能听见另一个自己的声音'},
    {id:'tian_dao_qi_zi',name:'天道弃子',desc:'被天道遗忘的存在，不受天道规则约束但也无法得到庇护',effect:{cultivation:10,qiyun:-20,karma:0,constitution:15,comprehension:15},type:'special',rarity:'legendary',hint:'修为+10 体魄+15 悟性+15 气运-20 天道对你无感'},
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
    {id:'tian_yun',name:'天运',desc:'天生气运加身，万事顺遂',effect:{qiyun:25,wealth:15,connections:5},type:'good',rarity:'rare',hint:'气运+25 金银+15 人脉+5'},
    {id:'zhuan_yun',name:'转运星',desc:'命中自带逢凶化吉之相',effect:{qiyun:15,constitution:10,sanity:5},type:'good',rarity:'uncommon',hint:'气运+15 体魄+10 神志+5'},
    {id:'ling_gen',name:'灵根',desc:'天生灵根，吸收灵气事半功倍',effect:{cultivation:15,comprehension:8},type:'good',rarity:'rare',hint:'修为+15 悟性+8 修炼加速'},
    {id:'shan_min',name:'善民',desc:'心存善念，行事端正',effect:{karma:15,qiyun:10,connections:5},type:'good',rarity:'uncommon',hint:'因果+15 气运+10 人脉+5'},
    {id:'tie_gu',name:'铁骨',desc:'天生铁骨铜皮，刀枪难入',effect:{constitution:20,cultivation:5},type:'good',rarity:'uncommon',hint:'体魄+20 修为+5'},
    {id:'duo_mou',name:'多谋',desc:'心思缜密，善于筹划',effect:{comprehension:12,connections:8,qiyun:5},type:'good',rarity:'rare',hint:'悟性+12 人脉+8 气运+5'},
    {id:'jing_shang',name:'精商',desc:'天生生意头脑，善于经营',effect:{wealth:35,connections:10},type:'good',rarity:'uncommon',hint:'金银+35 人脉+10'},
    {id:'yi_xin',name:'医心',desc:'天生对药理有天赋，懂得养生之道',effect:{constitution:10,comprehension:8,sanity:5},type:'good',rarity:'uncommon',hint:'体魄+10 悟性+8 神志+5'},
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
    {id:'po_yun',name:'破运',desc:'天生克运，诸事不顺',effect:{qiyun:-25,karma:-10,wealth:-10},type:'bad',rarity:'cursed',hint:'气运-25 因果-10 金银-10 但逆运而行，偶有奇遇'},
    {id:'tian_sha',name:'天煞孤星',desc:'命犯天煞，近身之人皆遭横祸',effect:{connections:-25,qiyun:-10,cultivation:5},type:'bad',rarity:'cursed',hint:'人脉-25 气运-10 修为+5 但无人敢近身'},
    {id:'shi_yi',name:'失忆',desc:'出生时便失去了所有前世记忆，对世界一片茫然',effect:{comprehension:-10,connections:-5,sanity:-5},type:'bad',rarity:'common',hint:'悟性-10 人脉-5 神志-5 但偶尔闪回前世片段'},
    {id:'gui_ying',name:'鬼婴',desc:'出生时便有鬼魂附体，阴气极重',effect:{sanity:-20,cultivation:10,constitution:-10},type:'bad',rarity:'cursed',hint:'神志-20 体魄-10 修为+10 阴气吸引邪祟'},
    {id:'fan_gu',name:'反骨',desc:'天生反骨，不服管束',effect:{connections:-15,karma:-10,comprehension:5},type:'bad',rarity:'common',hint:'人脉-15 因果-10 悟性+5 难以融入任何势力'},
    {id:'duan_ming',name:'短命',desc:'先天命格短促，阳寿不永',effect:{constitution:-15,qiyun:-10},type:'bad',rarity:'cursed',hint:'体魄-15 气运-10 寿命大幅缩短'},
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
  {id:'qing_feng',name:'清风观遗址',desc:'丹阳子的道观废墟，灵气残留',danger:40,wealth:5},
  {id:'shang_jing',name:'上京城',desc:'大梁国都，天子脚下，龙气汇聚',danger:15,wealth:90},
  {id:'si_qi',name:'四齐',desc:'大齐故地，法教入侵后满目疮痍',danger:55,wealth:20},
  {id:'an_ci',name:'安慈庵',desc:'静心师太曾在此驱邪济世',danger:25,wealth:10},
  // === NEW LOCATIONS ===
  {id:'zheng_de_si',name:'正德寺',desc:'佛门圣地，但传闻做着什么勾当',danger:45,wealth:35},
  {id:'kun_lun',name:'昆仑',desc:'传说中的万山之祖，上古秘境所在',danger:60,wealth:40},
  {id:'baiyu_jing',name:'白玉京',desc:'倒悬于天空的神之城，天道汇聚之地',danger:80,wealth:0},
  {id:'tian_chen',name:'天陈',desc:'神秘古国，左丘咏的领地',danger:70,wealth:50},
  {id:'xu_kong',name:'虚空',desc:'两个世界之间的夹缝，心素可见',danger:90,wealth:0},
  {id:'bei_jiang',name:'北疆',desc:'苦寒之地，异族出没',danger:55,wealth:25},
  {id:'hu_shan',name:'狐山',desc:'狐妖聚居之地，迷惑心智',danger:50,wealth:20},
  {id:'long_min',name:'龙眠泽',desc:'龙脉汇聚之所，灵气充沛',danger:40,wealth:30},
];

const FACTIONS = {
  none: {name:'无', bonus:{}, desc:'', requirement:null},
  zuowang: {name:'坐忘道', bonus:{cultivation:5,sanity:-5,comprehension:2}, desc:'信奉阴阳斗姥的邪修组织，以欺骗和玩弄为乐，成员以麻将牌为代号。修行坐忘论，利用罔天宝诰可召唤斗姥化身。',
    requirement:{cultivation:10}, requireDesc:'需修为境界达锻体以上',
    ranks:['万子','饼子','条子','东风','南风','西风','北风','红中','白板','发财'],
    rankReqs:[0,10,20,35,50,65,80,100,150,200],
    rankAgeReqs:[0,0,0,0,0,0,0,0,0,0]},
  jiantian: {name:'监天司', bonus:{wealth:10,connections:5,qiyun:3}, desc:'监察天下异事的官方机构，隶属大梁朝廷。下设癸卒至司丞六等，以神山鬼之眼为信仰。',
    requirement:{connections:10}, requireDesc:'需人脉10以上',
    ranks:['癸卒','壬卒','庚旗','百户','千户','司丞'],
    rankReqs:[0,15,30,60,100,200],
    rankAgeReqs:[0,0,18,22,30,40]},
  aojing: {name:'袄景教', bonus:{cultivation:8,connections:3,qiyun:-2}, desc:'信奉巴虺与牯神的神秘宗教，以自残献祭为修炼途径。教义源自袄教与景教合一，大千录为传承法器。',
    requirement:{cultivation:20}, requireDesc:'需修为境界达练气以上',
    ranks:['信徒','执事','长老','圣子','牯神使'],
    rankReqs:[0,25,50,100,200],
    rankAgeReqs:[0,0,20,25,35]},
  bailian: {name:'白莲教', bonus:{connections:8,sanity:-3,qiyun:-3}, desc:'信奉无生老母的秘密结社，以白氏与连氏为核心。圣女为教中至尊，传承红莲业火之法。',
    requirement:{wealth_max:50}, requireDesc:'金银不超过50方可入教',
    ranks:['教众','香主','堂主','护法','圣女近侍'],
    rankReqs:[0,10,25,50,100],
    rankAgeReqs:[0,0,16,22,30]},
  biaoju: {name:'镖局', bonus:{wealth:8,connections:5,constitution:2}, desc:'刀口舔血，押镖为生。江湖人的正道营生，凭武艺和信誉立足。',
    requirement:{constitution:30}, requireDesc:'需体魄30以上',
    ranks:['趟子手','镖师','镖头','总镖头'],
    rankReqs:[0,15,40,80],
    rankAgeReqs:[0,0,20,30]},
  fa_jiao: {name:'法教', bonus:{cultivation:10,sanity:-8,karma:-5,qiyun:-3}, desc:'来自大齐的异域宗教势力，信奉于儿神。以活人祭祀和十二大巫闻名，曾大举入侵大梁。',
    requirement:{cultivation:30,karma_max:10}, requireDesc:'需修为筑基以上且因果不高于10',
    ranks:['祭品','小巫','大巫','十二大巫','大祭司'],
    rankReqs:[0,35,60,120,250],
    rankAgeReqs:[0,0,20,30,40]},
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
  {id:'yin_yang_jing',name:'阴阳镜',desc:'可映照气运业力',effect:{comprehension:15,qiyun:10}},
  {id:'po_jie_zhu',name:'破戒珠',desc:'佛门叛逆之物，蕴含极端力量',effect:{cultivation:25,qiyun:-20}},
  {id:'tian_ji_pan',name:'天机盘',desc:'可推演天命走向',effect:{comprehension:20}},
  {id:'long_hu_dan',name:'龙虎丹',desc:'淬炼体魄的灵丹',effect:{constitution:25,cultivation:10}},
  {id:'nuo_mian',name:'傩面',desc:'大傩仪式所用面具，戴上后人格会变',effect:{cultivation:30,sanity:-20,qiyun:-15}},
  {id:'dan_yang_jian',name:'丹阳遗剑',desc:'丹阳子遗物，剑身有裂痕',effect:{cultivation:20,comprehension:10}},
  // === NEW: 道诡异仙特色法宝 ===
  {id:'wang_tian_bao_gao',name:'罔天宝诰',desc:'坐忘道至宝，可召唤阴阳斗姥化身',effect:{cultivation:40,sanity:-30,qiyun:-10}},
  {id:'da_qian_lu',name:'大千录',desc:'袄景教传承法器，记载献祭之术',effect:{cultivation:35,sanity:-20,constitution:-15}},
  {id:'hong_lian_ye_huo',name:'红莲业火',desc:'白莲教至高神通，可烧灼因果',effect:{cultivation:30,karma:15,sanity:-15}},
  {id:'tian_shu_shi_ban',name:'天书石板',desc:'丹阳子所藏，记载天书内容',effect:{cultivation:50,sanity:-25}},
  {id:'qi_dao_gu',name:'七道骨',desc:'巴虺信徒遗骨，可召唤巴虺之力',effect:{cultivation:35,sanity:-25,qiyun:-15}},
  {id:'pan_chi_long_jing',name:'蟠螭龙晶',desc:'龙脉精华，蕴含秩序天道',effect:{cultivation:45,sanity:-10,constitution:10}},
  {id:'ji_zai_ling',name:'季灾令',desc:'季灾的信物，掌管迷惘',effect:{cultivation:50,sanity:20,qiyun:15}},
  {id:'xu_kong_zhu',name:'虚空珠',desc:'两界夹缝之物，心素可用',effect:{sanity:40,cultivation:20}},
  {id:'bai_ling_miao_shen_xiang',name:'白灵淼神像',desc:'无生老母心蟠的雕像',effect:{cultivation:25,sanity:20,karma:10}},
  {id:'bing_shu_can_ye',name:'兵书残页',desc:'兵家传承，以血修炼',effect:{cultivation:25,constitution:20,karma:-10}},
  {id:'qi_xing_tong_qian_jian',name:'七星铜钱剑',desc:'罗教至宝，一百八十四枚古钱',effect:{cultivation:30,comprehension:15}},
  {id:'zhao_gu_zhi_yin',name:'招魂引',desc:'可召唤亡魂，与鬼脉相合',effect:{cultivation:20,sanity:-15,connections:10}},
  {id:'tian_gou_yan_lei',name:'天狗眼泪',desc:'天狗食日时掉落，可短暂看清天道',effect:{cultivation:25,comprehension:25}},
  {id:'dan_yang_yan_mu',name:'丹阳子遗物',desc:'包含天书石板和遗剑的传承',effect:{cultivation:60,sanity:-20}},
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
  // === 散修 ACHIEVEMENTS ===
  {id:'sanxiu_path',name:'散修之路',desc:'脱离门派成为散修',icon:'🌾'},
  {id:'sanxiu_master',name:'独步天下',desc:'以散修之身达到元婴境界',icon:'🏔'},
  {id:'sanxiu_all',name:'百家皆弃',desc:'散修且曾加入过3个以上门派',icon:'🍃'},
  // === CANONICAL EVENT ACHIEVEMENTS ===
  {id:'witness_baiyu',name:'白玉京之光',desc:'见证白玉京修补',icon:'🏛'},
  {id:'resist_fajiao',name:'抗教先锋',desc:'参与抵抗法教入侵',icon:'⚔'},
  {id:'witness_jizai',name:'季灾证道',desc:'见证李火旺成为季灾',icon:'🌟'},
  {id:'rank_max',name:'位极人臣',desc:'在门派中达到最高等级',icon:'👑'},
  {id:'long_life',name:'老而不死',desc:'修为延寿活过150岁',icon:'🐢'},
  {id:'century',name:'百岁人瑞',desc:'活过100岁',icon:'🎂'},
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
    {text:'拼死反抗',effect:{cultivation:10,sanity:-5,constitution:3,qiyun:3},log:'打跑了山贼，身上添了几道伤疤',combat:40},
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
  {text:'你对门派的<span class="mys">种种规矩</span>越来越感到束缚，心中萌生了离去之意。',choices:[
    {text:'脱离门派，成为散修',effect:{faction:'none',connections:-15,cultivation:5,comprehension:10},log:'你递上辞别书，从此天高海阔'},
    {text:'留下来',effect:{connections:5},log:'有所归属也不是坏事'},
    {text:'找掌门谈谈',effect:{connections:3,comprehension:3},log:'掌门说了一番话，你暂时打消了念头'}]},
  // === COMBAT SCALING EVENTS ===
  {text:'一伙<span class="danger-text">江湖悍匪</span>在大路上设了路障，手持利刃凶神恶煞。',choices:[
    {text:'正面突破',effect:{cultivation:8,constitution:5,qiyun:5},log:'你杀出一条血路！',combat:50},
    {text:'绕道而行',effect:{wealth:-10},log:'浪费了不少时间，但总比丢命好'},
    {text:'假装投降后偷袭',effect:{cultivation:5,karma:-5,qiyun:-3},log:'不太光彩，但管用',req:{comprehension:20}}]},
  {text:'一头<span class="danger-text">下山猛虎</span>挡在了你的去路上，虎目如炬。',choices:[
    {text:'与虎搏斗',effect:{cultivation:12,constitution:8,qiyun:8},log:'你打退了猛虎，虎皮卖了个好价钱',combat:60},
    {text:'装死',effect:{sanity:-8},log:'猛虎嗅了嗅你，走了...吓出一身冷汗'},
    {text:'慢慢后退',effect:{},log:'你缓缓退离虎的领地，松了一口气'}]},
  {text:'夜间，三名<span class="danger-text">黑衣人</span>破门而入，说有人出钱买你的命。',choices:[
    {text:'迎战杀手',effect:{cultivation:10,constitution:3,sanity:-5},log:'你击退了杀手，但不知是谁要害你',combat:55},
    {text:'从窗户逃跑',effect:{wealth:-20,connections:-5},log:'你丢下行李仓皇逃出'},
    {text:'报出门派名号',effect:{connections:-5},log:'他们犹豫了一下撤走了',req:{faction:'zuowang'}}]},
  {text:'边境发生了<span class="danger-text">大规模冲突</span>，你被卷入了混战之中。',
    trigger:{minAge:20},choices:[
    {text:'奋力杀敌',effect:{cultivation:15,connections:10,constitution:5,wealth:15},log:'你在混战中立了大功！',combat:70},
    {text:'保护平民撤退',effect:{karma:15,qiyun:10,connections:10},log:'你救了不少人，百姓感恩戴德'},
    {text:'趁乱逃走',effect:{sanity:-5,karma:-3},log:'战场不是你该来的地方'}]},
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
      {text:'誓死断后',effect:{cultivation:15,connections:25,sanity:-10,constitution:5,qiyun:10},log:'你浴血奋战，九死一生',combat:80},{text:'弃镖而逃',effect:{faction:'none',connections:-30,qiyun:-15},log:'你成了逃兵'}]},
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
  // Qiyun-talent interactions
  {text:'你走在街上，突然一块<span class="mys">金砖</span>从天而降砸在你脚边。',
    qiyunReq:{min:20},choices:[
    {text:'收入囊中',effect:{wealth:40,qiyun:-5},log:'天降横财！但用了一点气运'},
    {text:'交给官府',effect:{qiyun:10,karma:10,connections:5},log:'你将金砖上交，官差对你刮目相看'}]},
  {text:'你无意间踩到了一个<span class="danger-text">陷阱</span>，差点丧命。',
    qiyunReq:{max:-20},choices:[
    {text:'挣脱陷阱',effect:{constitution:-8,cultivation:5},log:'你受了伤但活了下来',combat:30},
    {text:'大喊救命',effect:{connections:5,qiyun:3},log:'幸好有路人经过救了你'}]},
  {text:'你感到一股<span class="mys">神秘力量</span>在暗中庇护着你。',
    qiyunReq:{min:40},choices:[
    {text:'感应那股力量',effect:{cultivation:20,comprehension:10,qiyun:5},log:'那似乎是...天道的眷顾？'},
    {text:'不去理会',effect:{qiyun:3},log:'顺其自然也是一种智慧'}]},
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

// === 散修 EVENTS (triggered when player is unaffiliated but has faction history) ===
const SANXIU_EVENTS = [
  {text:'你在山间独自修炼，没有门规束缚，反而悟出了<span class="mys">一丝独特的道意</span>。',choices:[
    {text:'深入参悟',effect:{cultivation:15,comprehension:10},log:'散修之道，在于自由'},
    {text:'记录下来',effect:{comprehension:8,wealth:5},log:'你将心得写成手札，或许日后能卖个好价钱'}]},
  {text:'一个<span class="npc">旧日同门</span>在街上认出了你，他的眼神复杂。',choices:[
    {text:'叙旧',effect:{connections:10,sanity:-5},log:'你们聊了一夜，他说门里的人还记得你'},
    {text:'假装不认识',effect:{connections:-5,sanity:3},log:'他叹了口气走了，你装作若无其事'},
    {text:'请他喝酒',effect:{connections:15,wealth:-10,qiyun:3},log:'酒过三巡，他偷偷告诉你门里的秘辛'}]},
  {text:'江湖上有人传言你是<span class="danger-text">叛徒散修</span>，不少人对你虎视眈眈。',choices:[
    {text:'用实力说话',effect:{cultivation:10,connections:5,constitution:3},log:'你当众展示修为，质疑的声音小了一些',combat:45},
    {text:'隐姓埋名',effect:{connections:-10,sanity:5},log:'你换了个身份，在新的地方重新开始'},
    {text:'无所谓',effect:{comprehension:5},log:'清者自清，不必在意闲言碎语'}]},
  {text:'你遇到一群<span class="npc">同为散修</span>的修士，他们提议结成<span class="fac">散修联盟</span>。',
    trigger:{minAge:20},choices:[
    {text:'加入联盟',effect:{connections:20,cultivation:5,wealth:10},log:'散修之间互通有无，你得到了不少帮助'},
    {text:'婉拒',effect:{comprehension:5},log:'你习惯了独行，不愿再受任何约束'},
    {text:'暗中观察',effect:{connections:5,comprehension:3},log:'你没有表态，但记住了几个有实力的人'}]},
  {text:'你在集市上看到旧门派的<span class="itm">秘传功法</span>被人当废纸卖。',choices:[
    {text:'买下来',effect:{wealth:-15,cultivation:20,comprehension:8},log:'虽然叛出了门派，但这功法你再熟悉不过'},
    {text:'通知旧门派',effect:{connections:10,karma:10,qiyun:5},log:'旧门派的人对你态度好了一些'},
    {text:'不管闲事',effect:{},log:'已经不是你的门派了'}]},
  {text:'一位<span class="npc">年迈散修</span>临死前拉住你说："散修的路，走到最后的都是强者。"',
    trigger:{minAge:25},choices:[
    {text:'接受他的遗物',effect:{cultivation:15,comprehension:10,wealth:10},log:'老散修将毕生收藏留给了你'},
    {text:'为他安葬',effect:{karma:10,qiyun:8},log:'你在路边为他立了一座坟'}]},
  {text:'你发现自己离开门派后，修炼速度反而<span class="mys">变快了</span>——没有门规的限制，天地万物皆可为师。',
    trigger:{cultivation:30},choices:[
    {text:'博采众长',effect:{cultivation:20,comprehension:15},log:'你开始融合从各门派学到的东西，创出自己的道'},
    {text:'返璞归真',effect:{cultivation:10,sanity:10,constitution:5},log:'你放下了所有门派的痕迹，从头修自己的道'}]},
  {text:'有门派想<span class="npc">招揽你</span>回去，开出了优厚的条件。',
    trigger:{minAge:20,cultivation:40},choices:[
    {text:'考虑一下',effect:{connections:10,wealth:20},log:'你没有答应，但拿了他们的好处'},
    {text:'断然拒绝',effect:{connections:-5,comprehension:8,qiyun:5},log:'散修之路，不回头'},
    {text:'漫天要价',effect:{wealth:40,connections:-10,karma:-5},log:'你狠狠敲了他们一笔'}]},
  {text:'你在野外遭遇了<span class="danger-text">一群门派弟子</span>围堵，他们说散修不配在此修炼。',
    trigger:{minAge:18},choices:[
    {text:'以一敌多',effect:{cultivation:12,constitution:5,connections:-5},log:'你打得他们落花流水！',combat:50},
    {text:'据理力争',effect:{connections:5,comprehension:5},log:'你说得他们哑口无言'},
    {text:'另寻他处',effect:{sanity:-3},log:'好汉不吃眼前亏'}]},
  {text:'你在<span class="loc">鬼市</span>遇到一位<span class="npc">神秘散修</span>，他号称掌握了<span class="mys">融合百家之法</span>。',
    trigger:{minAge:25,cultivation:50},choices:[
    {text:'请教融合之法',effect:{cultivation:25,comprehension:15,sanity:-10},log:'那方法极为凶险，但你隐约看到了一条全新的道路'},
    {text:'交流心得',effect:{cultivation:10,comprehension:10,connections:10},log:'你们互相印证，都有所收获'},
    {text:'不信他',effect:{sanity:5},log:'江湖骗子太多，还是靠自己'}]},
];

// === TALENT CONFLICTS (bidirectional) ===
const TALENT_CONFLICTS = {
  jian_kang: ['ti_ruo','ji_bing','bai_bing','gui_ying'],
  ti_ruo: ['jian_kang','wu_xing','xian_gu','tie_gu'],
  fu_gui: ['pin_kun','du_zhai','wu_qin'],
  pin_kun: ['fu_gui'],
  du_zhai: ['fu_gui'],
  wu_qin: ['gui_ren','fu_gui'],
  gui_ren: ['wu_qin','sha_qi','tian_sha'],
  zhi_hui: ['yu_ben'],
  yu_ben: ['zhi_hui','ling_gen'],
  fu_yuan: ['ye_zhang','sha_qi','po_yun'],
  ye_zhang: ['fu_yuan','tian_yun','shan_min'],
  mei_mao: ['chou_lou','tian_sha'],
  chou_lou: ['mei_mao'],
  wu_xing: ['can_ji','ti_ruo'],
  can_ji: ['wu_xing','jian_kang','tie_gu'],
  xian_gu: ['ti_ruo'],
  ji_bing: ['jian_kang'],
  bai_bing: ['jian_kang'],
  sha_qi: ['gui_ren','fu_yuan'],
  tian_yun: ['po_yun','ye_zhang'],
  po_yun: ['tian_yun','fu_yuan','zhuan_yun'],
  zhuan_yun: ['po_yun'],
  tian_sha: ['gui_ren','mei_mao','kou_cai'],
  duan_ming: ['shou_xing','jian_kang'],
  shou_xing: ['duan_ming'],
  shan_min: ['ye_zhang','sha_qi'],
  tie_gu: ['ti_ruo','can_ji'],
  ling_gen: ['yu_ben'],
  gui_ying: ['jian_kang','xu_jing'],
  fan_gu: ['kou_cai'],
};

// === ATTRIBUTE TOOLTIP DESCRIPTIONS ===
const STAT_TOOLTIPS = {
  age: '你在这一世的年龄',
  sanity: '神志：仅心素天赋可见。降至0则陷入永恒疯狂。受两界之力影响波动。',
  cultivation: '修为：修炼境界，决定力量等级和寿命上限。凡人寿82，锻体90，练气100，筑基120，金丹150，元婴200，化神300，大乘500，大傩800，造化1200。',
  wealth: '金银：身上的钱财。降至-80会饿死街头。游历、购物都需要金银。',
  connections: '人脉：你在江湖中的社交关系网络。影响可触发的事件和势力互动。',
  comprehension: '悟性：对道的理解程度(0-100)。每30点悟性提升1点年修炼速度。影响高级事件触发。',
  qiyun: '气运：气运值(-100~100)。正值为善运，负值为厄运。极端值触发气运事件，影响结局。',
  karma: '因果：因果值(-100~100)。善行增因果，恶行减因果。极端值触发因果事件。影响门派准入和特殊结局。',
  constitution: '体魄：身体强度(0-100)。每10点体魄增加5年寿命。高修为可延缓衰老。降至0则肉身崩溃而死。部分门派入门有体魄要求。',
  faction: '当前所属势力及门内等级。修为提升可晋升门内等级，获得更多资源和地位。只能加入一个门派，叛出有严重代价。脱离门派后成为散修。',
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
  // Qiyun-enhanced karma event
  {text:'你遇到一位<span class="npc">命理大师</span>，他一见你便说："施主气运非凡，但因果纠缠。"',
    karmaReq:{abs:20},choices:[
    {text:'请他化解',effect:{karma:10,qiyun:10,wealth:-15},log:'大师做法之后，你感觉身轻了不少'},
    {text:'自己的命自己扛',effect:{comprehension:5,constitution:3},log:'不假他人之手，也是一种修行'}]},
];

// === TRAVEL EVENTS (triggered when traveling) ===
const TRAVEL_EVENTS = [
  {text:'游历途中，你在<span class="loc">山间小路</span>遇到一伙<span class="danger-text">山贼</span>拦路。',choices:[
    {text:'出手击退',effect:{cultivation:5,constitution:3,karma:5},log:'你教训了山贼，路人纷纷道谢',combat:35},
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

// === CANONICAL EVENTS (Major novel events by timeline, player as bystander/participant) ===
const CANONICAL_EVENTS = [
  // --- 卷1 时期: 清风观覆灭 / 丹阳子 (year -10 ~ 5) ---
  {text:'你听闻<span class="loc">清风观</span>有一位<span class="npc">丹阳子</span>道长，据说拥有一块刻满经文的<span class="itm">天书石板</span>，四处收集"药引子"炼仙丹。',
    trigger:{minAge:12,yearMin:-15,yearMax:2},choices:[
    {text:'前去打探',effect:{cultivation:10,sanity:-10,comprehension:5},log:'你远远看到了清风观，里面传出孩童的哭声...'},
    {text:'避而远之',effect:{sanity:5,qiyun:3},log:'那地方不干净，离远点好'}]},
  {text:'清风观突然发生<span class="danger-text">大爆炸</span>，方圆数里都能看到冲天火光。传闻是弟子反杀了<span class="npc">丹阳子</span>。',
    trigger:{minAge:10,yearMin:-2,yearMax:3},choices:[
    {text:'前去查看废墟',effect:{cultivation:15,sanity:-12,comprehension:8},log:'废墟中有残留的灵气波动，你隐约感知到了一场惊天之战的余波',item:'dan_yang_jian'},
    {text:'听人议论',effect:{comprehension:5},log:'茶馆里众说纷纭——有人说丹阳子死了，有人说他还活着'}]},
  {text:'你在路上遇到一群从<span class="loc">清风观</span>逃出来的孩子，为首的少年神情坚毅却时常恍惚。',
    trigger:{minAge:10,yearMin:-1,yearMax:5},choices:[
    {text:'给他们食物和银两',effect:{wealth:-15,qiyun:15,karma:10,connections:10},log:'那少年认真地谢过你，你注意到他腰间挂着一个铜铃'},
    {text:'报告官府',effect:{connections:5,karma:-5},log:'官府来时他们已经走了'},
    {text:'不管闲事',effect:{},log:'流浪的孩子太多了'}]},
  {text:'<span class="loc">正德寺</span>近日香火极盛，但有传闻说寺中<span class="npc">心慧方丈</span>做着<span class="danger-text">不可告人之事</span>——以女婴制作"花瓶娃"。',
    trigger:{minAge:15,yearMin:-5,yearMax:10},choices:[
    {text:'暗中调查',effect:{sanity:-15,comprehension:10,cultivation:8,karma:5},log:'你在寺后发现了令人作呕的真相...正德寺并非什么善地'},
    {text:'向监天司举报',effect:{connections:15,qiyun:5,karma:10},log:'监天司记下了，但似乎对正德寺无可奈何'},
    {text:'不碰这种事',effect:{sanity:3},log:'佛门之事，外人莫问'}]},
  {text:'<span class="loc">安慈庵</span>的<span class="npc">静心师太</span>是远近闻名的驱邪高手。你路过时发现庵门大开，师太竟然<span class="danger-text">死在了猪圈中</span>。',
    trigger:{minAge:15,yearMin:2,yearMax:8},choices:[
    {text:'为师太收殓安葬',effect:{karma:15,qiyun:10,sanity:-10},log:'你亲手埋葬了师太，心中悲痛——谁能杀死这样一位高人？'},
    {text:'搜寻线索',effect:{comprehension:10,sanity:-15,cultivation:5},log:'你发现现场有坐忘道的痕迹...还有更诡异的东西'},
    {text:'立刻离开',effect:{sanity:-5},log:'这种死法太过蹊跷，不宜久留'}]},

  // --- 卷2 时期: 坐忘道动乱 / 李火旺加入监天司 (year 5 ~ 15) ---
  {text:'<span class="fac">坐忘道</span>在各地制造<span class="danger-text">缩阳事件</span>，百姓人心惶惶。<span class="fac">监天司</span>的<span class="npc">赊刀人</span>四处奔走平乱。',
    trigger:{minAge:15,yearMin:5,yearMax:15},choices:[
    {text:'协助监天司破案',effect:{connections:20,cultivation:10,qiyun:8},log:'你帮助揭穿了坐忘道的骗局，赊刀人对你刮目相看'},
    {text:'加入维护治安',effect:{connections:10,wealth:15,constitution:3},log:'你在乱局中维持了一方安宁'},
    {text:'闭门不出',effect:{wealth:-5},log:'风声鹤唳的日子里，买卖都做不成'}]},
  {text:'有传闻说<span class="fac">坐忘道</span>的<span class="npc">骰子</span>——那个最危险的人物——正在暗中操纵大梁朝局。',
    trigger:{minAge:18,yearMin:8,yearMax:18},choices:[
    {text:'打探消息',effect:{comprehension:10,sanity:-10,connections:5},log:'越查越深，你发现坐忘道在朝中无处不在'},
    {text:'不关心朝政',effect:{},log:'天高皇帝远，和你没关系'}]},
  {text:'大梁皇城发生<span class="danger-text">剧变</span>！传闻有人在皇宫召唤了<span class="mys">斗姥</span>，天空出现两片太极鱼状的大海。整个上京城的人都看到了。',
    trigger:{minAge:12,yearMin:10,yearMax:18},choices:[
    {text:'朝皇城方向赶去',effect:{cultivation:25,sanity:-20,comprehension:15,constitution:-5},log:'你在远处看到了令人永生难忘的景象——一个混沌扭曲的存在降临了！'},
    {text:'跪地祈祷',effect:{sanity:-10,qiyun:5},log:'那一刻，所有人都感受到了神明的恐怖'},
    {text:'趁乱逃出上京',effect:{wealth:-20,sanity:-5},log:'你拼命跑出了上京城，身后是无尽的混乱'}]},
  {text:'<span class="npc">诸葛渊</span>在上京之战中<span class="danger-text">油尽灯枯</span>，为救苍生一人抵挡司命。修士圈中无人不知此事。',
    trigger:{minAge:15,yearMin:12,yearMax:20},choices:[
    {text:'前往杏岛祭拜',effect:{comprehension:15,cultivation:10,qiyun:10},log:'杏岛上已有无数修士前来悼念，诸葛渊之名将永载史册'},
    {text:'继承其道意',effect:{cultivation:25,comprehension:20,sanity:-10},log:'你在冥想中似乎触碰到了诸葛渊留在天地间的残余道意'},
    {text:'默哀',effect:{sanity:-5,karma:3},log:'又一位大能陨落了，这世道...'}]},
  {text:'<span class="npc">高智坚</span>——据说是大齐皇族后裔——竟然登基成了<span class="fac">大梁皇帝</span>！朝野震动。',
    trigger:{minAge:12,yearMin:13,yearMax:20},choices:[
    {text:'关注局势变化',effect:{comprehension:5,connections:5},log:'新皇登基，天下格局将变'},
    {text:'上京投效新朝',effect:{connections:15,wealth:20},log:'新朝初建，正是用人之际'},
    {text:'观望不动',effect:{},log:'皇帝换谁都一样，日子照过'}]},

  // --- 卷3 时期: 龙脉纷争 / 李火旺成为司命 (year 15 ~ 25) ---
  {text:'天降异象——<span class="mys">天狗食日</span>，大地陷入黑暗。许多修士在这一刻失去了灵感，有人甚至失去了双眼。',
    trigger:{minAge:12,yearMin:15,yearMax:22},choices:[
    {text:'闭目修炼抵御',effect:{cultivation:15,comprehension:10,sanity:-10},log:'你在黑暗中感知到了天道的波动'},
    {text:'帮助受灾百姓',effect:{karma:15,connections:15,qiyun:5},log:'你在天灾中救助了不少人'},
    {text:'躲在家中',effect:{sanity:-5},log:'黑暗过去后，世界似乎变了'}]},
  {text:'有人在<span class="loc">大梁</span>各地发现了<span class="itm">龙脉</span>的踪迹——由一位位皇帝摞成的神秘存在，蕴含着秩序司命<span class="npc">蟠螭</span>的天道之力。',
    trigger:{minAge:20,yearMin:16,yearMax:25,cultivation:50},choices:[
    {text:'尝试感应龙脉',effect:{cultivation:30,comprehension:15,sanity:-15},log:'龙脉的气息让你浑身颤栗——那是超越凡人理解的力量'},
    {text:'收集龙脉情报',effect:{connections:15,comprehension:10,wealth:10},log:'你打听到龙脉可以免疫绝大部分的神通功法'},
    {text:'不碰这种东西',effect:{sanity:5},log:'龙脉之事，非凡人能染指'}]},
  {text:'江湖传闻<span class="npc">李火旺</span>已非凡人——他以<span class="itm">先天一炁</span>成就了自己的司命<span class="mys">季灾</span>，掌管迷惘与清醒。',
    trigger:{minAge:18,yearMin:18,yearMax:28,cultivation:40},choices:[
    {text:'追寻季灾之道',effect:{cultivation:20,comprehension:20,sanity:-20},log:'迷惘与清醒...你第一次思考"道"的本质'},
    {text:'敬而远之',effect:{sanity:5,qiyun:3},log:'凡人不该妄想成为司命'}]},

  // --- 卷4 时期: 法教入侵 / 补白玉京 (year 20 ~ 35) ---
  {text:'<span class="fac">法教</span>大军从大齐涌入，<span class="danger-text">四齐沦陷</span>！法教的十二大巫以活人祭祀召唤<span class="npc">于儿神</span>，所过之处寸草不生。',
    trigger:{minAge:15,yearMin:20,yearMax:32},choices:[
    {text:'参加抵抗军',effect:{cultivation:15,connections:20,constitution:-5,karma:10,qiyun:5},log:'你加入了各门派联合的抵抗力量，与法教殊死搏斗',combat:70,achieve:'resist_fajiao'},
    {text:'护送难民撤离',effect:{karma:20,connections:15,wealth:-10},log:'你帮助大量四齐难民逃往大梁'},
    {text:'逃难',effect:{wealth:-15,sanity:-5},log:'法教的恐怖你无力抵挡'}]},
  {text:'<span class="fac">监天司</span>司丞<span class="npc">玄牝</span>召集各国监天司共同对抗法教，一场<span class="danger-text">旷世大战</span>即将打响。',
    trigger:{minAge:18,yearMin:22,yearMax:30,cultivation:30},choices:[
    {text:'响应号召',effect:{cultivation:20,connections:25,constitution:-8,qiyun:10},log:'你在联军中作战，亲眼见证了各派高手的风采',combat:80},
    {text:'提供情报支援',effect:{connections:15,wealth:15,comprehension:5},log:'你在后方为联军提供了关键情报'},
    {text:'隔岸观火',effect:{comprehension:5},log:'两边的力量都太过恐怖'}]},
  {text:'法教覆灭后，<span class="npc">于儿神</span>被斗杀，但天灾再次降临——<span class="danger-text">死亡消失了</span>！没有任何生物能够死去。',
    trigger:{minAge:12,yearMin:25,yearMax:33},choices:[
    {text:'利用不死之身修炼',effect:{cultivation:30,constitution:10,sanity:-20},log:'在无法死亡的日子里，你疯狂地修炼，承受着本该致死的痛苦'},
    {text:'寻找原因',effect:{comprehension:15,sanity:-15,cultivation:10},log:'你意识到是白玉京中掌管死亡的天道出了问题'},
    {text:'惊恐不安',effect:{sanity:-10},log:'不能死去...这比死亡更恐怖'}]},
  {text:'<span class="loc">白玉京</span>的裂隙肉眼可见地出现在天空中！巨大的倒悬之城时隐时现，<span class="mys">牦之门</span>的轮廓清晰可辨。',
    trigger:{minAge:20,yearMin:28,yearMax:36,cultivation:80},choices:[
    {text:'尝试接近白玉京',effect:{cultivation:50,sanity:-30,comprehension:20,qiyun:-10},log:'你在白玉京的边缘感受到了十六条天道的余韵——迷惘、清醒、死亡、慈悲、谎言、痛苦、秘密、秩序...',achieve:'witness_baiyu'},
    {text:'远远膜拜',effect:{cultivation:15,sanity:-10,qiyun:5},log:'凡人只能仰望神的居所'}]},
  {text:'<span class="npc">玄牝</span>司丞突然化为<span class="mys">六爪金龙</span>，带着一群龙人冲入白玉京裂隙！传闻这是为了给<span class="npc">李火旺</span>补充龙气以修补白玉京。',
    trigger:{minAge:15,yearMin:28,yearMax:35},choices:[
    {text:'助阵',effect:{cultivation:20,constitution:-10,qiyun:15,connections:15},log:'你贡献了自己的一份力量，虽然微薄'},
    {text:'见证历史',effect:{comprehension:15,sanity:-10},log:'你亲眼看到了凡人化龙的壮观一幕'}]},

  // --- 卷5 时期: 福生天入侵 / 大傩觉醒 (year 30 ~ 45) ---
  {text:'天灾接连发生——先是<span class="danger-text">谎言消失</span>（没人能说谎了），然后<span class="danger-text">腐烂消失</span>（尸体不再腐烂）。天道一条条出了问题。',
    trigger:{minAge:15,yearMin:30,yearMax:40},choices:[
    {text:'寻找天灾根源',effect:{comprehension:20,cultivation:15,sanity:-20},log:'你逐渐意识到——白玉京中的司命们正在被什么东西侵蚀'},
    {text:'适应新世界',effect:{cultivation:10,comprehension:5},log:'没有谎言的世界...反而更混乱了'},
    {text:'恐惧退缩',effect:{sanity:-15},log:'世界正在崩塌，你无力阻止'}]},
  {text:'修士圈中传来噩耗：被<span class="danger-text">福生天</span>污染的<span class="npc">三清元尊</span>正在祸害白玉京中的其他司命。<span class="npc">李火旺</span>正带领诸司命进行最后的抵抗。',
    trigger:{minAge:20,yearMin:33,yearMax:42,cultivation:60},choices:[
    {text:'贡献修为助力',effect:{cultivation:-20,qiyun:25,karma:20,comprehension:15},log:'你将部分修为化为力量投入白玉京方向——虽然不知道有没有用'},
    {text:'为天下祈祷',effect:{karma:10,sanity:-10,qiyun:5},log:'你跪地祈祷，愿天道平安'},
    {text:'在乱世中自保',effect:{constitution:5,sanity:-5},log:'天道之战，非凡人能干预'}]},
  {text:'一道<span class="mys">金光</span>从白玉京中射出，天地间所有天灾在同一时刻<span class="itm">消失</span>了。传闻<span class="npc">季灾</span>吞食了所有天道，以一己之力成为了新的<span class="itm">大傩</span>——守护着白玉京。',
    trigger:{minAge:15,yearMin:35,yearMax:45},choices:[
    {text:'感悟季灾之道',effect:{cultivation:40,comprehension:25,sanity:20},log:'迷惘即清醒，清醒即迷惘。你在季灾的道中看到了一切的答案。',achieve:'witness_jizai'},
    {text:'庆祝太平',effect:{qiyun:15,connections:10,karma:5},log:'天下终于太平了，百姓欢呼雀跃'},
    {text:'继续修行',effect:{cultivation:15,comprehension:10},log:'不管天道如何变迁，你只走自己的道'}]},

  // --- 天陈国相关 (year 25 ~ 35) ---
  {text:'一个名为<span class="fac">天陈</span>的神秘国家浮出水面，其统治者<span class="npc">左丘咏</span>据说能直接掌控一条天道——<span class="mys">生长</span>。他驾着金龙向大梁进发。',
    trigger:{minAge:18,yearMin:25,yearMax:33,cultivation:40},choices:[
    {text:'加入抵抗',effect:{cultivation:20,connections:15,constitution:-10,qiyun:5},log:'你在抵抗左丘咏的战役中出了一份力，但面对掌控天道之人，你感到无比渺小',combat:90},
    {text:'研究天陈历史',effect:{comprehension:15,cultivation:10},log:'你发现天陈就是过去的"真空家乡"——曾被无生老母彻底控制的国度'},
    {text:'远离战场',effect:{sanity:-5},log:'凡间司命之间的较量，不是你能参与的'}]},

  // --- 各派日常重大事件 ---
  {text:'<span class="fac">白莲教</span>的<span class="npc">圣女白灵淼</span>突然现身，传闻她是<span class="mys">无生老母</span>的心蟠，能直接召唤无生老母。',
    trigger:{minAge:15,yearMin:10,yearMax:30},choices:[
    {text:'设法面见圣女',effect:{connections:20,cultivation:10,sanity:-10},log:'白灵淼的气质令人既敬畏又怜惜——一个白化病女子，却承载着司命的力量'},
    {text:'远离白莲教的事',effect:{},log:'司命的心蟠，那是另一个层次的存在'}]},
  {text:'<span class="fac">兵家</span>的传承物<span class="itm">兵书</span>重现江湖。将血涂抹在书页上可修行兵家之法：煞气冲击、扩大体型、血肉不灭则肉身不死。',
    trigger:{minAge:18,yearMin:5,yearMax:25,cultivation:30},choices:[
    {text:'设法获取兵书残页',effect:{cultivation:20,constitution:10,karma:-10,connections:-5},log:'你得到了一页兵书残页，修炼后感到煞气充盈',combat:60},
    {text:'旁观不参与',effect:{comprehension:5},log:'兵家之法太过暴烈，不适合你'}]},
  {text:'<span class="fac">罗教</span>传人出现，手持<span class="itm">七星铜钱剑</span>，以一百八十四枚古钱编成。传闻此剑能化煞驱邪。',
    trigger:{minAge:15,yearMin:0,yearMax:20},choices:[
    {text:'请教罗教修行',effect:{cultivation:15,comprehension:10,connections:10},log:'罗教的修行平和内敛，与其他教派截然不同'},
    {text:'收集铜钱仿制',effect:{cultivation:5,wealth:-10},log:'仿制品不及真品万一，但聊胜于无'}]},
];

// === RANK EVENTS (triggered by faction rank) ===
const RANK_EVENTS = {
  zuowang: [
    {text:'你在<span class="fac">坐忘道</span>中晋升后，<span class="npc">骰子</span>亲自找到你，要你完成一个<span class="danger-text">"有趣"</span>的任务——去一个村子里散布谎言。',
      rankReq:3,choices:[
      {text:'执行任务',effect:{connections:-10,qiyun:-15,karma:-15,cultivation:15},log:'整个村子陷入了混乱和猜疑——而骰子在远处大笑'},
      {text:'暗中破坏任务',effect:{connections:-5,qiyun:5,karma:10},log:'你没有完成任务，但骰子似乎并不在意'},
      {text:'问骰子目的',effect:{comprehension:10,sanity:-10},log:'骰子只说了一句："好玩就够了。"'}]},
    {text:'坐忘道的<span class="npc">红中</span>召集核心成员，要传授<span class="mys">罔天宝诰</span>——据说诵此咒可接引<span class="npc">斗姥</span>化身下凡。',
      rankReq:5,choices:[
      {text:'学习罔天宝诰',effect:{cultivation:35,sanity:-25,comprehension:15,qiyun:-15},log:'你感受到了阴阳斗姥那令人窒息的谎言之力...'},
      {text:'觉得太危险',effect:{connections:-15,sanity:10},log:'你退出了这次传法，引来了同门的质疑'}]},
    {text:'你发现了坐忘道的<span class="mys">终极秘密</span>：所有成员都是被骰子骗进来的，"坐忘"不过是斗姥为了寻找<span class="mys">心蟠</span>的手段。',
      rankReq:7,choices:[
      {text:'接受真相继续修行',effect:{cultivation:25,comprehension:20,sanity:-15},log:'知道了又如何？这条路已经走了太远'},
      {text:'脱离坐忘道',effect:{faction:'none',connections:-25,qiyun:10,sanity:10},log:'你毅然脱离了坐忘道，成为了散修'}]},
  ],
  jiantian: [
    {text:'你晋升<span class="fac">监天司</span>庚旗后，获得了查阅<span class="itm">机密档案</span>的权限——里面记载着各地邪祟和坐忘道的情报。',
      rankReq:2,choices:[
      {text:'仔细研读',effect:{comprehension:15,cultivation:10,sanity:-10},log:'你对这个世界的黑暗面有了更深的了解'},
      {text:'只看自己需要的',effect:{comprehension:5,connections:5},log:'知道得太多不一定是好事'}]},
    {text:'作为<span class="fac">监天司</span>百户，你被委以<span class="danger-text">剿灭</span>一个邪教据点的重任。',
      rankReq:3,choices:[
      {text:'亲自领队出击',effect:{cultivation:15,connections:15,constitution:-5,karma:5},log:'你成功铲除了邪教据点，声望大增',combat:65},
      {text:'请求增援后行动',effect:{connections:10,cultivation:5},log:'稳妥地完成了任务，上司点了点头'}]},
    {text:'<span class="fac">监天司</span>内部出现叛徒——有人暗通<span class="fac">坐忘道</span>，出卖了多名探员的身份。',
      rankReq:4,choices:[
      {text:'亲自追查叛徒',effect:{cultivation:10,connections:-5,sanity:-10,comprehension:8},log:'你揪出了叛徒，但发现他被坐忘道洗脑多年...'},
      {text:'加强自身防护',effect:{constitution:5,sanity:5},log:'你开始更加谨慎地行事'}]},
  ],
  aojing: [
    {text:'你在<span class="fac">袄景教</span>中地位渐高，获准修习<span class="itm">大千录</span>上的高级神通——以献祭自身痛苦来施展强大法术。',
      rankReq:2,choices:[
      {text:'修习献祭之法',effect:{cultivation:25,constitution:-8,sanity:-15,comprehension:10},log:'你学会了以指骨为飞刀、以皮肉为牢笼的可怕神通'},
      {text:'只学基础法术',effect:{cultivation:10,constitution:-3},log:'你只修习了低阶的献祭术'}]},
    {text:'教中传来消息：<span class="npc">牯神</span>即将苏醒，它是与<span class="npc">巴虺</span>平等的圣人，能自由召唤巴虺。教中要选出新一任<span class="npc">牯神使</span>。',
      rankReq:3,choices:[
      {text:'争夺牯神使之位',effect:{cultivation:30,connections:15,sanity:-20,qiyun:-10},log:'你在竞争中脱颖而出，获得了与巴虺沟通的资格'},
      {text:'甘当辅佐',effect:{connections:10,cultivation:10},log:'你选择辅佐新任牯神使，在教中依然受人尊重'}]},
  ],
  bailian: [
    {text:'作为<span class="fac">白莲教</span>堂主，你获悉圣母<span class="npc">无生老母</span>的真实面目——她是掌管<span class="mys">慈悲</span>的司命。',
      rankReq:2,choices:[
      {text:'更加虔诚信仰',effect:{cultivation:20,comprehension:10,qiyun:10},log:'理解了无生老母的本质后，你的信仰更加坚定'},
      {text:'产生动摇',effect:{comprehension:15,sanity:-10,connections:-5},log:'司命...这已经超出了你对"教"的理解'}]},
    {text:'<span class="fac">白莲教</span>护法传你<span class="itm">红莲业火</span>的高阶用法——可以烧灼因果、净化业障。',
      rankReq:3,choices:[
      {text:'全力修习',effect:{cultivation:25,karma:15,sanity:-10,constitution:-5},log:'红莲业火在你体内燃烧，你感到过去的罪孽在被洗涤'},
      {text:'谨慎修习',effect:{cultivation:10,karma:5},log:'你只取其精华，不至于伤了根基'}]},
  ],
  biaoju: [
    {text:'你升为<span class="fac">镖局</span>镖头后，接到了一单<span class="danger-text">要命的活</span>——护送<span class="itm">龙脉碎片</span>去大梁皇城。',
      rankReq:2,choices:[
      {text:'亲自押镖',effect:{cultivation:15,wealth:50,constitution:-8,qiyun:10},log:'一路九死一生，但龙脉碎片安全送达，你名震江湖',combat:75},
      {text:'推掉这单',effect:{connections:-15,wealth:-10},log:'镖局的兄弟们很失望'}]},
    {text:'作为总镖头，你被邀请参加<span class="fac">各门派联盟</span>会议，讨论如何应对法教入侵。',
      rankReq:3,choices:[
      {text:'慷慨陈词',effect:{connections:25,qiyun:10,cultivation:5},log:'你的发言打动了在场的各派掌门'},
      {text:'默默旁听',effect:{comprehension:10,connections:5},log:'你在会议中学到了很多'}]},
  ],
  fa_jiao: [
    {text:'你在<span class="fac">法教</span>中修为渐深，大祭司要你主持<span class="danger-text">十二大巫仪式</span>——以十二条人命祭祀<span class="npc">于儿神</span>。',
      rankReq:2,choices:[
      {text:'主持仪式',effect:{cultivation:35,karma:-40,sanity:-25,qiyun:-20},log:'于儿神短暂地降临了——那一刻你感受到了超越一切的恐怖力量'},
      {text:'暗中放走祭品',effect:{karma:20,qiyun:10,connections:-20},log:'你救了十二条命，但法教中有人开始怀疑你'}]},
    {text:'法教准备<span class="danger-text">入侵大梁</span>的最终计划已经制定。作为核心成员，你将获得一条<span class="itm">龙脉</span>的力量加持。',
      rankReq:3,choices:[
      {text:'接受龙脉力量',effect:{cultivation:40,constitution:10,sanity:-20,karma:-25},log:'龙脉的力量让你脱胎换骨，但你能感觉到这力量中蕴含着无数生命的哀嚎'},
      {text:'叛出法教投奔大梁',effect:{faction:'none',connections:20,karma:25,qiyun:15},log:'你将法教的全部计划交给了监天司，成为了叛逃者'}]},
  ],
};

// === CONSTITUTION EVENTS (triggered by constitution thresholds) ===
const CONSTITUTION_EVENTS = [
  // High constitution events
  {text:'你的体魄已臻化境，一位<span class="npc">武道宗师</span>慕名前来切磋。',
    constReq:{min:70},trigger:{minAge:20},choices:[
    {text:'痛快一战',effect:{cultivation:15,constitution:5,connections:10,comprehension:5},log:'你们大战三百回合不分胜负，惺惺相惜',combat:60},
    {text:'以茶代酒',effect:{connections:15,comprehension:8},log:'武道宗师与你论道一夜，你受益匪浅'}]},
  {text:'你在山中修炼时，体内气血翻涌如大河奔腾——<span class="mys">锻体极境</span>近在眼前！',
    constReq:{min:80},trigger:{minAge:25},choices:[
    {text:'以命搏极境',effect:{constitution:10,cultivation:20,sanity:-10},log:'你突破了锻体极境！肌肤如铁，百毒不侵',req:{cultivation:20}},
    {text:'缓缓沉淀',effect:{constitution:5,comprehension:5},log:'极境不可强求，你选择打好根基'}]},
  {text:'有<span class="npc">邪修</span>看上了你强健的体魄，想将你炼成<span class="danger-text">傀儡战尸</span>。',
    constReq:{min:60},trigger:{minAge:18},choices:[
    {text:'以力破法',effect:{cultivation:10,constitution:3,qiyun:5},log:'你凭蛮力挣脱了他的术法，一拳将他轰飞',combat:50},
    {text:'假意就范再反杀',effect:{cultivation:15,comprehension:5,karma:-5},log:'你假装中术，在他放松警惕时一击致命',req:{comprehension:25}}]},
  // Low constitution events
  {text:'你的身体越来越虚弱，连走路都会<span class="danger-text">喘不上气</span>。',
    constReq:{max:25},trigger:{minAge:15},choices:[
    {text:'寻找灵药续命',effect:{wealth:-30,constitution:10,cultivation:5},log:'你花重金买到一颗续命丹，勉强稳住了身体',req:{wealth:30}},
    {text:'以意志硬撑',effect:{comprehension:5,sanity:-5,constitution:-3},log:'你的精神在消耗，但肉体的枷锁反而让你悟到了什么'},
    {text:'放弃修炼养身',effect:{cultivation:-10,constitution:8,sanity:5},log:'你暂停修炼，安心养病'}]},
  {text:'你的经脉因体魄不足而<span class="danger-text">开裂</span>，修为有倒退之险。',
    constReq:{max:20},trigger:{minAge:20,cultivation:20},choices:[
    {text:'强行封脉',effect:{cultivation:-10,constitution:5,sanity:-10},log:'你封住了裂开的经脉，但修为大幅倒退'},
    {text:'以药石缓和',effect:{wealth:-25,constitution:8},log:'灵药暂时修补了经脉',req:{wealth:25}}]},
  {text:'一位<span class="npc">游方大夫</span>说你的身体已是<span class="danger-text">油尽灯枯</span>之相，但他有一法可救。',
    constReq:{max:15},trigger:{minAge:30},choices:[
    {text:'请大夫施治',effect:{constitution:15,wealth:-40,cultivation:-5},log:'大夫用了极端手法，你的身体暂时恢复了'},
    {text:'问他何法',effect:{comprehension:10,constitution:5,karma:-5},log:'他说要以他人精血续命...你犹豫了'}]},
];

// === COMPREHENSION EVENTS (triggered by comprehension thresholds) ===
const COMPREHENSION_EVENTS = [
  // High comprehension events
  {text:'你在打坐时忽然顿悟——万法归一，<span class="mys">道</span>不在天地之间，而在你心中。',
    compReq:{min:60},trigger:{minAge:20},choices:[
    {text:'深入参悟',effect:{cultivation:25,comprehension:10,sanity:-10},log:'你的修为在顿悟中暴涨！但这份领悟似乎触怒了什么存在...'},
    {text:'记录心得',effect:{comprehension:8,cultivation:10},log:'你将这次顿悟的心得写成札记，或可传世'}]},
  {text:'你看穿了一场<span class="fac">坐忘道</span>精心布置的<span class="mys">幻阵</span>——在别人看来那不过是普通的街市。',
    compReq:{min:50},trigger:{minAge:18},choices:[
    {text:'当众揭穿',effect:{connections:10,qiyun:5,karma:5},log:'你破了坐忘道的幻术，救了不少人'},
    {text:'默默绕过',effect:{comprehension:5,cultivation:5},log:'你看穿了但选择不说——有些真相不该被人知道'},
    {text:'暗中观察幻阵原理',effect:{comprehension:12,cultivation:10,sanity:-5},log:'你从幻阵中学到了坐忘道的术法原理'}]},
  {text:'修炼时你偶然触碰到了<span class="mys">天道法则</span>的边缘——万物运转的底层规律清晰可见。',
    compReq:{min:70},trigger:{minAge:30,cultivation:50},choices:[
    {text:'尝试参悟天道',effect:{cultivation:40,comprehension:15,sanity:-20,constitution:-5},log:'你短暂地触碰了天道！身体承受不住这份力量但收获巨大'},
    {text:'退而求其次',effect:{cultivation:15,comprehension:8},log:'天道太过深奥，你转而参悟其中的皮毛'}]},
  {text:'你在阅读一本古籍时突然发现——<span class="mys">文字之间藏着另一层含义</span>，那是前人用隐语留下的修炼心得。',
    compReq:{min:40},trigger:{minAge:15},choices:[
    {text:'破译隐语',effect:{cultivation:15,comprehension:8},log:'你解开了前人的隐语，获得了宝贵的修炼经验'},
    {text:'抄录下来慢慢研究',effect:{comprehension:5,connections:3},log:'你将隐语抄录了一份，日后再研究'}]},
  // Low comprehension events
  {text:'你遇到了一位<span class="npc">道士</span>，他愿意指点你修行——但他的话你<span class="danger-text">完全听不懂</span>。',
    compReq:{max:20},trigger:{minAge:15},choices:[
    {text:'虚心求教',effect:{comprehension:8,cultivation:5,wealth:-5},log:'你虽然听不太懂，但记下了一些口诀'},
    {text:'老老实实干苦力活',effect:{constitution:5,wealth:10},log:'修道无缘，不如干点实在的'}]},
  {text:'一位<span class="npc">修士</span>在你面前展示了一套<span class="mys">高深功法</span>，你看得一头雾水。',
    compReq:{max:25},trigger:{minAge:18,cultivation:10},choices:[
    {text:'硬背下来',effect:{cultivation:8,comprehension:3},log:'你虽然不理解其中奥妙，但死记硬背也有些效果'},
    {text:'请他用简单话讲',effect:{comprehension:5,connections:5},log:'他笑了笑，用大白话又说了一遍'}]},
];

// === WEALTH EVENTS (triggered by wealth thresholds) ===
const WEALTH_EVENTS = [
  // Rich events
  {text:'你的财富引来了<span class="npc">各方势力</span>的注意——有人请你<span class="itm">资助修建道观</span>。',
    wealthReq:{min:100},trigger:{minAge:20},choices:[
    {text:'慷慨解囊',effect:{wealth:-60,connections:25,karma:20,qiyun:10},log:'道观建成后，你的名字被刻在功德碑上'},
    {text:'投资建商铺',effect:{wealth:30,connections:10},log:'你选择了更实际的投资方式'},
    {text:'捂紧钱袋',effect:{qiyun:-5},log:'财不露白，你深谙此道'}]},
  {text:'<span class="npc">黑市</span>有人出售一件<span class="itm">上古法器</span>，要价极高。',
    wealthReq:{min:80},trigger:{minAge:18},choices:[
    {text:'买下法器',effect:{wealth:-70,cultivation:25,comprehension:10},log:'法器入手的瞬间，你感到了一股远古的力量'},
    {text:'还价',effect:{wealth:-40,cultivation:15},log:'你砍了半价买下，虽然品相差了点'},
    {text:'不买',effect:{},log:'再贵的东西也不值得倾家荡产'}]},
  {text:'你出手阔绰引来了<span class="danger-text">盗匪</span>的觊觎，深夜有人破门而入。',
    wealthReq:{min:60},trigger:{minAge:15},choices:[
    {text:'以财消灾',effect:{wealth:-30,qiyun:-3},log:'你丢出一袋金银，盗匪拿了就跑'},
    {text:'奋起反抗',effect:{cultivation:8,constitution:3,wealth:-10},log:'你打跑了盗匪，但损失了一些财物',combat:40},
    {text:'请镖局保护',effect:{wealth:-15,connections:10},log:'你雇了镖师守夜，从此多了层保障'}]},
  // Poor events
  {text:'你饿了三天，在路边看到有人丢弃的<span class="danger-text">残羹冷炙</span>。',
    wealthReq:{max:-20},trigger:{minAge:10},choices:[
    {text:'捡起来吃',effect:{sanity:-5,constitution:-3},log:'填饱肚子比什么都重要'},
    {text:'忍住饥饿',effect:{constitution:-5,comprehension:3},log:'饥饿让人清醒，你开始思考如何改变现状'},
    {text:'去寺庙讨斋饭',effect:{karma:5,connections:3},log:'僧人给你一碗热粥，你感激涕零'}]},
  {text:'你身无分文，一个<span class="npc">商人</span>提议让你帮他做<span class="danger-text">违法勾当</span>换钱。',
    wealthReq:{max:-10},trigger:{minAge:16},choices:[
    {text:'铤而走险',effect:{wealth:40,karma:-15,qiyun:-10,connections:-5},log:'你赚到了钱，但良心不安'},
    {text:'拒绝后自谋生路',effect:{wealth:10,constitution:3,comprehension:2},log:'你去码头扛包，虽然辛苦但心安'},
    {text:'偷他的钱',effect:{wealth:25,karma:-10,qiyun:-5},log:'你顺手牵羊，他竟然没发现'}]},
  {text:'贫困使你走投无路，<span class="fac">白莲教</span>的人找上门说入教可得<span class="itm">救济</span>。',
    wealthReq:{max:0},trigger:{minAge:14},choices:[
    {text:'加入白莲教',effect:{wealth:20,connections:10,sanity:-5},log:'你在走投无路之下加入了白莲教',factionJoin:'bailian'},
    {text:'宁死不从',effect:{constitution:-3,comprehension:3,karma:5},log:'你宁可饿肚子也不愿入邪教'}]},
];

// === CONNECTIONS EVENTS (triggered by connections thresholds) ===
const CONNECTIONS_EVENTS = [
  // High connections events
  {text:'你在江湖中颇有人脉，有人请你做<span class="npc">各门派之间的调解人</span>。',
    connReq:{min:40},trigger:{minAge:25},choices:[
    {text:'出面调解',effect:{connections:15,qiyun:10,karma:10,wealth:20},log:'在你的斡旋下，两派握手言和'},
    {text:'两不相帮',effect:{connections:-5},log:'你不想卷入门派纷争'}]},
  {text:'你的名声传到了<span class="fac">监天司</span>耳中，他们派人来<span class="npc">招揽你</span>。',
    connReq:{min:30},trigger:{minAge:18},choices:[
    {text:'加入监天司',effect:{connections:15,wealth:15},log:'你凭借人脉直接进入了监天司',factionJoin:'jiantian'},
    {text:'婉拒',effect:{connections:5,comprehension:3},log:'你选择保持自由身'}]},
  {text:'你认识的一位<span class="npc">老友</span>突然登门拜访，说有一桩<span class="itm">天大的机缘</span>要与你共享。',
    connReq:{min:50},trigger:{minAge:20},choices:[
    {text:'一同前往',effect:{cultivation:20,connections:10,wealth:15,comprehension:5},log:'老友没有骗你，你们在秘境中各有所得'},
    {text:'怀疑有诈',effect:{connections:-10,sanity:5},log:'老友失望而去，你或许错过了什么'}]},
  // Low connections events
  {text:'你独来独往惯了，在<span class="loc">市集</span>上被人刁难却无人帮忙。',
    connReq:{max:0},trigger:{minAge:15},choices:[
    {text:'独自应对',effect:{cultivation:5,constitution:3,sanity:-3},log:'你一个人扛下了所有'},
    {text:'忍气吞声',effect:{sanity:-5,comprehension:3},log:'你学会了一个人忍受'}]},
  {text:'你生了一场大病，却没有任何人来<span class="danger-text">探望</span>。',
    connReq:{max:-10},trigger:{minAge:20},choices:[
    {text:'咬牙自愈',effect:{constitution:-5,comprehension:5,cultivation:3},log:'独行的代价，你比谁都清楚'},
    {text:'去药铺抓药',effect:{wealth:-10,constitution:5},log:'银子还是能买到药的'}]},
  {text:'你在修炼遇到瓶颈时无人可请教——<span class="danger-text">孤身一人的代价</span>。',
    connReq:{max:5},trigger:{minAge:18,cultivation:15},choices:[
    {text:'独自摸索',effect:{comprehension:8,cultivation:5,sanity:-5},log:'没有人指点，你只能靠自己'},
    {text:'去书店买功法',effect:{wealth:-15,cultivation:8,comprehension:3},log:'花钱买经验，也算一条路',req:{wealth:15}}]},
];

// === CULTIVATION BREAKTHROUGH EVENTS (triggered during realm transitions) ===
const BREAKTHROUGH_EVENTS = [
  // 锻体→练气
  {text:'你在修炼中感到体内有一股<span class="mys">气</span>隐隐浮现——你即将突破<span class="itm">练气</span>之境！',
    cultReq:{min:8,max:12},trigger:{minAge:12},choices:[
    {text:'全力冲关',effect:{cultivation:5,constitution:-3,sanity:-5},log:'你突破了！练气之境，能感知天地灵气了！'},
    {text:'稳固根基后再突破',effect:{cultivation:2,constitution:3,comprehension:3},log:'你选择先打好根基，突破的机会还会有'}]},
  // 练气→筑基
  {text:'你的丹田内隐约有<span class="mys">灵气漩涡</span>形成——<span class="itm">筑基</span>的契机到了！',
    cultReq:{min:25,max:35},trigger:{minAge:16},choices:[
    {text:'闭关突破',effect:{cultivation:8,sanity:-10,constitution:-5},log:'筑基成功！你从此迈入了真正的修仙之路！'},
    {text:'寻找筑基丹辅助',effect:{cultivation:5,wealth:-25,constitution:3},log:'筑基丹入腹，修为精进',req:{wealth:25}},
    {text:'继续积累',effect:{cultivation:3,comprehension:5},log:'筑基之事急不来，你继续积累修为'}]},
  // 筑基→金丹
  {text:'你感到丹田中灵气凝聚，一颗<span class="mys">金色光球</span>若隐若现——<span class="itm">金丹</span>即将凝结！',
    cultReq:{min:55,max:65},trigger:{minAge:20},choices:[
    {text:'全力凝丹',effect:{cultivation:10,constitution:-8,sanity:-15,comprehension:5},log:'金丹凝结！你正式踏入了高手行列！'},
    {text:'借助外力',effect:{cultivation:8,wealth:-40,connections:-5},log:'你花重金请人护法，金丹顺利凝结',req:{wealth:40}},
    {text:'放弃此次机会',effect:{cultivation:3,constitution:5,sanity:5},log:'金丹不是一蹴而就的，你选择等待下一次'}]},
  // 金丹→元婴
  {text:'金丹裂开——这不是走火入魔，而是<span class="mys">元婴</span>即将破壳而出！',
    cultReq:{min:95,max:105},trigger:{minAge:30},choices:[
    {text:'助元婴破壳',effect:{cultivation:12,constitution:-10,sanity:-15,comprehension:10},log:'元婴出窍！你已是修仙界的顶尖存在！'},
    {text:'封住裂痕',effect:{cultivation:5,constitution:5},log:'你暂时封住了金丹裂痕，元婴之事来日方长'}]},
  // 元婴→化神
  {text:'你的元婴在体内不断膨胀，已与天地之力产生<span class="mys">共鸣</span>——<span class="itm">化神</span>之境触手可及。',
    cultReq:{min:145,max:155},trigger:{minAge:50},choices:[
    {text:'顺势化神',effect:{cultivation:15,constitution:-10,sanity:-20,comprehension:15},log:'化神成功！你已超脱凡俗，举手投足间自带天威！'},
    {text:'压制冲动',effect:{cultivation:5,comprehension:8,constitution:5},log:'化神太过凶险，你选择再等等'}]},
  // 化神→大乘
  {text:'天地间的<span class="mys">大道法则</span>向你敞开了一角——<span class="itm">大乘</span>之门就在眼前！',
    cultReq:{min:195,max:205},trigger:{minAge:80},choices:[
    {text:'踏入大乘',effect:{cultivation:20,constitution:-15,sanity:-25,comprehension:20},log:'大乘之境！你的存在已可影响天地运转！'},
    {text:'止步于此',effect:{cultivation:8,comprehension:10,constitution:5},log:'大乘之路太过凶险，你选择在化神之巅驻足'}]},
];

// === STAT COMBINATION EVENTS (triggered by specific stat combinations) ===
const STAT_COMBO_EVENTS = [
  // High karma + high comprehension = 道心通明
  {text:'你的因果清明、悟性通达，在冥想中触碰到了<span class="mys">道心</span>——那是修士梦寐以求的至纯之心。',
    comboReq:{karma_min:40,comp_min:50},trigger:{minAge:25},choices:[
    {text:'凝聚道心',effect:{cultivation:30,comprehension:15,sanity:10,qiyun:15},log:'道心通明！你的修行将事半功倍！'},
    {text:'不敢轻举妄动',effect:{comprehension:8},log:'道心可遇不可求，你怕贪心反失去'}]},
  // Low karma + high cultivation = 心魔降临
  {text:'你修为高深却因果深重，<span class="danger-text">心魔</span>在某个夜晚降临——它有着你的脸，却笑得阴森恐怖。',
    comboReq:{karma_max:-30,cult_min:60},trigger:{minAge:20},choices:[
    {text:'斩杀心魔',effect:{cultivation:15,karma:10,sanity:-15,constitution:-5},log:'你与心魔大战三天三夜，最终将它斩灭',combat:70},
    {text:'与心魔对话',effect:{comprehension:15,cultivation:10,karma:-5,sanity:-10},log:'心魔说出了你心底最不愿面对的真相'},
    {text:'逃避',effect:{sanity:-20,qiyun:-10},log:'心魔会再来的...你知道'}]},
  // High qiyun + high wealth = 鸿运降财
  {text:'你气运旺盛又家底丰厚，一位<span class="npc">仙人</span>主动找上门来——他想借用你的<span class="itm">气运</span>完成一场交易。',
    comboReq:{qiyun_min:30,wealth_min:50},trigger:{minAge:20},choices:[
    {text:'同意交易',effect:{cultivation:25,wealth:40,qiyun:-15},log:'仙人留下一份传承和大量钱财作为酬劳'},
    {text:'拒绝',effect:{qiyun:5},log:'仙人微微一笑消失了'}]},
  // Low sanity + high cultivation (xinsu) = 两界融合
  {text:'你的神志在两个世界间摇摆，修为却让你成了连接两界的<span class="mys">锚点</span>——两个世界开始在你身上重叠。',
    comboReq:{sanity_max:30,cult_min:80},trigger:{minAge:20},check:'xinsu',choices:[
    {text:'承受两界之力',effect:{cultivation:40,sanity:-25,constitution:-10,comprehension:20},log:'你同时存在于两个世界！这种力量前所未有！'},
    {text:'切断连接',effect:{cultivation:-15,sanity:15,constitution:5},log:'你强行切断了与另一个世界的联系'}]},
  // High constitution + low cultivation = 武道极致
  {text:'你的体魄无比强健但修为有限，一位<span class="npc">武痴</span>找到你：他研究出一种<span class="mys">以武入道</span>之法。',
    comboReq:{const_min:70,cult_max:30},trigger:{minAge:18},choices:[
    {text:'修习以武入道',effect:{cultivation:20,constitution:5,comprehension:10},log:'你以纯粹的体魄触碰到了修仙的门槛！'},
    {text:'继续苦练体魄',effect:{constitution:8,cultivation:3},log:'你不信那些玄乎的东西，拳头才是真理'}]},
  // High connections + high karma = 侠义之名
  {text:'你行侠仗义、广结善缘，<span class="npc">江湖人</span>尊称你为"<span class="itm">义士</span>"——各门派争相拉拢。',
    comboReq:{conn_min:40,karma_min:30},trigger:{minAge:22},choices:[
    {text:'趁势而起',effect:{connections:20,wealth:20,qiyun:10,cultivation:5},log:'你的名声为你带来了实实在在的好处'},
    {text:'低调行事',effect:{karma:10,comprehension:5},log:'名声是双刃剑，你不想太高调'}]},
  // Very low constitution + high comprehension = 以神御体
  {text:'你的体魄羸弱不堪，但悟性极高——你领悟了一种<span class="mys">以神魂驱动肉体</span>的法门。',
    comboReq:{const_max:25,comp_min:50},trigger:{minAge:20,cultivation:20},choices:[
    {text:'修习此法',effect:{constitution:10,comprehension:8,sanity:-10,cultivation:10},log:'你以精神力弥补了肉体的不足！'},
    {text:'这太危险了',effect:{comprehension:5},log:'用精神力驱动身体终究不是长久之计'}]},
  // High karma + low qiyun = 功德护体
  {text:'你因果清明但气运不济——忽有一日，过去积累的<span class="mys">功德</span>化为金光护住了你，挡下了一场飞来横祸。',
    comboReq:{karma_min:40,qiyun_max:-20},trigger:{minAge:18},choices:[
    {text:'感悟因果之道',effect:{comprehension:10,qiyun:15,karma:5,cultivation:10},log:'善有善报，你的功德在关键时刻救了你一命'},
    {text:'继续行善',effect:{karma:10,connections:5},log:'你更加坚定了行善积德的信念'}]},
  // Low karma + low qiyun = 天地不容
  {text:'因果深重、气运极衰——你走到哪里，<span class="danger-text">天灾人祸</span>就跟到哪里。',
    comboReq:{karma_max:-30,qiyun_max:-30},trigger:{minAge:15},choices:[
    {text:'诵经忏悔',effect:{karma:15,qiyun:10,sanity:-5,wealth:-10},log:'你开始反思自己的所作所为'},
    {text:'破罐破摔',effect:{karma:-10,cultivation:10,qiyun:-5},log:'既然天地不容我，那我便逆天而行'},
    {text:'远离人群',effect:{connections:-15,sanity:-5,constitution:-3},log:'你怕连累他人，独自逃入深山'}]},
];
