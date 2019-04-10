import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { StoreComponent } from './store.component';
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cartSummary.component';
import { CartDetailComponent } from './cartDetail.component';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';
var StoreModule = /** @class */ (function () {
    function StoreModule() {
    }
    StoreModule = tslib_1.__decorate([
        NgModule({
            imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
            declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
            exports: [StoreComponent, CartDetailComponent, CheckoutComponent]
        })
    ], StoreModule);
    return StoreModule;
}());
export { StoreModule };
//# sourceMappingURL=store.module.js.map