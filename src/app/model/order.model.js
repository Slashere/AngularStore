import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Cart } from './cart.model';
var Order = /** @class */ (function () {
    function Order(cart) {
        this.cart = cart;
        this.shipped = false;
    }
    Order.prototype.clear = function () {
        this.id = null;
        this.name = this.address = this.city = null;
        this.state = this.zip = this.country = null;
        this.shipped = false;
        this.cart.clear();
    };
    Order = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Cart])
    ], Order);
    return Order;
}());
export { Order };
//# sourceMappingURL=order.model.js.map