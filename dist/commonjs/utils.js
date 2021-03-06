"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
exports.extend = function (destination, source) {
    // tslint:disable-next-line:forin
    for (var property in source) {
        destination[property] = source[property];
    }
    return destination;
};
// tslint:disable-next-line:only-arrow-functions
exports.isInteger = Number.isInteger || function (value) {
    return typeof value === "number" &&
        isFinite(value) &&
        Math.floor(value) === value;
};
exports.assignObjectToKeys = function (root, obj) {
    if (obj === undefined || obj === null) {
        return obj;
    }
    var opts = {};
    Object.keys(obj).map(function (key) {
        if (typeof obj[key] === "object") {
            exports.extend(opts, exports.assignObjectToKeys(key, obj[key]));
        }
        else {
            opts[root !== "" ? root + "." + key : key] = obj[key];
        }
    });
    return opts;
};
var LazyOptional = /** @class */ (function () {
    function LazyOptional(key) {
        this.key = key;
    }
    LazyOptional_1 = LazyOptional;
    LazyOptional.of = function (key) {
        return new LazyOptional_1(key);
    };
    LazyOptional.prototype.get = function (container) {
        var _this = this;
        return function () {
            if (container.hasResolver(_this.key, false)) {
                return container.get(_this.key);
            }
            return null;
        };
    };
    var LazyOptional_1;
    LazyOptional = LazyOptional_1 = __decorate([
        aurelia_dependency_injection_1.resolver()
    ], LazyOptional);
    return LazyOptional;
}());
exports.LazyOptional = LazyOptional;
//# sourceMappingURL=utils.js.map