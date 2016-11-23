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
var router_1 = require('@angular/router');
var eventodense_service_1 = require('../service/eventodense.service');
var event_1 = require('../models/event');
var EventOdenseInitComponent = (function () {
    function EventOdenseInitComponent(service, router) {
        this.service = service;
        this.router = router;
        this.loading = true;
        this.map = null;
        this.events = null;
    }
    EventOdenseInitComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newEvent = new event_1.Event();
        this.service.getEvents().subscribe(function (response) { return _this.handleResponse(response); }, function (error) { return _this.handleError(error); });
    };
    EventOdenseInitComponent.prototype.handleResponse = function (events) {
        this.events = events;
        this.loading = false;
    };
    EventOdenseInitComponent.prototype.handleEventResponse = function (resp) {
        console.log(resp);
        this.loading = false;
    };
    EventOdenseInitComponent.prototype.onEventSubmit = function () {
        var _this = this;
        if (!this.loading) {
            this.loading = true;
            this.service.postEvent(this.newEvent).subscribe(function (response) { return _this.handleEventResponse(response); }, function (error) { return _this.handleError(error); });
        }
    };
    EventOdenseInitComponent.prototype.handleError = function (err) {
        console.error(err);
        this.loading = false;
    };
    EventOdenseInitComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'eventodense-init',
            styleUrls: ['assets/style.css'],
            templateUrl: 'assets/template.html'
        }), 
        __metadata('design:paramtypes', [eventodense_service_1.EventOdenseService, router_1.Router])
    ], EventOdenseInitComponent);
    return EventOdenseInitComponent;
}());
exports.EventOdenseInitComponent = EventOdenseInitComponent;
//# sourceMappingURL=init.component.js.map