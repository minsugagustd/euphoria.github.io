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
                formatter: '{b}<br/>{c}'
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
                subtext: '事件数据来自GDELT',
                subtextStyle: {
                    "color": "#888888"
                },
                sublink: 'https://www.gdeltproject.org/',
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
                    data: ccdfdata2015
                }
            ]
        },
        {//option2
            tooltip: {        //鼠标悬停显示详情
                trigger: 'item',
                formatter: '{b}<br/>{c}'
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
                subtext: '事件数据来自GDELT',
                subtextStyle: {
                    "color": "#888888"
                },
                sublink: 'https://www.gdeltproject.org/',
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
                    data: ccdfdata2016
                }
            ]
        },
        {//option3
            tooltip: {        //鼠标悬停显示详情
                trigger: 'item',
                formatter: '{b}<br/>{c}'
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
                subtext: '事件数据来自GDELT',
                subtextStyle: {
                    "color": "#888888"
                },
                sublink: 'https://www.gdeltproject.org/',
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
                    data: ccdfdata2017
                }
            ]
        },
        {//option4
            tooltip: {        //鼠标悬停显示详情
                trigger: 'item',
                formatter: '{b}<br/>{c}'
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
                subtext: '事件数据来自GDELT',
                subtextStyle: {
                    "color": "#888888"
                },
                sublink: 'https://www.gdeltproject.org/',
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
                    data: ccdfdata2018
                }
            ]
        },
        {//option5
            tooltip: {        //鼠标悬停显示详情
                trigger: 'item',
                formatter: '{b}<br/>{c}'
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
                subtext: '事件数据来自GDELT',
                subtextStyle: {
                    "color": "#888888"
                },
                sublink: 'https://www.gdeltproject.org/',
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
                    data: ccdfdata2019
                }
            ]
        }
    ]
});