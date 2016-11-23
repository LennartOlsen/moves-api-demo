"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var EventOdenseService = (function () {
    function EventOdenseService(http) {
        this.http = http;
        this.url = 'http://localhost:8080/'; // URL to web API
    }
    EventOdenseService.prototype.getPoints = function () {
        return this.http.get(this.url + 'points')
            .map(this.extractData)
            .catch(this.handleError);
    };
    EventOdenseService.prototype.getEventPoints = function (eventId) {
        return this.http.get(this.url + 'events/' + eventId + '/points')
            .map(this.extractData)
            .catch(this.handleError);
    };
    EventOdenseService.prototype.getEvents = function () {
        return this.http.get(this.url + 'events')
            .map(this.extractData)
            .catch(this.handleError);
    };
    EventOdenseService.prototype.getEvent = function (eventId) {
        return this.http.get(this.url + 'events/' + eventId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EventOdenseService.prototype.postEvent = function (e) {
        var body = e.toJson();
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.url + 'events', body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    EventOdenseService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    EventOdenseService.prototype.handleError = function (error) {
        console.log(error);
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    EventOdenseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EventOdenseService);
    return EventOdenseService;
}());
exports.EventOdenseService = EventOdenseService;
//# sourceMappingURL=eventodense.service.js.map