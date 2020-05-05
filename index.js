var myChart = echarts.init(document.getElementById('map'));

$.ajaxSetup({ async: false });
var ccdfdata2015 = "";
$.getJSON('ccdf2015_th2.json', function (data) {
    ccdfdata2015 = data;
});
var ccdfdata2016 = "";
$.getJSON('ccdf2016_th2.json', function (data) {
    ccdfdata2016 = data;
});
var ccdfdata2017 = "";
$.getJSON('ccdf2017_th2.json', function (data) {
    ccdfdata2017 = data;
});
var ccdfdata2018 = "";
$.getJSON('ccdf2018_th2.json', function (data) {
    ccdfdata2018 = data;
});
var ccdfdata2019 = "";
$.getJSON('ccdf2019_th2.json', function (data) {
    ccdfdata2019 = data;
});

var chineseName = {
    'Aruba': '阿鲁巴',
    'Antigua and Barb.': '安提瓜和巴布达',
    'United Arab Emirates': '阿拉伯联合酋长国',
    'Afghanistan': '阿富汗',
    'Algeria': '阿尔及利亚',
    'Azerbaijan': '阿塞拜疆',
    'Albania': '阿尔巴尼亚',
    'Armenia': '亚美尼亚',
    'Andorra': '安道尔',
    'Angola': '安哥拉',
    'American Samoa': '美属萨摩亚',
    'Argentina': '阿根廷',
    'Australia': '澳大利亚',
    'Austria': '奥地利',
    'Anguilla': '安圭拉',
    'Antarctica': '南极',
    'Bahrain': '巴林',
    'Barbados': '巴巴多斯',
    'Botswana': '博茨瓦纳',
    'Bermuda': '百慕大',
    'Belgium': '比利时',
    'Bahamas': '巴哈马',
    'Bangladesh': '孟加拉',
    'Belize': '伯利兹',
    'Bosnia and Herz.': '波斯尼亚和黑塞哥维那',
    'Bolivia': '玻利维亚',
    'Myanmar': '缅甸',
    'Benin': '贝宁',
    'Belarus': '白俄罗斯',
    'Solomon Is.': '所罗门群岛',
    'Navassa Is.': '纳弗沙岛',
    'Brazil': '巴西',
    'Bhutan': '不丹',
    'Bulgaria': '保加利亚',
    'Bouvet Is.': '布韦岛',
    'Brunei': '文莱',
    'Burundi': '布隆迪',
    'Canada': '加拿大',
    'Cambodia': '柬埔寨',
    'Chad': '乍得',
    'Sri Lanka': '斯里兰卡',
    'Congo': '刚果（布）',
    'Dem. Rep. Congo': '刚果（金）',
    'China': '中国',
    'Chile': '智利',
    'Cayman Is.': '开曼群岛',
    'Cameroon': '喀麦隆',
    'Comoros': '科摩罗',
    'Colombia': '哥伦比亚',
    'N. Mariana Is.': '北马里亚纳群岛',
    'Coral Sea Is.': '珊瑚海群岛',
    'Costa Rica': '哥斯达黎加',
    'Central African Rep.': '中非',
    'Cuba': '古巴',
    'Cape Verde': '佛得角',
    'Cook Is.': '库克群岛',
    'Cyprus': '塞浦路斯',
    'Denmark': '丹麦',
    'Djibouti': '吉布提',
    'Dominica': '多米尼加',
    'Jarvis Is.': '贾维斯岛',
    'Dominican Rep.': '多米尼加共和国',
    'Ecuador': '厄瓜多尔',
    'Egypt': '埃及',
    'Ireland': '冰岛',
    'Eq. Guinea': '赤道几内亚',
    'Estonia': '爱沙尼亚',
    'Eritrea': '厄立特里亚',
    'El Salvador': '萨尔瓦多共和国',
    'Ethiopia': '埃塞俄比亚',
    'Europa Is.': '欧罗巴岛',
    'Czech Rep.': '捷克共和国',
    'French Guiana': '法属圭亚那',
    'Finland': '芬兰',
    'Fiji': '斐济',
    'Falkland Is.': '马尔维纳斯群岛',
    'Micronesia': '密克罗尼西亚',
    'Faeroe Is.': '法罗群岛',
    'Fr. Polynesia': '法属波利尼西亚',
    'Baker Is.': '贝克群岛',
    'France': '法国',
    'Fr. S. Antarctic Lands': '法属南半球和南极领地',
    'Gambia': '冈比亚',
    'Gabon': '加蓬',
    'Georgia': '格鲁吉亚',
    'Ghana': '加纳',
    'Gibraltar': '直布罗陀',
    'Grenada': '格林纳达',
    'Guernsey': '根西岛',
    'Greenland': '格陵兰岛',
    'Germany': '德国',
    'Glorioso Is.': '格罗里奥索群岛',
    'Guadeloupe': '瓜德罗普岛',
    'Guam': '关岛',
    'Greece': '希腊',
    'Guatemala': '危地马拉',
    'Guinea': '几内亚',
    'Guyana': '圭亚那',
    'Gaza Strip': '加萨走廊',
    'Haiti': '海地',
    'Hong Kong': '香港',
    'Heard I. and McDonald Is.': '赫德岛和麦克唐纳群岛',
    'Honduras': '洪都拉斯',
    'Howland Is.': '豪兰岛',
    'Croatia': '克罗地亚',
    'Hungary': '匈牙利',
    'Iceland': '冰岛',
    'Indonesia': '印度尼西亚',
    'Isle of Man': '马恩岛',
    'India': '印度',
    'Br. Indian Ocean Ter.': '英属印度洋领地',
    'Clipperton Is.': '克利珀顿岛',
    'Iran': '伊朗',
    'Israel': '以色列',
    'Italy': '意大利',
    'CÃ´te d\'Ivoire': '科特迪瓦',
    'Iraq': '伊拉克',
    'Japan': '日本',
    'Jersey': '泽西岛',
    'Jamaica': '牙买加',
    'Jan Mayen': '扬马延岛',
    'Jordan': '约旦',
    'Johnston Atoll': '约翰斯顿环礁',
    'Kenya': '肯尼亚',
    'Kyrgyzstan': '吉尔吉斯斯坦',
    'Dem. Rep. Korea': '朝鲜',
    'Kingman Reef': '金曼礁',
    'Kiribati': '基里巴斯',
    'Korea': '韩国',
    'Christmas Is.': '圣诞岛',
    'Kuwait': '科威特',
    'Kosovo': '科索沃',
    'Kazakhstan': '哈萨克斯坦',
    'Lao PDR': '老挝',
    'Lebanon': '黎巴嫩',
    'Latvia': '拉脱维亚',
    'Lithuania': '立陶宛',
    'Liberia': '利比里亚',
    'Slovakia': '斯洛文尼亚',
    'Palmyra Atoll': '巴尔米拉环礁',
    'Liechtenstein': '列支敦士登',
    'Lesotho': '莱索托',
    'Luxembourg': '卢森堡',
    'Libya': '利比亚',
    'Madagascar': '马达加斯加',
    'Martinique': '马提尼克岛',
    'Macau': '澳门',
    'Moldova': '摩尔多瓦',
    'Mayotte': '马约特',
    'Mongolia': '蒙古',
    'Montserrat': '蒙特塞拉特',
    'Malawi': '马拉维',
    'Montenegro': '黑山',
    'North Macedonia': '北马其顿共和国',
    'Mali': '马里',
    'Monaco': '摩纳哥',
    'Morocco': '摩洛哥',
    'Mauritius': '毛里求斯',
    'Midway Is.': '中途岛',
    'Mauritania': '毛里塔尼亚',
    'Malta': '马耳他',
    'Oman': '阿曼',
    'Maldives': '马尔代夫',
    'Mexico': '墨西哥',
    'Malaysia': '马来西亚',
    'Mozambique': '莫桑比克',
    'New Caledonia': '新喀里多尼亚',
    'Niue': '纽埃',
    'Norfolk Is.': '诺福克岛',
    'Niger': '尼日尔',
    'Vanuatu': '瓦努阿图',
    'Nigeria': '尼日利亚',
    'Netherlands': '荷兰',
    'Norway': '挪威',
    'Nepal': '尼泊尔',
    'Nauru': '瑙鲁',
    'Suriname': '苏里南',
    'Nicaragua': '尼加拉瓜',
    'New Zealand': '新西兰',
    'S. Sudan': '南苏丹共和国',
    'Paraguay': '巴拉圭共和国',
    'Pitcairn Is.': '皮特凯恩群岛',
    'Peru': '秘鲁',
    'Paracel Is.': '西沙群岛',
    'Spratly Is.': '南沙群岛',
    'Pakistan': '巴基斯坦',
    'Poland': '波兰',
    'Panama': '巴拿马',
    'Portugal': '葡萄牙',
    'Papua New Guinea': '巴布亚新几内亚',
    'Palau': '帕劳',
    'Guinea-Bissau': '几内亚比绍',
    'Qatar': '卡塔尔',
    'Réunion': '留尼汪岛',
    'Serbia': '塞尔维亚',
    'Marshall Is.': '马绍尔群岛',
    'Saint Martin': '圣马丁岛',
    'Romania': '罗马尼亚',
    'Philippines': '菲律宾',
    'Puerto Rico': '波多黎各',
    'Russia': '俄罗斯',
    'Rwanda': '卢旺达',
    'Saudi Arabia': '沙特阿拉伯',
    'St. Pierre and Miquelon': '圣皮埃尔岛和密克隆岛',
    'Saint Kitts and Nevis': '圣基茨和尼维斯',
    'Seychelles': '塞舌尔',
    'South Africa': '南非',
    'Senegal': '塞内加尔',
    'Saint Helena, Ascension, and Tristan da Cunha': '圣赫勒拿、阿森松与特里斯坦达库尼亚',
    'Slovenia': '斯洛文尼亚',
    'Sierra Leone': '塞拉利昂',
    'San Marino': '圣马力诺',
    'Singapore': '新加坡',
    'Somalia': '索马里',
    'Spain': '西班牙',
    'Saint Lucia': '圣卢西亚',
    'Sudan': '苏丹',
    'Svalbard': '斯瓦尔巴群岛',
    'Sweden': '瑞典',
    'Syria': '叙利亚',
    'Switzerland': '瑞士',
    'Trinidad and Tobago': '特立尼达和多巴哥',
    'Tromelin Is.': '特罗梅林岛',
    'Thailand': '泰国',
    'Tajikistan': '塔吉克斯坦',
    'Turks and Caicos Is.': '特克斯和凯科斯群岛',
    'Tokelau': '托克劳',
    'Tonga': '汤加',
    'Togo': '多哥',
    'SÃ£o TomÃ© and Principe': '圣多美和普林西比',
    'Tunisia': '突尼斯',
    'Timor-Leste': '东帝汶',
    'Turkey': '土耳其',
    'Tuvalu': '图瓦卢',
    'Taiwan': '台湾',
    'Turkmenistan': '土库曼斯坦',
    'Tanzania': '坦桑尼亚',
    'CuraÃ§ao': '库拉索岛',
    'Uganda': '乌干达共和国',
    'United Kingdom': '英国',
    'Ukraine': '乌克兰',
    'United States': '美国',
    'Burkina Faso': '布基纳法索',
    'Uruguay': '乌拉圭',
    'Uzbekistan': '乌兹别克斯坦',
    'St. Vin. and Gren.': '圣文森特和格林纳丁斯',
    'Venezuela': '委内瑞拉',
    'British Virgin Is.': '英属维尔京群岛',
    'Vietnam': '越南',
    'U.S. Virgin Is.': '美属维尔京群岛',
    'Vatican City': '梵蒂冈',
    'Namibia': '纳米比亚',
    'West Bank': '约旦河西岸地区',
    'Wallis and Futuna': '瓦利斯群岛和富图纳群岛',
    'Wake Island': '威克岛',
    'Samoa': '萨摩亚',
    'Swaziland': '斯威士兰',
    'Yemen': '也门',
    'Zambia': '赞比亚',
    'Zimbabwe': '津巴布韦',
    'W. Sahara': '阿拉伯撒哈拉民主共和国',
    'Aland': '奥兰群岛',
    'N. Cyprus': '北塞浦路斯土耳其共和国',
    'Siachen Glacier': '锡亚琴冰川',
    'Macedonia': '北马其顿共和国',
    'Palestine': '巴勒斯坦',
    'Saint Helena': '圣赫勒拿岛',
};

myChart.setOption(option = {
    timeline: {
        bottom: '5%',
        autoPlay: false,  //不自动循环播放
        playInterval: 2500,    //播放时间间隔2500ms
        lineStyle: {
            color: 'black', width: 1, type: 'dotted'
        },
        data: ['2015', '2016', '2017', '2018', '2019']
    },
    options: [
        {//option1
            tooltip: {        //鼠标悬停显示详情
                trigger: 'item',
                formatter: '{b}<br/>CCDF：{c}'
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: { readOnly: false },     //数据视图
                    saveAsImage: {}        //保存图片
                }
            },
            visualMap: {
                min: 0,
                max: 1,
                text: ['High', 'Low'],
                realtime: true,     //拖拽时，是否实时更新
                calculable: true,     //是否显示拖拽用的手柄
                color: ['orangered', 'yellow', 'lightskyblue'],
                bottom: '25%'
            },
            title: {
                text: '全球政治热点区域(2015)',
                textStyle: {
                    "fontSize": 16, "color": "#5E5E5E"
                },
                subtext: '事件数据来自GDELT，其中CCDF值为相对熵大于阈值0.2的概率',
                subtextStyle: {
                    "color": "#888888"
                },
                left: 'center',
                top: 25
            },
            series: [
                {
                    name: '全球政治热点区域(2015)',
                    type: 'map',
                    mapType: 'world',
                    itemStyle: {
                        emphasis: {
                            //areaColor: 'thistle',   //鼠标悬停时该区域的颜色
                            label: {
                                show: true       //显示国家的名字
                            }
                        }
                    },
                    data: ccdfdata2015,
                    // 自定义名称映射
                    nameMap: chineseName
                }
            ]
        },
        {//option2
            tooltip: {        //鼠标悬停显示详情
                trigger: 'item',
                formatter: '{b}<br/>CCDF：{c}'
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: { readOnly: false },     //数据视图
                    saveAsImage: {}        //保存图片
                }
            },
            visualMap: {
                min: 0,
                max: 1,
                text: ['High', 'Low'],
                realtime: true,     //拖拽时，是否实时更新
                calculable: true,     //是否显示拖拽用的手柄
                color: ['orangered', 'yellow', 'lightskyblue'],
                bottom: '25%'
            },
            title: {
                text: '全球政治热点区域(2016)',
                textStyle: {
                    "fontSize": 16, "color": "#5E5E5E"
                },
                subtext: '事件数据来自GDELT，其中CCDF值为相对熵大于阈值0.2的概率',
                subtextStyle: {
                    "color": "#888888"
                },
                left: 'center',
                top: 25
            },
            series: [
                {
                    name: '全球政治热点区域(2016)',
                    type: 'map',
                    mapType: 'world',
                    itemStyle: {
                        emphasis: {
                            //areaColor: 'thistle',   //鼠标悬停时该区域的颜色
                            label: {
                                show: true       //显示国家的名字
                            }
                        }
                    },
                    data: ccdfdata2016,
                    // 自定义名称映射
                    nameMap: chineseName
                }
            ]
        },
        {//option3
            tooltip: {        //鼠标悬停显示详情
                trigger: 'item',
                formatter: '{b}<br/>CCDF：{c}'
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: { readOnly: false },     //数据视图
                    saveAsImage: {}        //保存图片
                }
            },
            visualMap: {
                min: 0,
                max: 1,
                text: ['High', 'Low'],
                realtime: true,     //拖拽时，是否实时更新
                calculable: true,     //是否显示拖拽用的手柄
                color: ['orangered', 'yellow', 'lightskyblue'],
                bottom: '25%'
            },
            title: {
                text: '全球政治热点区域(2017)',
                textStyle: {
                    "fontSize": 16, "color": "#5E5E5E"
                },
                subtext: '事件数据来自GDELT，其中CCDF值为相对熵大于阈值0.2的概率',
                subtextStyle: {
                    "color": "#888888"
                },
                left: 'center',
                top: 25
            },
            series: [
                {
                    name: '全球政治热点区域(2017)',
                    type: 'map',
                    mapType: 'world',
                    itemStyle: {
                        emphasis: {
                            //areaColor: 'thistle',   //鼠标悬停时该区域的颜色
                            label: {
                                show: true       //显示国家的名字
                            }
                        }
                    },
                    data: ccdfdata2017,
                    // 自定义名称映射
                    nameMap: chineseName
                }
            ]
        },
        {//option4
            tooltip: {        //鼠标悬停显示详情
                trigger: 'item',
                formatter: '{b}<br/>CCDF：{c}'
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: { readOnly: false },     //数据视图
                    saveAsImage: {}        //保存图片
                }
            },
            visualMap: {
                min: 0,
                max: 1,
                text: ['High', 'Low'],
                realtime: true,     //拖拽时，是否实时更新
                calculable: true,     //是否显示拖拽用的手柄
                color: ['orangered', 'yellow', 'lightskyblue'],
                bottom: '25%'
            },
            title: {
                text: '全球政治热点区域(2018)',
                textStyle: {
                    "fontSize": 16, "color": "#5E5E5E"
                },
                subtext: '事件数据来自GDELT，其中CCDF值为相对熵大于阈值0.2的概率',
                subtextStyle: {
                    "color": "#888888"
                },
                left: 'center',
                top: 25
            },
            series: [
                {
                    name: '全球政治热点区域(2018)',
                    type: 'map',
                    mapType: 'world',
                    itemStyle: {
                        emphasis: {
                            //areaColor: 'thistle',   //鼠标悬停时该区域的颜色
                            label: {
                                show: true       //显示国家的名字
                            }
                        }
                    },
                    data: ccdfdata2018,
                    // 自定义名称映射
                    nameMap: chineseName
                }
            ]
        },
        {//option5
            tooltip: {        //鼠标悬停显示详情
                trigger: 'item',
                formatter: '{b}<br/>CCDF：{c}'
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    dataView: { readOnly: false },     //数据视图
                    saveAsImage: {}        //保存图片
                }
            },
            visualMap: {
                min: 0,
                max: 1,
                text: ['High', 'Low'],
                realtime: true,     //拖拽时，是否实时更新
                calculable: true,     //是否显示拖拽用的手柄
                color: ['orangered', 'yellow', 'lightskyblue'],
                bottom: '25%'
            },
            title: {
                text: '全球政治热点区域(2019)',
                textStyle: {
                    "fontSize": 16, "color": "#5E5E5E"
                },
                subtext: '事件数据来自GDELT，其中CCDF值为相对熵大于阈值0.2的概率',
                subtextStyle: {
                    "color": "#888888"
                },
                left: 'center',
                top: 25
            },
            series: [
                {
                    name: '全球政治热点区域(2019)',
                    type: 'map',
                    mapType: 'world',
                    itemStyle: {
                        emphasis: {
                            //areaColor: 'thistle',   //鼠标悬停时该区域的颜色
                            label: {
                                show: true       //显示国家的名字
                            }
                        }
                    },
                    data: ccdfdata2019,
                    // 自定义名称映射
                    nameMap: chineseName
                }
            ]
        }
    ]
});