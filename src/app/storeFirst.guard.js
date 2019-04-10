import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StoreComponent } from './store/store.component';
var StoreFirstGuard = /** @class */ (function () {
    function StoreFirstGuard(router) {
        this.router = router;
        this.firstNavigation = true;
    }
    StoreFirstGuard.prototype.canActivate = function (route, state) {
        if (this.firstNavigation) {
            this.firstNavigation = false;
            if (route.component !== StoreComponent) {
                this.router.navigateByUrl('/');
                return false;
            }
        }
        return true;
    };
    StoreFirstGuard = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], StoreFirstGuard);
    return StoreFirstGuard;
}());
export { StoreFirstGuard };
//# sourceMappingURL=storeFirst.guard.js.map