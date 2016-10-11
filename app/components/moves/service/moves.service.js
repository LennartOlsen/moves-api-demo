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
var MovesService = (function () {
    function MovesService(http) {
        this.http = http;
        this.activitiesUrl = 'https://crossorigin.me/https://api.moves-app.com/api/1.1/user/activities/daily/'; // URL to web API
        this.profileUrl = 'https://crossorigin.me/https://api.moves-app.com/api/1.1/user/profile'; // URL to web API
        this.AUTH_LS = 'moves_auth';
    }
    MovesService.prototype.getDaily = function (day) {
        return this.http.get(this.activitiesUrl + day + this.buildAccess())
            .map(this.extractData)
            .catch(this.handleError);
    };
    MovesService.prototype.validateAuth = function (auth) {
        this.auth = auth;
        return this.http.get(this.profileUrl + this.buildAccess())
            .map(this.extractData)
            .catch(this.handleError);
    };
    MovesService.prototype.persistAuth = function (auth) {
        localStorage.setItem(this.AUTH_LS, auth);
        this.auth = auth;
    };
    MovesService.prototype.getAuth = function () {
        if (this.auth) {
            return this.auth;
        }
        return localStorage.getItem(this.AUTH_LS);
    };
    MovesService.prototype.buildAccess = function () {
        return '?access_token=' + this.getAuth();
    };
    MovesService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    MovesService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    MovesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MovesService);
    return MovesService;
}());
exports.MovesService = MovesService;
//# sourceMappingURL=moves.service.js.map