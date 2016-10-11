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
var moves_service_1 = require('../service/moves.service');
var chart_converter_1 = require('../utils/converters/chart-converter/chart-converter');
var MovesDailyComponent = (function () {
    function MovesDailyComponent(service, router) {
        this.service = service;
        this.router = router;
        this.loading = true;
        this.ready = false;
    }
    MovesDailyComponent.prototype.ngOnInit = function () {
        this.loading = false;
    };
    MovesDailyComponent.prototype.submitDate = function () {
        var _this = this;
        this.loading = true;
        this.service.getDaily(this.date).subscribe(function (response) { return _this.handleResponse(response); }, function (error) { return _this.handleError(error); });
    };
    MovesDailyComponent.prototype.handleResponse = function (resp) {
        this.loading = false;
        this.ready = true;
        this.opts = chart_converter_1.MovesChartConverter(resp);
    };
    MovesDailyComponent.prototype.handleError = function (resp) {
        this.loading = false;
        this.dateErrorMessage = resp;
    };
    MovesDailyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'moves-init',
            templateUrl: 'assets/template.html'
        }), 
        __metadata('design:paramtypes', [moves_service_1.MovesService, router_1.Router])
    ], MovesDailyComponent);
    return MovesDailyComponent;
}());
exports.MovesDailyComponent = MovesDailyComponent;
//# sourceMappingURL=daily.component.js.map