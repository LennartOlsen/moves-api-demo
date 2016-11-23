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
var global_module_1 = require('../../global/module/global.module');
var eventodense_routing_1 = require('../route/eventodense.routing');
var init_component_1 = require('../init/init.component');
var event_component_1 = require('../event/event.component');
var create_event_1 = require('../components/create.event/create.event');
var eventodense_service_1 = require('../service/eventodense.service');
var map_service_1 = require('../../leaflet/service/map.service');
var EventOdenseModule = (function () {
    function EventOdenseModule() {
    }
    EventOdenseModule = __decorate([
        core_1.NgModule({
            imports: [eventodense_routing_1.routing, global_module_1.GlobalModule],
            declarations: [init_component_1.EventOdenseInitComponent, create_event_1.CreateEventComponent, event_component_1.EventOdenseEventComponent],
            providers: [eventodense_service_1.EventOdenseService, map_service_1.MapService]
        }), 
        __metadata('design:paramtypes', [])
    ], EventOdenseModule);
    return EventOdenseModule;
}());
exports.EventOdenseModule = EventOdenseModule;
//# sourceMappingURL=eventodense.module.js.map