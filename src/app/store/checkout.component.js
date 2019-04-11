import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Order } from '../model/order.model';
import { OrderRepository } from '../model/order.repository';
var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(repository, order) {
        this.repository = repository;
        this.order = order;
        this.orderSent = false;
        this.submitted = false;
    }
    CheckoutComponent.prototype.submitOrder = function (form) {
        var _this = this;
        this.submitted = true;
        if (form.valid) {
            this.repository.saveOrder(this.order).subscribe(function (order) {
                _this.order.clear();
                _this.orderSent = true;
                _this.submitted = false;
            });
        }
    };
    CheckoutComponent = tslib_1.__decorate([
        Component({
            templateUrl: 'checkout.component.html',
            styleUrls: ['checkout.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [OrderRepository,
            Order])
    ], CheckoutComponent);
    return CheckoutComponent;
}());
export { CheckoutComponent };
//# sourceMappingURL=checkout.component.js.map