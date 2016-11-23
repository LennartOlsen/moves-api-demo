"use strict";
var Event = (function () {
    function Event() {
        this.lat = 0;
        this.lng = 0;
        this.end_date = new Date();
        this.start_date = new Date();
        this.endTime = 0;
        this.startTime = 0;
        this.radius = 0;
    }
    Event.prototype.toJson = function () {
        /** Variable for holding types */
        var _this = new Event();
        for (var prop in this) {
            if (typeof _this[prop] === "number") {
                this[prop] = parseInt(this[prop]);
            }
            if (_this[prop] instanceof Date) {
                if (prop === 'end_date') {
                    this.endTime = Date.parse(this[prop]) / 1000;
                }
                if (prop === 'start_date') {
                    this.startTime = Date.parse(this[prop]) / 1000;
                }
            }
        }
        return JSON.stringify(this);
    };
    return Event;
}());
exports.Event = Event;
//# sourceMappingURL=event.js.map