"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var http_1 = require("@angular/common/http");
var Observable_1 = require("rxjs/Observable");
var kendo_data_query_1 = require("@progress/kendo-data-query");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var map_1 = require("rxjs/operators/map");
var tap_1 = require("rxjs/operators/tap");
var GidDataService = /** @class */ (function (_super) {
    __extends(GidDataService, _super);
    function GidDataService(http, baseUrl) {
        var _this = _super.call(this, null) || this;
        _this.http = http;
        _this.baseUrl = baseUrl + 'api/SessionRequest/';
        return _this;
    }
    GidDataService.prototype.query = function (actionName, state) {
        var _this = this;
        this.fetch(actionName, state)
            .subscribe(function (x) { return _super.prototype.next.call(_this, x); });
    };
    GidDataService.prototype.fetch = function (actionName, state) {
        var _this = this;
        var queryStr = kendo_data_query_1.toODataString(state) + "&$count=true";
        this.loading = true;
        return this.http
            .get("" + this.baseUrl + actionName + "?" + queryStr)
            .pipe(map_1.map(function (response) { return ({
            data: response['value'],
            total: parseInt(response['@odata.count'], 10)
        }); }), tap_1.tap(function () { return _this.loading = false; }))
            .catch(this.handleError);
    };
    GidDataService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            errMsg = error.status + " - " + (error.statusText || '');
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    GidDataService.prototype.queryForPendingSessionRequest = function (actionName, state) {
        /*this.query(actionName, Object.assign({}, state, {
          filter: {
            logic: 'or',
            filters: [
              { field: 'status', operator: 'contains', value: 'Waiting for Approval' },
              { field: 'status', operator: 'contains', value: 'Waiting for Fee' }
            ]
          }
        }));*/
        var filters = {
            filter: {
                filters: [{ field: 'status', operator: 'contains', value: 'Waiting for Approval' },
                    { field: 'status', operator: 'contains', value: 'Waiting for Fee' }
                ],
                logic: 'and'
            }
        };
        var newState = __assign({ state: state }, filters);
        this.query(actionName, newState);
    };
    GidDataService.prototype.queryForCategory = function (_a, actionName, state) {
        /*this.query(actionName, Object.assign({}, state, {
          filter: {
            filters: [{
              field: 'CategoryID', operator: 'eq', value: CategoryID
            }],
            logic: 'and'
          }
        }));*/
        var CategoryID = _a.CategoryID;
        var filters = {
            filter: {
                filters: [{ field: 'CategoryID', operator: 'eq', value: CategoryID }],
                logic: 'and'
            }
        };
        var newState = __assign({ state: state }, filters);
        this.query(actionName, newState);
    };
    GidDataService.prototype.queryForProductName = function (productName, actionName, state) {
        var filters = {
            filter: {
                filters: [{ field: 'ProductName', operator: 'contains', value: productName }],
                logic: 'and'
            }
        };
        var newState = __assign({ state: state }, filters);
        this.query(actionName, newState);
        /*this.query(actionName, Object.assign({}, state, {
          filter: {
            filters: [{
              field: 'ProductName', operator: 'contains', value: productName
            }],
            logic: 'and'
          }
        }));*/
    };
    GidDataService.prototype.queryAll = function (actionName, st) {
        var state = st; //Object.assign({}, st);
        delete state.skip;
        delete state.take;
        return this.fetch(actionName, state);
    };
    GidDataService = __decorate([
        core_1.Injectable(),
        __param(1, core_1.Inject('BASE_URL')),
        __metadata("design:paramtypes", [http_1.HttpClient, String])
    ], GidDataService);
    return GidDataService;
}(BehaviorSubject_1.BehaviorSubject));
exports.GidDataService = GidDataService;
//# sourceMappingURL=griddata.service.js.map