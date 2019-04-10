import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
var CartSummaryComponent = /** @class */ (function () {
    function CartSummaryComponent(cart) {
        this.cart = cart;
    }
    CartSummaryComponent = tslib_1.__decorate([
        Component({
            selector: 'app-cart-summary',
            templateUrl: 'cartSummary.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Cart])
    ], CartSummaryComponent);
    return CartSummaryComponent;
}());
export { CartSummaryComponent };
//# sourceMappingURL=cartSummary.component.js.map