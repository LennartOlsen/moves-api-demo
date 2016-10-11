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
var forms_1 = require('@angular/forms');
var global_module_1 = require('../../global/module/global.module');
var moves_routing_1 = require('../route/moves.routing');
var init_component_1 = require('../init/init.component');
var daily_component_1 = require('../daily/daily.component');
var moves_service_1 = require('../service/moves.service');
var MovesModule = (function () {
    function MovesModule() {
    }
    MovesModule = __decorate([
        core_1.NgModule({
            imports: [moves_routing_1.routing, forms_1.FormsModule, global_module_1.GlobalModule],
            declarations: [init_component_1.MovesInitComponent, daily_component_1.MovesDailyComponent],
            providers: [moves_service_1.MovesService]
        }), 
        __metadata('design:paramtypes', [])
    ], MovesModule);
    return MovesModule;
}());
exports.MovesModule = MovesModule;
//# sourceMappingURL=moves.module.js.map