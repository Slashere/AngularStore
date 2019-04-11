import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var PROTOCOL = 'http';
var PORT = 3500;
var RestDataSource = /** @class */ (function () {
    function RestDataSource(http) {
        this.http = http;
        this.baseUrl = PROTOCOL + "://" + location.hostname + ":" + PORT + "/";
    }
    RestDataSource.prototype.getProducts = function () {
        return this.sendRequest('GET', 'products');
    };
    RestDataSource.prototype.saveOrder = function (order) {
        return this.sendRequest('POST', 'orders', order);
    };
    RestDataSource.prototype.sendRequest = function (method, url, body) {
        return this.http.request(method, this.baseUrl + url, body);
    };
    RestDataSource = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], RestDataSource);
    return RestDataSource;
}());
export { RestDataSource };
//# sourceMappingURL=rest.datasource.js.map