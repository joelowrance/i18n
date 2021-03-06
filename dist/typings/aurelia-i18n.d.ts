import { FrameworkConfiguration } from "aurelia-framework";
import { I18N, AureliaEnhancedI18Next } from "./i18n";
export * from "./i18n";
export * from "./relativeTime";
export * from "./aurelia-i18n-loader";
export { DfValueConverter, DfBindingBehavior } from "./df";
export { NfValueConverter, NfBindingBehavior } from "./nf";
export { RtValueConverter, RtBindingBehavior } from "./rt";
export { TValueConverter, TBindingBehavior, TCustomAttribute, TParamsCustomAttribute } from "./t";
export declare function configure(frameworkConfig: FrameworkConfiguration, cb: (instance: I18N) => AureliaEnhancedI18Next): AureliaEnhancedI18Next;
