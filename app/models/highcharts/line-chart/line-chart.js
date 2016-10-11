"use strict";
var categories_1 = require('../categories/categories');
var HighchartsLineStepChart = (function () {
    function HighchartsLineStepChart() {
        this.xAxis = new categories_1.HighchartsCategories;
        this.series = new Array();
    }
    return HighchartsLineStepChart;
}());
exports.HighchartsLineStepChart = HighchartsLineStepChart;
//# sourceMappingURL=line-chart.js.map