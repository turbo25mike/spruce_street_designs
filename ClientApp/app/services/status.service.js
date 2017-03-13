// status.service.ts
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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var angular2_jwt_1 = require("angular2-jwt");
require("rxjs/Rx");
var StatusService = (function () {
    function StatusService(http, authHttp) {
        this.authHttp = authHttp;
        this.http = http;
        this.uri = window.location.protocol + '//' + window.location.hostname + ':5000/api/status/';
    }
    StatusService.prototype.get = function (route) {
        return this.http.get(this.uri + route).map(function (res) { return res.json(); });
    };
    StatusService.prototype.getSecured = function (route) {
        return this.authHttp.get(this.uri + route).map(function (res) { return res.json(); });
    };
    StatusService.prototype.getStatus = function () { return this.get(''); };
    StatusService.prototype.getEnvironment = function () { return this.get('environment'); };
    StatusService.prototype.getLoggedIn = function () { return this.getSecured('secure'); };
    return StatusService;
}());
StatusService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, angular2_jwt_1.AuthHttp])
], StatusService);
exports.StatusService = StatusService;
//# sourceMappingURL=status.service.js.map