define(["require", "exports", "../i18n"], function (require, exports, i18n_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TValueConverter = /** @class */ (function () {
        function TValueConverter(service) {
            this.service = service;
        }
        TValueConverter.inject = function () { return [i18n_1.I18N]; };
        TValueConverter.prototype.toView = function (value, options) {
            return this.service.tr(value, options);
        };
        return TValueConverter;
    }());
    exports.TValueConverter = TValueConverter;
});
//# sourceMappingURL=t-value-converter.js.map