import * as tslib_1 from "tslib";
import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
var CounterDirective = /** @class */ (function () {
    function CounterDirective(container, template) {
        this.container = container;
        this.template = template;
    }
    CounterDirective.prototype.ngOnChanges = function (changes) {
        this.container.clear();
        for (var i = 0; i < this.counter; i++) {
            this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
        }
    };
    tslib_1.__decorate([
        Input('appCounterOf'),
        tslib_1.__metadata("design:type", Number)
    ], CounterDirective.prototype, "counter", void 0);
    CounterDirective = tslib_1.__decorate([
        Directive({
            selector: '[appCounter]'
        }),
        tslib_1.__metadata("design:paramtypes", [ViewContainerRef,
            TemplateRef])
    ], CounterDirective);
    return CounterDirective;
}());
export { CounterDirective };
var CounterDirectiveContext = /** @class */ (function () {
    function CounterDirectiveContext($implicit) {
        this.$implicit = $implicit;
    }
    return CounterDirectiveContext;
}());
//# sourceMappingURL=counter.directive.js.map