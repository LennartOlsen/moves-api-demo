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
var MovesInitComponent = (function () {
    function MovesInitComponent(service, router) {
        this.service = service;
        this.router = router;
        this.loading = true;
    }
    MovesInitComponent.prototype.ngOnInit = function () {
        this.loading = false;
    };
    MovesInitComponent.prototype.submitAuth = function () {
        var _this = this;
        this.loading = true;
        this.service.validateAuth(this.auth).subscribe(function (response) { return _this.handleProfileResponse(response, false); }, function (error) { return _this.handleProfileResponse(error, true); });
    };
    MovesInitComponent.prototype.handleProfileResponse = function (resp, isError) {
        if (isError) {
            this.loading = false;
            this.profileErrorMessage = 'Bad auth';
        }
        else {
            this.loading = false;
            this.service.persistAuth(this.auth);
            this.router.navigate(['/moves/daily']);
        }
    };
    MovesInitComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'moves-init',
            templateUrl: 'assets/template.html'
        }), 
        __metadata('design:paramtypes', [moves_service_1.MovesService, router_1.Router])
    ], MovesInitComponent);
    return MovesInitComponent;
}());
exports.MovesInitComponent = MovesInitComponent;
//# sourceMappingURL=init.component.js.map