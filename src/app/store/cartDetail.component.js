import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Cart } from '../model/cart.model';
var CartDetailComponent = /** @class */ (function () {
    function CartDetailComponent(cart) {
        this.cart = cart;
    }
    CartDetailComponent = tslib_1.__decorate([
        Component({
            templateUrl: "cartDetail.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [Cart])
    ], CartDetailComponent);
    return CartDetailComponent;
}());
export { CartDetailComponent };
//# sourceMappingURL=cartDetail.component.js.map