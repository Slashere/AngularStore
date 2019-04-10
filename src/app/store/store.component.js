import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ProductRepository } from '../model/product.repository';
import { Cart } from '../model/cart.model';
import { Router } from '@angular/router';
var StoreComponent = /** @class */ (function () {
    function StoreComponent(repository, cart, router) {
        this.repository = repository;
        this.cart = cart;
        this.router = router;
        this.selectedCategory = null;
        this.productsPerPage = 4;
        this.selectedPage = 1;
    }
    Object.defineProperty(StoreComponent.prototype, "products", {
        get: function () {
            var pageIndex = (this.selectedPage - 1) * this.productsPerPage;
            return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoreComponent.prototype, "categories", {
        get: function () {
            return this.repository.getCategories();
        },
        enumerable: true,
        configurable: true
    });
    StoreComponent.prototype.changeCategory = function (newCategory) {
        this.selectedCategory = newCategory;
        this.changePage(1);
    };
    StoreComponent.prototype.changePage = function (newPage) {
        this.selectedPage = newPage;
    };
    StoreComponent.prototype.changePageSize = function (newSize) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    };
    Object.defineProperty(StoreComponent.prototype, "pageCount", {
        // get pageNumbers(): number[] {
        //   return Array(Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage))
        //     .fill(0).map((x, i) => i + 1);
        // }
        get: function () {
            return Math.ceil(this.repository
                .getProducts(this.selectedCategory).length / this.productsPerPage);
        },
        enumerable: true,
        configurable: true
    });
    StoreComponent.prototype.addProductToCart = function (product) {
        this.cart.addLine(product);
        this.router.navigateByUrl('/cart');
    };
    StoreComponent = tslib_1.__decorate([
        Component({
            selector: 'app-store',
            templateUrl: './store.component.html',
            styleUrls: ['./store.component.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ProductRepository,
            Cart,
            Router])
    ], StoreComponent);
    return StoreComponent;
}());
export { StoreComponent };
//# sourceMappingURL=store.component.js.map