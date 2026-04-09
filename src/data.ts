// @ts-nocheck
// === GAME DATA ===
export const TALENTS = {
  special: [
    {id:'xinsu',name:'心素',desc:'先天体质，体内有先天一炁。核心能力为"炼假成真"——可将主观信念、想象之物在一定范围内变为现实。能感知两个平行世界的存在并在两界间穿梭沟通。对精神污染有天然抗性，不易被诡异直接抹除。但身体各部位皆是炼制法器的绝佳材料，被各方觊觎。心素本身不自带心蟠，需通过特定仪式才能发挥最大潜力。代表：李火旺。',effect:{sanity:30,cultivation:5,comprehension:10},type:'special',rarity:'legendary',hint:'神志+30 修为+5 悟性+10 穿梭两界 身体是顶级药引 易陷入疯狂'},
    {id:'xin_zhuo',name:'心浊',desc:'先天体质，与心素同属先天特殊体质但方向不同。核心能力为"业障空间藏匿"——可将人、物、记忆藏进独立的业障空间，但会逐渐遗忘自己藏了什么，甚至遗忘年龄、性别等自我认知。内心业障会向外扩散污染环境，严重时可击伤司命化身。两个心浊相遇可能引发大范围存在抹消。头发可强化法器。代表：闻人诡。',effect:{cultivation:25,sanity:-15,qiyun:-10,constitution:10},type:'special',rarity:'legendary',hint:'修为+25 体魄+10 气运-10 空间扰动 遗忘自我 法器材料'},
    {id:'bai_hua',name:'白化病',desc:'天生白发红瞳，外貌异于常人。白莲教族人中偶有此症，外人多视为不祥，但白莲教内视为圣女之相。身体同样是珍贵的材料，被各方觊觎。代表：白灵淼。',effect:{connections:-10,sanity:-5,qiyun:10,karma:5},type:'special',rarity:'epic',hint:'人脉-10 神志-5 气运+10 因果+5 白莲教好感 外貌引人注目'},
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
    {id:'shang_jia',name:'商贾世家',desc:'祖上三代经商，耳濡目染精于算计',effect:{wealth:25,connections:8,comprehension:5},type:'good',rarity:'uncommon',hint:'金银+25 人脉+8 悟性+5 经商获利更多'},
    {id:'gu_wu',name:'古武传承',desc:'家传古武功法，自幼习练',effect:{cultivation:8,constitution:12,comprehension:5},type:'good',rarity:'rare',hint:'修为+8 体魄+12 悟性+5 战斗时有额外优势'},
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
    {id:'tong_ling',name:'通灵',desc:'天生阴阳眼，能看到常人看不到的东西',effect:{sanity:-15,comprehension:8,cultivation:3},type:'bad',rarity:'common',hint:'神志-15 悟性+8 修为+3 能看到鬼魂和灵体 容易被邪祟盯上'},
    {id:'gui_ying',name:'鬼婴',desc:'出生时便有鬼魂附体，阴气极重',effect:{sanity:-20,cultivation:10,constitution:-10},type:'bad',rarity:'cursed',hint:'神志-20 体魄-10 修为+10 阴气吸引邪祟'},
    {id:'fan_gu',name:'反骨',desc:'天生反骨，不服管束',effect:{connections:-15,karma:-10,comprehension:5},type:'bad',rarity:'common',hint:'人脉-15 因果-10 悟性+5 难以融入任何势力'},
    {id:'duan_ming',name:'短命',desc:'先天命格短促，阳寿不永',effect:{constitution:-15,qiyun:-10},type:'bad',rarity:'cursed',hint:'体魄-15 气运-10 寿命大幅缩短'},
    {id:'yin_ti',name:'阴体',desc:'生于阴时阴日，天生招阴',effect:{sanity:-10,constitution:-5,cultivation:5},type:'bad',rarity:'common',hint:'神志-10 体魄-5 修为+5 容易撞邪但对阴属功法亲和'},
    {id:'chi_she',name:'痴傻',desc:'天生痴傻，说话做事慢半拍',effect:{comprehension:-15,connections:-10},type:'bad',rarity:'common',hint:'悟性-15 人脉-10 但心无杂念，修道反而少魔障'},
    {id:'liu_lang',name:'流浪儿',desc:'从记事起就在流浪，居无定所',effect:{wealth:-25,constitution:-5,qiyun:-5,comprehension:3},type:'bad',rarity:'common',hint:'金银-25 体魄-5 气运-5 但见多识广，悟性偶有提升'},
  ]
};

export const LOCATIONS = [
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
  {id:'an_ci',name:'安慈庵',desc:'信奉腐烂司命的门派遗址，静心师太（陈红袖）曾在此驱邪济世，已衰落',danger:25,wealth:10},
  {id:'zheng_de_si',name:'正德寺',desc:'佛门圣地，但传闻做着什么勾当',danger:45,wealth:35},
  {id:'kun_lun',name:'昆仑',desc:'传说中的万山之祖，上古秘境所在',danger:60,wealth:40},
  {id:'baiyu_jing',name:'白玉京',desc:'倒悬于天空的神之城，天道汇聚之地',danger:80,wealth:0},
  {id:'tian_chen',name:'天陈',desc:'神秘古国，左丘咏的领地',danger:70,wealth:50},
  {id:'xu_kong',name:'虚空',desc:'两个世界之间的夹缝，心素可见',danger:90,wealth:0},
  {id:'bei_jiang',name:'北疆',desc:'苦寒之地，异族出没',danger:55,wealth:25},
  {id:'hu_shan',name:'狐山',desc:'狐妖聚居之地，迷惑心智',danger:50,wealth:20},
  {id:'long_min',name:'龙眠泽',desc:'龙脉汇聚之所，灵气充沛',danger:40,wealth:30},
];

export const FACTIONS = {
  none: {name:'无', bonus:{}, desc:'', requirement:null},
  // ===== 原著正统势力 =====
  zuowang: {name:'坐忘道', bonus:{cultivation:5,sanity:-5,comprehension:2}, desc:'信奉阴阳斗姥的邪修组织，以欺骗获取力量。成员以麻将牌为代号，面容化为对应牌面。底层为万/饼/条，中层为四喜风牌（东南西北），高层为三元箭牌（红中、发财、白板），最高首领为骰子。可通过罔天宝诰召唤斗姥化身。监天司正是为对抗坐忘道而设立。',
    requirement:{cultivation:10}, requireDesc:'需修为境界达锻体以上',
    ranks:['万子','饼子','条子','东风','南风','西风','北风','红中','白板','发财','骰子'],
    rankReqs:[0,10,20,35,50,65,80,100,150,200,300],
    rankAgeReqs:[0,0,0,0,0,0,0,0,0,0,0]},
  jiantian: {name:'监天司', bonus:{wealth:10,connections:5,qiyun:3}, desc:'列国为应对天灾而设立的组织，创建者为上古人皇颛顼。地位超然，在超自然事务上有无限权限。大梁监天司由司天监统领，五位司天少监协助管理，下辖监丞、记相等。等级以十天干划分，自癸至甲共十等，最高为甲等司天监（大梁为玄牝）。内部流通货币为阳寿丹，设有内库按等级逐步开放。虽服务于皇室但不参与皇室内部斗争。',
    requirement:{connections:10}, requireDesc:'需人脉10以上',
    ranks:['癸卒','壬伍','辛什','庚旗','己监丞','戊记相','丁将','丙将','司天少监','司天监'],
    rankReqs:[0,10,20,35,50,70,90,120,170,250],
    rankAgeReqs:[0,0,16,18,22,26,30,35,40,50]},
  aojing: {name:'袄景教', bonus:{cultivation:8,connections:3,qiyun:-2}, desc:'内部供奉巴虺与牯神，同一教派内的不同信仰侧重。修炼途径为苍蜣登阶——以极端自残和痛苦献祭换取巴虺赐力。等级按劫数划分，底层以器官+数字为号（如耳玖、手叁），三劫以上可获正式名号（眼见喜、身本忧等）。传承法器为大千录。',
    requirement:{cultivation:20}, requireDesc:'需修为境界达练气以上',
    ranks:['一劫','二劫','三劫','四劫','五劫'],
    rankReqs:[0,20,50,100,200],
    rankAgeReqs:[0,0,18,28,40]},
  bailian: {name:'白莲教', bonus:{connections:8,sanity:-3,qiyun:-3}, desc:'信奉无生老母的秘密结社，以白氏和连氏为核心家族。教义核心："无生老母，真空家乡。"圣女可与无生老母直接沟通，白灵淼为圣女，亦是无生老母的心蟠。二神辅佐圣女，掌八苦十情，主持仪式。',
    requirement:{wealth_max:50}, requireDesc:'金银不超过50方可入教',
    ranks:['信众','坛主','二神','圣女'],
    rankReqs:[0,15,50,120],
    rankAgeReqs:[0,0,18,30]},
  qingfeng: {name:'清风观', bonus:{cultivation:6,sanity:-6,karma:-8}, desc:'丹阳子一脉。丹阳子本名羊蛋子，不识字的邪修，以活人炼丹。外门弟子多为天残地缺，负责打杂、喂养药引。内门弟子为丹阳子亲传，参与炼药、活人祭。丹阳子被坐忘道以伪经欺骗，后短暂成为司命。',
    requirement:{cultivation:5}, requireDesc:'需修为境界达锻体',
    ranks:['外门弟子','内门弟子','观主'],
    rankReqs:[0,25,80],
    rankAgeReqs:[0,12,999]},
  luo_jiao: {name:'罗教', bonus:{cultivation:4,comprehension:5,karma:3}, desc:'蛇骨山韩符一脉。以七星铜钱剑为至宝，修行平和内敛，精通符箓、铜钱剑术、傀儡术与土煞之法。掌教韩符识心素、擅镇邪。创始人罗祖以一百八十四枚铜钱编成七星铜钱剑。',
    requirement:{comprehension:20}, requireDesc:'需悟性20以上',
    ranks:['弟子','执事','长老','掌教'],
    rankReqs:[0,20,50,100],
    rankAgeReqs:[0,0,20,30]},
  bingjia: {name:'兵家', bonus:{cultivation:7,constitution:5,karma:-5,sanity:-3}, desc:'大梁军武煞气体系，无固定职级，按煞气与军阵划分。修炼者以自身鲜血涂抹兵书获得力量：煞气冲击、扩大体型、铁骨不灭则肉身不死。顶级大将可布龙飞阵、风扬阵等军阵。代表人物：彭龙腾。',
    requirement:{constitution:35,cultivation:15}, requireDesc:'需体魄35以上且修为锻体以上',
    ranks:['兵卒','伍长','偏将','大将'],
    rankReqs:[0,25,60,150],
    rankAgeReqs:[0,0,20,35]},
  fomen: {name:'正德寺', bonus:{cultivation:5,karma:5,sanity:3,connections:3}, desc:'大梁佛门正统，等级依次为沙弥、比丘、执事、住持、方丈。禅度方丈为正德寺最高，掌血肉天道。表面慈悲为怀，实为五智如来（血肉天道司命）的影子。晋升依据禅定境界、度化功绩、镇压邪祟。',
    requirement:{karma_min:-10}, requireDesc:'需因果不低于-10（恶人不可入佛门）',
    ranks:['沙弥','比丘','执事','住持','方丈'],
    rankReqs:[0,15,35,70,120],
    rankAgeReqs:[0,0,16,25,35]},
  guoshi: {name:'国师体系', bonus:{cultivation:6,connections:8,wealth:5,qiyun:5}, desc:'大梁术师朝堂体系。方士观星、禳灾、祈福；皇室供奉受朝廷供养，处理国级邪祟；国师为大梁术师顶点，可引雷、掌国运、沟通龙脉。代表人物：国师皇甫天罡。晋升依据术法修为、龙脉亲和、皇室信任。',
    requirement:{cultivation:30,connections:20}, requireDesc:'需修为筑基以上且人脉20以上',
    ranks:['方士','供奉','国师'],
    rankReqs:[0,60,200],
    rankAgeReqs:[0,25,40]},
  chaoting: {name:'世俗朝廷', bonus:{wealth:12,connections:10,qiyun:2}, desc:'大梁姬氏皇权体系。自平民至皇帝，历代帝王尸身拼接成龙脉。当朝皇帝姬诵为大梁龙脉掌控者。',
    requirement:{connections:15,wealth:30}, requireDesc:'需人脉15以上且金银30以上',
    ranks:['小吏','县令','刺史','重臣'],
    rankReqs:[0,20,60,150],
    rankAgeReqs:[0,18,28,40]},
  yueliang: {name:'月亮门', bonus:{cultivation:8,comprehension:5,sanity:-8,connections:-3}, desc:'信奉月亮的神秘组织，来源不明，疑似外来世界入侵者。修炼月相之术，可偷取他人记忆、情感、五感。行事极端隐秘，凡是月亮门出现过的地方，当地人都会遗忘一些东西。首领据说能让整座城的人集体失忆。',
    requirement:{cultivation:25,comprehension:20}, requireDesc:'需修为筑基以上且悟性20以上',
    ranks:['月影','月使','月将','月主'],
    rankReqs:[0,30,70,160],
    rankAgeReqs:[0,0,20,35]},
  // ===== 游戏原创势力（非原著正统） =====
  biaoju: {name:'镖局', bonus:{wealth:8,connections:5,constitution:2}, desc:'【游戏原创】刀口舔血，押镖为生。江湖人的正道营生，凭武艺和信誉立足。',
    requirement:{constitution:30}, requireDesc:'需体魄30以上',
    ranks:['趟子手','镖师','镖头','总镖头'],
    rankReqs:[0,15,40,80],
    rankAgeReqs:[0,0,20,30]},
  fa_jiao: {name:'法教', bonus:{cultivation:10,sanity:-8,karma:-5,qiyun:-3}, desc:'引入福生天外来司命（于儿神等）的危险教派，协助外来司命入侵大傩世界。以活人祭祀和巫祝闻名，曾发动法教之乱侵占四齐。法教巫祝擅长遁地术、飞蝗石、抽骨之术，巫婆擅长黑玉匕首和影遁术。后被大梁监天司、白莲教等联合剿灭。',
    requirement:{cultivation:30,karma_max:10}, requireDesc:'需修为筑基以上且因果不高于10',
    ranks:['祭品','小巫','大巫','十二大巫','大祭司'],
    rankReqs:[0,35,60,120,250],
    rankAgeReqs:[0,0,20,30,40]},
  nanjiang: {name:'南疆巫族', bonus:{cultivation:6,constitution:3,sanity:-4,karma:-3}, desc:'【游戏原创】南疆蛊师一脉，以蛊虫驱使和毒术闻名。南疆地处瘴气之中，巫族世代与毒虫为伴，修行路子与中原截然不同。',
    requirement:{constitution:25}, requireDesc:'需体魄25以上',
    ranks:['蛊童','蛊师','大蛊师','巫王'],
    rankReqs:[0,20,55,120],
    rankAgeReqs:[0,0,18,30]},
};

export const ITEMS = [
  // ===== 普通 (Common) =====
  {id:'fu_lu',name:'镇邪符箓',desc:'可抵御邪祟一次',rarity:'common',effect:{sanity:15}},
  {id:'dan_yao',name:'筑基丹',desc:'提升修为',rarity:'common',effect:{cultivation:20}},
  {id:'gui_mian',name:'鬼面',desc:'戴上可融入鬼市',rarity:'common',effect:{connections:10,sanity:-5}},
  {id:'shan_gui_hua_qian',name:'山鬼花钱',desc:'红绳穿铜钱，随身佩戴可辟邪挡小邪祟',rarity:'common',effect:{sanity:5,qiyun:3}},
  {id:'yang_shou_dan',name:'阳寿丹',desc:'圆鼓带金寿字，服一粒增一年阳寿。触五行即散，修士通用货币',rarity:'common',effect:{constitution:8}},
  {id:'run_xue_dan',name:'润血丹',desc:'快速止血治外伤的丹药',rarity:'common',effect:{constitution:10}},
  {id:'bi_gu_dan',name:'辟谷丹',desc:'服用后可代饭数日，适合赶路',rarity:'common',effect:{constitution:5,cultivation:3}},
  {id:'da_li_wan',name:'大力丸',desc:'增寿加蛮力，短期战力暴增',rarity:'common',effect:{constitution:12,cultivation:5}},
  {id:'ni_ji_fu',name:'匿迹符箓',desc:'减生气避邪祟，隐匿行踪',rarity:'common',effect:{sanity:8,qiyun:3}},
  {id:'wu_zang_fu',name:'五脏定身符箓',desc:'钻入体内裹五脏，可施展定身术',rarity:'common',effect:{cultivation:10,constitution:5}},
  // --- 教派入职道具 (普通) ---
  {id:'luo_fulu_bao',name:'罗教符箓包',desc:'入教即发，内含匿迹符、五脏定身符、遁地符等基础符箓',rarity:'common',effect:{cultivation:5,sanity:5}},
  {id:'huo_yanyu_la',name:'火蜒蚰蜡封简',desc:'入门弟子人手一份，可召唤蜡火蜒蚰疗伤御敌',rarity:'common',effect:{cultivation:8,constitution:5}},
  {id:'jts_fa_jian',name:'监天司制式法剑',desc:'基层差役标配，剑身篆刻监天司篆文，用于斩除邪祟',rarity:'common',effect:{cultivation:10,constitution:3}},
  {id:'yi_rong_mian',name:'易容面皮',desc:'坐忘道新手基础道具，用于伪装身份骗取信任',rarity:'common',effect:{connections:8,sanity:-3}},
  {id:'bl_hushen_fu',name:'白莲纹布护身符',desc:'教众人手一枚，微弱护持心神、抵御低级邪祟',rarity:'common',effect:{sanity:8,karma:3}},
  {id:'zds_jie_die',name:'正德寺戒牒',desc:'入门僧人身份凭证，可出入寺内基础区域',rarity:'common',effect:{karma:5,sanity:3}},
  {id:'yin_huo_fu',name:'引火护鼎符',desc:'清风观弟子炼丹基础符箓，用于引动丹火保护丹炉',rarity:'common',effect:{cultivation:8,comprehension:3}},
  {id:'shi_xie_gu_nang',name:'低阶噬邪蛊种囊',desc:'巫族新人入门蛊物，可吞噬低级邪祟阴气',rarity:'common',effect:{cultivation:5,constitution:5}},
  {id:'xian_ji_shi_pai',name:'献祭石牌',desc:'记载基础献祭仪式与祭品规格，沟通于儿神的入门信物',rarity:'common',effect:{cultivation:8,sanity:-5}},

  // ===== 精良 (Uncommon) =====
  // --- 教派入职道具 (精良) ---
  {id:'jts_tie_pai',name:'监天司铁牌腰牌',desc:'正式编制身份凭证，可调动地方衙役、豁免俗律',rarity:'uncommon',effect:{connections:15,qiyun:5}},
  {id:'ben_ming_pai',name:'本命麻将牌',desc:'入道即授，万饼条风三元之一，面容会逐渐贴合牌面',rarity:'uncommon',effect:{cultivation:10,connections:8,sanity:-8}},
  {id:'cq_deng_jie',name:'苍蜣登阶誓约竹片',desc:'记录登阶禁忌与痛苦献祭规则，代表成为袄景教真正门徒',rarity:'uncommon',effect:{cultivation:12,constitution:-5,sanity:-8}},
  {id:'wusheng_bao_gao',name:'无生宝诰',desc:'记载真空家乡、无生老母经文，可引动慈悲气息',rarity:'uncommon',effect:{karma:10,sanity:8,cultivation:5}},
  {id:'xuerou_nianzhu',name:'血肉念珠',desc:'特殊材质制成，可感知周遭血肉气息，辅助修行血肉天道',rarity:'uncommon',effect:{cultivation:12,comprehension:8,sanity:-5}},
  {id:'fan_cao_dan_fang',name:'凡草养炁丹方抄本',desc:'记录低级丹药炼制之法，正式弟子方可修习',rarity:'uncommon',effect:{comprehension:12,cultivation:8}},
  {id:'kong_gu_di',name:'控蛊骨笛',desc:'异兽骨骼制成，吹奏特定音律指挥蛊虫',rarity:'uncommon',effect:{cultivation:12,constitution:5,sanity:-5}},
  {id:'hei_an_zhou_jian',name:'黑暗咒简',desc:'引动黑暗气息沟通于儿神神力，法教核心弟子才能持有',rarity:'uncommon',effect:{cultivation:15,sanity:-10,karma:-5}},
  {id:'hun_po_shi',name:'魂魄石',desc:'封印魂魄之物',rarity:'uncommon',effect:{sanity:20}},
  {id:'xue_yu',name:'血玉',desc:'以血为引的邪物',rarity:'uncommon',effect:{cultivation:15,sanity:-15}},
  {id:'bai_yu_pei',name:'白玉佩',desc:'温润通灵，安神定魄',rarity:'uncommon',effect:{sanity:25}},
  {id:'po_tong_jing',name:'破铜镜',desc:'河底捞出的古旧铜镜，镜面模糊，触手冰凉',rarity:'uncommon',effect:{comprehension:5,sanity:3}},
  {id:'yu_jian',name:'古玉简',desc:'老乞丐赠予的玉简，刻有模糊的古文',rarity:'uncommon',effect:{cultivation:10,comprehension:8}},
  {id:'hei_qi_guan_cai',name:'黑漆棺材',desc:'小臂大小，开盖三息可驱散目标身上煞气',rarity:'uncommon',effect:{sanity:15,cultivation:8}},
  {id:'ba_gua_jing',name:'八卦镜',desc:'陈瞎子所用，射光如剑可破邪照邪祟',rarity:'uncommon',effect:{cultivation:15,comprehension:10}},
  {id:'sha_qi_bao_jian',name:'煞气宝剑',desc:'削铁如泥，自带煞气可破邪祟伤魂',rarity:'uncommon',effect:{cultivation:18,constitution:5}},
  {id:'hei_yu_bi_shou',name:'黑玉匕首',desc:'锋利异常，可破开乩童肉身',rarity:'uncommon',effect:{cultivation:12,constitution:8}},
  {id:'gu_shou_chuan',name:'蛊手串',desc:'拓跋丹青所制，内含蛊虫可防御反制敌人',rarity:'uncommon',effect:{constitution:12,cultivation:8,sanity:-5}},
  {id:'chang_ming_suo',name:'长命锁',desc:'拓跋丹青所制防御法器，保平安',rarity:'uncommon',effect:{constitution:10,sanity:5}},
  {id:'jian_ya_hu_lu',name:'尖牙葫芦',desc:'李志所用，专门储存阳寿丹防五行消散',rarity:'uncommon',effect:{constitution:8,wealth:10}},
  {id:'tong_qian_mian_zhao',name:'铜钱面罩',desc:'道光通宝铜钱串成，隐藏心素气息与身份，降低存在感',rarity:'uncommon',effect:{sanity:15,cultivation:5}},
  {id:'bao_jiang_he_tao',name:'包浆核桃',desc:'拓跋丹青的禁制法器，可困敌封邪祟',rarity:'uncommon',effect:{cultivation:15,sanity:10}},

  // ===== 稀有 (Rare) =====
  {id:'jing_shu',name:'太清真经',desc:'记载上古功法',rarity:'rare',effect:{cultivation:30,sanity:-10}},
  {id:'tian_shu',name:'天书残页',desc:'记载天机的残卷',rarity:'rare',effect:{cultivation:25}},
  {id:'yin_yang_jing',name:'阴阳镜',desc:'可映照气运业力',rarity:'rare',effect:{comprehension:15,qiyun:10}},
  {id:'po_jie_zhu',name:'破戒珠',desc:'佛门叛逆之物，蕴含极端力量',rarity:'rare',effect:{cultivation:25,qiyun:-20}},
  {id:'tian_ji_pan',name:'天机盘',desc:'可推演天命走向',rarity:'rare',effect:{comprehension:20}},
  {id:'long_hu_dan',name:'龙虎丹',desc:'淬炼体魄的灵丹',rarity:'rare',effect:{constitution:25,cultivation:10}},
  {id:'nuo_mian',name:'傩面',desc:'大傩仪式所用面具，戴上后人格会变',rarity:'rare',effect:{cultivation:30,sanity:-20,qiyun:-15}},
  {id:'dan_yang_jian',name:'丹阳遗剑',desc:'丹阳子遗物，剑身有裂痕',rarity:'rare',effect:{cultivation:20,comprehension:10}},
  {id:'qi_xing_tong_qian_jian',name:'七星铜钱剑',desc:'罗教至宝，一百八十四枚古钱',rarity:'rare',effect:{cultivation:30,comprehension:15}},
  {id:'zhao_gu_zhi_yin',name:'招魂引',desc:'可召唤亡魂，与鬼脉相合',rarity:'rare',effect:{cultivation:20,sanity:-15,connections:10}},
  {id:'tian_gou_yan_lei',name:'天狗眼泪',desc:'天狗食日时掉落，可短暂看清天道',rarity:'rare',effect:{cultivation:25,comprehension:25}},
  {id:'she_dao',name:'赊刀',desc:'监天司赊刀人的佩刀，可斩邪祟',rarity:'rare',effect:{cultivation:20,sanity:10,connections:5}},
  {id:'luo_pan',name:'罗盘',desc:'罗教传人的寻龙点穴之器',rarity:'rare',effect:{comprehension:20,cultivation:15,qiyun:5}},
  {id:'jin_gang_zhu',name:'金刚珠',desc:'佛门至宝，蕴含金刚不坏之力',rarity:'rare',effect:{cultivation:20,constitution:15,sanity:10}},
  {id:'gu_chong_ping',name:'蛊虫瓶',desc:'南疆蛊师炼制的蛊虫容器，内藏万蛊之王',rarity:'rare',effect:{cultivation:25,constitution:10,sanity:-15}},
  {id:'zuo_wang_lun',name:'坐忘论',desc:'坐忘道的核心功法秘籍',rarity:'rare',effect:{cultivation:30,comprehension:15,sanity:-20}},
  {id:'ci_bei_zhu',name:'慈悲珠',desc:'无生老母慈悲天道的结晶',rarity:'rare',effect:{karma:20,sanity:15,cultivation:15}},
  {id:'tong_ling',name:'铜铃',desc:'李火旺的铜铃，轻摇时能安定心神',rarity:'rare',effect:{sanity:30,cultivation:10}},
  {id:'dao_ling',name:'道铃',desc:'摇晃发声致头晕，可召唤游老爷。沟通需口含泥土，指使一次耗三月阳寿',rarity:'rare',effect:{cultivation:20,sanity:-10,connections:8}},
  {id:'zi_sui_jian',name:'紫穗剑',desc:'兵家法器，黑柄紫绫煞气极重，杀意外放可冲击心神',rarity:'rare',effect:{cultivation:25,constitution:10,sanity:-10}},
  {id:'ren_she_ru_yi',name:'人舌如意',desc:'冯二牛赠，心素舌头炼制。挥动可让目标陷入迷惘',rarity:'rare',effect:{cultivation:20,comprehension:12,sanity:-8}},
  {id:'liu_zhu_fa_yan',name:'流珠法眼',desc:'拳头大法器，埋入印堂可增强视觉、破邪震祟',rarity:'rare',effect:{comprehension:20,cultivation:15,sanity:-10}},
  {id:'xuan_guang_jing',name:'旋光镜',desc:'玄牝所赠，可实时掌握全局战局与攻势布局',rarity:'rare',effect:{comprehension:18,connections:10,cultivation:10}},
  {id:'she_li_zi',name:'舍利子',desc:'无根水服下可得心眼通，眼瞎心不瞎感知四周',rarity:'rare',effect:{comprehension:25,sanity:15,cultivation:10}},
  {id:'wu_gou_yu_pai',name:'无垢阳寿玉牌',desc:'获取无垢阳寿，不沾因果的纯净续命之物',rarity:'rare',effect:{constitution:15,karma:10,qiyun:8}},
  {id:'pian_jing',name:'骗经',desc:'罗教骗术幻术功法，混淆视听',rarity:'rare',effect:{cultivation:20,comprehension:15,karma:-5}},
  {id:'jin_qiao_miao_jing',name:'金桥妙经',desc:'感悟可生死人肉白骨，需长期诵读',rarity:'rare',effect:{cultivation:25,comprehension:20,karma:10}},
  {id:'huo_ao_zhen_jing',name:'火袄箴经',desc:'祆景教经文，蜡油烧伤口以轻伤代重伤，施法需怜悯',rarity:'rare',effect:{cultivation:20,constitution:10,karma:-8}},
  {id:'shuangxiu_jing',name:'欢喜禅残经',desc:'五智如来双修法门残卷，记载阴阳交合修炼之术，散发着令人不安的金光',rarity:'rare',effect:{cultivation:20,comprehension:15,sanity:-15,karma:-10}},
  {id:'longmai_suipian',name:'龙脉碎片',desc:'一块通体金色的鳞状碎片，触之可感受到一个庞大帝国的余韵——那是大齐的龙脉残骸',rarity:'rare',effect:{cultivation:15,comprehension:15,qiyun:8}},
  {id:'shichen_shalou',name:'时辰沙漏',desc:'一个古旧的沙漏，沙粒永远向上流。据说来自一个永远没有黑夜的世界',rarity:'rare',effect:{comprehension:20,sanity:-10,cultivation:10}},
  {id:'tianchen_guyu',name:'天陈古玉',desc:'一块散发着勃勃生机的墨绿古玉，上面刻着已失传千年的文字。握住它时你能听到树木生长的声音',rarity:'rare',effect:{cultivation:18,constitution:12,comprehension:10}},

  // ===== 史诗 (Epic) =====
  // --- 教派传承道具 (史诗) ---
  {id:'xian_du_yin_zhou',name:'仙都兹摄印咒真本',desc:'记载韩符一脉核心印法与口诀，操控铜钱剑的关键传承',rarity:'epic',effect:{cultivation:30,comprehension:20}},
  {id:'yi_wen_zong_lu',name:'异闻总录·秘卷',desc:'收录天下邪祟、坐忘道众特征与弱点，监天司镇司典籍',rarity:'epic',effect:{comprehension:25,cultivation:20,connections:10}},
  {id:'yy_pian_jing',name:'阴阳骗经残卷',desc:'记载斗姥天道下骗修核心法门，可敛取非罡壮大自身',rarity:'epic',effect:{cultivation:35,comprehension:15,sanity:-15,karma:-10}},
  {id:'an_xi_jing_wen',name:'安息经文绢册',desc:'圣女一脉传承之物，蕴含无生老母气息，可安抚心神镇压癫狂',rarity:'epic',effect:{sanity:25,cultivation:20,karma:10}},
  {id:'xuerou_fo_jing',name:'血肉佛陀残经',desc:'记载五智如来核心修行口诀，正德寺至高传承',rarity:'epic',effect:{cultivation:35,constitution:10,sanity:-20,karma:-10}},
  {id:'wang_tian_bao_gao',name:'罔天宝诰',desc:'坐忘道至宝，可召唤阴阳斗姥化身',rarity:'epic',effect:{cultivation:40,sanity:-30,qiyun:-10}},
  {id:'da_qian_lu',name:'大千录',desc:'袄景教传承法器，记载献祭之术',rarity:'epic',effect:{cultivation:35,sanity:-20,constitution:-15}},
  {id:'hong_lian_ye_huo',name:'红莲业火',desc:'白莲教至高神通，可烧灼因果',rarity:'epic',effect:{cultivation:30,karma:15,sanity:-15}},
  {id:'tian_shu_shi_ban',name:'天书石板',desc:'丹阳子所藏，记载天书内容',rarity:'epic',effect:{cultivation:50,sanity:-25}},
  {id:'qi_dao_gu',name:'七道骨',desc:'巴虺信徒遗骨，可召唤巴虺之力',rarity:'epic',effect:{cultivation:35,sanity:-25,qiyun:-15}},
  {id:'bing_shu_can_ye',name:'兵书残页',desc:'兵家传承，以血修炼',rarity:'epic',effect:{cultivation:25,constitution:20,karma:-10}},
  {id:'bing_shu',name:'兵书',desc:'兵家至宝，以血为墨方可修炼',rarity:'epic',effect:{cultivation:35,constitution:15,karma:-15}},
  {id:'hua_ping_wa',name:'花瓶娃',desc:'正德寺以女婴炼成的邪物，阴气极重',rarity:'epic',effect:{cultivation:30,sanity:-30,karma:-25}},
  {id:'wan_du_fan',name:'万毒幡',desc:'南疆巫王的法器，可释放万种毒虫',rarity:'epic',effect:{cultivation:30,constitution:-10,sanity:-15}},
  {id:'xing_su_jian',name:'星宿剑',desc:'大梁国师皇甫天罡之剑，可引雷电大范围攻击',rarity:'epic',effect:{cultivation:40,comprehension:15,sanity:-10}},
  {id:'long_lin_jia',name:'龙鳞甲',desc:'龙鳞卫专属铠甲，蕴含龙脉气运，免疫先天一炁',rarity:'epic',effect:{constitution:25,cultivation:20,qiyun:10}},
  {id:'tai_a_jian',name:'泰阿剑',desc:'上古名剑，煞气极重，斩妖除魔破大邪',rarity:'epic',effect:{cultivation:45,constitution:10,sanity:-15}},
  {id:'ren_pi_fa_qi',name:'人皮法器',desc:'以自身人皮炼制，挡灾转运，濒死可换命复活一次',rarity:'epic',effect:{constitution:20,qiyun:15,sanity:-20}},
  {id:'pan_guan_bi',name:'判官笔',desc:'诸葛渊所用魁星笔，一点即令目标失去知觉',rarity:'epic',effect:{cultivation:35,comprehension:20}},
  {id:'daqi_jinfu',name:'大齐金符',desc:'大齐皇室的龙纹金符，握住时眼前会闪过一个永不天黑的世界——那是大齐的苍穹',rarity:'epic',effect:{cultivation:30,comprehension:20,qiyun:10,sanity:-15}},
  {id:'yin_jian',name:'银锏',desc:'武财神法器，碎银汇聚巨力砸击可破甲',rarity:'epic',effect:{cultivation:30,wealth:20,constitution:10}},

  // ===== 传说 (Legendary) =====
  {id:'hei_tai_sui',name:'黑太岁',desc:'食之可见两界，但代价极大',rarity:'legendary',effect:{cultivation:40,sanity:-40}},
  {id:'pan_chi_long_jing',name:'蟠螭龙晶',desc:'龙脉精华，蕴含秩序天道',rarity:'legendary',effect:{cultivation:45,sanity:-10,constitution:10}},
  {id:'ji_zai_ling',name:'季灾令',desc:'季灾的信物，掌管迷惘',rarity:'legendary',effect:{cultivation:50,sanity:20,qiyun:15}},
  {id:'xu_kong_zhu',name:'虚空珠',desc:'两界夹缝之物，心素可用',rarity:'legendary',effect:{sanity:40,cultivation:20}},
  {id:'bai_ling_miao_shen_xiang',name:'白灵淼神像',desc:'无生老母心蟠的雕像',rarity:'legendary',effect:{cultivation:25,sanity:20,karma:10}},
  {id:'dan_yang_yan_mu',name:'丹阳子遗物',desc:'包含天书石板和遗剑的传承',rarity:'legendary',effect:{cultivation:60,sanity:-20}},
  {id:'xin_pan_ji_gu_jian',name:'心蟠脊骨剑',desc:'诸葛渊脊骨炼成的太虚剑，可开两界裂隙穿梭、召唤斗姥元君',rarity:'legendary',effect:{cultivation:60,comprehension:25,sanity:-30}},
  {id:'xin_su_ji_gu_jian',name:'心素脊骨剑',desc:'心素脊骨炼成，扭曲物体形态，强化近战控制',rarity:'legendary',effect:{cultivation:50,constitution:15,sanity:-25}},
  {id:'liu_yao_tong_shu',name:'六曜通书',desc:'诸葛渊的老皇历，言出法随写啥发生啥，可禁一切',rarity:'legendary',effect:{cultivation:55,comprehension:30,sanity:-20}},
  {id:'xin_zhuo_hua_juan',name:'心浊画卷',desc:'诸葛渊法器，使人忘却记忆并收入画卷中的世界',rarity:'legendary',effect:{cultivation:50,sanity:-25,comprehension:20}},
  {id:'hei_fang_chui',name:'黑色心浊纺锤',desc:'诸葛渊所赠，蜡黄老骨缠黑丝，强力掩盖心素体质',rarity:'legendary',effect:{sanity:30,cultivation:20,qiyun:10}},
  // === 性癖相关物品 ===
  {id:'gu_jian',name:'无铭古剑',desc:'通体泛青的古剑，剑身铭文已模糊不可辨认。毫无灵力，却让你爱不释手',rarity:'uncommon',effect:{comprehension:8,cultivation:5}},
  {id:'qi_qiao_mian',name:'七窍玲珑面',desc:'坐忘道秘制面皮，可同时变化面容、声音、气息。每次使用都让你心跳加速',rarity:'rare',effect:{connections:15,comprehension:10,sanity:-8}},
  {id:'xian_ren_bu',name:'仙人步',desc:'传说可凌空虚度的灵靴，你买它的理由只有你自己知道',rarity:'uncommon',effect:{constitution:8,cultivation:5,comprehension:5}},
];

export const ACHIEVEMENTS = [
  {id:'first_death',name:'初入轮回',desc:'第一次死亡',icon:'☠'},
  {id:'reach_jindan',name:'金丹大道',desc:'达到金丹境界',icon:'⭕'},
  {id:'reach_danuo',name:'超凡入圣',desc:'达到肉身司命境界',icon:'👁'},
  {id:'rich',name:'富甲一方',desc:'金银超过200',icon:'💰'},
  {id:'mad',name:'疯人院',desc:'心素天赋且神志归零',icon:'🌀'},
  {id:'forgotten',name:'被遗忘者',desc:'心浊天赋且修为达金丹',icon:'🌫'},
  {id:'saint',name:'白莲圣女',desc:'白化病天赋且加入白莲教',icon:'🤍'},
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
  {id:'dual_cult_survive',name:'九死一生',desc:'叛出多个门派后存活至50岁',icon:'⚡'},
  // === 婚恋成就 ===
  {id:'married_life',name:'红尘有幸',desc:'成婚并拥有子嗣',icon:'💑'},
  {id:'family_protector',name:'守护家人',desc:'已婚且修为达到金丹',icon:'🏠'},
  {id:'shuangxiu_master',name:'欢喜禅定',desc:'修成五智如来双修法门',icon:'☸'},
  {id:'shuangxiu_resist',name:'以爱破道',desc:'以人间情爱对抗血肉天道',icon:'❤'},
  // === 跨世界成就 ===
  {id:'crossworld_witness',name:'五界见证',desc:'见证五重历史交汇并沟通龙脉（已知大梁、大齐、天陈三重）',icon:'🌐'},
  {id:'daqi_explorer',name:'幽都访客',desc:'在梦境或裂缝中踏入大齐幽都',icon:'🏙'},
  {id:'tianchen_contact',name:'天陈来客',desc:'与左丘咏直接接触',icon:'🌿'},
  {id:'longmai_hero',name:'龙脉守护',desc:'参与龙脉续接大事',icon:'🐉'},
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
  // === 新门派成就 ===
  {id:'luo_master',name:'罗教真传',desc:'在罗教中达到掌教',icon:'🪙'},
  {id:'gu_king',name:'万蛊之王',desc:'在南疆巫族中达到巫王',icon:'🐛'},
  {id:'bingjia_marshal',name:'兵家大将',desc:'在兵家中达到大将',icon:'🩸'},
  {id:'fomen_abbot',name:'正德方丈',desc:'在正德寺中达到方丈',icon:'🪷'},
  {id:'qingfeng_master',name:'清风观主',desc:'在清风观中成为观主',icon:'🏔️'},
  {id:'guoshi_top',name:'大梁国师',desc:'在国师体系中达到国师',icon:'⚡'},
  {id:'chaoting_minister',name:'中枢重臣',desc:'在世俗朝廷中达到重臣',icon:'🏛️'},
  {id:'all_factions',name:'百家通',desc:'一生中加入过5个不同门派',icon:'🌐'},
  {id:'gu_master_survive',name:'百毒不侵',desc:'在南疆巫族修行且体魄不低于60',icon:'🧪'},
  {id:'blood_warrior',name:'血战不死',desc:'兵家修行者体魄降至10以下后恢复至50以上',icon:'🩹'},
  {id:'buddha_evil',name:'佛心魔念',desc:'佛门弟子因果降至-30以下',icon:'😈'},
  // === 心蟠 ACHIEVEMENTS ===
  {id:'xinpan_any',name:'天道因缘',desc:'成为任意司命的心蟠',icon:'🔮'},
  // xinpan_jizai 已移除：季灾是主角李火旺专属
  {id:'xinpan_doumo',name:'谎言之舌',desc:'成为阴阳斗姥的心蟠',icon:'🎭'},
  {id:'xinpan_baxi',name:'痛苦之躯',desc:'成为巴虺的心蟠',icon:'🩸'},
  {id:'xinpan_wusheng',name:'慈悲之心',desc:'成为无生老母的心蟠',icon:'🤍'},
  {id:'xinpan_panchi',name:'秩序之柱',desc:'成为蟠螭的心蟠',icon:'🐉'},
  {id:'xinpan_yuer',name:'法则之器',desc:'成为于儿神的心蟠',icon:'👁'},
  {id:'xinpan_sanqing',name:'秘密守护者',desc:'成为三清的心蟠',icon:'🔮'},
  {id:'xinpan_ascend',name:'心蟠飞升',desc:'以心蟠之身修为达大乘',icon:'⚡'},
  // xinpan_jizai_master 已移除：季灾是主角李火旺专属
  {id:'xinpan_doumo_master',name:'谎言织网',desc:'斗姥心蟠且人脉达50',icon:'🕸'},
  {id:'xinpan_wusheng_master',name:'大慈大悲',desc:'无生老母心蟠且因果达60',icon:'🪷'},
  {id:'xinpan_panchi_master',name:'龙脉守护',desc:'蟠螭心蟠且气运40以上体魄60以上',icon:'🏛'},
  // === 同性婚恋 ACHIEVEMENTS ===
  {id:'longyang',name:'龙阳遗风',desc:'男子之身，与男子结为知己伴侣',icon:'🏳️'},
  {id:'mojing',name:'磨镜情深',desc:'女子之身，与女子结为金兰伴侣',icon:'🏳️'},
  {id:'adopt_child',name:'义子承欢',desc:'收养义子或义女',icon:'👶'},
  // === 无性恋 & 性癖成就 ===
  {id:'asexual_path',name:'绝情绝欲',desc:'无性恋者，一生未动情念',icon:'🧊'},
  {id:'kink_artifact',name:'器痴成魔',desc:'发现自己对法器有异常执念',icon:'🏺'},
  {id:'kink_pain',name:'以苦为乐',desc:'发现自己在苦修中获得异常快感',icon:'⛓'},
  {id:'kink_disguise',name:'千面无我',desc:'发现自己沉迷于易容扮演',icon:'🎭'},
  {id:'kink_voyeur',name:'窥天之眼',desc:'发现自己有窥探他人的隐秘欲望',icon:'👁'},
  {id:'kink_foot',name:'莲步生香',desc:'发现自己对足部有特殊偏好',icon:'🦶'},
];

// === EVENTS ===
export const CHILDHOOD_EVENTS = [
  {text:'你在摇篮里哭闹不止，<span class="npc">母亲</span>轻声哼着摇篮曲哄你入睡。',trigger:{maxAge:2},noTalent:'wu_qin',choices:[
    {text:'安静入睡',effect:{sanity:3},log:'母亲的声音是最好的安神曲'},{text:'继续哭闹',effect:{constitution:2},log:'肺活量倒是练出来了'}]},
  {text:'你第一次学会走路，<span class="npc">家人</span>围在身边又惊又喜。',trigger:{minAge:1,maxAge:2},choices:[
    {text:'踉踉跄跄往前走',effect:{constitution:3,qiyun:2},log:'人生的第一步'},{text:'一屁股坐下来',effect:{sanity:2},log:'不急，路还长着呢'}]},
  {text:'你高烧不退，<span class="npc">村里的赤脚郎中</span>被叫来看诊。他捏着你的小手，皱了皱眉。',trigger:{maxAge:3},choices:[
    {text:'乖乖喝药',effect:{constitution:3,sanity:2},log:'苦得直吐，但烧退了'},{text:'哇哇大哭拒绝',effect:{constitution:-2,sanity:-3},log:'折腾了半天才灌进去'}]},
  {text:'你在村口玩耍，<span class="npc">王大娘</span>给了你一块饴糖。',trigger:{minAge:3},choices:[
    {text:'吃掉',effect:{sanity:5},log:'糖很甜，这是童年为数不多的甜'},{text:'留着慢慢吃',effect:{connections:3,qiyun:3},log:'你学会了珍惜'}]},
  {text:'你突然<span class="danger-text">发起高烧</span>，烧得神志不清。',choices:[
    {text:'找郎中',effect:{wealth:-10},log:'药到病除'},{text:'硬扛过去',effect:{sanity:-10,constitution:-3},log:'落下了病根'}]},
  {text:'<span class="npc">村里的孩子们</span>围着你，推搡嘲弄。',trigger:{minAge:4},choices:[
    {text:'告诉长辈',effect:{connections:5},log:'大人出面教训了他们'},{text:'默默忍受',effect:{sanity:-5,comprehension:2},log:'从此变得沉默寡言'}]},
  {text:'深夜，你看到窗外有一道<span class="mys">模糊的人影</span>站在月光里。',trigger:{minAge:3},choices:[
    {text:'蒙上被子',effect:{sanity:-5},log:'一夜未眠'},{text:'走出去看',effect:{sanity:-10,cultivation:3,comprehension:3},log:'什么都没有...真的什么都没有吗？'},
    {text:'感受阴气的来源',effect:{cultivation:8,comprehension:5,sanity:-8},log:'你的阴体与那道人影产生了共鸣——它不是来害你的，它在向你传递什么信息',check:'yin_ti'}]},
  {text:'<span class="npc">父亲</span>带你去镇上赶集，你看到一个<span class="npc">算命先生</span>。',trigger:{minAge:5},noTalent:'wu_qin',choices:[
    {text:'让他算一卦',effect:{cultivation:3,wealth:-5,comprehension:2},log:'他说你命格奇特'},{text:'不信这个',effect:{sanity:3},log:'理性是最好的护盾'}]},
  {text:'你帮<span class="npc">母亲</span>在田里干活，累得满头大汗。',trigger:{minAge:6},noTalent:'wu_qin',choices:[
    {text:'坚持干完',effect:{connections:5,cultivation:2,constitution:2},log:'母亲很欣慰'},{text:'偷懒跑去玩',effect:{connections:-3},log:'被父亲训斥了一顿'}]},
  {text:'村里来了一队<span class="fac">道士</span>，在祠堂里做法事。',trigger:{minAge:5},choices:[
    {text:'偷偷观看',effect:{cultivation:5,comprehension:3},log:'那些符箓和咒语深深印入脑海'},{text:'害怕跑开',effect:{sanity:3},log:'离那些怪事远一点'}]},
  {text:'后山传来奇怪的<span class="mys">哭声</span>，整个村子的狗都在叫。',trigger:{minAge:6},choices:[
    {text:'假装没听到',effect:{sanity:-3},log:'那声音在梦里反复出现'},{text:'和小伙伴去探险',effect:{sanity:-8,cultivation:5,constitution:2},log:'在山洞里发现了奇怪的符文'}]},
  {text:'你<span class="danger-text">饿了好几天</span>，肚子咕咕叫。',trigger:{minAge:3},choices:[
    {text:'忍着',effect:{sanity:-5,constitution:-2},log:'饥饿让人坚强'},{text:'去镇上讨饭',effect:{connections:-5,wealth:5,qiyun:-2},log:'学会了低头'},
    {text:'凭经验找食物',effect:{constitution:3,comprehension:3,wealth:5},log:'流浪多年的本能让你轻车熟路——哪棵树有野果、哪条沟有螃蟹、哪家后门会倒剩饭，你全都门儿清',check:'liu_lang'}]},
  {text:'过年了，<span class="npc">父母</span>给你做了新衣裳。',trigger:{minAge:3},noTalent:'wu_qin',choices:[
    {text:'开心地穿上',effect:{sanity:10,qiyun:2},log:'这是最快乐的一天'},{text:'想着村外的世界',effect:{cultivation:2,comprehension:2},log:'你心里藏着远方'}]},
  {text:'你在河边洗衣服，看到水中倒映的<span class="mys">不是自己的脸</span>。',trigger:{minAge:5},choices:[
    {text:'揉揉眼睛再看',effect:{sanity:-8},log:'再看时一切正常...大概是错觉'},{text:'告诉大人',effect:{connections:-3,sanity:3},log:'没人相信你'}]},
  {text:'一只<span class="mys">黑猫</span>每天跟着你，村里人说它不吉利。',trigger:{minAge:4},choices:[
    {text:'收养它',effect:{connections:-5,sanity:5,qiyun:5},log:'它成了你唯一的伙伴'},{text:'赶走它',effect:{sanity:-3,qiyun:-3},log:'它临走前回头看了你一眼'}]},
  // === 孤儿专属童年事件 ===
  {text:'你又饿了一整天。<span class="npc">收留你的老人</span>也揭不开锅了，你决定自己想办法。',trigger:{minAge:4},check:'wu_qin',choices:[
    {text:'去翻别人家的垃圾',effect:{wealth:3,connections:-3,sanity:-3},log:'你找到了半块馒头，狼吞虎咽'},
    {text:'去河边抓鱼',effect:{constitution:3,cultivation:2},log:'你抓到了两条小鱼，勉强填了肚子'}]},
  {text:'其他孩子欺负你："<span class="danger-text">没爹没娘的野种！</span>"为首的胖子把你推倒在泥地里。',trigger:{minAge:4},check:'wu_qin',choices:[
    {text:'咬牙站起来',effect:{constitution:3,sanity:-5,qiyun:3},log:'你擦掉血，一言不发地走了——总有一天你会强大到没人敢欺负'},
    {text:'反击',effect:{connections:-5,constitution:2,cultivation:2},log:'你被打了一顿，但胖子的鼻子也流血了'}]},
  {text:'下雨了，你没有地方住。一座<span class="loc">破庙</span>成了你今晚的栖身之所。',trigger:{minAge:5},check:'wu_qin',choices:[
    {text:'在佛像下蜷缩入睡',effect:{sanity:-5,cultivation:3},log:'你梦到了一些奇怪的画面——金光、莲花、还有一座倒悬的城'},
    {text:'生一堆火取暖',effect:{sanity:3,constitution:2},log:'火光照亮了破庙，你觉得不那么害怕了'}]},
  // === 清风观相关：被丹阳子拐走 ===
  {text:'一个自称<span class="npc">丹阳子</span>的道长来到村里，带着几个衣衫褴褛的小孩。他笑眯眯地看着你说："<span class="mys">这孩子有仙缘</span>，不如跟贫道去<span class="loc">清风观</span>修行，包吃包住。"你的父母犹豫不决。',
    trigger:{minAge:6,maxAge:10},choices:[
    {text:'跟着道长走',effect:{cultivation:5,sanity:-10,constitution:-5},log:'你被带进了清风观。那里有很多和你一样大的孩子……你们每天被喂各种苦涩的药汤，丹阳子说这是"筑基"。但有几个孩子喝完药后就再也没出来过。',visit:'qing_feng',setFlag:'at_qingfeng'},
    {text:'大哭大闹不肯去',effect:{sanity:3,qiyun:5},log:'你死死抱住娘亲的腿，丹阳子叹了口气走了。后来你听说村里有几个小孩跟他走了，再也没回来。'},
    {text:'被父母送去',effect:{cultivation:3,sanity:-8,constitution:-3,karma:-5},log:'你的父母收了丹阳子给的十两银子，把你送上了山。你回头看他们的背影，心中五味杂陈。',visit:'qing_feng',setFlag:'at_qingfeng'}]},
  // === 清风观后续：药引子生涯 ===
  {text:'在<span class="loc">清风观</span>里，你和其他孩子每天都要喝丹阳子配的<span class="danger-text">丹药</span>。有个比你大的孩子悄悄告诉你："<span class="danger-text">我们不是弟子，是药引子。</span>"他说上个月那个叫小六的孩子被"炼"了。',
    trigger:{minAge:7},locReq:'qing_feng',flagReq:'at_qingfeng',choices:[
    {text:'想办法逃跑',effect:{constitution:-8,sanity:-5,qiyun:8},log:'你趁夜翻墙，但清风观四周都是阵法。你被抓了回来，丹阳子罚你禁食三天。',setFlag:'know_yaoyinzi'},
    {text:'乖乖听话等机会',effect:{sanity:-12,cultivation:5,comprehension:3},log:'你假装顺从，暗中观察清风观的布局。你发现后山有一条被荒草掩盖的小路…',setFlag:'know_yaoyinzi'},
    {text:'偷偷藏药不喝',effect:{sanity:5,constitution:-3},log:'你把药吐在袖子里。虽然饿得头晕，但至少那些怪药没进你身体。',setFlag:'know_yaoyinzi'}]},
  // === 清风观后续：被迫炼丹 ===
  {text:'丹阳子今天要<span class="danger-text">炼丹</span>，他把你和另外两个孩子叫到了丹房。你被命令往丹炉里添柴、搅拌药液。丹房里弥漫着刺鼻的气味，有个孩子忍不住呕吐了，被丹阳子一脚踢翻。',
    trigger:{minAge:8},locReq:'qing_feng',flagReq:'know_yaoyinzi',choices:[
    {text:'咬牙干活不吭声',effect:{constitution:-5,sanity:-8,cultivation:5},log:'你埋头苦干，尽量不去看炉子里翻滚的东西。丹阳子难得夸了你一句："这孩子还算听话。"你不知道这是好事还是坏事。'},
    {text:'偷偷观察炼丹手法',effect:{comprehension:5,cultivation:8,sanity:-10},log:'你假装干活，暗中记下了丹阳子的炼丹步骤。虽然看不懂那些符文，但你隐约感觉到了灵气的流动——这就是修炼的本质吗？'},
    {text:'装病逃避',effect:{sanity:3,constitution:-3},log:'你捂着肚子蹲在地上装病。丹阳子骂了你几句，让另一个孩子顶替了你。你躲过了一劫，但那个顶替你的孩子第二天就发起了高烧。'}]},
  // === 清风观后续：孩子失踪 ===
  {text:'和你睡同一间屋子的<span class="npc">小七</span>突然不见了。丹阳子说他"下山去了"，但你半夜听到了丹房方向传来的<span class="danger-text">惨叫声</span>。第二天早上，丹阳子笑眯眯地端出了一炉新丹药。',
    trigger:{minAge:9},locReq:'qing_feng',flagReq:'know_yaoyinzi',choices:[
    {text:'强忍恐惧假装不知道',effect:{sanity:-15,comprehension:3},log:'你把被子蒙在头上，假装什么都没听到。但小七的笑脸在你脑海中挥之不去。你开始数——清风观里还剩多少个孩子。'},
    {text:'偷偷去丹房查看',effect:{sanity:-20,cultivation:5,comprehension:5},log:'你趁夜溜到丹房门口。透过门缝，你看到了地上的血迹和丹炉旁堆放的……你不敢再看了，捂着嘴跑回了房间。你终于明白了"药引子"三个字的真正含义。'},
    {text:'和其他孩子商量逃跑',effect:{connections:5,sanity:-10,qiyun:3},log:'你把小七的事告诉了几个信得过的孩子。大家都吓坏了，但清风观四周的阵法让人绝望。一个年纪大些的孩子说："除非有人能破了那些阵法，否则我们一个也跑不了。"'}]},
  // === 清风观后续：火子哥来了 ===
  {text:'清风观来了一个新的孩子——一个<span class="npc">眼神很倔的少年</span>，大家叫他<span class="npc">火子哥</span>。他和别的孩子不一样，总是盯着空气发呆，然后突然说一些莫名其妙的话，比如"<span class="mys">这不是真的</span>""<span class="mys">我在精神病院</span>"。',
    trigger:{minAge:10},locReq:'qing_feng',flagReq:'know_yaoyinzi',choices:[
    {text:'和火子哥交朋友',effect:{connections:15,sanity:-8,comprehension:5},log:'火子哥会在夜里给大家讲"另一个世界"的事。他说那边的人管你们的经历叫"幻觉"，而他在那边被绑在床上打针。你不知该信谁。',setFlag:'met_huozi'},
    {text:'觉得他疯了',effect:{sanity:5},log:'你避开那个总说胡话的少年。但有时你半夜醒来，会看到他坐在窗边，身上散发着微弱的光…',setFlag:'met_huozi'},
    {text:'暗中观察他',effect:{comprehension:8,sanity:-5},log:'你发现火子哥的话虽然听着疯，但他是清风观里唯一一个不怕丹阳子的人。',setFlag:'met_huozi'}]},
  // === 清风观后续：逃离 ===
  {text:'一天深夜，<span class="loc">清风观</span>突然<span class="danger-text">天崩地裂</span>！火子哥不知从哪弄来了<span class="npc">丹阳子</span>的宝剑，在大殿里和丹阳子打了起来。丹药炉翻倒，整座观都在燃烧。火子哥朝你们喊："<span class="npc">快跑！！</span>"',
    trigger:{minAge:12},locReq:'qing_feng',flagReq:'met_huozi',choices:[
    {text:'跟着火子哥一起跑',effect:{constitution:-10,sanity:-15,cultivation:10,connections:20,qiyun:10,karma:5},log:'你们在火光中拼命奔跑。有人摔倒了，火子哥回去背起他继续跑。你们终于逃出了清风观——身后的道观化为一片火海。火子哥清点人数：活下来的只有一半。'},
    {text:'趁乱从后山小路跑',effect:{constitution:-5,sanity:-8,qiyun:5},log:'你没有跟火子哥走，而是选了之前发现的后山小路。你一个人跑了整整一夜，天亮时已经完全不知道自己在哪。至少你还活着。'},
    {text:'回去救更多人',effect:{constitution:-20,sanity:-20,cultivation:8,karma:15,connections:10},log:'你冲回熊熊燃烧的清风观救人。你拉出了三个被困的孩子，但自己也被火焰灼伤了。火子哥最后把你拽了出来："傻子！你不要命了！"'},
    {text:'吓得躲在角落不敢动',effect:{sanity:-25,constitution:-20},log:'你蜷缩在墙角瑟瑟发抖。火焰烧到了身边，是另一个孩子拽着你跑出来的。你被烧伤得很重，但活了下来。你看到丹阳子的尸体倒在废墟里——他终于死了。'}]},
  // === 出生地相关童年事件 ===
  {text:'<span class="loc">赵家村</span>的老人们说，村后那口<span class="mys">古井</span>里住着一位井仙，每逢旱季会显灵。今年大旱，全村人跪在井边。',
    trigger:{minAge:5},locReq:'zhao_cun',choices:[
    {text:'跟着跪',effect:{sanity:-3,connections:5,karma:3},log:'井水果然涌了出来——是巧合还是…'},
    {text:'偷偷往井里扔石子',effect:{sanity:-8,cultivation:3,qiyun:-5},log:'你隐约听到井底传来一声叹息'}]},
  {text:'<span class="loc">李家村</span>与世隔绝，村里人说山外面住着<span class="danger-text">吃人的妖怪</span>。但你发现一条没人走过的<span class="mys">山间小路</span>。',
    trigger:{minAge:6},locReq:'li_cun',choices:[
    {text:'沿着小路走',effect:{cultivation:5,comprehension:3,sanity:-5},log:'你在山的另一边看到了一片从未见过的世界'},
    {text:'听大人的话别去',effect:{sanity:3,connections:3},log:'大人的话总是有道理的——大概吧'}]},
  {text:'<span class="loc">鲁城</span>的集市上来了一个卖<span class="itm">奇怪泥人</span>的外乡人。那泥人的眼珠会动。',
    trigger:{minAge:6},locReq:'lu_cheng',choices:[
    {text:'买一个',effect:{wealth:-5,cultivation:3,sanity:-5},log:'泥人到了晚上自己碎了，里面有一张写满字的纸条'},
    {text:'告诉捕快',effect:{connections:5,karma:3},log:'捕快来时摊主已不见踪影'}]},
  {text:'<span class="loc">阳城</span>知府大人发榜要征集<span class="mys">异闻录</span>——谁知道鬼怪之事可以拿赏钱。城里一时间人人争说怪事。',
    trigger:{minAge:7},locReq:'yang_cheng',choices:[
    {text:'把你看到的怪事讲出来',effect:{wealth:10,connections:5,sanity:-3},log:'知府的师爷格外注意了你...'},
    {text:'别掺和官府的事',effect:{sanity:3},log:'民不与官斗'}]},
  {text:'在<span class="loc">大梁城</span>长大的你见过不少达官贵人。今天街上封了路——据说是<span class="fac">监天司</span>在抓邪修。',
    trigger:{minAge:6},locReq:'da_liang',choices:[
    {text:'爬上屋顶偷看',effect:{cultivation:5,comprehension:3,sanity:-5},log:'你看到穿黑袍的人挥手间就把一栋房子拆了——那就是修士的力量'},
    {text:'躲在家里',effect:{sanity:3,wealth:2},log:'天子脚下也不太平'}]},
  {text:'<span class="loc">玉清山</span>的雾气里偶尔能听到<span class="mys">钟声</span>，但山上并没有寺庙。你从小听着这钟声长大。',
    trigger:{minAge:5},locReq:'shan_qu',choices:[
    {text:'循着钟声去找',effect:{cultivation:8,comprehension:5,sanity:-10},log:'你在山腰发现了一个长满青苔的石洞，里面有一口裂了的铜钟'},
    {text:'当作风声',effect:{sanity:3},log:'习惯了就不觉得奇怪了'}]},
  {text:'<span class="loc">边境</span>又起了烽烟。你从记事起就在逃难，这已经是第三次了。',
    trigger:{minAge:5},locReq:'bian_jing',choices:[
    {text:'偷一把刀防身',effect:{constitution:3,cultivation:3,karma:-3},log:'乱世中没有武器就没有安全感'},
    {text:'跟着大人跑',effect:{connections:3,sanity:-5},log:'你学会了在混乱中生存'}]},
  {text:'<span class="loc">南疆</span>的蛊婆给你戴上了一根红绳，说能<span class="mys">辟邪</span>。你发现戴上后确实不做噩梦了。',
    trigger:{minAge:5},locReq:'nan_jiang',choices:[
    {text:'一直戴着',effect:{sanity:8,cultivation:3},log:'红绳温温的，像有生命一样'},
    {text:'好奇拆开看里面',effect:{sanity:-10,comprehension:5,cultivation:5},log:'绳子里面缠着一只已经干瘪的小虫...蛊虫'}]},
  {text:'<span class="loc">上京城</span>的孩子们都在传：皇宫底下藏着一条<span class="mys">龙</span>，每到夜里能听见龙吟。',
    trigger:{minAge:6},locReq:'shang_jing',choices:[
    {text:'半夜溜去皇宫墙根听',effect:{cultivation:5,sanity:-8,comprehension:5},log:'你……确实听到了什么。低沉的、如雷鸣般的呼吸声'},
    {text:'鬼扯的吧',effect:{sanity:3},log:'小孩子的话不能信'}]},
  {text:'你在<span class="loc">四齐</span>长大，这里到处都是废弃的庙宇和残破的旗帜。老人们说以前这里是一个强大的国家。',
    trigger:{minAge:6},locReq:'si_qi',choices:[
    {text:'去废庙里探索',effect:{cultivation:5,comprehension:3,sanity:-8},log:'你在佛像后面找到了一本发霉的经书'},
    {text:'帮大人种地',effect:{constitution:3,connections:3},log:'四齐虽破，还是得活下去'}]},
  // === NEW CHILDHOOD EVENTS ===
  {text:'你在井边打水，看到井底似乎有<span class="mys">一双眼睛</span>在盯着你。',trigger:{minAge:4},choices:[
    {text:'大声呼喊',effect:{connections:3,sanity:-3},log:'大人赶来时什么都没有'},{text:'回盯那双眼睛',effect:{sanity:-8,comprehension:5,cultivation:3},log:'那双眼睛眨了一下就消失了'}]},
  {text:'村里的<span class="npc">老秀才</span>教你识字，你对"道"字格外感兴趣。',trigger:{minAge:5},choices:[
    {text:'追问"道"的含义',effect:{comprehension:5,cultivation:2},log:'老秀才说道可道非常道'},{text:'认真学其他字',effect:{connections:3,wealth:2},log:'读书识字是正途'}]},
  {text:'你不小心踩死了一只蝴蝶，心里有种奇怪的<span class="mys">愧疚感</span>。',trigger:{minAge:3},choices:[
    {text:'把它埋了',effect:{qiyun:5,sanity:2,karma:3},log:'你第一次感受到因果'},{text:'不以为意',effect:{qiyun:-3,karma:-2},log:'不过是只虫子罢了'}]},
];

export const TEENAGE_EVENTS = [
  {text:'遇到一位<span class="npc">游方道士</span>，他端详你许久，说你有仙缘。',choices:[
    {text:'拜师学道',effect:{cultivation:20,connections:10,comprehension:5},log:'踏上修仙之路！'},{text:'婉言谢绝',effect:{sanity:5},log:'也许错过了什么'}]},
  {text:'<span class="fac">坐忘道</span>的人在镇上设坛讲法，围观者甚众。',choices:[
    {text:'揭穿骗局',effect:{connections:15,wealth:-10,qiyun:5},log:'引来坐忘道的敌意'},
    {text:'请求入道',effect:{sanity:-20,wealth:30},log:'坐忘道弟子考验你的欺骗天赋...你获得了一张<span class="itm">易容面皮</span>',factionJoin:'zuowang',item:'yi_rong_mian'},
    {text:'默默走开',effect:{},log:'与你无关'},
    {text:'呆呆地听完全没反应',effect:{sanity:10,qiyun:5,comprehension:3},log:'坐忘道的人使尽浑身解数，但你心无杂念，他们的蛊惑对你毫无效果。那人叹道："此子心如顽石，无隙可入。"',check:'chi_she'}]},
  {text:'<span class="npc">县太爷</span>贴出告示征兵，抵御南疆蛮族。',choices:[
    {text:'投军报国',effect:{connections:20,wealth:20,cultivation:5,constitution:5,qiyun:5},log:'成为一名士兵'},{text:'想办法逃避',effect:{connections:-15,qiyun:-5},log:'躲在山里三个月'}]},
  {text:'夜里，你看到自己同时出现在<span class="mys">两个不同的地方</span>。',choices:[
    {text:'"这是幻觉"',effect:{sanity:-10},log:'但那感觉太真实了'},{text:'"我果然与众不同"',effect:{cultivation:8,sanity:-5,comprehension:5},log:'你开始理解这个世界的裂痕'}],check:'xinsu'},
  {text:'路边蹲着一个<span class="npc">浑身白化的女子</span>，皮肤惨白，头发雪白，连眼睫毛都是白的。她在哭，说自己妹妹丢了。路人都绕着她走——有人小声说"这是<span class="fac">白莲教</span>的人，别沾上"。',choices:[
    {text:'硬着头皮帮她',effect:{connections:15,sanity:-8,qiyun:5},log:'她说她叫白灵淼。你帮她找了一阵——但你心里越来越不安，因为她口中的"妹妹"好像根本不是人类'},{text:'像其他人一样绕开',effect:{sanity:3},log:'你加快脚步走了。那个白化女子的哭声在你身后很久才消失'}]},
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
  // === 性取向觉醒事件 ===
  {text:'你与一名<span class="npc">同窗少年</span>在山间练剑，汗水湿透了衣衫。他回头朝你笑了一下，你的心莫名跳了一拍——这感觉让你困惑不已，夜里翻来覆去难以入眠。',
    genderReq:'male',orientationReq:'likes_male',awakeningEvent:true,trigger:{minAge:13,maxAge:17},noFlag:'orientation_awakened',choices:[
    {text:'坦然接受内心的感觉',effect:{sanity:5,comprehension:5,karma:3},log:'你渐渐明白，自己的心意与旁人不同。古有龙阳君、弥子瑕，你并不孤独',setFlag:'orientation_awakened'},
    {text:'压在心底，不去多想',effect:{sanity:-5,comprehension:3},log:'你告诉自己这只是一时迷惑。但那个笑容在脑海中挥之不去',setFlag:'orientation_awakened'},
    {text:'试着与同龄女子相处',effect:{connections:3,sanity:-3},log:'你刻意接近镇上的姑娘们，却总觉得差了些什么',setFlag:'orientation_awakened'}]},
  {text:'夜里你与<span class="npc">同门师姐</span>促膝长谈，月光映在她的脸上，你看得出了神。她问你怎么了，你慌忙别开目光——心底泛起一种从未有过的悸动，像是春水破冰。',
    genderReq:'female',orientationReq:'likes_female',awakeningEvent:true,trigger:{minAge:13,maxAge:17},noFlag:'orientation_awakened',choices:[
    {text:'在心里轻声承认',effect:{sanity:5,comprehension:5,karma:3},log:'你终于明白那些诗词里"磨镜"的典故不只是故事。这份心意，你不再逃避',setFlag:'orientation_awakened'},
    {text:'装作若无其事',effect:{sanity:-5,comprehension:3},log:'你笑着岔开了话题，但那夜你翻来覆去，满脑子都是她的笑容',setFlag:'orientation_awakened'},
    {text:'告诉自己这只是仰慕',effect:{connections:3,sanity:-3},log:'师姐本就出色，仰慕她不是很正常么？但你心底知道，这不仅仅是仰慕',setFlag:'orientation_awakened'}]},
  // === 无性恋觉醒事件 ===
  {text:'同龄人都开始谈论<span class="npc">心仪之人</span>，你却对此毫无感觉。他们描述的那种心跳加速、辗转难眠的感觉，你从未体会过。你以为自己只是开窍晚，直到有一天你看着面前容貌出众的同门，心中一片平静——你终于意识到，你就是不一样。',
    orientationType:'asexual',trigger:{minAge:14,maxAge:18},noFlag:'orientation_awakened',choices:[
    {text:'坦然接受自己',effect:{sanity:10,comprehension:8,cultivation:5},log:'别人有别人的红尘，你有你的大道。心无旁骛，修道更近一步',setFlag:'orientation_awakened'},
    {text:'有些困惑',effect:{sanity:-3,comprehension:5},log:'你不明白为什么自己和别人不同。但这份清明让你在修炼中格外专注',setFlag:'orientation_awakened'},
    {text:'一心向道',effect:{cultivation:10,comprehension:5},log:'你暗想：也许这就是天生的道心。无情无欲，正合修行',setFlag:'orientation_awakened'}]},
  // === 性癖觉醒事件 ===
  {text:'你偶然得到一柄<span class="itm">残破的法器</span>，虽已无灵力，你却忍不住反复抚摸其纹路。那种触感让你心神荡漾，远超常人对器物的喜爱。夜里你把它放在枕边，竟比平日睡得安稳。',
    kinkReq:'artifact',trigger:{minAge:14,maxAge:20},noFlag:'kink_awakened',choices:[
    {text:'你就是喜欢法器',effect:{comprehension:5,wealth:-5},log:'你开始四处搜集法器残片。每一件器物在你手中都仿佛有了温度——你对法器的感知力远超同辈',setFlag:'kink_awakened'},
    {text:'压下这奇怪的感觉',effect:{sanity:-3,comprehension:3},log:'你把法器收了起来，但夜里总会想起它的触感',setFlag:'kink_awakened'}]},
  {text:'修炼时你不慎受伤，剧痛传来——然而在痛苦的极致，你感到一股<span class="mys">异样的快感</span>涌遍全身，经脉运转竟比平日通畅数倍。这让你既困惑又兴奋。',
    kinkReq:'pain',trigger:{minAge:14,maxAge:20},noFlag:'kink_awakened',choices:[
    {text:'主动加大修炼强度',effect:{cultivation:8,constitution:3,sanity:-5},log:'你开始刻意进行苦修。旁人以为你意志坚定，只有你知道那种痛苦中混杂的快感驱使着你',setFlag:'kink_awakened'},
    {text:'这不正常……',effect:{sanity:-3,comprehension:5},log:'你知道自己的反应和别人不同。但那种感觉确实让修炼事半功倍',setFlag:'kink_awakened'}]},
  {text:'你偶然戴上一张<span class="itm">易容面皮</span>——镜中映出一张陌生的脸。你的心跳骤然加速，一种难以言喻的兴奋感从心底升起。扮作别人的感觉，竟如此令人……沉迷。',
    kinkReq:'disguise',trigger:{minAge:14,maxAge:20},noFlag:'kink_awakened',choices:[
    {text:'多试几种面孔',effect:{connections:5,comprehension:5,sanity:-3},log:'你开始热衷于以不同身份行走世间。每一张面孔背后，都是一种全新的人生体验',setFlag:'kink_awakened'},
    {text:'赶紧取下',effect:{sanity:-3,comprehension:3},log:'你摘下面皮，但那种兴奋感久久不散。你发现自己在期待下一次',setFlag:'kink_awakened'}]},
  {text:'深夜你路过<span class="npc">师兄</span>的房间，门缝透出微光。你本该走开，却不自觉地驻足窥视。看到别人不被观察时的真实模样，你感到一种<span class="mys">隐秘的满足</span>——这种感觉让你脸红心跳。',
    kinkReq:'voyeur',trigger:{minAge:14,maxAge:20},noFlag:'kink_awakened',choices:[
    {text:'承认自己喜欢观察',effect:{comprehension:8,sanity:-5,karma:-3},log:'你开始留意他人不经意间流露的真实。这种洞察力让你在人际中如鱼得水——代价是那份隐秘的负罪感',setFlag:'kink_awakened'},
    {text:'赶紧离开',effect:{sanity:-3,karma:3},log:'你匆匆走开，但那种感觉已经刻在了记忆里',setFlag:'kink_awakened'}]},
  {text:'夏日你在溪边洗脚，偶然看到<span class="npc">同门</span>也在对岸濯足。你的目光不由自主地停留在那双白皙的脚上，心跳骤然加速。这种感觉让你手足无措。',
    kinkReq:'foot',trigger:{minAge:14,maxAge:20},noFlag:'kink_awakened',choices:[
    {text:'不去纠结这种感觉',effect:{sanity:3,comprehension:3},log:'你告诉自己每个人都有不同的喜好。古人亦有"三寸金莲"之说，不必大惊小怪',setFlag:'kink_awakened'},
    {text:'匆忙离去',effect:{sanity:-3,connections:-3},log:'你慌张地穿上鞋跑了。但此后每当看到别人的脚，你都会不自觉地多看一眼',setFlag:'kink_awakened'}]},
  {text:'你在镇上被<span class="npc">一群纨绔子弟</span>围住，他们看你不顺眼。',choices:[
    {text:'以武力突围',effect:{cultivation:5,constitution:3,connections:-5},log:'你打翻了几个，但也结了仇',req:{constitution:20}},
    {text:'以言语化解',effect:{connections:5,comprehension:2},log:'你三言两语化解了冲突',req:{connections:5}},
    {text:'忍气吞声',effect:{sanity:-5,karma:3},log:'被人欺负的滋味不好受'},
    {text:'舌灿莲花反客为主',effect:{connections:15,comprehension:5,qiyun:3},log:'你口若悬河、妙语连珠，不但化解了冲突，还把纨绔子弟说得心服口服，非要拜你为大哥',check:'kou_cai'}]},
];

export const ADULT_EVENTS = [
  {text:'<span class="fac">监天司</span>正在追捕一名<span class="danger-text">邪修</span>，你恰好在附近。',choices:[
    {text:'出手相助',effect:{connections:25,wealth:30,cultivation:5,qiyun:10},log:'监天司赏你银两',req:{cultivation:30}},{text:'趁乱捞一笔',effect:{wealth:20,connections:-10,qiyun:-10},log:'乱世中求财'},
    {text:'赶紧跑',effect:{},log:'明哲保身'}]},
  {text:'在<span class="loc">深山古洞</span>中，你发现了一处<span class="mys">上古遗迹</span>。',choices:[
    {text:'深入探索',effect:{cultivation:25,wealth:40,sanity:-20,comprehension:10},log:'获得了难以想象的机缘！',item:'tian_shu',req:{constitution:30}},{text:'原路返回',effect:{sanity:5},log:'好奇心害死猫'}]},
  {text:'一个<span class="npc">神秘商人</span>向你兜售一颗<span class="itm">来历不明的丹药</span>。',choices:[
    {text:'买来服下',effect:{cultivation:15,sanity:-25,wealth:-20,constitution:5},log:'修为暴涨，但总感觉哪里不对...',item:'dan_yao',req:{wealth:20}},
    {text:'谢绝',effect:{sanity:5},log:'来路不明的东西不能乱吃'},
    {text:'验货砍价',effect:{wealth:10,cultivation:15,comprehension:5},log:'你一眼看出丹药品相不佳，三言两语把价格压到一半——商贾世家的眼力不是白给的',check:'shang_jia'}]},
  {text:'有人带你去见<span class="mys">黑太岁</span>——一种能让人看到另一个世界的东西。',choices:[
    {text:'吞食黑太岁',effect:{sanity:-50,cultivation:40,comprehension:15,qiyun:-15},log:'你看到了！两个世界叠加在一起！',item:'hei_tai_sui',req:{constitution:40}},
    {text:'坚决不吃',effect:{sanity:10},log:'你选择留在"正常"的世界'}]},
  {text:'<span class="npc">镖局</span>正在招募好手，押一批贵重货物去边境。',choices:[
    {text:'应聘镖师',effect:{connections:30,wealth:40,constitution:5},log:'成为镖师，刀口舔血',factionJoin:'biaoju'},
    {text:'不去',effect:{},log:'这行当太危险'}]},
  {text:'<span class="fac">白莲教</span>暗中传教，许诺信徒来世荣华。',choices:[
    {text:'请求入教',effect:{connections:20,sanity:-20},log:'白莲教考验你的忠心...你获得了一枚<span class="itm">白莲纹布护身符</span>',factionJoin:'bailian',item:'bl_hushen_fu'},
    {text:'向官府举报',effect:{connections:15,wealth:20,qiyun:-5},log:'官府封赏了你'},
    {text:'假装没看见',effect:{},log:'多一事不如少一事'}]},
  {text:'<span class="danger-text">山贼</span>拦路抢劫，为首的是个独眼大汉。',choices:[
    {text:'拼死反抗',effect:{cultivation:10,sanity:-5,constitution:3,qiyun:3},log:'打跑了山贼，身上添了几道伤疤',combat:40},
    {text:'乖乖交钱',effect:{wealth:-30},log:'破财免灾'},
    {text:'动之以情',effect:{connections:5,comprehension:2},log:'居然说动了他，放你一马',req:{connections:10}},
    {text:'以古武之术迎敌',effect:{cultivation:15,constitution:8,qiyun:5},log:'你施展家传古武功法，拳风凌厉——山贼头目大惊失色，带着手下仓皇逃窜',check:'gu_wu'}]},
  {text:'你在客栈休息时，隔壁传来<span class="mys">诡异的念经声</span>，持续了一整夜。',choices:[
    {text:'敲门查看',effect:{sanity:-15,cultivation:8,comprehension:5},log:'房间里空无一人...但经声还在继续'},
    {text:'用被子捂住耳朵',effect:{sanity:-5},log:'一夜噩梦'},
    {text:'以通灵之力与念经者沟通',effect:{cultivation:12,comprehension:8,sanity:-10,connections:5},log:'你睁开阴阳眼，看到一个枯坐百年的亡僧——他并非恶灵，只是死后仍在诵经超度自己。你帮他念完了最后一段经文，他含笑消散了',check:'tong_ling'}]},
  {text:'路遇一位<span class="npc">老道</span>，他说你身上有<span class="mys">不干净的东西</span>。',choices:[
    {text:'请他驱邪',effect:{sanity:15,wealth:-20,qiyun:5},log:'他画了一道符给你',item:'fu_lu'},
    {text:'不信这些',effect:{sanity:-5},log:'老道叹了口气走了'}]},
  {text:'<span class="fac">袄景教</span>的圣女向你伸出手，邀你加入圣火之下。',choices:[
    {text:'加入袄景教',effect:{connections:40,cultivation:30},log:'你在圣火前立誓，获得了一份<span class="itm">火蜒蚰蜡封简</span>',factionJoin:'aojing',item:'huo_yanyu_la'},
    {text:'敬而远之',effect:{},log:'宗教的事还是别掺和'}]},
  {text:'你在市集上看到有人贩卖<span class="itm">一块温润的白玉佩</span>。',choices:[
    {text:'买下（花费30金银）',effect:{wealth:-30,sanity:15},log:'白玉佩温润通灵，心神为之一宁',item:'bai_yu_pei',req:{wealth:30}},
    {text:'太贵了',effect:{},log:'钱要省着花'}]},
  {text:'一群<span class="fac">法教</span>信徒正在进行血腥的<span class="danger-text">献祭仪式</span>。',choices:[
    {text:'阻止他们',effect:{cultivation:10,connections:-15,sanity:-10,qiyun:15},log:'你打断了仪式，但法教记住了你',req:{cultivation:20}},
    {text:'加入法教',effect:{cultivation:20,sanity:-25},log:'你跪在血泊中宣誓效忠，获得了一块<span class="itm">献祭石牌</span>',factionJoin:'fa_jiao',item:'xian_ji_shi_pai'},
    {text:'悄悄离开',effect:{sanity:-10,qiyun:-5},log:'那些尖叫声将长久萦绕'}]},
  {text:'一位<span class="npc">垂死的修士</span>将毕生修为传给你。',choices:[
    {text:'接受传承',effect:{cultivation:35,sanity:-15,comprehension:10},log:'巨大的力量涌入丹田！',req:{cultivation:30}},
    {text:'帮他安详离去',effect:{connections:10,sanity:10,qiyun:10},log:'他走得很平静'}]},
  {text:'你听说<span class="loc">鬼市</span>今夜会出现，可以买到奇物。',choices:[
    {text:'前往鬼市',effect:{wealth:-15,sanity:-10,cultivation:10,qiyun:-5},log:'用阳寿换了一件法器',item:'gui_mian',req:{wealth:15}},
    {text:'不去那种地方',effect:{sanity:5},log:'还是阳间好'},
    {text:'去鬼市做生意',effect:{wealth:50,comprehension:5,sanity:-8},log:'你天生的商业嗅觉在鬼市也管用——低价收了几件阴间奇物，转手卖给阳间修士，净赚一大笔',check:'jing_shang'}]},
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
    {text:'叫人来帮忙',effect:{qiyun:5,karma:3,connections:5},log:'等人来时老人已经咽气了'},
    {text:'就地施救治伤',effect:{qiyun:10,karma:10,connections:15,comprehension:5},log:'你凭医心天赋判断伤势，用山间草药止血接骨——老人竟奇迹般保住了性命。他醒来后传授你一套秘传药方作为答谢',check:'yi_xin'}]},
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
  {text:'一位<span class="npc">美貌女子</span>在路边向你求助，声称被人追杀。',genderReq:'male',choices:[
    {text:'英雄救美',effect:{connections:15,karma:5,constitution:-3},log:'你击退了追兵，她对你感激涕零'},
    {text:'假装没看见',effect:{karma:-5},log:'你心中有愧地走开了'},
    {text:'识破圈套',effect:{comprehension:5,wealth:10},log:'果然是仙人跳，你反将一军',req:{comprehension:25}}]},
  {text:'一位<span class="npc">俊朗少年</span>在路边向你搭话，言语间颇为殷勤。',genderReq:'female',choices:[
    {text:'与他结伴同行',effect:{connections:15,qiyun:3},log:'他是个有趣的旅伴，一路上你们聊得很开心'},
    {text:'保持距离',effect:{comprehension:3},log:'独行侠不需要同伴'},
    {text:'识破居心',effect:{comprehension:5,connections:-3},log:'他别有用心，你看穿了他的伎俩',req:{comprehension:20}}]},
  {text:'<span class="fac">门派</span>举办比武大会，冠军可获丰厚奖赏。',factionReq:true,choices:[
    {text:'报名参加',effect:{cultivation:10,connections:15,constitution:3,wealth:20},log:'你在比武中大放异彩！',req:{cultivation:20}},
    {text:'台下观战',effect:{comprehension:5,connections:5},log:'看别人打架也能学到不少'}]},
  {text:'你在酒楼饮酒时，隔壁桌有人在议论<span class="fac">修真界</span>的各种秘闻。',choices:[
    {text:'凑过去仔细听',effect:{comprehension:8,connections:3},log:'你听到了一些有趣的消息，对修真界有了更多了解'},
    {text:'加入讨论',effect:{connections:10,comprehension:3},log:'你参与了讨论，结交了几个志同道合的朋友'},
    {text:'喝完酒走人',effect:{sanity:3},log:'和自己无关的事不必在意'}]},
  {text:'你对门派的<span class="mys">种种规矩</span>越来越感到束缚，心中萌生了离去之意。',factionReq:true,choices:[
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
    {text:'慢慢后退',effect:{},log:'你缓缓退离虎的领地，松了一口气'},
    {text:'硬接虎爪不闪不避',effect:{cultivation:15,constitution:12,qiyun:10,connections:5},log:'猛虎一掌拍在你身上——你纹丝不动。铁骨之体硬扛虎爪，皮肉无损！猛虎惊惧后退，你趁势将其制服',check:'tie_gu'}]},
  {text:'夜间，三名<span class="danger-text">黑衣人</span>破门而入，说有人出钱买你的命。',choices:[
    {text:'迎战杀手',effect:{cultivation:10,constitution:3,sanity:-5},log:'你击退了杀手，但不知是谁要害你',combat:55},
    {text:'从窗户逃跑',effect:{wealth:-20,connections:-5},log:'你丢下行李仓皇逃出'},
    {text:'报出门派名号',effect:{connections:-5},log:'他们犹豫了一下撤走了',req:{faction:'zuowang'}}]},
  {text:'边境发生了<span class="danger-text">大规模冲突</span>，你被卷入了混战之中。',
    trigger:{minAge:20},choices:[
    {text:'奋力杀敌',effect:{cultivation:15,connections:10,constitution:5,wealth:15},log:'你在混战中立了大功！',combat:70},
    {text:'保护平民撤退',effect:{karma:15,qiyun:10,connections:10},log:'你救了不少人，百姓感恩戴德'},
    {text:'趁乱逃走',effect:{sanity:-5,karma:-3},log:'战场不是你该来的地方'}]},
  // === 新门派加入事件 ===
  {text:'一位<span class="fac">罗教</span>弟子在路边摆摊看风水，你上前攀谈。他见你悟性不凡，引你去见<span class="npc">韩符掌教</span>，问你是否愿意拜入<span class="fac">罗教</span>修习符箓与驱邪之术。',choices:[
    {text:'拜入罗教',effect:{comprehension:15,cultivation:10,connections:10},log:'你成为罗教弟子，掌门亲授<span class="itm">罗教符箓包</span>，开始修习蛇骨山一脉平和内敛的罗教之法',factionJoin:'luo_jiao',item:'luo_fulu_bao'},
    {text:'请教一二后离去',effect:{comprehension:8},log:'你学到了一些基础的风水知识'},
    {text:'不感兴趣',effect:{},log:'看风水这种事太玄了'}]},
  {text:'你深入<span class="loc">南疆</span>时遭遇瘴气侵体，被一位<span class="fac">南疆巫族</span>的蛊师所救。他说你的体魄很适合修习<span class="mys">蛊术</span>。',choices:[
    {text:'拜入南疆巫族',effect:{cultivation:15,constitution:5,sanity:-10},log:'你成为蛊童，获得了一只<span class="itm">低阶噬邪蛊种囊</span>，开始学习与毒虫共处',factionJoin:'nanjiang',item:'shi_xie_gu_nang'},
    {text:'道谢后离去',effect:{connections:5},log:'南疆的修行路子太诡异了'},
    {text:'请他教你几手蛊术',effect:{cultivation:8,comprehension:5,sanity:-5},log:'他教了你最基础的驱虫之法'}]},
  {text:'你在战场废墟中捡到了一页<span class="itm">兵书残页</span>，上面的文字被血浸染。一个<span class="fac">兵家</span>传人出现在你身后："你拿了不该拿的东西。不过…你有兵家的资质。"',choices:[
    {text:'拜入兵家',effect:{cultivation:15,constitution:5,karma:-5,sanity:-5},log:'你以鲜血在兵书上写下自己的名字，成为兵家之卒',factionJoin:'bingjia'},
    {text:'交还兵书残页',effect:{connections:5,karma:5},log:'那人点了点头，消失在了战场烟尘中'},
    {text:'拒绝并保留残页',effect:{cultivation:10,qiyun:-5},log:'你留下了残页，但那人的眼神让你不安'}]},
  {text:'<span class="loc">正德寺</span>的僧人在路边施粥济民。一位<span class="npc">老僧</span>看到你便说："施主有佛缘，可愿入我<span class="fac">佛门</span>修行？"',choices:[
    {text:'剃度出家',effect:{cultivation:10,karma:5,sanity:5,connections:5},log:'你在正德寺剃度为沙弥，获得了一份<span class="itm">戒牒</span>',factionJoin:'fomen',item:'zds_jie_die'},
    {text:'带发修行',effect:{cultivation:5,comprehension:5},log:'你在寺中修行数日，受益匪浅但未正式出家'},
    {text:'不入佛门',effect:{},log:'你双手合十谢过老僧'}]},
  // === 清风观加入事件 ===
  {text:'你在山中迷路时误入一座<span class="mys">破败道观</span>——<span class="loc">清风观</span>。一个不识字的中年男人盯着你看了许久，突然大笑："好材料！你留下吧。"他就是<span class="npc">丹阳子</span>。',trigger:{minAge:12},choices:[
    {text:'留在清风观',effect:{cultivation:15,sanity:-10,karma:-5},log:'你成为清风观外门弟子，获得了一张<span class="itm">引火护鼎符</span>。这里的师兄们大多有些残疾，气氛诡异...',factionJoin:'qingfeng',item:'yin_huo_fu'},
    {text:'趁夜逃走',effect:{sanity:-5,qiyun:3},log:'你趁丹阳子不注意逃出了清风观，身后传来他的叹息声'},
    {text:'跪拜求学',effect:{cultivation:20,sanity:-15,karma:-10,comprehension:5},log:'丹阳子对你的"诚意"很满意，亲自收你为内门弟子',factionJoin:'qingfeng'}]},
  // === 国师体系加入事件 ===
  {text:'你的修为和学识引起了<span class="loc">上京城</span>朝廷的注意。一封征辟文书送到你面前——朝廷要征你为<span class="fac">方士</span>，入<span class="npc">皇甫天罡</span>国师麾下效力。',trigger:{minAge:20,cultivation:30,connections:20},choices:[
    {text:'应征入朝',effect:{wealth:20,connections:15,cultivation:10,qiyun:5},log:'你以方士身份入朝，开始了术师朝堂生涯',factionJoin:'guoshi'},
    {text:'婉言谢绝',effect:{connections:-5,qiyun:3},log:'你无意为朝廷效命，征辟使者悻悻离去'},
    {text:'提出条件再应征',effect:{wealth:30,connections:10},log:'你以自身价值为筹码争取到了优厚的待遇',factionJoin:'guoshi'}]},
  // === 世俗朝廷加入事件 ===
  {text:'你在地方上颇有名望，一位<span class="npc">朝廷巡查使</span>注意到了你。他说朝廷正缺能吏，问你是否愿意入仕为官，从小吏做起。',trigger:{minAge:18,connections:15,wealth:30},choices:[
    {text:'入仕为官',effect:{wealth:15,connections:10,qiyun:3},log:'你穿上了官服，开始了宦海生涯',factionJoin:'chaoting'},
    {text:'无意仕途',effect:{connections:5},log:'你志不在此，但与巡查使结下了一面之缘'},
    {text:'请他引荐更高的职位',effect:{wealth:-20,connections:15},log:'你花了不少钱打点，直接获得了一个体面的起点',factionJoin:'chaoting',req:{wealth:20}}]},
];

export const SPECIAL_EVENTS = [
  {text:'前方路上有个<span class="npc">浑身是血的少年</span>——他嘴里不停念叨着"假的，都是假的"，突然对着空气猛砍了一刀，地面被劈开一条裂缝。路人尖叫着四散奔逃。有人认出他："是那个<span class="danger-text">李火旺</span>！快跑！"',
    trigger:{minAge:15,maxAge:50,yearMin:-5,yearMax:35},choices:[
    {text:'壮着胆子没有跑',effect:{sanity:-20,cultivation:5,comprehension:10},log:'他忽然扭头看向你——那双眼睛里同时有两种完全不同的神情。你浑身僵硬不敢动，他却像没看到你一样走了',achieve:'meet_li'},
    {text:'跟着人群拼命跑',effect:{sanity:-8,constitution:3},log:'跑出去好远你才敢回头——那个少年还站在原地对着空气说话，像是在跟什么看不见的东西争论'},
    {text:'躲在暗处偷看',effect:{sanity:-15,comprehension:8},log:'你看到他时哭时笑，手上的刀一会指着天一会指着地。最可怕的是——他砍的那些"空气"，好像真的流出了什么东西'}]},
  {text:'听说<span class="npc">诸葛渊</span>在<span class="loc">杏岛</span>收徒——整个修真界都疯了。传闻赶去杏岛的修士把海面都站满了，但诸葛渊只见了三个人。据说他只用一种古怪的<span class="mys">文言文</span>写字，写出来的字能直接让人开悟。你一个普通人，想都不敢想。',
    trigger:{minAge:20,cultivation:50,yearMin:-20,yearMax:30},choices:[
    {text:'远远去杏岛看了个热闹',effect:{comprehension:10,cultivation:5},log:'你连岛都没上去——外围全是修士，一个比一个吓人。但你远远看到了诸葛渊的背影，那一瞬间你觉得脑子里有什么东西通了'},
    {text:'这种热闹不敢凑',effect:{sanity:3},log:'修士扎堆的地方，普通人去了就是送菜'}]},
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
  {text:'<span class="fac">白莲教</span>的<span class="npc">圣女白灵淼</span>带着教众路过此地，说是南疆出了大事。她周身裹着一层淡淡的白光，教众们对她顶礼膜拜。你注意到她的眼神很空——像是能看穿人心，又像是什么都没在看。白莲教的人向路人"请求帮忙"，但语气不像是在问。',
    trigger:{minAge:20,maxAge:60,yearMin:-5,yearMax:30},choices:[
    {text:'跟着白莲教南下',effect:{connections:15,cultivation:10,sanity:-15,qiyun:5},log:'你被半推半就地加入了队伍。白灵淼对你说了一句"菩萨保佑"——你后来才知道她口中的"菩萨"跟你理解的完全不一样'},
    {text:'装作没听见赶紧走',effect:{sanity:-5},log:'白莲教的人盯着你看了一会才移开目光。你后背发凉'}]},
  // === NEW SPECIAL EVENTS ===
  {text:'你在古道上遇到一柄<span class="itm">断裂的长剑</span>，剑身上刻着"<span class="npc">丹阳</span>"二字。',
    trigger:{minAge:18,cultivation:30,yearMin:-15,yearMax:30},choices:[
    {text:'尝试修复此剑',effect:{cultivation:25,comprehension:15,sanity:-10},log:'你感受到了丹阳子残留的剑意！',item:'dan_yang_jian',achieve:'meet_danyang'},
    {text:'将剑安葬于此',effect:{qiyun:10,sanity:5},log:'你为前辈立了一座剑冢'}]},
  {text:'一个穿黑衣的男人忽然出现在你面前——不是走过来的，是<span class="danger-text">凭空出现</span>的。他叫<span class="npc">柳若飞</span>，眼神冷得像刀子。他盯着你看了几秒，问了一句："你信这个世界是真的吗？"你感觉自己答错了就会死。',
    trigger:{minAge:20,cultivation:60,yearMin:0,yearMax:35},choices:[
    {text:'颤抖着说"…信"',effect:{sanity:-5,qiyun:5},log:'柳若飞冷哼一声，人又凭空消失了。你站在原地腿软了半天——刚才那几秒你确信他随时可以杀你'},
    {text:'不知道哪来的胆子说了"不信"',effect:{sanity:-20,cultivation:20,comprehension:10},log:'柳若飞的表情变了——不是愤怒，是某种难以形容的…认同？他说了句"那你和我是同路人"就消失了。你事后越想越后怕'},
    {text:'吓得说不出话',effect:{sanity:-10,comprehension:5},log:'你嘴巴张了张什么都没说出来。柳若飞看了你一会，说了句"算了"就消失了。你发现自己裤子湿了'}]},
  {text:'你被卷入了一场<span class="mys">大傩仪式</span>——无数戴着面具的人在跳傩舞。',
    trigger:{minAge:25,cultivation:80},choices:[
    {text:'戴上傩面加入',effect:{cultivation:40,sanity:-30,qiyun:-20,comprehension:15},log:'你在傩舞中看到了生死轮回的真相！',item:'nuo_mian',achieve:'nuo_ritual'},
    {text:'拼命挣脱',effect:{sanity:-10,constitution:-5},log:'那些面具人的笑声将永远萦绕在你耳边'}]},
  {text:'你无意间走到了<span class="npc">清风观</span>的废墟——就是那个传说中<span class="npc">丹阳子</span>拿小孩炼丹的邪门道观。断壁残垣上还有<span class="danger-text">干涸的血迹</span>，空气里弥漫着一股怪味。你隐约看到废墟深处有人影一闪而过。',
    trigger:{minAge:15,maxAge:40,yearMin:-2,yearMax:30},choices:[
    {text:'硬着头皮进去看看',effect:{cultivation:15,sanity:-18,comprehension:10},log:'你在坍塌的丹房里找到了一本笔记——上面记着丹阳子的炼丹心得。字迹工整得可怕，内容却让你胃里翻江倒海'},
    {text:'撒腿就跑',effect:{sanity:-5},log:'丹阳子虽然死了，但那些被他炼成丹的孩子们的怨气还在——你跑出去好远才敢回头'}]},
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
  // === 心素专属：两界穿梭事件（现实世界的景象闪入道诡世界） ===
  {text:'你的视野突然<span class="mys">扭曲</span>——眼前的山林变成了一间白色的房间，穿白衣的人在对你说话，他们叫你"病人"。有人尖叫着被按在床上打针。然后一切消失了，山林回来了。',
    trigger:{minAge:12},choices:[
    {text:'试着记住那个世界的细节',effect:{sanity:-20,comprehension:15,cultivation:10},log:'白色房间...穿白衣的人...你不知道哪边才是真实的'},
    {text:'告诉自己这边才是真的',effect:{sanity:5,cultivation:3},log:'你紧紧攥住手中的泥土——这边是真的，一定是'},
    {text:'顺着那个世界的感觉深入',effect:{sanity:-30,cultivation:25,comprehension:20},log:'你短暂地"去了"另一边——那里的人管这地方叫"精神病院"...'}],check:'xinsu'},
  {text:'你在修炼时突然听到了<span class="mys">另一个世界</span>的声音——有人在用你听不懂的方式说话，提到"<span class="npc">李火旺</span>又发病了""他说自己是修仙的"。',
    trigger:{minAge:15,yearMin:-5,yearMax:30},choices:[
    {text:'顺着声音追溯',effect:{sanity:-25,comprehension:20,cultivation:15},log:'你短暂看到了另一个世界——那里没有灵气，没有修士，一切都灰蒙蒙的。而"李火旺"在那边只是一个...被绑在床上的少年'},
    {text:'强行隔绝声音',effect:{sanity:10,cultivation:5},log:'你封闭了感知，那些声音渐渐消散了'},
    {text:'尝试和那边的人对话',effect:{sanity:-35,cultivation:20,comprehension:15},log:'你对着虚空喊了一句话——那边的"医生"惊恐地看着空气中凭空出现的声波纹'}],check:'xinsu'},
  {text:'夜里你又<span class="mys">穿越</span>了——这次你看到一间满是铁栏杆的房间，墙上贴着"<span class="danger-text">六号病房</span>"的牌子。里面有个少年在纸上画符箓，旁边的人说他"精神分裂越来越严重了"。',
    trigger:{minAge:18,yearMin:0,yearMax:35},choices:[
    {text:'试着和那个少年沟通',effect:{sanity:-25,cultivation:20,connections:10},log:'那个少年猛地抬头看向你——是李火旺。他的眼神在两个世界间闪烁："你也被困在这里了？"'},
    {text:'仔细观察那个世界',effect:{sanity:-15,comprehension:15},log:'那个世界没有灵气，人们用一种叫"科学"的东西解释一切。你觉得那才是疯了...还是说？'},
    {text:'拼命回到这边',effect:{sanity:-5},log:'你猛地睁开眼，冷汗浸透了衣衫。这边是真的...对吧？'}],check:'xinsu'},
  {text:'你走在路上时眼前突然出现了<span class="mys">另一层世界</span>的影像——车水马龙的铁盒子在平坦的黑色路面上飞驰，人们盯着手里发光的薄板，天上有银色的巨鸟划过。',
    trigger:{minAge:10},choices:[
    {text:'惊讶地观察',effect:{sanity:-15,comprehension:12,cultivation:5},log:'那个世界...完全没有修仙，没有邪祟，没有门派。但那些"铁盒子"和"银色巨鸟"到底是什么？'},
    {text:'闭上眼等它消失',effect:{sanity:-5},log:'你闭上眼，等幻象消散。但你知道那不是幻象——那是真实存在的另一个世界'}],check:'xinsu'},
  // === 心素专属：身体是药引/材料，被各方争夺 ===
  {text:'你在市集上被一个<span class="npc">神秘修士</span>拦住，他盯着你的手，舔了舔嘴唇："<span class="danger-text">心素</span>的血肉……做成法器，威力可抵半件仙宝。"',
    trigger:{minAge:14},check:'xinsu',choices:[
    {text:'拔腿就跑',effect:{sanity:-15,constitution:3},log:'你发了疯似的逃跑——从那一刻起你才明白，自己的身体不属于自己'},
    {text:'反击',effect:{sanity:-10,cultivation:8,constitution:-3},log:'你拼死打退了他，但他临走时笑着说："会有更多人来的。"',combat:40},
    {text:'大声呼救',effect:{connections:10,sanity:-10},log:'路人赶来，那人遁走了。但你看到人群中有几双眼睛，也在盯着你的身体'}]},
  {text:'<span class="fac">坐忘道</span>的人找上了你——他们知道你是<span class="mys">心素</span>。一个笑嘻嘻的人说："把你的<span class="danger-text">皮</span>给我们，可以做一件<span class="itm">不死法衣</span>。放心，你能长回来的。"',
    trigger:{minAge:16,cultivation:20},check:'xinsu',choices:[
    {text:'誓死不从',effect:{sanity:-20,cultivation:10,constitution:-5},log:'他们动手了——你拼死逃脱，但身上多了几道永远不会消失的伤疤',combat:55},
    {text:'假意答应后逃走',effect:{sanity:-15,comprehension:8,connections:-10},log:'你骗过了他们，但从此你知道——心素没有安全的地方'},
    {text:'以条件交换保护',effect:{cultivation:15,sanity:-10,connections:15,karma:-10},log:'你和他们达成了交易：每年献一次血，换取他们的庇护'}]},
  {text:'你的身体在受伤后<span class="mys">自行愈合</span>了——伤口冒着微光，皮肉在蠕动中恢复原状。旁边的人目瞪口呆。',
    trigger:{minAge:18,cultivation:40},check:'xinsu',choices:[
    {text:'赶紧遮住伤口',effect:{sanity:-10,connections:-5},log:'太迟了，有人看到了。心素自愈的消息会传开——更多人会来'},
    {text:'感受这种力量',effect:{cultivation:15,comprehension:10,sanity:-15},log:'先天一炁在你体内涌动，你感到自己的肉身正在某种意义上"超越凡人"'},
    {text:'趁机修炼自愈之术',effect:{cultivation:25,constitution:10,sanity:-20},log:'你学会了主动引导先天一炁修补肉体——但每次使用，你都分不清哪个世界更痛'}]},
  {text:'你在梦中听到一个声音说："<span class="mys">太始变而成形，形而有质，而未成体，是曰心素。</span>"你突然明白了自己体内<span class="mys">先天一炁</span>的本质——你能<span class="danger-text">以假修真</span>。',
    trigger:{minAge:20,cultivation:60},check:'xinsu',choices:[
    {text:'尝试以假修真',effect:{cultivation:40,sanity:-30,comprehension:20},log:'你凭空想象了一把剑——然后那把剑出现在了你手中。你颤抖着握住它：这是真的，你把幻觉变成了现实'},
    {text:'不敢轻易尝试',effect:{comprehension:15,sanity:5},log:'以假修真……如果假的能变成真的，那什么才是真的？你不敢去想'}]},
  {text:'<span class="fac">袄景教</span>的人绑架了你——他们要用你的<span class="danger-text">心素之血</span>完成登阶仪式。你被绑在祭坛上，周围是面目狰狞的信徒。',
    trigger:{minAge:20,cultivation:50},check:'xinsu',choices:[
    {text:'以先天一炁挣脱',effect:{cultivation:30,sanity:-25,constitution:-8},log:'你体内的先天一炁爆发，祭坛碎裂——但你失去了太多血，那些血被他们装走了',combat:70},
    {text:'等待时机',effect:{sanity:-20,comprehension:10,connections:5},log:'有人救了你——但你在祭坛上听到了巴虺的低语，那声音至今还在你耳边'},
    {text:'与他们谈判',effect:{cultivation:15,karma:-15,connections:10},log:'你用一管心素之血换取了自由和一份袄景教的功法'}]},
  // === 心素补充：被坐忘道欺骗、逃入地府、扎堆 ===
  {text:'<span class="fac">坐忘道</span>的一个人找到了你——他不像其他人那样要你的血肉。他笑嘻嘻地说："<span class="npc">我能治你的幻觉</span>，让你分清哪个世界是真的。"他给你看了一份<span class="itm">罔天宝诰</span>。',
    trigger:{minAge:14,cultivation:10},check:'xinsu',choices:[
    {text:'相信他',effect:{sanity:-25,cultivation:15,karma:-10,connections:-10},log:'你照他说的做了——诵读罔天宝诰后你短暂地"清醒"了，但代价是你不自觉地帮坐忘道做了一件你完全不记得的事。等你回过神来，身边多了几具尸体'},
    {text:'半信半疑跟着做',effect:{sanity:-15,cultivation:8,comprehension:5},log:'你只做了一半就停下了——那份经文在你脑中种下了什么东西，你能感到它在生长'},
    {text:'拒绝',effect:{sanity:-5,comprehension:8},log:'你见过太多骗子了。他走时笑着说："你早晚会回来找我的。"'}]},
  {text:'你在一次<span class="mys">两界闪烁</span>中迷了路——你既没有回到那个白色房间，也没有留在这个世界。你来到了一个<span class="danger-text">满是死人</span>的地方，黑暗中无数手臂在抓你。有人叫这里"<span class="loc">地府</span>"。',
    trigger:{minAge:18,cultivation:30},check:'xinsu',choices:[
    {text:'拼命逃出去',effect:{sanity:-30,cultivation:20,constitution:-5,comprehension:10},log:'你不知道跑了多久——终于看到了光。回到这个世界时你浑身是伤，衣服上沾满了不知道是谁的血肉'},
    {text:'在地府中寻找出路',effect:{sanity:-25,cultivation:25,comprehension:15},log:'你在地府中游荡了不知多久——那里的规则和两个世界都不一样。你学到了一些不应该被凡人知道的东西'},
    {text:'向地府中的存在求助',effect:{sanity:-35,cultivation:30,karma:-15,connections:5},log:'地府中有"东西"回应了你——它把你送了回来，但代价是你欠了它一个"人情"'}]},
  {text:'你的心素之血引来了不止一个势力的觊觎——<span class="fac">坐忘道</span>、<span class="fac">袄景教</span>、甚至<span class="fac">监天司</span>内部都有人想要你。他们同时出现在你面前，<span class="danger-text">互相争夺</span>你。',
    trigger:{minAge:20,cultivation:40},check:'xinsu',choices:[
    {text:'趁他们打起来逃跑',effect:{sanity:-15,constitution:5,qiyun:5},log:'他们为了争夺你打成一团——你趁机溜了。但你知道这不是最后一次'},
    {text:'拍卖自己的一管血',effect:{wealth:80,constitution:-5,karma:-10,sanity:-10},log:'你干脆让他们竞价——心素之血最终被袄景教以天价买走。你活了下来，但感觉自己是个货物'},
    {text:'以先天一炁吓退他们',effect:{cultivation:20,sanity:-20,connections:-15},log:'你释放了体内的先天一炁——爆发的力量让他们全部后退。但他们不会放弃的'}]},
  {text:'你无意中把<span class="mys">幻觉修真了</span>——你昨晚梦见的一把剑，醒来时竟然出现在枕边。它是实在的，能砍东西。但你完全不记得自己什么时候"做"了它。',
    trigger:{minAge:16},check:'xinsu',choices:[
    {text:'把剑留下研究',effect:{cultivation:10,comprehension:10,sanity:-15},log:'这把剑确实存在，但它的材质不属于这个世界的任何东西。以假修真……你的能力在你无意识时就会发动'},
    {text:'赶紧扔掉',effect:{sanity:-10,karma:3},log:'你把剑扔进了河里——但你害怕了。如果你梦见了一个怪物呢？它也会出现吗？'},
    {text:'尝试主动修真其他东西',effect:{cultivation:15,sanity:-20,comprehension:8},log:'你想象了一枚金币——它出现了。你想象了一朵花——它也出现了。你想象了你死去的亲人……什么都没出现。以假修真，修不出有灵魂的东西'}]},
  {text:'你的<span class="mys">先天一炁</span>不受控制地涌出体外——你身边的人开始看到<span class="danger-text">幻觉</span>。有人看到了死去的亲人，有人看到了不存在的怪物。整条街陷入了混乱。',
    trigger:{minAge:22,cultivation:50},check:'xinsu',choices:[
    {text:'拼命收回先天一炁',effect:{sanity:-20,cultivation:10,constitution:-3},log:'你花了整整一天才收回失控的力量。但已经有三个人疯了——他们看到的幻觉太过真实'},
    {text:'利用这次机会感悟以假修真',effect:{cultivation:25,sanity:-30,comprehension:15,karma:-10},log:'你没有收回力量，而是观察它是如何影响现实的。你的领悟大增，但街上多了十几个疯子'},
    {text:'逃离人群',effect:{sanity:-10,connections:-15},log:'你慌忙逃走——从此你不敢在人多的地方久留。你的存在本身就是一种灾难'}]},
  {text:'<span class="fac">坐忘道</span>设了一个精心的局——他们利用你心素的弱点，让你在<span class="mys">两界之间</span>来回跳转直到神志崩溃。他们想在你最脆弱时取走你的<span class="danger-text">脊椎</span>，那是心素之体最值钱的部分。',
    trigger:{minAge:25,cultivation:60},check:'xinsu',choices:[
    {text:'以假修真一面墙挡住他们',effect:{cultivation:20,sanity:-25,comprehension:10},log:'你在绝望中以假修真了一面铁墙——它真的出现了，挡住了坐忘道的人。你逃了出来，但整整三天分不清自己在哪个世界'},
    {text:'在两界跳转中找到规律',effect:{cultivation:30,sanity:-35,comprehension:20},log:'你没有崩溃——反而在不断的跳转中悟到了两界的某种规律。坐忘道的人震惊了，他们没想到你能扛住'},
    {text:'向另一个世界的人求助',effect:{sanity:-30,connections:10,cultivation:15},log:'你对着虚空大喊——那边的"医生"听到了，他们做了什么让你稳定了下来。你不知道他们做了什么，但你还活着'}]},
  // === 心浊专属：遗忘与空间 ===
  {text:'你在睡梦中<span class="mys">遗忘</span>了什么——醒来后你发现床边多了一个你从没见过的包袱。打开一看，里面是你<span class="danger-text">完全不记得</span>的物品。',
    trigger:{minAge:8},check:'xin_zhuo',choices:[
    {text:'努力回忆',effect:{sanity:-15,comprehension:10},log:'你拼命回想——脑中出现了片段：你把什么东西"藏"了起来。但藏去了哪里？'},
    {text:'把包袱收好',effect:{sanity:-5,wealth:10},log:'不管了，东西是好东西就行。但你心底有种说不出的恐惧——你到底还遗忘了什么？'}]},
  {text:'你和朋友聊天时提到了一个人名——对方露出困惑的表情："<span class="danger-text">谁？我们从来没有这个朋友。</span>"但你清楚地记得他。',
    trigger:{minAge:12},check:'xin_zhuo',choices:[
    {text:'去寻找那个人',effect:{sanity:-20,comprehension:10,connections:-5},log:'你找遍了所有地方——那个人不存在。或者说，那个人被你"藏起来"了。他在另一个空间里，可能还活着...'},
    {text:'也许是我记错了',effect:{sanity:-10},log:'你选择相信朋友。但夜里你做了个梦——那个人在一片虚空中喊你的名字'},
    {text:'检查自己的记忆',effect:{sanity:-15,comprehension:15},log:'你发现记忆中有很多"空洞"——像是有东西被挖走了。你到底藏了多少东西？'}]},
  {text:'你的<span class="mys">头发</span>被一个修士看中了——他说心浊的头发能强化法器对空间的干扰力，价值连城。他愿意出<span class="itm">天价</span>购买。',
    trigger:{minAge:14},check:'xin_zhuo',choices:[
    {text:'卖一些给他',effect:{wealth:60,constitution:-3,sanity:-5},log:'他小心翼翼地收好你的头发——你感到身体有一部分被带走了'},
    {text:'拒绝',effect:{connections:-5,sanity:5},log:'他走时眼中的贪婪让你不寒而栗——和心素一样，心浊也是被争夺的猎物'},
    {text:'反问他心浊到底是什么',effect:{comprehension:15,sanity:-10},log:'他说："心浊能用心中的业障污染周遭的一切——你能把一切藏起来，包括自己。"'}]},
  {text:'你情绪激动时——周围的东西开始<span class="mys">消失</span>。一棵树不见了，一块石头不见了，最后你面前的人也<span class="danger-text">凭空消失</span>了。',
    trigger:{minAge:16,cultivation:20},check:'xin_zhuo',choices:[
    {text:'拼命把他们找回来',effect:{sanity:-25,cultivation:15,comprehension:10,connections:-10},log:'你花了三天才把他"吐"出来——他从虚空中跌落，惊魂未定。你知道了：你的业障在失控'},
    {text:'学会控制这种力量',effect:{cultivation:20,comprehension:15,sanity:-15},log:'你开始练习如何有意识地"藏"和"取"——但每次使用，你都会遗忘一些东西作为代价'},
    {text:'封印自己的情绪',effect:{sanity:-10,connections:-15,comprehension:5},log:'你变得冷漠寡言，不敢和任何人亲近——因为你怕一不小心就把他们"藏"没了'}]},
  {text:'你开始<span class="danger-text">遗忘自己的年龄</span>。照镜子时你不知道自己是二十岁还是四十岁——面容在年轻和衰老之间模糊不定。',
    trigger:{minAge:25,cultivation:40},check:'xin_zhuo',choices:[
    {text:'用刻字记录一切',effect:{sanity:-15,comprehension:10},log:'你在手臂上刻下了自己的年龄和名字——但第二天你发现字迹已经模糊，因为你把自己的记忆也藏起来了一部分'},
    {text:'顺其自然',effect:{cultivation:15,sanity:-10,constitution:5},log:'也许遗忘就是心浊的宿命。你把年龄也藏进了那个空间——从此你不再衰老，但代价是你越来越不知道"自己是谁"'},
    {text:'向高人求助',effect:{connections:10,wealth:-30,sanity:-5},log:'高人说："心浊到最后，会把自己也藏起来——连雌雄都分不清。"'}]},
  {text:'两个心浊<span class="danger-text">靠近</span>了——你遇到了另一个心浊。你们站在一起的瞬间，方圆百丈内的一切开始<span class="mys">被吞噬</span>：树木、房屋、行人，全部被拉入虚空。',
    trigger:{minAge:20,cultivation:60},check:'xin_zhuo',choices:[
    {text:'联手控制业障',effect:{cultivation:40,sanity:-30,comprehension:20,connections:15},log:'你们拼尽全力才稳住了局面——但那个心浊告诉你："生死心浊碰到一起，连司命化身都能伤到。我们是最危险的存在。"'},
    {text:'立刻分开',effect:{sanity:-15,cultivation:10},log:'你转身就跑——身后的虚空还在吞噬着一切。你们绝不能再靠近'},
    {text:'试着与另一个心浊交流',effect:{comprehension:20,sanity:-20,connections:10},log:'对方说他/她已经忘记了大半辈子的事，连自己的名字都不确定了。你看到了自己的未来，不寒而栗'}]},
  {text:'你发现自己<span class="danger-text">忘记了自己的性别</span>——镜中的面容亦男亦女，模糊不清。心浊的业障已经开始侵蚀你最核心的自我。',
    trigger:{minAge:30,cultivation:80},check:'xin_zhuo',choices:[
    {text:'用一件珍贵之物锚定自我',effect:{cultivation:25,sanity:-20,comprehension:15,wealth:-50},log:'你把最珍贵的记忆绑在一件实物上——只要那件东西还在，你就不会完全遗忘自己'},
    {text:'接受心浊的命运',effect:{cultivation:50,sanity:-35,comprehension:25},log:'你放弃了抵抗——性别、年龄、名字、过去，一切都被藏进了那个空间。你变成了"纯粹的心浊"，力量暴涨，但自我几乎消失'},
    {text:'以天道之力对抗业障',effect:{cultivation:35,sanity:10,comprehension:15,karma:-10},log:'你找到了暂时的平衡——但你知道这只是延缓，心浊的遗忘终究会吞噬一切'}]},
  // === 心浊补充：空间失控、业障扩散、被利用 ===
  {text:'你醒来后发现自己在一个完全陌生的地方——你不记得自己是怎么到这里的。更可怕的是，你身边散落着你<span class="danger-text">不认识的物品</span>和一封写着你名字的信。信上说："你把自己的昨天藏起来了。"',
    trigger:{minAge:10},check:'xin_zhuo',choices:[
    {text:'读完信试图回忆',effect:{sanity:-15,comprehension:8},log:'你拼命回忆——只有碎片。你确实做了些什么，但全都被心浊的业障吞噬了'},
    {text:'不管了继续前行',effect:{sanity:-5,constitution:3},log:'你开始习惯这种生活。每天醒来都像是新的一天——因为你确实记不清昨天'}]},
  {text:'你的心浊之力在<span class="danger-text">梦中失控</span>了——你把自己的梦境"藏"进了现实。醒来后，你的房间里多了一棵从未见过的黑色树，树上挂满了你遗忘的<span class="mys">记忆碎片</span>。',
    trigger:{minAge:15,cultivation:15},check:'xin_zhuo',choices:[
    {text:'触碰记忆碎片',effect:{sanity:-20,comprehension:15,cultivation:10},log:'你看到了被遗忘的过去——有些温暖，有些恐怖。你不确定这些记忆该不该被找回来'},
    {text:'砍掉黑树',effect:{cultivation:8,sanity:-10,constitution:-3},log:'你砍下了树——记忆碎片碎裂消散。那些过去彻底消失了。但树根还在地下，它会再长出来'},
    {text:'把树也"藏"起来',effect:{cultivation:15,sanity:-15},log:'你用心浊之力把整棵树连同记忆都藏进了虚空。问题解决了？不，问题只是被你藏起来了'}]},
  {text:'有人发现了你心浊的秘密——一个<span class="npc">修士</span>专门来找你，要你帮他<span class="mys">"藏"一个人</span>。他愿意付出天价。',
    trigger:{minAge:18,cultivation:25},check:'xin_zhuo',choices:[
    {text:'拒绝',effect:{connections:-5,sanity:5},log:'把活人藏进虚空——谁知道那人在里面会怎样？你不干这种事'},
    {text:'收钱帮忙',effect:{wealth:60,karma:-20,cultivation:10,sanity:-15},log:'你把那个人"藏"进了虚空。对方满意地付了钱。但你夜里做了噩梦——虚空中那人在尖叫'},
    {text:'假装答应后报官',effect:{connections:10,karma:10,sanity:-5},log:'你把事情告诉了监天司。他们抓了那个人——但你也暴露了自己是心浊的事实'}]},
  {text:'你的心浊业障开始<span class="danger-text">影响周围的人</span>——和你接触时间长的人也开始遗忘。你最亲近的人忘记了你们共同的回忆。',
    trigger:{minAge:20,cultivation:35},check:'xin_zhuo',choices:[
    {text:'远离所有人',effect:{connections:-20,sanity:-15,cultivation:10},log:'你离开了所有亲近的人——你不想让他们也被遗忘吞噬。从此你独来独往'},
    {text:'寻找控制业障的方法',effect:{comprehension:15,cultivation:8,wealth:-30},log:'你花了大量钱财求医问药——有人说三清掌管的"秘密"天道可以对抗心浊的遗忘，但三清已不存在'},
    {text:'接受这就是心浊的宿命',effect:{cultivation:15,sanity:-10,connections:-10},log:'你开始理解闻人诡为什么总是独自一人——心浊注定孤独'}]},
  {text:'你在极度情绪波动中把一<span class="danger-text">整片区域</span>藏进了虚空——树木、房屋、行人，一切都消失了。等你冷静下来，面前只剩一片空地。',
    trigger:{minAge:25,cultivation:50},check:'xin_zhuo',choices:[
    {text:'拼命把一切吐回来',effect:{sanity:-30,cultivation:15,constitution:-5},log:'你用了三天三夜才把那些东西和人从虚空中"吐"回来——大部分人还活着，但他们的记忆被清空了'},
    {text:'封印自己的情绪',effect:{sanity:-15,connections:-20,comprehension:10},log:'你用法力在自己心上设了一道封印——从此你再也无法感受强烈的情绪。这是唯一安全的办法'},
    {text:'研究这股力量的极限',effect:{cultivation:25,sanity:-25,comprehension:15},log:'你意识到你的空间之力远超想象——闻人诡说得对，两个心浊碰到一起能伤到司命化身'}]},
  // === 白化病专属：白莲教圣女之路与被觊觎 ===
  {text:'你从小就因为<span class="danger-text">白发红瞳</span>被村里人嘲笑和排挤——他们叫你"妖怪""不祥之人"。只有母亲说："我们家的人，生来就不一样。"',
    trigger:{minAge:6,maxAge:14},check:'bai_hua',choices:[
    {text:'忍受',effect:{sanity:-10,constitution:3,karma:5},log:'你学会了低头走路，不和任何人对视。但夜里你对着水面看自己的红瞳——为什么我生来如此？'},
    {text:'打回去',effect:{sanity:-5,constitution:5,connections:-10},log:'你和欺负你的人打了一架。赢了，但他们更加疏远你了'},
    {text:'躲起来不出门',effect:{sanity:-15,comprehension:5},log:'你开始害怕人群，害怕别人的目光'}]},
  {text:'一群<span class="fac">白莲教</span>的人来到你家——他们看到你时眼睛亮了："<span class="mys">白发红瞳</span>……这是<span class="npc">无生老母</span>的标记！你有成为<span class="itm">圣女</span>的资质！"',
    trigger:{minAge:12,maxAge:22},check:'bai_hua',choices:[
    {text:'跟他们走',effect:{cultivation:15,connections:20,sanity:-5,karma:5},log:'白莲教的人对你毕恭毕敬——在这里，你的白化病不是诅咒，而是圣恩。你第一次感到被需要'},
    {text:'拒绝',effect:{connections:-5,sanity:5},log:'他们离开了，但临走时说："无生老母会再来找你的。"'},
    {text:'问他们圣女要做什么',effect:{comprehension:10,sanity:-5},log:'他们说圣女是无生老母在人间的代言人，要以慈悲渡化众生。但你看到他们眼中的狂热——这和慈悲无关'}]},
  {text:'你的白化体质被修士发现——他说你的<span class="danger-text">血液</span>和<span class="danger-text">毛发</span>是炼制特殊法器的珍贵材料："不如心素值钱，但也是上等货色。"',
    trigger:{minAge:15},check:'bai_hua',choices:[
    {text:'逃跑',effect:{sanity:-10,constitution:3},log:'你再一次为自己的身体而逃命——和心素一样，白化之人在这个世界也不安全'},
    {text:'和他谈条件',effect:{wealth:40,constitution:-3,karma:-5},log:'你卖了一管血和几缕头发。代价不大，但你感到恶心——把自己当货物卖'},
    {text:'求助白莲教',effect:{connections:15,cultivation:5},log:'白莲教的人赶来保护了你——"圣女之体岂容亵渎！"但你知道，他们的保护也是另一种控制'}]},
  {text:'<span class="fac">白莲教</span>中有人对你说出了一个秘密：历代<span class="itm">圣女</span>最终都会成为<span class="npc">无生老母</span>的<span class="mys">心蟠</span>——慈悲天道的因缘。这是白化之人的<span class="danger-text">宿命</span>。',
    trigger:{minAge:20,cultivation:40},check:'bai_hua',choices:[
    {text:'接受这个宿命',effect:{cultivation:25,karma:15,sanity:-15,comprehension:10},log:'如果白化病是无生老母留下的标记，那也许这一切痛苦都有意义——你开始认真修行慈悲之道'},
    {text:'抗拒宿命',effect:{cultivation:10,sanity:-10,connections:-15},log:'你不想当任何人的棋子——你逃离了白莲教，但那些白发红瞳在人群中太过显眼'},
    {text:'深入了解无生老母',effect:{comprehension:20,cultivation:15,sanity:-10},log:'你查阅了大量典籍——无生老母是掌管慈悲的司命，白灵淼是她最有名的心蟠。白化病不是病，是与慈悲天道的共鸣'}]},
  {text:'你做了一个梦——梦中<span class="npc">无生老母</span>的声音温柔而悲悯："<span class="mys">我的孩子，你受苦了。</span>"你感到全身被温暖包裹，白发在月光下发出淡淡的光。',
    trigger:{minAge:25,cultivation:60},check:'bai_hua',choices:[
    {text:'向无生老母祈祷',effect:{cultivation:30,karma:20,sanity:15,comprehension:10},log:'你感到慈悲之力涌入体内——白化病带来的一切痛苦似乎都在被治愈。不是身体，是心'},
    {text:'保持警惕',effect:{comprehension:15,sanity:-5,cultivation:10},log:'司命的慈悲……真的是慈悲吗？你不敢完全信任'},
    {text:'哭出来',effect:{sanity:20,karma:10},log:'你跪在月光下哭了很久——这么多年，第一次有"人"对你说"你受苦了"'}]},
  {text:'你在一间废弃的老屋中发现了一个<span class="itm">暗格</span>——里面藏着一把<span class="itm">赊刀</span>和大量<span class="fac">监天司</span>的秘密档案。这是某位<span class="npc">赊刀人</span>的藏身处。',
    trigger:{minAge:16,yearMin:0,yearMax:25},choices:[
    {text:'仔细翻阅档案',effect:{comprehension:15,cultivation:10,connections:10,sanity:-10},log:'档案中记载着各地邪祟的详细信息和应对之法——其中一些邪祟就在你附近'},
    {text:'只取赊刀',effect:{cultivation:15,sanity:5},log:'赊刀入手冰凉，刀身上隐约有符文流转',item:'she_dao'},
    {text:'原封不动离开',effect:{qiyun:5,karma:5},log:'这些东西不该被外人触碰'}]},
  {text:'夜间你在荒野中看到数十人围成一圈，面戴<span class="itm">傩面</span>，进行着一场<span class="mys">大傩仪式</span>。他们的舞步诡异而庄严，空气中弥漫着烧纸的气味。',
    trigger:{minAge:20,cultivation:40},choices:[
    {text:'戴上傩面加入',effect:{cultivation:30,sanity:-25,comprehension:15,qiyun:-10},log:'你戴上面具的瞬间感到人格在分裂——但在疯狂的边缘，你窥见了大傩的力量'},
    {text:'在暗处观察',effect:{comprehension:10,sanity:-15,cultivation:10},log:'你看到他们的舞步似乎在改变着什么——空间在扭曲，时间在流逝'},
    {text:'大声喝止',effect:{sanity:-10,connections:-5,constitution:-3},log:'所有傩面同时转向你——那一刻你感到了死亡的注视'}]},
  {text:'天地间忽然传来一声<span class="danger-text">闷响</span>——你抬头看到天空裂开了一条缝，缝里透出一张巨大的、模糊的<span class="npc">脸</span>。有人尖叫着跪下说那是<span class="npc">季灾</span>。那张脸的嘴唇动了动，虽然没有声音，但你脑子里突然冒出一句话："<span class="mys">迷惘即是清醒，清醒即是迷惘。</span>"然后天空合上了。',
    trigger:{minAge:25,cultivation:80,yearMin:20,yearMax:45},choices:[
    {text:'被这句话搅得几天睡不着',effect:{cultivation:40,comprehension:25,sanity:-20},log:'你翻来覆去想那句话——什么是迷惘？什么是清醒？你越想越觉得自己才是那个疯的人'},
    {text:'跟其他人一起跪',effect:{cultivation:15,sanity:5,qiyun:10},log:'管它什么意思——天上的那张脸是季灾的，就是那个一个人顶着天道的疯子。你跪了，因为不跪你怕他看你'},
    {text:'吓得瘫在地上',effect:{sanity:-15},log:'你这辈子没见过这种东西——天上出现一张脸对你说话。你当场就软了'}]},
  {text:'大地震颤，<span class="loc">龙眠泽</span>方向传来龙吟之声——一条<span class="mys">龙脉</span>正在苏醒！龙气冲天而起，方圆百里的修士都感受到了那股秩序之力。',
    trigger:{minAge:20,cultivation:60,yearMin:15,yearMax:30},choices:[
    {text:'前往龙眠泽吸收龙气',effect:{cultivation:35,constitution:10,comprehension:10,sanity:-10},log:'龙气入体，你感到自身的秩序在被重塑——这股力量远超你的想象！',req:{constitution:30}},
    {text:'远远感应龙脉',effect:{cultivation:15,comprehension:10},log:'你在远处感应到了龙脉的脉动，虽然微弱，但足以让你受益匪浅'},
    {text:'避开龙脉苏醒区域',effect:{sanity:5},log:'龙脉苏醒必引来各方势力争夺，你不想被卷入'}]},
  {text:'你在路上遇到一位<span class="npc">赊刀人</span>，他递给你一把刀说："此刀赊你，等<span class="mys">天下大乱</span>时来收。"说罢飘然而去。',
    trigger:{minAge:15,maxAge:40,yearMin:0,yearMax:20},choices:[
    {text:'接下赊刀',effect:{cultivation:10,qiyun:10,connections:5,sanity:-5},log:'你拿着这把来路不明的刀，心中既忐忑又好奇——天下大乱…是什么时候？',item:'she_dao'},
    {text:'追问他是何人',effect:{comprehension:8,connections:5},log:'他头也不回地说了三个字："监天司。"'},
    {text:'拒绝接刀',effect:{sanity:5},log:'无功不受禄，何况是一把来历不明的刀'}]},
];

// Faction-specific events
export const FACTION_EVENTS = {
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
    // === 坐忘道·非罡诈骗剧情 ===
    {text:'掌教授意你前往一座小城，冒充<span class="fac">监天司</span>的巡察使，以"<span class="danger-text">缴纳驱邪税</span>"为名敛取<span class="mys">非罡</span>。百姓对"监天司"言听计从。',choices:[
      {text:'照办不误，大肆敛财',effect:{wealth:40,connections:-5,karma:-15,cultivation:15},log:'你骗了整座城的百姓，非罡源源不断流入坐忘道——但你心里不太好受'},
      {text:'只骗富户，放过穷人',effect:{wealth:20,karma:-5,cultivation:10,qiyun:5},log:'你选择性地下手，掌教说你"手法尚可，心肠太软"'},
      {text:'暗中放消息给真正的监天司',effect:{connections:10,karma:10,qiyun:10,sanity:-10},log:'你把坐忘道的计划透露了出去——但你在坐忘道的地位岌岌可危',setFlag:'betray_zuowang_jts'}]},
    {text:'你被指派去<span class="fac">正德寺</span>附近设局——以"<span class="danger-text">佛门高僧开光</span>"为名义，向信众兜售假法器，从中<span class="mys">敛取非罡</span>。',choices:[
      {text:'化妆成和尚行骗',effect:{wealth:30,cultivation:15,karma:-20,sanity:-10},log:'你剃了头套上袈裟，在寺门外卖假开光法器。信众们虔诚地掏出积蓄——你把他们的信仰变成了坐忘道的养料'},
      {text:'改为骗富商',effect:{wealth:25,cultivation:10,karma:-10,connections:5},log:'你觉得骗穷苦信众太缺德，转而设局骗了几个大商人'},
      {text:'找个理由推掉',effect:{connections:-15,qiyun:5},log:'你推说佛门有高手看守，完不成任务。掌教冷笑一声，没说什么'}]},
    {text:'坐忘道收到情报：一支<span class="fac">罗教</span>弟子正在押送一批<span class="itm">七星铜钱剑</span>。掌教要你带人半路截杀，将法器据为己有——"<span class="mys">非罡在于掠夺，不限于欺骗。</span>"',choices:[
      {text:'伏击罗教队伍',effect:{cultivation:20,karma:-20,connections:-10,constitution:-5},log:'一场血战，你击败了罗教弟子。铜钱剑被你夺走——但你在罗教已成了必杀之人',combat:60},
      {text:'只抢货不杀人',effect:{cultivation:15,karma:-10,connections:-5},log:'你用坐忘之术迷惑了押送队伍，趁乱夺走了法器。罗教弟子醒来后一脸茫然',combat:40},
      {text:'放罗教弟子走，谎称没找到人',effect:{karma:10,connections:-15,comprehension:5},log:'你向掌教谎报说罗教改了路线。坐忘道的人对你起了疑心'}]},
    {text:'你在<span class="fac">坐忘道</span>内部发现了一个秘密——高层之间流传着一种叫"<span class="mys">非罡回流</span>"的修炼法：将敛取的非罡在自身体内转化为<span class="danger-text">真罡</span>。但据说转化失败会直接走火入魔。',choices:[
      {text:'冒险尝试非罡回流',effect:{cultivation:40,sanity:-30,comprehension:20,constitution:-10},log:'你将体内积攒的非罡强行转化——那一刻你感受到了斗姥的真假天道的本质：非罡与真罡本就没有区别，区别只在于你信不信'},
      {text:'向掌教请教',effect:{cultivation:20,comprehension:15,connections:10},log:'掌教难得露出赞赏的表情："你终于开始像个坐忘道的人了。"他传授了你一些非罡回流的要诀'},
      {text:'太危险了，放弃',effect:{sanity:5,cultivation:5},log:'你决定不冒这个险。有些东西还是保命要紧'}]},
    {text:'<span class="fac">坐忘道</span>掌教亲自给你派了一个大任务：渗透<span class="fac">白莲教</span>，利用白莲教信众的虔诚来<span class="mys">大规模敛取非罡</span>。"<span class="danger-text">信仰最盛处，非罡最易得。</span>"',choices:[
      {text:'潜入白莲教卧底',effect:{connections:15,cultivation:20,karma:-15,sanity:-15},log:'你以信众身份混入白莲教，开始在祈祷仪式上暗中引导信众的精神力流向坐忘道。无生老母的信徒们毫无察觉',setFlag:'zuowang_spy_bailian'},
      {text:'答应但暗中两头吃',effect:{wealth:30,connections:10,karma:-10,qiyun:-10},log:'你两头骗——一边向坐忘道交差，一边在白莲教也混得风生水起。但你知道这迟早要露馅'},
      {text:'拒绝：底线不能丢',effect:{connections:-20,karma:5,qiyun:10},log:'掌教盯着你看了很久，说了一句："这就是你坐忘不了的东西。"你分不清这是讽刺还是惋惜'}]},
  ],
  jiantian: [
    {text:'<span class="fac">监天司</span>派你去调查一桩<span class="mys">灵异命案</span>。',choices:[
      {text:'深入调查',effect:{cultivation:15,sanity:-15,wealth:20,comprehension:5},log:'真相令人不寒而栗'},{text:'草草了事',effect:{connections:-10},log:'上司对你很失望'}]},
    {text:'<span class="fac">监天司</span>要提拔你为己监丞，但需要你处置一个无辜的人。',choices:[
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
  luo_jiao: [
    {text:'<span class="fac">罗教</span>长老命你持<span class="itm">七星铜钱剑</span>前往<span class="loc">阴气汇聚之地</span>驱邪。一百八十四枚铜钱叮当作响，邪祟无处遁形。',choices:[
      {text:'以铜钱剑镇压邪祟',effect:{cultivation:20,sanity:-10,comprehension:8,karma:10},log:'七星铜钱剑大放光芒，邪祟被尽数驱散'},
      {text:'先布阵再驱邪',effect:{cultivation:15,comprehension:12,sanity:-5},log:'你以罗教阵法困住邪祟，再以铜钱剑逐一斩灭，稳扎稳打'}]},
    {text:'<span class="fac">罗教</span>与<span class="fac">坐忘道</span>就"道"的本质产生了激烈争论。坐忘道认为"忘却即为道"，而罗教主张"平和守正方为道"。两派弟子剑拔弩张。',choices:[
      {text:'挺身辩论',effect:{comprehension:15,connections:10,cultivation:5},log:'你引经据典、据理力争，令坐忘道弟子一时语塞'},
      {text:'建议各退一步',effect:{connections:15,qiyun:5,karma:5},log:'你调和两派矛盾，暂时化解了冲突'},
      {text:'冷眼旁观',effect:{comprehension:5},log:'门派之争由来已久，你不愿趟这浑水'}]},
    {text:'你在翻阅古籍时发现了<span class="npc">罗祖</span>留下的一处<span class="loc">秘境入口</span>的线索。传闻秘境中藏有罗祖毕生参悟的<span class="mys">大阵心得</span>。',choices:[
      {text:'独自前往探索',effect:{cultivation:25,comprehension:15,sanity:-12,constitution:-5},log:'你在秘境中找到了罗祖的阵法手稿，修为与悟性大增！'},
      {text:'禀告长老共同前往',effect:{connections:15,cultivation:10,comprehension:8},log:'长老带你进入秘境，你在其中收获颇丰，且安全返回'},
      {text:'封存线索',effect:{karma:5,qiyun:3},log:'时机未到，你将线索妥善保存'}]},
  ],
  nanjiang: [
    {text:'<span class="fac">南疆巫族</span>的长老带你深入<span class="loc">毒沼</span>，让你亲手培育一只新的<span class="itm">蛊虫</span>。百虫争食之中，最强者方可存活。',choices:[
      {text:'精心培育蛊虫',effect:{cultivation:20,constitution:5,sanity:-10,comprehension:8},log:'你的蛊虫在争斗中脱颖而出，与你心神相连'},
      {text:'以自身血液喂养',effect:{cultivation:25,constitution:-8,sanity:-15},log:'你以鲜血培育的蛊虫异常凶猛，但你也付出了代价'}]},
    {text:'你培育的<span class="danger-text">蛊虫突然暴走</span>，疯狂地啃噬你的经脉！这是蛊虫反噬之兆——若不能压制，你将被万蛊吞噬。',choices:[
      {text:'以巫术强行压制',effect:{cultivation:15,constitution:-10,sanity:-15},log:'你拼尽全力压制了蛊虫，但身体遭受了严重损伤'},
      {text:'与蛊虫沟通共鸣',effect:{cultivation:20,comprehension:10,sanity:-8},log:'你以心神与蛊虫对话，它终于安静下来——你们之间的契约更深了',req:{comprehension:25}},
      {text:'放弃这只蛊虫',effect:{cultivation:-10,constitution:5,sanity:5},log:'你忍痛放弃了蛊虫，重新来过'}]},
    {text:'<span class="fac">南疆巫族</span>长老告诉你，深入<span class="loc">瘴气腹地</span>有一株<span class="itm">千年毒莲</span>，是炼制至上蛊毒的关键材料。但瘴气中潜伏着无数凶险。',choices:[
      {text:'只身深入瘴气',effect:{cultivation:25,constitution:-10,sanity:-12,comprehension:10},log:'你在瘴气中九死一生，终于找到了千年毒莲！',req:{constitution:30}},
      {text:'组队前往',effect:{cultivation:15,connections:10,constitution:-5},log:'队友们帮你分担了不少风险，但收获也要分享'},
      {text:'放弃这次机会',effect:{sanity:5},log:'你不愿拿命去赌'}]},
    {text:'<span class="fac">南疆巫族</span>内部发生<span class="danger-text">权力争斗</span>——两位大蛊师为了巫王之位各不相让，各自驱使蛊虫大军对峙。',choices:[
      {text:'支持你的师父',effect:{connections:15,cultivation:10,qiyun:-5,constitution:-3},log:'你在斗争中站队成功，但另一方的人对你恨之入骨'},
      {text:'趁乱夺权',effect:{cultivation:20,connections:-20,sanity:-10,qiyun:-10},log:'你利用双方混战之际展示了压倒性的蛊术，众人惊惧'},
      {text:'远离争斗',effect:{connections:-5,sanity:5},log:'你暂时离开部族，等风波平息后再回来'}]},
  ],
  bingjia: [
    {text:'你修炼<span class="fac">兵家</span>之法日久，体内煞气积累到了<span class="danger-text">临界点</span>。血管暴突如蚯蚓，皮肤泛红如烧铁，随时可能爆发。',choices:[
      {text:'以血涂抹兵书突破',effect:{cultivation:30,constitution:-10,sanity:-15,karma:-10},log:'你割破手掌，将鲜血涂满兵书——煞气冲击之下，你的体型膨胀了一倍！'},
      {text:'静心调息压制',effect:{cultivation:10,constitution:5,comprehension:8},log:'你勉强压制了煞气，但知道这不是长久之计'}]},
    {text:'<span class="itm">兵书</span>在你入睡时自行翻开，书页上的文字化为<span class="danger-text">血色光芒</span>——兵书在索要更多的血！你感到一股强大的意志在催促你献血。',choices:[
      {text:'割腕献血',effect:{cultivation:25,constitution:-15,sanity:-10,karma:-8},log:'兵书贪婪地吸收你的鲜血，新的一页浮现出强大的兵法'},
      {text:'以他人之血代替',effect:{cultivation:20,karma:-25,connections:-10,qiyun:-15},log:'你猎杀了一头猛兽，以兽血喂养兵书...但兵书似乎更渴望人血'},
      {text:'强行封印兵书',effect:{cultivation:-15,sanity:10,constitution:5},log:'你将兵书封入石匣，暂时摆脱了它的控制'}]},
    {text:'一群<span class="danger-text">山匪</span>袭击了附近的村庄。你感到体内煞气翻涌——<span class="fac">兵家</span>的战斗本能被激活了。',choices:[
      {text:'释放煞气冲击！',effect:{cultivation:20,constitution:8,sanity:-15,karma:5,connections:15},log:'你的体型暴涨三倍，煞气化为实质性的冲击波！山匪被吓得魂飞魄散！',combat:80},
      {text:'以常规武力击退',effect:{cultivation:10,constitution:3,connections:10},log:'你没有动用兵家秘法，以纯粹的武力打退了山匪',combat:50},
      {text:'不参与',effect:{karma:-5,connections:-5},log:'你压制住战斗冲动，眼睁睁看着村庄被劫掠'}]},
    {text:'你在修炼兵书时发现了一个<span class="danger-text">可怕的秘密</span>——兵家之法以血为引，每次修炼都在消耗你的<span class="mys">寿命</span>。煞气越强，寿命流逝越快。',choices:[
      {text:'继续修炼不惧生死',effect:{cultivation:30,constitution:-10,sanity:-5,comprehension:10},log:'知道了又如何？力量才是一切！你疯狂地将血涂满兵书'},
      {text:'寻找不消耗寿命的修炼法',effect:{comprehension:15,cultivation:5,sanity:-5},log:'你开始研究如何用其他方式驱动兵书，但收效甚微'},
      {text:'放弃兵家之法',effect:{faction:'none',cultivation:-20,constitution:10,sanity:10},log:'你将兵书封存，脱离了兵家——活着比什么都重要'}]},
  ],
  fomen: [
    {text:'你在<span class="fac">佛门</span>修行中偶然发现了<span class="npc">心慧方丈</span>的密室——里面排列着数十个<span class="itm">花瓶娃</span>，皆是以女婴炼成的<span class="danger-text">邪物</span>！',choices:[
      {text:'当面质问心慧方丈',effect:{connections:-20,sanity:-15,comprehension:10,karma:10},log:'方丈冷笑道："慈悲有时需要牺牲。"你对佛门的信仰产生了动摇'},
      {text:'暗中收集证据',effect:{sanity:-10,comprehension:8,connections:5},log:'你将证据藏好，等待时机揭露真相'},
      {text:'装作没看到',effect:{sanity:-20,karma:-10},log:'你闭上眼睛走出密室，但那些瓷器般的面孔将永远萦绕在你的噩梦中'}]},
    {text:'你在佛前打坐七日七夜，忽然感到<span class="mys">金光乍现</span>——<span class="itm">金刚不坏之法</span>有了突破的迹象！但同时你感到七情六欲正在被抹去。',choices:[
      {text:'继续突破',effect:{cultivation:25,sanity:10,constitution:10,connections:-10},log:'金刚不坏之法大成！你的肉身如金铸铁浇，但你已感受不到喜怒哀乐'},
      {text:'适可而止',effect:{cultivation:15,comprehension:8,sanity:5},log:'你在金刚之法与人性之间找到了一个平衡点'}]},
    {text:'<span class="fac">佛门</span>住持召集弟子，要求所有人<span class="danger-text">断绝七情六欲</span>——以"无情方可无敌"为由，要求你斩断与尘世的一切联系。',choices:[
      {text:'斩断尘缘',effect:{cultivation:20,sanity:5,connections:-25,karma:5},log:'你将所有俗世之物焚烧殆尽，从此六根清净'},
      {text:'拒绝',effect:{connections:5,cultivation:-5,karma:3},log:'你说佛也有慈悲心，慈悲本身就是一种情感。住持沉默了'},
      {text:'假意应承',effect:{connections:-5,sanity:-5,comprehension:5},log:'你表面断了尘缘，心中依然记挂着尘世'}]},
    {text:'寺中数位弟子联名揭发<span class="npc">心慧方丈</span>的<span class="danger-text">种种恶行</span>——花瓶娃、私吞香火钱、逼迫女尼。一场<span class="fac">佛门</span>内部的丑闻即将爆发。',choices:[
      {text:'站在揭发者一方',effect:{karma:15,connections:10,cultivation:5,qiyun:5},log:'你加入了揭发的行列，心慧方丈终于被逐出正德寺'},
      {text:'为心慧方丈辩护',effect:{karma:-15,connections:-10,cultivation:10},log:'你出于某种原因为方丈说话，真相被压了下去'},
      {text:'独善其身',effect:{comprehension:5,sanity:-5},log:'佛门的水太深，你选择不介入'}]},
  ],
  qingfeng: [
    {text:'<span class="npc">丹阳子</span>让你去山下抓一个人回来做<span class="danger-text">药引</span>。你知道这意味着什么。',choices:[
      {text:'服从师命',effect:{karma:-20,cultivation:15,sanity:-10},log:'你带回了一个流浪汉...他的惨叫声在观中回荡了一整夜'},
      {text:'抓回一具尸体',effect:{karma:-5,cultivation:5,comprehension:5},log:'你带回了一具刚死不久的尸体。丹阳子虽然不满，但勉强用了'},
      {text:'放走猎物',effect:{karma:10,connections:-10,cultivation:-5},log:'你偷偷放走了那个人。丹阳子知道后暴怒，罚你禁闭一月'}]},
    {text:'清风观的<span class="npc">师兄们</span>在背后议论——丹阳子不识字，却被<span class="fac">坐忘道</span>的人哄着读了一本<span class="danger-text">假天书</span>。这本假天书让他走上了一条诡异的道路。',choices:[
      {text:'去问丹阳子',effect:{comprehension:10,sanity:-10,connections:-5},log:'丹阳子大怒："天书是真是假，我说了算！"但你看到他眼中一闪而过的迷惘'},
      {text:'私下研究假天书',effect:{comprehension:15,cultivation:10,sanity:-15},log:'假天书中的内容荒谬又诡异，但偶尔能在字里行间窥见一些...不该知道的东西'},
      {text:'不理会',effect:{sanity:5},log:'师兄们的闲话，你当没听见'}]},
    {text:'<span class="npc">丹阳子</span>炼制出了一炉<span class="mys">黑太岁丹</span>——据说服下后可以延年益寿。但看着那丹药黑漆漆、蠕动着的样子...',choices:[
      {text:'服下丹药',effect:{cultivation:20,constitution:10,sanity:-15,karma:-5},log:'丹药入腹如活物般乱窜！剧痛过后，你感到体内多了一股诡异但强大的力量'},
      {text:'婉拒',effect:{connections:-5},log:'丹阳子耸耸肩，自己吞了那颗丹'}]},
  ],
  guoshi: [
    {text:'朝中有人弹劾你妖言惑众，皇帝<span class="npc">姬诵</span>命你当众<span class="mys">引雷</span>以证清白。',choices:[
      {text:'当众引雷',effect:{cultivation:15,connections:15,qiyun:5},log:'一道惊雷劈下，百官震慑！弹劾之人当场跪地求饶'},
      {text:'以理服人',effect:{connections:5,comprehension:10},log:'你引经据典、条理分明地驳斥了弹劾，但总不如引雷来得震撼'}]},
    {text:'<span class="loc">上京城</span>地下<span class="mys">龙脉</span>出现异动——历代帝王拼接而成的龙躯在颤抖。作为术师，你被紧急召入宫中诊断龙脉。',choices:[
      {text:'以术法安抚龙脉',effect:{cultivation:20,connections:10,sanity:-15,constitution:-5},log:'你将自身精气注入龙脉，暂时稳住了异动。但你看到了龙脉深处那些帝王的残魂...'},
      {text:'禀报异常后撤离',effect:{connections:5,comprehension:10},log:'你如实禀报了龙脉的状况，却不敢深入——那里的东西不是人能碰的'}]},
    {text:'<span class="npc">皇甫天罡</span>国师交给你一项秘密任务——前往各地勘查龙脉走向，绘制<span class="itm">龙脉图</span>。此事关乎国运，不可外泄。',choices:[
      {text:'领命出行',effect:{cultivation:15,comprehension:15,wealth:-10,connections:5},log:'你走遍大梁山川，对龙脉的理解大为精进'},
      {text:'请求派人护卫',effect:{connections:10,wealth:-5},log:'一队监天司精锐随你出行，安全了许多但灵活性大减'}]},
  ],
  chaoting: [
    {text:'地方上出现<span class="danger-text">邪教</span>作乱，百姓惊恐。作为地方官，你必须做出应对。',choices:[
      {text:'请求监天司介入',effect:{connections:10,qiyun:5,karma:5},log:'监天司派人来处理了邪教，你因应对得当获得嘉奖'},
      {text:'亲自带人围剿',effect:{constitution:-5,karma:5,connections:15,cultivation:5},log:'你带着衙役和乡勇围剿了邪教据点，虽然伤亡不小，但百姓感恩戴德',combat:45},
      {text:'安抚为主',effect:{connections:5,karma:10},log:'你以安抚为主，疏散了大部分百姓，减少了伤亡'}]},
    {text:'朝廷中两派大臣争斗激烈，你被卷入了漩涡——<span class="npc">主战派</span>要你出兵边境，<span class="npc">主和派</span>要你削减军费。',choices:[
      {text:'站主战派',effect:{connections:10,constitution:5,karma:-5,wealth:-15},log:'你主张出兵，获得了军方的支持'},
      {text:'站主和派',effect:{connections:10,wealth:10,karma:5},log:'你主张以和为贵，获得了文官的拥护'},
      {text:'保持中立',effect:{connections:-5,comprehension:5},log:'两边都不讨好，但你保全了自己'}]},
    {text:'你在任上发现了一桩<span class="danger-text">贪腐大案</span>——牵涉到多位朝中重臣。此事若捅破天，后果难料。',choices:[
      {text:'上奏弹劾',effect:{karma:15,connections:-15,qiyun:10},log:'你冒死上奏，皇帝震怒，涉案重臣被严惩。你名声大震'},
      {text:'暗中收集证据',effect:{comprehension:10,connections:5,karma:5},log:'你默默积攒证据，等待最合适的时机'},
      {text:'睁一只眼闭一只眼',effect:{wealth:15,karma:-10},log:'你收下了封口费，装作什么都不知道'}]},
  ],
};

export const RARITY_NAMES = {
  common: '凡品', uncommon: '良品', rare: '珍品', epic: '仙品', legendary: '天命', cursed: '厄运'
};

// === ANCIENT ERA EVENTS ===
export const ANCIENT_EVENTS = [
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
export const QIYUN_EVENTS = [
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
    {text:'寻高僧化解',effect:{wealth:-30,qiyun:20,sanity:10},log:'高僧说你业障深重，但尚可救',req:{wealth:30}},
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
  // Medium good qiyun
  {text:'你在河里洗脸时摸到一块<span class="itm">奇石</span>，温润如玉，内含灵气。',
    qiyunReq:{min:15},choices:[
    {text:'握在手中修炼',effect:{cultivation:10,comprehension:5,qiyun:-5},log:'灵石中的灵气被你吸收殆尽'},
    {text:'卖掉换钱',effect:{wealth:25,qiyun:-3},log:'灵石在黑市上卖了个好价钱'}]},
  {text:'天上掉下一只受伤的<span class="npc">仙鹤</span>，恰好落在你面前。',
    qiyunReq:{min:25},choices:[
    {text:'救治仙鹤',effect:{karma:10,cultivation:15,qiyun:5},log:'仙鹤痊愈后绕你飞了三圈，洒下一片金色羽毛'},
    {text:'捉了卖钱',effect:{wealth:20,karma:-10,qiyun:-10},log:'药铺掌柜出了高价，但你总觉得心里不踏实'}]},
  {text:'你随手翻开路边一本被丢弃的旧书，竟是失传已久的<span class="itm">上古功法</span>！',
    qiyunReq:{min:35},choices:[
    {text:'苦心研读',effect:{cultivation:25,comprehension:15,qiyun:-10},log:'功法残卷虽不完整，但让你的修为大进'},
    {text:'献给门派',effect:{connections:15,karma:10,qiyun:-5},log:'门派对你刮目相看',req:{faction:true}}]},
  // Bad qiyun events
  {text:'你走路时一脚踩空掉进了<span class="danger-text">陷阱</span>——这是猎人设的捕兽夹。',
    qiyunReq:{max:-15},choices:[
    {text:'挣扎脱身',effect:{constitution:-5,cultivation:3},log:'你费了好大力气才挣脱，腿上血淋淋的'},
    {text:'大声呼救',effect:{connections:3,constitution:-3},log:'过路人帮你打开了夹子'}]},
  {text:'你好不容易攒的钱被<span class="danger-text">扒手</span>偷了个精光。',
    qiyunReq:{max:-10},choices:[
    {text:'追上去抢回来',effect:{wealth:5,constitution:-3,cultivation:3},log:'你追了半条街才追上，打了一架才夺回一部分',combat:15},
    {text:'自认倒霉',effect:{wealth:-15,comprehension:3},log:'唉，破财消灾吧'}]},
  {text:'你睡觉时被蛇咬了——在这荒郊野外，<span class="danger-text">前不着村后不着店</span>。',
    qiyunReq:{max:-20},choices:[
    {text:'用修为逼毒',effect:{cultivation:5,constitution:-5,sanity:-3},log:'你勉强逼出了蛇毒，但元气大伤',req:{cultivation:10}},
    {text:'咬牙找人求救',effect:{constitution:-8,connections:3},log:'你一瘸一拐走了半天才找到人帮忙'},
    {text:'听天由命',effect:{constitution:-10,qiyun:5},log:'你昏迷了三天三夜，醒来后发现自己竟然没事——命硬'}]},
  // Extreme qiyun
  {text:'你在<span class="loc">悬崖边</span>脚一滑——你以为必死无疑，却在半空中<span class="mys">撞上一棵古松</span>，挂在了树枝上。',
    qiyunReq:{min:40},choices:[
    {text:'爬上去看看悬崖上有什么',effect:{cultivation:20,comprehension:10,qiyun:-5},log:'悬崖顶上有一个隐秘的山洞，里面刻满了功法心得'},
    {text:'赶紧爬回安全的地方',effect:{constitution:3,sanity:3},log:'命要紧——你再也不走那条路了'}]},
  {text:'你做什么都不顺——吃饭咬到舌头，走路被石头绊倒，修炼走火入魔。',
    qiyunReq:{max:-30},choices:[
    {text:'闭门不出等霉运过去',effect:{qiyun:5,comprehension:3},log:'你老老实实在家待了三个月，事情终于好转了'},
    {text:'去庙里烧香',effect:{qiyun:8,karma:5,wealth:-5},log:'也不知道有没有用，但你心里踏实了点'}]},
];

// === 散修 EVENTS (triggered when player is unaffiliated or has betrayed factions) ===
export const SANXIU_EVENTS = [
  // --- 基础散修事件 ---
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
    {text:'买下来',effect:{wealth:-15,cultivation:20,comprehension:8},log:'虽然叛出了门派，但这功法你再熟悉不过',req:{wealth:15}},
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
  // --- 叛门余波事件（原双修事件，现归入散修体系） ---
  {text:'你前门派的<span class="danger-text">追杀者</span>找上门来，他们要你以血偿还叛逃之罪。',
    trigger:{factionHistoryMin:2},choices:[
    {text:'迎战',effect:{cultivation:10,constitution:-10,sanity:-10,qiyun:-5},log:'你击退了追杀者，但身上多了几道伤口',combat:45},
    {text:'逃跑',effect:{connections:-10,sanity:-5},log:'你仓皇逃窜，丢尽了颜面'},
    {text:'以散修身份震慑',effect:{cultivation:5,connections:5,comprehension:3},log:'你亮出散修的实力，追杀者犹豫了'}]},
  {text:'你发现自己修炼过多家门派的功法后，体内出现了<span class="danger-text">走火入魔</span>的迹象——不同法力互相冲撞。',
    trigger:{factionHistoryMin:2,cultivation:20},choices:[
    {text:'全力压制',effect:{constitution:-15,sanity:-15,cultivation:-10},log:'你强行压制了冲突，但修为倒退了'},
    {text:'尝试融合百家',effect:{cultivation:30,constitution:-10,sanity:-20,comprehension:10},log:'痛苦异常！但你隐约找到了融合的可能'},
    {text:'放弃一种功法',effect:{cultivation:-20,sanity:10,constitution:5},log:'你忍痛放弃，身体终于稳定下来'}]},
  {text:'多家门派的<span class="mys">功法</span>在你体内激烈冲突，你感到<span class="danger-text">经脉几近崩溃</span>。',
    trigger:{factionHistoryMin:2,cultivation:30},choices:[
    {text:'以命搏命突破',effect:{cultivation:40,constitution:-20,sanity:-25},log:'你在生死之间找到了一线生机！',req:{constitution:30}},
    {text:'散去所有修为重来',effect:{cultivation:-50,constitution:10,sanity:10,comprehension:15},log:'你从头来过，但这次走得更稳'}]},
  {text:'曾经的门派<span class="danger-text">悬赏通缉</span>你——叛门之人，人人得而诛之。',
    trigger:{factionHistoryMin:2,minAge:20},choices:[
    {text:'用实力证明自己无需依附任何人',effect:{cultivation:10,connections:10,qiyun:-5},log:'你打败了几拨赏金猎人，名声反而更响了'},
    {text:'隐居避祸',effect:{connections:-15,comprehension:8,sanity:5},log:'你躲入深山修炼，远离江湖是非'}]},
  {text:'你在修炼中看到了<span class="mys">曾经历过的各门派祖师</span>在你识海中争斗——散修之身，百家争鸣。',
    trigger:{factionHistoryMin:2,cultivation:40},choices:[
    {text:'任其争斗，从中悟道',effect:{sanity:-20,comprehension:15,cultivation:15},log:'你在争斗中悟到了各家之道的共通之处——殊途同归'},
    {text:'将所有门派痕迹驱逐',effect:{cultivation:-15,sanity:10,comprehension:5},log:'你彻底斩断了与旧门派的一切因缘，从此只有自己的道'}]},
  // --- 散修独行事件 ---
  {text:'你在荒野中修炼时，天降<span class="mys">异象</span>——无门无派之人反而更容易感应天地。',
    trigger:{minAge:22,cultivation:25},choices:[
    {text:'借天地之力突破',effect:{cultivation:25,comprehension:10,constitution:-5},log:'你感受到了天地间无处不在的道意'},
    {text:'静观其变',effect:{comprehension:8,qiyun:5},log:'你默默记下了天象变化的规律'}]},
  {text:'一个<span class="npc">落魄的门派弟子</span>跪求你收他为徒，说你比他师父强百倍。',
    trigger:{minAge:30,cultivation:60},choices:[
    {text:'收下他',effect:{connections:15,karma:10,comprehension:5},log:'你第一次有了弟子，散修也可以传道'},
    {text:'拒绝',effect:{comprehension:3},log:'你不想让任何人走你这条九死一生的路'},
    {text:'指点几句便走',effect:{karma:8,connections:5},log:'你点拨了他几句，便飘然而去——散修来去自如'}]},
  // === 性癖专属事件 ===
  // --- 器痴 ---
  {text:'你在<span class="loc">坊市</span>中见到一柄<span class="itm">通体泛青的古剑</span>，剑身上刻满了你看不懂的铭文。店主说它是死物，毫无灵力——但你伸手一握，浑身酥麻，仿佛触碰了一个沉睡万年的灵魂。你知道这种感觉不正常，但你根本放不下手。',
    kinkReq:'artifact',flagReq:'kink_awakened',trigger:{minAge:18,cultivation:10},choices:[
    {text:'不惜代价买下',effect:{wealth:-30,comprehension:10,cultivation:8,sanity:-5},log:'你花光了积蓄。每天夜里你都会把古剑抱在怀中，那种触感让你比任何丹药都安稳——你对法器的敏感度再次提升',item:'gu_jian'},
    {text:'忍痛离开',effect:{sanity:-8,comprehension:5},log:'你走出三步又回了两步，最终还是走了。但此后你再也没能忘记那柄剑'}]},
  {text:'你听闻<span class="loc">深山</span>中有一处<span class="mys">上古器灵墓</span>，传说里面封存着数十件远古法器的残骸。对常人而言不过是废铁堆，但你的呼吸已经急促了起来。',
    kinkReq:'artifact',flagReq:'kink_awakened',trigger:{minAge:25,cultivation:30},choices:[
    {text:'独自前往',effect:{cultivation:15,comprehension:12,sanity:-10,constitution:-5,wealth:20},log:'你在器灵墓中待了七天七夜，抚摸每一件残器。你能感受到它们残留的灵性——这种与器物的共鸣让你的炼器天赋大增'},
    {text:'邀同伴同行',effect:{cultivation:10,comprehension:8,connections:5},log:'同伴不理解你为什么对着一堆破铜烂铁如此兴奋，但你收获颇丰'}]},
  // --- 苦修 ---
  {text:'你在修炼<span class="mys">金刚不坏</span>功法时，需要以铁链缠身、以烈火炙烤来锤炼肉身。其他弟子叫苦不迭，你却在极致的痛苦中体验到一种<span class="mys">超脱凡俗的快感</span>——修为暴涨。',
    kinkReq:'pain',flagReq:'kink_awakened',trigger:{minAge:18,cultivation:15},choices:[
    {text:'主动加重修炼',effect:{cultivation:15,constitution:8,sanity:-10,comprehension:5},log:'你以铁链缠身三日三夜，将金刚功法推进到常人难以企及的层次。旁人叫你疯子，你只觉得通体舒泰'},
    {text:'按部就班',effect:{cultivation:8,constitution:5,sanity:-3},log:'你按照功法要求修炼，不多不少——但内心深处渴望更多'}]},
  {text:'你偶遇<span class="fac">巴虺</span>教众的<span class="mys">痛苦天道</span>修炼场。他们以极端苦行获取力量——自残、鞭挞、针刺，每一种痛苦都是修行。你看着这些人，竟觉得……有些理解他们。',
    kinkReq:'pain',flagReq:'kink_awakened',trigger:{minAge:22,cultivation:25},choices:[
    {text:'请教修炼法门',effect:{cultivation:20,sanity:-15,karma:-10,constitution:5},log:'你学到了一套以痛苦为引的功法。在旁人避之不及的苦行中，你如鱼得水——修为突飞猛进',setFlag:'pain_cultivation'},
    {text:'不能再深入了',effect:{sanity:5,comprehension:5},log:'你及时抽身。巴虺之道太危险了——但你无法否认，那种感觉确实让你着迷'}]},
  // --- 易容 ---
  {text:'<span class="fac">坐忘道</span>的一位<span class="npc">长老</span>看中了你的易容天赋，私下找你密谈。他给你一套<span class="itm">七窍玲珑面</span>——能同时变化面容、声音、甚至气息。你戴上它的那一刻，灵魂都在颤栗。',
    kinkReq:'disguise',flagReq:'kink_awakened',trigger:{minAge:18,cultivation:10},choices:[
    {text:'欣然接受',effect:{connections:10,comprehension:8,sanity:-5,cultivation:5},log:'你以不同身份穿梭于各大门派之间，每一次变身都让你兴奋不已。你开始分不清哪个才是真正的自己——但你并不在乎',item:'qi_qiao_mian',setFlag:'disguise_master'},
    {text:'婉拒',effect:{karma:5,comprehension:3},log:'你知道自己一旦接受，就再也停不下来了'}]},
  {text:'你用<span class="itm">易容术</span>扮成一名<span class="npc">青楼花魁</span>混入敌方据点刺探情报。任务圆满完成，但让你不安的是——你发现自己格外享受扮演另一个人的过程，甚至有些不舍得恢复原貌。',
    kinkReq:'disguise',flagReq:'kink_awakened',trigger:{minAge:22,cultivation:20},choices:[
    {text:'多保持一会儿',effect:{connections:8,comprehension:5,sanity:-8},log:'你在那个身份里多留了三天。行走坊间，别人的目光落在你身上——却看不到真正的你。这种感觉让你痴迷'},
    {text:'立即恢复原貌',effect:{sanity:3,karma:3},log:'你强迫自己撕下面皮。但回忆起那种感觉，你知道还会有下一次'}]},
  // --- 窥天 ---
  {text:'你无意中修炼出一种<span class="mys">灵觉感应</span>——闭目便能感知方圆百丈内所有人的举动、表情、甚至心跳。这种能力极为实用，但你不得不承认：窥视他人毫无防备时的真实模样，给你带来了一种难以言喻的满足感。',
    kinkReq:'voyeur',flagReq:'kink_awakened',trigger:{minAge:18,cultivation:20},choices:[
    {text:'精进感应术',effect:{comprehension:12,cultivation:8,sanity:-8,karma:-5},log:'你的感应范围越来越大。你知道了太多人的秘密——门派中的暗恋、背叛、恐惧，尽在你的感知之中',setFlag:'voyeur_sense'},
    {text:'克制使用',effect:{comprehension:5,karma:5,sanity:3},log:'你限制自己只在必要时使用。但每次"窥视"结束后的空虚感，让你知道这种克制不会永远持续'}]},
  {text:'<span class="fac">监天司</span>注意到你异常的<span class="mys">感知能力</span>，派人找你谈话。他们需要你帮忙监视一名疑似邪修——这正中你下怀。',
    kinkReq:'voyeur',flagReq:'kink_awakened',trigger:{minAge:22,cultivation:25},flagReq2:'voyeur_sense',choices:[
    {text:'欣然接受任务',effect:{connections:15,wealth:20,comprehension:8,sanity:-10,karma:-5},log:'你花了七天七夜监视目标的一切行踪。这是你做过最"正当"的窥视——但你知道，驱使你的不只是正义感'},
    {text:'拒绝',effect:{karma:5,connections:-5},log:'你不想让自己的……爱好被人利用'}]},
  // --- 恋足 ---
  {text:'你在<span class="loc">坊市</span>见到一双<span class="itm">仙人步</span>——传说穿上便能凌空虚度的灵靴。你明知以自己的修为根本驾驭不了，但看着那双靴子，你的心跳不由自主地加速。你买它的理由，和修炼无关。',
    kinkReq:'foot',flagReq:'kink_awakened',trigger:{minAge:18,cultivation:10},choices:[
    {text:'买下来',effect:{wealth:-25,comprehension:5,sanity:5},log:'你把灵靴供在案头，时常擦拭。旁人以为你在养器，只有你知道真正的原因',item:'xian_ren_bu'},
    {text:'理智地离开',effect:{sanity:-3,comprehension:3},log:'你走了，但那双靴子在你梦里出现了好几次'}]},
  {text:'修炼<span class="mys">踏虚步</span>轻功时，师父要求赤足在灵石上行走以感应地脉。你发现自己对这项修炼异常投入——赤足触碰灵石的感觉，让你比任何功法都专注。',
    kinkReq:'foot',flagReq:'kink_awakened',trigger:{minAge:20,cultivation:15},choices:[
    {text:'勤加练习',effect:{cultivation:10,constitution:5,comprehension:8},log:'你成了踏虚步修炼最刻苦的弟子。师父夸你天赋异禀——你没有告诉他真正的原因'},
    {text:'和其他功法轮换练习',effect:{cultivation:5,comprehension:5},log:'你不想让自己太沉迷。但每次轮到踏虚步，你都格外期待'}]},
  // --- 无性恋专属 ---
  {text:'门中同门纷纷成婚生子，长辈们也开始催促你的婚事。你一次次推脱——不是没有合适的人选，而是你内心对此毫无波澜。一位<span class="npc">老修士</span>看出你的心思，对你说："天道有缺，才需人补。你心中无情，正合我<span class="mys">太上忘情</span>一脉。"',
    orientationType:'asexual',flagReq:'orientation_awakened',trigger:{minAge:20,cultivation:15},noFlag:'married',choices:[
    {text:'修炼太上忘情',effect:{cultivation:20,comprehension:15,sanity:10,connections:-10},log:'你修炼了太上忘情诀。情欲尽去，道心澄明——修为突飞猛进。但你与世间的联系，又淡了一分',setFlag:'taishang_wangqing'},
    {text:'婉拒，走自己的路',effect:{cultivation:5,comprehension:8,karma:3},log:'你不需要一个名头来定义自己的无情。你就是你'},
    {text:'勉强答应相亲',effect:{connections:5,sanity:-10},log:'你去了，对方很好，但你心里空空如也。你知道，这不是你的道'}]},
];

// === 婚恋事件 ROMANCE EVENTS ===
export const ROMANCE_EVENTS = [
  // --- 初遇 ---
  {text:'你在<span class="loc">集市</span>上与一名<span class="npc">温婉女子</span>擦肩而过，她回头看了你一眼，眼波流转间似有万语千言。',
    genderReq:'male',orientationReq:'likes_female',trigger:{minAge:16},noFlag:'married',choices:[
    {text:'搭话',effect:{connections:10,qiyun:3},log:'你鼓起勇气搭话，她微微一笑——她叫苏婉儿，是附近药铺的采药女',setFlag:{romance_met:true,spouse_candidate:'苏婉儿',partner_is_female:true}},
    {text:'错过',effect:{comprehension:2},log:'缘分来了又走了，你转身离开'},
    {text:'暗中跟随',effect:{connections:3,karma:-3},log:'你远远跟了一段路，记住了她家的方向',setFlag:{romance_met:true,spouse_candidate:'苏婉儿',partner_is_female:true}}]},
  {text:'你在山路上偶遇一名<span class="npc">青年剑客</span>，他替你挡下了一只山中邪祟，然后冲你笑了笑。',
    genderReq:'female',orientationReq:'likes_male',trigger:{minAge:16},noFlag:'married',choices:[
    {text:'道谢并询问姓名',effect:{connections:10,qiyun:3},log:'他说他叫沈鹤，是个走南闯北的游侠',setFlag:{romance_met:true,spouse_candidate:'沈鹤',partner_is_male:true}},
    {text:'独自离开',effect:{comprehension:2},log:'你点了点头便走了，但心里记住了那个身影'},
    {text:'邀他同行一程',effect:{connections:8,qiyun:5},log:'你们结伴走了一段路，他的见闻让你大开眼界',setFlag:{romance_met:true,spouse_candidate:'沈鹤',partner_is_male:true}}]},
  // --- 同性初遇 ---
  {text:'你在<span class="loc">酒肆</span>中与一名<span class="npc">清俊书生</span>对坐而饮。他谈吐不凡，目光坦荡，举杯间无意碰到了你的手——你们相视一笑，竟有些说不清道不明的默契。世人多道<span class="mys">龙阳断袖</span>为异，但在这修仙乱世，谁又在乎这些。',
    genderReq:'male',orientationReq:'likes_male',trigger:{minAge:16},noFlag:'married',choices:[
    {text:'邀他再饮',effect:{connections:10,qiyun:3},log:'他叫柳惊鸿，游历四方的散修。你们从天黑聊到天明——有些人，一见如故',setFlag:{romance_met:true,spouse_candidate:'柳惊鸿',partner_is_male:true}},
    {text:'别过',effect:{comprehension:2},log:'你起身告辞，但心头莫名牵挂'},
    {text:'暗记住他',effect:{connections:3,karma:-3},log:'你没有开口，只是默默记下了他的名字',setFlag:{romance_met:true,spouse_candidate:'柳惊鸿',partner_is_male:true}}]},
  {text:'月下浣衣时，你偶遇一名<span class="npc">素衣女子</span>。她在溪边抚琴，琴声如诉如泣。你不由自主地驻足，她抬头见你，嫣然一笑。世俗或称<span class="mys">磨镜之交</span>为禁忌，可在这诡道横行的乱世，真心相待才是最难得之事。',
    genderReq:'female',orientationReq:'likes_female',trigger:{minAge:16},noFlag:'married',choices:[
    {text:'坐下聆听',effect:{connections:10,qiyun:3},log:'她叫云绮，是一名采药的女修。你们在月光下相谈甚欢——有些情愫，不必言说',setFlag:{romance_met:true,spouse_candidate:'云绮',partner_is_female:true}},
    {text:'默默离去',effect:{comprehension:2},log:'你转身走了，但那琴声在你心中久久不散'},
    {text:'每日去听琴',effect:{connections:3,qiyun:2},log:'你开始每天傍晚去溪边。她似乎也在等你',setFlag:{romance_met:true,spouse_candidate:'云绮',partner_is_female:true}}]},
  // --- 情愫 ---
  {text:'你与<span class="npc">心仪之人</span>在月下不期而遇。夜风拂面，月光如水——在这个满是邪祟和阴谋的世界里，这样的宁静格外珍贵。',
    trigger:{minAge:17},flagReq:'romance_met',noFlag:'married',choices:[
    {text:'表露心意',effect:{connections:15,qiyun:5,karma:5},log:'你说出了心中所想。对方沉默了一会儿，然后轻轻点了点头',setFlag:'courting'},
    {text:'默默相伴',effect:{connections:8,sanity:5},log:'有些话不必说出口，你们在月光下安静地坐了很久'},
    {text:'压下心思',effect:{comprehension:5,cultivation:5},log:'修道之人不该有儿女情长——但你心里知道，这个念头压不住'}]},
  {text:'你听说<span class="npc">心仪之人</span>遇到了麻烦——有人觊觎对方家中的祖传之物，正上门逼迫。',
    trigger:{minAge:17},flagReq:'romance_met',noFlag:'married',choices:[
    {text:'出手相助',effect:{connections:15,karma:10,constitution:-3,qiyun:5},log:'你赶到时对方正被围困。你出手击退了恶人，对方看你的眼神变了',setFlag:'courting'},
    {text:'报官处理',effect:{connections:5,karma:5},log:'你去报了官，总算解了围'},
    {text:'不便插手',effect:{karma:-5,connections:-5},log:'你犹豫了——修道者该不该卷入凡俗纠纷？'}]},
  // --- 成婚 ---
  {text:'<span class="npc">长辈</span>得知你有了心上人，张罗着要给你们操办婚事。在这乱世之中，能成一段姻缘实属不易。',
    trigger:{minAge:18},flagReq:'courting',noFlag:'married',choices:[
    {text:'拜堂成亲',effect:{connections:20,wealth:-30,qiyun:10,karma:10,sanity:5},log:'红烛高照，你们在三媒六聘下结为夫妻。这世间多了一个你愿意为之而活的人',setFlag:{married:true,children:0}},
    {text:'私定终身',effect:{connections:10,wealth:-5,qiyun:5,karma:3},log:'你们没有大操大办，在一棵老槐树下许了誓——此生不离不弃',setFlag:{married:true,children:0}},
    {text:'暂时推迟',effect:{connections:-5,comprehension:3},log:'你说修为未成，不愿拖累对方。对方虽有不舍，但也理解'}]},
  {text:'你到了成家的年纪，经人介绍认识了一位门当户对的<span class="npc">良人</span>。虽非一见钟情，但相处下来越发觉得合适。',
    trigger:{minAge:20},noFlag:'married',noFlag2:'romance_met',choices:[
    {text:'顺其自然，成婚',effect:{connections:15,wealth:-20,qiyun:5,karma:5,sanity:3},log:'你们成了亲。婚后日子虽平淡，但有人等你回家的感觉很好',setFlag:{married:true,children:0,spouse_candidate:'良人',partner_is_female:true},genderReq:'male',orientationReq:'likes_female'},
    {text:'顺其自然，出嫁',effect:{connections:15,wealth:10,qiyun:5,karma:5,sanity:3},log:'你嫁入了一个殷实人家。丈夫虽不懂修行，却待你很好',setFlag:{married:true,children:0,spouse_candidate:'良人',partner_is_male:true},genderReq:'female',orientationReq:'likes_male'},
    {text:'与知己结为契兄弟',effect:{connections:15,wealth:-15,qiyun:5,karma:3,sanity:5},log:'你们在月下焚香结拜，世人道龙阳断袖，你只知此生得一知己足矣',setFlag:{married:true,children:0,spouse_candidate:'知己',partner_is_male:true},genderReq:'male',orientationReq:'likes_male'},
    {text:'与她结为金兰',effect:{connections:15,wealth:-10,qiyun:5,karma:3,sanity:5},log:'你们义结金兰，对外以姐妹相称，冷暖自知。世人或称磨镜对食，你们只道知心',setFlag:{married:true,children:0,spouse_candidate:'金兰',partner_is_female:true},genderReq:'female',orientationReq:'likes_female'},
    {text:'一心修道，婉拒',effect:{cultivation:10,connections:-10,comprehension:5},log:'你拒绝了婚事，一心向道。长辈叹了口气'}]},
  // --- 子嗣 ---
  {text:'你的<span class="npc">伴侣</span>告诉你一个消息——你们要有孩子了。在这个充满诡异的世界里，新生命的到来显得格外珍贵。',
    trigger:{minAge:20},flagReq:'married',noFlag:'has_child',samesexReq:false,choices:[
    {text:'喜极而泣',effect:{qiyun:10,karma:10,connections:10,sanity:5},log:'你小心翼翼地守护着这个即将到来的小生命。数月后，一声啼哭响彻屋内——你有了第一个孩子',setFlag:{has_child:true,children:1}},
    {text:'又喜又忧',effect:{qiyun:5,karma:5,connections:5,wealth:-10},log:'喜的是后继有人，忧的是这世道太危险。孩子出生时你看着那张小脸，暗暗发誓要守护好这个家',setFlag:{has_child:true,children:1}},
    {text:'忧心忡忡',effect:{sanity:-5,karma:3,connections:5},log:'你不确定自己能否在这个满是邪祟的世界里保护好一个孩子。但当孩子出生的那一刻，你什么都不想了',setFlag:{has_child:true,children:1}}]},
  {text:'你们虽无法有亲生骨肉，但在乱世中救下了一个<span class="npc">无家可归的孩子</span>。那孩子怯生生地看着你们，瘦得皮包骨头。',
    trigger:{minAge:22},flagReq:'married',noFlag:'has_child',samesexReq:true,choices:[
    {text:'收为义子/义女',effect:{qiyun:10,karma:15,connections:10,sanity:5,wealth:-10},log:'你们将孩子收养，取名安儿。虽非亲生，却视如己出。孩子渐渐有了笑容，叫你们的声音越来越响亮',setFlag:{has_child:true,children:1,adopted:true}},
    {text:'送到安全的人家',effect:{karma:10,connections:5},log:'你帮孩子找了一户善良人家。走时孩子回头看了你一眼，你心里说不出的滋味'},
    {text:'暂且照顾',effect:{karma:8,connections:5,wealth:-5},log:'你们先养着他，日子久了，竟舍不得送走了',setFlag:{has_child:true,children:1,adopted:true}}]},
  {text:'你的孩子周岁了。<span class="npc">伴侣</span>抱着孩子站在门口等你回家，你突然觉得这一刻比任何修炼突破都要珍贵。',
    trigger:{minAge:21},flagReq:'has_child',choices:[
    {text:'多陪陪家人',effect:{connections:10,sanity:8,karma:5,cultivation:-3},log:'你放下修炼，陪孩子度过了几个安宁的日子'},
    {text:'为家人更努力修炼',effect:{cultivation:10,comprehension:5,connections:-3},log:'你想变强，为了守护他们——但伴侣说你已经很久没回家了'}]},
  {text:'你的第二个孩子出生了——这一次你多了几分从容，也多了几分牵挂。',
    trigger:{minAge:23},flagReq:'has_child',noFlag:'second_child',samesexReq:false,choices:[
    {text:'感到满足',effect:{qiyun:5,karma:8,connections:8,sanity:3},log:'家中又多了一张小嘴巴，热闹了不少',setFlag:{second_child:true,children:2}},
    {text:'倍感压力',effect:{wealth:-15,constitution:-3,comprehension:3},log:'养家的担子更重了，你咬牙扛着',setFlag:{second_child:true,children:2}}]},
  // --- 家庭生活 ---
  {text:'你的<span class="npc">伴侣</span>在夜里突然惊醒，说梦到了一些<span class="mys">奇怪的东西</span>——那些东西和你修行路上遇到的邪祟描述如出一辙。',
    trigger:{minAge:22},flagReq:'married',choices:[
    {text:'用法力护住伴侣',effect:{cultivation:-5,sanity:-5,karma:5,connections:10},log:'你在枕边设了一道护阵。伴侣安心地睡去了，你却一夜未眠'},
    {text:'安慰说只是噩梦',effect:{connections:5,karma:-3},log:'你撒了谎。有些事情，知道了反而是祸'},
    {text:'带伴侣去寺庙祈福',effect:{wealth:-10,karma:5,sanity:3},log:'正德寺的僧人念了一通经文。有没有用不好说，但伴侣安心了些'}]},
  {text:'你的孩子展现出了<span class="mys">修炼天赋</span>——有门派前来询问是否愿意送孩子去学艺。',
    trigger:{minAge:26},flagReq:'has_child',choices:[
    {text:'送去修炼',effect:{connections:15,cultivation:5,karma:3},log:'你把孩子送入门派。离别时孩子哭得撕心裂肺，你别过头去不敢看'},
    {text:'自己教导',effect:{comprehension:8,cultivation:8,connections:-5},log:'你决定亲自传授孩子修行之法——你不想让孩子走你的弯路'},
    {text:'不让孩子修炼',effect:{karma:5,sanity:5,connections:-3},log:'你见过太多修士的下场。你希望孩子过普通人的日子'}]},
  {text:'<span class="npc">伴侣</span>在你修炼受伤后，日夜守在床边照料你。等你醒来时，看到对方眼下的黑眼圈和鬓角新添的白发。',
    trigger:{minAge:25},flagReq:'married',choices:[
    {text:'承诺以后小心些',effect:{connections:10,sanity:8,karma:5},log:'你握住对方的手说："我会好好的。"这句话你也不知道能不能做到'},
    {text:'心生愧疚',effect:{connections:5,sanity:-5,karma:3},log:'修道和家庭，你到底该怎么选？'}]},
  {text:'你的<span class="npc">伴侣</span>染了一场重病。普通药石无效——你怀疑是<span class="danger-text">邪祟作祟</span>。',
    trigger:{minAge:24},flagReq:'married',choices:[
    {text:'倾尽修为救治',effect:{cultivation:-15,constitution:-10,connections:15,karma:15,sanity:-5},log:'你用自己的修为做药引，终于保住了伴侣的性命。你虚弱了很久，但值得'},
    {text:'四处求医问药',effect:{wealth:-30,connections:10,karma:5,qiyun:-5},log:'你走遍了周围的城镇，花光了积蓄，终于找到了一位游方道士解了邪祟'},
    {text:'向门派求助',effect:{connections:-5,karma:3,wealth:-10},log:'你拉下脸向人求助，好在有人伸出了援手',factionReq:true}]},
  {text:'你与<span class="npc">伴侣</span>在后院里晒着太阳。孩子在一旁追逐蝴蝶。你忽然觉得——修道也好，世俗也罢，也许<span class="mys">这一刻</span>才是真正的道。',
    trigger:{minAge:30},flagReq:'has_child',choices:[
    {text:'享受这一刻',effect:{sanity:10,karma:8,qiyun:5,comprehension:5},log:'你什么也没做，只是在阳光下微微笑了。外面的世界再疯再乱，这一刻就够了'},
    {text:'心中不安',effect:{comprehension:8,cultivation:5,sanity:-3},log:'越是美好的东西越怕失去。你看着家人的笑脸，暗自警惕'}]},
  // --- 老来伴 ---
  {text:'你两鬓斑白，<span class="npc">伴侣</span>也早已不复当年模样。但每天清晨，对方都会为你煮一碗热粥。这种默契无需言语。',
    trigger:{minAge:55},flagReq:'married',choices:[
    {text:'深感珍惜',effect:{sanity:10,karma:10,qiyun:5},log:'你牵起对方的手说了句"辛苦了"。对方笑着说："傻话。"'},
    {text:'教对方修炼养生之法',effect:{cultivation:3,connections:5,constitution:3},log:'你把简单的养生功法教给了伴侣。日子还长着呢'}]},
];

// === 双修事件 SHUANGXIU EVENTS (五智如来·男女双修) ===
export const SHUANGXIU_EVENTS = [
  // --- 初识双修法门 ---
  {text:'你在<span class="loc">正德寺</span>的藏经阁深处发现了一卷被刻意藏起的<span class="itm">残经</span>。经文上记载着一种名为"<span class="mys">欢喜禅</span>"的秘法——以阴阳交合之术修炼，号称可直通<span class="mys">五智如来</span>法门。经文边注写着："<span class="danger-text">切莫轻试，血肉天道非凡人可驾驭。</span>"',
    trigger:{minAge:20,cultivation:20},choices:[
    {text:'仔细研读',effect:{comprehension:15,cultivation:10,sanity:-10,karma:-5},log:'你通读全文——这法门以阴阳交合为媒介，引动体内真元互相流转。修炼时需双方心意相通，否则轻则走火入魔，重则形神俱灭。你心中隐约有了一些领悟',setFlag:'know_shuangxiu'},
    {text:'放回原处',effect:{karma:5,comprehension:3},log:'你把经文放了回去。有些东西，不该碰'},
    {text:'带走经文',effect:{comprehension:12,cultivation:8,sanity:-8,karma:-8},log:'你将残经揣入怀中。总觉得这东西日后会有大用——或大祸',setFlag:'know_shuangxiu',item:'shuangxiu_jing'}]},
  {text:'一名云游的<span class="npc">老僧</span>在路边化缘时突然拉住你说："<span class="mys">施主身上有五智如来的气息。</span>"他说佛门修行并非只有苦行一途，<span class="danger-text">血肉</span>本身也是天道的一部分——五智如来掌管此道，以欢喜禅定为法门。但他的眼神深处，藏着某种你看不透的东西。',
    trigger:{minAge:18,cultivation:15},choices:[
    {text:'请教五智如来法门',effect:{comprehension:12,cultivation:8,sanity:-8,karma:-3},log:'老僧说：阴阳交合，真元流转，可引天地灵气入体。但——"佛门背后的那位，可不是什么慈悲的存在。"说完他便消失了',setFlag:'know_shuangxiu'},
    {text:'不理他',effect:{sanity:3,qiyun:3},log:'你加快脚步走了。这世道疯子太多'},
    {text:'施舍他一些食物',effect:{karma:5,connections:3},log:'老僧道了谢便离开了。临走前意味深长地看了你一眼'}]},
  // --- 寻找双修道侣 ---
  {text:'你开始思索<span class="mys">欢喜禅</span>的修炼之法——经文上说，双修需要一位"<span class="npc">道侣</span>"，双方修为相近、心意相通，方能在交合中引动天地灵气。你的伴侣虽无修为，但你与对方之间的默契与情感，或许正是"心意相通"的另一种形态。',
    trigger:{minAge:20,cultivation:25},flagReq:'know_shuangxiu',flagReq2:'married',choices:[
    {text:'与伴侣坦诚相告',effect:{connections:10,comprehension:8,sanity:-5},log:'你把双修之事告诉了伴侣。对方沉默了很久，最终说："如果能帮到你，我愿意试试。"',setFlag:'shuangxiu_ready'},
    {text:'独自琢磨',effect:{comprehension:10,sanity:-8},log:'你没有告诉伴侣，而是独自研读经文——但经文明确说了，双修不可独行'},
    {text:'放弃此念',effect:{karma:5,sanity:5},log:'你看了看熟睡的伴侣，打消了这个念头。有些东西不该让无辜的人卷入'}]},
  {text:'你在修炼途中遇到一位<span class="npc">女修士</span>（自称来自<span class="fac">佛门</span>别院），她直言不讳地说自己正在寻找<span class="mys">双修道侣</span>。她修为不低，眉心隐约有一点<span class="danger-text">金光</span>——那是修行五智如来法门的痕迹。',
    orientationReq:'likes_female',trigger:{minAge:20,cultivation:30},flagReq:'know_shuangxiu',noFlag:'married',choices:[
    {text:'答应与她双修',effect:{cultivation:25,comprehension:15,sanity:-15,karma:-10,constitution:-5},log:'你们在一处隐秘洞府中修炼欢喜禅。真元在两具身体间流转如潮——你感受到了一股来自深处的<span class="danger-text">窥视</span>',setFlag:'shuangxiu_ready'},
    {text:'婉拒',effect:{comprehension:5,karma:3},log:'你拒绝了她。她并不意外，只是说："缘分未到。"'},
    {text:'询问五智如来的真相',effect:{comprehension:12,sanity:-10,cultivation:5},log:'她说五智如来是佛门背后真正的主人——它掌管血肉天道，所有欢喜禅修行者的力量最终都会流向它。"但力量是真的。"她补充道'}]},
  {text:'一名眉目清冷的<span class="npc">青年僧人</span>拦住你的去路，说他感应到你身上有<span class="mys">五智如来</span>的气息。他的袈裟下隐约可见<span class="danger-text">金色纹路</span>遍布全身——那是深修血肉天道的痕迹。他说他需要一位<span class="mys">双修道侣</span>，言语坦荡，毫无扭捏。',
    orientationReq:'likes_male',trigger:{minAge:20,cultivation:30},flagReq:'know_shuangxiu',noFlag:'married',choices:[
    {text:'答应与他双修',effect:{cultivation:25,comprehension:15,sanity:-15,karma:-10,constitution:-5},log:'你们在山间古刹中修炼欢喜禅。真元在两具身体间流转如潮——你感受到了一股来自深处的<span class="danger-text">窥视</span>',setFlag:'shuangxiu_ready'},
    {text:'婉拒',effect:{comprehension:5,karma:3},log:'你拒绝了他。他并不意外，只是合十道："缘法未至。"'},
    {text:'询问五智如来的真相',effect:{comprehension:12,sanity:-10,cultivation:5},log:'他说五智如来掌管血肉天道，所有欢喜禅修行者的力量最终都会流向它。"但力量是真的。"他补充道'}]},
  // --- 双修实践 ---
  {text:'夜深人静，你与<span class="npc">道侣</span>开始尝试<span class="mys">欢喜禅</span>双修。按照经文所述，你们盘膝相对，双手相握，然后——交合。真元在两具身体之间流转，如同阴阳太极。你能感受到对方的心跳、呼吸、甚至思绪。在某一刻，你们仿佛融为了一体——天地灵气疯狂涌入，修为暴涨。但在灵气深处，你隐约看到了一尊<span class="danger-text">金色巨佛</span>的虚影。它在笑。',
    trigger:{minAge:20,cultivation:30},flagReq:'shuangxiu_ready',choices:[
    {text:'继续修炼，不管那尊佛',effect:{cultivation:35,comprehension:15,sanity:-20,constitution:-8,karma:-10},log:'你们将双修推向极致。修为大增——但那尊金佛的笑容越来越清晰了。五智如来的影子已经笼罩了你们',setFlag:'shuangxiu_deep'},
    {text:'立即停止',effect:{cultivation:15,sanity:-10,comprehension:8},log:'你猛然收功。那尊金佛的虚影消散了——但你知道它一直都在。五智如来的血肉天道，远比你想象的危险'},
    {text:'尝试以心意抵抗那尊佛',effect:{cultivation:25,sanity:-15,comprehension:12,karma:5},log:'你在交合中分出心神抵御金佛的窥视。勉强成功了——但你知道这只是暂时的',setFlag:'shuangxiu_deep'}]},
  {text:'双修之后，你发现自己的<span class="mys">感知力</span>大幅提升——你能感受到周围所有人的情绪波动，仿佛七情六欲都在你面前袒露无遗。这是<span class="danger-text">五智如来·血肉天道</span>赐予双修者的"恩惠"。但这种感知越来越强，让你难以忍受——街上随便走一圈，所有人的贪嗔痴慢疑都涌入你的脑海。',
    trigger:{minAge:22,cultivation:40},flagReq:'shuangxiu_deep',choices:[
    {text:'修炼控制这种感知',effect:{comprehension:20,cultivation:15,sanity:-15,constitution:-5},log:'你花了很长时间学会过滤杂念。这种感知力用好了是一柄利器，但稍有不慎就会被淹没'},
    {text:'封印这种能力',effect:{sanity:10,comprehension:-5,cultivation:-10,karma:5},log:'你用法力封住了这种感知。清净了，但也失去了双修带来的一部分好处'},
    {text:'借此感知修炼',effect:{cultivation:25,comprehension:15,sanity:-25,karma:-8},log:'你开始利用这种感知力加速修炼——吸取周围人的情绪波动转化为修为。五智如来的道，果然和慈悲无关'}]},
  // --- 深入双修 ---
  {text:'你在一次深层双修中进入了<span class="mys">禅定</span>状态——在那里你看到了<span class="danger-text">五智如来</span>的真身。它并非佛像上那个慈悲的面孔。它有<span class="danger-text">无数只手</span>，每一只手都在做着不可言说的事情。它的每一张脸上都挂着<span class="danger-text">极乐的笑容</span>，但那笑容让你毛骨悚然。它开口说："<span class="mys">你们的欢喜，就是我的供养。继续。</span>"',
    trigger:{minAge:24,cultivation:50},flagReq:'shuangxiu_deep',choices:[
    {text:'不惧，继续修炼',effect:{cultivation:40,sanity:-30,comprehension:20,karma:-15,constitution:-10},log:'你直面五智如来的真身继续双修。修为暴涨的同时，你感到自己正在失去某些东西——但你已经停不下来了',setFlag:'shuangxiu_master'},
    {text:'收功退出',effect:{cultivation:10,sanity:-15,comprehension:10,karma:5},log:'你强行退出了禅定。道侣问你看到了什么，你沉默了很久才说："以后…少修一些吧。"'},
    {text:'试图与五智如来对话',effect:{cultivation:20,sanity:-25,comprehension:25,karma:-10},log:'你问它："你到底想要什么？"它笑着说："我要的东西，你们每一个人都在给我。不只是修士——所有的人，只要还有欲望，就是我的信徒。"',setFlag:'shuangxiu_master'}]},
  {text:'你的双修已经到了极高的境界——每一次交合都能引发方圆数里的<span class="mys">灵气潮汐</span>。附近的修士开始注意到异常。有人慕名而来请教，有人面带惧色地避开你们。<span class="fac">佛门</span>的人悄悄传言："<span class="danger-text">又有人走上了五智如来的路。</span>"',
    trigger:{minAge:26,cultivation:60},flagReq:'shuangxiu_master',choices:[
    {text:'不理会外界，继续精进',effect:{cultivation:30,comprehension:15,sanity:-20,connections:-15,karma:-10},log:'你们闭关双修，不再理会外界。修为突飞猛进，但你发现自己越来越难以控制体内的欲念'},
    {text:'收敛行迹',effect:{cultivation:10,sanity:5,connections:5,comprehension:5},log:'你们开始刻意压低修炼强度，避免引人注目。低调行事是活命的不二法门'},
    {text:'广收双修门徒',effect:{connections:20,cultivation:15,karma:-20,sanity:-15},log:'你开始传授双修之法。追随者越来越多——你隐约感觉自己正在建立某种邪教'}]},
  // --- 双修之祸 ---
  {text:'<span class="fac">监天司</span>的人找上门来，指控你修炼<span class="danger-text">禁术</span>——五智如来的双修法门在大梁属于被明令禁止的邪法。他们手持<span class="itm">缉拿令</span>，要将你就地正法。',
    trigger:{minAge:24,cultivation:40},flagReq:'shuangxiu_deep',choices:[
    {text:'束手就擒',effect:{cultivation:-20,connections:-10,sanity:-10,karma:5},log:'你被关进了监天司的牢房。在暗无天日的地牢里，你开始反思这一切是否值得'},
    {text:'拼死抵抗',effect:{cultivation:10,constitution:-15,sanity:-15,connections:-20,karma:-10},log:'你与监天司的人拼了个两败俱伤，勉强逃脱。从此你成了通缉犯',combat:55},
    {text:'以双修之力蛊惑对方',effect:{cultivation:5,karma:-20,sanity:-20,connections:5},log:'你动用了五智如来赐予的感知力，操纵了领头人的欲念。他放了你——但你知道自己又往深渊迈了一步'}]},
  {text:'你的<span class="npc">道侣</span>在一次双修后突然陷入了<span class="danger-text">昏迷</span>——体内真元枯竭，生机急速流失。你这才意识到，双修从来不是对等的——<span class="mys">五智如来的法门</span>从一开始就在以一方的生机滋养另一方。你是受益者。',
    trigger:{minAge:22,cultivation:35},flagReq:'shuangxiu_deep',choices:[
    {text:'不惜一切代价救回道侣',effect:{cultivation:-30,constitution:-15,sanity:-10,karma:15,connections:10},log:'你反转双修法门，将自己的修为输入道侣体内。你虚弱到几乎站不起来——但道侣终于睁开了眼'},
    {text:'以药石续命',effect:{wealth:-40,cultivation:-10,sanity:-10,karma:5},log:'你倾尽家财买来续命丹药，勉强稳住了道侣的状况。但你知道，再这样下去迟早出事',req:{wealth:40}},
    {text:'继续修炼，牺牲道侣',effect:{cultivation:30,sanity:-30,karma:-30,connections:-20},log:'你看着昏迷的道侣，内心的某个声音说：这是必要的牺牲。你继续修炼了。五智如来在笑——你已经是它的人了'}]},
  // --- 双修终局 ---
  {text:'经过长年累月的双修，你终于触摸到了<span class="mys">血肉天道</span>的边界。在那里你看到了真相——<span class="danger-text">五智如来</span>不是佛。它是一尊以天下苍生的欲望为食的<span class="danger-text">司命</span>。所有修炼欢喜禅的人，都不过是它的<span class="danger-text">养料</span>。而你——已经喂了它太多了。',
    trigger:{minAge:30,cultivation:80},flagReq:'shuangxiu_master',choices:[
    {text:'斩断与五智如来的联系',effect:{cultivation:-40,sanity:20,comprehension:20,karma:20,constitution:-10},log:'你以极大的意志力斩断了和血肉天道的联系。修为大跌——但你终于清醒了。有些力量，代价太大'},
    {text:'成为五智如来的使徒',effect:{cultivation:60,sanity:-40,karma:-30,comprehension:25,connections:-20},log:'你跪在金佛面前说："我愿为你效命。"五智如来的力量灌入你体内——你再也回不了头了'},
    {text:'以人间情爱对抗天道',effect:{cultivation:20,sanity:10,karma:15,comprehension:30,connections:10},log:'你想起了伴侣的笑容、孩子的啼哭。你说："我修的不是你的血肉天道——我修的是人间的爱。"五智如来沉默了。也许，这才是真正的双修之道',achieve:'shuangxiu_resist'}]},
];

// === 跨世界事件 CROSSWORLD EVENTS (大齐·天陈·龙脉) ===
export const CROSSWORLD_EVENTS = [
  // ====== 第一阶段：觉醒·听闻 (age 15+, cultivation 15+) ======
  {text:'你在<span class="loc">鲁城</span>的茶馆里听到一个<span class="npc">白发老者</span>在讲古——他说一千年前，这片土地上不是五国，而是一个叫"<span class="mys">大齐</span>"的统一帝国。"大齐的天空永远不会天黑，"老者压低声音说，"因为有龙脉撑着时辰。后来龙脉断了，天塌了，大齐也跟着碎了。"',
    trigger:{minAge:15,cultivation:15},noFlag:'daqi_aware',choices:[
    {text:'追问大齐的细节',effect:{comprehension:12,sanity:-5,cultivation:5},log:'老者说大齐的都城叫"幽都"，与大梁上京城空间重叠。他还说诸葛渊——那个"司命之下第一人"——就是大齐的遗民。你觉得这老头可能不是在讲故事',setFlag:'daqi_aware'},
    {text:'当作故事听听',effect:{comprehension:5},log:'好听的故事罢了。一千年前的事，谁说得准？'},
    {text:'请老者喝酒套话',effect:{comprehension:10,wealth:-5,connections:5,sanity:-3},log:'三杯下肚，老者说了更多——大齐的皇帝代代化为龙脉，维持着天地秩序。"你们大梁的龙脉？"他冷笑，"那是拼接出来的，一条人体蜈蚣罢了。"',setFlag:'daqi_aware'}]},
  {text:'你在一处古战场遗址发现了一块<span class="itm">金色鳞片</span>状的碎片。碎片入手时，你的脑海中闪过一幅画面——一片<span class="mys">永不天黑</span>的苍穹下，一座巍峨的都城屹立着。画面只持续了一瞬便消失了。',
    trigger:{minAge:16,cultivation:15},noFlag:'daqi_vision',choices:[
    {text:'仔细感应碎片',effect:{comprehension:15,cultivation:10,sanity:-10},log:'那是……龙脉的碎片？你感受到了一个庞大帝国的余韵——大齐。那片永恒白昼的天空令你心神震荡',setFlag:{daqi_vision:true,daqi_aware:true},item:'longmai_suipian'},
    {text:'揣入怀中',effect:{comprehension:5,qiyun:5},log:'你把碎片收好，决定日后再研究',item:'longmai_suipian',setFlag:'daqi_aware'},
    {text:'放回原处',effect:{karma:3},log:'你隐约觉得这东西不该随便带走'}]},
  {text:'一个<span class="npc">落魄书生</span>拦住你，自称是<span class="mys">大齐皇室后裔</span>。他掏出一枚<span class="itm">龙纹玉佩</span>说："你要是去过<span class="loc">龙眠泽</span>，就知道那里的龙气和大梁不一样——那是大齐残留的正统龙脉。"',
    trigger:{minAge:18,cultivation:20},flagReq:'daqi_aware',noFlag:'longmai_aware',choices:[
    {text:'跟他去龙眠泽验证',effect:{comprehension:15,cultivation:10,sanity:-8,wealth:-10},log:'你跟着书生去了龙眠泽。他说的没错——那里的龙气是金色的，和大梁上京城灰白色的龙气截然不同。"大齐的龙脉是正统金龙，"他说，"大梁只是碎片拼成的赝品。"',setFlag:'longmai_aware'},
    {text:'记下他的话',effect:{comprehension:8,connections:5},log:'你记住了——龙眠泽、正统龙脉、大齐。这些线索或许以后有用',setFlag:'longmai_aware'},
    {text:'不理他',effect:{},log:'疯子太多了，你加快脚步走了'}]},

  // ====== 第二阶段：大齐线 (age 20+, cultivation 30+, requires daqi_aware) ======
  {text:'你在<span class="loc">上京城</span>的地底发现了一条<span class="mys">暗道</span>——不是大梁修的，看石砖工艺至少有千年历史。暗道深处有一面石壁，壁上刻着一幅地图：五国的疆界消失了，取而代之的是一个统一帝国的全景。地图正中刻着两个字——"<span class="danger-text">大齐</span>"。',
    trigger:{minAge:20,cultivation:30},flagReq:'daqi_aware',noFlag:'daqi_underground',choices:[
    {text:'深入探索暗道',effect:{comprehension:18,cultivation:15,sanity:-15,constitution:-5},log:'暗道通向一座地下宫殿。宫殿穹顶上绘满了壁画——大齐历代皇帝化为龙脉的场景。最后一幅画上，龙脉断裂，天空碎成五块。你在一面铜镜前驻足——镜中映出的不是你，而是一片永不天黑的天空',setFlag:'daqi_underground'},
    {text:'拓印地图后离开',effect:{comprehension:12,cultivation:5},log:'你拓下了大齐全境图。这东西拿给监天司看，不知道能换多少阳寿丹',setFlag:'daqi_underground'},
    {text:'原路返回',effect:{sanity:5},log:'地下的空气太沉了，你不想冒险'}]},
  {text:'你在修炼中陷入了一个<span class="mys">奇异的梦境</span>——你站在一座巍峨的都城门口，城门上写着"<span class="danger-text">幽都</span>"。天空<span class="mys">永远是白昼</span>，没有太阳也没有月亮，但苍穹明亮如同正午。街上的人穿着一千年前的服饰，但他们看不见你。一个身穿玄色官服、面容刚毅的<span class="npc">男人</span>从你身边经过——他的腰间挂着一柄<span class="itm">笔</span>和一本<span class="itm">老皇历</span>。',
    trigger:{minAge:22,cultivation:35},flagReq:'daqi_aware',noFlag:'daqi_youdu_dream',choices:[
    {text:'跟上那个男人',effect:{comprehension:20,cultivation:15,sanity:-15},log:'你跟了他一路。他走进了一座气势恢宏的衙门——大门上挂着"监天司"的匾额。他就是诸葛渊——活着的诸葛渊，大齐时代的诸葛渊。你终于理解了：幽都和上京城空间重叠，大齐与大梁是同一片土地上的两个历史',setFlag:{daqi_youdu_dream:true,met_zhuge_dream:true}},
    {text:'在幽都中游荡',effect:{comprehension:15,cultivation:10,sanity:-10},log:'你在幽都街头走了很久。这座城和上京城的布局一模一样，但一切都更完整、更有序。大齐的龙气如金色丝线织满了整座城。你醒来时，手心还残留着一丝温热',setFlag:'daqi_youdu_dream'},
    {text:'强行醒来',effect:{sanity:5,comprehension:5},log:'这梦太真实了。你猛地掐了自己一把——醒来后你发现枕头上有一缕金色的光丝'}]},
  {text:'你在<span class="loc">四齐</span>游历时，遇到一个<span class="npc">兵家老兵</span>。他自称当年参加过"<span class="mys">龙脉回归</span>"之战——那是几十年前，大齐的残余力量试图恢复龙脉，但最终失败了。"大齐的人从来没有真的消失，"老兵说，"他们只是被挤到了另一层历史里。天空如果突然变亮，那就是大齐在往回挤。"',
    trigger:{minAge:20,cultivation:25},flagReq:'daqi_aware',locReq:'si_qi',choices:[
    {text:'请教大齐兵家的武技',effect:{cultivation:15,constitution:10,comprehension:8,wealth:-10},log:'老兵教了你几招大齐兵家的古法——以血涂兵书可引煞气暴增。他说大齐兵家的传承比大梁的要正统得多'},
    {text:'打听龙脉回归的细节',effect:{comprehension:15,sanity:-8,connections:10},log:'老兵说龙脉回归需要一个"真命天子"坐上大齐的龙椅。他还说，有人一直在暗中寻找大齐皇室血脉',setFlag:'longmai_huigui_aware'},
    {text:'道谢离开',effect:{connections:5},log:'你向老兵行了一礼。大齐的历史比你想象的复杂得多'}]},

  // ====== 第三阶段：龙脉与诸葛渊 (age 22+, cultivation 40+) ======
  {text:'你在<span class="loc">龙眠泽</span>深处修炼时，突然感受到脚下的<span class="mys">龙气剧烈震荡</span>——金色的龙气从地底涌出，天空出现了一道<span class="danger-text">裂缝</span>。裂缝对面是一片永不天黑的天空。你看到了<span class="mys">幽都</span>的轮廓，就悬浮在裂缝之中。一个<span class="npc">身影</span>站在裂缝边缘，向你这边望过来。',
    trigger:{minAge:22,cultivation:40},flagReq:'daqi_youdu_dream',locReq:'long_min',choices:[
    {text:'走向裂缝',effect:{cultivation:25,comprehension:20,sanity:-20,constitution:-10},log:'你穿过了裂缝——一瞬间你同时身处两个世界。大齐和大梁重叠在一起，你看到了同一条街上大齐的行人和大梁的商贩互相穿过彼此。那个身影是诸葛渊的<span class="mys">残影</span>——他已死多年，但以心蟠之力维持着大齐的"存在"。他只说了一句话："龙脉断裂之日，世界将再次分崩。"',setFlag:'crossed_worlds'},
    {text:'在裂缝前感悟',effect:{cultivation:15,comprehension:18,sanity:-10},log:'你没有贸然穿过去，而是在裂缝边打坐。两个世界的灵气同时灌入你体内——大齐的金色龙气和大梁的灰白龙气混合在一起，让你对天地秩序有了全新的理解'},
    {text:'后退',effect:{sanity:5,comprehension:8},log:'裂缝在你退后的同时关闭了。你呆坐了很久，不确定刚才看到的是真是假'}]},
  {text:'你在<span class="loc">杏岛</span>上诸葛渊曾修炼的地方打坐时，一个<span class="mys">虚幻的身影</span>出现在你面前。他手持<span class="itm">判官笔</span>，腰佩<span class="itm">六曜通书</span>，面容虽已模糊，但气势如山如海——这是<span class="npc">诸葛渊</span>的残魂。"<span class="mys">你能看到我，说明你已经触碰到了两重历史的边界。</span>"他说。',
    trigger:{minAge:24,cultivation:45},flagReq:'daqi_youdu_dream',locReq:'xing_dao',choices:[
    {text:'请教跨世界之法',effect:{comprehension:25,cultivation:20,sanity:-20,connections:10},log:'诸葛渊说："大傩世界有五重历史空间重叠，对应佛门五方。已知的有大齐、大梁、天陈——大齐是正统原史，大梁是分裂分支，天陈……"他顿了顿，"天陈是比大齐更早的存在，拥有最古老的金龙龙脉。还有两重未知历史，至今无人到达过。穿越其间需要龙脉碎片为引、心蟠之力为桥。"他递给你一枚金色令符',setFlag:'met_zhuge_spirit',item:'daqi_jinfu'},
    {text:'询问大齐的命运',effect:{comprehension:18,cultivation:10,sanity:-12,karma:5},log:'诸葛渊说他用心蟠之力维持着大齐的残存，但已力竭。"龙脉需要新的皇帝，新的牺牲。"他看向远方——"高智坚身上流着大齐龙脉之血。如果他能登上龙椅……大齐或许还有救。"',setFlag:'met_zhuge_spirit'},
    {text:'默默感受他的气息',effect:{cultivation:15,comprehension:12,sanity:-8},log:'你没有说话，只是感受着"司命之下第一人"的余威。诸葛渊看了你一眼便消散了。但他的气息让你的修为有了突破',setFlag:'met_zhuge_spirit'}]},
  {text:'你得到了<span class="itm">大齐金符</span>后，每到夜深人静时便能隐约<span class="mys">看到两个世界的重叠</span>——大梁的街道上浮现出大齐幽都的轮廓，路人之间穿行着一千年前的鬼影。你发现<span class="npc">高智坚</span>——那个自称大齐皇族后裔的年轻人——确实与龙脉有着非同寻常的联系。他走过的地方，大齐的影像更加清晰。',
    trigger:{minAge:24,cultivation:45},flagReq:'met_zhuge_spirit',noFlag:'gaozhi_contact',choices:[
    {text:'私下联络高智坚',effect:{connections:15,cultivation:10,comprehension:12,sanity:-10,qiyun:-5},log:'你找到了高智坚。他并不惊讶——"你也看到了？"他握着龙纹玉佩说，"诸葛渊告诉我，龙脉断裂之时便是我即位之日。但代价是……历代大齐皇帝，都要化为龙脉的一部分。"',setFlag:{gaozhi_contact:true,longmai_huigui_aware:true}},
    {text:'暗中观察高智坚',effect:{comprehension:10,connections:5,sanity:-5},log:'你远远地跟着高智坚。他去了龙眠泽、去了上京城地下、去了四齐……他在寻找续接龙脉的方法。大齐的复兴不是传说，而是正在发生的事',setFlag:{gaozhi_contact:true}},
    {text:'不介入此事',effect:{sanity:5,karma:3},log:'帝王将相的事，你一个普通修士还是别掺和了'}]},

  // ====== 第四阶段：天陈线 (age 25+, cultivation 50+) ======
  {text:'你在<span class="loc">南疆</span>深处的一座古庙中发现了一块<span class="itm">墨绿古玉</span>。玉上刻着你看不懂的古文——不是大梁文，也不是大齐文，更古老。握住古玉时，你的耳边响起了<span class="mys">树木疯长</span>的声音，仿佛整片森林在呼吸。一个低沉的声音说："<span class="danger-text">天陈的子民，已经一千年没有新人来过了。</span>"',
    trigger:{minAge:25,cultivation:50},noFlag:'tianchen_aware',choices:[
    {text:'回应那个声音',effect:{comprehension:20,cultivation:15,sanity:-15,constitution:5},log:'你问："天陈是什么？"声音说："比大齐更古老的国度。大齐分裂为五国，但天陈从未分裂——因为天陈的龙脉是最古老、最完整的金龙。掌管它的人叫左丘咏，他拥有<span class="mys">生长天道</span>。"',setFlag:'tianchen_aware',item:'tianchen_guyu'},
    {text:'放下古玉',effect:{sanity:5,comprehension:8},log:'你把古玉放回了原处。但那个声音在你脑中回荡了很久——天陈，一个比大齐更古老的国度'},
    {text:'带走古玉研究',effect:{comprehension:12,cultivation:8,sanity:-8},log:'你把古玉揣入怀中。也许能找到懂古文的人来翻译',item:'tianchen_guyu',setFlag:'tianchen_aware'}]},
  {text:'你在<span class="loc">边境</span>目睹了一个不可思议的场景——一片<span class="danger-text">枯死的树林在一夜之间疯长</span>，从残枝败叶变成了参天巨木。巨木之间出现了一座<span class="mys">古城</span>的虚影，城中的人穿着你从未见过的服饰。一个<span class="npc">身披树叶甲胄的武将</span>从虚影中走出，他的脚踏过之处，草木以肉眼可见的速度生长。他就是——<span class="danger-text">左丘咏</span>。',
    trigger:{minAge:26,cultivation:55},flagReq:'tianchen_aware',noFlag:'met_zuoqiu',choices:[
    {text:'上前搭话',effect:{comprehension:20,cultivation:20,sanity:-20,connections:15,constitution:-8},log:'左丘咏低头看着你，眼神古老而悲悯。"你是大梁人？"他说，"告诉你们的监天司——天陈不是入侵，是<span class="danger-text">回归</span>。这片土地的生长天道一直在我手里。"他走后，你脚下的土地开了一朵金色的花',setFlag:'met_zuoqiu'},
    {text:'远远观察',effect:{comprehension:15,cultivation:10,sanity:-12},log:'你不敢靠近。左丘咏的存在感太强了——他不是修士，他是<span class="danger-text">肉身司命</span>，掌管生长天道的存在。在他面前你连呼吸都困难。他扫了你一眼便走了，但那一眼就让你修为精进了一大截',setFlag:'met_zuoqiu'},
    {text:'逃跑',effect:{sanity:-5,constitution:3},log:'你转身就跑。那个级别的存在，看你一眼你就得死'}]},
  {text:'你听说<span class="fac">监天司</span>召开了紧急会议——<span class="danger-text">天陈国</span>的势力正在向大梁边境推进。和法教入侵不同，天陈的入侵是<span class="mys">无声的</span>——只要左丘咏经过的地方，草木便会疯长成密林，大梁的城镇被森林吞噬，百姓不得不撤离。监天司称其为"<span class="danger-text">绿潮</span>"。',
    trigger:{minAge:27,cultivation:50},flagReq:'tianchen_aware',noFlag:'tianchen_invasion_aware',choices:[
    {text:'加入抵抗天陈的行动',effect:{cultivation:15,connections:15,karma:10,constitution:-5,sanity:-10},log:'你加入了监天司组织的抵抗力量。但你很快发现——天陈的修士能<span class="danger-text">直接触碰天道</span>，个体实力远超大梁修士。一个天陈士兵就能打十个大梁精锐',setFlag:{tianchen_invasion_aware:true,resist_tianchen:true}},
    {text:'打听天陈的弱点',effect:{comprehension:15,connections:10,sanity:-8},log:'你四处打听。一个老修士说："天陈强在龙脉——他们有最古老最完整的金龙龙脉。要抗衡天陈，大梁的龙脉得先续上。"他看了看天空，"诸葛渊也是这么想的。"',setFlag:'tianchen_invasion_aware'},
    {text:'避开战乱',effect:{sanity:5,qiyun:-5,wealth:-10},log:'你收拾行李向内陆撤退。天陈的事，交给监天司和那些大人物吧',setFlag:'tianchen_invasion_aware'}]},
  {text:'你从<span class="fac">白莲教</span>的人口中得知了一个惊人的消息：<span class="loc">天陈</span>竟然就是白莲教传说中的"<span class="mys">真空家乡</span>"——那个无生老母的原初领地。天陈入侵大梁的真正目的不是领土，而是要杀死<span class="npc">白灵淼</span>——无生老母的心蟠。"天潢贵胄背叛了无生老母，"白莲教长老说，"他们要斩草除根。"',
    trigger:{minAge:28,cultivation:55},flagReq:'tianchen_invasion_aware',choices:[
    {text:'帮助白莲教保护白灵淼',effect:{connections:15,karma:15,cultivation:10,sanity:-10,constitution:-5},log:'你加入了护送白灵淼的队伍。天陈的追兵无处不在——每一片树林都可能是敌人的眼睛。白灵淼白发红瞳，面容安详，她说："无生老母不会让天陈得逞的。"',setFlag:'protect_bailingmiao'},
    {text:'中立观望',effect:{comprehension:10,sanity:-5},log:'帝王将相、司命纷争——你一个小修士能做什么？但你心中不安——如果白灵淼死了，无生老母的慈悲天道将被天陈吞噬'},
    {text:'把情报卖给监天司',effect:{wealth:30,connections:10,karma:-5},log:'你把白莲教的情报转交给了监天司。他们面色凝重——这场战争比他们想象的复杂得多'}]},

  // ====== 第五阶段：龙脉续接·跨世界交汇 (age 28+, cultivation 60+) ======
  {text:'大梁龙脉出现了<span class="danger-text">崩裂</span>的征兆——上京城的城墙开裂，大地震颤不止，天空出现了诡异的双色——一半是大梁的正常天色，一半是<span class="mys">大齐永恒的白昼</span>。街上的百姓恐慌奔逃，修士们纷纷自保。诸葛渊曾说过的话应验了：<span class="danger-text">"龙脉断裂之日，世界将再次分崩。"</span>',
    trigger:{minAge:28,cultivation:60},flagReq:'longmai_huigui_aware',noFlag:'longmai_crisis',mandatory:true,choices:[
    {text:'赶往龙眠泽稳定龙脉',effect:{cultivation:20,constitution:-15,sanity:-15,comprehension:15,karma:10},log:'你赶到龙眠泽时，金色龙气正从地底喷涌。你用尽全力将灵气灌入大地——但你一个人根本无济于事。龙脉需要的不是修为，而是一个愿意以身化龙的皇帝',setFlag:'longmai_crisis',combat:50},
    {text:'寻找高智坚',effect:{connections:15,cultivation:10,sanity:-10,comprehension:10},log:'你找到了高智坚——他已经知道了。他站在上京城最高处，看着双色天空说："到时候了。"他身上的龙脉之血开始发光',setFlag:{longmai_crisis:true,gaozhi_contact:true}},
    {text:'保护家人和周围的人',effect:{karma:15,connections:10,constitution:-5,sanity:-5},log:'你没有去管那些跨世界的大事，而是拼命保护身边的人。大地震颤时你护住了几个孩子——也许这才是你该做的',setFlag:'longmai_crisis'}]},
  {text:'<span class="npc">高智坚</span>决定登上大齐的龙椅——以自身血脉续接断裂千年的龙脉。仪式在<span class="loc">上京城</span>地底的<span class="mys">幽都遗宫</span>中进行，三重历史在此刻交汇。你亲眼看到了大齐、大梁、天陈三个世界<span class="danger-text">同时显现</span>——三座都城叠在一起，三个时代的人在同一空间中穿行。高智坚身穿大齐龙袍坐上了龙椅，他的身体开始<span class="danger-text">金光透体</span>，正在化为龙脉的一部分。',
    trigger:{minAge:29,cultivation:65},flagReq:'longmai_crisis',flagReq2:'gaozhi_contact',noFlag:'longmai_succession',mandatory:true,choices:[
    {text:'为高智坚护法',effect:{cultivation:30,constitution:-10,sanity:-20,comprehension:20,karma:15},log:'你站在幽都遗宫中为高智坚护法。天陈的刺客、坐忘道的暗手纷纷涌来——他们不想让龙脉续接成功。你拼死抵挡，为高智坚争取了最后一刻时间。金龙龙脉重新贯通大地——天空恢复了正常。但高智坚的下半身已经化为金色鳞片',setFlag:'longmai_succession',combat:60},
    {text:'帮助稳定三界结构',effect:{cultivation:25,comprehension:25,sanity:-18,constitution:-8,karma:10},log:'你用修为帮助稳定三个世界的交界面。在那一刻你同时存在于三个历史中——大齐的白昼、大梁的日落、天陈的远古密林。你感受到了天地秩序的本质——龙脉不是一条龙，而是世界本身的骨架',setFlag:'longmai_succession'},
    {text:'记录下这一切',effect:{comprehension:20,cultivation:15,sanity:-10,karma:5},log:'你站在角落，把一切刻在脑海里。三重历史交汇、龙脉续接、高智坚化龙——这是改写天地格局的大事，而你是见证者之一。日后如果有人问起，你会说："我在场。"',setFlag:'longmai_succession'}]},
  {text:'龙脉续接之后，大梁恢复了平静——但你知道世界已经不一样了。三重历史的边界变得<span class="mys">更加模糊</span>：偶尔能在夜间看到大齐幽都的灯火，边境的森林里隐约有天陈古城的回声。你在修炼中能感受到三条龙脉的共鸣——大梁的灰白、大齐的金色、天陈的墨绿。',
    trigger:{minAge:30,cultivation:70},flagReq:'longmai_succession',choices:[
    {text:'尝试沟通三条龙脉',effect:{cultivation:35,comprehension:25,sanity:-25,constitution:-10},log:'你在三条龙脉的交汇点打坐。三种力量在你体内流转——你仿佛看到了一千年前大齐分裂的那一刻，也看到了更早之前天陈建国的那一天。你对天地秩序的理解突破了凡人的极限',achieve:'crossworld_witness'},
    {text:'以龙脉之力修炼',effect:{cultivation:30,comprehension:15,sanity:-15,qiyun:10},log:'三条龙脉的灵气让你的修为暴涨——但你清楚地感到自己正站在凡人与非凡之间的界限上'},
    {text:'安然接受新世界',effect:{sanity:10,karma:10,comprehension:15,qiyun:5},log:'你没有贪求更多力量，只是安然接受了这个更加丰富的世界。三重历史共存——也许这才是天地本来的面貌'}]},

  // ====== 特殊：道具触发的跨世界事件 ======
  {text:'你握着<span class="itm">时辰沙漏</span>发现了一个秘密——沙粒向上流的速度和大齐的"时辰"完全吻合。大齐的世界里没有正常的昼夜交替，时间由龙脉维持。当你倒转沙漏时，周围的世界<span class="mys">闪烁</span>了——大梁的街道变成了大齐的幽都，又在一瞬间恢复。',
    trigger:{minAge:20,cultivation:25},flagReq:'daqi_aware',choices:[
    {text:'反复尝试倒转',effect:{comprehension:18,cultivation:12,sanity:-15},log:'每次倒转你都能短暂看到大齐的世界。你发现两个世界在某些地方"缝合"得不好——有些地方大齐的建筑会突然出现在大梁的街道上，然后消失'},
    {text:'小心收好沙漏',effect:{comprehension:8,sanity:-3},log:'这东西太危险了。你把沙漏用布包好，放在最里面的口袋里'}],
    itemReq:'shichen_shalou'},
  {text:'<span class="itm">天陈古玉</span>在你手中突然发出了耀眼的绿光——一个<span class="mys">女人的声音</span>从玉中传出："母亲……无生老母……回来……"你意识到这块古玉和<span class="fac">白莲教</span>有着千丝万缕的联系——天陈曾是无生老母的领地，而这块古玉可能是她留下的信物。',
    trigger:{minAge:22,cultivation:30},flagReq:'tianchen_aware',choices:[
    {text:'以灵力灌入古玉',effect:{comprehension:20,cultivation:15,sanity:-18,karma:5},log:'古玉显现了一段远古记忆——天陈建国之初，无生老母以慈悲天道与生长天道共同守护这片土地。后来天潢贵胄背叛了她，左丘咏夺走了生长天道。从此无生老母只剩慈悲与死亡，天陈变成了一个没有慈悲的国度'},
    {text:'把古玉交给白莲教',effect:{connections:15,karma:10,qiyun:5},log:'白莲教的人看到古玉后跪地痛哭——"这是圣母的遗物！真空家乡确实存在！"'}],
    itemReq:'tianchen_guyu'},
  {text:'你将<span class="itm">龙脉碎片</span>和<span class="itm">大齐金符</span>放在一起时，两件器物发出了<span class="mys">共鸣</span>。一道金色光柱冲天而起——你的意识被拉入了一个<span class="danger-text">完全不同的空间</span>。这是大齐幽都的皇宫，正统的金龙龙脉从皇座下盘旋而上。龙脉之上坐着一个半人半龙的存在——那是大齐最后一位皇帝的龙魂。他开口了："<span class="mys">大齐还有救吗？</span>"',
    trigger:{minAge:25,cultivation:50},flagReq:'met_zhuge_spirit',choices:[
    {text:'"有。高智坚身上有大齐的血。"',effect:{comprehension:25,cultivation:20,sanity:-20,qiyun:10,karma:10},log:'龙魂沉默了很久，然后点了点头。"那就拜托你——告诉他，龙椅在等他。代价他应该知道了。"金光消散，你回到了现实。手中的龙脉碎片已经碎成了粉末——它的使命完成了',setFlag:'longmai_huigui_aware'},
    {text:'"我不知道。"',effect:{comprehension:15,sanity:-12,karma:5},log:'龙魂叹了口气。"这是实话。"他说，"千年等一回答，却等来了\u2018不知道\u2019——但至少你没有骗我。"他赐了你一缕龙气后消散了'},
    {text:'"大齐已经过去了。"',effect:{comprehension:10,sanity:-8,karma:-5},log:'龙魂的表情变得悲伤。"也许你是对的。"他说完便消散了。皇座上留下了一滴金色的泪珠——那是千年龙魂最后的遗存'}],
    itemReq:'longmai_suipian'},
];

// === TALENT CONFLICTS (bidirectional) ===
export const TALENT_CONFLICTS = {
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
  gui_ying: ['jian_kang'],
  fan_gu: ['kou_cai'],
  tong_ling: ['yu_ben'],
  yin_ti: ['jian_kang','tie_gu'],
  chi_she: ['zhi_hui','duo_mou','ling_gen'],
  liu_lang: ['fu_gui','jing_shang','shang_jia'],
  shang_jia: ['pin_kun','du_zhai','liu_lang'],
  gu_wu: ['ti_ruo','can_ji','chi_she'],
};

// === ATTRIBUTE TOOLTIP DESCRIPTIONS ===
export const STAT_TOOLTIPS = {
  age: '你在这一世的年龄',
  sanity: '神志：仅心素天赋可见。降至0则陷入永恒疯狂。受两界之力影响波动。',
  cultivation: '修为：修炼境界，决定力量等级和寿命上限。凡人寿82，锻体90，练气100，筑基120，金丹150，元婴200，化神300，大乘500，肉身司命800，天人合一1200。',
  wealth: '金银：身上的钱财。降至-80会饿死街头。',
  connections: '人脉：你在江湖中的社交关系网络。影响可触发的事件和势力互动。',
  comprehension: '悟性：对道的理解程度(0-100)。每30点悟性提升1点年修炼速度。影响高级事件触发。',
  qiyun: '气运：气运值(-100~100)。正值为善运，负值为厄运。极端值触发气运事件，影响结局。',
  karma: '因果：因果值(-100~100)。善行增因果，恶行减因果。极端值触发因果事件。影响门派准入和特殊结局。',
  constitution: '体魄：身体强度(0-100)。每10点体魄增加5年寿命。高修为可延缓衰老。降至0则肉身崩溃而死。部分门派入门有体魄要求。',
  faction: '当前所属势力及门内等级。修为提升可晋升门内等级，获得更多资源和地位。只能加入一个门派，叛出有严重代价。脱离门派后成为散修。',
};

// === KARMA EVENTS (triggered by karma thresholds) ===
export const KARMA_EVENTS = [
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
  // Medium karma events
  {text:'你在路上遇到一个受伤的<span class="npc">孩子</span>，他说被<span class="danger-text">山贼</span>劫了。',
    karmaReq:{min:10},choices:[
    {text:'救治并送他回家',effect:{karma:10,connections:5,wealth:-5},log:'孩子的父母千恩万谢，给你包了红包你没收'},
    {text:'给他指路',effect:{karma:3},log:'你指了个方向就走了'},
    {text:'身上有值钱的东西吗',effect:{karma:-10,wealth:5},log:'你翻了翻他的包袱，找到了几两碎银'}]},
  {text:'你曾经帮过的一个<span class="npc">人</span>，如今发达了，专程来<span class="itm">报恩</span>。',
    karmaReq:{min:40},choices:[
    {text:'欣然接受',effect:{wealth:30,connections:15,qiyun:5},log:'善有善报，你曾经的善举终于有了回报'},
    {text:'不用客气',effect:{karma:10,connections:10},log:'你挥挥手让他走了，但心里暖暖的'}]},
  {text:'你梦中见到一座<span class="mys">金色佛塔</span>，有声音说："汝积善甚厚，赐悟性通灵。"',
    karmaReq:{min:60},choices:[
    {text:'虔心接受',effect:{comprehension:15,cultivation:10,karma:5},log:'醒来后你感到灵台清明，仿佛打开了一扇新的门'},
    {text:'不受嗟来之食',effect:{comprehension:5,karma:5},log:'你不愿依赖他人的恩赐'}]},
  // Negative karma consequences
  {text:'你走在路上，一块瓦片从天而降砸在你头上——这绝非偶然。',
    karmaReq:{max:-20},choices:[
    {text:'反思自己',effect:{karma:8,comprehension:3,constitution:-3},log:'也许是自己做了太多坏事...'},
    {text:'骂骂咧咧走开',effect:{karma:-3,constitution:-2},log:'你摸着头上的包，越想越气'}]},
  {text:'你的<span class="danger-text">恶名</span>传遍了四方——有些门派明确表示不欢迎你。',
    karmaReq:{max:-40},choices:[
    {text:'收敛行为',effect:{karma:10,connections:5},log:'你开始刻意行善，试图改变自己的名声'},
    {text:'恶人自有恶人磨',effect:{karma:-5,cultivation:8},log:'别人越怕你，你越强——这也是一种修行'}]},
  {text:'因果报应不爽——你的<span class="danger-text">敌人</span>们联合起来对付你。',
    karmaReq:{max:-60},choices:[
    {text:'以一敌多',effect:{cultivation:10,constitution:-10,karma:-5},log:'你拼死杀出重围，但身上伤痕累累',combat:80},
    {text:'跪地求饶',effect:{karma:15,connections:-10,wealth:-20},log:'你交出了财物和尊严，换来一条命'}]},
];

// === CULTIVATION TIER EVENTS (filtered by cultivation range) ===
export const CULTIVATION_TIER_EVENTS = [
  // --- 凡人 tier (cultMin:0, cultMax:3) ---
  {text:'你走在夜路上，突然窜出几个<span class="danger-text">小毛贼</span>，把你仅有的铜板抢了个干净。',
    cultMin:0,cultMax:3,trigger:{minAge:10},choices:[
    {text:'大喊抓贼',effect:{connections:3,constitution:2},log:'路人帮忙追回了一些铜板'},
    {text:'自认倒霉',effect:{wealth:-10,comprehension:2},log:'穷人的命不值钱'},
    {text:'记住他们的脸',effect:{comprehension:3,karma:-3},log:'总有一天你会报这个仇'}]},
  {text:'路边蹲着一个衣衫褴褛的<span class="npc">乞丐</span>，他用浑浊的眼睛盯着你看了半天，忽然说："你身上有<span class="mys">气</span>。"',
    cultMin:0,cultMax:3,trigger:{minAge:12},choices:[
    {text:'追问他什么意思',effect:{comprehension:5,sanity:-3},log:'乞丐说完就走了，留你在风中发呆'},
    {text:'给他一些吃的',effect:{karma:5,connections:2},log:'乞丐接过食物，冲你笑了笑'},
    {text:'赶紧走开',effect:{sanity:2},log:'这年头疯子太多了'}]},
  {text:'隔壁村传来消息，说<span class="loc">后山</span>的废宅里<span class="danger-text">闹鬼</span>了——半夜能听到女人的哭声。',
    cultMin:0,cultMax:3,trigger:{minAge:10},choices:[
    {text:'壮着胆子去看',effect:{cultivation:3,sanity:-8,comprehension:5},log:'你什么都没看到，但浑身鸡皮疙瘩起了一路'},
    {text:'避而远之',effect:{sanity:3},log:'鬼神之事少沾为妙'},
    {text:'跟村里人打听',effect:{connections:3,comprehension:3},log:'老人们说那宅子死过人，怨气未散'}]},
  {text:'你亲眼看到一个人在街上<span class="danger-text">口吐白沫</span>，浑身抽搐，嘴里说着不属于他的声音——旁人说他被<span class="mys">邪祟附体</span>了。',
    cultMin:0,cultMax:3,trigger:{minAge:13},choices:[
    {text:'试着帮忙',effect:{karma:5,constitution:-3,sanity:-5},log:'你拉住他却被甩出好远，你根本无能为力'},
    {text:'去请修行人来',effect:{connections:5,wealth:-5},log:'修行人来时那人已经断气了...'},
    {text:'吓得跑开',effect:{sanity:-3},log:'那不属于人的声音在你耳边回响了很久'}]},
  {text:'村口的<span class="npc">算命先生</span>拉住你，说你面相奇特——"有修仙之缘，却也有<span class="danger-text">早夭之相</span>"。',
    cultMin:0,cultMax:3,trigger:{minAge:11},choices:[
    {text:'请他详细看看',effect:{comprehension:5,wealth:-5,sanity:-3},log:'算命先生说你命中注定要走一条不寻常的路'},
    {text:'不信这些',effect:{sanity:3,comprehension:2},log:'命运是自己走出来的'},
    {text:'偷偷记在心里',effect:{comprehension:3,qiyun:2},log:'也许...真有修仙这回事？'}]},

  // --- 锻体 tier (cultMin:3, cultMax:10) ---
  {text:'清晨打坐时，你忽然感受到天地间有一种看不见的<span class="mys">灵气</span>在流动——这是你第一次触碰到修行的门槛！',
    cultMin:3,cultMax:10,trigger:{minAge:13},choices:[
    {text:'尝试吸纳灵气',effect:{cultivation:8,constitution:3,comprehension:5},log:'灵气涌入体内的感觉如同久旱逢甘霖！'},
    {text:'仔细感受不急着修炼',effect:{comprehension:8,sanity:3},log:'你记住了灵气流动的规律，这对日后大有帮助'},
    {text:'兴奋地告诉别人',effect:{connections:5,cultivation:3},log:'修行人嘲笑你大惊小怪，但也有人投来羡慕的目光'}]},
  {text:'夜间赶路时，你发现自己在原地<span class="danger-text">绕圈</span>——这是<span class="mys">鬼打墙</span>！一种低级邪祟的伎俩。',
    cultMin:3,cultMax:10,trigger:{minAge:14},choices:[
    {text:'用学到的驱邪法破解',effect:{cultivation:5,comprehension:5,sanity:-3},log:'你用最基本的驱邪手段破了鬼打墙，邪祟哀嚎着散去'},
    {text:'闭眼凭感觉走',effect:{comprehension:3,constitution:2,sanity:-5},log:'你跌跌撞撞走出了鬼打墙，但心有余悸'},
    {text:'大喊大叫壮胆',effect:{sanity:-3,qiyun:2},log:'你的叫声惊动了附近的修行人，他帮你解了围'}]},
  {text:'你的眼前忽然蒙上一层雾——看什么都像隔了一层纱，这是<span class="mys">鬼遮眼</span>！',
    cultMin:3,cultMax:10,trigger:{minAge:14},choices:[
    {text:'咬破舌尖喷血破邪',effect:{cultivation:5,constitution:-3,sanity:3},log:'鲜血蕴含阳气，鬼遮眼当即被破'},
    {text:'用灵气冲击双目',effect:{cultivation:5,comprehension:3,sanity:-5},log:'灵气驱散了迷雾，你看到了藏在暗处的一团黑影'},
    {text:'原地不动等它消失',effect:{sanity:-8,comprehension:2},log:'半个时辰后鬼遮眼自行消散，但你已被吓得不轻'}]},
  {text:'路过一处<span class="loc">修行之地</span>，你远远看到有人盘膝而坐，周身灵气环绕——那是真正的修行者在修炼。',
    cultMin:3,cultMax:10,trigger:{minAge:13},choices:[
    {text:'上前请教',effect:{connections:5,comprehension:8,cultivation:3},log:'修行者见你有缘，指点了你几句入门心法'},
    {text:'远远观摩',effect:{comprehension:5,cultivation:3},log:'光是看着就让你心生向往——总有一天你也要达到那个境界'},
    {text:'暗中模仿他的修炼方式',effect:{cultivation:5,sanity:-3},log:'你学了个大概，但没有心法指引，修炼起来磕磕绊绊'}]},
  {text:'你在锻体过程中感到<span class="danger-text">经脉发热</span>，似乎有什么东西在体内觉醒——但你不确定那是好事还是坏事。',
    cultMin:3,cultMax:10,trigger:{minAge:15},choices:[
    {text:'顺其自然让它觉醒',effect:{cultivation:8,constitution:3,sanity:-5},log:'一股暖流在经脉中运行了一个周天，你的锻体修行更进一步'},
    {text:'强行压制',effect:{constitution:5,comprehension:3},log:'你不敢冒险，选择稳扎稳打'},
    {text:'找人帮你查看',effect:{connections:3,wealth:-5,comprehension:5},log:'前辈说你体内有一丝先天灵气，好好培养前途无量'}]},

  // --- 练气 tier (cultMin:10, cultMax:30) ---
  {text:'你在荒野遇到一具<span class="danger-text">走尸</span>——它穿着破烂的衣服，双目无神地朝你走来。这是最常见的低阶邪祟。',
    cultMin:10,cultMax:30,trigger:{minAge:16},choices:[
    {text:'以灵气斩杀走尸',effect:{cultivation:5,comprehension:3,karma:3},log:'走尸在你的灵气攻击下化为灰烬',combat:20},
    {text:'将它引走避开',effect:{comprehension:3,sanity:-3},log:'走尸追了你一段路就停了，它的活动范围有限'},
    {text:'查看走尸身上有没有线索',effect:{comprehension:5,cultivation:3,sanity:-5},log:'走尸身上有一枚令牌，上面刻着某个门派的标记'}]},
  {text:'深山中，你撞见了一只<span class="danger-text">人面蜘蛛</span>——人的脸长在蜘蛛的身体上，嘴里还在念念有词。',
    cultMin:10,cultMax:30,trigger:{minAge:18},locReq:'nan_jiang',choices:[
    {text:'出手斩杀',effect:{cultivation:8,constitution:-3,karma:3,sanity:-8},log:'人面蜘蛛临死前用人的声音说了一句"谢谢"——它曾经是人',combat:30},
    {text:'以符咒将它封印',effect:{cultivation:5,comprehension:5,sanity:-5},log:'你将人面蜘蛛封在一块石头里，带着它离开'},
    {text:'转身就跑',effect:{constitution:3,sanity:-5},log:'你跑出去好远才敢回头——身后空无一人'}]},
  {text:'一具<span class="danger-text">行尸</span>出现在路上——比走尸更强，它还保留着生前的部分武艺！',
    cultMin:10,cultMax:30,trigger:{minAge:17},choices:[
    {text:'正面迎战',effect:{cultivation:8,constitution:-3,comprehension:3},log:'你与行尸搏斗数十回合，最终将它打散',combat:35},
    {text:'以巧取胜',effect:{cultivation:5,comprehension:5,sanity:-3},log:'你利用地形和符咒消灭了行尸',req:{comprehension:15}},
    {text:'呼叫同伴帮忙',effect:{connections:3,cultivation:3},log:'你和同伴合力消灭了行尸'}]},
  {text:'你第一次和邪祟<span class="danger-text">正面交锋</span>——对方是一团黑雾形态的怨灵，能冻结你周围的空气。',
    cultMin:10,cultMax:30,trigger:{minAge:18},choices:[
    {text:'以灵气硬抗',effect:{cultivation:10,constitution:-5,sanity:-8,comprehension:5},log:'你几乎拼尽全力才将怨灵驱散——原来邪祟如此可怕',combat:40},
    {text:'诵驱邪咒',effect:{cultivation:8,sanity:-5,comprehension:5},log:'驱邪咒发挥了作用，怨灵在咒声中痛苦消散'},
    {text:'拖延等天亮',effect:{constitution:-3,sanity:-10,comprehension:3},log:'你死死撑到天亮，阳光一出，怨灵自行散去——但你也快虚脱了'}]},
  {text:'你感知到一处<span class="mys">灵气异常</span>的地方——那里的植物枯死、动物绝迹，只有一棵歪脖子树上挂着什么东西。',
    cultMin:10,cultMax:30,trigger:{minAge:17},choices:[
    {text:'靠近查看',effect:{cultivation:8,sanity:-10,comprehension:8},log:'树上挂着的是一件法器残片，上面残留着强大的邪气'},
    {text:'在远处以灵力探查',effect:{comprehension:8,cultivation:5},log:'你感知到地下埋着什么东西，但你不敢挖'},
    {text:'做好标记以后再来',effect:{comprehension:3},log:'你记下了位置，日后修为更高时再来探索'}]},

  // --- 筑基 tier (cultMin:30, cultMax:60) ---
  {text:'你在一座古寺中看到了传说中的<span class="danger-text">肉身佛</span>——一尊金光闪闪的佛像里，包裹着一具真人的尸体。最诡异的是，它的手指还在微微颤动。',
    cultMin:30,cultMax:60,trigger:{minAge:20},locReq:'zheng_de_si',choices:[
    {text:'以灵力探查肉身佛',effect:{cultivation:10,comprehension:10,sanity:-15},log:'肉身佛里的人还活着！他被封在里面已经上百年，处于一种非死非活的状态'},
    {text:'将肉身佛打碎解救他',effect:{cultivation:8,karma:10,constitution:-5,sanity:-10},log:'你打碎佛像，里面的人睁开眼，说了句"别让我出来"后化为飞灰',combat:45},
    {text:'向寺中僧人询问',effect:{connections:5,comprehension:8},log:'僧人面色惊慌地把你赶了出去'}]},
  {text:'你发现了一个被囚禁的<span class="danger-text">活人彘</span>——被人砍去四肢、挖去双眼，却被邪法维持着生命。它在对你求救。',
    cultMin:30,cultMax:60,trigger:{minAge:20},choices:[
    {text:'救下他并送去医治',effect:{karma:15,wealth:-15,connections:5,sanity:-10},log:'你将人彘救下，但他已经失去了活下去的意志'},
    {text:'给他一个痛快',effect:{karma:5,sanity:-5},log:'你结束了他的痛苦，这也许是最大的慈悲'},
    {text:'追查是谁做的',effect:{cultivation:5,comprehension:8,sanity:-8,connections:3},log:'你顺着线索查到了一个邪修的巢穴'}]},
  {text:'<span class="fac">坐忘道</span>的人盯上了你——一个戴面具的人出现在你面前，说<span class="npc">骰子</span>对你很感兴趣。',
    cultMin:30,cultMax:60,trigger:{minAge:22},choices:[
    {text:'拒绝并驱逐他',effect:{cultivation:5,connections:-5,sanity:5},log:'面具人笑着消失了，但你知道坐忘道不会善罢甘休',combat:50},
    {text:'试着和他周旋套话',effect:{comprehension:10,connections:5,sanity:-10},log:'你从他口中得知了坐忘道的一些内幕——他们在寻找"心蟠"'},
    {text:'假意答应暗中调查',effect:{comprehension:8,cultivation:5,karma:-3,sanity:-5},log:'你假装被拉拢，实则在暗中搜集坐忘道的情报'}]},
  {text:'你接到了一个<span class="danger-text">驱邪任务</span>——某个村子被邪祟笼罩，三天内死了七个人，急需筑基以上的修士前去。',
    cultMin:30,cultMax:60,trigger:{minAge:21},choices:[
    {text:'独自前往',effect:{cultivation:12,karma:10,constitution:-5,sanity:-10,comprehension:5},log:'你花了三天三夜才将邪祟驱散——它比你想象的强大得多',combat:55},
    {text:'召集同伴一起去',effect:{cultivation:8,connections:8,karma:8},log:'你们合力将邪祟消灭，村民感恩戴德'},
    {text:'要求高额报酬再去',effect:{cultivation:8,wealth:20,karma:-5},log:'你完成了任务赚了一笔，但心里有点过意不去'}]},
  {text:'筑基之后你的感知大幅提升，你发现了一处<span class="mys">上古遗迹</span>的入口——里面传来微弱的灵气波动。',
    cultMin:30,cultMax:60,trigger:{minAge:22},choices:[
    {text:'独自探索遗迹',effect:{cultivation:15,comprehension:10,sanity:-12,constitution:-5},log:'遗迹中有上古修士留下的传承碎片，你获益匪浅'},
    {text:'做好准备再进去',effect:{comprehension:8,cultivation:5},log:'你在入口处布下防护阵法再进入，虽然收获少了些但更安全'},
    {text:'将消息告知门派',effect:{connections:10,cultivation:3},log:'门派派人来探索，你因为发现遗迹获得了嘉奖'}]},

  // --- 金丹 tier (cultMin:60, cultMax:100) ---
  {text:'你遭遇了一头<span class="danger-text">千年邪物</span>——它有着人的上半身和蛇的下半身，周围的灵气被它吞噬殆尽。',
    cultMin:60,cultMax:100,trigger:{minAge:25},choices:[
    {text:'金丹之力全力出击',effect:{cultivation:15,constitution:-8,sanity:-10,comprehension:8},log:'你与千年邪物大战，最终以金丹之力将它封印',combat:75},
    {text:'以阵法困住它',effect:{cultivation:10,comprehension:10,sanity:-8},log:'你布下困阵暂时压制了邪物，但它终有一天会挣脱',req:{comprehension:30}},
    {text:'撤退保命',effect:{constitution:3,sanity:-5},log:'金丹修士也不是万能的，活着才有未来'}]},
  {text:'一个<span class="danger-text">邪修势力</span>在暗中对你出手——他们用了<span class="mys">七星蚀魂阵</span>，企图在你突破时偷袭。',
    cultMin:60,cultMax:100,trigger:{minAge:26},choices:[
    {text:'反杀邪修',effect:{cultivation:12,connections:8,karma:5,constitution:-5},log:'你将计就计，在他们阵法启动的一刻反向攻击',combat:70},
    {text:'以金丹护体硬撑',effect:{cultivation:8,constitution:-8,sanity:-5},log:'金丹化为护盾挡住了偷袭，但你也受了内伤'},
    {text:'提前布置陷阱',effect:{cultivation:10,comprehension:8,connections:5},log:'你早已察觉异常，邪修反而落入了你的陷阱',req:{comprehension:35}}]},
  {text:'你被卷入了两个<span class="fac">门派</span>之间的争斗——双方都想拉拢你这个金丹修士。',
    cultMin:60,cultMax:100,trigger:{minAge:27},choices:[
    {text:'选择一方效力',effect:{connections:15,cultivation:10,karma:-5},log:'你成为了争斗的一环，实力增长的同时也树立了敌人'},
    {text:'两不相帮',effect:{connections:-10,sanity:5,comprehension:5},log:'两个门派都对你心生不满'},
    {text:'调解双方',effect:{connections:15,karma:10,comprehension:5},log:'你居中调解，双方暂时停战，你获得了两方的尊重',req:{connections:30}}]},
  {text:'你在修炼中感应到了<span class="mys">天地法则</span>的一丝波动——这是金丹修士才能触碰到的层次。',
    cultMin:60,cultMax:100,trigger:{minAge:25},choices:[
    {text:'全力感悟法则',effect:{cultivation:15,comprehension:12,sanity:-8},log:'你对天地法则有了初步理解，修为大进'},
    {text:'谨慎接触',effect:{comprehension:8,cultivation:8},log:'你小心翼翼地感受法则的边缘，虽然进展慢但很稳'},
    {text:'记录下感悟分享给他人',effect:{comprehension:5,connections:10,karma:5},log:'你将感悟记录成册，帮助了许多后辈修士'}]},

  // --- 元婴+ tier (cultMin:100) ---
  {text:'天空出现了<span class="mys">天道异象</span>——九色祥云翻涌，隐约可见一只巨大的眼睛在注视人间。你能感受到那是<span class="npc">司命</span>的气息。',
    cultMin:100,trigger:{minAge:30},choices:[
    {text:'以元婴感应司命',effect:{cultivation:20,comprehension:15,sanity:-20},log:'你短暂地触碰到了司命的意志——那是远超凡人理解的存在'},
    {text:'收敛气息不引起注意',effect:{sanity:5,comprehension:8},log:'在司命面前，即使是元婴修士也不过是蝼蚁'},
    {text:'参悟天道异象中的玄机',effect:{cultivation:15,comprehension:15,sanity:-10},log:'天道异象中蕴含着宇宙运行的部分规律'}]},
  {text:'你参与了一场<span class="danger-text">大规模灵界战斗</span>——数百名修士联手对抗从裂缝中涌出的域外邪魔。',
    cultMin:100,trigger:{minAge:32},choices:[
    {text:'冲锋在前',effect:{cultivation:20,constitution:-10,karma:15,connections:15,sanity:-10},log:'你以元婴之力斩杀数十头邪魔，威名远播',combat:90},
    {text:'布阵支援',effect:{cultivation:15,comprehension:10,connections:10},log:'你以阵法封锁裂缝，挽救了无数修士的性命',req:{comprehension:40}},
    {text:'保护平民撤离',effect:{karma:15,connections:8,cultivation:8,sanity:-5},log:'你护送百姓安全撤离战场，功德无量'}]},
  {text:'你在突破境界时，感应到了<span class="mys">天道的压制</span>——仿佛有一只无形的手在阻止你变得更强。',
    cultMin:100,trigger:{minAge:31},choices:[
    {text:'硬抗天道压制',effect:{cultivation:18,constitution:-8,sanity:-15,comprehension:10},log:'你以不屈的意志对抗天道，虽然受了重伤但境界突破了'},
    {text:'顺势而为',effect:{cultivation:12,comprehension:12,sanity:-5},log:'你不与天道硬碰，而是找到天道的缝隙悄然突破'},
    {text:'暂时放弃突破',effect:{comprehension:8,sanity:5},log:'天道的威压让你明白——你还没准备好'}]},
  {text:'一位<span class="npc">上古大能</span>的残魂出现在你面前，要传你一门<span class="mys">失传神通</span>——代价是帮他完成生前未了的心愿。',
    cultMin:100,trigger:{minAge:30},choices:[
    {text:'接受传承',effect:{cultivation:25,comprehension:15,sanity:-15,karma:-5},log:'残魂将毕生所学灌入你的神识——代价是你要替他杀一个人'},
    {text:'帮他了却心愿但不要传承',effect:{karma:15,connections:5,comprehension:8},log:'你帮残魂找到了他的后人，他安详地消散了'},
    {text:'拒绝',effect:{comprehension:5},log:'无功不受禄，你不想欠一个死人的因果'}]},
  {text:'你发现<span class="loc">天地之间</span>存在着看不见的<span class="mys">因果之线</span>——每个人的命运都被线牵引着，而你已经能看到这些线了。',
    cultMin:100,trigger:{minAge:33},choices:[
    {text:'尝试斩断自己的因果线',effect:{cultivation:20,karma:-10,sanity:-20,qiyun:15},log:'你斩断了部分因果——从此你不再受某些命运的束缚，但也失去了一些联系'},
    {text:'只是观察不干预',effect:{comprehension:15,cultivation:10},log:'你明白了因果的运行规律，但选择不去干预'},
    {text:'帮别人理顺因果',effect:{karma:15,connections:10,sanity:-8},log:'你用因果之力帮人解除了纠缠的业障'}]},
];

// === DEATH EVENTS (events where death is a possible outcome) ===
export const DEATH_EVENTS = [
  {text:'<span class="loc">白玉京</span>之战已到最后关头，<span class="fac">兵家</span>将士们一个个倒下。你手中的兵书发出血色光芒——<span class="mys">兵家自刎归天之法</span>，以命换命，化为<span class="itm">将相首</span>永镇白玉京。',
    factionReq:'bingjia',locReq:'baiyu_jing',trigger:{yearMin:28,yearMax:36},cultMin:30,choices:[
    {text:'自刎归天，化为将相首',effect:{cultivation:100,karma:50},log:'你以兵书为刃，慨然自刎！',die:true,deathMsg:'你以兵家之法自刎归天，化为将相首永镇白玉京！血染兵书，英魂不灭！'},
    {text:'拼死突围求生',effect:{cultivation:15,constitution:-15,sanity:-10,karma:5},log:'你杀出一条血路逃出了白玉京，但身后的战友再也回不来了',combat:85}]},
  {text:'突破<span class="mys">金丹</span>大境界的关键时刻，你的内丹出现了裂纹——<span class="danger-text">走火入魔</span>的征兆！体内的灵气开始失控暴走！',
    cultMin:60,trigger:{minAge:25},choices:[
    {text:'强行镇压内丹',effect:{cultivation:-20,constitution:-15,sanity:-15},log:'你拼尽全力稳住了内丹，但修为大幅倒退，经脉也受损严重'},
    {text:'破而后立，任其爆发',effect:{cultivation:30,constitution:-10,sanity:-20},log:'内丹碎裂又重凝！你以命搏得了更高的境界！',die:true,deathMsg:'内丹崩碎，灵气暴走！你的身体承受不住如此恐怖的力量，化为飞灰消散于天地间。'},
    {text:'服用保命丹药',effect:{cultivation:-10,wealth:-30,constitution:-5},log:'丹药暂时压制了走火入魔，但后遗症严重',req:{wealth:30}}]},
  {text:'你独自探索一处<span class="danger-text">邪祟巢穴</span>，深处盘踞着一头<span class="mys">百年邪物</span>——它张开血盆大口，周围的光线都被吞噬。',
    cultMin:20,trigger:{minAge:18},choices:[
    {text:'与邪物殊死一搏',effect:{cultivation:15,constitution:-10,sanity:-15,karma:5},log:'你与邪物激战！',die:true,deathMsg:'邪物的力量远超你的想象——它将你的灵魂和肉体一同吞噬，你消失在了无尽的黑暗中。'},
    {text:'用法器自保并撤退',effect:{cultivation:5,constitution:-5,sanity:-10},log:'你以法器挡住邪物的攻击，趁隙逃出了巢穴'},
    {text:'以自身为饵引它到阳光下',effect:{cultivation:12,comprehension:8,constitution:-8,sanity:-8},log:'邪物追出洞穴后被阳光灼伤，你趁机将它消灭',req:{comprehension:20}}]},
  {text:'<span class="fac">法教</span>的<span class="danger-text">血祭仪式</span>即将开始——而你，被选为了祭品之一。法坛上的血槽已经刻好，于儿神的气息越来越浓。',
    factionReq:'fa_jiao',trigger:{minAge:20},cultMin:20,choices:[
    {text:'慨然赴死献祭于儿神',effect:{cultivation:50,karma:-30},log:'你的血液流入法坛...',die:true,deathMsg:'你的血液浇灌了于儿神的法坛，灵魂被于儿神吞噬——在最后一刻你看到了于儿神的真面目，那是超越理解的恐怖。'},
    {text:'拼死反抗逃出法坛',effect:{cultivation:10,constitution:-10,connections:-15,sanity:-10},log:'你挣脱了束缚杀出一条血路，从此成为法教叛徒',combat:65},
    {text:'以邪法反噬法坛',effect:{cultivation:15,sanity:-20,karma:-10,constitution:-5},log:'你以自身修为搅乱了血祭仪式，法坛爆炸！',req:{cultivation:40}}]},
  {text:'<span class="fac">坐忘道</span>的<span class="npc">骰子</span>找到你，笑嘻嘻地说要玩一个<span class="danger-text">游戏</span>——"赢了给你一个大造化，输了嘛...嘿嘿。"他手中的骰子已经开始转动。',
    factionReq:'zuowang',trigger:{minAge:18},cultMin:15,choices:[
    {text:'接受骰子的游戏',effect:{cultivation:20,qiyun:-15,sanity:-15},log:'骰子落定...',die:true,deathMsg:'骰子停在了最坏的那一面——骰子大笑着说"运气不好呢"，你的意识被永远封印在了骰子里，成为了它的一部分。'},
    {text:'拒绝并警惕他的诡计',effect:{connections:-10,sanity:-5},log:'骰子撇了撇嘴说"真无趣"，消失在阴影中'},
    {text:'提出你自己的规则',effect:{comprehension:10,sanity:-10,connections:3},log:'骰子似乎对你的提议来了兴趣，你暂时化解了危机',req:{comprehension:25}}]},
  {text:'一群平民被<span class="danger-text">邪祟围困</span>在山谷中，邪祟数量太多——要救他们，你必须以命相搏。',
    karmaMin:30,trigger:{minAge:20},cultMin:30,choices:[
    {text:'燃烧修为护送他们突围',effect:{cultivation:-30,karma:30,connections:20},log:'你燃烧自身修为化为光墙挡住了邪祟...',die:true,deathMsg:'你以自身为代价救下了所有人——在生命的最后一刻，你看到了他们安全离去的背影。百姓为你立了一座碑。'},
    {text:'带领他们且战且退',effect:{cultivation:10,constitution:-10,karma:10,connections:10,sanity:-8},log:'你拼尽全力带领众人杀出了一条路',combat:70},
    {text:'先去搬救兵',effect:{cultivation:3,karma:-5,connections:5},log:'你去找了援军回来，但已经有人在等待中遇难了'}]},
  {text:'你发现了一处<span class="mys">龙脉</span>的露头——那是大地深处的灵脉核心。强大的力量在诱惑你触碰它。',
    cultMin:80,trigger:{minAge:28},choices:[
    {text:'触碰龙脉汲取力量',effect:{cultivation:40,constitution:-15,sanity:-20},log:'龙脉的力量涌入你的身体...',die:true,deathMsg:'龙脉的力量远超你所能承受——滔天的灵力将你的经脉、肉身、元神一一撕碎，你化为了龙脉的养分。'},
    {text:'以阵法缓慢抽取',effect:{cultivation:20,comprehension:10,constitution:-5},log:'你小心翼翼地抽取了一丝龙脉之力，已足够受用',req:{comprehension:35}},
    {text:'只是观察不触碰',effect:{comprehension:12,cultivation:5},log:'你记录下了龙脉的位置和特征，这些信息本身就是宝贵的资源'}]},
  {text:'你试图直接<span class="danger-text">参悟天道</span>——以元神直面天地法则的本源。这是修士最疯狂的行为。',
    cultMin:150,trigger:{minAge:35},choices:[
    {text:'以元神直面天道',effect:{cultivation:50,comprehension:30,sanity:-30},log:'你的元神触碰到了天道的边缘...',die:true,deathMsg:'天道不可直视！你的元神在天道的威压下崩碎，无数法则之力将你的存在从这个世界上抹去——仿佛你从未存在过。'},
    {text:'以天道碎片间接参悟',effect:{cultivation:25,comprehension:20,sanity:-15},log:'你从天道的碎片中领悟了一丝法则，受益无穷'},
    {text:'放弃这个疯狂的想法',effect:{comprehension:8,sanity:5},log:'你及时收手——有些东西不是现在的你能触碰的'}]},
  {text:'你修为日高，却发现有人一直在<span class="danger-text">暗中跟踪</span>你——今夜，刺客终于动手了。',
    cultMin:40,trigger:{minAge:22},karmaMax:-10,choices:[
    {text:'迎战刺客',effect:{cultivation:10,constitution:-8,connections:-5},log:'你与刺客在黑暗中搏斗...',die:true,deathMsg:'刺客的毒针穿透了你的护体灵气——剧毒侵入心脉，你在黑暗中缓缓倒下。没有人知道是谁派来的刺客。'},
    {text:'以替身术脱身',effect:{cultivation:5,comprehension:5,wealth:-10},log:'你提前布下了替身，刺客杀了个假的你',req:{comprehension:25}},
    {text:'引刺客到人多的地方',effect:{connections:5,sanity:-5,karma:3},log:'刺客不敢在众目睽睽之下动手，悄然遁去'}]},
  {text:'<span class="loc">南疆</span>的<span class="danger-text">蛊母</span>对你下了<span class="mys">七日噬心蛊</span>——如果七天内找不到解法，蛊虫会吃掉你的心脏。',
    locReq:'nan_jiang',trigger:{minAge:20},cultMin:20,choices:[
    {text:'硬撑七日寻找解法',effect:{constitution:-15,sanity:-15,comprehension:10},log:'你拼命寻找解蛊之法...',die:true,deathMsg:'第七日，蛊虫准时发作——它从你的心脏中钻出，带着你最后一丝生机离去。南疆的蛊，果然名不虚传。'},
    {text:'割肉取蛊',effect:{constitution:-10,sanity:-10,cultivation:5},log:'你以惊人的意志力割开自己的胸口取出了蛊虫！'},
    {text:'以毒攻毒',effect:{constitution:-8,cultivation:8,comprehension:5,sanity:-5},log:'你服下烈性毒药以毒攻毒，蛊虫被毒死了，你也差点跟着去',req:{comprehension:20}}]},
];

// === ERA EVENTS (world state changes based on year) ===
export const ERA_EVENTS = [
  // --- Pre-坐忘道乱 (year < 5): 太平日子 ---
  {text:'天下<span class="loc">太平</span>，集市上人来人往。偶尔有人提起<span class="mys">修仙</span>的传闻，旁人都当作是茶余饭后的谈资。',
    trigger:{yearMax:5,minAge:10},choices:[
    {text:'打听修仙的事',effect:{comprehension:5,connections:3},log:'卖茶的老头说他年轻时见过一个会飞的人，但谁也不信他'},
    {text:'安心过日子',effect:{wealth:5,sanity:3},log:'太平盛世，活着就好'}]},
  {text:'街头<span class="npc">说书人</span>讲起了修仙的故事——什么练气筑基、飞剑御空。小孩们听得入迷，大人们嗤之以鼻。',
    trigger:{yearMax:5,minAge:10},choices:[
    {text:'认真听完',effect:{comprehension:5,cultivation:2},log:'说书人的故事里有几分真实——你好像听到了一些修行的门道'},
    {text:'给说书人打赏',effect:{wealth:-3,connections:3,karma:3},log:'说书人向你道谢，多讲了一段秘闻'}]},
  {text:'村里的老人说这几年<span class="loc">风调雨顺</span>，是国运昌盛之兆。但他也压低声音说："太平得太久了，总要出事的。"',
    trigger:{yearMax:5,minAge:11},choices:[
    {text:'追问他什么意思',effect:{comprehension:5,sanity:-3},log:'老人讲了一个关于"坐忘"的传说，你听得似懂非懂'},
    {text:'不以为然',effect:{sanity:3},log:'杞人忧天罢了'}]},

  // --- 坐忘道乱期间 (year 5-15): 人心惶惶 ---
  {text:'<span class="fac">坐忘道</span>作乱的消息传遍天下！各地出现了<span class="danger-text">缩阳事件</span>——人们恐慌不已，互相猜疑。',
    trigger:{yearMin:5,yearMax:15,minAge:12},choices:[
    {text:'打探详细消息',effect:{comprehension:8,sanity:-8,connections:3},log:'你了解到坐忘道利用人心之恐惧传播邪法——缩阳事件只是开始'},
    {text:'加强自身防备',effect:{constitution:3,cultivation:3,sanity:-3},log:'你日夜戒备，不敢松懈'},
    {text:'安抚周围的人',effect:{connections:8,karma:5,sanity:-3},log:'你劝慰邻里不要自乱阵脚，渐渐成了大家的主心骨'}]},
  {text:'街上的人越来越少了——<span class="fac">坐忘道</span>的阴影笼罩一切。有人说夜里能听到<span class="danger-text">诡异的笑声</span>，像骰子碰撞的声音。',
    trigger:{yearMin:5,yearMax:15,minAge:13},choices:[
    {text:'夜里出去查看',effect:{cultivation:5,sanity:-10,comprehension:5},log:'你在黑暗中看到了一个戴面具的人影——它冲你笑了笑就消失了'},
    {text:'紧闭门户',effect:{sanity:-3},log:'笑声持续了整夜，你一夜未眠'},
    {text:'去监天司报告',effect:{connections:5,karma:3},log:'监天司的人面色凝重地记录了你的情报'}]},
  {text:'坐忘道的<span class="danger-text">余波</span>未消，百姓中开始流传各种谣言——"坐忘道的骰子能预知未来"、"加入坐忘道就能长生不老"。',
    trigger:{yearMin:7,yearMax:15,minAge:12},choices:[
    {text:'辟谣',effect:{connections:5,karma:5,sanity:-3},log:'你尽力辟谣，但信的人还是信'},
    {text:'趁乱搜集情报',effect:{comprehension:8,connections:3,sanity:-5},log:'乱世出情报，你从谣言中筛出了一些有价值的信息'},
    {text:'装作不知道',effect:{sanity:3},log:'多一事不如少一事'}]},

  // --- 斗姥降临后 (year 10-20): 各派备战 ---
  {text:'天空出现了<span class="mys">诡异的裂缝</span>——传言那是<span class="npc">斗姥</span>降临的前兆。各大门派开始紧急备战。',
    trigger:{yearMin:10,yearMax:20,minAge:15},choices:[
    {text:'响应号召加入备战',effect:{cultivation:8,connections:8,karma:5},log:'你加入了备战的队伍，日夜修炼以应对即将到来的大劫'},
    {text:'趁此机会修炼',effect:{cultivation:10,comprehension:5},log:'大劫将至，只有实力才是保命的根本'},
    {text:'储备物资以防万一',effect:{wealth:10,constitution:3},log:'你囤积了大量灵药和食物，以备不时之需'}]},
  {text:'各派<span class="fac">修士</span>纷纷奔走——有的结盟、有的备战、有的逃离。天下局势一日三变。',
    trigger:{yearMin:10,yearMax:20,minAge:16},choices:[
    {text:'加入同盟共抗大敌',effect:{connections:10,cultivation:5,karma:5},log:'你与其他修士结成了同盟，约定共抗斗姥'},
    {text:'独善其身',effect:{cultivation:8,comprehension:5,connections:-5},log:'乱世之中，你选择了独自修行'},
    {text:'趁乱发财',effect:{wealth:15,karma:-8},log:'你在混乱中低买高卖，赚了一笔横财'}]},
  {text:'修士们议论纷纷——<span class="npc">斗姥</span>到底是什么？有人说是邪神，有人说是<span class="mys">司命</span>，没人说得清楚。',
    trigger:{yearMin:10,yearMax:20,minAge:14},choices:[
    {text:'查阅古籍寻找答案',effect:{comprehension:10,sanity:-8},log:'古籍中的记载支离破碎，但你隐约拼凑出了斗姥的真相——它是掌管真假的司命'},
    {text:'向高人请教',effect:{connections:5,comprehension:8,sanity:-5},log:'高人面色凝重地说："斗姥...不是我们能对抗的存在。"'}]},

  // --- 法教入侵期间 (year 20-32): 战火纷飞 ---
  {text:'<span class="fac">法教</span>大军压境！<span class="loc">边境</span>告急，大批<span class="danger-text">难民</span>涌入内地。',
    trigger:{yearMin:20,yearMax:32,minAge:15},choices:[
    {text:'去边境支援',effect:{cultivation:10,constitution:-5,karma:10,connections:8},log:'你赶赴边境参与抵抗法教的入侵',combat:50},
    {text:'帮助安置难民',effect:{karma:10,connections:10,wealth:-10},log:'你出钱出力帮助难民安顿下来'},
    {text:'趁乱修炼',effect:{cultivation:8,comprehension:5,karma:-5},log:'你闭关修炼，对外面的战火充耳不闻'}]},
  {text:'物价飞涨！一颗普通的<span class="itm">辟谷丹</span>要价以前的十倍。黑市上什么都能买到——只要你出得起价。',
    trigger:{yearMin:20,yearMax:32,minAge:14},choices:[
    {text:'高价囤积物资',effect:{wealth:-20,constitution:5,cultivation:3},log:'你咬牙买下了必需品，钱袋大幅缩水',req:{wealth:20}},
    {text:'去黑市碰运气',effect:{wealth:-10,cultivation:5,sanity:-5,qiyun:-3},log:'黑市上的东西良莠不齐，你买到了一些有用的东西'},
    {text:'以物易物',effect:{connections:5,wealth:5},log:'你用自己的本事换取了所需的物资'}]},
  {text:'法教的<span class="danger-text">于儿神</span>信徒在各地散布恐怖——活人祭祀、血池灌溉。整个大梁笼罩在恐惧之中。',
    trigger:{yearMin:22,yearMax:32,minAge:16},choices:[
    {text:'加入对抗法教的队伍',effect:{cultivation:8,karma:10,connections:10,constitution:-3},log:'你和其他修士组成了抗击法教的游击队'},
    {text:'暗中搜集法教情报',effect:{comprehension:8,connections:5,sanity:-8},log:'你冒险潜入法教控制区，获取了重要情报'},
    {text:'保护自己的村庄',effect:{karma:5,connections:5,constitution:-3},log:'你日夜守卫村庄，不让法教的魔爪伸过来'}]},

  // --- 死亡消失期间 (year 25-35): 秩序崩坏 ---
  {text:'世界出了大问题——<span class="danger-text">没有人能死了</span>。被砍成两段的人还在挣扎，被毒杀的人痛苦地活着。死亡，消失了。',
    trigger:{yearMin:25,yearMax:35,minAge:16},choices:[
    {text:'研究死亡消失的原因',effect:{comprehension:12,sanity:-15,cultivation:5},log:'你发现这与司命有关——掌管死亡的力量被某种更大的力量干扰了'},
    {text:'帮助那些想死却死不了的人',effect:{karma:10,sanity:-10,connections:5},log:'你无法给他们解脱，只能减轻他们的痛苦'},
    {text:'趁机突破境界',effect:{cultivation:10,karma:-5,sanity:-8},log:'不会死？那就拼命修炼！——虽然痛苦不会减少'}]},
  {text:'不死之人越来越多——有些已经不成人形却依然<span class="danger-text">活着</span>。他们的哀嚎日夜不绝。世间秩序正在崩坏。',
    trigger:{yearMin:27,yearMax:35,minAge:17},choices:[
    {text:'以封印术让他们沉睡',effect:{cultivation:8,karma:8,comprehension:5,sanity:-8},log:'你将不死之人封印入睡——这是你能做的最大仁慈'},
    {text:'寻找恢复死亡的方法',effect:{comprehension:10,cultivation:5,sanity:-10},log:'你走遍各地寻找答案，但这已经超出了凡人能解决的范畴'},
    {text:'远离人群避世',effect:{sanity:-5,cultivation:5},log:'不死人的哀嚎让你精神崩溃，你选择逃入深山'}]},
  {text:'死亡消失的副作用蔓延——<span class="danger-text">食物不再腐烂</span>，但也不再有新的生命诞生。整个世界陷入了一种诡异的停滞。',
    trigger:{yearMin:28,yearMax:35,minAge:15},choices:[
    {text:'深入研究这个现象',effect:{comprehension:12,cultivation:5,sanity:-10},log:'你发现这不仅是死亡消失——而是"终结"这个概念本身被抹去了'},
    {text:'尽力维持秩序',effect:{connections:8,karma:8,sanity:-5},log:'你在混乱中努力维持着周围人的正常生活'},
    {text:'这是修行的契机',effect:{cultivation:10,comprehension:8,sanity:-8},log:'你在这诡异的环境中领悟了关于生死的道理'}]},

  // --- 天灾期间 (year 30-40): 谎言与腐烂消失 ---
  {text:'又一场<span class="danger-text">天灾</span>降临——<span class="mys">谎言</span>在世间消失了。所有人都只能说真话，整个社会陷入了前所未有的混乱。',
    trigger:{yearMin:30,yearMax:40,minAge:16},choices:[
    {text:'趁机了解真相',effect:{comprehension:12,connections:-5,sanity:-8},log:'你从人们口中听到了无数隐藏多年的秘密——有些你宁可不知道'},
    {text:'闭口不言',effect:{sanity:-3,comprehension:5},log:'不说话就不会暴露秘密——但别人的真话已经够可怕了'},
    {text:'以此参悟天道',effect:{cultivation:10,comprehension:10,sanity:-10},log:'谎言消失...这是哪位司命的力量在动摇？'}]},
  {text:'<span class="danger-text">腐烂消失了</span>——尸体不再腐烂、垃圾永远堆积。城市开始被无法分解的废物淹没。',
    trigger:{yearMin:31,yearMax:40,minAge:15},choices:[
    {text:'以灵力分解废物',effect:{cultivation:5,constitution:-3,karma:5},log:'你用修为帮助清理，但这只是杯水车薪'},
    {text:'研究天灾的根源',effect:{comprehension:10,sanity:-10,cultivation:5},log:'你逐渐明白——这些天灾与季灵的成道之路有关'},
    {text:'离开城市去荒野',effect:{constitution:3,sanity:-3},log:'荒野中影响小一些，但也好不到哪去'}]},
  {text:'天灾接连不断——<span class="mys">季灵</span>成道的代价正在由整个世界承受。修士们开始讨论是否应该阻止他。',
    trigger:{yearMin:32,yearMax:40,minAge:18},choices:[
    {text:'支持季灵成道',effect:{comprehension:10,cultivation:8,karma:-5,sanity:-8},log:'天灾虽然可怕，但季灵成道也许能带来更好的世界'},
    {text:'反对季灵成道',effect:{connections:8,karma:5,cultivation:5},log:'你认为不能让一个人的成道牺牲整个世界'},
    {text:'只关心自己的修行',effect:{cultivation:10,comprehension:5,connections:-5},log:'天灾也好成道也罢，与你何干？'}]},

  // --- 太平后 (year > 40): 重建 ---
  {text:'<span class="npc">季灵</span>成道之后，天下重归太平。各地开始<span class="loc">重建</span>，修士们也从战火中缓过气来。',
    trigger:{yearMin:40,minAge:18},choices:[
    {text:'参与重建',effect:{karma:10,connections:10,wealth:10},log:'你投身于重建工作中，帮助百姓恢复家园'},
    {text:'闭关修炼',effect:{cultivation:12,comprehension:8},log:'太平年月正适合闭关——你要弥补这些年耽搁的修行'},
    {text:'游历四方',effect:{comprehension:10,connections:8,cultivation:5},log:'你踏遍山河，见证了这个世界从废墟中新生'}]},
  {text:'战后的世界百废待兴——但也有无数<span class="mys">机缘</span>浮出水面。战火中被破坏的遗迹暴露了出来，失落的传承重见天日。',
    trigger:{yearMin:40,minAge:20},choices:[
    {text:'探索战后遗迹',effect:{cultivation:12,comprehension:10,sanity:-5},log:'你在废墟中发现了战前修士留下的传承'},
    {text:'搜集散落的法器',effect:{wealth:15,cultivation:5},log:'战场上遗留了大量法器，你收集了不少'},
    {text:'招收弟子传承衣钵',effect:{connections:15,karma:10,comprehension:5},log:'你收了几个有天赋的弟子，将自己的所学传给下一代'}]},
  {text:'太平之世，修仙界重新建立了秩序。各派开始论功行赏——那些在天灾中守护苍生的修士受到了最高礼遇。',
    trigger:{yearMin:42,minAge:20},choices:[
    {text:'参加论功大会',effect:{connections:15,cultivation:8,karma:5},log:'你在大会上受到了嘉奖，名声远播'},
    {text:'推辞功劳',effect:{karma:10,comprehension:5},log:'你推辞了赏赐，只说自己做了该做的事'},
    {text:'趁此机会拉拢人脉',effect:{connections:15,wealth:10,karma:-3},log:'你在大会上广结善缘，积累了大量人脉资源'}]},
];

// === TRAVEL EVENTS (triggered when traveling) ===
export const TRAVEL_EVENTS = [
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
    {text:'砍价购买',effect:{wealth:-20,cultivation:10,karma:-5},log:'法器来历可疑，但确实好用',req:{wealth:20}},
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
export const CANONICAL_EVENTS = [
  // --- 卷1 时期: 清风观覆灭 / 丹阳子 (year -10 ~ 5) ---
  {text:'你听闻<span class="loc">清风观</span>有一位<span class="npc">丹阳子</span>道长，据说拥有一块刻满经文的<span class="itm">天书石板</span>，四处收集"药引子"炼仙丹。',
    trigger:{minAge:12,yearMin:-15,yearMax:2},locReq:'qing_feng',choices:[
    {text:'你就是那些药引子之一',effect:{cultivation:10,sanity:-15,comprehension:5},log:'你亲眼见过丹阳子的真面目——那不是修仙，是炼人...'},
    {text:'回忆在清风观的日子',effect:{sanity:-10,cultivation:8,comprehension:3},log:'你还记得那些孩子的脸...有些再也没见过'}]},
  {text:'清风观突然发生<span class="danger-text">大爆炸</span>！你曾在那里待过——冲天火光中，传闻是弟子反杀了<span class="npc">丹阳子</span>。',
    trigger:{minAge:10,yearMin:-2,yearMax:3},locReq:'qing_feng',choices:[
    {text:'冲回清风观寻找幸存者',effect:{cultivation:15,sanity:-15,comprehension:8,karma:5},log:'废墟中你找到了几个还活着的孩子——和你一样的"药引子"',item:'dan_yang_jian'},
    {text:'庆幸自己已经逃出来了',effect:{sanity:5,qiyun:5},log:'那个地狱终于毁了'}]},
  {text:'远处传来一声巨响，天边亮起火光——有人说是<span class="loc">清风观</span>出了事，弟子反杀了<span class="npc">丹阳子</span>。',
    trigger:{minAge:10,yearMin:-2,yearMax:3},choices:[
    {text:'前去查看废墟',effect:{cultivation:15,sanity:-12,comprehension:8},log:'废墟中有残留的灵气波动，你隐约感知到了一场惊天之战的余波'},
    {text:'听人议论',effect:{comprehension:5},log:'茶馆里众说纷纭——有人说丹阳子死了，有人说他还活着'}]},
  {text:'路上遇到一群衣衫褴褛的孩子——面色蜡黄，眼神空洞，一个个瘦得像骷髅。为首的少年浑身是伤，手里攥着一把刀，眼神有时清醒有时迷离。有人说他们是从<span class="loc">清风观</span>逃出来的，是<span class="npc">丹阳子</span>拿来"炼药"的孩子。那少年就是杀了丹阳子的<span class="npc">李火旺</span>。',
    trigger:{minAge:10,yearMin:-1,yearMax:5},choices:[
    {text:'偷偷留下食物和银两',effect:{wealth:-15,qiyun:10,karma:10},log:'你不敢靠太近——那个叫李火旺的少年身上有股吓人的气息。你把东西放在路边就走了。回头偷看，他愣了一会才把东西分给孩子们'},
    {text:'报告官府',effect:{connections:5,karma:-5},log:'官府来时他们已经走了。有人骂你多管闲事："那可是杀了丹阳子的狠人，你去报官，他知道了不得来找你？"'},
    {text:'离远点',effect:{sanity:-3},log:'那少年忽然扭头看了你一眼——你心跳漏了一拍，赶紧低头走了。一群被邪修炼过药的孩子跟着一个杀人的疯子——你可招惹不起'}]},
  {text:'<span class="loc">正德寺</span>近日香火极盛，但有传闻说寺中<span class="npc">心慧方丈</span>做着<span class="danger-text">不可告人之事</span>——以女婴制作"花瓶娃"。',
    trigger:{minAge:15,yearMin:-5,yearMax:10},choices:[
    {text:'暗中调查',effect:{sanity:-15,comprehension:10,cultivation:8,karma:5},log:'你在寺后发现了令人作呕的真相...正德寺并非什么善地'},
    {text:'向监天司举报',effect:{connections:15,qiyun:5,karma:10},log:'监天司记下了，但似乎对正德寺无可奈何'},
    {text:'不碰这种事',effect:{sanity:3},log:'佛门之事，外人莫问'}]},
  {text:'<span class="loc">安慈庵</span>的<span class="npc">静心师太</span>是远近闻名的驱邪高手——本名<span class="npc">陈红袖</span>，据说是<span class="mys">腐烂司命</span>的心蟠，有一个心素体质的儿子叫<span class="npc">徐儿</span>。你路过时发现庵门大开，师太竟然<span class="danger-text">死在了猪圈中</span>。有修士说她的死跟白玉京里的事有关——腐烂司命被<span class="npc">季灾</span>吞噬，她作为心蟠受了牵连。',
    trigger:{minAge:15,yearMin:2,yearMax:8},choices:[
    {text:'为师太收殓安葬',effect:{karma:15,qiyun:10,sanity:-10},log:'你亲手埋葬了师太，心中悲痛——谁能杀死这样一位高人？'},
    {text:'搜寻线索',effect:{comprehension:10,sanity:-15,cultivation:5},log:'你发现现场有坐忘道的痕迹...还有更诡异的东西'},
    {text:'立刻离开',effect:{sanity:-5},log:'这种死法太过蹊跷，不宜久留'}]},

  // --- 卷2 时期: 坐忘道动乱 / 李火旺加入监天司 (year 5 ~ 15) ---
  {text:'<span class="fac">坐忘道</span>在各地制造<span class="danger-text">缩阳事件</span>，百姓人心惶惶。<span class="fac">监天司</span>的<span class="npc">赊刀人</span>四处奔走平乱。',
    trigger:{minAge:15,yearMin:5,yearMax:15},mandatory:true,choices:[
    {text:'协助监天司破案',effect:{connections:20,cultivation:10,qiyun:8},log:'你帮助揭穿了坐忘道的骗局，赊刀人对你刮目相看'},
    {text:'加入维护治安',effect:{connections:10,wealth:15,constitution:3},log:'你在乱局中维持了一方安宁'},
    {text:'闭门不出',effect:{wealth:-5},log:'风声鹤唳的日子里，买卖都做不成'}]},
  {text:'有传闻说<span class="fac">坐忘道</span>的<span class="npc">骰子</span>——那个最危险的人物——正在暗中操纵大梁朝局。',
    trigger:{minAge:18,yearMin:8,yearMax:18},choices:[
    {text:'打探消息',effect:{comprehension:10,sanity:-10,connections:5},log:'越查越深，你发现坐忘道在朝中无处不在'},
    {text:'不关心朝政',effect:{},log:'天高皇帝远，和你没关系'}]},
  {text:'大梁皇城发生<span class="danger-text">剧变</span>！传闻有人在皇宫召唤了<span class="mys">斗姥</span>，天空出现两片太极鱼状的大海。整个上京城的人都看到了。',
    trigger:{minAge:12,yearMin:10,yearMax:18},mandatory:true,choices:[
    {text:'朝皇城方向赶去',effect:{cultivation:25,sanity:-20,comprehension:15,constitution:-5},log:'你在远处看到了令人永生难忘的景象——一个混沌扭曲的存在降临了！',relocate:'shang_jing'},
    {text:'跪地祈祷',effect:{sanity:-10,qiyun:5},log:'那一刻，所有人都感受到了神明的恐怖'},
    {text:'趁乱逃出上京',effect:{wealth:-20,sanity:-5},log:'你拼命跑出了上京城，身后是无尽的混乱',relocate:'wai_jiao'}]},
  {text:'<span class="npc">诸葛渊</span>在上京之战中<span class="danger-text">油尽灯枯</span>，为救苍生一人抵挡司命。修士圈中无人不知此事。',
    trigger:{minAge:15,yearMin:12,yearMax:20},choices:[
    {text:'前往杏岛祭拜',effect:{comprehension:15,cultivation:10,qiyun:10},log:'杏岛上已有无数修士前来悼念，诸葛渊之名将永载史册',relocate:'xing_dao'},
    {text:'继承其道意',effect:{cultivation:25,comprehension:20,sanity:-10},log:'你在冥想中似乎触碰到了诸葛渊留在天地间的残余道意'},
    {text:'默哀',effect:{sanity:-5,karma:3},log:'又一位大能陨落了，这世道...'}]},
  {text:'<span class="npc">高智坚</span>——据说是大齐皇族后裔——竟然登基成了<span class="fac">大梁皇帝</span>！朝野震动。',
    trigger:{minAge:12,yearMin:13,yearMax:20},choices:[
    {text:'关注局势变化',effect:{comprehension:5,connections:5},log:'新皇登基，天下格局将变'},
    {text:'上京投效新朝',effect:{connections:15,wealth:20},log:'新朝初建，正是用人之际',relocate:'shang_jing'},
    {text:'观望不动',effect:{},log:'皇帝换谁都一样，日子照过'}]},

  // --- 卷3 时期: 龙脉纷争 / 李火旺成为司命 (year 15 ~ 25) ---
  {text:'天降异象——<span class="mys">天狗食日</span>，大地陷入黑暗。许多修士在这一刻失去了灵感，有人甚至失去了双眼。',
    trigger:{minAge:12,yearMin:15,yearMax:22},mandatory:true,choices:[
    {text:'闭目修炼抵御',effect:{cultivation:15,comprehension:10,sanity:-10},log:'你在黑暗中感知到了天道的波动'},
    {text:'帮助受灾百姓',effect:{karma:15,connections:15,qiyun:5},log:'你在天灾中救助了不少人'},
    {text:'躲在家中',effect:{sanity:-5},log:'黑暗过去后，世界似乎变了'}]},
  {text:'有人在<span class="loc">大梁</span>各地发现了<span class="mys">龙脉</span>的踪迹——地底深处有巨大的东西在涌动，每逢龙脉经过之地，方圆十里草木疯长、灵气紊乱。',
    trigger:{minAge:20,yearMin:16,yearMax:25,cultivation:50},choices:[
    {text:'尝试感应龙脉',effect:{cultivation:30,comprehension:15,sanity:-15},log:'龙脉的气息让你浑身颤栗——那是超越凡人理解的力量'},
    {text:'收集龙脉情报',effect:{connections:15,comprehension:10,wealth:10},log:'你打听到龙脉似乎和历代皇帝有关，所过之处神通法术皆失效'},
    {text:'不碰这种东西',effect:{sanity:5},log:'龙脉之事，非凡人能染指'}]},
  {text:'江湖中突然传出一个骇人的消息：<span class="npc">李火旺</span>做了一件前无古人的事——没人说得清具体是什么，但天象异变、大地震动，似乎天地法则本身都被动摇了。',
    trigger:{minAge:18,yearMin:18,yearMax:28,cultivation:40},mandatory:true,choices:[
    {text:'打听详情',effect:{comprehension:20,sanity:-15,cultivation:10},log:'众说纷纭，有人说他成了仙，有人说他疯了，有人说他变成了"那种东西"——没人敢说清楚是什么'},
    {text:'敬而远之',effect:{sanity:5,qiyun:3},log:'那种层次的事，你连想都不敢想'}]},

  // --- 卷4 时期: 法教入侵 / 补白玉京 (year 20 ~ 35) ---
  {text:'<span class="fac">法教</span>大军从大齐涌入，<span class="danger-text">四齐沦陷</span>！法教的十二大巫以活人祭祀召唤<span class="npc">于儿神</span>，所过之处寸草不生。',
    trigger:{minAge:15,yearMin:20,yearMax:32},mandatory:true,choices:[
    {text:'参加抵抗军',effect:{cultivation:15,connections:20,constitution:-5,karma:10,qiyun:5},log:'你加入了各门派联合的抵抗力量，与法教殊死搏斗',combat:70,achieve:'resist_fajiao',relocate:'si_qi'},
    {text:'护送难民撤离',effect:{karma:20,connections:15,wealth:-10},log:'你帮助大量四齐难民逃往大梁',relocate:'da_liang'},
    {text:'逃难',effect:{wealth:-15,sanity:-5},log:'法教的恐怖你无力抵挡'}]},
  {text:'<span class="fac">监天司</span>司天监<span class="npc">玄牝</span>召集各国监天司共同对抗法教，一场<span class="danger-text">旷世大战</span>即将打响。',
    trigger:{minAge:18,yearMin:22,yearMax:30,cultivation:30},choices:[
    {text:'响应号召',effect:{cultivation:20,connections:25,constitution:-8,qiyun:10},log:'你在联军中作战，亲眼见证了各派高手的风采',combat:80},
    {text:'提供情报支援',effect:{connections:15,wealth:15,comprehension:5},log:'你在后方为联军提供了关键情报'},
    {text:'隔岸观火',effect:{comprehension:5},log:'两边的力量都太过恐怖'}]},
  {text:'法教覆灭后，天地间发生了<span class="danger-text">不可思议的异变</span>——<span class="danger-text">死亡消失了</span>！没有任何生物能够死去，被砍断的手还在动，被杀的鸡还在跑。',
    trigger:{minAge:12,yearMin:25,yearMax:33},mandatory:true,choices:[
    {text:'利用不死之身修炼',effect:{cultivation:30,constitution:10,sanity:-20},log:'在无法死亡的日子里，你疯狂地修炼，承受着本该致死的痛苦'},
    {text:'寻找原因',effect:{comprehension:15,sanity:-15,cultivation:10},log:'没有人知道为什么。有老修士猜测是某种天地法则被打破了，但具体是什么，众说纷纭'},
    {text:'惊恐不安',effect:{sanity:-10},log:'不能死去...这比死亡更恐怖'}]},
  {text:'天空出现了<span class="danger-text">前所未见的异象</span>——巨大的裂缝撕开了苍穹，隐约可见一座<span class="mys">倒悬之城</span>的轮廓在云层之上时隐时现。整个大梁的人都看到了。',
    trigger:{minAge:20,yearMin:28,yearMax:36},mandatory:true,choices:[
    {text:'跪地膜拜',effect:{cultivation:15,sanity:-10,qiyun:5,karma:5},log:'无数人跪在地上叩首。没人知道那是什么，但所有人都感受到了那种超越凡人的威压'},
    {text:'冷静观察',effect:{comprehension:20,sanity:-15,cultivation:10},log:'你强忍恐惧仔细观察——那座城市的建筑不属于人间的任何风格。裂缝持续了三天三夜才消散'}]},
  {text:'<span class="npc">玄牝</span>司天监率领一群修士冲入了天空中的裂缝——然后整个人<span class="mys">化为了一条金龙</span>！数万人亲眼目睹了这一幕。从此之后再无人见过玄牝。',
    trigger:{minAge:15,yearMin:28,yearMax:35},mandatory:true,choices:[
    {text:'为玄牝立碑',effect:{karma:10,connections:10},log:'不管他去了哪里，化龙的一幕已成为这一代人最刻骨铭心的记忆'},
    {text:'试图理解化龙之术',effect:{comprehension:15,cultivation:10,sanity:-10},log:'人怎么可能变成龙？这究竟是什么样的修为？你百思不得其解'}]},

  // --- 卷5 时期: 天地异变 (year 30 ~ 45) ---
  {text:'天灾接连发生——先是<span class="danger-text">没人能说谎了</span>，所有人开口只能说真话；然后<span class="danger-text">尸体不再腐烂</span>，死去的人保持着死前的样子。世界的法则一条条失灵。',
    trigger:{minAge:15,yearMin:30,yearMax:40},mandatory:true,choices:[
    {text:'记录每一种异变',effect:{comprehension:20,cultivation:10,sanity:-15},log:'你把每种异变都记录了下来——谎言消失、腐烂停止、疼痛消失……像是有什么东西在一样一样地被夺走'},
    {text:'适应新世界',effect:{cultivation:10,comprehension:5},log:'没有谎言的世界...反而更混乱了'},
    {text:'恐惧退缩',effect:{sanity:-15},log:'世界正在崩塌，你无力阻止'}]},
  {text:'天空中的异象越来越频繁——<span class="danger-text">黑色的裂缝</span>不断出现，有修士看到裂缝中有<span class="mys">巨大的眼睛</span>在窥视人间。各大门派紧急集结。',
    trigger:{minAge:20,yearMin:33,yearMax:42,cultivation:40},choices:[
    {text:'贡献自己的力量',effect:{cultivation:-15,qiyun:20,karma:15,comprehension:10},log:'你不知道各派高人在做什么，但你能感受到——他们在和某种不可名状的东西对抗'},
    {text:'为天下祈祷',effect:{karma:10,sanity:-10,qiyun:5},log:'你跪地祈祷，愿这一切快点结束'},
    {text:'在乱世中自保',effect:{constitution:5,sanity:-5},log:'天塌下来有高个子顶着'}]},
  {text:'某一天，一道<span class="mys">金光</span>从天际射出，照亮了整个世界。同一瞬间，所有异变<span class="itm">全部消失了</span>——谎言回来了、死亡回来了、腐烂回来了。天地恢复了正常。没人知道发生了什么。',
    trigger:{minAge:15,yearMin:35,yearMax:45},mandatory:true,choices:[
    {text:'感叹天地之力',effect:{comprehension:25,cultivation:15,sanity:10},log:'那道金光的余韵在你心中久久不散。你不知道是谁拯救了这个世界，但你知道有人做到了'},
    {text:'庆祝太平',effect:{qiyun:15,connections:10,karma:5},log:'天下终于太平了，百姓欢呼雀跃。有人说是佛祖显灵，有人说是天道自愈'},
    {text:'继续修行',effect:{cultivation:15,comprehension:10},log:'不管天地发生了什么，你只走自己的道'}]},

  // --- 天陈国相关 (year 25 ~ 35) ---
  {text:'一个名为<span class="fac">天陈</span>的神秘国家突然出现在大梁边境——据说其统治者<span class="npc">左丘咏</span>拥有某种让万物疯狂生长的诡异能力。他驾着金龙向大梁进发，所过之处草木化为参天巨树、农田变成密林。',
    trigger:{minAge:18,yearMin:25,yearMax:33,cultivation:40},choices:[
    {text:'加入抵抗',effect:{cultivation:20,connections:15,constitution:-10,qiyun:5},log:'你在抵抗左丘咏的战役中出了一份力，但面对那种不可思议的力量，你感到无比渺小',combat:90},
    {text:'打听天陈的来历',effect:{comprehension:15,cultivation:10},log:'有人说天陈就是传说中的"真空家乡"——一个被某种力量彻底控制的国度，已经存在了不知多少年'},
    {text:'远离战场',effect:{sanity:-5},log:'那种层面的较量，不是你能参与的'}]},

  // --- 各派日常重大事件 ---
  {text:'<span class="fac">白莲教</span>的<span class="npc">圣女白灵淼</span>突然现身——一个白发红瞳的女子，传闻她能做到常人不可能做到的事。白莲教众对她顶礼膜拜。',
    trigger:{minAge:15,yearMin:10,yearMax:30},choices:[
    {text:'设法面见圣女',effect:{connections:20,cultivation:10,sanity:-10},log:'白灵淼的气质令人既敬畏又怜惜。她很安静，但你隐约感到她身上有一种远超修为的力量'},
    {text:'远离白莲教的事',effect:{},log:'白莲教的圣女，不是你该去打听的'}]},
  {text:'<span class="fac">兵家</span>的传承物<span class="itm">兵书</span>重现江湖。将血涂抹在书页上可修行兵家之法：煞气冲击、扩大体型、血肉不灭则肉身不死。',
    trigger:{minAge:18,yearMin:5,yearMax:25,cultivation:30},choices:[
    {text:'设法获取兵书残页',effect:{cultivation:20,constitution:10,karma:-10,connections:-5},log:'你得到了一页兵书残页，修炼后感到煞气充盈',combat:60},
    {text:'旁观不参与',effect:{comprehension:5},log:'兵家之法太过暴烈，不适合你'}]},
  {text:'<span class="fac">罗教</span>传人出现，手持<span class="itm">七星铜钱剑</span>，以一百八十四枚古钱编成。传闻此剑能化煞驱邪。',
    trigger:{minAge:15,yearMin:0,yearMax:20},choices:[
    {text:'请教罗教修行',effect:{cultivation:15,comprehension:10,connections:10},log:'罗教的修行平和内敛，与其他教派截然不同'},
    {text:'收集铜钱仿制',effect:{cultivation:5,wealth:-10},log:'仿制品不及真品万一，但聊胜于无'}]},

  // --- 心素穿界：现实世界新闻（仅心素可见） (year 5 ~ 30) ---
  {text:'你突然听到了<span class="mys">另一个世界</span>的喧哗——有人在讨论"<span class="danger-text">精神病院出了大事</span>"，说有个叫李火旺的病人把整间病房都砸了，还伤了三个护工。你"看到"一群穿白衣的人手忙脚乱地按住一个少年。',
    trigger:{minAge:15,yearMin:5,yearMax:30},mandatory:true,check:'xinsu',choices:[
    {text:'借助两界共鸣感应李火旺的状态',effect:{sanity:-20,cultivation:20,comprehension:15},log:'你通过两界的裂缝感知到了——每当李火旺在那边"发病"时，这边的世界也在剧烈震荡。他的疯狂不是病，是两个世界在他身上碰撞'},
    {text:'试着向李火旺传递信息',effect:{sanity:-25,connections:10,cultivation:10},log:'你对着虚空低声说了几句话——不知道他那边能不能听到'},
    {text:'切断连接',effect:{sanity:5},log:'你不想再看到那个世界的事了'}]},
  {text:'<span class="mys">两界</span>的边界又模糊了——你短暂"看到"了另一个世界的<span class="danger-text">新闻</span>：一场大规模传染病让所有人都戴上了白色面罩，街上空无一人。你甚至闻到了一股消毒水的味道。',
    trigger:{minAge:18,yearMin:10,yearMax:35},check:'xinsu',choices:[
    {text:'仔细观察那个世界的变化',effect:{sanity:-15,comprehension:12},log:'那个世界和这个世界一样充满灾难——只是形式不同罢了'},
    {text:'思考两个世界的关联',effect:{sanity:-20,comprehension:18,cultivation:10},log:'你开始怀疑——那边的"传染病"和这边的"天灾"，是否有某种因果关系？'},
    {text:'赶紧收回视线',effect:{sanity:-5},log:'看太多另一个世界的事会让你迷失'}]},

  // --- 齐衡与监天司 (year 10 ~ 25) ---
  {text:'<span class="fac">监天司</span>的<span class="npc">齐衡</span>——一位冷面铁腕的监察使——正在大梁各地巡视。他以严苛闻名，凡是被他盯上的邪修无一幸免。',
    trigger:{minAge:15,yearMin:10,yearMax:25},choices:[
    {text:'主动拜访齐衡',effect:{connections:15,qiyun:5,comprehension:5},log:'齐衡审视了你半晌，说："你身上没有邪气。好自为之。"'},
    {text:'避其锋芒',effect:{sanity:3},log:'齐衡的名声太大，你不想被他注意到'},
    {text:'举报身边的邪修',effect:{connections:10,karma:5,wealth:10},log:'你提供了有价值的线索，齐衡记下了你的名字'}]},

  // --- 缩阳事件详情 (year 5 ~ 15) ---
  {text:'<span class="fac">坐忘道</span>策划的<span class="danger-text">缩阳事件</span>波及数县——百姓恐慌地声称自己的阳具在缩小消失，妇女则声称乳房在消失。实际上这是坐忘道<span class="npc">骰子</span>制造的大规模<span class="mys">集体癔症</span>，为的是收割恐惧之力。',
    trigger:{minAge:12,yearMin:5,yearMax:15},choices:[
    {text:'深入调查真相',effect:{comprehension:15,sanity:-15,cultivation:10},log:'你发现所谓缩阳不过是心理暗示——但坐忘道已从恐惧中攫取了大量力量'},
    {text:'安抚百姓',effect:{connections:15,karma:10,qiyun:5},log:'你在街头宣讲真相，但没几个人相信你'},
    {text:'趁乱发财',effect:{wealth:30,karma:-10},log:'你卖了一堆假的"壮阳丹"，赚了不少黑心钱'}]},

  // --- 死亡消失后的混乱 (year 25 ~ 35) ---
  {text:'<span class="danger-text">死亡消失</span>的日子里，世界陷入了前所未有的混乱——被砍成两半的人还在爬行，被火烧成焦炭的人还在嚎叫。有人将此视为天堂，有人将此视为<span class="danger-text">地狱</span>。',
    trigger:{minAge:15,yearMin:25,yearMax:35},mandatory:true,choices:[
    {text:'利用不死研究修炼极限',effect:{cultivation:25,constitution:-10,sanity:-20,comprehension:10},log:'你在不死之身上进行了各种修炼尝试——痛苦却不会死，你获得了常人无法获得的经验'},
    {text:'救助那些"死不了"的受苦者',effect:{karma:15,connections:15,sanity:-10},log:'你将那些生不如死的人聚集起来，尽力减轻他们的痛苦'},
    {text:'自闭不出',effect:{sanity:-15},log:'窗外传来的永无休止的惨叫声让你快要疯了'}]},

  // --- 坐忘道骰子的阴谋 (year 8 ~ 20) ---
  {text:'你得到可靠消息：<span class="fac">坐忘道</span>的<span class="npc">骰子</span>正在暗中布一个巨大的局——他要让<span class="mys">整个大梁朝廷</span>陷入疯狂。骰子已经渗透了朝中数位重臣。',
    trigger:{minAge:18,yearMin:8,yearMax:20,cultivation:40},choices:[
    {text:'向监天司告密',effect:{connections:15,qiyun:10,karma:10,sanity:-5},log:'监天司对此高度重视，但骰子的手段实在太高明——清除间谍如同大海捞针'},
    {text:'暗中追踪骰子',effect:{cultivation:15,sanity:-20,comprehension:10,qiyun:-10},log:'你几次接近了骰子的真身，但每次都被他以匪夷所思的方式逃脱——这个人…不，这个东西太可怕了'},
    {text:'不去碰骰子',effect:{sanity:5},log:'骰子是坐忘道最危险的人物，你不想成为他的玩物'}]},

  // --- 于儿神降临的恐怖 (year 22 ~ 32) ---
  {text:'<span class="fac">法教</span>十二大巫齐聚，以万人血祭召唤<span class="npc">于儿神</span>降临！天空撕裂，一只<span class="danger-text">巨大的不可名状之物</span>从裂缝中探出——那是超越凡人理解的存在。所到之处，生灵化为齑粉。',
    trigger:{minAge:18,yearMin:22,yearMax:32,cultivation:50},mandatory:true,choices:[
    {text:'拼死抵抗',effect:{cultivation:25,constitution:-15,sanity:-25,qiyun:15,karma:15},log:'你加入了对抗于儿神的战斗——虽然你的力量微不足道，但每一份力量都不可或缺',combat:95},
    {text:'尝试理解于儿神',effect:{comprehension:20,sanity:-30,cultivation:15},log:'你在恐惧中保持了一丝清明——于儿神不是邪恶，它只是…另一种存在的法则'},
    {text:'逃离战场',effect:{sanity:-15,qiyun:-5},log:'你拼命逃跑，身后是毁天灭地的战斗余波'}]},

  // --- 李火旺相关补充 (多时期) ---
  {text:'<span class="loc">赵家村</span>外的官道上，一个<span class="npc">面色青白的年轻人</span>蹲在路中间，手里死死攥着一个铜铃，浑身发抖。他嘴里反复念叨："这个世界是真的…这个世界是真的…"忽然他猛地站起来朝你的方向看过来——你浑身寒毛竖起。',
    trigger:{minAge:12,yearMin:0,yearMax:8},choices:[
    {text:'僵在原地不敢动',effect:{sanity:-12,comprehension:5},log:'他盯了你好一会，忽然问你："你觉得这个世界是真的吗？"你不敢回答，他也没等你答就走了。你发现自己后背全湿了'},
    {text:'扔下一碗水就跑',effect:{karma:5,sanity:-5},log:'你把水碗放在地上就跑。回头偷看，他愣愣地看了碗好一会才喝——那一瞬间他像个普通人。但你不敢再看第二眼'},
    {text:'绕远路走',effect:{sanity:-3},log:'村里人说这个年轻人叫李火旺，疯疯癫癫的，但谁也不敢招惹——因为上次有人骂了他一句，第二天那人就疯了'}]},
  {text:'路过一片空地，几个<span class="npc">瘦得皮包骨的孩子</span>围着一堆篝火。旁边站着一个浑身是血的少年——<span class="npc">李火旺</span>。他正拿刀在自己手臂上<span class="danger-text">割血</span>滴进锅里，那些孩子却像习以为常一样等着。附近的大人都远远躲着，有人低声说"那些是从<span class="fac">清风观</span>逃出来的，被丹阳子喂了一辈子的药…"',
    trigger:{minAge:10,yearMin:0,yearMax:6},choices:[
    {text:'远远看着不敢靠近',effect:{sanity:-10,comprehension:5},log:'你看到李火旺把血混进粥里给那些孩子喝——最可怕的是孩子们喝完后气色确实好了一些。他到底是人还是邪祟？'},
    {text:'偷偷留下一些干粮',effect:{karma:8,wealth:-5,sanity:-5},log:'你不敢正面接触他们。那些孩子面无表情地嚼着干粮——他们的眼神空洞得像死人'},
    {text:'赶紧离开这个地方',effect:{sanity:-3},log:'一个浑身是血的疯子带着一群半死不活的孩子——这光景你做噩梦都不敢梦'}]},
  {text:'<span class="fac">监天司</span>来了个怪人——<span class="npc">李火旺</span>。你听人说他既不是修士出身也没有背景，监天司的人却对他又忌惮又客气。最离谱的是他经常<span class="danger-text">对着空气大喊大叫</span>，有时候还会突然拔刀捅向身旁的虚空——然后那片虚空就会渗出血来。',
    trigger:{minAge:15,yearMin:5,yearMax:12},choices:[
    {text:'偷偷跟踪观察他',effect:{comprehension:8,sanity:-15},log:'你发现他夜里独自坐在屋顶上，一会哭一会笑，嘴里说着你听不懂的话——好像在和另一个世界的什么人对话。你看得头皮发麻'},
    {text:'打听他的底细',effect:{comprehension:5,sanity:-8,connections:5},log:'监天司的人压低声音说："别去招惹他。他是心素——他的肉能炼法器，各方势力都在盯着。但谁动他谁死。"'},
    {text:'离他远远的',effect:{sanity:3},log:'凡是跟这个人扯上关系的，没有一个有好下场——你决定当他不存在'}]},

  // --- 赊刀人 (year 0 ~ 20) ---
  {text:'一位戴着斗笠的<span class="npc">赊刀人</span>出现在集市上，他不卖东西，只留下物件说"等那一天来了再收账"。人们都说他是<span class="fac">监天司</span>的人。',
    trigger:{minAge:12,yearMin:0,yearMax:20},choices:[
    {text:'向他打探监天司的事',effect:{connections:10,comprehension:8},log:'赊刀人说了一句："天道有十六条，但不是每条都为人好。"便消失了'},
    {text:'收下他留的东西',effect:{qiyun:5,wealth:5},log:'他留给你一枚铜钱，说"日后自会知晓其用"'},
    {text:'觉得他是骗子',effect:{},log:'免费的东西最贵——你不信这一套'}]},

  // --- 无根生 (远古/传说) ---
  {text:'茶馆里一个老修士喝多了酒，开始讲<span class="npc">无根生</span>的故事——说这人当年走遍大梁，一手创了<span class="fac">坐忘道</span>，把斗姥都给拱成了司命。最后居然把自己全散了，用<span class="itm">先天一炁</span>转世重来。更吓人的是有人说他转世成了那个疯子<span class="npc">李火旺</span>——你听得酒都醒了。',
    trigger:{minAge:18,cultivation:30},choices:[
    {text:'追问那个老修士',effect:{comprehension:15,sanity:-12,cultivation:5},log:'"无根生啊，你们这些小辈不懂。他把自己活生生散了——不是死，是散。魂魄、肉身、记忆全碎了重来。你说他图什么？"老修士说到这里忽然不说了，眼神有些怕'},
    {text:'琢磨李火旺和无根生的关系',effect:{cultivation:8,sanity:-10,comprehension:10},log:'如果李火旺真是无根生的转世…那个在路边对着空气砍刀的疯子，前世竟然是整个修真界最牛的人？这太他妈离谱了'},
    {text:'当故事听听就算了',effect:{comprehension:5},log:'老修士的话真真假假，但"把自己散了转世重来"这话你记住了——什么样的人才能对自己下这种手？'}]},

  // --- 柳挽晴（李火旺的妻子） (year 3 ~ 20) ---
  {text:'你听到一个不可思议的消息：那个疯子<span class="npc">李火旺</span>居然成亲了——新娘叫<span class="npc">柳挽晴</span>，是个普通采药女。周围人都在议论："那个见人就砍的疯子怎么还有人嫁？""那女人怕不是被迷了心窍。"但也有人说，李火旺在她面前就不发疯了。',
    trigger:{minAge:15,yearMin:3,yearMax:20},choices:[
    {text:'远远看了一眼婚礼',effect:{sanity:-5,comprehension:5},log:'你偷偷看了一眼——那个平时对着空气挥刀的疯子，此刻笑得像个正常人。但你注意到他偶尔还是会扭头看向某个空无一人的方向，嘴唇微动。新娘似乎已经习惯了'},
    {text:'替那女人担心',effect:{karma:3,comprehension:3},log:'跟一个随时可能发疯杀人的家伙过日子…你不知道该说她勇敢还是疯了'}]},

  // --- 孟婆（孟斓音） (year 15 ~ 35) ---
  {text:'修士圈中流传着一个可怕的传闻：有人在黄泉路上遇到了<span class="npc">孟婆</span>——不是传说中的老太婆，而是一个年轻美貌的女子。她端着<span class="itm">孟婆汤</span>，微笑着说"忘了吧"。凡是喝下去的人，都忘记了最重要的人。',
    trigger:{minAge:20,yearMin:15,yearMax:35,cultivation:40},choices:[
    {text:'打探孟婆的真实身份',effect:{comprehension:12,sanity:-12,cultivation:8},log:'有人说孟婆就是"遗忘"的天道化身，也有人说她叫孟斓音，曾经也是一个普通人'},
    {text:'告诫自己不要靠近',effect:{sanity:5},log:'遗忘比死亡更可怕——你决不去碰那碗汤'}]},

  // --- 袄景教巴虺 (year 10 ~ 30) ---
  {text:'<span class="fac">袄景教</span>的信徒在荒野中举行<span class="danger-text">血祭</span>——他们用自己的血肉供奉<span class="npc">巴虺</span>。你看到一个教徒面带狂喜地割下自己的手指，鲜血滴落的瞬间地面裂开了一条缝，里面传出低沉的吼声。',
    trigger:{minAge:18,yearMin:10,yearMax:30},choices:[
    {text:'观察仪式全程',effect:{cultivation:15,sanity:-18,comprehension:10},log:'巴虺没有完全降临，但你感受到了"痛苦"天道的力量——那是一种让人在极致痛苦中获得力量的法则'},
    {text:'试图阻止仪式',effect:{karma:10,cultivation:5,constitution:-5,connections:-8},log:'你打断了仪式，但那些教徒反而感激地看着你——"巴虺说痛苦是恩赐"',combat:55},
    {text:'赶紧离开',effect:{sanity:-8},log:'那种发自灵魂深处的吼声，你这辈子都忘不了'}]},

  // --- 高智坚篡位细节 (year 12 ~ 20) ---
  {text:'<span class="npc">高智坚</span>入主皇宫的那天夜里，大梁上京城满城火光。据知情人说，高智坚本是大齐皇室后裔，但他体内流淌着<span class="mys">龙脉</span>之血——这赋予了他凌驾于常人的力量和权谋。',
    trigger:{minAge:15,yearMin:12,yearMax:20},choices:[
    {text:'深入了解高智坚其人',effect:{comprehension:12,connections:8,sanity:-5},log:'高智坚不简单——他既是政客也是修士，而且似乎与龙脉有着某种先天联系'},
    {text:'这不过是改朝换代',effect:{comprehension:3},log:'对百姓来说，谁做皇帝都一样苦'}]},

  // --- 红中（坐忘道高层） (year 8 ~ 20) ---
  {text:'城里出了大事——<span class="fac">坐忘道</span>的<span class="npc">红中</span>来了。一个戴红色面具的人走在街上，所有人突然开始<span class="danger-text">不受控制地说谎</span>。丈夫对妻子说"我从没爱过你"，母亲对孩子说"你不是我亲生的"——说的人自己都吓坏了，嘴巴却停不下来。那个红面具的人笑着走过，像在欣赏什么有趣的东西。',
    trigger:{minAge:18,yearMin:8,yearMax:20,cultivation:20},choices:[
    {text:'咬舌头拼命不说话',effect:{sanity:-15,comprehension:10,cultivation:5},log:'你咬破了舌头——嘴里全是血味，但至少没有说出不该说的话。红中经过你身边时侧头看了你一眼，笑了笑说"有意思"——你差点被吓死'},
    {text:'躲进屋里不出来',effect:{sanity:-8},log:'你把门窗全关死了。但你听到自己的嘴巴在自言自语——说的都是你最不愿承认的事。红中的力量连门都挡不住'},
    {text:'事后去监天司报告',effect:{connections:8,karma:5},log:'监天司的人脸色铁青地记下了。他们说红中是坐忘道最恐怖的人之一——掌控真假天道之力，在他面前没有秘密'}]},

  // --- 福生天 (year 30 ~ 42) ---
  {text:'天空中出现了一道<span class="danger-text">黑色裂隙</span>——<span class="npc">福生天</span>的气息从中泄露。那是一个比所有司命都更古老的存在，它的目的只有一个：<span class="mys">让一切归于虚无</span>。',
    trigger:{minAge:20,yearMin:30,yearMax:42,cultivation:80},mandatory:true,choices:[
    {text:'直面福生天的气息',effect:{cultivation:30,sanity:-30,comprehension:20},log:'那一瞬间你理解了——福生天不是"恶"，它是"无"。它要抹去的不只是生命，而是存在本身'},
    {text:'以修为护住心神',effect:{cultivation:10,sanity:-15,constitution:-5},log:'福生天的气息如同万蚁噬心，你勉强保住了自己不被同化'},
    {text:'祈求天道庇护',effect:{sanity:-10,qiyun:5},log:'你跪地祈祷——不知是哪条天道回应了你，一道微光将你笼罩'}]},

  // --- 三清元尊 (year 32 ~ 42) ---
  {text:'被<span class="npc">福生天</span>污染的<span class="npc">三清元尊</span>从白玉京中走出——它曾是道教至高的象征，如今却成了毁灭的化身。它所过之处，天道法则被逐一<span class="danger-text">扭曲</span>。',
    trigger:{minAge:20,yearMin:32,yearMax:42,cultivation:100},choices:[
    {text:'参与围攻三清元尊',effect:{cultivation:25,constitution:-15,sanity:-25,karma:10,qiyun:10},log:'你加入了各方联军，但三清元尊的力量远超想象——它一挥手就让方圆百里的天道法则全部失效',combat:99},
    {text:'远远观战',effect:{comprehension:15,sanity:-15},log:'你看到了司命之间的战斗——那已经超越了凡人所能理解的维度'}]},

  // --- 季灾成道后 (year 40+) ---
  {text:'大战过后，天下人才知道那个疯子<span class="npc">李火旺</span>变成了什么——<span class="npc">季灾</span>。他坐在<span class="loc">白玉京</span>中央，一个人扛着快要塌的天道。有时你抬头看天，会觉得天空在<span class="danger-text">抖</span>，老人们说那是季灾在和什么东西搏斗。整个世界的安宁系于一个曾经的疯子之身——你不知道该感到安心还是更害怕。',
    trigger:{minAge:25,yearMin:40,cultivation:60},choices:[
    {text:'心里发毛地望着天',effect:{sanity:-15,comprehension:15},log:'那个在赵家村对着空气砍刀的少年，现在成了守护天道的存在。你有时在想——他那时候砍的，真的是空气吗？'},
    {text:'老老实实过日子不去想',effect:{sanity:5,cultivation:5},log:'管他是季灾还是李火旺，你只是个普通人。天塌了有高个子顶着——虽然顶着的那个以前是个疯子'},
    {text:'默默朝白玉京方向磕了个头',effect:{karma:5,qiyun:5},log:'不管怎么说，是他撑住的。一个疯子撑住了整个天——你不懂这是伟大还是荒诞'}]},
  // 季灾心蟠已移除：季灾是主角李火旺专属，玩家不可触发

  // --- 左丘咏之女 左千户 (year 28 ~ 36) ---
  {text:'<span class="npc">左丘咏</span>被击败后，他的女儿<span class="npc">左千户</span>加入了<span class="fac">监天司</span>。你在一次任务中与她同行——她沉默寡言，但出手凌厉，身上隐隐有<span class="mys">天陈</span>的残余气息。',
    trigger:{minAge:18,yearMin:28,yearMax:36,cultivation:40},choices:[
    {text:'与她并肩作战',effect:{connections:15,cultivation:10,comprehension:5},log:'左千户的实力远超你的想象——她继承了父亲的部分天道之力',combat:75},
    {text:'问她关于天陈的事',effect:{comprehension:12,connections:8,sanity:-5},log:'她沉默了很久，最后只说了一句："天陈已经不存在了。"'},
    {text:'保持同僚关系',effect:{connections:5},log:'她不太与人交谈，但你能感受到她心中的重担'}]},

  // --- 岁岁（李岁/黑太岁） (year 8 ~ 40+) ---
  {text:'<span class="loc">赵家村</span>附近出了件怪事——那个疯子<span class="npc">李火旺</span>身边多了个<span class="npc">皮肤漆黑的小女孩</span>，管他叫"爹"。村民说她不是人——有人亲眼看到她的手臂化成<span class="danger-text">一团黑色的蠕动物质</span>去抓树上的果子，抓完又变回手。李火旺却像带亲闺女一样牵着她逛街。',
    trigger:{minAge:12,yearMin:5,yearMax:15},choices:[
    {text:'壮着胆子远远看了几眼',effect:{sanity:-12,comprehension:8},log:'那小女孩忽然扭头朝你看了一眼——她的瞳孔是竖的，像蛇。你的血液瞬间冻住了。但她只是咧嘴笑了笑，又去缠着李火旺要糖吃'},
    {text:'赶紧躲起来',effect:{sanity:-5},log:'跟在那个疯子身边的东西，怎么想都不是善茬。村里老人说那是黑太岁——碰了就没命'},
    {text:'跟其他村民一起议论',effect:{sanity:-3,connections:3},log:'"那个疯子身边多了个妖怪闺女——""嘘！小声点！那东西听得见！"'}]},
  {text:'一个可怕的消息在修士圈里传开：跟在<span class="npc">李火旺</span>身边的那个黑皮肤小女孩<span class="npc">岁岁</span>，真实身份是<span class="mys">黑太岁</span>——一种能吞噬万物、在两界间穿行的<span class="danger-text">上古凶物</span>。那个疯子居然把这种东西当女儿养，更可怕的是这黑太岁竟然真的学会了像人一样说话、走路、笑。',
    trigger:{minAge:18,yearMin:10,yearMax:25},choices:[
    {text:'听人描述岁岁的恐怖之处',effect:{comprehension:12,sanity:-15,cultivation:5},log:'有人说亲眼看到她一口吞掉了一整头牛，然后拍拍肚子说"好撑"。还有人说她能把自己变成任何人的样子——你怎么知道身边的人不是她变的？'},
    {text:'打听黑太岁到底是什么',effect:{comprehension:10,cultivation:8,sanity:-8},log:'据说黑太岁的本体是一种不死不灭的黑色胶状物，能适应任何环境。李火旺当初从青丘地底把它挖出来压制自己的幻觉——结果养出了个"女儿"'},
    {text:'决定以后绕着李火旺走',effect:{sanity:3},log:'一个疯子加一只上古凶物——你离他们越远越好'}]},
  {text:'天下大乱之后，有个骇人听闻的传言——当初跟着<span class="npc">李火旺</span>攻上<span class="loc">白玉京</span>的那只<span class="npc">黑太岁</span>，在大战中从天上<span class="danger-text">坠落</span>，竟穿越到了<span class="mys">三甲子（一百八十年）</span>之前。她一个人在一百八十年前那个陌生的世道里挣扎求生，先后吞噬融合了两任<span class="fac">司天监</span>，最终化为<span class="mys">玄牝</span>——大梁最强的甲等司天监。后来她甚至<span class="mys">化了龙</span>，在大战最关键的时刻率领<span class="mys">百万兵家英灵</span>以自身为祭召唤<span class="mys">将相首</span>从天而降反助李火旺——原来三甲子前的那位玄牝大人，就是一百八十年后坠落的黑太岁岁岁。',
    trigger:{minAge:20,yearMin:38,yearMax:50},choices:[
    {text:'细想之下毛骨悚然',effect:{comprehension:15,sanity:-12,qiyun:5},log:'一只黑太岁从天上掉下来，穿越三甲子，吞了两任司天监化为玄牝，又化了龙，率百万兵家召唤将相首，再回到原来的时间点——这他娘的到底是命运还是诅咒？'},
    {text:'跟人争论这事的真假',effect:{comprehension:8,connections:5,sanity:-5},log:'"怎么可能？一百八十年前的玄牝大人是个妖怪？""你别不信——你以为李火旺身边能有正常人吗？那个玄牝连龙都能化，你觉得是人干的事？"'},
    {text:'不想再听了',effect:{sanity:-3},log:'关于李火旺和他身边那些东西的事，你每多听一个字就多一晚睡不着觉'}]},

  // --- 诸葛渊补充 (year 0 ~ 15) ---
  {text:'<span class="npc">诸葛渊</span>路过你所在的城镇——整条街的人都跪下了。这位修真界的传奇人物，据说一个人能灭一座城。他身边跟着一个叫<span class="npc">苏北</span>的年轻人帮他拎东西。诸葛渊正用毛笔在半空中<span class="mys">写字</span>——那些字悬浮在空中发着光，然后消失了。',
    trigger:{minAge:12,yearMin:0,yearMax:15},choices:[
    {text:'跪在路边偷偷抬头看',effect:{comprehension:10,cultivation:5,sanity:-5},log:'你看到了那些悬浮的字——虽然一个都不认识，但你的脑子里突然冒出了一些从没想过的念头。等你回过神，诸葛渊已经走远了'},
    {text:'趴在地上不敢看',effect:{sanity:3},log:'这种大人物，多看一眼都可能招祸。等他走远了你才敢起来，发现自己的腿还在抖'},
    {text:'不知道他是谁',effect:{karma:3},log:'旁边的人疯了一样跪，你跟着跪了但不知道为什么。事后才有人告诉你那是诸葛渊——你后悔没多看两眼'}]},
  {text:'坊间传言：<span class="npc">诸葛渊</span>正在秘密联络各方势力，说<span class="loc">白玉京</span>要出大事。那些平时互相看不顺眼的门派居然真的被他一封信就叫到了一起——这老头的面子大到什么程度？连<span class="fac">监天司</span>都派人去了。',
    trigger:{minAge:15,yearMin:8,yearMax:16,cultivation:30},choices:[
    {text:'打听到底要出什么事',effect:{comprehension:10,sanity:-8,connections:5},log:'没人说得清楚。但你注意到最近天上的云总是一种诡异的颜色——诸葛渊一定是看到了什么普通人看不到的东西'},
    {text:'趁乱囤点物资',effect:{wealth:10,constitution:5},log:'大人物打仗，遭殃的永远是小老百姓。你开始默默屯粮'},
    {text:'管不了那么多',effect:{sanity:3},log:'你连饭都快吃不起了，哪有功夫管白玉京的闲事'}]},

  // --- 骰子补充 (year 5 ~ 20) ---
  {text:'你在<span class="loc">上京城</span>的一家赌坊里看到一个奇怪的人——他自称<span class="npc">骰子</span>，手中不停地摇着一个骰盅。每一次骰子落定，赌坊里就有人大喜或大悲。你直觉这不是普通的赌博。',
    trigger:{minAge:15,yearMin:5,yearMax:18},choices:[
    {text:'和骰子赌一局',effect:{wealth:30,sanity:-15,qiyun:-10},log:'你赢了——但你总觉得他是故意让你赢的。骰子笑了笑说："记住，你欠我一个人情。"'},
    {text:'观察骰子的手法',effect:{comprehension:15,sanity:-10},log:'你发现骰子的每一次掷骰都在操纵现实——这不是赌技，这是坐忘道的术法'},
    {text:'立刻离开',effect:{sanity:5},log:'直觉告诉你这个人极其危险——他看你的眼神像在看一颗棋子'}]},
  {text:'<span class="npc">骰子</span>的真面目逐渐暴露——他不是人，而是<span class="fac">坐忘道</span>以<span class="mys">真假天道</span>之力创造出的一个<span class="danger-text">概念体</span>。他能化身为任何人，操纵任何人的命运。<span class="fac">监天司</span>已将他列为头号通缉。',
    trigger:{minAge:18,yearMin:10,yearMax:22,cultivation:40},choices:[
    {text:'协助监天司追捕骰子',effect:{connections:15,cultivation:10,sanity:-15,qiyun:5},log:'追踪骰子的过程如同与影子搏斗——他可以是街边卖菜的老翁，可以是你身旁的同伴，甚至可以是你自己'},
    {text:'收集骰子的情报',effect:{comprehension:12,connections:8,sanity:-8},log:'你发现骰子的最终目标是以皇帝身份号令兵家消灭监天司'},
    {text:'远离此事',effect:{sanity:3},log:'骰子能变成任何人——你连信任谁都做不到'}]},

  // --- 闻人诡（心浊） (year 0 ~ 25) ---
  {text:'你听说有一个叫<span class="npc">闻人诡</span>的奇人——此人是<span class="mys">心浊</span>，能把东西或人藏进另一个空间，但代价是不断遗忘。据说他连自己的性别都快忘了。',
    trigger:{minAge:15,yearMin:0,yearMax:25},choices:[
    {text:'寻找闻人诡',effect:{comprehension:12,sanity:-10,cultivation:8},log:'你找到了闻人诡——或者说闻人诡找到了你。他看着你的眼睛说："你叫什么来着？"你才刚说过自己的名字'},
    {text:'研究心浊的特性',effect:{comprehension:15,cultivation:5},log:'心浊的业障影响最深的不是别人而是自己——遗忘是心浊的宿命。闻人诡的头发可以强化法器，因此也被各方觊觎'},
    {text:'不去找麻烦',effect:{},log:'心浊听起来比心素还可怕——连自我都会遗忘'}]},
  {text:'<span class="npc">闻人诡</span>再次出现在你附近——但他似乎完全不记得你了。他的空间之力越来越强，但遗忘也越来越严重。他身上散发着一种令人心悸的<span class="mys">空间波动</span>。',
    trigger:{minAge:20,yearMin:10,yearMax:30,cultivation:30},choices:[
    {text:'试着帮他恢复记忆',effect:{connections:10,sanity:-10,comprehension:10,karma:5},log:'你用各种方法提醒他过去的事——他偶尔会露出一丝恍惚的表情，但很快又忘了'},
    {text:'请他展示空间之力',effect:{cultivation:15,comprehension:12,sanity:-8},log:'闻人诡随手一挥，你面前的一块巨石就消失了——被他"藏"进了另一个空间。但他说他也不记得藏了什么了'},
    {text:'只是远远看着',effect:{comprehension:5},log:'遗忘的天道...是三清掌管的力量吗？'}]},

  // --- 孙夫子 (year 0 ~ 20) ---
  {text:'一位名叫<span class="npc">孙夫子</span>的教书先生在乡间办私塾。他看起来平凡无奇，但你注意到他偶尔会用一种古怪的目光看向天空——仿佛能看到常人看不到的东西。',
    trigger:{minAge:10,yearMin:0,yearMax:20},choices:[
    {text:'拜他为师',effect:{comprehension:15,connections:10,cultivation:5},log:'孙夫子教你读书识字，但偶尔会说一些意味深长的话——"这世道啊，表面的东西都是假的"'},
    {text:'送孩子去他的私塾',effect:{connections:5,karma:5,wealth:-5},log:'孙夫子的私塾很受欢迎，据说他教出来的学生都特别机敏'},
    {text:'只是路过',effect:{},log:'一个教书先生而已'}]},

  // --- 柏雅（大齐守将/修士） (year 15 ~ 30) ---
  {text:'在法教入侵<span class="loc">四齐</span>的战争中，一位名叫<span class="npc">柏雅</span>的大齐将领以死守城——他麾下的将士全部战死，但法教的大军被迟滞了整整三天。这三天救了数万难民的命。',
    trigger:{minAge:15,yearMin:20,yearMax:30},choices:[
    {text:'前往祭拜柏雅',effect:{karma:10,qiyun:8,comprehension:5,connections:5},log:'柏雅的坟前已有无数人来过——一个凡人以血肉之躯抵挡了邪神的军队，这份意志令人敬畏'},
    {text:'继承柏雅的意志参军',effect:{cultivation:10,constitution:5,connections:15,karma:8},log:'你加入了抵抗法教的队伍，柏雅的名字成为了所有士兵的信仰'},
    {text:'默默铭记',effect:{karma:5,comprehension:3},log:'这世上有些人注定要被记住'}]},

  // --- 监天司·苗通 (year 5 ~ 18) ---
  {text:'<span class="fac">监天司</span>的<span class="npc">苗通</span>——一个看起来笑眯眯的中年胖子——突然造访此地。别看他表面和善，据说他手上沾了不少邪修的血。',
    trigger:{minAge:15,yearMin:5,yearMax:18},choices:[
    {text:'与苗通交谈',effect:{connections:10,comprehension:5,sanity:-3},log:'苗通笑呵呵地问了你很多问题——你后来才意识到他在盘查你是否有邪修嫌疑'},
    {text:'请苗通帮忙处理邪祟',effect:{connections:8,karma:5,qiyun:5},log:'苗通三下五除二就解决了困扰此地多年的邪祟——监天司的实力果然不凡'},
    {text:'躲着他',effect:{sanity:3},log:'监天司的人来从来不是好事'}]},

  // --- 监天司·玄牝补充 (year 15 ~ 35) ---
  {text:'<span class="fac">监天司</span>司天监<span class="npc">玄牝</span>的真实身份被揭露——她不是普通人类，而是某种<span class="mys">龙人</span>血脉的后裔。她体内流淌着龙脉之血。这个秘密让整个监天司震动。',
    trigger:{minAge:18,yearMin:15,yearMax:30,cultivation:40},choices:[
    {text:'去见玄牝',effect:{connections:15,cultivation:10,comprehension:10,sanity:-5},log:'玄牝的气场令人窒息——她虽然不是纯正人类，但为守护大梁已经付出了太多'},
    {text:'研究龙人血脉',effect:{comprehension:15,cultivation:8},log:'龙人的血脉极为稀有，传闻他们和大梁的龙脉有某种深层联系'},
    {text:'无所谓',effect:{},log:'人也好龙也好，能守护天下就是好人'}]},

  // --- 大千录（袄景教传承法器） (year 10 ~ 25) ---
  {text:'你无意中接触到了<span class="fac">袄景教</span>的传承法器<span class="itm">大千录</span>——这部古书记载了袄景教所有的登阶功法。书页上的文字在你触碰时跳动如活物。',
    trigger:{minAge:18,yearMin:10,yearMax:25,cultivation:25},choices:[
    {text:'翻阅大千录',effect:{cultivation:20,comprehension:15,sanity:-15,karma:-5},log:'大千录中的功法极其残忍——但确实蕴含着通往痛苦天道的路径。你理解了为什么袄景教徒甘愿自残'},
    {text:'交给监天司',effect:{connections:15,karma:10,qiyun:5},log:'监天司对你的义举大加赞赏——大千录落入邪修手中后果不堪设想'},
    {text:'原封不动放回去',effect:{sanity:5},log:'有些东西不该被翻开'}]},
];

// === LOCAL STORIES (birthplace/location-specific events) ===
export const LOCAL_STORIES = [
  // --- 赵家村 ---
  {text:'<span class="loc">赵家村</span>的赵老太爷去世了，下葬那天，棺材里传出<span class="mys">敲击声</span>。全村人吓得不敢动。',
    locReq:'zhao_cun',trigger:{minAge:12},choices:[
    {text:'开棺验看',effect:{cultivation:5,sanity:-12,comprehension:5},log:'棺材里是空的——尸体不见了'},
    {text:'请道士来',effect:{connections:5,wealth:-10},log:'道士说这叫"走尸"，不是好兆头'}]},
  {text:'村后的<span class="mys">荒坟</span>最近总有人看到青色的火焰。<span class="loc">赵家村</span>的猎户说那是磷火，但老人们说那是鬼火。',
    locReq:'zhao_cun',trigger:{minAge:15},choices:[
    {text:'夜探荒坟',effect:{cultivation:8,sanity:-10,comprehension:5},log:'你在坟堆里发现了一块刻着符文的玉佩'},
    {text:'别去招惹',effect:{sanity:3},log:'死人的地方活人别去'}]},

  // --- 鲁城 ---
  {text:'<span class="loc">鲁城</span>的<span class="npc">张屠户</span>杀猪时在猪肚子里切出了一块<span class="itm">玉印</span>，上面刻着"<span class="mys">敕令</span>"二字。消息传遍全城。',
    locReq:'lu_cheng',trigger:{minAge:12},choices:[
    {text:'设法买下玉印',effect:{wealth:-20,cultivation:10,qiyun:5},log:'玉印入手时微微发热，似有灵性',req:{wealth:20}},
    {text:'只是看热闹',effect:{comprehension:3},log:'猪肚里出玉印，世间无奇不有'}]},
  {text:'<span class="loc">鲁城</span>东门的<span class="npc">赊刀人</span>出现了——他留下一把菜刀不收钱，只说"等某件事发生了再来收钱"。',
    locReq:'lu_cheng',trigger:{minAge:15},choices:[
    {text:'追问赊刀人来历',effect:{connections:10,comprehension:8,sanity:-5},log:'赊刀人说他是监天司的，然后就消失了'},
    {text:'收下刀',effect:{wealth:5,qiyun:3},log:'这把刀异常锋利，而且永远不生锈'}]},

  // --- 阳城 ---
  {text:'<span class="loc">阳城</span>的城隍庙今夜大开庙门——这不是庙会，而是真的有<span class="mys">什么东西</span>从庙里走了出来。满城犬吠不止。',
    locReq:'yang_cheng',trigger:{minAge:15},choices:[
    {text:'前去查看',effect:{cultivation:10,sanity:-15,comprehension:8},log:'你看到一个穿官服的透明人影走过长街，所过之处寒气逼人'},
    {text:'关紧门窗',effect:{sanity:-5},log:'第二天早上，城里多了三具无名尸体'}]},

  // --- 大梁城/上京城 ---
  {text:'<span class="loc">上京城</span>的花灯节，有人在灯谜上写了一句诡异的话："<span class="mys">白玉京中五城十二楼，仙人抚我顶</span>"。没人猜得出谜底。',
    locReq:'shang_jing',trigger:{minAge:12},choices:[
    {text:'思考这句话的含义',effect:{comprehension:10,cultivation:5,sanity:-5},log:'白玉京...你隐约觉得这不只是诗句'},
    {text:'不管了吃糖葫芦',effect:{sanity:5},log:'花灯节还是糖葫芦最好'}]},
  {text:'<span class="loc">上京城</span>地下排水渠出了怪事——工人说里面有一条<span class="danger-text">巨大的蛇</span>在游动。官府派人去查，下去的人都疯了。',
    locReq:'shang_jing',trigger:{minAge:18,cultivation:20},choices:[
    {text:'自己下去探查',effect:{cultivation:15,sanity:-20,comprehension:10},log:'那不是蛇——是龙脉的一部分。你触碰到了秩序之力'},
    {text:'不去送死',effect:{sanity:3},log:'让官府的人处理吧'}]},

  // --- 玉清山 ---
  {text:'<span class="loc">玉清山</span>深处有一个被藤蔓遮蔽的<span class="mys">石门</span>，上面刻着"<span class="itm">非人莫入</span>"四个字。最近石门上的封印出现了裂纹。',
    locReq:'shan_qu',trigger:{minAge:15,cultivation:10},choices:[
    {text:'推开石门',effect:{cultivation:20,sanity:-18,comprehension:10},log:'门后是一个巨大的地下空间，墙壁上画满了上古修士飞升的壁画'},
    {text:'重新封印',effect:{karma:10,cultivation:5},log:'你用石头堵住裂纹——有些东西不该被打开'}]},

  // --- 边境 ---
  {text:'<span class="loc">边境</span>的老兵们说，每到月圆之夜，战场上死去的士兵会<span class="mys">站起来</span>重演生前的战斗。今晚就是月圆。',
    locReq:'bian_jing',trigger:{minAge:15},choices:[
    {text:'去战场观看',effect:{cultivation:10,sanity:-15,constitution:3},log:'你看到了——成百上千的鬼魂在月光下厮杀，刀光剑影却毫无声息'},
    {text:'老兵的故事听听就好',effect:{sanity:3},log:'但你半夜确实听到了远处隐隐的喊杀声'}]},

  // --- 南疆 ---
  {text:'<span class="loc">南疆</span>的<span class="npc">蛊母</span>在选徒弟——她要找一个"<span class="mys">命硬</span>"的人，继承南疆巫族最恐怖的<span class="itm">七杀蛊</span>。',
    locReq:'nan_jiang',trigger:{minAge:15,cultivation:10},choices:[
    {text:'毛遂自荐',effect:{cultivation:20,sanity:-15,constitution:-5,karma:-8},log:'蛊母审视你半晌，将一只黑色的虫子放入你的掌心——痛入骨髓'},
    {text:'这种东西碰不得',effect:{sanity:5},log:'蛊术害人害己，你不想沾染'}]},
  {text:'<span class="loc">南疆</span>的密林里发现了一具<span class="mys">石化的巨人</span>。当地巫师说那是上古时代被封印的<span class="npc">蛮神</span>。',
    locReq:'nan_jiang',trigger:{minAge:18},choices:[
    {text:'研究石化巨人',effect:{comprehension:12,cultivation:8,sanity:-10},log:'巨人的眼睛里似乎还有一丝意识...'},
    {text:'不敢靠近',effect:{sanity:-3},log:'封印之物不该被打扰'}]},

  // --- 四齐 ---
  {text:'<span class="loc">四齐</span>废城的地下发现了<span class="fac">法教</span>留下的<span class="mys">祭坛</span>，上面还残留着干涸的血迹和散落的骨头。',
    locReq:'si_qi',trigger:{minAge:15},choices:[
    {text:'检查祭坛',effect:{cultivation:10,sanity:-15,comprehension:8},log:'祭坛的构造精妙到令人恐惧——这是专门用来召唤于儿神的'},
    {text:'把祭坛毁掉',effect:{karma:10,constitution:-3},log:'你花了半天砸毁了祭坛，愿此地不再有人受害'}]},
  {text:'你在<span class="loc">四齐</span>遇到一个自称是<span class="npc">大齐皇室后裔</span>的老人，他偷偷给你看了一块<span class="itm">龙纹玉佩</span>。',
    locReq:'si_qi',trigger:{minAge:12},choices:[
    {text:'听老人讲述大齐往事',effect:{comprehension:10,connections:5},log:'他说大齐曾经比大梁还强盛，是法教毁了一切'},
    {text:'告诉他别张扬',effect:{karma:5,connections:3},log:'乱世之中，皇室血脉是祸不是福'}]},

  // --- 杏岛 ---
  {text:'<span class="loc">杏岛</span>上的老修士在讲述<span class="npc">诸葛渊</span>的故事——他是如何以一人之力对抗司命的。岛上所有修士都肃然起敬。',
    locReq:'xing_dao',trigger:{minAge:15,cultivation:20},choices:[
    {text:'在诸葛渊修炼过的地方冥想',effect:{cultivation:15,comprehension:12,sanity:-5},log:'你隐约感受到了诸葛渊留下的道意残片'},
    {text:'请教老修士修行之法',effect:{cultivation:8,connections:10},log:'老修士传你几个实用的小法术'}]},

  // --- 清风观遗址 ---
  {text:'你重访<span class="loc">清风观遗址</span>，废墟中的灵气还没有完全散尽。夜里你看到了丹阳子残留的<span class="mys">执念</span>——一个透明的道士在废墟中走来走去，反复念叨着"仙丹...快成了..."。',
    locReq:'qing_feng',trigger:{minAge:18,cultivation:15},choices:[
    {text:'尝试渡化这道执念',effect:{karma:15,cultivation:10,sanity:-10},log:'执念在你的安抚下逐渐消散，你感到一阵轻松'},
    {text:'从执念中偷学功法',effect:{cultivation:20,sanity:-15,karma:-10},log:'丹阳子虽然疯了，功法却是真的厉害'}]},

  // --- 正德寺 ---
  {text:'<span class="loc">正德寺</span>的地下室被人发现了。里面有数十个<span class="danger-text">陶瓷花瓶</span>，每个花瓶里…都有一具婴儿的残骸。当地人大骂心慧方丈禽兽不如。',
    locReq:'zheng_de_si',trigger:{minAge:12},choices:[
    {text:'帮忙安葬这些婴儿',effect:{karma:15,sanity:-15,qiyun:5},log:'你一边挖坑一边流泪——这世间怎会有这种事'},
    {text:'找心慧方丈算账',effect:{cultivation:5,connections:10,karma:10,sanity:-10},log:'心慧早已逃遁，寺中只剩几个不知情的小沙弥'},
    {text:'不敢看',effect:{sanity:-8},log:'你转身就走，脑海中却挥之不去那些花瓶的样子'}]},

  // --- 安慈庵 ---
  {text:'<span class="loc">安慈庵</span>虽然师太已故，但庵中的<span class="itm">驱邪符</span>依然灵验。附近村民遇到怪事都来这里取符。',
    locReq:'an_ci',trigger:{minAge:12},choices:[
    {text:'学习画符',effect:{cultivation:10,comprehension:5},log:'你照着师太留下的符箓样子练习，居然有几张真的亮了'},
    {text:'取一张符防身',effect:{qiyun:5,sanity:3},log:'贴在门上后确实安心了不少'}]},

  // --- 邪祟 location-bound events ---
  // --- 赵家村 邪祟 ---
  {text:'<span class="loc">赵家村</span>村口的古井最近不对劲——井水变成了<span class="danger-text">暗红色</span>，半夜能听到井底传来咕噜咕噜的声音，像是有什么东西在翻涌。',
    locReq:'zhao_cun',trigger:{minAge:13},choices:[
    {text:'趴在井口往下看',effect:{cultivation:5,sanity:-12,comprehension:5},log:'你看到了——井底有一张人脸在冲你笑。你吓得摔了出去，再看时什么都没有'},
    {text:'往井里扔石头',effect:{sanity:-5,comprehension:3},log:'石头落入水中没有溅起水花——仿佛被什么东西接住了'},
    {text:'通知村民封井',effect:{connections:5,karma:5},log:'村民用石板封了井口，但到了半夜石板又被推开了'}]},
  {text:'深夜，有人<span class="danger-text">模仿你家人的声音叫门</span>——声音一模一样，但你的家人明明就在屋里。<span class="loc">赵家村</span>的夜晚从来都不安全。',
    locReq:'zhao_cun',trigger:{minAge:14},choices:[
    {text:'坚决不开门',effect:{sanity:-8,comprehension:5},log:'叫门声持续了一整夜，天亮后门口只有一排不属于人类的脚印'},
    {text:'隔着门问它是谁',effect:{sanity:-12,comprehension:8},log:'声音顿了一下，然后用你自己的声音说了一句："我就是你啊。"'},
    {text:'从窗户偷看',effect:{sanity:-15,cultivation:5,comprehension:5},log:'你看到门外站着一个<span class="danger-text">没有脸的人形</span>——它用你熟悉的声音在喊你的名字'}]},

  // --- 鲁城 邪祟 ---
  {text:'<span class="loc">鲁城</span>西巷新开了一家包子铺，生意兴隆。但有人注意到——自从这家铺子开张后，<span class="danger-text">城里失踪的人越来越多</span>了。',
    locReq:'lu_cheng',trigger:{minAge:15},choices:[
    {text:'暗中调查包子铺',effect:{comprehension:8,sanity:-12,karma:5,cultivation:5},log:'你在铺子后面发现了一间密室——里面挂着几具被剔了肉的<span class="danger-text">人彘</span>。你差点吐出来'},
    {text:'去官府报案',effect:{connections:5,karma:5},log:'官府去查时铺子已经人去楼空，只剩下满地的血迹'},
    {text:'再也不去那家铺子',effect:{sanity:-3},log:'不久后铺子自己关了门，但那些失踪的人再也没有回来'}]},
  {text:'<span class="loc">鲁城</span>出了一桩<span class="danger-text">猛鬼案</span>——城东的一户人家，一夜之间全家七口暴毙，死状极其诡异：每个人的脸上都带着笑容。',
    locReq:'lu_cheng',trigger:{minAge:16,cultivation:5},choices:[
    {text:'去现场查看',effect:{cultivation:8,comprehension:8,sanity:-15},log:'你感知到现场弥漫着浓重的邪气——这是一种能让人"笑死"的邪祟'},
    {text:'询问目击者',effect:{connections:5,comprehension:5,sanity:-5},log:'邻居说半夜听到了他们家传来的笑声，笑了整整一夜'},
    {text:'去请修行人来',effect:{connections:3,wealth:-5},log:'修行人来后面色凝重，说这是"笑面鬼"所为，极难对付'}]},

  // --- 玉清山 邪祟 ---
  {text:'你在<span class="loc">玉清山</span>中迷了路——四周浓雾弥漫，无论怎么走都回到同一个地方。远处隐约出现了一座<span class="mys">道观的残影</span>，但你明明知道那里没有道观。',
    locReq:'shan_qu',trigger:{minAge:16,cultivation:3},choices:[
    {text:'朝道观走去',effect:{cultivation:8,sanity:-15,comprehension:10},log:'你走进了道观——里面坐着一排打坐的道士，但他们都已经死了上百年。你从他们身上感受到了残留的修行之意'},
    {text:'原地打坐破解迷雾',effect:{cultivation:5,comprehension:8,sanity:-5},log:'你以灵气对抗鬼打墙，终于在天亮时破解了迷雾'},
    {text:'用刀在树上做记号',effect:{comprehension:5,sanity:-8},log:'你惊恐地发现——每棵树上都已经有了刀痕。有人比你更早被困在这里'}]},
  {text:'<span class="loc">玉清山</span>深处，你看到了一个穿<span class="danger-text">红衣</span>的女子站在悬崖边——她背对着你，长发在风中飘荡。',
    locReq:'shan_qu',trigger:{minAge:17,cultivation:5},choices:[
    {text:'出声询问',effect:{sanity:-12,comprehension:5,cultivation:5},log:'女子转过身来——她没有脸。你后退一步，她就消失了'},
    {text:'以灵力探查',effect:{cultivation:8,comprehension:8,sanity:-8},log:'你的灵力触碰到她时感受到了无尽的怨念——她是被害死在这里的冤魂'},
    {text:'立刻后退离开',effect:{sanity:-5,constitution:3},log:'直觉告诉你不该靠近。你转身就走，身后传来了轻微的哭声'}]},

  // --- 边境 邪祟 ---
  {text:'<span class="loc">边境</span>的古战场上，每到月圆之夜就会出现<span class="danger-text">怨灵聚集</span>的景象——数百个穿着铠甲的鬼兵在无声地厮杀。',
    locReq:'bian_jing',trigger:{minAge:18,cultivation:10},choices:[
    {text:'尝试超度怨灵',effect:{cultivation:10,karma:10,sanity:-10,comprehension:5},log:'你的法力只超度了一小部分怨灵，但它们临走时向你投来了感激的目光'},
    {text:'从怨灵中汲取修为',effect:{cultivation:12,karma:-10,sanity:-15},log:'你以邪法汲取了怨灵的力量——这很有效，但你感觉自己正在失去什么'},
    {text:'远远观察',effect:{comprehension:8,sanity:-8},log:'你观察鬼兵的战斗方式，从中学到了一些已经失传的武技'}]},
  {text:'<span class="loc">边境</span>巡逻时你遇到了<span class="danger-text">无头尸兵</span>——它们没有头颅却行动自如，手中的兵器锈迹斑斑但杀意冲天。',
    locReq:'bian_jing',trigger:{minAge:19,cultivation:15},choices:[
    {text:'以修为将它们打散',effect:{cultivation:10,constitution:-5,sanity:-8,karma:3},log:'你费了好大力气才将无头尸兵消灭——它们比普通走尸强太多了',combat:45},
    {text:'以火焚烧',effect:{cultivation:8,comprehension:5,sanity:-5},log:'尸兵遇火后发出无声的惨叫，你感觉到它们曾经也是活生生的人'},
    {text:'绕路避开',effect:{comprehension:3,sanity:-3},log:'惹不起还躲不起吗？你绕了一大圈才脱离了它们的活动范围'}]},

  // --- 南疆 邪祟 ---
  {text:'<span class="loc">南疆</span>的密林中，你感觉身体不对劲——一条<span class="danger-text">蛊虫</span>不知何时钻入了你的皮肤，正在往心脏的方向爬。',
    locReq:'nan_jiang',trigger:{minAge:17,cultivation:8},choices:[
    {text:'以灵气将蛊虫逼出',effect:{cultivation:8,constitution:-5,sanity:-5},log:'你逼出了蛊虫——它有拇指大小，通体漆黑，还在扭动'},
    {text:'割开皮肉取出蛊虫',effect:{constitution:-8,sanity:-8,comprehension:5},log:'你忍着剧痛挖出了蛊虫，伤口流出的血是黑色的'},
    {text:'找当地巫师求救',effect:{wealth:-15,connections:5,constitution:-3},log:'巫师用一种特殊的药汁将蛊虫引了出来'}]},
  {text:'<span class="loc">南疆</span>的洞穴深处，你遇到了一只巨型<span class="danger-text">人面蜘蛛</span>——它有牛车大小，八只腿上长满了人的手指，脸上的五官还在不断变化。',
    locReq:'nan_jiang',trigger:{minAge:20,cultivation:20},choices:[
    {text:'全力出手斩杀',effect:{cultivation:12,constitution:-8,sanity:-15,comprehension:5,karma:3},log:'你与巨型人面蜘蛛殊死搏斗，最终将它斩杀。它死前脸上露出了解脱的表情',combat:55},
    {text:'以火攻之',effect:{cultivation:10,sanity:-10,comprehension:5},log:'蛛丝易燃，火势一起蜘蛛就疯狂地挣扎——但那人脸发出的惨叫让你终身难忘'},
    {text:'封住洞口困死它',effect:{cultivation:5,comprehension:8,sanity:-8},log:'你用碎石封住了洞口——但你不确定这能困住它多久'}]},

  // --- 四齐 邪祟 ---
  {text:'<span class="loc">四齐</span>废弃的<span class="fac">法教</span>祭坛上，残留的<span class="danger-text">邪祟</span>还在游荡——那是血祭未完成留下的怨念凝聚体。',
    locReq:'si_qi',trigger:{minAge:18,cultivation:15},choices:[
    {text:'净化祭坛',effect:{cultivation:10,karma:10,sanity:-10,comprehension:5},log:'你花了三天时间才将祭坛上的邪气清除——那些怨念在消散时似乎在说"谢谢"'},
    {text:'从祭坛中汲取残余力量',effect:{cultivation:12,karma:-10,sanity:-12},log:'邪气涌入你的体内，力量暴增但你的心性也开始动摇'},
    {text:'摧毁祭坛',effect:{cultivation:5,karma:8,constitution:-3},log:'你将祭坛彻底摧毁，邪气四散——总比留在这里祸害人好'}]},
  {text:'<span class="loc">四齐</span>被<span class="npc">于儿神</span>污染过的土地上，庄稼长出了<span class="danger-text">诡异的变异</span>——小麦结出了红色的穗，每一粒都像是一只紧闭的眼睛。',
    locReq:'si_qi',trigger:{minAge:16},choices:[
    {text:'以灵力净化土地',effect:{cultivation:8,karma:8,constitution:-3,sanity:-5},log:'你净化了一小片土地，但于儿神的污染太深——这需要数十年才能完全恢复'},
    {text:'采集变异作物研究',effect:{comprehension:10,sanity:-10,cultivation:5},log:'变异的小麦蕴含着于儿神残留的力量——危险但也是珍贵的研究素材'},
    {text:'烧掉变异作物',effect:{karma:5,sanity:-3},log:'你一把火烧掉了所有变异作物，火焰是黑色的'}]},

  // --- 上京城 邪祟 ---
  {text:'<span class="loc">上京城</span>的<span class="mys">龙气</span>压制着大部分邪祟，但有些东西依然能在夜晚出没——你在皇城根下看到了一个<span class="danger-text">影子</span>，它在没有主人的情况下独自行走。',
    locReq:'shang_jing',trigger:{minAge:16},choices:[
    {text:'跟踪影子',effect:{cultivation:5,sanity:-12,comprehension:8},log:'影子带你来到了一处地下通道——那里有上古王朝留下的封印，正在慢慢失效'},
    {text:'以灵力探查',effect:{cultivation:5,comprehension:5,sanity:-5},log:'你发现这个影子是被龙气压制后残留的邪祟碎片，它已经不能伤人了'},
    {text:'向监天司报告',effect:{connections:5,karma:3},log:'监天司派人来处理——他们说这种事最近越来越多了'}]},
  {text:'<span class="loc">上京城</span>看似繁华太平，但夜深人静时，你能听到皇城的方向传来低沉的<span class="mys">诵经声</span>——那不是人的声音。',
    locReq:'shang_jing',trigger:{minAge:18,cultivation:10},choices:[
    {text:'循声探查',effect:{cultivation:8,comprehension:10,sanity:-12},log:'你发现诵经声来自皇城地下——那里镇压着一头上古邪物，诵经声是它在自我封印'},
    {text:'以修为感应',effect:{comprehension:8,cultivation:5,sanity:-8},log:'你感知到龙气下面还有更古老的力量在沉睡——上京城建在了一座封印之上'},
    {text:'当作没听到',effect:{sanity:-3},log:'有些事情知道了反而是祸。你选择装聋作哑'}]},

  // --- 鬼市 邪祟 ---
  {text:'你在<span class="loc">鬼市</span>上买到了一面<span class="itm">古铜镜</span>——卖镜子的老人说"千万不要在半夜照"。当然，你没忍住。',
    locReq:'gui_shi',trigger:{minAge:16,cultivation:5},choices:[
    {text:'半夜照了铜镜',effect:{cultivation:8,sanity:-15,comprehension:10},log:'铜镜里映出的不是你的脸——而是一个穿着古代衣服的人。他冲你点了点头，然后镜子碎了'},
    {text:'遵守忠告不在半夜照',effect:{sanity:3,comprehension:3},log:'第二天你把镜子拿出来时发现——镜面上多了一个手印，从里面按上去的'},
    {text:'把铜镜转卖',effect:{wealth:10,karma:-5},log:'你把铜镜卖给了一个不知情的人——希望他会听劝不在半夜照'}]},
  {text:'你在<span class="loc">鬼市</span>里逛着逛着发现出不去了——<span class="danger-text">鬼市困住了你</span>。周围的鬼商贩们冲你露出了意味深长的笑容。',
    locReq:'gui_shi',trigger:{minAge:18,cultivation:10},choices:[
    {text:'以灵力强行破开鬼市结界',effect:{cultivation:10,constitution:-5,sanity:-10},log:'你消耗了大量修为才撕开了鬼市的结界逃出来——天已经亮了，你在鬼市里待了一整夜',combat:40},
    {text:'和鬼市管理者交涉',effect:{connections:5,wealth:-15,sanity:-8,comprehension:5},log:'你花了一大笔"阴币"才从鬼市管理者那里买到了出去的路'},
    {text:'等到天亮自然脱困',effect:{sanity:-12,comprehension:8},log:'你在鬼市里忍到了天亮——鬼市消散时你看到了它的真面目：那是一座埋在地下的古城'}]},
];


// === RANK EVENTS (triggered by faction rank) ===
export const RANK_EVENTS = {
  zuowang: [
    {text:'你在<span class="fac">坐忘道</span>中晋升后，<span class="npc">骰子</span>亲自找到你，要你完成一个<span class="danger-text">"有趣"</span>的任务——去一个村子里散布谎言。',
      rankReq:3,choices:[
      {text:'执行任务',effect:{connections:-10,qiyun:-15,karma:-15,cultivation:15},log:'整个村子陷入了混乱和猜疑——而骰子在远处大笑'},
      {text:'暗中破坏任务',effect:{connections:-5,qiyun:5,karma:10},log:'你没有完成任务，但骰子似乎并不在意'},
      {text:'问骰子目的',effect:{comprehension:10,sanity:-10},log:'骰子只说了一句："好玩就够了。"'}]},
    {text:'你在坐忘道的位阶提升后，掌教亲手将一枚<span class="itm">本命麻将牌</span>贴在你脸上——你感到面皮一阵灼热，牌面逐渐与你的面容融为一体。"<span class="mys">从今往后，这就是你的脸。</span>"',
      rankReq:2,choices:[
      {text:'欣然接受',effect:{cultivation:15,connections:10,sanity:-10},log:'你的面容开始变化——镜中看到的不再是自己，而是一张麻将牌面',item:'ben_ming_pai'},
      {text:'强忍不适',effect:{cultivation:10,sanity:-5},log:'你勉强适应了面皮融合的过程',item:'ben_ming_pai'}]},
    {text:'坐忘道的<span class="npc">红中</span>召集核心成员，要传授<span class="mys">罔天宝诰</span>——据说诵此咒可接引<span class="npc">斗姥</span>化身下凡。',
      rankReq:5,choices:[
      {text:'学习罔天宝诰',effect:{cultivation:35,sanity:-25,comprehension:15,qiyun:-15},log:'你感受到了阴阳斗姥那令人窒息的谎言之力...'},
      {text:'觉得太危险',effect:{connections:-15,sanity:10},log:'你退出了这次传法，引来了同门的质疑'}]},
    {text:'你发现了坐忘道的<span class="mys">终极秘密</span>：所有成员都是被骰子骗进来的，"坐忘"不过是斗姥为了寻找<span class="mys">心蟠</span>的手段。',
      rankReq:7,choices:[
      {text:'接受真相继续修行',effect:{cultivation:25,comprehension:20,sanity:-15},log:'知道了又如何？这条路已经走了太远'},
      {text:'脱离坐忘道',effect:{faction:'none',connections:-25,qiyun:10,sanity:10},log:'你毅然脱离了坐忘道，成为了散修'}]},
    {text:'<span class="npc">阴阳斗姥</span>终于选中了你——你就是她在人间的<span class="mys">因缘</span>，她的<span class="mys">心蟠</span>。斗姥的谎言之力灌入你体内，你能感知一切虚假。',
      rankReq:9,noFlag:'has_xinpan',choices:[
      {text:'接受斗姥的因缘',effect:{cultivation:40,comprehension:25,sanity:-30,connections:15,karma:-10},log:'你成为了斗姥的心蟠，可以使用真假天道之力——但你的自我在逐渐模糊',xinpan:'doumo',setFlag:'has_xinpan'},
      {text:'以己身抗衡斗姥意志',effect:{cultivation:25,sanity:-15,comprehension:15,karma:10},log:'你接受了心蟠之身，但拼命保住了自己的意志。斗姥似乎对此很"有趣"',xinpan:'doumo',setFlag:'has_xinpan'}]},
  ],
  jiantian: [
    {text:'你晋升<span class="fac">监天司</span>庚旗后，获得了查阅<span class="itm">机密档案</span>的权限——里面记载着各地邪祟和坐忘道的情报。',
      rankReq:3,choices:[
      {text:'仔细研读',effect:{comprehension:15,cultivation:10,sanity:-10},log:'你对这个世界的黑暗面有了更深的了解'},
      {text:'只看自己需要的',effect:{comprehension:5,connections:5},log:'知道得太多不一定是好事'}]},
    {text:'你在<span class="fac">监天司</span>中通过了正式编制考核，上司将一块<span class="itm">铁牌腰牌</span>交到你手中。"从今日起，你是监天司的正式差役。大梁之内，你有权调查一切异事。"',
      rankReq:1,choices:[
      {text:'郑重接过腰牌',effect:{connections:10,qiyun:5},log:'铁牌沉甸甸的，上面刻着你的编号。你终于是监天司的人了',item:'jts_tie_pai'},
      {text:'请教前辈经验',effect:{connections:8,comprehension:5},log:'前辈拍了拍你的肩："小心坐忘道的人，他们什么脸都能变。"',item:'jts_tie_pai'}]},
    {text:'作为<span class="fac">监天司</span>己监丞，你被委以<span class="danger-text">剿灭</span>一个邪教据点的重任。',
      rankReq:4,choices:[
      {text:'亲自领队出击',effect:{cultivation:15,connections:15,constitution:-5,karma:5},log:'你成功铲除了邪教据点，声望大增',combat:65},
      {text:'请求增援后行动',effect:{connections:10,cultivation:5},log:'稳妥地完成了任务，上司点了点头'}]},
    {text:'<span class="fac">监天司</span>内部出现叛徒——有人暗通<span class="fac">坐忘道</span>，出卖了多名探员的身份。',
      rankReq:6,choices:[
      {text:'亲自追查叛徒',effect:{cultivation:10,connections:-5,sanity:-10,comprehension:8},log:'你揪出了叛徒，但发现他被坐忘道洗脑多年...'},
      {text:'加强自身防护',effect:{constitution:5,sanity:5},log:'你开始更加谨慎地行事'}]},
    {text:'你被提拔为<span class="fac">监天司</span>司天少监，获准进入<span class="loc">上京城</span>地下的<span class="mys">龙脉核心</span>。在那里，你触碰到了<span class="npc">蟠螭</span>的意识——秩序天道的司命，以龙脉为躯体镇守大梁国运。蟠螭选中了你作为它在人间的<span class="mys">因缘</span>。',
      rankReq:8,noFlag:'has_xinpan',choices:[
      {text:'接受蟠螭的因缘，成为秩序天道的心蟠',effect:{cultivation:40,qiyun:20,constitution:10,comprehension:15,sanity:-15},log:'你成为了蟠螭的心蟠！秩序天道之力流入血脉——你能感知天下龙脉走向，一切混乱在你面前无所遁形。你的存在本身就是大梁的镇国之柱',xinpan:'panchi',setFlag:'has_xinpan'},
      {text:'敬畏地婉拒',effect:{cultivation:20,qiyun:10,comprehension:10},log:'蟠螭的龙吟在你耳边回荡。它没有强求——秩序从不强迫，只是等待'},
      {text:'接受力量但保持独立',effect:{cultivation:30,qiyun:15,constitution:5,sanity:-8},log:'你接受了蟠螭的部分力量，但没有完全交出自己。秩序天道在你体内与你的意志共存',xinpan:'panchi',setFlag:'has_xinpan'}]},
  ],
  aojing: [
    {text:'你在<span class="fac">袄景教</span>中地位渐高，获准修习<span class="itm">大千录</span>上的高级神通——以献祭自身痛苦来施展强大法术。',
      rankReq:2,choices:[
      {text:'修习献祭之法',effect:{cultivation:25,constitution:-8,sanity:-15,comprehension:10},log:'你学会了以指骨为飞刀、以皮肉为牢笼的可怕神通'},
      {text:'只学基础法术',effect:{cultivation:10,constitution:-3},log:'你只修习了低阶的献祭术'}]},
    {text:'你完成了第一次<span class="danger-text">正式登阶</span>，教中长老将一片<span class="itm">苍蜣登阶誓约竹片</span>刻上你的名字——"从此你不再是信众，而是<span class="fac">袄景教</span>的真正门徒。痛苦即力量。"',
      rankReq:1,choices:[
      {text:'郑重接受',effect:{cultivation:15,sanity:-10,constitution:-3},log:'竹片入手的瞬间，你感到巴虺的目光落在了你身上',item:'cq_deng_jie'},
      {text:'以痛苦宣誓效忠',effect:{cultivation:20,sanity:-15,constitution:-8},log:'你在竹片上刺出自己的鲜血。长老们赞许地点头',item:'cq_deng_jie'}]},
    {text:'教中传来消息：<span class="npc">牯神</span>即将苏醒，它是与<span class="npc">巴虺</span>平等的圣人，能自由召唤巴虺。教中要选出新一任<span class="npc">牯神使</span>。',
      rankReq:3,choices:[
      {text:'争夺牯神使之位',effect:{cultivation:30,connections:15,sanity:-20,qiyun:-10},log:'你在竞争中脱颖而出，获得了与巴虺沟通的资格'},
      {text:'甘当辅佐',effect:{connections:10,cultivation:10},log:'你选择辅佐新任牯神使，在教中依然受人尊重'}]},
    {text:'你完成了三次<span class="danger-text">登阶</span>，<span class="npc">巴虺</span>终于注意到了你。它选中你作为自己在人间的<span class="mys">因缘</span>——你成为了巴虺的<span class="mys">心蟠</span>。痛苦天道之力贯穿全身。',
      rankReq:4,noFlag:'has_xinpan',choices:[
      {text:'承受痛苦接受心蟠之身',effect:{cultivation:45,constitution:15,sanity:-25,karma:-15},log:'你成为了巴虺的心蟠！痛苦即是力量——你可以使用痛苦天道之术，自愈能力大幅增强',xinpan:'baxi',setFlag:'has_xinpan'},
      {text:'在痛苦中保留人性',effect:{cultivation:30,constitution:10,sanity:-10,karma:5},log:'你成为了心蟠，但没有完全被痛苦吞噬。巴虺对你的选择既不满也不在意',xinpan:'baxi',setFlag:'has_xinpan'}]},
  ],
  bailian: [
    {text:'作为<span class="fac">白莲教</span>坛主，你获悉圣母<span class="npc">无生老母</span>的真实面目——她是掌管<span class="mys">慈悲·生长·死亡</span>的司命。二神亲手将一卷<span class="itm">无生宝诰</span>交到你手中。',
      rankReq:1,choices:[
      {text:'更加虔诚信仰',effect:{cultivation:20,comprehension:10,qiyun:10},log:'理解了无生老母的本质后，你的信仰更加坚定',item:'wusheng_bao_gao'},
      {text:'产生动摇',effect:{comprehension:15,sanity:-10,connections:-5},log:'司命...这已经超出了你对"教"的理解',item:'wusheng_bao_gao'}]},
    {text:'<span class="fac">白莲教</span>二神传你<span class="itm">红莲业火</span>的高阶用法——可以烧灼因果、净化业障。你掌八苦十情，主持教中大小仪式。',
      rankReq:2,choices:[
      {text:'全力修习',effect:{cultivation:25,karma:15,sanity:-10,constitution:-5},log:'红莲业火在你体内燃烧，你感到过去的罪孽在被洗涤'},
      {text:'谨慎修习',effect:{cultivation:10,karma:5},log:'你只取其精华，不至于伤了根基'}]},
    {text:'<span class="npc">无生老母</span>在虚空中降下慈悲之光，选中了你作为她在人间的<span class="mys">因缘</span>——你成为了无生老母的<span class="mys">心蟠</span>。慈悲天道与你相合。',
      rankReq:4,noFlag:'has_xinpan',choices:[
      {text:'接受慈悲天道',effect:{cultivation:35,sanity:20,karma:25,connections:15},log:'你成为了无生老母的心蟠，慈悲之力充盈全身。你能感知众生苦乐，伪装身份、庇护他人',xinpan:'wusheng',setFlag:'has_xinpan'},
      {text:'以自身意志调和',effect:{cultivation:25,sanity:10,karma:15,comprehension:10},log:'你成为了心蟠，但保留了自己的判断——不是无条件的慈悲，而是有所选择',xinpan:'wusheng',setFlag:'has_xinpan'}]},
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
    {text:'你完成了终极的<span class="danger-text">十二次血祭</span>，<span class="npc">于儿神</span>的目光终于落在了你身上——那是一种超越一切理解的存在，它没有善恶，只有<span class="mys">法则</span>。于儿选中你作为它在人间的<span class="mys">因缘</span>——成为于儿神的心蟠。',
      rankReq:4,noFlag:'has_xinpan',choices:[
      {text:'接受于儿神的因缘',effect:{cultivation:50,constitution:10,sanity:-30,karma:-20,qiyun:-15},log:'你成为了于儿神的心蟠！一种超越善恶的力量涌入体内——你不再是人，也不再是鬼，你是于儿在人间的法则执行者。十二大巫跪伏在你面前',xinpan:'yuer',setFlag:'has_xinpan'},
      {text:'在法则中保留人性',effect:{cultivation:35,constitution:5,sanity:-15,karma:-10},log:'你接受了于儿的力量，但拼命守住了作为人的记忆和感情。于儿对此无动于衷——它只关心法则的执行',xinpan:'yuer',setFlag:'has_xinpan'},
      {text:'恐惧地拒绝',effect:{cultivation:15,sanity:-20,karma:10},log:'于儿的目光从你身上移开。你瘫倒在地——仅仅是被它注视这一刻，你的三魂七魄就险些崩溃'}]},
  ],
  luo_jiao: [
    {text:'你晋升为<span class="fac">罗教</span>执事，长老将一枚<span class="itm">罗盘</span>郑重交到你手中——此乃罗教传人寻龙点穴的至宝。',
      rankReq:1,choices:[
      {text:'恭敬接受',effect:{comprehension:15,cultivation:10,qiyun:5},log:'罗盘入手的一刻，你感到天地间的气脉在罗盘上清晰浮现',item:'luo_pan'},
      {text:'请求更多指导',effect:{comprehension:10,cultivation:5,connections:10},log:'长老额外传你一套入门阵法'}]},
    {text:'你被选为<span class="fac">罗教</span>长老，获准修习<span class="itm">七星铜钱剑</span>的阵法精髓——以一百八十四枚铜钱布成<span class="mys">七星阵</span>，可困天锁地。',
      rankReq:2,choices:[
      {text:'全力修习七星阵',effect:{cultivation:25,comprehension:20,sanity:-8},log:'你初步掌握了七星阵法，铜钱剑在你手中已能化阵驱邪'},
      {text:'同时研究其他阵法',effect:{cultivation:15,comprehension:15,connections:-5},log:'你博采众长，将七星阵与其他阵法融会贯通'}]},
    {text:'罗教上下共推你为<span class="fac">掌教</span>！你获准进入<span class="loc">罗祖秘境</span>——那里藏着罗教开宗立派的全部秘密。',
      rankReq:3,choices:[
      {text:'踏入罗祖秘境',effect:{cultivation:40,comprehension:25,sanity:-15,qiyun:10},log:'秘境中，罗祖的残影向你展示了铜钱剑的终极形态——不仅可驱邪，更可化天地为阵！'},
      {text:'先稳固教务再入秘境',effect:{connections:20,cultivation:15,comprehension:10},log:'你先理清教务、安抚人心，待一切稳定后从容入秘境'}]},
  ],
  nanjiang: [
    {text:'你完成了<span class="fac">南疆巫族</span>的<span class="mys">蛊虫结契仪式</span>——一只幼蛊钻入你的血肉与你融为一体。从此你是蛊师。',
      rankReq:1,choices:[
      {text:'欣然接受',effect:{cultivation:15,constitution:-5,sanity:-8,comprehension:5},log:'蛊虫在你体内安顿下来，你能感知它的饥饿与躁动'},
      {text:'以意志驯化蛊虫',effect:{cultivation:10,constitution:3,comprehension:10},log:'你以精神力驯化了蛊虫，它对你更加恭顺',req:{comprehension:20}}]},
    {text:'<span class="fac">南疆巫族</span>的晋级考验——你必须只身进入<span class="loc">毒沼深处</span>，在万毒之中存活三日三夜，方可成为<span class="danger-text">大蛊师</span>。',
      rankReq:2,choices:[
      {text:'踏入毒沼',effect:{cultivation:30,constitution:-10,sanity:-15,comprehension:10},log:'三日三夜，你在毒沼中与各种毒物搏命。出来时你已脱胎换骨！',req:{constitution:25}},
      {text:'做好万全准备再去',effect:{cultivation:20,constitution:-5,sanity:-8,wealth:-15},log:'你携带了大量解毒之物，虽然安全了些，但长老们对你的勇气有些失望'}]},
    {text:'成为<span class="fac">巫王</span>的最终考验——<span class="danger-text">万蛊噬体</span>！你必须让上万只蛊虫同时钻入体内，以意志统御万蛊。成则为王，败则化为蛊粮。',
      rankReq:3,choices:[
      {text:'接受万蛊噬体',effect:{cultivation:50,constitution:-15,sanity:-25,comprehension:15},log:'万蛊入体的那一刻痛苦无比——但你的意志如铁，统御了所有蛊虫！你是新的巫王！',req:{constitution:30}},
      {text:'以蛊术另辟蹊径',effect:{cultivation:35,comprehension:20,sanity:-15,connections:-10},log:'你创造了一种新的蛊术，以巧代力统御了万蛊。虽然被老派人非议，但结果无人能反驳'}]},
  ],
  bingjia: [
    {text:'你在<span class="fac">兵家</span>中以<span class="danger-text">血誓</span>涂抹兵书，正式成为伍长。兵书上出现了新的一页——记载着<span class="mys">煞气冲击</span>的修炼之法。',
      rankReq:1,choices:[
      {text:'以鲜血发誓效忠',effect:{cultivation:20,constitution:-8,sanity:-10,karma:-5},log:'你割破手掌涂满兵书，煞气灌入全身——你感到力量暴增！'},
      {text:'只割一指',effect:{cultivation:12,constitution:-3,sanity:-5},log:'你只献出少量鲜血，兵书上的字迹若隐若现'}]},
    {text:'<span class="fac">兵家</span>上级命你率领一支<span class="danger-text">血卒</span>小队执行任务——所有人都是以血修炼的战士，杀意冲天。',
      rankReq:2,choices:[
      {text:'率队出征',effect:{cultivation:25,connections:15,constitution:-5,karma:-10,qiyun:-5},log:'你率领血卒横扫敌阵，煞气弥漫战场！敌人闻风丧胆',combat:85},
      {text:'以谋略代替蛮力',effect:{cultivation:15,comprehension:10,connections:10},log:'你以兵法运筹帷幄，减少了不必要的伤亡'}]},
    {text:'<span class="fac">兵家</span>至高传承——<span class="danger-text">兵书融合</span>！你需要将兵书彻底融入肉身，从此血肉即兵书、兵书即血肉。但失败者将永远失去人性。',
      rankReq:3,choices:[
      {text:'与兵书融合',effect:{cultivation:50,constitution:15,sanity:-30,karma:-15,qiyun:-10},log:'你将兵书按在胸口，文字如活物般钻入皮肤！剧痛之后，你感到自己的血液中流淌着兵法——血肉不灭，则你不死！',item:'bing_shu'},
      {text:'拒绝融合保留人性',effect:{cultivation:20,comprehension:15,sanity:10},log:'你选择了人性而非极致的力量。兵家前辈摇头叹息，但你问心无愧'}]},
  ],
  fomen: [
    {text:'你剃度受戒成为<span class="fac">佛门</span>比丘，住持将一颗<span class="itm">金刚珠</span>赐予你——此珠蕴含<span class="mys">金刚不坏</span>之力的种子。',
      rankReq:1,choices:[
      {text:'双手接过金刚珠',effect:{cultivation:15,constitution:10,sanity:8},log:'金刚珠入手温润，你感到一股祥和之力涌入体内',item:'jin_gang_zhu'},
      {text:'请住持开示',effect:{cultivation:10,comprehension:10,connections:5},log:'住持说："珠在手中不如珠在心中。"你若有所悟'}]},
    {text:'你在寺中地位渐高，无意间发现了正德寺的<span class="danger-text">黑暗秘密</span>——地窖中存放着数十具被抽取精气的尸体，皆是无人认领的流浪者。',
      rankReq:2,choices:[
      {text:'向外界揭露',effect:{connections:15,karma:15,cultivation:-5,qiyun:5},log:'你将真相公之于众，正德寺名声扫地，但佛法长存'},
      {text:'在寺内发起清洗',effect:{connections:-10,karma:10,cultivation:10,sanity:-10},log:'你联合正义僧侣清除了寺中败类'},
      {text:'暂时隐忍',effect:{comprehension:8,sanity:-15},log:'你将秘密藏在心中，等待更好的时机'}]},
    {text:'你即将成为<span class="fac">正德寺</span>方丈——但接任仪式上，你必须面对<span class="mys">佛门至高心法</span>的考验：直面自己的一切执念，放下或被吞噬。',
      rankReq:4,choices:[
      {text:'直面执念',effect:{cultivation:40,sanity:15,comprehension:20,connections:-5},log:'你在心法考验中看到了自己的一切——善与恶、爱与恨、生与死。你放下了大部分执念，成为了新的方丈'},
      {text:'以慈悲心化解',effect:{cultivation:30,karma:15,sanity:10,comprehension:10},log:'你以慈悲之心包容了所有执念，走出了一条属于自己的佛道'}]},
  ],
  qingfeng: [
    {text:'<span class="npc">丹阳子</span>开始亲自教你炼丹之法——他虽不识字，却对药理有一种近乎疯狂的直觉。你被指派协助准备<span class="danger-text">药引</span>。',
      rankReq:1,choices:[
      {text:'用心学习',effect:{cultivation:20,comprehension:15,sanity:-10,karma:-10},log:'你看到了丹阳子炼丹的全过程——那些药引...都是活人。但丹药的确有不可思议的效力'},
      {text:'暗中抵触',effect:{comprehension:10,sanity:-5,karma:5},log:'你学到了一些基础药理，但回避了最残忍的部分'}]},
    {text:'<span class="npc">丹阳子</span>说要传你观主之位——但条件是你必须亲手炼制一炉<span class="danger-text">天人丹</span>。你知道这炉丹的代价是什么。',
      rankReq:2,choices:[
      {text:'遵从师命',effect:{cultivation:40,comprehension:20,sanity:-25,karma:-30},log:'你成为了新的清风观观主。丹阳子大笑着消失在山雾中——你不知道他去了哪里，但黑太岁留给了你'},
      {text:'拒绝并离开',effect:{faction:'none',cultivation:15,karma:15,sanity:10},log:'你叛出了清风观。丹阳子没有追你——他只是摇了摇头，像是对一个不争气的孩子感到遗憾'}]},
  ],
  guoshi: [
    {text:'你以<span class="fac">皇室供奉</span>身份处理了一桩震动朝野的邪祟事件。<span class="npc">皇甫天罡</span>国师亲自召见你，传授你引雷术的入门口诀。',
      rankReq:1,choices:[
      {text:'潜心修习引雷术',effect:{cultivation:25,comprehension:15,connections:10},log:'引雷术奥妙无穷，你隐约感应到了龙脉的脉动'},
      {text:'请教龙脉之事',effect:{comprehension:20,connections:15,sanity:-5},log:'皇甫天罡沉默良久，只说了一句：龙脉非人可触，触之必有代价'}]},
    {text:'<span class="npc">皇甫天罡</span>年事已高，要将<span class="fac">国师</span>之位传于你。接任仪式需在<span class="loc">上京城</span>太庙举行，沟通龙脉、受天子敕封。',
      rankReq:2,choices:[
      {text:'接任国师',effect:{cultivation:45,connections:25,wealth:30,qiyun:15,sanity:-15},log:'你在太庙中沟通龙脉——历代帝王的龙气贯入体内，你成为了大梁新的国师。从此国运与你息息相关'},
      {text:'请辞推让',effect:{connections:15,comprehension:10,karma:5},log:'你自觉修为不足，请辞国师之位。皇甫天罡虽然失望，但对你的自知之明表示赞赏'}]},
  ],
  chaoting: [
    {text:'你在任上政绩斐然，朝廷擢升你为一方<span class="fac">县令</span>。地方百姓的生死祸福，皆系于你一念之间。',
      rankReq:1,choices:[
      {text:'廉洁奉公',effect:{karma:15,connections:10,wealth:-10,qiyun:5},log:'你治下清平，百姓称颂'},
      {text:'上下打点',effect:{wealth:20,connections:15,karma:-10},log:'你很快学会了官场的规矩'}]},
    {text:'边境告急，朝廷命你出任<span class="fac">刺史</span>，统御数郡军政大权。你的治理之才引起了<span class="loc">上京城</span>的注意。',
      rankReq:2,choices:[
      {text:'整军备战',effect:{constitution:10,connections:15,cultivation:10,karma:5},log:'你在任上整顿军备、安抚民心，边境渐安'},
      {text:'以和为贵',effect:{connections:20,wealth:15,karma:10},log:'你主张以通商代替征战，边民感恩戴德'}]},
    {text:'皇帝<span class="npc">姬诵</span>召你入<span class="loc">上京城</span>，拜为<span class="fac">中枢重臣</span>。你踏入了大梁权力的核心——龙脉就在脚下，历代帝王的尸骨拼接成的龙躯守护着这个国家。',
      rankReq:3,choices:[
      {text:'尽忠朝廷',effect:{connections:25,wealth:25,qiyun:10,karma:10},log:'你成为姬诵最信任的大臣，参与国之大计'},
      {text:'暗中布局',effect:{connections:20,wealth:30,karma:-15,qiyun:5},log:'你在朝堂中结党营私，渐渐掌控了大量权力'}]},
  ],
};

// === CONSTITUTION EVENTS (triggered by constitution thresholds) ===
export const CONSTITUTION_EVENTS = [
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
export const COMPREHENSION_EVENTS = [
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
export const WEALTH_EVENTS = [
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
  // Medium wealth events
  {text:'你有了些积蓄，<span class="npc">药铺掌柜</span>推荐一剂<span class="itm">培元丹</span>，说能固本培元。',
    wealthReq:{min:40},trigger:{minAge:14},choices:[
    {text:'买来服用',effect:{wealth:-25,constitution:8,cultivation:5},log:'丹药入腹，浑身暖洋洋的，精气神大增'},
    {text:'太贵了不买',effect:{},log:'银子还是攥在手里踏实'}]},
  {text:'镇上开了一家<span class="npc">武馆</span>，入门学艺需要一笔<span class="itm">束脩</span>。',
    wealthReq:{min:30},trigger:{minAge:10,maxAge:25},choices:[
    {text:'交钱拜师',effect:{wealth:-20,cultivation:10,constitution:5,comprehension:3},log:'你在武馆学了三个月，打下了扎实的根基'},
    {text:'在外面偷看',effect:{cultivation:3,comprehension:2},log:'偷学了几招花架子，聊胜于无'},
    {text:'不感兴趣',effect:{},log:'舞刀弄枪的，有什么用'}]},
  {text:'你听说远方有一处<span class="loc">秘境</span>即将开启，但路途遥远需要盘缠。',
    wealthReq:{min:50},trigger:{minAge:18},choices:[
    {text:'筹集盘缠出发',effect:{wealth:-40,cultivation:20,comprehension:8,qiyun:5},log:'秘境中机缘不断，你满载而归'},
    {text:'没钱去不了',effect:{qiyun:-3},log:'错失良机，你暗暗叹息'}]},
  {text:'一位<span class="npc">落魄修士</span>在街头低价出售一本<span class="itm">功法残卷</span>。',
    wealthReq:{min:20},trigger:{minAge:12},choices:[
    {text:'买下来研究',effect:{wealth:-15,comprehension:8,cultivation:5},log:'残卷中记载的功法虽不完整，但让你茅塞顿开'},
    {text:'他的东西来路不明',effect:{karma:2},log:'谨慎行事总没错'}]},
  {text:'年关将至，你有余钱置办年货，邻里都来你家蹭饭。',
    wealthReq:{min:25},trigger:{minAge:8},choices:[
    {text:'大摆宴席',effect:{wealth:-15,connections:10,karma:5},log:'远亲近邻齐聚一堂，好不热闹'},
    {text:'只请几家亲近的',effect:{wealth:-5,connections:3},log:'人多是非多，小聚就好'}]},
  // Wealth investment/gamble events
  {text:'有人邀你合伙做<span class="itm">灵药生意</span>，说利润翻倍。',
    wealthReq:{min:50},trigger:{minAge:20},choices:[
    {text:'投资入股',effect:{wealth:40,connections:8},log:'生意兴隆，你赚了一笔',req:{connections:10}},
    {text:'小额试水',effect:{wealth:10,connections:3},log:'你只投了一小部分，赚了点小钱'},
    {text:'不参与',effect:{},log:'你不想冒这个险'}]},
  {text:'一场<span class="danger-text">大旱</span>袭来，粮价飞涨。你有余钱可以囤粮。',
    wealthReq:{min:30},trigger:{minAge:15},choices:[
    {text:'囤粮高价卖出',effect:{wealth:25,karma:-10},log:'你发了一笔灾难财，但良心有些不安'},
    {text:'平价卖给乡亲',effect:{wealth:-10,karma:15,connections:15},log:'乡亲们感激涕零，你的名声传遍了十里八村'},
    {text:'只管自己',effect:{wealth:-5},log:'管好自己就行了'}]},
  // Deep poverty events
  {text:'你穷得连草鞋都穿不起，<span class="danger-text">赤脚</span>走在碎石路上，脚底磨出了血泡。',
    wealthReq:{max:-30},trigger:{minAge:8},choices:[
    {text:'咬牙继续走',effect:{constitution:-3,comprehension:3,cultivation:2},log:'痛苦使人坚韧，你的意志更加坚定'},
    {text:'在路边歇一歇',effect:{constitution:-1},log:'你蹲在路边，看着来来往往的行人'}]},
  {text:'你太穷了，有人说<span class="fac">袄景教</span>给信众发放<span class="itm">救济粮</span>——只要你愿意受"苍蜣之礼"。',
    wealthReq:{max:-15},trigger:{minAge:14},choices:[
    {text:'忍痛加入',effect:{wealth:15,constitution:-5,sanity:-8},log:'苍蜣之礼痛入骨髓——你的左臂上多了一道诡异的疤痕',factionJoin:'aojing'},
    {text:'宁死不从',effect:{constitution:-3},log:'你饿得眼冒金星，但还是拒绝了'}]},
  {text:'你穷困潦倒，连客栈都住不起——只能在<span class="loc">破庙</span>里过夜。半夜庙里传来怪声。',
    wealthReq:{max:-10},trigger:{minAge:12},choices:[
    {text:'壮着胆子查看',effect:{cultivation:5,sanity:-8,comprehension:5},log:'你在神像后面发现了一具干尸和一本泛黄的手札'},
    {text:'连夜逃跑',effect:{constitution:-2,sanity:-3},log:'你跑了一夜，天亮后才敢停下来'},
    {text:'念经壮胆继续睡',effect:{karma:3,sanity:-3},log:'一夜无事，也许是你多想了'}]},
  // Wealth affects cultivation
  {text:'修炼到了关键时刻，你需要购买一批<span class="itm">灵石</span>来布阵辅助突破。',
    wealthReq:{min:40},trigger:{minAge:16,cultivation:20},choices:[
    {text:'买灵石布阵',effect:{wealth:-30,cultivation:15,comprehension:5},log:'灵石阵法催动之下，修为突飞猛进'},
    {text:'靠自己硬突破',effect:{cultivation:5,constitution:-5,sanity:-5},log:'没有辅助材料，突破的过程格外凶险'}]},
  // Wealth + connections interaction
  {text:'你在<span class="loc">酒楼</span>请人吃饭，席间有人提到一桩<span class="itm">机缘</span>。',
    wealthReq:{min:20},trigger:{minAge:16},choices:[
    {text:'继续请客打探',effect:{wealth:-15,connections:8,qiyun:5,comprehension:3},log:'酒过三巡，对方把机缘的位置告诉了你'},
    {text:'记在心里',effect:{connections:3},log:'这个消息也许以后用得上'}]},
];

// === CONNECTIONS EVENTS (triggered by connections thresholds) ===
export const CONNECTIONS_EVENTS = [
  // High connections events
  {text:'你在江湖中颇有人脉，有人请你做<span class="npc">各门派之间的调解人</span>。',
    connReq:{min:40},trigger:{minAge:25},choices:[
    {text:'出面调解',effect:{connections:15,qiyun:10,karma:10,wealth:20},log:'在你的斡旋下，两派握手言和'},
    {text:'两不相帮',effect:{connections:-5},log:'你不想卷入门派纷争'}]},
  {text:'你的名声传到了<span class="fac">监天司</span>耳中，他们派人来<span class="npc">招揽你</span>。',
    connReq:{min:30},trigger:{minAge:18},choices:[
    {text:'加入监天司',effect:{connections:15,wealth:15},log:'你凭借人脉进入了监天司，获发<span class="itm">制式法剑</span>',factionJoin:'jiantian',item:'jts_fa_jian'},
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
  // Medium connections
  {text:'你的人缘不错，有人想把女儿/儿子<span class="npc">许配</span>给你。',
    connReq:{min:20},trigger:{minAge:18},choices:[
    {text:'欣然接受',effect:{connections:10,karma:5,wealth:10},log:'你成了家，多了份牵挂也多了份温暖',setFlag:'married'},
    {text:'婉言谢绝',effect:{connections:-5},log:'你心中另有打算'}],noFlag:'married'},
  {text:'你认识的一个<span class="npc">商人</span>遇到了麻烦，请你帮忙说情。',
    connReq:{min:15},trigger:{minAge:16},choices:[
    {text:'帮他说情',effect:{connections:8,wealth:15,karma:3},log:'事情解决后，商人重谢了你'},
    {text:'不想掺和',effect:{connections:-3},log:'你不想卷入是非'}]},
  {text:'凭借你的人脉，有人介绍你去<span class="fac">世俗朝廷</span>谋个差事。',
    connReq:{min:25},trigger:{minAge:20},choices:[
    {text:'去当差',effect:{wealth:20,connections:10},log:'你凭着关系在衙门里谋了个不错的位置',factionJoin:'chaoting'},
    {text:'不想当官',effect:{comprehension:3},log:'庙堂之高不如江湖之远'}]},
  {text:'你在人群中偶然听到有人在议论一个<span class="itm">藏宝地</span>的位置。',
    connReq:{min:10},trigger:{minAge:14},choices:[
    {text:'找人搭伙去寻宝',effect:{wealth:20,cultivation:5,connections:5},log:'你和几个朋友找到了一些值钱的东西',req:{wealth:10}},
    {text:'独自去找',effect:{wealth:10,constitution:-3},log:'你找到了一些东西，但路上受了点伤'},
    {text:'当没听到',effect:{},log:'天上不会掉馅饼'}]},
  // Very low connections
  {text:'你被诬陷偷了东西，由于<span class="danger-text">无人作证</span>，你百口莫辩。',
    connReq:{max:-5},trigger:{minAge:12},choices:[
    {text:'据理力争',effect:{connections:-5,karma:3,constitution:-3},log:'没人帮你说话，你被打了一顿赶了出来'},
    {text:'默默承受',effect:{sanity:-5,comprehension:3},log:'有苦说不出，这就是孤身一人的代价'},
    {text:'以武力反抗',effect:{cultivation:5,karma:-5,connections:-5},log:'你打了对方，虽然出了气，但名声更差了',combat:20}]},
  {text:'你想加入一个修炼团体，但因为<span class="danger-text">无人推荐</span>被拒之门外。',
    connReq:{max:5},trigger:{minAge:15,cultivation:5},choices:[
    {text:'再三恳求',effect:{connections:5,sanity:-3},log:'管事的勉强让你旁听了几次'},
    {text:'自己修炼',effect:{cultivation:5,comprehension:5},log:'没有团体也一样能修炼——你暗暗发誓要超过他们'}]},
  {text:'你结交了一位<span class="npc">江湖游医</span>，他愿意免费给你治伤。',
    connReq:{min:15},trigger:{minAge:14},choices:[
    {text:'接受治疗',effect:{constitution:8,connections:5},log:'游医妙手回春，你的旧伤终于好了'},
    {text:'顺便学几手医术',effect:{comprehension:5,constitution:5,connections:3},log:'你跟着游医学了一些简单的医术'}]},
];

// === CULTIVATION BREAKTHROUGH EVENTS (triggered during realm transitions) ===
export const BREAKTHROUGH_EVENTS = [
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
export const STAT_COMBO_EVENTS = [
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
  // Low sanity + high cultivation (xin_zhuo) = 遗忘失控
  {text:'你的修为越来越高，但遗忘也越来越严重——你已经忘记了<span class="danger-text">自己为什么修炼</span>。心浊的业障在吞噬你的一切目的和意义。',
    comboReq:{sanity_max:25,cult_min:60},trigger:{minAge:25},check:'xin_zhuo',choices:[
    {text:'把修炼的目的刻在骨头上',effect:{cultivation:30,constitution:-10,sanity:-15,comprehension:20},log:'你用法力在自己的骨骼上刻下了六个字。每次遗忘时骨骼会疼痛提醒你——但那六个字是什么，你已经记不清了'},
    {text:'放弃抵抗，随遗忘而去',effect:{cultivation:45,sanity:-30,comprehension:25},log:'你不再抵抗——当遗忘褪去一切后，剩下的就是纯粹的力量。你成了一个没有过去的存在，但你的空间之力强到足以撕裂现实'}]},
  // High karma + bai_hua = 慈悲共鸣
  {text:'你的白化之体与因果善业产生了<span class="mys">共鸣</span>——你的白发开始自行发光，能治愈身边人的伤痛。百姓跪地称你为"<span class="itm">活菩萨</span>"。',
    comboReq:{karma_min:30},trigger:{minAge:20},check:'bai_hua',choices:[
    {text:'以慈悲之力渡人',effect:{cultivation:25,karma:20,connections:20,constitution:-5},log:'你用自己的生命力治愈他人——白莲教说这就是无生老母的力量在你体内觉醒'},
    {text:'隐藏这种能力',effect:{sanity:-10,comprehension:10},log:'你不想成为任何人的圣女或活菩萨——你只想做自己'}]},
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

// === XINPAN EVENTS (心蟠专属事件，成为心蟠后触发) ===
export const XINPAN_EVENTS = [
  // 季灾 (迷惘天道) 专属事件已移除：季灾是主角李火旺专属，玩家不可获得

  // ========== 斗姥 (真假天道) 专属事件 ==========
  {xinpanReq:'doumo',text:'成为<span class="npc">阴阳斗姥</span>的心蟠后，你发现自己说出的每一句话都带着<span class="mys">真假天道</span>的力量——你说"这里很安全"，周围的危险就真的消失了。但谎言说多了，你自己也开始信了。',
    trigger:{minAge:18},choices:[
    {text:'利用谎言之力保护自己',effect:{cultivation:15,sanity:-10,connections:10,karma:-5},log:'你的话语成了武器和盾牌——但你再也说不出一句真话'},
    {text:'尽量保持沉默',effect:{sanity:5,comprehension:10,cultivation:5},log:'你选择沉默。斗姥的力量在沉默中蛰伏，等待着你开口的那一刻'},
    {text:'用谎言编织一个新身份',effect:{cultivation:20,connections:15,karma:-10,sanity:-15},log:'你给自己编造了一个完美的过去——而这个过去，正在变成真实'}]},

  {xinpanReq:'doumo',text:'你在坐忘道的古籍中发现了<span class="npc">斗姥</span>心蟠的真正使命——心蟠要为斗姥<span class="mys">编织足够多的谎言</span>，直到整个世界都分不清真假。这就是斗姥从季灾手中夺取心素之力的方式。',
    trigger:{minAge:25,cultivation:40},choices:[
    {text:'为斗姥编织大谎',effect:{cultivation:30,karma:-20,connections:15,sanity:-15},log:'你编造了一个弥天大谎——有一座城的人相信了，而这座城也因此改变了面貌'},
    {text:'试图用谎言对抗斗姥',effect:{cultivation:15,sanity:-25,karma:5},log:'你对斗姥撒谎说"我不是你的心蟠"——斗姥笑了，这正是她想要的'},
    {text:'记录下所有谎言，保留真相',effect:{comprehension:20,sanity:5,cultivation:10},log:'你将每一个谎言都记录在案，这样至少你自己还知道什么是真的'}]},

  {xinpanReq:'doumo',text:'<span class="npc">斗姥</span>的<span class="mys">木雕八仙</span>出现在你面前——八个栩栩如生的木偶，每一个都有不同的能力。斗姥通过它们传达旨意，要你选择一个作为随身护法。',
    trigger:{minAge:30,cultivation:60},choices:[
    {text:'选择能操纵人心的木偶',effect:{connections:25,cultivation:20,karma:-15,sanity:-10},log:'木偶附在你的影子中，让你能感知并操纵他人的情绪'},
    {text:'选择能窥探真相的木偶',effect:{comprehension:25,cultivation:20,sanity:-15},log:'木偶让你看透一切谎言——包括你自己的。这种认知让你痛苦不堪'},
    {text:'拒绝所有木偶',effect:{cultivation:10,sanity:10,karma:5},log:'你拒绝了木雕八仙。斗姥的力量稍有削弱，但你保住了一丝自我'}]},

  // ========== 巴虺 (痛苦天道) 专属事件 ==========
  {xinpanReq:'baxi',text:'成为<span class="npc">巴虺</span>的心蟠后，痛苦成为了你<span class="mys">修炼的阶梯</span>。袄景教的<span class="danger-text">登阶</span>之法在你体内觉醒——每一次痛苦都化为修为，每一次受伤都让你更强。',
    trigger:{minAge:18},choices:[
    {text:'主动承受痛苦以提升修为',effect:{cultivation:20,constitution:-10,sanity:-10,comprehension:5},log:'你在痛苦中登阶——骨骼断裂重组，经脉撕裂重建，你变得更强了'},
    {text:'学习控制痛苦而非承受',effect:{comprehension:15,cultivation:10,sanity:-5},log:'你试图驾驭痛苦而非被痛苦驾驭。巴虺的力量在你体内缓缓流转'},
    {text:'将痛苦转移给他人',effect:{cultivation:15,karma:-20,connections:-10,sanity:-5},log:'你把自己的痛苦分给了周围的人——他们在哀嚎中倒下，而你感到前所未有的轻松'}]},

  {xinpanReq:'baxi',text:'袄景教的<span class="danger-text">登阶</span>仪式正在你体内自发进行——你的皮肤下有什么东西在蠕动，骨骼在重新排列，器官在移位。巴虺在改造你的<span class="mys">躯壳</span>，让它更适合承载痛苦天道。',
    trigger:{minAge:22,cultivation:30},choices:[
    {text:'忍受改造，完成登阶',effect:{cultivation:30,constitution:15,sanity:-25,comprehension:10},log:'登阶完成！你的身体已经不完全是人类了——但你感受到了前所未有的力量'},
    {text:'用修为对抗改造',effect:{cultivation:-10,constitution:5,sanity:-10},log:'你暂时压制了体内的异变，但巴虺的意志不会就此罢休'},
    {text:'顺从巴虺的意志',effect:{cultivation:35,constitution:20,sanity:-30,karma:-10},log:'你彻底放弃了抵抗——身体在剧痛中蜕变，你已经不记得"不痛"是什么感觉了'}]},

  {xinpanReq:'baxi',text:'你在极度痛苦中触碰到了<span class="npc">巴虺</span>的记忆——巴虺原本也是一个凡人，曾经承受了世间最极致的痛苦，最终<span class="mys">以痛苦为阶登临司命之位</span>。而你，正在重走它的路。',
    trigger:{minAge:30,cultivation:60},choices:[
    {text:'效仿巴虺，以痛证道',effect:{cultivation:40,sanity:-30,constitution:-15,comprehension:20},log:'你理解了痛苦的本质——它不是惩罚，而是通往更高境界的道路'},
    {text:'你不想成为第二个巴虺',effect:{sanity:10,cultivation:10,karma:10},log:'你拒绝了这条路。巴虺的记忆如潮水般退去，但痛苦仍在'},
    {text:'吞噬巴虺的一部分记忆',effect:{cultivation:25,comprehension:15,sanity:-20,constitution:10},log:'你从巴虺的记忆中汲取了一部分力量——但也继承了它的一部分痛苦'}]},

  // ========== 无生老母 (慈悲·死亡天道) 专属事件 ==========
  {xinpanReq:'wusheng',text:'成为<span class="npc">无生老母</span>的心蟠后，你开始能<span class="mys">看见死者的灵魂</span>。白莲教的经文告诉你：无生老母同时掌管慈悲与死亡——慈悲是渡生，死亡是渡亡。',
    trigger:{minAge:18},choices:[
    {text:'学习渡化亡魂',effect:{cultivation:15,karma:15,sanity:-10,comprehension:10},log:'你用无生老母的力量超度亡魂。它们在消散前露出了安详的笑容'},
    {text:'与亡魂交流获取信息',effect:{comprehension:20,connections:10,sanity:-15},log:'亡魂告诉了你许多生前的秘密——但与死者交流太多会模糊生死的界限'},
    {text:'拒绝这份能力',effect:{sanity:5,cultivation:5,karma:5},log:'你不想看见死人。但无生老母的力量不会因为你的拒绝而消失'}]},

  {xinpanReq:'wusheng',text:'白莲教尊你为<span class="itm">圣女</span>——信徒们跪在你面前，祈求你用<span class="npc">无生老母</span>的<span class="mys">慈悲之力</span>治愈他们的病痛。你的手掌散发着温暖的光芒，确实能治愈伤口。但每治愈一人，你自己的寿元就会减少。',
    trigger:{minAge:22,cultivation:30},choices:[
    {text:'不惜寿元救治众人',effect:{karma:25,connections:25,constitution:-15,cultivation:10},log:'你用自己的生命力治愈了数百人。百姓称你为活菩萨'},
    {text:'只治愈少数人以保全自身',effect:{karma:10,connections:10,constitution:-5,cultivation:5},log:'你量力而行。无生老母的力量虽然无限，但你的身体是有限的'},
    {text:'用死亡之力替代慈悲之力',effect:{cultivation:25,karma:-15,sanity:-15,constitution:5},log:'你发现死亡也是一种治愈——让痛苦的人解脱。这条路很危险，但很有效'}]},

  {xinpanReq:'wusheng',text:'<span class="npc">无生老母</span>的意志越来越强烈地在你体内显现——你能感受到方圆百里内<span class="mys">每一个生命的诞生与消亡</span>。有一天，你看到了无生老母的真正面目：一个既是慈母又是死神的巨大存在。',
    trigger:{minAge:30,cultivation:60},choices:[
    {text:'接受慈悲与死亡的双重使命',effect:{cultivation:35,karma:15,sanity:-20,comprehension:20},log:'你理解了——慈悲与死亡是一体两面。生是恩赐，死也是恩赐'},
    {text:'只取慈悲，舍弃死亡',effect:{cultivation:20,karma:20,constitution:-10,sanity:5},log:'你选择只做渡生之人。但死亡天道的力量在你体内蛰伏，终会觉醒'},
    {text:'只取死亡，舍弃慈悲',effect:{cultivation:30,karma:-25,sanity:-25,constitution:10},log:'你选择了更强大的那一面——死亡。白莲教的信徒们恐惧地看着你的转变'}]},

  // ========== 蟠螭 (秩序天道) 专属事件 ==========
  {xinpanReq:'panchi',text:'成为<span class="npc">蟠螭</span>的心蟠后，你能感知到世间万物的<span class="mys">秩序法则</span>——四季轮转、生老病死、因果报应，一切都在蟠螭的掌控之下。监天司的同僚对你敬畏有加。',
    trigger:{minAge:18},choices:[
    {text:'运用秩序之力维护世间平衡',effect:{cultivation:15,qiyun:15,karma:10,comprehension:10},log:'你以秩序之力纠正了一处天地失衡——龙脉归位，风调雨顺'},
    {text:'尝试理解秩序的本质',effect:{comprehension:20,cultivation:10,sanity:-5},log:'你开始理解蟠螭的秩序——它不是善恶，而是"应当如此"'},
    {text:'利用秩序之力为自己谋利',effect:{cultivation:10,wealth:30,qiyun:-10,karma:-10},log:'你偷偷用秩序之力影响了一些事物的走向——但蟠螭对此并不在意，秩序不等于正义'}]},

  {xinpanReq:'panchi',text:'<span class="npc">蟠螭</span>引导你进入了<span class="loc">上京城</span>地下的<span class="mys">龙脉核心</span>——整个大梁的国运都系于此。你能看到无数条金色的丝线从龙脉延伸出去，连接着每一个生灵。蟠螭要你维护这些丝线的秩序。',
    trigger:{minAge:25,cultivation:40},choices:[
    {text:'维护龙脉秩序',effect:{cultivation:25,qiyun:20,karma:10,constitution:5},log:'你日夜守护龙脉，确保国运不绝。大梁因你而安稳了数十年'},
    {text:'改写某些命运丝线',effect:{cultivation:20,karma:-15,qiyun:10,connections:15},log:'你悄悄改写了一些人的命运——有的人因此飞黄腾达，有的人突然暴毙'},
    {text:'从龙脉中汲取力量',effect:{cultivation:35,constitution:10,qiyun:-20,sanity:-10},log:'你从龙脉中抽取了一丝国运用于自身修炼——大梁某处发生了不明灾祸'}]},

  {xinpanReq:'panchi',text:'蟠螭向你展示了<span class="mys">秩序天道</span>的终极形态——不是控制万物，而是<span class="npc">成为秩序本身</span>。当秩序完美运转时，连司命都不需要干预，天道自行运转。',
    trigger:{minAge:35,cultivation:80},choices:[
    {text:'融入秩序，成为天道的一部分',effect:{cultivation:40,qiyun:25,sanity:-20,comprehension:20},log:'你的意识与天地秩序融为一体——你不再是个人，而是法则的化身'},
    {text:'保持自我，只做秩序的守护者',effect:{cultivation:20,sanity:10,qiyun:10,comprehension:10},log:'你拒绝失去自我。蟠螭尊重了你的选择——至少暂时'},
    {text:'质疑秩序的必要性',effect:{comprehension:25,cultivation:15,qiyun:-15,sanity:-10},log:'你问蟠螭：如果秩序本身就是错的呢？蟠螭沉默了很久'}]},

  // ========== 于儿 (法教天道) 专属事件 ==========
  {xinpanReq:'yuer',text:'成为<span class="npc">于儿神</span>的心蟠后，法教的<span class="danger-text">血祭之力</span>在你体内觉醒。你的血液变成了黑色，任何沾上你血液的生物都会陷入狂暴。法教的同道对你既崇拜又恐惧。',
    trigger:{minAge:18},choices:[
    {text:'用血祭之力驱使邪灵',effect:{cultivation:20,karma:-15,sanity:-10,connections:-5},log:'你以自己的黑血召唤了法教的邪灵为己所用——它们嗜血、凶残，但绝对服从'},
    {text:'控制血液的异变',effect:{cultivation:10,constitution:10,sanity:-5,comprehension:10},log:'你学会了控制黑血的流动。至少在平时，你看起来还像个正常人'},
    {text:'用血液标记一切敌人',effect:{cultivation:15,karma:-20,constitution:-5,sanity:-10},log:'你将黑血弹洒在敌人身上——法教的诅咒会追踪他们直到死亡'}]},

  {xinpanReq:'yuer',text:'<span class="npc">于儿神</span>在你梦中显现——祂的形象不断变化，时而是神，时而是兽，时而是一团<span class="danger-text">蠕动的血肉</span>。于儿要你完成更深层的<span class="mys">血祭</span>——用十二种不同生灵的血来铸造一件法器。',
    trigger:{minAge:25,cultivation:40},choices:[
    {text:'完成血祭，铸造法器',effect:{cultivation:30,karma:-25,constitution:10,sanity:-20},log:'十二血祭完成！一件浑身散发血腥气的法器出现在你手中——它在渴望更多的血'},
    {text:'只用邪灵之血代替',effect:{cultivation:20,karma:-10,sanity:-15,comprehension:10},log:'你用邪灵的血代替了活物。法器虽成，但力量减半。于儿似乎并不介意'},
    {text:'违逆于儿的旨意',effect:{cultivation:-5,sanity:-25,constitution:-10,karma:15},log:'你拒绝了血祭。于儿的怒火化为毒咒在你体内发作——这是背叛心蟠之约的代价'}]},

  {xinpanReq:'yuer',text:'你在法教的深层修炼中发现了<span class="npc">于儿神</span>的本质——祂不是传统意义上的"神"，而是由无数<span class="danger-text">血祭</span>和<span class="mys">怨念</span>凝聚而成的集合体。每一个心蟠最终都会被于儿吞噬，成为祂的一部分。',
    trigger:{minAge:30,cultivation:60},choices:[
    {text:'接受被吞噬的命运',effect:{cultivation:45,sanity:-35,karma:-20,constitution:-10},log:'你放弃了抵抗——于儿的力量洪水般涌入你体内。你变得异常强大，但你的意识正在消融'},
    {text:'以于儿之力对抗于儿',effect:{cultivation:30,sanity:-20,comprehension:20,karma:-5},log:'你从于儿体内撕裂出一部分力量为己所用——这条路极其危险，但你赌赢了这一次'},
    {text:'寻找脱离心蟠之约的方法',effect:{comprehension:25,cultivation:10,sanity:-10,karma:10},log:'你找到了一线希望——如果能找到另一个愿意替代你的人，你就能脱离于儿的掌控'}]},

  // ========== 通用心蟠事件（所有心蟠共享） ==========
  {text:'你身为<span class="mys">心蟠</span>的事实被其他修士发现了——有人崇拜你、有人恐惧你、有人想杀你夺取司命的因缘。',
    trigger:{minAge:22},choices:[
    {text:'隐藏心蟠身份',effect:{sanity:-5,comprehension:5,connections:-5},log:'你学会了隐藏心蟠的气息，但时刻保持警惕让你疲惫不堪'},
    {text:'公开心蟠身份以震慑敌人',effect:{connections:15,qiyun:10,cultivation:5,karma:-5},log:'你公开了自己的身份——有人投来敬畏的目光，也有人在暗处磨刀'},
    {text:'寻找其他心蟠结为同盟',effect:{connections:20,comprehension:10,cultivation:10},log:'你找到了另一位心蟠。你们分享了身为司命因缘的孤独与痛苦'}]},

  {text:'一位<span class="npc">修士</span>找到你，声称能用一种<span class="mys">禁术</span>切断你与司命之间的心蟠联系——代价是你将失去大部分修为。',
    trigger:{minAge:25,cultivation:50},choices:[
    {text:'接受禁术，摆脱司命',effect:{cultivation:-60,sanity:30,constitution:10,karma:5,comprehension:10},log:'禁术生效了——心蟠的联系断裂的瞬间，你感到从未有过的轻松。但你的修为也跌落谷底'},
    {text:'拒绝，你已经习惯了这种力量',effect:{cultivation:15,sanity:-10,comprehension:5},log:'你拒绝了。不是因为忠诚，而是因为你已经离不开司命赐予的力量'},
    {text:'反杀这个修士',effect:{cultivation:10,karma:-20,sanity:-10,connections:-10},log:'你怀疑这是个陷阱——你出手了。他临死前说的话让你后悔：他是真心想帮你的'}]},

  {text:'天道之间的<span class="mys">冲突</span>波及到了心蟠——你感受到另一位司命的力量在试探你，它想把你从你的司命手中<span class="danger-text">夺走</span>。',
    trigger:{minAge:28,cultivation:60},choices:[
    {text:'坚守与当前司命的联系',effect:{cultivation:20,sanity:-15,constitution:-5,comprehension:10},log:'你拼命抵抗另一位司命的侵蚀——你的司命感受到了你的忠诚，赐予了你更多力量'},
    {text:'在两位司命之间周旋',effect:{comprehension:20,cultivation:25,sanity:-25,karma:-10},log:'你试图同时获取两位司命的力量——这极其危险，但暂时你做到了'},
    {text:'投向新的司命',effect:{cultivation:30,sanity:-20,karma:-15,qiyun:-10},log:'你背叛了原本的司命——新的天道之力涌入体内，但旧主的诅咒也随之而来'}]},

  {text:'你在修炼中进入了一种<span class="mys">奇异的状态</span>——你看到了所有十六天道如同巨树般矗立在虚空中，而你只是其中一棵树根须上的<span class="itm">种子</span>。心蟠就是种子，司命就是巨树。',
    trigger:{minAge:35,cultivation:80},choices:[
    {text:'尝试生根发芽',effect:{cultivation:45,sanity:-25,comprehension:25,constitution:-10},log:'你的意识开始向着司命的方向生长——你在成为什么东西，但还不是司命'},
    {text:'安于做一颗种子',effect:{cultivation:15,sanity:10,comprehension:10},log:'你接受了自己作为种子的命运。不是每颗种子都要长成大树'},
    {text:'试图窥探其他天道之树',effect:{comprehension:30,cultivation:20,sanity:-30,qiyun:10},log:'你看到了其他十五棵天道之树的形态——每一棵都令人敬畏。这份见识让你的道心更加坚定'}]},

  {text:'你的<span class="mys">心蟠之力</span>在某个夜晚失控了——司命的力量从你体内喷涌而出，方圆十里的生灵都受到了影响。有人因此开悟，有人因此发疯。',
    trigger:{minAge:30,cultivation:70},choices:[
    {text:'全力压制失控的力量',effect:{cultivation:-10,sanity:-15,constitution:-10,karma:10},log:'你拼尽全力才压制住了失控的力量——但你知道，下一次可能压不住了'},
    {text:'顺应失控，让力量自然宣泄',effect:{cultivation:30,sanity:-20,karma:-15,connections:-10},log:'力量宣泄后你变得更强了——但周围的惨状让你良心不安'},
    {text:'将失控的力量导入地脉',effect:{cultivation:15,qiyun:10,comprehension:10,constitution:-5},log:'你将多余的力量导入了地脉——那片土地将来会诞生一处灵脉'}]},

  // ========== 三清 (秘密天道) 专属事件 ==========
  // 三清心蟠觉醒
  {text:'你在<span class="loc">龙脉深处</span>窥见了一个不该看到的<span class="mys">秘密</span>——三清篡改因果的真相。三位模糊的身影出现在你面前，用无声的方式告诉你：你已经知道了<span class="mys">秘密</span>，现在你必须守护它。三清选中了你作为他们在人间的<span class="mys">因缘</span>。',
    trigger:{minAge:25,cultivation:60},flagReq:'daqi_aware',noFlag:'has_xinpan',choices:[
    {text:'守护秘密，成为三清心蟠',effect:{cultivation:35,comprehension:25,sanity:-20,karma:-10},log:'你成为了三清的心蟠！秘密天道之力涌入脑海——你能感知一切被隐藏的真相，但窥见福生天全貌的三清已然疯狂，你也隐约听到了那个方向传来的低语',xinpan:'sanqing',setFlag:'has_xinpan'},
    {text:'拼命遗忘这一切',effect:{comprehension:10,sanity:-10},log:'你拼命想忘掉看到的一切，但那些秘密已经刻在了你的灵魂深处'}]},
  {xinpanReq:'sanqing',text:'三清的<span class="mys">秘密之力</span>让你能看穿一切谎言和伪装。你能感知到每个人心中隐藏的秘密——有些秘密温暖，有些令人作呕。',
    trigger:{minAge:20},choices:[
    {text:'窥探周围人的秘密',effect:{comprehension:15,connections:10,sanity:-10,karma:-5},log:'你看穿了很多人的秘密。有些人感激你的洞察，有些人恐惧你的目光'},
    {text:'克制窥探的冲动',effect:{comprehension:8,sanity:5,karma:5},log:'你压下了窥探秘密的冲动——三清因为窥见太多而疯狂，你不想步其后尘'}]},
  {xinpanReq:'sanqing',text:'你梦见了<span class="npc">诸葛渊</span>——三清的另一个心蟠。他的残魂告诉你："不要试图看清<span class="danger-text">福生天</span>的全貌。三清就是因此而疯的。守住你能守的秘密就够了。"',
    trigger:{minAge:28,cultivation:60},choices:[
    {text:'听从诸葛渊的忠告',effect:{comprehension:15,sanity:10,cultivation:10,karma:5},log:'你决定不再深入窥探最终的秘密。守护——而非揭露——才是秘密天道的真谛'},
    {text:'你想亲眼看看福生天',effect:{comprehension:25,cultivation:20,sanity:-30,karma:-15},log:'你向那个方向看了一眼——只是一眼。恐惧、未知、绝望——三种天道构成的存在瞬间充斥了你的认知。你尖叫着醒来，再也忘不掉那一眼'}]},
  {xinpanReq:'sanqing',text:'三清的<span class="mys">因果之力</span>在你体内觉醒——你发现自己可以<span class="mys">篡改</span>小范围内的因果关系。一个人本该死去的命运，你可以暂时改写。但每次篡改都会让你离疯狂更近一步。',
    trigger:{minAge:35,cultivation:80},choices:[
    {text:'篡改因果救一个人',effect:{cultivation:30,karma:20,sanity:-25,comprehension:15},log:'你改写了一条因果线——一个本该死于邪祟的孩子活了下来。但你的意识中多了一道裂缝'},
    {text:'封印因果之力',effect:{cultivation:15,comprehension:10,sanity:5,karma:5},log:'你将这股力量封印在体内。诸葛渊的忠告回荡在耳边——有些力量，不该被使用'}]},
];

// ========== 天赋专属事件 ==========
export const TALENT_EVENTS = [
  // ===== 好天赋 =====
  {check:'dao_xian',trigger:{minAge:10},text:'你在<span class="loc">山间</span>打坐时，天地灵气突然<span class="mys">主动</span>向你汇聚。一位路过的散修惊叹："此子道缘深厚，百年难遇！"',choices:[
    {text:'趁机修炼',effect:{cultivation:12,comprehension:8},log:'灵气灌体的感觉如沐春风，你的修为突飞猛进'},
    {text:'询问散修如何修炼',effect:{comprehension:15,connections:5},log:'散修教了你一套呼吸吐纳之法，虽然简单，却让你受益终生'}]},
  {check:'fu_gui',trigger:{minAge:8},text:'你家的<span class="itm">祖宅</span>翻修时，工人在地下挖出了一个铁箱——里面是祖上埋下的<span class="itm">金锭</span>和一本发黄的<span class="mys">古书</span>。',choices:[
    {text:'把金子存起来',effect:{wealth:30,qiyun:5},log:'这笔横财让你家的日子更宽裕了'},
    {text:'研究那本古书',effect:{cultivation:8,comprehension:10,wealth:10},log:'古书记载的是一种失传的吐纳术，虽然残缺不全，但你受益匪浅'}]},
  {check:'ji_xing',trigger:{minAge:12},text:'你在悬崖边失足——本以为必死无疑，却<span class="mys">恰好</span>落在了一棵伸出崖壁的古松上。更离谱的是，树洞里还有一只玉瓶，里面装着三枚<span class="itm">丹药</span>。',choices:[
    {text:'服用丹药',effect:{cultivation:10,constitution:8,qiyun:8},log:'丹药入腹，温热之气游走全身。这运气简直逆天'},
    {text:'带回去找人鉴定',effect:{wealth:15,connections:5,qiyun:5},log:'药铺老板说这是百年灵芝丹，值不少银子'}]},
  {check:'jian_kang',trigger:{minAge:15},text:'一场<span class="danger-text">瘟疫</span>席卷了你所在的城镇，病倒了大半的人。但你安然无恙——甚至连咳嗽都没有。',choices:[
    {text:'照顾病人',effect:{karma:10,connections:15,constitution:3},log:'你不怕传染，尽心照料病患。活下来的人都记着你的恩'},
    {text:'趁机外出闯荡',effect:{wealth:10,cultivation:5,qiyun:3},log:'别人卧病在床，你却精力旺盛'}]},
  {check:'shou_xing',trigger:{minAge:50},text:'同辈人已经白发苍苍，你却<span class="mys">面色红润</span>如同壮年。有人怀疑你修炼了驻颜之术。',choices:[
    {text:'装作自己也老了',effect:{connections:8,comprehension:3},log:'你开始佝偻着走路，说话也故意放慢'},
    {text:'收弟子传道',effect:{connections:15,cultivation:5,karma:5},log:'你的长寿让人觉得你道行高深，不少年轻人来拜师'}]},
  {check:'mei_mao',trigger:{minAge:14},text:'你出落得越发好看，连城里最挑剔的媒婆都说你是"<span class="itm">百里挑一</span>"。但好看也引来了麻烦——有个<span class="danger-text">恶霸公子</span>看上了你。',choices:[
    {text:'巧言周旋',effect:{connections:10,qiyun:3},log:'你用三寸不烂之舌把恶霸哄得团团转，化险为夷'},
    {text:'托人牵线认识贵人',effect:{connections:20,wealth:10},log:'你的美貌引起了一位贵人的注意，有了新的靠山'}]},
  {check:'kou_cai',trigger:{minAge:12},text:'集市上两家铺子为了地界吵得不可开交，眼看就要动手。你路过随口说了几句，竟然把两边都说服了。',choices:[
    {text:'趁机当调停人',effect:{connections:15,wealth:8,karma:5},log:'两家掌柜都感谢你，各送了你礼物'},
    {text:'帮弱的那方说话',effect:{karma:10,connections:5,wealth:3},log:'你为弱势一方据理力争，留下了好名声'}]},
  {check:'zhi_hui',trigger:{minAge:10},text:'一位<span class="npc">游方术士</span>在路边摆了一道<span class="mys">字谜</span>，说谁解出来就收谁做徒弟。围了一圈人都猜不出。你看了一眼就有了答案。',choices:[
    {text:'说出答案',effect:{comprehension:12,cultivation:8,connections:5},log:'术士大喜，教了你几手看风水的本事'},
    {text:'不说出来，自己记下',effect:{comprehension:15},log:'你把字谜的思路记在心里，日后触类旁通'}]},
  {check:'wu_xing',trigger:{minAge:10},text:'你无师自通地打出了一套拳法——招式粗糙但气势凌厉。一个经过的<span class="npc">镖师</span>看呆了。',choices:[
    {text:'拜镖师为师',effect:{constitution:10,cultivation:8,connections:5},log:'镖师教了你三年基本功，筋骨更加强健'},
    {text:'自己练',effect:{cultivation:10,constitution:5,comprehension:5},log:'你按自己的理解不断改良那套拳法'}]},
  {check:'gui_ren',trigger:{minAge:15},text:'你在路边帮一个摔倒的<span class="npc">老者</span>捡东西。老者起身后从袖中取出一块<span class="itm">玉牌</span>："日后有难，持此牌去<span class="loc">鲁城</span>找李掌柜。"',choices:[
    {text:'收下玉牌',effect:{qiyun:10,connections:15},log:'你不知道那老者是谁，但这块玉牌温润异常'},
    {text:'追上去问清楚',effect:{connections:10,comprehension:5,qiyun:5},log:'老者笑而不答，只说"缘分到了自会明白"'}]},
  {check:'xian_gu',trigger:{minAge:12},text:'你的骨骼在月光下竟然<span class="mys">微微发光</span>。一个路过的修士跪了下来："天生道体！前辈请受晚辈一拜！"',choices:[
    {text:'表示你不是什么前辈',effect:{connections:5,sanity:5,cultivation:5},log:'修士不信，非要拜你为师'},
    {text:'让修士教你修炼之法',effect:{cultivation:15,comprehension:10},log:'修士恭恭敬敬地把会的功法都教给了你'}]},
  {check:'fu_yuan',trigger:{minAge:10},text:'你梦见一个<span class="mys">金光闪闪的老者</span>对你微笑，醒来后枕头底下多了一枚<span class="itm">古铜钱</span>。',choices:[
    {text:'随身携带铜钱',effect:{qiyun:12,karma:5,wealth:5},log:'自从带上铜钱后，你做什么事都格外顺利'},
    {text:'去找人解读文字',effect:{comprehension:10,cultivation:5,karma:8},log:'老先生说这是"积善令"，只有前世大善之人才配得上'}]},
  {check:'tian_yun',trigger:{minAge:15},text:'你随手买的一张<span class="itm">彩头</span>中了头彩。用银子请朋友吃饭时，又在饭馆捡到了一个<span class="itm">储物袋</span>。',choices:[
    {text:'物归原主',effect:{karma:15,connections:10,qiyun:5},log:'失主感激涕零，送了你不少好东西'},
    {text:'据为己有',effect:{wealth:25,qiyun:-5,karma:-10},log:'储物袋里有不少好东西，但你心里隐隐不安'}]},
  {check:'zhuan_yun',trigger:{minAge:18},text:'连续遭遇三件倒霉事后，你发现水沟里泡出了<span class="itm">灵石</span>，追你的狗叼来了<span class="itm">灵草</span>，偷钱的小偷被抓你还得了赏银。',choices:[
    {text:'感叹自己的运气',effect:{qiyun:10,wealth:10,cultivation:5},log:'别人都说你是"倒霉到头就是运"的命格'},
    {text:'把灵石灵草卖了',effect:{wealth:20,qiyun:3},log:'灵石和灵草换了不少银子'}]},
  {check:'ling_gen',trigger:{minAge:10},text:'你第一次接触修炼功法时，体内的<span class="mys">灵根</span>自发共振——天地灵气如溪水般汇入经脉。',choices:[
    {text:'加倍修炼',effect:{cultivation:15,comprehension:8},log:'灵根让修炼事半功倍，很快超过了同期修士'},
    {text:'稳扎稳打',effect:{cultivation:8,constitution:5,sanity:5},log:'你没有贪多，基础打得极牢'}]},
  {check:'shan_min',trigger:{minAge:12},text:'你在路边发现一只受伤的<span class="npc">白鹤</span>，翅膀折了，奄奄一息。',choices:[
    {text:'带回去养伤',effect:{karma:12,qiyun:8,connections:3},log:'白鹤治好后绕着你飞了三圈才离去。后来你梦到白鹤化为人形向你道谢'},
    {text:'请郎中来治',effect:{karma:8,wealth:-5,connections:5},log:'郎中说你心善，给你打了个折'}]},
  {check:'tie_gu',trigger:{minAge:12},text:'一块从山上滚落的巨石砸中了你——旁人以为你死了。但你从石头下面爬出来，只是擦破了点皮。',choices:[
    {text:'用石头锤炼身体',effect:{constitution:12,cultivation:5},log:'铁骨之名不是白叫的'},
    {text:'装作很疼的样子',effect:{connections:5,sanity:3},log:'你不想太引人注目'}]},
  {check:'duo_mou',trigger:{minAge:14},text:'一伙<span class="danger-text">山贼</span>占据要道，官兵久攻不下。你看了地形，提了个计策……',choices:[
    {text:'献计断贼水源',effect:{connections:20,wealth:10,karma:5,comprehension:5},log:'山贼三天后投降。县令亲自设宴感谢你'},
    {text:'渔翁得利',effect:{wealth:20,comprehension:8,karma:-5},log:'你两边传话，趁乱捞了不少好处'}]},
  {check:'jing_shang',trigger:{minAge:14},text:'你发现邻村的<span class="itm">药材</span>在城里能卖三倍价格，而城里的<span class="itm">布匹</span>在村里也是稀罕物。',choices:[
    {text:'开始做买卖',effect:{wealth:25,connections:10},log:'你很快赚到了第一桶金'},
    {text:'拉人合伙做大',effect:{wealth:15,connections:20,comprehension:3},log:'生意越做越大'}]},
  {check:'yi_xin',trigger:{minAge:10},text:'邻居家孩子发高烧，郎中束手无策。你不知为何随手采了几种草药熬汤——孩子喝下去竟然<span class="mys">退烧了</span>。',choices:[
    {text:'跟郎中学医',effect:{comprehension:10,constitution:5,connections:8,karma:5},log:'郎中惊叹你的药理天赋，收你为徒'},
    {text:'继续自己摸索',effect:{comprehension:12,cultivation:5},log:'你凭直觉配药的能力越来越强'}]},
  // ===== 坏天赋 =====
  {check:'ji_bing',trigger:{minAge:12},text:'你又一次病倒了——咳血不止，郎中说你<span class="danger-text">命不久矣</span>。但在昏迷中你看到了一片<span class="mys">奇异的光芒</span>。',choices:[
    {text:'追寻那道光',effect:{cultivation:10,sanity:-8,comprehension:8},log:'你在梦中修炼了不知多久——醒来后病竟好了大半'},
    {text:'拼命求活',effect:{constitution:5,sanity:-5,karma:3},log:'你咬着牙挺了过来。意志更坚韧了一分'}]},
  {check:'pin_kun',trigger:{minAge:10},text:'你饿了三天——在垃圾堆里翻到了一本被人丢弃的<span class="mys">残破功法</span>。',choices:[
    {text:'如获至宝地研读',effect:{cultivation:8,comprehension:10},log:'功法残缺不全，但精神食粮比面包更珍贵'},
    {text:'拿去卖钱买吃的',effect:{wealth:8,constitution:3},log:'功法卖了几文钱，够吃两天了'}]},
  {check:'can_ji',trigger:{minAge:10},text:'一个老瞎子在你身边坐下："<span class="mys">身残心不残</span>，你的心比那些健全人清明得多。来，我教你用心去感知这个世界。"',choices:[
    {text:'跟老瞎子学',effect:{comprehension:15,cultivation:8,sanity:5},log:'身体的残缺反而让你其他感官更加敏锐'},
    {text:'婉拒',effect:{sanity:5,karma:3},log:'你谢过老瞎子。也许你还没准备好'}]},
  {check:'zai_min',trigger:{minAge:8},text:'又一次逃难——这次是洪水。你背着仅有的包裹，前面路断了，后面水在涨。',choices:[
    {text:'拼命游过去',effect:{constitution:5,cultivation:3,sanity:-8},log:'你差点淹死，但爬上了对岸。第三次死里逃生'},
    {text:'爬上树等救援',effect:{sanity:-5,connections:5},log:'你在树上等了两天两夜，一支官军救了你'}]},
  {check:'yu_ben',trigger:{minAge:12},text:'其他人功法一遍就会，你练了一百遍还是一团糟。但有天你搬柴时突然顿悟——原来精髓不在招式，在<span class="mys">呼吸</span>。',choices:[
    {text:'按自己理解重新修炼',effect:{cultivation:10,comprehension:10},log:'方法笨拙但扎实。师傅说："倒也...不是不行"'},
    {text:'继续死磕原版',effect:{cultivation:5,constitution:5},log:'又练了几百遍，终于像模像样了'}]},
  {check:'e_meng',trigger:{minAge:10},text:'今晚噩梦格外清晰——<span class="loc">倒悬的城市</span>里，一个身影递给你一卷<span class="mys">竹简</span>。你醒来后竟记得每个字。',choices:[
    {text:'按竹简上说的修炼',effect:{cultivation:12,comprehension:8,sanity:-10},log:'竹简记载借梦修炼之法。噩梦或许也是机缘'},
    {text:'告诉别人你的梦',effect:{connections:5,sanity:-5},log:'没人信你'}]},
  {check:'du_zhai',trigger:{minAge:12},text:'追债的人又来了——这次要<span class="danger-text">拿人抵债</span>。你被堵在了巷子里。',choices:[
    {text:'拼死反抗',effect:{constitution:-8,cultivation:5,connections:5},log:'你打伤了一个追债的，他们暂时不敢来了'},
    {text:'开口谈判',effect:{connections:8,wealth:-10,comprehension:3},log:'你硬着头皮说服他们再宽限一月'}]},
  {check:'chou_lou',trigger:{minAge:14},text:'你又被当面嘲笑了。酒楼客人指着你大笑："长成这样也敢出门？"',choices:[
    {text:'默默离开',effect:{sanity:-5,comprehension:5,cultivation:3},log:'丑就丑吧，丑人也能修道'},
    {text:'回怼："相由心生，你心更丑"',effect:{connections:3,karma:3,sanity:3},log:'那人被怼得哑口无言。旁边有人鼓掌'}]},
  {check:'bai_bing',trigger:{minAge:8},text:'你同时得了三种病——郎中开了药，但药互相冲突。你凭本能改了一味……竟然<span class="mys">痊愈了</span>。',choices:[
    {text:'研究药理',effect:{comprehension:12,constitution:3,cultivation:3},log:'百病缠身反而让你对药理有了超乎常人的直觉'},
    {text:'只是碰巧',effect:{constitution:5,sanity:3},log:'你把这当成运气。但郎中看你的眼神变了'}]},
  {check:'sha_qi',trigger:{minAge:12},text:'你身边又出事了——和你说句话的路人出门就摔断了腿。人们开始远远避开你。',choices:[
    {text:'独自修炼煞气',effect:{cultivation:10,sanity:-8,connections:-5},log:'煞气并非全是坏事——邪物不敢靠近你'},
    {text:'寻找化解之法',effect:{comprehension:8,karma:5,connections:3},log:'一个不怕煞气的老道士说煞气可以引导，不必消除'}]},
  {check:'mo_ying',trigger:{minAge:10},text:'你终于<span class="mys">看清了</span>那个一直跟着你的影子——它长着你的脸，但笑容是扭曲的。它开口了："<span class="danger-text">你我本是一体。</span>"',choices:[
    {text:'和魔影对话',effect:{cultivation:10,comprehension:10,sanity:-15},log:'魔影说它是你的"另一面"。你问它想要什么，它说："我想活。"'},
    {text:'试图驱逐魔影',effect:{constitution:-5,sanity:-8,cultivation:5},log:'驱邪咒暂时有效——但它很快又出现了。它不是鬼，是你自己的一部分'}]},
  {check:'ye_zhang',trigger:{minAge:15},text:'古庙中佛像的眼珠转向了你。一个声音："<span class="danger-text">前世造业者，今生必偿。</span>你前世害了三十七条人命。"',choices:[
    {text:'跪下忏悔',effect:{karma:15,sanity:-10,cultivation:5},log:'你跪了一天一夜。起身时感觉轻了——业障消减了一分'},
    {text:'反问："我凭什么替前世还债？"',effect:{comprehension:10,karma:-5,cultivation:8},log:'佛像沉默了。你第一次思考因果的本质'}]},
  {check:'ti_ruo',trigger:{minAge:10},text:'你<span class="danger-text">又</span>被一阵风吹倒了——不是修辞，是真的。但你在摔倒瞬间感受到了风中的<span class="mys">灵气流动</span>。',choices:[
    {text:'研究风中的灵气',effect:{comprehension:12,cultivation:8},log:'体弱得被风吹倒，但也因此比谁都更能感知风的变化'},
    {text:'想办法强身健体',effect:{constitution:8,cultivation:3},log:'每天跑步锻炼——虽然跑不远就喘，但比以前好了'}]},
  {check:'po_yun',trigger:{minAge:12},text:'出门踩钉子，买东西被骗，回家房子漏了。但修屋顶时在瓦片缝隙里发现了前任房客藏的一个<span class="itm">玉佩</span>。',choices:[
    {text:'留着玉佩',effect:{qiyun:8,cultivation:5,wealth:5},log:'玉佩上刻着一个"逆"字。也许你就是要逆运而行'},
    {text:'卖掉换钱',effect:{wealth:15,qiyun:3},log:'玉佩卖了不少钱'}]},
  {check:'tian_sha',trigger:{minAge:15},text:'你的第三个朋友也出事了——骑马时马突然发疯。你开始信了：命犯<span class="danger-text">天煞</span>，不能靠近任何人。',choices:[
    {text:'远离人群独自修炼',effect:{cultivation:12,comprehension:8,connections:-10},log:'你搬到山上独居。孤独是你的宿命'},
    {text:'寻找破煞之法',effect:{connections:5,comprehension:10,karma:3},log:'算命先生说只有"至阳之物"才能破煞'}]},
  {check:'tong_ling',trigger:{minAge:5},text:'你又看到了——墙角蹲着一个<span class="danger-text">透明的人</span>，它在盯着你笑。别人都说那里什么都没有。',choices:[
    {text:'试着跟它说话',effect:{comprehension:10,cultivation:8,sanity:-12},log:'那东西咧开嘴，发出了不属于人类的声音——但你听懂了'},
    {text:'装作没看到',effect:{sanity:-5,comprehension:3},log:'你低下头快步走过。它的目光一直跟着你'},
    {text:'大喊"走开！"',effect:{sanity:-3,constitution:3,connections:-3},log:'旁人以为你在发疯，但那东西确实消失了'}]},
  {check:'gui_ying',trigger:{minAge:8},text:'附在你身上的<span class="danger-text">鬼魂</span>今晚格外躁动——它低语："<span class="mys">让我出来……我只想看看月亮……</span>"',choices:[
    {text:'允许它借用你的眼睛',effect:{sanity:-12,cultivation:8,comprehension:5},log:'鬼魂看了月亮后安静了。它低声说了句"谢谢"'},
    {text:'用力压制它',effect:{sanity:-5,constitution:-3,cultivation:5},log:'你用意志力把鬼魂压了回去。它发出了悲鸣'}]},
  {check:'fan_gu',trigger:{minAge:14},text:'师傅让你跟大家一起练功，你偏不。你觉得他们的功法<span class="danger-text">全是垃圾</span>。师傅气得要赶你走。',choices:[
    {text:'走就走',effect:{cultivation:8,comprehension:10,connections:-10},log:'你离开师门，一个人摸索出了一条野路子'},
    {text:'表面服软暗中改造',effect:{comprehension:8,cultivation:5,connections:3},log:'暗中把功法改了一遍，结果居然比原版好用'}]},
  {check:'duan_ming',trigger:{minAge:18},text:'一个<span class="npc">相士</span>拉住你："施主面有<span class="danger-text">死气</span>，恐怕不过而立之年。"',choices:[
    {text:'问有无破解之法',effect:{comprehension:8,cultivation:5,wealth:-10},log:'相士说唯有修真可延寿，卖了你一本入门功法'},
    {text:'既然命短就活得精彩',effect:{qiyun:10,cultivation:5,karma:3,sanity:5},log:'不怕死的人反而活得比谁都洒脱'}]},
  // New talent dedicated events
  {check:'shang_jia',trigger:{minAge:12},text:'你在市集上看到两个商人吵架，一眼就看出谁在说谎——这是<span class="npc">祖传</span>的眼力。一旁的掌柜看你有商才，想收你当学徒。',choices:[
    {text:'跟他学做生意',effect:{wealth:20,connections:10,comprehension:5},log:'三个月后你把掌柜的店利润翻了一番'},
    {text:'自己做买卖',effect:{wealth:15,comprehension:8},log:'你用零钱倒卖山货，赚了第一桶金'},
    {text:'不感兴趣',effect:{comprehension:3},log:'经商有什么意思，你想做更大的事'}]},
  {check:'gu_wu',trigger:{minAge:8},text:'半夜你梦见一个老人在你面前打拳——醒来后身体自动摆出了那个架势。这是<span class="mys">血脉中的记忆</span>。',choices:[
    {text:'按照记忆苦练',effect:{cultivation:12,constitution:8,comprehension:5},log:'古武功法在你体内苏醒，你的筋骨咔咔作响，变得更加强韧'},
    {text:'去找人印证这套拳法',effect:{cultivation:8,connections:5,comprehension:8},log:'一个老拳师看了目瞪口呆："这是失传百年的功法！"'}]},
  {check:'yin_ti',trigger:{minAge:6},text:'每到阴天你就浑身发冷，能看到别人看不到的<span class="danger-text">黑影</span>在房梁上爬。你娘说你是"阴时生的，八字太轻"。',choices:[
    {text:'学着与阴气共处',effect:{cultivation:8,comprehension:5,sanity:-8},log:'你开始能分辨哪些阴气有害，哪些无害——这也是一种修行'},
    {text:'请道士做法驱阴',effect:{wealth:-10,sanity:5,constitution:3},log:'道士烧了一道符，你舒服了一阵，但过几天又犯了'},
    {text:'不管它',effect:{sanity:-5,constitution:-2},log:'你习惯了身边总有阴冷的东西飘过'}]},
  {check:'chi_she',trigger:{minAge:8},text:'私塾先生教了三遍，别人都会了，你还是一脸懵。同窗们在背后叫你<span class="danger-text">"傻子"</span>。但你发现自己虽然学东西慢，打坐时却出奇地静——心里什么杂念都没有。',choices:[
    {text:'专心打坐修炼',effect:{cultivation:10,comprehension:5,sanity:5},log:'你打坐时入定极深，连先生都觉得不可思议——"此子心无杂念，是修道的料"'},
    {text:'不理会嘲笑继续学',effect:{comprehension:8,connections:3,karma:3},log:'你用别人三倍的时间学会了，但记得比谁都牢'},
    {text:'揍那个叫你傻子的人',effect:{constitution:3,connections:-5,karma:-3},log:'你追了他三条街才追上——但你打赢了'}]},
  {check:'liu_lang',trigger:{minAge:6},text:'你又换了一个睡觉的地方——这次是<span class="loc">城门洞</span>下面。虽然冷，但你已经习惯了。夜里一个<span class="npc">乞丐老头</span>凑过来，教你怎么在城里混。',choices:[
    {text:'跟老头学求生之道',effect:{comprehension:8,connections:5,constitution:3},log:'老头教你哪家饭馆后门有剩饭、哪条巷子安全——这些是书本上学不到的'},
    {text:'自己找活路',effect:{wealth:5,constitution:5,comprehension:3},log:'你去码头帮人搬货，虽然被克扣了大半工钱，但至少吃上了热饭'},
    {text:'偷东西',effect:{wealth:10,karma:-8,qiyun:-3},log:'你摸了个商人的钱袋——活下去比什么都重要'}]},
];

// ========== 前后联系事件（需要flag/npc系统） ==========
export const LINKED_EVENTS = [
  // === 童年恩人线 ===
  {trigger:{minAge:5,maxAge:10},text:'你在路边饿得快晕倒了。一个卖<span class="itm">包子</span>的<span class="npc">大叔</span>看你可怜，塞给你两个热包子，还摸了摸你的头："孩子，好好活着。"',choices:[
    {text:'狼吞虎咽',effect:{constitution:5,karma:3,connections:3},log:'你记住了大叔的脸。这辈子第一次有陌生人对你好。',npcMeet:'baozi_uncle',npcFavor:10,npcTag:'恩人',setFlag:'baozi_saved'},
    {text:'把一个包子分给旁边的小乞丐',effect:{karma:8,connections:5,constitution:3},log:'大叔看到你分包子，笑着又多给了你一个。',npcMeet:'baozi_uncle',npcFavor:15,npcTag:'恩人',setFlag:'baozi_saved'}]},
  // 报恩
  {trigger:{minAge:25},flagReq:'baozi_saved',npcReq:'baozi_uncle',text:'你在集市上看到了一个熟悉的身影——当年给你包子的<span class="npc">大叔</span>。他老了很多，包子摊也破旧了。他似乎没认出你。',choices:[
    {text:'买下他所有的包子',effect:{wealth:-10,karma:10,connections:5},log:'你买光了大叔的包子，分给了路过的穷人。大叔笑得合不拢嘴。你没告诉他你是谁，但你心里的一块石头落了地。',npcMeet:'baozi_uncle',npcFavor:10},
    {text:'帮他翻新摊位',effect:{wealth:-20,karma:15,connections:10},log:'你出钱帮大叔翻新了摊位。他认出了你："你是当年那个孩子？！"你们相拥而泣。',npcMeet:'baozi_uncle',npcFavor:20},
    {text:'默默路过',effect:{karma:-3},log:'你假装没看到。他只是个卖包子的，你现在...不一样了。'}]},

  // === 少年仇人线 ===
  {trigger:{minAge:8,maxAge:14},text:'一个比你大几岁的<span class="danger-text">恶少</span>抢了你的东西，还把你打了一顿。他叫<span class="npc">周胖子</span>，是本地小地主的儿子。你鼻青脸肿地躺在地上，他扬长而去。',choices:[
    {text:'记住他的脸',effect:{sanity:-5,comprehension:3},log:'你咬着牙记住了——周胖子。总有一天你会让他加倍偿还。',npcMeet:'zhou_pangzi',npcFavor:-20,npcTag:'仇人',setFlag:'zhou_bullied'},
    {text:'忍了',effect:{sanity:-3},log:'你爬起来拍了拍灰。这种事已经不是第一次了。',setFlag:'zhou_bullied'},
    {text:'追上去拼了',effect:{constitution:-8,sanity:3,cultivation:3},log:'你被打得更惨了，但你一口咬在他手上，他疼得嗷嗷叫。从此他对你多了一分忌惮。',npcMeet:'zhou_pangzi',npcFavor:-10,npcTag:'仇人',setFlag:'zhou_bullied'}]},
  // 三十年河东
  {trigger:{minAge:30},flagReq:'zhou_bullied',text:'你路过一个破落的村庄，看到一个胖乎乎的中年男人在路边乞讨。仔细一看——是<span class="npc">周胖子</span>！当年那个地主家的恶少，如今瘦了一圈，衣衫褴褛。他认出了你，吓得往后缩。',choices:[
    {text:'递给他一碗饭',effect:{karma:15,sanity:5,connections:3},log:'"吃吧。"你只说了两个字。周胖子愣了半天，然后哭了出来。他磕了三个头："对不起...对不起..."'},
    {text:'冷冷看他一眼就走',effect:{sanity:3},log:'你没说话，只是看了他一眼。那个眼神比任何报复都让他害怕。'},
    {text:'还他当年那一拳',effect:{karma:-5,sanity:5,constitution:3},log:'你一拳打在他脸上："这是还你小时候的。"周胖子不敢还手，捂着脸嚎啕大哭。打完之后你反而觉得空虚——这不值得。'}]},

  // === 救命之恩线 ===
  {trigger:{minAge:15,maxAge:30},text:'你在山路上遇到一个被毒蛇咬伤的<span class="npc">年轻女子</span>，她面色发青，已经快不行了。',choices:[
    {text:'帮她吸出毒液',effect:{constitution:-5,karma:10,connections:10},log:'你冒着中毒的危险救了她。她说她叫<span class="npc">沈青萍</span>，是个走镖的。她说她欠你一条命。',npcMeet:'shen_qingping',npcFavor:30,npcTag:'救命恩',setFlag:'saved_shen'},
    {text:'去附近找草药',effect:{karma:8,connections:5,comprehension:3},log:'你找到了解毒的草药，虽然晚了点但总算救了她。她说叫沈青萍，走镖的。',npcMeet:'shen_qingping',npcFavor:20,npcTag:'恩人',setFlag:'saved_shen'},
    {text:'不敢冒险',effect:{karma:-5,sanity:-3},log:'你犹豫了太久...等你下定决心时她已经不动了。你在路边挖了个坑埋了她。'}]},
  // 恩人回报
  {trigger:{minAge:30},flagReq:'saved_shen',npcReq:'shen_qingping',text:'你陷入了一场麻烦——被几个<span class="danger-text">强盗</span>围在了死胡同里。正当你以为完了的时候，一个身影从天而降，三拳两脚就把强盗打翻了。是<span class="npc">沈青萍</span>！她比当年壮了不少，腰间别着一把刀。',choices:[
    {text:'叙旧',effect:{connections:15,wealth:10,qiyun:5},log:'"当年你救了我，今天我还你。"她笑着拍了拍你的肩。她现在是一方镖头，手下有百号人。你们成了过命的交情。',npcMeet:'shen_qingping',npcFavor:15},
    {text:'让她教你几招',effect:{cultivation:10,constitution:8,connections:10},log:'沈青萍教了你几手实战搏击术。"下次别落单。"她说。',npcMeet:'shen_qingping',npcFavor:10}]},

  // === 物品前后联系线 ===
  // 早期捡到破铜镜
  {trigger:{minAge:8,maxAge:15},text:'你在河边洗脸时，水底反射出一道奇怪的光。你伸手摸去，捞出了一面<span class="itm">破铜镜</span>——镜面模糊不清，但触手冰凉。',choices:[
    {text:'留着',effect:{comprehension:3},log:'你把破铜镜揣在怀里。虽然照不清人，但你莫名觉得这东西不一般。',item:'po_tong_jing',setFlag:'has_mirror'},
    {text:'扔回河里',effect:{},log:'就是个破镜子而已。你没多想。'}]},
  // 铜镜发挥作用
  {trigger:{minAge:20},flagReq:'has_mirror',text:'一个邪修向你释放了<span class="danger-text">摄魂术</span>！你感到意识在被抽离身体——就在这时，怀里的<span class="itm">破铜镜</span>突然<span class="mys">发出耀眼的光芒</span>，将邪术反弹了回去！邪修惨叫一声逃走了。',choices:[
    {text:'仔细研究铜镜',effect:{cultivation:15,comprehension:12,sanity:-5},log:'铜镜上的锈迹脱落了一些，露出了隐约的符文。这不是普通的镜子——它可能是某种上古法器的碎片',req:{item:'po_tong_jing'}},
    {text:'感谢铜镜救命',effect:{qiyun:8,cultivation:5},log:'你不懂符文，但你知道这面镜子救了你一命。你更加珍惜地收好了它'}]},

  // === 师恩线 ===
  {trigger:{minAge:12,maxAge:20},text:'一位云游的<span class="npc">老道士</span>在你家门口歇脚。他看了你一眼说："这孩子根骨不错，我教你三招防身的功夫吧。不收钱。"',choices:[
    {text:'恭敬拜师',effect:{cultivation:10,constitution:5,comprehension:8},log:'老道士教了你三天三夜，你学到了吐纳入门和一套简单的拳法。临走时他说："二十年后若还记得老道，来<span class="loc">终南山</span>找我。"',npcMeet:'lao_daoshi',npcFavor:20,npcTag:'恩师',setFlag:'daoshi_taught'},
    {text:'学完不想走',effect:{cultivation:12,comprehension:10,connections:5},log:'老道士笑了："缘分到了自然会再见。"他飘然而去，你追不上。',npcMeet:'lao_daoshi',npcFavor:15,npcTag:'恩师',setFlag:'daoshi_taught'}]},
  // 多年后重逢
  {trigger:{minAge:35},flagReq:'daoshi_taught',npcReq:'lao_daoshi',text:'你在山中修行时偶遇一座小道观。进去一看——<span class="npc">当年教你功夫的老道士</span>正在院中打拳！他看起来竟然一点没变老。',choices:[
    {text:'上前行礼',effect:{cultivation:20,comprehension:15,connections:10},log:'"你来了。"老道士好像早就知道你会来。他又教了你三天，这次的功法比当年深了百倍。',npcMeet:'lao_daoshi',npcFavor:15},
    {text:'偷偷观摩他的功法',effect:{cultivation:12,comprehension:20},log:'你没有打扰他，只是远远看着。光是看他打拳，你就悟了不少东西。几十年不老...这位老道士究竟是什么人？'}]},

  // === 因果报应线 ===
  {trigger:{minAge:15,maxAge:25},text:'路边有个<span class="npc">老乞丐</span>被一群人欺负。他们往他身上泼脏水，还踢他的碗。',choices:[
    {text:'出手相助',effect:{karma:12,connections:5,wealth:-3},log:'你赶走了那群人，给老乞丐买了碗热面。他对你深深鞠了一躬，从怀里取出一个<span class="itm">破布包</span>递给你："施主的善心，老朽无以为报。这东西留给有缘人。"包里是一枚古朴的<span class="itm">玉简</span>。',setFlag:'helped_beggar',item:'yu_jian'},
    {text:'视而不见',effect:{karma:-3},log:'你低头走过。这世上受苦的人太多了，你管不过来。'},
    {text:'也踹他一脚',effect:{karma:-15,sanity:-3,connections:-5},log:'你不知道为什么也踹了一脚。事后你心里不好受。',setFlag:'kicked_beggar'}]},
  // 善报
  {trigger:{minAge:30},flagReq:'helped_beggar',text:'你遇到了生死危机——被困在了一座即将坍塌的废墟里。就在绝望的时候，一个声音响起："<span class="mys">善缘已种，善果自来。</span>"一股无形的力量将你托出了废墟。你想起了当年那个<span class="npc">老乞丐</span>。',choices:[
    {text:'感叹因果不虚',effect:{karma:10,qiyun:10,cultivation:8,sanity:5},log:'一碗面换一条命。你从此更加坚信善有善报'},
    {text:'四处寻找老乞丐',effect:{comprehension:10,connections:5},log:'你找了很久也没找到他。也许他根本不是普通的乞丐'}]},
  // 恶报
  {trigger:{minAge:30},flagReq:'kicked_beggar',text:'你连续遭遇了诸多不幸——先是生意赔了，然后朋友背叛你，最后你在路上无缘无故摔断了腿。躺在床上时，你突然想起了那个被你踢过的<span class="npc">老乞丐</span>。',choices:[
    {text:'后悔不已',effect:{karma:5,sanity:-8,constitution:-5},log:'你开始反思自己的所作所为。也许这就是因果报应'},
    {text:'不信这些',effect:{sanity:-5},log:'你不信什么因果。只是运气不好罢了——但心底那个声音说：真的只是运气吗？'}]},

  // === 道具影响结局事件 ===
  // 夜遇邪祟 → 山鬼花钱辟邪
  {trigger:{minAge:14,maxAge:40},text:'深夜赶路，一团黑雾忽然从路边扑来，阴风阵阵，你感到骨髓发寒——是<span class="danger-text">游荡邪祟</span>！',choices:[
    {text:'硬着头皮跑',effect:{sanity:-12,constitution:-5},log:'你拼命狂奔，邪祟在身后穷追不舍，你的心神受到了严重冲击。',itemBonus:{item:'shan_gui_hua_qian',effect:{sanity:15,qiyun:5}}},
    {text:'站住不动装死',effect:{sanity:-8},log:'你蹲在地上一动不动，邪祟围着你转了几圈才散去。你浑身湿透了冷汗。',itemBonus:{item:'shan_gui_hua_qian',effect:{sanity:12}}}]},

  // 遭遇强敌 → 煞气宝剑助战
  {trigger:{minAge:20,maxAge:50,cultivation:20},text:'一个蒙面的<span class="danger-text">邪修</span>拦住了你的去路，二话不说就朝你攻来。他修为比你高出不少，你处于绝对下风。',choices:[
    {text:'拼死反击',effect:{cultivation:8,constitution:-10},log:'你与邪修殊死搏斗，虽然挡住了致命一击，但也被打得遍体鳞伤。',combat:40,itemBonus:{item:'sha_qi_bao_jian',effect:{cultivation:12,constitution:8}}},
    {text:'且战且退',effect:{constitution:-5,comprehension:5},log:'你边打边退，寻找逃跑的机会。对方也没穷追不舍。',itemBonus:{item:'sha_qi_bao_jian',effect:{cultivation:8}}}]},

  // 困在闹鬼废墟 → 八卦镜照妖
  {trigger:{minAge:18,maxAge:45,cultivation:15},text:'你误入了一座<span class="danger-text">废弃的宅院</span>。门一关就再也打不开了，四面八方传来诡异的笑声，地板上冒出一只只惨白的手。',choices:[
    {text:'四处寻找出口',effect:{sanity:-10,comprehension:5},log:'你在鬼气森森的宅院中摸索了整整一夜，终于找到了一扇暗门逃了出来。',itemBonus:{item:'ba_gua_jing',effect:{sanity:15,cultivation:10}}},
    {text:'原地打坐稳住心神',effect:{sanity:-5,cultivation:5},log:'你闭目打坐，任凭鬼魅在你身边嬉闹。天亮后，宅院的门自己开了。',itemBonus:{item:'ba_gua_jing',effect:{sanity:10,comprehension:8}}}]},

  // 有人中毒垂危 → 润血丹救命
  {trigger:{minAge:16,maxAge:40},text:'路边一个<span class="npc">年轻人</span>中了蛇毒，面色发青，浑身抽搐。他同伴跪在地上哀求你帮忙。',choices:[
    {text:'用你所知的方法救治',effect:{karma:8,connections:8,constitution:-3},log:'你用尽浑身解数帮他排毒，虽然救回一命，但你自己也累得够呛。',itemBonus:{item:'run_xue_dan',effect:{karma:5,constitution:8,connections:5}}},
    {text:'帮忙找草药',effect:{karma:5,connections:3},log:'你跑遍附近山头找来解毒草药，勉强稳住了他的伤势。',itemBonus:{item:'run_xue_dan',effect:{constitution:5,karma:3}}}]},

  // 穿越危险地带 → 匿迹符箓隐匿
  {trigger:{minAge:16,maxAge:45,cultivation:10},text:'前方的路经过一片<span class="danger-text">妖兽</span>出没的密林。你已经看到好几具白骨了，但绕路要多走三天。',choices:[
    {text:'小心翼翼穿过去',effect:{constitution:-5,sanity:-5,cultivation:5},log:'你屏住呼吸穿过密林，好几次与妖兽擦肩而过。出林时你的腿还在发抖。',itemBonus:{item:'ni_ji_fu',effect:{sanity:10,constitution:8}}},
    {text:'绕远路走',effect:{constitution:-3},log:'你选择了安全的远路。虽然多走了三天，但至少没有生命危险。'}]},
];

// ========== 道具获取事件 ==========
export const ITEM_EVENTS = [
  // ===== 普通道具获取 (Common) =====
  {itemGive:'shan_gui_hua_qian',itemRarity:'common',trigger:{minAge:8,maxAge:20},text:'你路过一个热闹的集市，一个<span class="npc">老妇人</span>在路边摆摊卖各种杂货。红绳穿铜钱的<span class="itm">山鬼花钱</span>在阳光下泛着铜光。',choices:[
    {text:'花几文钱买一个',effect:{wealth:-2,sanity:5,qiyun:3},item:'shan_gui_hua_qian',log:'老妇人笑眯眯地把山鬼花钱递给你："小娃娃，戴着它能辟邪呢。"'},
    {text:'看看就走',effect:{},log:'你看了几眼，还是没舍得花钱。'}]},

  {itemGive:'yang_shou_dan',itemRarity:'common',trigger:{minAge:12,maxAge:30},text:'一个走街串巷的<span class="npc">游方道士</span>在路边吆喝："阳寿丹！正宗阳寿丹！服一粒增一年阳寿！"他面前摆着几个圆鼓鼓的金字丹丸。',choices:[
    {text:'买一粒试试',effect:{wealth:-5,constitution:8},item:'yang_shou_dan',log:'你把丹丸吞下，一股暖流涌遍全身。果然是修士间的通用货币。'},
    {text:'这种江湖骗子不理',effect:{},log:'你摇摇头走开了。谁知道是不是假的。'}]},

  {itemGive:'run_xue_dan',itemRarity:'common',trigger:{minAge:10,maxAge:25},text:'你在山路上发现一个倒在地上的<span class="npc">受伤行脚商</span>，他身边散落着几个药包。他虚弱地说："求你...帮我包扎一下..."',choices:[
    {text:'帮他包扎',effect:{karma:5,constitution:10},item:'run_xue_dan',log:'你帮他止了血。他感激不尽，从药包里取出一瓶润血丹送给你："这是止血的好东西，你留着用。"'},
    {text:'搜他身上的财物',effect:{karma:-10,wealth:8},log:'你趁他虚弱搜了他的钱袋。他绝望地看着你，眼神里满是悲凉。'},
    {text:'不管他',effect:{},log:'你匆匆走过。荒山野岭的，谁知道是不是陷阱。'}]},

  {itemGive:'bi_gu_dan',itemRarity:'common',trigger:{minAge:14,maxAge:35,cultivation:10},text:'你在一座破庙里歇脚，遇到一个<span class="npc">云游僧人</span>。他见你风尘仆仆，从行囊里取出一个小瓷瓶。',choices:[
    {text:'接受他的好意',effect:{cultivation:3,constitution:5},item:'bi_gu_dan',log:'"这是辟谷丹，服用后可代饭数日，赶路用得上。"僧人双手合十，转身离去。'},
    {text:'婉言谢绝',effect:{karma:2},log:'你谢过他的好意。僧人微微一笑，自行离去。'}]},

  {itemGive:'da_li_wan',itemRarity:'common',trigger:{minAge:15,maxAge:30,cultivation:15},text:'集镇上一个<span class="npc">卖药的壮汉</span>正在表演徒手碎石，围观者啧啧称奇。他得意地举起一个药瓶："大力丸！吃了力大无穷！"',choices:[
    {text:'买一盒',effect:{wealth:-8,constitution:12,cultivation:5},item:'da_li_wan',log:'你吃下一丸，果然浑身气力大增，筋骨都在嘎嘎作响。'},
    {text:'看热闹就好',effect:{},log:'你看了会儿表演就走了。'}]},

  {itemGive:'ni_ji_fu',itemRarity:'common',trigger:{minAge:12,maxAge:28,cultivation:5},text:'你在道观外的地摊上，发现一叠画着奇怪符文的黄纸。摊主是个<span class="npc">落魄的符箓师</span>，眼窝深陷，一看就是精力透支过度。',choices:[
    {text:'买一张匿迹符箓',effect:{wealth:-3,sanity:8,qiyun:3},item:'ni_ji_fu',log:'符箓师教你贴身佩戴："遇到不干净的东西，这符能让你隐匿行踪。"'},
    {text:'买一张镇邪符箓',effect:{wealth:-3,sanity:15},item:'fu_lu',log:'你选了张镇邪符箓。符箓师叮嘱你紧急时才用。'},
    {text:'不买',effect:{},log:'你觉得这些东西不太靠谱。'}]},

  // ===== 精良道具获取 (Uncommon) =====
  {itemGive:'hei_qi_guan_cai',itemRarity:'uncommon',trigger:{minAge:16,maxAge:35,cultivation:20},text:'你帮一个<span class="npc">棺材铺老板</span>驱走了一只骚扰他铺子的恶鬼。老板感激涕零，从柜台下面取出一个小臂大小的<span class="itm">黑漆棺材</span>。',choices:[
    {text:'收下黑漆棺材',effect:{sanity:15,cultivation:8},item:'hei_qi_guan_cai',log:'"这是祖传的宝贝，开盖三息可驱散煞气。你帮了我大忙，这个给你正合适。"'},
    {text:'只收银两酬谢',effect:{wealth:15},log:'你收了银两便离去。棺材铺的东西，你不太想碰。'}]},

  {itemGive:'ba_gua_jing',itemRarity:'uncommon',trigger:{minAge:18,maxAge:40,cultivation:25},text:'你在一处古战场遗迹中探索，在一具白骨旁发现了一面铜镜。镜面虽然蒙尘，但一擦拭就射出耀眼的光芒。旁边还有一封遗书，写着"<span class="mys">陈瞎子绝笔</span>"。',choices:[
    {text:'收起八卦镜',effect:{cultivation:15,comprehension:10},item:'ba_gua_jing',log:'你小心地收起八卦镜。这面镜子射出的光如利剑一般，对邪祟有极强的克制力。'},
    {text:'原地安葬白骨，不取遗物',effect:{karma:8},log:'你为白骨堆了个土坟，将遗物一起埋了。做人要有底线。'}]},

  {itemGive:'sha_qi_bao_jian',itemRarity:'uncommon',trigger:{minAge:18,maxAge:35,cultivation:30},text:'你击败了一个为祸乡里的<span class="npc">邪修</span>。他倒地后，手中的宝剑发出嗡鸣，剑身上煞气翻涌。',choices:[
    {text:'收取煞气宝剑',effect:{cultivation:18,constitution:5},item:'sha_qi_bao_jian',log:'你握住剑柄，一股寒意直透指尖。这把剑削铁如泥，自带煞气，是对付邪祟的利器。'},
    {text:'将剑就地封印',effect:{karma:5,sanity:5},log:'你用符箓将宝剑封印在地下。这种邪物，还是不碰为妙。'}]},

  {itemGive:'gu_shou_chuan',itemRarity:'uncommon',trigger:{minAge:16,maxAge:40,cultivation:20},factionReq:'nanjiang',text:'<span class="npc">拓跋丹青</span>见你修行刻苦，从自己手腕上取下一串手串递给你。手串上的珠子微微蠕动，仔细看竟是一只只蛊虫盘踞其上。',choices:[
    {text:'戴上蛊手串',effect:{constitution:12,cultivation:8,sanity:-5},item:'gu_shou_chuan',log:'"内含蛊虫，可防御反制敌人。不过戴久了心神会受影响，小心。"拓跋丹青叮嘱道。'},
    {text:'婉拒',effect:{connections:3},log:'你谢过师兄的好意，但蛊虫实在让你有些发怵。'}]},

  {itemGive:'chang_ming_suo',itemRarity:'uncommon',trigger:{minAge:14,maxAge:30,cultivation:15},text:'路过一个即将被洪水冲垮的村庄，你拼尽全力救出了一个<span class="npc">被困的婴儿</span>。婴儿的祖母泣不成声，将一把银锁塞到你手里。',choices:[
    {text:'收下长命锁',effect:{constitution:10,sanity:5,karma:8},item:'chang_ming_suo',log:'"这是我们家祖传的长命锁，保平安的！恩人你一定要收下！"老人家跪在泥水里不肯起来。'},
    {text:'推辞不受',effect:{karma:10},log:'你把锁还给老人家："留给孩子吧，我不需要。"'}]},

  {itemGive:'jian_ya_hu_lu',itemRarity:'uncommon',trigger:{minAge:20,maxAge:40,cultivation:25},text:'你在鬼市的角落发现一个<span class="npc">卖杂货的老鬼</span>，他手里摇着一个尖牙状的小葫芦。"嘿嘿，这葫芦可是好东西，专门储存阳寿丹，五行不侵。"',choices:[
    {text:'用灵石交换',effect:{wealth:-15,constitution:8},item:'jian_ya_hu_lu',log:'老鬼把葫芦扔给你："李志以前用的，后来不知怎的流到了鬼市。你小子运气不错。"'},
    {text:'不和鬼做生意',effect:{},log:'你转身就走。和鬼打交道，总觉得不安心。'}]},

  {itemGive:'tong_qian_mian_zhao',itemRarity:'uncommon',trigger:{minAge:16,maxAge:35,cultivation:20},text:'一个<span class="npc">神秘的赊刀人</span>拦住了你的去路。他什么也不说，只是递过来一张铜钱串成的面罩。"戴上它，没人能认出你。"',choices:[
    {text:'戴上铜钱面罩',effect:{sanity:15,cultivation:5},item:'tong_qian_mian_zhao',log:'道光通宝的铜钱贴在脸上冰冰凉凉的。你发现周围人的目光直接滑过你，好像你不存在一样。'},
    {text:'拒绝陌生人的东西',effect:{},log:'你警惕地后退几步。赊刀人也不强求，转身消失在人群中。'}]},

  {itemGive:'bao_jiang_he_tao',itemRarity:'uncommon',trigger:{minAge:20,maxAge:45,cultivation:30},factionReq:'nanjiang',text:'<span class="npc">拓跋丹青</span>把你叫到密室，从怀中取出一对包浆核桃。核桃表面油光锃亮，但细看之下，上面刻满了细如蚁足的禁制符文。',choices:[
    {text:'接过包浆核桃',effect:{cultivation:15,sanity:10},item:'bao_jiang_he_tao',log:'"这对核桃是禁制法器，可困敌封邪祟。关键时刻能救你一命。"拓跋丹青语重心长。'},
    {text:'问他为什么给自己',effect:{connections:5},log:'拓跋丹青叹了口气："因为我怕你以后会遇到我都帮不了的事。"'}]},

  // ===== 稀有道具获取 (Rare) =====
  {itemGive:'dao_ling',itemRarity:'rare',trigger:{minAge:18,maxAge:40,cultivation:30},factionReq:'daomen',text:'道门的<span class="npc">长老</span>将你带到祖师堂后的密室。桌上放着一枚古朴的铃铛，长老面色凝重："这是<span class="itm">道铃</span>，可召唤游老爷。但代价极大——沟通需口含泥土，指使一次耗三月阳寿。"',choices:[
    {text:'郑重接过道铃',effect:{cultivation:20,sanity:-10,connections:8},item:'dao_ling',log:'铃铛入手的瞬间，你听到了一声幽远的叹息。仿佛有什么东西，在很远很远的地方，回应了你。'},
    {text:'这代价太大了',effect:{sanity:5},log:'你摇了摇头。三月阳寿换一次指使，这买卖太亏了。'}]},

  {itemGive:'pian_jing',itemRarity:'rare',trigger:{minAge:20,maxAge:45,cultivation:35},factionReq:'luojiao',text:'罗教的<span class="npc">教主</span>在深夜将你唤入密室，案上放着一本泛黄的经书。"这是<span class="itm">骗经</span>，罗教骗术幻术的根基。学了它，你能混淆天地视听。但因果也会缠上你。"',choices:[
    {text:'翻开骗经',effect:{cultivation:20,comprehension:15,karma:-5},item:'pian_jing',log:'经文入目的刹那，你觉得世界变得不真实了。真假之间的界限模糊了，这既是力量，也是诅咒。'},
    {text:'合上经书',effect:{karma:3},log:'你把经书推了回去。欺天之术，终究不是正道。'}]},

  {itemGive:'zi_sui_jian',itemRarity:'rare',trigger:{minAge:20,maxAge:45,cultivation:35},factionReq:'bingjia',text:'兵家的<span class="npc">教官</span>把你带到兵器库最深处。一把黑柄紫绫的长剑悬挂在墙上，剑身散发着浓烈的煞气，你还没靠近就感觉到了压迫性的杀意。',choices:[
    {text:'拔出紫穗剑',effect:{cultivation:25,constitution:10,sanity:-10},item:'zi_sui_jian',log:'剑离鞘的瞬间，你的心神被一股暴戾的杀意冲击。教官沉声道："控制住它，别让它控制你。"'},
    {text:'这煞气太重了',effect:{sanity:3},log:'你后退一步。这把剑的杀意太重，你还没准备好。'}]},

  {itemGive:'jin_qiao_miao_jing',itemRarity:'rare',trigger:{minAge:22,maxAge:50,cultivation:40},text:'你在一座荒废的古寺中发现了一间密室。密室中央的莲花台上放着一卷金光闪闪的经文——<span class="itm">金桥妙经</span>。传说感悟此经可以<span class="mys">生死人、肉白骨</span>。',choices:[
    {text:'取走金桥妙经',effect:{cultivation:25,comprehension:20,karma:10},item:'jin_qiao_miao_jing',log:'你翻开经文，每一个字都仿佛活了过来。这需要长期诵读才能领悟，但仅仅是开篇，就让你的修为有了精进。'},
    {text:'在此处诵读但不带走',effect:{comprehension:10,karma:5},log:'你在莲花台前打坐诵读，虽未带走经文，但已有所悟。'}]},

  {itemGive:'she_li_zi',itemRarity:'rare',trigger:{minAge:20,maxAge:45,cultivation:35},text:'一场暴雨冲垮了山体，露出了一座古老的<span class="mys">地下佛窟</span>。你进入其中，在最深处的佛像腹中发现了一颗晶莹剔透的舍利子。',choices:[
    {text:'将舍利子以无根水服下',effect:{comprehension:25,sanity:15,cultivation:10},item:'she_li_zi',log:'舍利子入腹的瞬间，你的眼前一黑——然后，你发现自己虽然什么都看不见，却能清晰地感知到周围一切。这就是心眼通。'},
    {text:'供奉在佛像前',effect:{karma:10,sanity:5},log:'你把舍利子放回佛像前，恭敬地磕了三个头。有些东西，不该随便拿。'}]},

  {itemGive:'huo_ao_zhen_jing',itemRarity:'rare',trigger:{minAge:18,maxAge:40,cultivation:30},factionReq:'aojing',text:'袄景教的<span class="npc">祆正</span>将你带到圣火殿。殿中央的圣火熊熊燃烧，火中隐约可见一卷经文。"这是<span class="itm">火袄箴经</span>。蜡油烧伤口以轻伤代重伤，但施法需有怜悯之心。"',choices:[
    {text:'伸手入火取经',effect:{cultivation:20,constitution:10,karma:-8},item:'huo_ao_zhen_jing',log:'火焰灼痛了你的手，但经文完好无损。翻开第一页，上面写着："以痛止痛，以伤疗伤。"'},
    {text:'还不是时候',effect:{},log:'你望着圣火，觉得自己的修为还不够。'}]},

  {itemGive:'wu_gou_yu_pai',itemRarity:'rare',trigger:{minAge:25,maxAge:50,cultivation:40},text:'你在一处灵气充沛的山谷中打坐，忽然感应到地下有异物。挖开泥土，一块温润的<span class="itm">玉牌</span>出现在眼前，上面刻着"无垢"二字，散发着纯净的光芒。',choices:[
    {text:'将玉牌收入怀中',effect:{constitution:15,karma:10,qiyun:8},item:'wu_gou_yu_pai',log:'这是无垢阳寿玉牌，不沾因果的纯净续命之物。你感觉自己的寿元仿佛延长了一些。'},
    {text:'原封不动埋回去',effect:{karma:5},log:'你把玉牌埋了回去。无功不受禄。'}]},

  {itemGive:'xuan_guang_jing',itemRarity:'rare',trigger:{minAge:20,maxAge:45,cultivation:35},text:'<span class="npc">玄牝</span>在你完成一次危险的任务后，从袖中取出一面小巧的圆镜。"这是<span class="itm">旋光镜</span>，能让你掌握全局战局。以后遇到大阵仗，用得上。"',choices:[
    {text:'收下旋光镜',effect:{comprehension:18,connections:10,cultivation:10},item:'xuan_guang_jing',log:'镜面转动时，你看到了周围方圆数里的一切。山川地形、人员布局，尽在掌握之中。'},
    {text:'这太贵重了',effect:{connections:5},log:'你推辞再三。玄牝笑了笑："那就当我借你的。"'}]},

  {itemGive:'ren_she_ru_yi',itemRarity:'rare',trigger:{minAge:22,maxAge:45,cultivation:30},text:'<span class="npc">冯二牛</span>找到你，神色有些古怪。他从包袱里取出一柄如意，通体暗红，表面凹凸不平。"这是<span class="itm">人舌如意</span>...用心素舌头炼制的。你别嫌恶心，挥动一下就能让目标陷入迷惘。"',choices:[
    {text:'接过人舌如意',effect:{cultivation:20,comprehension:12,sanity:-8},item:'ren_she_ru_yi',log:'如意入手的瞬间，你隐约听到了无数人的窃窃私语。这东西虽然邪门，但确实强力。'},
    {text:'这东西太邪了',effect:{sanity:3},log:'你看着那通体暗红的如意，实在下不了手。冯二牛也没勉强。'}]},

  // ===== 史诗道具获取 (Epic) =====
  {itemGive:'xing_su_jian',itemRarity:'epic',trigger:{minAge:30,maxAge:60,cultivation:60},text:'你在一座雷击不断的<span class="mys">山巅</span>上发现了一把插在巨石中的长剑。每一道雷电劈下，剑身都会发出耀眼的光芒。剑柄上刻着"<span class="itm">星宿</span>"二字——这是大梁国师<span class="npc">皇甫天罡</span>之剑。',choices:[
    {text:'拔出星宿剑',effect:{cultivation:40,comprehension:15,sanity:-10},item:'xing_su_jian',log:'你双手握住剑柄，用尽全力拔出。剑出石的瞬间，天空炸响一道惊雷，你的身体被电流贯穿——但你没有倒下。星宿剑认主了。'},
    {text:'这剑太危险了',effect:{comprehension:5},log:'你在远处观望了许久，最终还是没敢上前。引雷之剑，非常人能驾驭。'}]},

  {itemGive:'long_lin_jia',itemRarity:'epic',trigger:{minAge:25,maxAge:55,cultivation:50},text:'你在龙脉之地的地下宫殿中，发现了一副完整的铠甲。铠甲鳞片泛着幽蓝色的光泽，每一片都刻满了细密的纹路——这是<span class="itm">龙鳞甲</span>，龙鳞卫的专属铠甲。',choices:[
    {text:'穿上龙鳞甲',effect:{constitution:25,cultivation:20,qiyun:10},item:'long_lin_jia',log:'铠甲贴上身体的瞬间，你感到一股磅礴的气运涌入体内。龙脉之力与你融为一体，你甚至可以免疫先天一炁的侵蚀。'},
    {text:'这是龙鳞卫之物，不该擅取',effect:{karma:5},log:'你退了出去。龙鳞卫的遗物，拿了恐怕会惹来麻烦。'}]},

  {itemGive:'tai_a_jian',itemRarity:'epic',trigger:{minAge:30,maxAge:60,cultivation:55},text:'在一处上古遗迹的最深处，你发现了一把被封印在寒冰中的古剑。剑身上铭刻着两个古篆——"<span class="itm">泰阿</span>"。即使隔着冰封，你都能感受到剑上煞气的压迫。',choices:[
    {text:'破冰取剑',effect:{cultivation:45,constitution:10,sanity:-15},item:'tai_a_jian',log:'冰碎的瞬间，一股凛冽的煞气席卷方圆百米。你强忍着恶心握住了剑柄——上古名剑泰阿，斩妖除魔，无坚不摧。'},
    {text:'这煞气会吞噬心智',effect:{comprehension:5},log:'你看了看那把剑，又看了看自己的手。算了，还是等修为再高些再来。'}]},

  {itemGive:'pan_guan_bi',itemRarity:'epic',trigger:{minAge:28,maxAge:55,cultivation:55},text:'你在一处文昌阁的废墟中，发现了一支形如毛笔的法器，笔尖散发着莹莹星光。旁边的石碑上刻着：<span class="mys">"魁星点斗，判官批命。"</span>这是<span class="npc">诸葛渊</span>曾经使用过的<span class="itm">判官笔</span>。',choices:[
    {text:'拿起判官笔',effect:{cultivation:35,comprehension:20},item:'pan_guan_bi',log:'笔入手的瞬间，你的指尖传来一阵刺痛。星光沿着你的经脉游走，最后汇聚在眉心。你隐约觉得，用这支笔点一下目标，就能令其失去知觉。'},
    {text:'这是诸葛渊的遗物，不敢妄取',effect:{sanity:5},log:'你恭敬地行了一礼便退了出去。诸葛渊的法器，岂是你能随便碰的。'}]},

  {itemGive:'yin_jian',itemRarity:'epic',trigger:{minAge:25,maxAge:55,cultivation:50},text:'你在一座武财神庙中祈福时，神像忽然<span class="mys">金光大盛</span>。一把银色的锏从神像手中飞出，稳稳落在你面前。庙祝大惊失色："这...这是<span class="itm">银锏</span>，武财神的法器！"',choices:[
    {text:'恭敬接过银锏',effect:{cultivation:30,wealth:20,constitution:10},item:'yin_jian',log:'银锏入手，你感觉到无数碎银在锏身上汇聚成巨力。这把锏可破一切甲胄——武财神选择了你。'},
    {text:'跪拜后退出',effect:{wealth:10,karma:5},log:'你磕了三个响头，然后退出庙门。神明赐予之物，你受之有愧。'}]},

  // ===== 传说道具获取 (Legendary) =====
  {itemGive:'xin_pan_ji_gu_jian',itemRarity:'legendary',trigger:{minAge:35,maxAge:70,cultivation:80},text:'你在两界夹缝中跋涉时，忽然看到一把悬浮在虚空中的长剑。剑身由<span class="mys">骨骼</span>铸成，散发着令人窒息的威压。你认出来了——这是<span class="npc">诸葛渊</span>以自己的脊骨炼成的<span class="itm">太虚剑</span>。剑身上残留的意识碎片向你传递着信息："<span class="mys">拿起我...打开两界裂隙...</span>"',choices:[
    {text:'握住心蟠脊骨剑',effect:{cultivation:60,comprehension:25,sanity:-30},item:'xin_pan_ji_gu_jian',log:'你的手触碰到剑柄的瞬间，两界的裂隙在你眼前撕裂开来。诸葛渊的记忆如洪流般涌入你的脑海——阴阳斗姥、太虚剑意、两界穿梭...你几乎要被这些信息淹没。但你挺住了。'},
    {text:'这超出了你的承受范围',effect:{comprehension:10},log:'你后退了一步。诸葛渊的脊骨剑，那是连季灾都忌惮的东西。你还没有那个资格。'}]},

  {itemGive:'xin_su_ji_gu_jian',itemRarity:'legendary',trigger:{minAge:30,maxAge:65,cultivation:70},check:'xinsu',text:'你在一次濒死体验中，灵魂短暂脱离了肉身。在灵魂世界中，你看到了一把由<span class="mys">脊骨</span>凝成的剑，正在等待着你。一个声音在你耳边响起："<span class="mys">心素体质者，唯你能驾驭此剑。</span>"',choices:[
    {text:'以灵魂握住脊骨剑',effect:{cultivation:50,constitution:15,sanity:-25},item:'xin_su_ji_gu_jian',log:'剑与你的心素体质产生了共鸣。你发现自己可以扭曲物体的形态，近战控制力大幅增强。但代价是——你的心智在一点点被侵蚀。'},
    {text:'拒绝这份力量',effect:{sanity:10},log:'你的灵魂后退了。有些力量，不是你该碰的。'}]},

  {itemGive:'liu_yao_tong_shu',itemRarity:'legendary',trigger:{minAge:40,maxAge:80,cultivation:85},text:'你在诸葛渊的秘密洞府中发现了一本残破的<span class="itm">老皇历</span>。封面上写着"<span class="mys">六曜通书</span>"四个字，字迹歪歪扭扭，像是小孩写的。但你知道，这本书的真正能力是——<span class="mys">言出法随，写什么就发生什么</span>。',choices:[
    {text:'带走六曜通书',effect:{cultivation:55,comprehension:30,sanity:-20},item:'liu_yao_tong_shu',log:'你翻开第一页，上面只写了一句话："你翻开了这本书。"然后你意识到——这句话是在你翻开书的那一刻自动出现的。这本书记录着一切，也可以改写一切。'},
    {text:'这种力量太恐怖了',effect:{comprehension:15},log:'你把书放了回去。改写现实的力量，那是天道的领域。你不想沾染。'}]},
];

// ========== 道具相关剧情事件（持有道具触发） ==========
export const ITEM_STORY_EVENTS = [
  // ===== 普通道具实用场景 (Common) =====
  // 1. 山鬼花钱自动辟邪
  {itemReq:'shan_gui_hua_qian',trigger:{minAge:12,maxAge:35},text:'夜深人静，你忽然被一股阴寒的气息惊醒。一个<span class="danger-text">小邪祟</span>正趴在你胸口，吸取你的阳气。就在你惊恐万分时，挂在脖子上的<span class="itm">山鬼花钱</span>忽然发出赤红的光芒，邪祟惨叫一声被弹飞了出去！',choices:[
    {text:'检查山鬼花钱',effect:{sanity:5,qiyun:3},log:'花钱上的红绳烫得你手指发疼，但邪祟已经消散了。看来这东西确实管用。'},
    {text:'追出去看看',effect:{cultivation:5,sanity:-3},log:'你追到门外，邪祟已经不见了。但你隐约看到远处还有几个黑影在游荡——这地方不安全。'}]},

  // 2. 润血丹止血救命
  {itemReq:'run_xue_dan',trigger:{minAge:14,maxAge:40},text:'你被一块从山上滚落的碎石击中，大腿被划开了一道长长的口子，<span class="danger-text">鲜血</span>止不住地往外涌。你头晕目眩，意识在模糊。',choices:[
    {text:'赶紧用润血丹',effect:{constitution:10,sanity:3},log:'你颤抖着从怀里摸出<span class="itm">润血丹</span>敷在伤口上。丹药化开的瞬间，伤口就像被无形的线缝合了一样，血立刻止住了。'},
    {text:'撕衣服包扎',effect:{constitution:-5,sanity:-3},log:'你撕下衣角勉强包扎住了伤口，但血还在渗。你得尽快找个地方休息。'}]},

  // 3. 辟谷丹赶路充饥
  {itemReq:'bi_gu_dan',trigger:{minAge:14,maxAge:40},text:'你已经在荒野中走了三天，带的干粮早就吃完了。你的肚子咕咕直叫，双腿像灌了铅一样沉重。远处隐约能看到一座镇子，但至少还有半天的路程。',choices:[
    {text:'服用辟谷丹',effect:{constitution:5,cultivation:3},log:'你从怀中取出<span class="itm">辟谷丹</span>服下。一股温暖的气流从丹田散开，饥饿感瞬间消失了。你脚步轻快地朝镇子走去。'},
    {text:'找野果充饥',effect:{constitution:-3},log:'你在路边找了些野果勉强填饱肚子，但总觉得没什么力气。'}]},

  // 4. 匿迹符箓隐匿行踪
  {itemReq:'ni_ji_fu',trigger:{minAge:14,maxAge:40},text:'一群<span class="danger-text">山匪</span>正在搜山，你听到他们说要抓一个过路的修士——就是你。树林里到处都是火把的光芒，脚步声越来越近。',choices:[
    {text:'激活匿迹符箓',effect:{sanity:8,qiyun:5},log:'你将<span class="itm">匿迹符箓</span>贴在额头上，整个人的气息瞬间消散。山匪从你身边走过，却像完全看不到你一样。'},
    {text:'往山上跑',effect:{constitution:-5,sanity:-5},log:'你拼命往山上跑，树枝刮得你满身是伤。好在你跑得够快，总算甩掉了追兵。'}]},

  // 5. 五脏定身符箓定身救人
  {itemReq:'wu_zang_fu',trigger:{minAge:16,maxAge:45,cultivation:10},text:'你的同伴忽然<span class="danger-text">双目翻白</span>，浑身抽搐倒在地上。你感应到有一股邪气正在侵入他的身体——他被附身了！同伴的嘴里发出不属于他的声音："让开...这具身体归我了..."',choices:[
    {text:'用五脏定身符箓',effect:{cultivation:8,connections:10,karma:5},log:'你将<span class="itm">五脏定身符箓</span>拍在同伴的胸口，符箓钻入体内裹住五脏。邪气被封在体内无法运转，同伴的意识慢慢恢复了。他醒来后对你千恩万谢。'},
    {text:'试着用自己的修为逼出邪气',effect:{cultivation:5,constitution:-8,sanity:-5},log:'你将手掌贴在同伴背上输入真气。邪气被逼退了，但你自己也被反噬，吐了一口血。'}]},

  // ===== 精良道具事件 (Uncommon) =====
  // 1. 黑漆棺材驱散煞气
  {itemReq:'hei_qi_guan_cai',trigger:{minAge:18,maxAge:45,cultivation:15},text:'你遇到一个浑身缠满<span class="danger-text">煞气</span>的<span class="npc">年轻人</span>。他痛苦地蜷缩在路边，黑色的雾气从他身上不断涌出。"救...救我..."他虚弱地求助。',choices:[
    {text:'打开黑漆棺材',effect:{cultivation:10,karma:8,connections:10},log:'你取出<span class="itm">黑漆棺材</span>，对准年轻人打开棺盖。三息之间，煞气如被巨力吸引，全部涌入棺材之中。年轻人长舒一口气瘫倒在地："恩人...恩人！"'},
    {text:'不敢贸然接触',effect:{karma:-3},log:'煞气太重了，你怕伤及自身。年轻人绝望的眼神让你有些愧疚。'}]},

  // 2. 八卦镜反弹邪术
  {itemReq:'ba_gua_jing',trigger:{minAge:20,maxAge:50,cultivation:20},text:'深夜独行，一个<span class="danger-text">披头散发的女鬼</span>忽然出现在你面前，张口就向你喷出一道黑色的<span class="danger-text">邪光</span>！',choices:[
    {text:'举起八卦镜',effect:{cultivation:15,sanity:5,qiyun:5},log:'你下意识举起<span class="itm">八卦镜</span>，镜面射出一道耀眼的白光，将邪光原封不动地反弹回去！女鬼被自己的邪术击中，惨叫着化为一缕黑烟消散了。'},
    {text:'就地翻滚躲避',effect:{sanity:-10,constitution:-5},log:'你堪堪躲过邪光，但余波还是擦到了你。你感到一阵剧烈的头痛。'}]},

  // 3. 铜钱面罩隐藏身份（心素专用）
  {itemReq:'tong_qian_mian_zhao',check:'xinsu',trigger:{minAge:18,maxAge:50,cultivation:15},text:'一群<span class="npc">修士</span>忽然包围了你。为首的人指着你说："他身上的气息不对——是<span class="danger-text">心素体质</span>！抓住他，心素的身体可是炼制法器的绝佳材料！"',choices:[
    {text:'戴上铜钱面罩',effect:{sanity:15,cultivation:5,qiyun:5},log:'你迅速戴上<span class="itm">铜钱面罩</span>。铜钱贴上面部的瞬间，你的气息被完全遮蔽。那群修士面面相觑："奇怪...刚才明明感应到了..."他们搜索了一圈，从你身边走过却毫无察觉。'},
    {text:'拼死突围',effect:{constitution:-10,sanity:-8,cultivation:8},log:'你奋力打倒两个人杀出一条血路。但你知道——你的心素身份已经暴露了，以后得更加小心。'}]},

  // 4. 包浆核桃破阵
  {itemReq:'bao_jiang_he_tao',trigger:{minAge:22,maxAge:50,cultivation:25},text:'你误入了一个<span class="danger-text">邪修</span>布下的<span class="danger-text">困杀阵</span>。四周的雾气越来越浓，你感到方向感在消失，体力也在不断流失。再这样下去，你会被活活困死在阵中。',choices:[
    {text:'祭出包浆核桃',effect:{cultivation:15,sanity:10,comprehension:8},log:'你将<span class="itm">包浆核桃</span>投掷出去。核桃上的禁制符文亮起，两颗核桃在空中旋转碰撞，释放出强烈的禁制之力。困杀阵的节点被逐一击破，雾气散去，你重见天日。'},
    {text:'静坐感悟阵法破绽',effect:{comprehension:10,sanity:-8,constitution:-5},log:'你盘腿坐下闭目感悟。花了三天三夜，你终于找到了阵法的薄弱点，强行突破了出去。但你已经筋疲力尽。'}]},

  // 5. 尖牙葫芦储存丹药
  {itemReq:'jian_ya_hu_lu',trigger:{minAge:22,maxAge:50,cultivation:20},text:'你得到了一批珍贵的<span class="itm">阳寿丹</span>，但它们在空气中迅速溶解——五行之气在侵蚀丹药。眼看着丹丸一粒粒化为乌有。',choices:[
    {text:'赶紧装进尖牙葫芦',effect:{constitution:12,wealth:10,cultivation:5},log:'你连忙将剩余的阳寿丹塞进<span class="itm">尖牙葫芦</span>。葫芦五行不侵的特性完美保存了丹药。以后你再也不用担心丹药消散了。'},
    {text:'当场全部服下',effect:{constitution:15,sanity:-5},log:'你来不及多想，把所有丹丸一股脑塞进嘴里。药力太猛，你的身体一时承受不住，但至少没浪费。'}]},

  // ===== 稀有道具剧情 (Rare) =====
  // 1. 道铃召唤游老爷
  {itemReq:'dao_ling',trigger:{minAge:22,maxAge:55,cultivation:30},text:'你遇到了一个棘手的问题——一座村庄被<span class="danger-text">厉鬼</span>缠上了，每夜都有人死去。你的修为不足以独自对付这只厉鬼。你看着手中的<span class="itm">道铃</span>，犹豫着是否该用它。',choices:[
    {text:'摇响道铃召唤游老爷',effect:{cultivation:20,karma:10,connections:15,constitution:-8},log:'你口含泥土，摇响道铃。一个幽远的声音在耳边响起——游老爷来了。他只用一指就将厉鬼镇压。但代价是三月阳寿，你感到生命力在流逝。村民们对你感恩戴德。',setFlag:'dao_ling_used'},
    {text:'靠自己想办法',effect:{cultivation:10,sanity:-10,constitution:-5},log:'你花了七天七夜，用尽一切手段才将厉鬼封印。虽然成功了，但你也差点搭上自己的命。'}]},

  // 2. 紫穗剑引来兵家高手
  {itemReq:'zi_sui_jian',trigger:{minAge:22,maxAge:50,cultivation:35},text:'一个身穿铁甲的<span class="npc">兵家高手</span>找到了你。他一眼就认出了你手中的<span class="itm">紫穗剑</span>："这把剑...你是从兵器库里拿的？我乃兵家<span class="npc">铁狮子</span>，我要和你决一剑！只有胜者才有资格持此剑。"',choices:[
    {text:'应战',effect:{cultivation:20,constitution:-8,comprehension:10},log:'你与铁狮子激战三百回合。紫穗剑的煞气在战斗中不断增强，你险胜一招。铁狮子收剑抱拳："好剑法！这剑跟对人了。"从此你在兵家的名声大振。',combat:60},
    {text:'让出紫穗剑',effect:{karma:5,sanity:5,cultivation:-5},log:'你将紫穗剑双手奉上。铁狮子接过剑，沉默良久，又还给了你："你不贪恋法器，这份心性反而说明你配得上它。好好用。"'}]},

  // 3. 流珠法眼发现秘境
  {itemReq:'liu_zhu_fa_yan',trigger:{minAge:25,maxAge:55,cultivation:35},text:'你行走在一片看似普通的山谷中。<span class="itm">流珠法眼</span>忽然在你眉心剧烈震动——你看到了<span class="mys">常人看不到的东西</span>：山壁上隐藏着一道门，门后是一个巨大的洞府，灵气浓郁得几乎凝成了雾。',choices:[
    {text:'进入秘境修炼',effect:{cultivation:30,comprehension:20,sanity:-5},log:'你推开隐形的石门走了进去。洞府中有一座天然的灵池，你在池边打坐三日，修为精进了一大截。这就是流珠法眼的妙用——看透虚妄，发现隐秘。'},
    {text:'记下位置以后再来',effect:{comprehension:10,qiyun:5},log:'你在山壁上做了个记号。这种秘境不知道还有多少陷阱，贸然进去太危险了。'}]},

  // 4. 七星铜钱剑镇凶宅
  {itemReq:'qi_xing_tong_qian_jian',trigger:{minAge:20,maxAge:50,cultivation:30},text:'路过一座<span class="danger-text">凶宅</span>，你感应到里面邪气冲天。当地百姓苦不堪言，有人说这宅子里住着一只<span class="danger-text">百年老鬼</span>。你腰间的<span class="itm">七星铜钱剑</span>忽然自己嗡鸣起来，铜钱碰撞发出清脆的声响。',choices:[
    {text:'持剑入宅除邪',effect:{cultivation:25,karma:12,connections:15,sanity:-8},log:'你拔出七星铜钱剑，一百八十四枚古钱绽放金光。老鬼现形后，你以铜钱剑布下七星阵，将老鬼彻底超度。百姓们奔走相告，你成了远近闻名的除邪人。'},
    {text:'绕道而行',effect:{},log:'你按住嗡鸣的铜钱剑，选择绕路走。不是所有的事都需要你出手。'}]},

  // ===== 史诗道具独立支线 (Epic) =====
  // 1. 大千录献祭线 - 第一阶段
  {itemReq:'da_qian_lu',trigger:{minAge:28,maxAge:60,cultivation:40},text:'深夜，<span class="itm">大千录</span>忽然自己翻开了。书页上的文字像蛇一样扭动，一个低沉的声音从书中传出："<span class="mys">献上一指，我教你第二登阶...</span>"你看到书页上浮现出一种强大的功法——但代价是你的一根手指。',choices:[
    {text:'咬牙斩下小指献祭',effect:{cultivation:25,constitution:-10,sanity:-8},log:'你一刀斩下左手小指，鲜血滴在大千录上。书页贪婪地吸收了血液，强大的功法直接灌入你的脑海。你的修为暴涨，但失去手指的痛楚让你差点昏过去。',setFlag:'daqianlu_whisper'},
    {text:'抵抗诱惑合上书',effect:{sanity:-15},log:'你强忍着功法的诱惑，用力合上了大千录。但那个声音还在你脑海中回荡...你开始怀疑自己的决定。',setFlag:'daqianlu_whisper'}]},

  // 大千录献祭线 - 第二阶段
  {itemReq:'da_qian_lu',flagReq:'daqianlu_whisper',trigger:{minAge:32,maxAge:65,cultivation:50},text:'一个身着火袄的<span class="npc">祆景教长老</span>找到了你。他一眼就认出了你怀中的<span class="itm">大千录</span>："你就是大千录的新持有者？我可以教你第二登阶的完整功法——但你得替祆景教办一件事。"',choices:[
    {text:'答应他',effect:{cultivation:30,comprehension:15,karma:-10},log:'长老将第二登阶的功法倾囊相授。你的实力突飞猛进，但你也被卷入了祆景教的阴谋之中。',setFlag:'daqianlu_stage2'},
    {text:'拒绝，自行参悟',effect:{comprehension:20,cultivation:10},log:'你拒绝了长老。大千录上的功法艰深晦涩，但你决定靠自己的悟性去参透它。'}]},

  // 2. 星宿剑引雷
  {itemReq:'xing_su_jian',trigger:{minAge:32,maxAge:65,cultivation:55},text:'一场<span class="mys">罕见的雷暴</span>席卷大地。你手中的<span class="itm">星宿剑</span>疯狂震动，剑身上的纹路亮起刺目的白光——它在<span class="mys">吸引雷电</span>！闪电一道接一道劈向你，大地在你脚下龟裂。',choices:[
    {text:'以身引雷，以雷淬体',effect:{cultivation:30,constitution:-15,comprehension:15},log:'你将星宿剑高举过顶，一道巨雷直劈而下！雷电贯穿你的全身，你的经脉被烧灼殆尽又在瞬间重生。剧痛过后，你发现自己的修为突破了一个全新的境界。'},
    {text:'将剑插入地面导雷',effect:{comprehension:15,cultivation:10},log:'你将星宿剑插入地面，雷电顺着剑身导入大地。你安然无恙，但也错过了以雷淬体的机会。不过看着雷电在剑身上游走，你对雷法有了更深的理解。'}]},

  // 3. 泰阿剑剑灵试炼
  {itemReq:'tai_a_jian',trigger:{minAge:30,maxAge:60,cultivation:50},text:'你在打坐时，<span class="itm">泰阿剑</span>忽然自行出鞘。一个身穿古甲的<span class="mys">半透明身影</span>从剑身中浮现——是泰阿剑的剑灵。"<span class="mys">持剑者，你的心志配得上这把剑吗？</span>"剑灵举起一把虚幻的长剑指向你："<span class="mys">接我三剑。</span>"',choices:[
    {text:'迎上去接剑',effect:{cultivation:35,constitution:-10,comprehension:15},log:'剑灵的三剑一剑比一剑凶猛。第一剑你勉强挡住，第二剑你被击退十步，第三剑你被打得吐血——但你没有倒下。剑灵微微点头："<span class="mys">你通过了。</span>"泰阿剑的煞气不再排斥你，你与它彻底融为一体。',combat:80},
    {text:'单膝跪地表示敬意',effect:{comprehension:20,karma:5},log:'你没有接剑，而是跪在剑灵面前。剑灵沉默良久："你选择了谦逊...也是一种心志。"剑灵消散了，泰阿剑回到你手中，但你总觉得还差一步才能完全驾驭它。'}]},

  // 4. 龙鳞甲感应龙脉
  {itemReq:'long_lin_jia',trigger:{minAge:28,maxAge:60,cultivation:45},text:'穿着<span class="itm">龙鳞甲</span>赶路时，你忽然感到铠甲在剧烈震动。脚下的大地传来一阵低沉的脉动，像是巨兽的心跳。龙鳞甲的鳞片指引你往地下看——那里有一条<span class="mys">龙脉</span>。',choices:[
    {text:'沿着龙脉探索',effect:{cultivation:25,constitution:15,qiyun:10},log:'你顺着龙脉的脉动深入地下，在一个巨大的地下溶洞中找到了一处<span class="mys">龙脉交汇点</span>。龙鳞甲与龙脉产生了共鸣，磅礴的龙气涌入你的体内。你在这里打坐七日，修为突飞猛进。'},
    {text:'记下位置，不深入',effect:{comprehension:10,qiyun:5},log:'你在地面做了标记。龙脉之下可能有危险，还是等准备充分再来。'}]},

  // 5. 判官笔异动
  {itemReq:'pan_guan_bi',trigger:{minAge:30,maxAge:60,cultivation:50},text:'<span class="itm">判官笔</span>忽然从你的行囊中飞出，笔尖悬在空中自动书写。你凑近一看——它写下的是一个人的名字和生辰八字。你认出来了，这个人是附近一个横行乡里的<span class="danger-text">恶霸</span>。判官笔似乎在催促你——去点他。',choices:[
    {text:'持笔前去',effect:{cultivation:20,karma:8,connections:10},log:'你找到那个恶霸，以判官笔点在他眉心。恶霸当场昏倒，从此性情大变，不再为恶。乡民们以为是神明显灵，对你感激涕零。'},
    {text:'收起判官笔',effect:{comprehension:8,sanity:-5},log:'你将判官笔按回行囊。你不想被一支笔牵着鼻子走——即使它可能是对的。但笔尖的星光在行囊中持续闪烁，让你有些不安。'}]},

  // ===== 传说道具独立支线 (Legendary) =====
  // 1. 六曜通书 - 言出法随
  {itemReq:'liu_yao_tong_shu',trigger:{minAge:42,maxAge:80,cultivation:80},text:'你无意间翻开<span class="itm">六曜通书</span>，随手在空白页上写了一句"<span class="mys">明日天晴</span>"。第二天——真的放晴了。连续暴雨七天后的突然放晴，不是巧合。你意识到这本书的力量远超你的想象，<span class="danger-text">你写什么，它就会发生</span>。',choices:[
    {text:'写下"我的修为大增"',effect:{cultivation:35,sanity:-15,karma:-10},log:'笔落纸上的瞬间，你感到一股洪流般的力量涌入体内。你的修为确实大增了——但你也感到了一股说不清的恐惧。这种力量太容易让人上瘾了。',setFlag:'liuyao_awakened'},
    {text:'合上书，再也不随便写',effect:{sanity:10,comprehension:15},log:'你被这种力量吓到了。言出法随——这是天道的权柄，不是凡人该碰的。你小心翼翼地将六曜通书封存起来。',setFlag:'liuyao_awakened'}]},

  // 六曜通书 - 第二阶段
  {itemReq:'liu_yao_tong_shu',flagReq:'liuyao_awakened',trigger:{minAge:45,maxAge:85,cultivation:75},text:'一个实力深不可测的<span class="npc">修士</span>找到了你。他的眼神直直盯着你怀中的<span class="itm">六曜通书</span>："那本书...交出来。它不属于你，也不属于任何人。我追踪它已经两百年了。"',choices:[
    {text:'拒绝，准备战斗',effect:{cultivation:20,constitution:-10,sanity:-10},log:'你紧握六曜通书与他激战。他的实力远在你之上，但每当你濒临危险，六曜通书就自动翻开一页，现实被轻微扭曲，让你化险为夷。最终那修士负伤退去："你会后悔的...那本书会吞噬你。"',combat:100},
    {text:'与他谈判',effect:{connections:10,comprehension:15,wealth:-20},log:'你提出条件。经过漫长的谈判，你们达成了协议——你可以保留六曜通书，但承诺绝不用它改写他人的命运。他留下了一些修炼心得作为交换。'}]},

  // 2. 心蟠脊骨剑 - 诸葛渊记忆
  {itemReq:'xin_pan_ji_gu_jian',check:'xinsu',trigger:{minAge:35,maxAge:70,cultivation:70},text:'夜深人静时，<span class="itm">心蟠脊骨剑</span>忽然发出低沉的嗡鸣。你握住剑柄的瞬间，眼前一黑——你看到了<span class="mys">诸葛渊的记忆</span>。你看到他在两界裂隙中孤独地战斗，看到他以自己的脊骨铸成这把剑，看到他最后的眼神中既有决绝也有不舍。',choices:[
    {text:'深入感受记忆',effect:{cultivation:35,comprehension:25,sanity:-20},log:'你沉浸在诸葛渊的记忆中——阴阳斗姥之术、太虚剑意、两界穿梭的秘法...这些记忆如洪流般冲刷着你的意识。你的心素体质与脊骨剑产生了前所未有的共鸣。当你醒来时，你发现自己领悟了一丝太虚剑意。'},
    {text:'强行切断连接',effect:{sanity:5,comprehension:10},log:'你挣脱了记忆的漩涡。诸葛渊的记忆太沉重了，你还承受不住。但那些画面已经刻在了你的脑海中——你需要时间慢慢消化。'}]},

  // 3. 心浊画卷 - 画中世界
  {itemReq:'xin_zhuo_hua_juan',check:'xin_zhuo',trigger:{minAge:30,maxAge:70,cultivation:60},text:'你不小心碰到了<span class="itm">心浊画卷</span>的卷轴，它自动展开了。一股巨大的吸力从画卷中涌出——你的身体在被<span class="danger-text">拉进去</span>！你拼命抓住桌角，但吸力越来越强。你瞥了一眼画卷中的世界——那是一片宁静的山水田园，天空是永恒的黄昏色，远处有几个模糊的人影在走动。那是<span class="mys">诸葛渊创造的世界</span>。',choices:[
    {text:'放手，进入画中世界',effect:{cultivation:30,comprehension:25,sanity:-20},log:'你松开了手，身体被卷入画中。在画中世界里，时间的流逝变得很慢。你看到了被遗忘的人们在这里生活——他们失去了所有记忆，但看起来很平静。你在画中世界修炼了很久，当你找到出口回到现实时，外面只过了一天。但你的记忆也变得有些模糊了。'},
    {text:'拼命抵抗吸力',effect:{constitution:-8,sanity:-10,cultivation:10},log:'你拼尽全力抓住桌角，指甲都断了。最终画卷的吸力消退，卷轴重新卷起。你瘫在地上大口喘气——太危险了。但你也因此感悟到了心浊之力的一角。'}]},

  // 4. 心素脊骨剑共鸣
  {itemReq:'xin_su_ji_gu_jian',check:'xinsu',trigger:{minAge:32,maxAge:65,cultivation:65},text:'你在月圆之夜修炼时，<span class="itm">心素脊骨剑</span>忽然与你的心素体质产生了<span class="mys">完全共鸣</span>。你的意识扩散开来，你发现自己可以"看到"方圆百米内所有物体的内部结构——骨骼、经脉、甚至灵气的流向。',choices:[
    {text:'尝试用意识扭曲物体',effect:{cultivation:30,comprehension:15,sanity:-15},log:'你将意识集中在一块巨石上，用心素之力扭曲它的内部结构。巨石无声无息地碎裂了。你意识到这就是心素脊骨剑的真正力量——从内部瓦解一切。但过度使用让你的神志有些恍惚。'},
    {text:'收敛心神，慢慢适应',effect:{comprehension:20,cultivation:15},log:'你不敢贸然使用这种力量，而是慢慢感受共鸣带来的变化。你的感知力大幅提升，对战时能看透对手的弱点。'}]},

  // ========== 新增NPC事件（路人视角） ==========

  // --- 春小满（清风观药引） (year 5 ~ 30) ---
  {text:'你在<span class="loc">赵家村</span>附近听到几个妇人在嚼舌根——说<span class="fac">清风观</span>以前有个叫<span class="npc">春小满</span>的药引，浑身长毛，被自己亲爹卖给了<span class="npc">丹阳子</span>。"后来李火旺杀了丹阳子，那丫头活下来了。""活下来又怎样？她回去手刃了自己的亲生父亲——就那个把她卖掉的王八蛋。""啧，性子够烈的。""可不是，发誓一辈子不嫁人，谁追她她骂谁。连<span class="npc">高志坚</span>都被她拒了。"',
    trigger:{minAge:12,yearMin:5,yearMax:30},choices:[
    {text:'听妇人们继续议论',effect:{connections:3,sanity:-5},log:'"后来她加入了白莲教，说要保护更多像她一样的人。再后来……大战的时候，她和几万白莲教众一起献祭给了将相首。""献祭？""嗯。高志坚亲眼看着她死的——他们说那个皇帝当场就变了个人。"'},
    {text:'感慨一下她的命运',effect:{karma:5,sanity:-3},log:'被亲爹卖掉，被当药引关着，杀了亲爹，拒绝所有追求者，最后把自己献祭了——这种人生，比你听过的任何故事都狠'},
    {text:'不想掺和这些事',effect:{sanity:2},log:'清风观出来的人，一个比一个命苦'}]},

  // --- 兰花（坐忘道） (year 5 ~ 20) ---
  {text:'你在<span class="loc">鲁城</span>的酒馆里听到有人悄声议论一个叫<span class="npc">兰花</span>的女人。"原本是被买来的村妇，受尽侮辱折磨，后来被<span class="fac">坐忘道</span>的<span class="npc">红中</span>救了出来。""然后呢？""然后她就成了坐忘道的人——你以为被救就能走？她暗恋那个红中，可红中根本不是什么好人。"说话的人压低了声音："听说在<span class="danger-text">神山鬼之眼</span>那档子事里，她被红中亲手掐死了。死前还在告白。"',
    trigger:{minAge:12,yearMin:5,yearMax:20},choices:[
    {text:'追问红中是谁',effect:{comprehension:8,sanity:-8},log:'"红中？坐忘道的高层啊——脸上长着一张红中麻将牌的那个。据说有好几个红中，真真假假分不清。兰花跟的那个是真的还是假的，谁知道呢。反正人已经死了。"'},
    {text:'同情兰花的遭遇',effect:{karma:5,sanity:-5},log:'从受尽折磨的村妇到坐忘道的人，再被自己暗恋的人掐死——这世道，从头烂到尾'},
    {text:'不想听了',effect:{sanity:-2},log:'坐忘道的事你一个字都不想多听——那帮人的故事没有一个不让人恶心的'}]},

  // --- 洪大/赊刀人洪大（监天司赊刀人） (year 3 ~ 25) ---
  {text:'一个独臂的中年男人出现在<span class="loc">集市</span>上——旁人说这位就是<span class="fac">监天司</span>大名鼎鼎的<span class="npc">赊刀人洪大</span>。他本名洪大，据说是这一带最强的赊刀人，专门对付<span class="fac">坐忘道</span>那帮骗子。他浑身上下伤痕累累，那条断臂就是跟坐忘道的人拼命时丢的。',
    trigger:{minAge:12,yearMin:3,yearMax:25},choices:[
    {text:'壮着胆子上前搭话',effect:{connections:10,comprehension:5,sanity:-3},log:'洪大看了你一眼："小老百姓，别往邪祟堆里凑。看到有人请你猜谜、对对联、下棋——跑，越远越好。那是坐忘道的人在骗你。"他说完把一枚铜钱拍在你手心就走了'},
    {text:'远远观察',effect:{comprehension:5,sanity:-5},log:'洪大在集市上走了一圈，忽然一把抓住一个卖糖葫芦的——那人的脸瞬间裂开，露出了一张<span class="danger-text">麻将牌</span>的面孔。周围人尖叫着四散。洪大拔刀，一刀将那东西劈成两半'},
    {text:'赶紧溜',effect:{sanity:3},log:'监天司的人出现意味着附近有邪祟——你不想成为那个被波及的倒霉蛋'}]},

  // --- 舞狮宫（青丘地下·合之道） (year 5 ~ 18) ---
  {text:'<span class="loc">南疆</span>方向传来骇人的消息——有猎人在<span class="loc">青丘</span>地下洞穴里看到了<span class="npc">舞狮宫</span>。那不是什么表演舞狮的戏班子——是<span class="danger-text">一群群巨大的白色舞狮</span>在地下移动。每只舞狮里面不是两个人，而是<span class="danger-text">一大堆人和生物的集合体</span>，修炼一种叫<span class="mys">"合之道"</span>的功法——合舞万物，共享意识和身体。它们身上垂着白色的穗子，据说那些<span class="danger-text">白穗</span>才是本体，只要碰到你的皮肤就能扭曲你的器官。',
    trigger:{minAge:12,yearMin:5,yearMax:18},choices:[
    {text:'打听舞狮宫到底是什么',effect:{comprehension:10,sanity:-12},log:'"青丘地下的东西——你以为那些舞狮是人扮的？那是无数人和畜生融合在一起的怪物！它们能把任何门派的功法都吸收进去，变成自己的一部分。丹阳子以前还用过舞狮宫的五脏邪术——借五行命数人头替换五脏。那个猎人后来怎么了？他说自己的手「不是自己的了」，三天后整个人消失了"'},
    {text:'以后绝不去青丘',effect:{sanity:-5,constitution:3},log:'地底下藏着一群由无数生物融合而成的巨型舞狮——光想想就让人头皮发麻。那些白穗碰一下就能扭曲你的器官，谁敢去？'},
    {text:'连夜离远一点',effect:{wealth:-5,sanity:5},log:'跟青丘沾边的东西没一个正常的——地下住着舞狮宫，地上的中阴庙天天向死亡献祭。你决定离那片地方越远越好'}]},

  // --- 杨娜（现代世界/无生老母投影） (year 20 ~ 45) ---
  {text:'<span class="loc">上京城</span>街头出了件诡异的事——<span class="npc">李火旺</span>站在一个十字路口嚎啕大哭，喊着一个叫<span class="npc">"杨娜"</span>的名字。旁边的人吓得纷纷绕道，但你注意到他在对着<span class="danger-text">空气</span>说话，好像真的看得到什么人。"别走……你是真的……那个世界是真的……"他的声音嘶哑得不像人声。',
    trigger:{minAge:15,yearMin:20,yearMax:45},choices:[
    {text:'向旁人打听"杨娜"是谁',effect:{comprehension:12,sanity:-10},log:'"据说是李火旺在「另一个世界」认识的女人——你知道他一直说自己能看到两个世界吧？一个是咱们大梁，一个是……反正没人搞得清。那个杨娜就是他说的那个世界的人。更吓人的是，有修士说那个杨娜可能跟<span class="mys">无生老母</span>有关系——"说到这里那人不敢说了'},
    {text:'可怜他',effect:{karma:5,sanity:-5},log:'不管他是疯子还是什么，一个人对着空气哭成那样，总归是因为失去了什么。你在路边站了一会儿，看着他跪在地上抱着空气，嘴里叫着那个名字'},
    {text:'赶紧跑远',effect:{sanity:3},log:'李火旺发疯的时候你可不想在旁边——上次他发疯砍了三条街，监天司出动了二十个人才按住他'}]},

  // --- 申屠刚（跳大神/出马仙） (year 10 ~ 30) ---
  {text:'<span class="loc">阳城</span>郊外闹邪祟，请来了一个叫<span class="npc">申屠刚</span>的<span class="mys">跳大神</span>的人。他不是监天司的，也不是哪个大门派的——就是个民间的<span class="mys">出马仙</span>。但你亲眼看到他念了一段<span class="mys">帮兵决</span>，身上就附了一层诡异的气息，然后赤手空拳冲进了闹鬼的宅子。里面惨叫了半柱香的功夫，他浑身是血地走出来说："行了。"',
    trigger:{minAge:14,yearMin:10,yearMax:30},choices:[
    {text:'壮着胆子请教',effect:{connections:8,comprehension:10,sanity:-8},log:'申屠刚看了你一眼："跳大神这行，说好听了叫出马弟子，说难听了就是被仙家奴役一辈子。帮兵决请来的仙家会帮你打邪祟，但代价是你的十情——喜怒悲贪嗔痴惧爱恶，一点一点地被仙家吃掉。你看我像个有感情的人吗？"他面无表情地说完就走了'},
    {text:'远远观察他的手段',effect:{comprehension:8,sanity:-10},log:'你注意到申屠刚身边跟着一团<span class="danger-text">看不清的东西</span>——不是人，也不是鬼，像是一种寄生在他身上的"仙家"。他还有一种叫<span class="mys">养大祟</span>的手段，专门用来制衡那些不听话的仙家。跳大神的人都不简单'},
    {text:'不敢靠近',effect:{sanity:3},log:'被仙家奴役一辈子——光听着就够可怕了。你可不想跟这种人打交道'}]},

  // --- 月亮门 (year 15 ~ 35) ---
  {text:'最近<span class="loc">边境</span>一带流传着一个叫<span class="fac">月亮门</span>的新势力的消息。据说他们信奉<span class="mys">月亮</span>，行事诡谲无比——有人说他们是外来的邪教，有人说他们是被从另一个世界"入侵"过来的修士。唯一确定的是，<span class="danger-text">凡是月亮门出现过的地方，当地人都会忘记一些东西</span>。',
    trigger:{minAge:16,yearMin:15,yearMax:35},choices:[
    {text:'深入了解月亮门',effect:{comprehension:12,sanity:-15,cultivation:5},log:'你辗转打听到：月亮门的人修炼的不是大傩世界的道，而是一种叫<span class="mys">月相之术</span>的诡异法门。他们可以"偷走"别人的记忆、情感、甚至五感。更可怕的是，他们的首领据说能让整座城的人集体遗忘一件事'},
    {text:'检查自己有没有忘记什么',effect:{sanity:-8,comprehension:5},log:'你仔细回忆最近的事——好像都记得。但问题是，如果你真的忘了什么，你怎么知道自己忘了？这个想法让你一整晚都没睡着'},
    {text:'离月亮门远一点',effect:{sanity:3},log:'信什么不好信月亮——这世道怪事够多了'}]},

  // --- 崔米婆（坐忘道） (year 3 ~ 15) ---
  {text:'<span class="loc">阳城</span>郊外来了个老太婆，自称<span class="npc">崔米婆</span>，摆摊算命分文不收。排队的人从街头排到街尾——因为她算得<span class="danger-text">太准了</span>。你亲眼看到一个汉子被她说中了藏钱的地方，当场吓得脸色煞白。但有个老修士经过时冷笑了一声："<span class="fac">坐忘道</span>的骗术——她不是在算命，是在<span class="danger-text">骗你交出信息</span>。"',
    trigger:{minAge:10,yearMin:3,yearMax:15},choices:[
    {text:'去试试算命',effect:{wealth:-10,sanity:-12,comprehension:5},log:'崔米婆笑眯眯地拉着你的手，说了一串你的家事——全对。然后她问你："孩子，你信不信命是可以改的？"你下意识点了头。等你回过神来，已经站在城门口了，你不记得她后来说了什么，但你总觉得自己答应了什么'},
    {text:'听那个老修士的话',effect:{comprehension:8,sanity:-5},log:'老修士告诉你：坐忘道的人靠"骗"获取力量——每成功骗一个人，他们就能从斗姥那里换来一份非罡之力。崔米婆这种级别的骗修，一个人能骗一整座城'},
    {text:'不算命不凑热闹',effect:{sanity:3},log:'免费的东西最贵——你娘从小就教你这个道理'}]},

  // --- 人魈（邪祟） (year 5 ~ 30) ---
  {text:'<span class="loc">城外郊野</span>有猎户发现一件恐怖的事——林子里出现了<span class="danger-text">人魈</span>。那东西看起来像个人，但没有脸，身上挂满了树枝和泥巴。它会<span class="danger-text">模仿人的声音</span>喊你的名字。已经有三个进山砍柴的人失踪了——后来在树上找到了他们，被拧成了树枝的形状。',
    trigger:{minAge:10,yearMin:5,yearMax:30},choices:[
    {text:'跟着猎户远远看了一眼',effect:{sanity:-18,comprehension:8,cultivation:3},log:'你躲在灌木丛后面看到了——那个东西蹲在地上，穿着失踪的王大嫂的衣服，用王大嫂的声音喊着她儿子的名字。你捂住嘴不敢出声，浑身发抖。猎户拉着你跑了三里地才停下来'},
    {text:'告诉官府或监天司',effect:{connections:8,karma:5},log:'你跑去报了官。县令的脸一下子白了——他二话不说就往监天司发了急报。三天后来了两个赊刀人，进山之后一天一夜没出来。出来时浑身是血，只说了一句："处理了。别再进那片林子。"'},
    {text:'绝对不进那片山',effect:{sanity:-3},log:'你从小就知道：听到林子里有人叫你名字，千万别回头，千万别答应'}]},

  // --- 胡姬（狐妖） (year 8 ~ 25) ---
  {text:'<span class="loc">狐山</span>脚下的客栈来了个绝色女子，自称<span class="npc">胡姬</span>。她一出现，客栈里所有男人都看傻了——但老板娘狠狠打了自家男人一巴掌："<span class="danger-text">那是狐山下来的东西，看一眼少活三年！</span>"你注意到那女子经过的地方，花瓶里的花全开了，但她的影子……好像比她矮了一截。',
    trigger:{minAge:14,yearMin:8,yearMax:25},choices:[
    {text:'壮着胆子搭话',effect:{sanity:-15,connections:5,comprehension:8},log:'她朝你笑了一下——你的脑子瞬间变成了浆糊。等你回过神，已经是第二天早上了。你不记得昨晚说了什么做了什么，只记得她的笑容。老板娘说你昨晚自己一个人对着空椅子说了一夜的话'},
    {text:'低头不看',effect:{sanity:-3},log:'你死死盯着地面。你能闻到一股奇异的香味——像是深山里的兰花，又像是腐肉上的薄霜。你咬着嘴唇硬撑到她走了才敢抬头'},
    {text:'立刻离开客栈',effect:{sanity:5,wealth:-3},log:'你丢下饭钱就跑了。跑出半里地才觉得脑子清醒了——那种吸引力太不正常了。你发誓这辈子不去狐山方圆十里'}]},

  // --- 囍神（邪祟/诡异） (year 10 ~ 35) ---
  {text:'<span class="loc">阳城</span>城南的一条巷子被<span class="fac">监天司</span>封了——原因是那里出了<span class="danger-text">囍神</span>。据说前天一户人家办喜事，半夜花轿突然自己动了起来，从巷头走到巷尾。第二天早上人们发现，那条巷子里<span class="danger-text">所有人都在笑</span>——嘴角咧到耳根，眼里全是血，但还在笑。活着的、死了的，全在笑。',
    trigger:{minAge:12,yearMin:10,yearMax:35},choices:[
    {text:'在封锁线外偷看',effect:{sanity:-20,comprehension:10},log:'你从缝隙里看到了——巷子里的人全都穿着红衣，脸上挂着恐怖的笑容，他们一动不动地站着，像是在等什么人。一顶<span class="danger-text">空花轿</span>停在巷子正中间。你看到花轿的帘子动了一下——你没敢继续看，转身就跑'},
    {text:'打听囍神是什么',effect:{comprehension:12,sanity:-10},log:'"囍神是一种跟「喜事」有关的邪祟——哪里有婚嫁、满月、搬家之类的喜事，它就可能出现。被它沾上的人会永远「开心」下去，笑到脸烂掉还在笑。监天司来了都要带上专门的面具才敢进去。"'},
    {text:'离那条巷子越远越好',effect:{sanity:-5},log:'你搬到了城北住，再也不从城南走。后来听说监天司的人花了七天才把囍神镇住——巷子里活下来的人没有一个还能正常说话，因为他们的嘴已经笑裂了'}]},

  // --- 酆都/阴间探索 (year 20 ~ 45) ---
  {text:'你在<span class="loc">鬼市</span>听到一个令人胆寒的消息——有人发现了通往<span class="mys">酆都</span>的入口。酆都，传说中的<span class="danger-text">阴间</span>，死人去的地方。那个发现入口的人已经疯了，被<span class="fac">监天司</span>带走了。但消息传开之前，已经有好几个不怕死的修士进去了——<span class="danger-text">一个都没出来</span>。',
    trigger:{minAge:18,yearMin:20,yearMax:45,cultivation:25},choices:[
    {text:'打听酆都的详情',effect:{comprehension:15,sanity:-15,cultivation:5},log:'一个半死不活的老修士告诉你："酆都不是你以为的那种阴间——那里有城，有官，有法。十殿阎罗？别闹了，真正的酆都比那恐怖一万倍。那里的东西不是鬼，是<span class="mys">比鬼更古老的东西</span>。连司命都不愿意去酆都——那是天道管不到的地方。"'},
    {text:'远离那个入口',effect:{sanity:5},log:'活人去阴间——这种事光想想就能把人吓死。你不是那种不怕死的修士，还是安安分分待在阳间吧'},
    {text:'暗中记下入口位置',effect:{comprehension:8,sanity:-8,qiyun:-5},log:'你把入口的位置记在了心里。不是说你想去——但万一哪天走投无路呢？……不，还是别想了'}]},

  // --- 高智坚/僵尸皇帝 (year 25 ~ 45) ---
  {text:'<span class="loc">四齐</span>传来一个荒诞至极的消息——<span class="npc">高智坚</span>，大齐的皇帝，居然是一具<span class="danger-text">僵尸</span>。更荒诞的是，据说他跟那只黑太岁岁岁一样，也是从未来被送回过去的。一个死了不知道多少年的僵尸，坐在龙椅上治理一个国家，底下的大臣们每天对着一具尸体上朝。',
    trigger:{minAge:18,yearMin:25,yearMax:45,cultivation:20},choices:[
    {text:'这也太离谱了',effect:{comprehension:10,sanity:-8},log:'"你不信？大齐那边的天从来不黑——永远是白天。那不是因为他们的太阳不落山，是因为他们的皇帝是僵尸，僵尸怕黑，所以他以龙脉的力量让整个大齐永远不会天黑。"你越听越觉得这世界疯了'},
    {text:'想想大梁皇帝是不是也有什么猫腻',effect:{comprehension:8,sanity:-10,qiyun:-3},log:'如果大齐皇帝是僵尸，那大梁呢？你听说大梁历代皇帝的尸身也都被保存在宫里——拼接成了<span class="mys">龙脉</span>。你觉得自己不该想这些'},
    {text:'管它是人是尸',effect:{sanity:3},log:'皇帝是人还是僵尸跟你有什么关系——你一个平头百姓，过好自己的日子就行了'}]},

  // --- 坐忘道·修假 (year 8 ~ 22) ---
  {text:'你无意间偷听到两个<span class="fac">坐忘道</span>弟子的对话——他们在讨论一种叫<span class="mys">"修假"</span>的修炼法门。"咱们修的不是真的道，是假的——但假到极致就是真。骗天骗地骗自己，连斗姥都被咱们骗了。"另一个人笑道："<span class="danger-text">骗经</span>上说了，世间万物皆可骗，唯独不能骗自己相信自己在骗。一旦你意识到自己在骗，功力就全废了。"',
    trigger:{minAge:14,yearMin:8,yearMax:22,cultivation:15},choices:[
    {text:'竖着耳朵继续听',effect:{comprehension:15,sanity:-12,cultivation:5},log:'"修假的关键是<span class="mys">非罡</span>——斗姥给的力量。每成功骗一个人，非罡就增长一分。但代价是你的脸会慢慢变成麻将牌——万饼条是底层，东南西北是中层。到了红中发财白板那个级别，你的脸已经完全不是人脸了。"你吓出一身冷汗，赶紧溜了'},
    {text:'假装没听到',effect:{sanity:-5},log:'你低着头快步走过——那两个人的脸你看清了，一个像是饼子，一个像是条子。不是面具，是真的长在脸上的'},
    {text:'去举报给监天司',effect:{connections:8,karma:8,sanity:-3},log:'你跑去城里的监天司据点举报了。他们很重视，给了你一点赏钱——但也告诉你以后少在外面乱走，"坐忘道的人认出举报者会报复的"'}]},

  // --- 染煞令 (year 15 ~ 30) ---
  {text:'<span class="fac">监天司</span>发布了<span class="danger-text">染煞令</span>——这是一种极其罕见的紧急命令，意味着某个地区已经被邪祟污染到了无法挽回的程度。你看到大批<span class="fac">兵家</span>修士列队进入<span class="loc">边境</span>的一座小城，浑身散发着血红色的煞气。当地百姓被勒令全部撤离。',
    trigger:{minAge:15,yearMin:15,yearMax:30},choices:[
    {text:'跟着百姓撤离时回头看了一眼',effect:{sanity:-18,comprehension:10},log:'你看到兵家的修士们在城墙上布下了<span class="mys">军阵</span>——数百人同时以鲜血涂抹兵书，煞气冲天而起形成了一个巨大的血色穹顶。然后城里传来了惨叫声——不是人的惨叫，是邪祟的。染煞令意味着"宁可毁掉一座城，也不让邪祟扩散"'},
    {text:'问旁边的兵丁到底发生了什么',effect:{comprehension:8,connections:5,sanity:-8},log:'"那座城里的东西已经不是邪祟了——是<span class="danger-text">天道层面的污染</span>。说白了就是某个司命在那里动了手，把整座城的人都变成了不人不鬼的东西。染煞令就是让兵家去把整座城连同里面的东西一起抹掉。"'},
    {text:'闭上眼睛不看',effect:{sanity:-5},log:'你闭上眼睛——但你闭不上耳朵。风里传来的声音你一辈子都忘不了'}]},

  // --- 狗娃（清风观药引） (year 3 ~ 15) ---
  {text:'你在<span class="loc">赵家村</span>附近的<span class="loc">牛心村</span>见到一个皮肤上有白斑的年轻人，村民叫他<span class="npc">狗娃</span>。"以前是<span class="fac">清风观</span>的药引——丹阳子拿来炼丹的那种。""他怎么活下来的？""运气好加脑子活，自称曹操——那帮药引里就他最圆滑。后来丹阳子被杀了，他就在牛心村安顿下来了。"你远远看到他在照顾一个疯疯癫癫的老人——据说那就是已经疯了的<span class="npc">李火旺</span>。',
    trigger:{minAge:10,yearMin:3,yearMax:15},choices:[
    {text:'上前搭话',effect:{connections:8,comprehension:5,sanity:-3},log:'狗娃挺健谈的："你别看我这白斑吓人，当年在清风观可全靠这张嘴活命。丹阳子那个老东西，不识字还想炼丹成仙，被坐忘道骗得团团转。李大哥……"他看了眼身后的疯人，声音低了下去："他是好人。"'},
    {text:'看他照顾李火旺',effect:{karma:5,sanity:-8},log:'狗娃端着碗在喂李火旺吃饭。李火旺嘴里不停念叨着什么——"杨娜""白灵淼""岁岁"——每个名字都让他哭一场。狗娃擦掉他嘴角的饭粒，跟哄孩子似的说："行了行了，先吃饭。"'},
    {text:'不打扰他们',effect:{sanity:3},log:'能活下来已经不容易了。你不想去揭别人的伤疤'}]},

  // --- 吕家戏班 (year 5 ~ 20) ---
  {text:'<span class="loc">上京城</span>最近新开了一家大戏楼——据说老板叫<span class="npc">吕状元</span>，是个油滑的老头，带着两个儿子<span class="npc">吕举人</span>和<span class="npc">吕秀才</span>唱戏。"那老头等了一辈子，终于在上京开了戏楼。""生意好吗？""好得很——但你说这年头开戏楼能安稳多久？"话音未落，法教之乱就来了。',
    trigger:{minAge:12,yearMin:5,yearMax:20},choices:[
    {text:'去听一出戏',effect:{sanity:5,connections:3},log:'吕状元的戏确实好看——父子三人同台，吕举人憨厚老实演忠臣，吕秀才叛逆机灵演奸相，吕状元在台下骂骂咧咧地指挥。你难得看了一出让人笑出声的戏'},
    {text:'后来听说了吕家的遭遇',effect:{sanity:-12,karma:5},log:'法教之乱时，吕举人和他妻子罗娟花都被害了——罗娟花为了保护公公献出了身体。吕状元疯了。吕秀才为了报仇用大千录自残修炼，加入白莲教后又发现白莲教饲养邪祟的秘密而崩溃。最后这个家只剩吕秀才一个人，重新拾起了唱戏的行当'},
    {text:'凑热闹而已',effect:{connections:3},log:'你看了半出就走了——戏唱得不错，但你更惦记明天的饭钱'}]},

  // --- 金山找/纵横家 (year 8 ~ 22) ---
  {text:'你在<span class="loc">大梁城</span>的官道上看到一个穿着体面的中年人在给两队剑拔弩张的人做调解——三言两语就把一场血斗化解了。旁边有人啧啧称奇："这是<span class="npc">金山找</span>，<span class="mys">纵横家</span>的人。""纵横家？""知大局、善揣摩、通辩辞、会机变——在各国之间搞外交的。他一张嘴能抵十万兵。"',
    trigger:{minAge:14,yearMin:8,yearMax:22},choices:[
    {text:'向金山找请教',effect:{connections:12,comprehension:8},log:'金山找笑着说："天下事无非纵横二字——合众弱攻一强为纵，事一强攻诸弱为横。小老弟，你记住一句话：能用嘴解决的事，千万别动手。"这话你记了一辈子'},
    {text:'远远观察他的手段',effect:{comprehension:10,sanity:-3},log:'你注意到金山找说话时眼神一直在变——看着张三的时候像看老朋友，转向李四就变成了推心置腹。这人脸变得比坐忘道还快，但他不是在骗——他是在让每个人都觉得自己赢了'},
    {text:'不想跟这种人打交道',effect:{sanity:3},log:'嘴巴太厉害的人，你不太信得过'}]},

  // --- 中阴庙/魁櫑 (year 10 ~ 25) ---
  {text:'<span class="loc">南疆</span>方向来了个骇人的消息——<span class="loc">青丘</span>地下的<span class="fac">中阴庙</span>散了。这个信奉<span class="mys">死亡司命魁櫑</span>的门派，成天在地下向死亡献祭牲畜甚至活人。但现在他们的司命魁櫑的<span class="danger-text">死亡天道</span>被<span class="npc">无生老母</span>抢走了——中阴庙没了靠山，干脆集体加入了<span class="fac">白莲教</span>。',
    trigger:{minAge:14,yearMin:10,yearMax:25},choices:[
    {text:'打听中阴庙的事',effect:{comprehension:12,sanity:-10},log:'"中阴庙是青丘地下最阴暗的地方——那帮人天天研究死亡，活人献祭、尸体实验，什么都干。他们的司命魁櫑掌管死亡天道，死亡消失以后整个大傩世界的人都死不了——你说吓不吓人？后来无生老母拿走了死亡天道，死亡才重新降临。"'},
    {text:'担心白莲教收编这帮人',effect:{comprehension:8,connections:5,sanity:-5},log:'"白莲教现在越来越大了——连中阴庙都收编了。那帮人以前天天跟死人打交道，现在穿上白莲教的衣服就成好人了？你信吗？"你确实不太信'},
    {text:'管不了这些',effect:{sanity:3},log:'司命之间抢天道、门派合并分裂——这些事离你太远了，你只想安安稳稳过日子'}]},

  // --- 花瓶姑娘/正德寺邪物 (year 8 ~ 20) ---
  {text:'你在<span class="loc">鬼市</span>看到一个诡异的"货物"——一个<span class="danger-text">花瓶</span>，从瓶口露出一颗女孩的脑袋。她还活着，眼珠在转动。卖家压低声音说这是<span class="fac">正德寺</span>的<span class="npc">花瓶姑娘</span>——正德寺的和尚把被遗弃的女婴从小塞进花瓶里养大，四肢被瓶壁挤压收紧，只有头露在外面。',
    trigger:{minAge:14,yearMin:8,yearMax:20},choices:[
    {text:'看得浑身发抖',effect:{sanity:-18,karma:5,comprehension:5},log:'那个花瓶姑娘嘴唇在动——她在说什么？你凑近了听，她用极小的声音说了一句话。你没听清，但你的手在发抖。丹阳子以前就有一个花瓶姑娘，被李火旺砸碎了。你突然很感激李火旺'},
    {text:'想买下来救她',effect:{wealth:-30,karma:15,sanity:-10},log:'你问了价格——天价。你倾尽所有买下了她，但你不知道怎么把她从花瓶里弄出来。请了大夫来看，大夫说她的四肢骨骼已经完全变形，取出来也活不了。你最后只能守着她，直到她闭上眼睛'},
    {text:'转身就走',effect:{sanity:-8},log:'你快步离开了鬼市。那颗从花瓶里探出的脑袋，那双还在转动的眼珠——你知道你这辈子都忘不了'}]},

  // --- 十情八苦 (year 15 ~ 35) ---
  {text:'一个游方道士在<span class="loc">鲁城</span>的茶馆里讲道——说的是<span class="mys">十情八苦</span>。"人的灵魂由十情八苦构成，十情是喜、怒、悲、贪、嗔、痴、惧、爱、恶；八苦是生、老、病、死、怨憎会、肉别离、求不得、五蕴盛。"他顿了顿："<span class="fac">坐忘道</span>的功法能看到人身上的十情八苦——那些东西在你身上像蛛网一样缠绕。<span class="danger-text">每割掉一条，你就少一分人味。</span>"',
    trigger:{minAge:15,yearMin:15,yearMax:35,cultivation:15},choices:[
    {text:'认真听下去',effect:{comprehension:15,sanity:-8,cultivation:5},log:'"所以跳大神的人为什么变得面无表情？因为仙家在吃他们的十情。坐忘道的人为什么不像人？因为他们把十情八苦当商品交易。你修炼越深入，十情八苦就越薄——到最后，你连「害怕」都不会了。但你也不再是「人」了。"你陷入了沉思'},
    {text:'不太相信',effect:{comprehension:5,sanity:3},log:'"灵魂由十情八苦构成？那把这些全去掉人不就没了？"你心里嘀咕。但转念一想——你确实见过一些修士，他们活着，但"不像人"'},
    {text:'觉得自己听不懂',effect:{sanity:3},log:'太深奥了。你一个凡人，还是先想想明天吃什么吧'}]},

  // --- 颛顼/人皇传说 (year 20 ~ 40) ---
  {text:'你在<span class="loc">昆仑</span>附近听到一个老修士讲述上古传说——<span class="mys">人皇颛顼</span>。"上古时候，司命们住在凡间，跟人类混在一起。颛顼带着两位大将军<span class="npc">白重</span>和<span class="npc">玉黎</span>，硬是把所有司命赶回了<span class="loc">白玉京</span>，还用<span class="mys">牦之门</span>封印了入口——那块巨大的玉佩上左边刻着「颛顼」两个字。<span class="fac">监天司</span>就是颛顼创建的，为的是在司命被赶走以后继续镇压天灾。"',
    trigger:{minAge:18,yearMin:20,yearMax:40,cultivation:30},choices:[
    {text:'追问颛顼的下落',effect:{comprehension:15,sanity:-10,cultivation:5},log:'"后来？后来颛顼就消失了——没人知道他去了哪里。有人说他也进了白玉京，有人说他掌握了<span class="mys">秩序天道</span>成了司命，也有人说他死在了封印牦之门的过程中。但你看看龙脉——那东西的本质就是秩序天道，跟颛顼脱不了关系。"'},
    {text:'感叹一番',effect:{comprehension:8,karma:5},log:'一个凡人，把神赶回了天上。哪怕你已经见识过很多不可思议的事，这个故事依然让你心潮澎湃'},
    {text:'半信半疑',effect:{comprehension:5},log:'上古的事，谁说得清真假'}]},

  // --- 寓（灾兆生物） (year 10 ~ 30) ---
  {text:'<span class="loc">边境</span>的一个村庄诞生了一只<span class="danger-text">寓</span>——一种<span class="mys">人首兽身</span>的怪物，出生即预言灾祸，预言完毕后马上死去。每逢大乱必有寓生。你赶到的时候那只寓已经死了，但村民们围在它的尸体旁瑟瑟发抖——它死前说了一句话。',
    trigger:{minAge:12,yearMin:10,yearMax:30},choices:[
    {text:'问它说了什么',effect:{comprehension:12,sanity:-15,qiyun:-5},log:'村民的声音在抖："它说……<span class="danger-text">「天要破了。从外面来的东西，比里面的所有东西加起来都可怕。」</span>"你不知道这话是什么意思——但你的直觉告诉你，这跟<span class="mys">福生天</span>有关'},
    {text:'看了一眼寓的尸体',effect:{sanity:-10,comprehension:8},log:'人的脑袋长在一具扭曲的兽类身体上——嘴还张着，表情是死前最后的恐惧。它的眼睛是睁开的，仿佛还在看着什么你看不到的东西'},
    {text:'扭头就走',effect:{sanity:-5},log:'灾兆生物出现意味着大祸要来了——你不想知道具体是什么祸'}]},

];
