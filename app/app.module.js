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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var app_component_1 = require('./components/app.component');
var home_component_1 = require('./components/global/home/home.component');
var app_routing_1 = require('./components/global/route/app.routing');
var moves_module_1 = require('./components/moves/module/moves.module');
var eventodense_module_1 = require('./components/eventodense/module/eventodense.module');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                app_routing_1.routing,
                moves_module_1.MovesModule,
                eventodense_module_1.EventOdenseModule],
            declarations: [app_component_1.AppComponent, home_component_1.HomeComponent],
            bootstrap: [app_component_1.AppComponent],
            providers: [
                app_routing_1.appRoutingProviders
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map