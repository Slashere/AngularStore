import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { StaticDatasource } from './static.datasource';
var ProductRepository = /** @class */ (function () {
    function ProductRepository(dataSource) {
        var _this = this;
        this.dataSource = dataSource;
        this.products = [];
        this.categories = [];
        dataSource.getProducts().subscribe(function (data) {
            _this.products = data;
            _this.categories = data.map(function (p) { return p.category; })
                .filter(function (c, index, array) { return array.indexOf(c) === index; })
                .sort();
        });
    }
    ProductRepository.prototype.getProducts = function (category) {
        if (category === void 0) { category = null; }
        return this.products
            .filter(function (p) { return category === null || category === p.category; });
    };
    ProductRepository.prototype.getCategories = function () {
        return this.categories;
    };
    ProductRepository = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [StaticDatasource])
    ], ProductRepository);
    return ProductRepository;
}());
export { ProductRepository };
//# sourceMappingURL=product.repository.js.map