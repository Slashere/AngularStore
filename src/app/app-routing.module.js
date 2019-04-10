import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { CheckoutComponent } from './store/checkout.component';
import { CartDetailComponent } from './store/cartDetail.component';
import { StoreFirstGuard } from './storeFirst.guard';
var routes = [
    {
        path: 'store', component: StoreComponent,
        canActivate: [StoreFirstGuard]
    },
    {
        path: 'cart', component: CartDetailComponent,
        canActivate: [StoreFirstGuard]
    },
    {
        path: 'checkout', component: CheckoutComponent,
        canActivate: [StoreFirstGuard]
    },
    { path: '**', redirectTo: '/store' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            providers: [StoreFirstGuard],
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map