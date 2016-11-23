"use strict";
var device_1 = require('../models/device');
var polyline_1 = require('../../leaflet/models/polyline');
var latlng_1 = require('../../leaflet/models/latlng');
var PointsToLines = (function () {
    function PointsToLines(points) {
        this.devices = null;
        this.points = points;
    }
    PointsToLines.prototype.getLines = function () {
        var lines = new Array();
        if (!this.devices) {
            this.getDevices();
        }
        for (var _i = 0, _a = this.devices; _i < _a.length; _i++) {
            var d = _a[_i];
            var p = new polyline_1.PolyLine();
            p.points = new Array();
            for (var _b = 0, _c = d.points; _b < _c.length; _b++) {
                var point = _c[_b];
                var latlng = new latlng_1.LatLng;
                latlng.lat = point.lat;
                latlng.lng = point.lng;
                p.points.push(latlng);
                p.color = d.color;
            }
            lines.push(p);
        }
        return lines;
    };
    PointsToLines.prototype.getDevices = function () {
        if (this.devices) {
            return this.devices;
        }
        var tempKeyVal = {};
        var devices = new Array();
        for (var _i = 0, _a = this.points; _i < _a.length; _i++) {
            var point = _a[_i];
            if (!tempKeyVal[point.deviceId]) {
                tempKeyVal[point.deviceId] = new Array();
            }
            tempKeyVal[point.deviceId].push(point);
        }
        for (var key in tempKeyVal) {
            var d = new device_1.Device();
            d.id = key;
            d.color = buildColor(key);
            d.points = tempKeyVal[key];
            devices.push(d);
        }
        this.devices = devices;
        return devices;
    };
    return PointsToLines;
}());
exports.PointsToLines = PointsToLines;
function buildColor(input) {
    var R = Math.round(seededRandom(0, 255, parseInt(input) + 'R'.charCodeAt(0)));
    var G = Math.round(seededRandom(0, 255, parseInt(input) + 'G'.charCodeAt(0)));
    var B = Math.round(seededRandom(0, 255, parseInt(input) + 'B'.charCodeAt(0)));
    return 'RGBA(' + R + ',' + B + ',' + G + ',0.5)';
}
function seededRandom(max, min, seed) {
    max = max || 1;
    min = min || 0;
    seed = (seed * 9301 + 49297) % 233280;
    var rnd = seed / 233280;
    return min + rnd * (max - min);
}
//# sourceMappingURL=points.to.lines.js.map