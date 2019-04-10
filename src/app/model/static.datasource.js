import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Product } from './product.module';
import { from } from 'rxjs';
var StaticDatasource = /** @class */ (function () {
    function StaticDatasource() {
        this.products = [
            new Product(1, 'Product 1', 'Category 1', 'Product 1 (Category 1)', 100),
            new Product(2, 'Product 2', 'Category 1', 'Product 2 (Category 1)', 100),
            new Product(3, 'Product 3', 'Category 1', 'Product 3 (Category 1)', 100),
            new Product(4, 'Product 4', 'Category 1', 'Product 4 (Category 1)', 5.12415),
            new Product(5, 'Product 5', 'Category 1', 'Product 5 (Category 1)', 100),
            new Product(6, 'Product 6', 'Category 2', 'Product 6 (Category 2)', 61),
            new Product(7, 'Product 7', 'Category 2', 'Product 7 (Category 2)', 100),
            new Product(8, 'Product 8', 'Category 2', 'Product 8 (Category 2)', 152.124124124),
            new Product(9, 'Product 9', 'Category 2', 'Product 9 (Category 2)', 100),
        ];
    }
    StaticDatasource.prototype.getProducts = function () {
        return from([this.products]);
    };
    StaticDatasource.prototype.saveOrder = function (order) {
        console.log(JSON.stringify(order));
        return from([order]);
    };
    StaticDatasource = tslib_1.__decorate([
        Injectable()
    ], StaticDatasource);
    return StaticDatasource;
}());
export { StaticDatasource };
//# sourceMappingURL=static.datasource.js.map