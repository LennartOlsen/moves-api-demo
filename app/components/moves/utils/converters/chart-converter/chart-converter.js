"use strict";
var line_chart_1 = require('../../../../../models/highcharts/line-chart/line-chart');
var data_1 = require('../../../../../models/highcharts/data/data');
/**
 * WARNING : Mappers are always discusting and arbitrary!
 */
function MovesChartConverter(movesDate) {
    var highChart = new line_chart_1.HighchartsLineStepChart();
    console.log(movesDate);
    var hours = new Array();
    var found = false;
    for (var _i = 0, movesDate_1 = movesDate; _i < movesDate_1.length; _i++) {
        var md = movesDate_1[_i];
        /** Set steps */
        if (md.segments) {
            var n = getDate(String(md.date));
            var h = 0;
            while (h != 24) {
                n.setHours(h);
                hours.push(shortHandDateTime(n));
                h++;
            }
            highChart.xAxis.categories = hours;
            var highDataArr = new Array();
            for (var _a = 0, _b = md.segments; _a < _b.length; _a++) {
                var segment = _b[_a];
                for (var _c = 0, _d = segment.activities; _c < _d.length; _c++) {
                    var activity = _d[_c];
                    found = false;
                    for (var _e = 0, highDataArr_1 = highDataArr; _e < highDataArr_1.length; _e++) {
                        var hiData = highDataArr_1[_e];
                        if (hiData.name == activity.activity) {
                            for (var _f = 0, hours_1 = hours; _f < hours_1.length; _f++) {
                                var hour = hours_1[_f];
                                if (shortHandDateTime(getDate(activity.startTime)) == hour) {
                                    hiData.data.push((activity.distance / activity.duration) * 3.6);
                                }
                            }
                            found = true;
                            break;
                        }
                    }
                    if (!found) {
                        var hiData = new data_1.HighchartsStepData();
                        hiData.name = activity.activity;
                        hiData.step = 'center';
                        for (var _g = 0, hours_2 = hours; _g < hours_2.length; _g++) {
                            var hour = hours_2[_g];
                            if (shortHandDateTime(getDate(activity.startTime)) == hour) {
                                hiData.data.push((activity.distance / activity.duration) * 3.6);
                            }
                        }
                        highDataArr.push(hiData);
                    }
                }
            }
            for (var _h = 0, highDataArr_2 = highDataArr; _h < highDataArr_2.length; _h++) {
                var hiData = highDataArr_2[_h];
                highChart.series = highDataArr;
            }
        }
    }
    console.log(hours);
    return highChart;
}
exports.MovesChartConverter = MovesChartConverter;
/**
 * Takes a MovesDate
 * ex format : 20161004T102412+0200
 */
function getDate(date) {
    var d = new Date();
    d.setFullYear(Number(date.substr(0, 4)));
    date = date.substr(4);
    /** Months are 0 based */
    d.setMonth(Number(date.substr(0, 2)) - 1);
    date = date.substr(2);
    d.setDate(Number(date.substr(0, 2)));
    /** Remove the T as well */
    date = date.substr(3);
    if (date.length != 0) {
        d.setHours(Number(date.substr(0, 2)));
        date = date.substr(2);
        d.setMinutes(Number(date.substr(0, 2)));
        date = date.substr(2);
        d.setSeconds(Number(date.substr(0, 2)));
    }
    return d;
}
function shortHandDateTime(date) {
    return date.getMonth() + '/' + date.getDate() + '-' + date.getUTCHours() + ':00:00';
}
//# sourceMappingURL=chart-converter.js.map