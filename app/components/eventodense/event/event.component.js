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
var points_to_lines_1 = require('../mappers/points.to.lines');
var map_service_1 = require('../../leaflet/service/map.service');
var L = require("leaflet");
var EventOdenseEventComponent = (function () {
    function EventOdenseEventComponent(service, route, mapService) {
        this.service = service;
        this.route = route;
        this.mapService = mapService;
        this.loading = true;
        this.map = null;
    }
    EventOdenseEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.eventId = params['id'];
            _this.service.getEvent(_this.eventId).subscribe(function (response) { return _this.handleEventResponse(response); }, function (error) { return _this.handleError(error); });
        });
    };
    EventOdenseEventComponent.prototype.handlePointResponse = function (points) {
        this.points = points;
        this.setup();
    };
    EventOdenseEventComponent.prototype.handleEventResponse = function (event) {
        var _this = this;
        if (!event || !event[0]) {
            this.loading = false;
            this.error = 'Could not load event';
            return;
        }
        this.event = event[0];
        this.service.getEventPoints(this.eventId).subscribe(function (response) { return _this.handlePointResponse(response); }, function (error) { return _this.handleError(error); });
    };
    EventOdenseEventComponent.prototype.handleError = function (err) {
        console.error(err);
        this.loading = false;
    };
    EventOdenseEventComponent.prototype.setup = function () {
        this.buildMap();
        this.plotEventOnMap(this.event);
        this.addLines(this.points);
        this.loading = false;
    };
    EventOdenseEventComponent.prototype.buildMap = function () {
        var map = L.map("map", {
            zoomControl: false,
            center: L.latLng(this.event.lat, this.event.lng),
            zoom: 12,
            minZoom: 4,
            maxZoom: 19,
            layers: [this.mapService.baseMaps.OpenStreetMap]
        });
        this.map = map;
    };
    EventOdenseEventComponent.prototype.plotEventOnMap = function (event) {
        L.circle([event.lat, event.lng], event.radius, { color: event.color }).addTo(this.map);
    };
    EventOdenseEventComponent.prototype.addLines = function (points) {
        var ptl = new points_to_lines_1.PointsToLines(this.points);
        var lines = ptl.getLines();
        var pointArr = Array();
        for (var _i = 0, lines_1 = lines; _i < lines_1.length; _i++) {
            var line = lines_1[_i];
            L.polyline(line.points, { color: line.color }).addTo(this.map);
        }
    };
    EventOdenseEventComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'eventodense-event',
            styleUrls: ['assets/style.css'],
            templateUrl: 'assets/template.html'
        }), 
        __metadata('design:paramtypes', [eventodense_service_1.EventOdenseService, router_1.ActivatedRoute, map_service_1.MapService])
    ], EventOdenseEventComponent);
    return EventOdenseEventComponent;
}());
exports.EventOdenseEventComponent = EventOdenseEventComponent;
//# sourceMappingURL=event.component.js.map