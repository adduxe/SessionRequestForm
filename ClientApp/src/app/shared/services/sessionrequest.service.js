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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/common/http");
var Rx_1 = require("rxjs/Rx");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var SessionRequestService = /** @class */ (function () {
    function SessionRequestService(http, baseUrl) {
        this.http = http;
        this.srSource = new BehaviorSubject_1.BehaviorSubject(null);
        this.currentSessionRequest = this.srSource.asObservable();
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        this.options = new http_1.RequestOptions({ headers: this.headers });
        this.url = baseUrl;
    }
    SessionRequestService.prototype.changeSessionRequest = function (sessionRequest) {
        this.srSource.next(sessionRequest);
    };
    SessionRequestService.prototype.getAllSessionRequest = function () {
        console.log(this.url + 'api/SessionRequest/GetSessionRequests');
        return this.http.get(this.url + 'api/SessionRequest/GetSessionRequests')
            .catch(this.handleError);
    };
    SessionRequestService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof http_1.Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Rx_1.Observable.throw(errMsg);
    };
    SessionRequestService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('BASE_URL')),
        __metadata("design:paramtypes", [http_2.HttpClient, String])
    ], SessionRequestService);
    return SessionRequestService;
}());
exports.SessionRequestService = SessionRequestService;
//# sourceMappingURL=sessionrequest.service.js.map