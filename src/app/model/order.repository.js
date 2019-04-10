import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { StaticDatasource } from './static.datasource';
var OrderRepository = /** @class */ (function () {
    function OrderRepository(dataSource) {
        this.dataSource = dataSource;
        this.orders = [];
    }
    OrderRepository.prototype.getOrders = function () {
        return this.orders;
    };
    OrderRepository.prototype.saveOrder = function (order) {
        return this.dataSource.saveOrder(order);
    };
    OrderRepository = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [StaticDatasource])
    ], OrderRepository);
    return OrderRepository;
}());
export { OrderRepository };
//# sourceMappingURL=order.repository.js.map