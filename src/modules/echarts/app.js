define(function (require, exports, module) {

    var app = require('../../lib/app');
    require('../../plugins/echarts/module');

    app.page.echarts_line = function () {

        var chart = $p.plugin.echarts("my_chart", {
            type: "line",
            title: {
                text: '来源分析',
                subtext: '最近一周数据'
            }
        });

        chart.load({
            columns: ['2014-07-05', '2014-07-06', '2014-07-07', '2014-07-08', '2014-07-09', '2014-07-10', '2014-07-11', '2014-07-12', '2014-07-13', '2014-07-15', '2014-07-15', '2014-07-16', '2014-07-17', '2014-07-18', '2014-07-19', '2014-07-20', '2014-07-21', '2014-07-22', '2014-07-23', '2014-07-24'],
            rows: [
                {
                    name: "搜索引擎",
                    data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 150, 232, 201, 154, 190, 330]
                },
                {
                    name: "外部链接",
                    data: [220, 182, 191, 234, 290, 330, 310, 320, 332, 301, 334, 390, 330, 320, 132, 101, 134, 90, 230, 210],
                },
                {
                    name: "直接访问",
                    data: [150, 232, 201, 154, 190, 330, 410, 220, 182, 191, 234, 290, 330, 310, 290, 330, 310, 320, 332, 301]
                },
                {
                    name: "站内链接",
                    data: [320, 332, 301, 334, 390, 330, 320, 150, 232, 201, 154, 190, 330, 410, 182, 191, 234, 290, 330, 310]
                }]
        });


    };

    app.page.echarts_stack = function () {


        var chart = $p.plugin.echarts("my_chart", {
            type: "line",
            title: {
                text: '来源分析',
                subtext: '最近一周数据'
            }
        });

        chart.load({
            columns: ['2014-07-05', '2014-07-06', '2014-07-07', '2014-07-08', '2014-07-09', '2014-07-10', '2014-07-11'],
            rows: [{
                name: "搜索引擎",
                data: [120, 132, 101, 134, 90, 230, 210],
                stack: "总浏览量",
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'macarons'
                        }
                    }
                }
            }, {
                name: "外部链接",
                data: [220, 182, 191, 234, 290, 330, 310],
                stack: "总浏览量",
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'macarons'
                        }
                    }
                }
            }, {
                name: "直接访问",
                data: [150, 232, 201, 154, 190, 330, 410],
                stack: "总浏览量",
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'macarons'
                        }
                    }
                }
            }, {
                name: "站内链接",
                data: [320, 332, 301, 334, 390, 330, 320],
                stack: "总浏览量",
                itemStyle: {
                    normal: {
                        areaStyle: {
                            type: 'macarons'
                        }
                    }
                }
            }]
        });

    };

    app.page.echarts_pie = function () {


        var chart = $p.plugin.echarts("my_chart", {
            type: "pie"
        });

        chart.load({
            name: '访问来源',
            data: [{
                value: 735,
                name: '百度'
            }, {
                value: 310,
                name: '谷歌'
            }, {
                value: 234,
                name: '360搜索'
            }, {
                value: 135,
                name: '搜狗'
            }, {
                value: 548,
                name: '必应'
            }, {
                value: 148,
                name: '雅虎'
            }, {
                value: 114,
                name: '网易有道'
            }],
        });

    };

    app.page.echarts_bar = function () {

        var chart = $p.plugin.echarts("my_chart", {
            type: "bar"
        });
        chart.load({
            name: "PV",
            //是否为水平显示,默认为false
            //horizon:true,
            data: [
                {
                    value: 735,
                    name: '百度'
                },
                {
                    value: 310,
                    name: '谷歌'
                },
                {
                    value: 234,
                    name: '360搜索'
                },
                {
                    value: 135,
                    name: '搜狗'
                },
                {
                    value: 548,
                    name: '必应'
                },
                {
                    value: 148,
                    name: '雅虎'
                },
                {
                    value: 114,
                    name: '网易有道'
                }]
        });

    };

    app.page.echarts_map = function () {

        var chart = $p.plugin.echarts("my_chart", {
            type: "map",
            title: {
                text: "浏览量（PV）地域分布图"
            }
        });


        chart.load({
            name: "pv",
            data: [{
                value: 735,
                name: '上海'
            }, {
                value: 310,
                name: '北京'
            }, {
                value: 234,
                name: '四川'
            }, {
                value: 135,
                name: '天津'
            }, {
                value: 548,
                name: '云南'
            }, {
                value: 148,
                name: '河南'
            }, {
                value: 114,
                name: '香港'
            }],
            options: {
                mapType: "china"
            }
        });
    };

    app.page.echarts_event = function () {

        var chart = $p.plugin.echarts("my_chart", {
            type: "line",
            title: {
                text: '来源分析',
                subtext: '最近一周数据'
            }
        });

        chart.load({
            columns: ['2014-07-05', '2014-07-06', '2014-07-07', '2014-07-08', '2014-07-09', '2014-07-10', '2014-07-11'],
            rows: [{
                name: "搜索引擎",
                data: [120, 132, 101, 134, 90, 230, 210]
            }, {
                name: "外部链接",
                data: [220, 182, 191, 234, 290, 330, 310],
            }, {
                name: "直接访问",
                data: [150, 232, 201, 154, 190, 330, 410]
            }, {
                name: "站内链接",
                data: [320, 332, 301, 334, 390, 330, 320]
            }]
        });

        function eConsole(param) {
            var mes = '【' + param.type + '】';
            if (typeof param.seriesIndex !== 'undefined') {
                mes += '  seriesIndex : ' + param.seriesIndex;
                mes += '  dataIndex : ' + param.dataIndex;
            }
            console.log(param);
            $p.com.alert(mes, "success");
        }

        chart.on(echarts.config.EVENT.CLICK, eConsole);
    };


    module.exports = app;

});
