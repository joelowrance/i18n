import { SignalBindingBehavior } from "aurelia-templating-resources";
import { ValueConverter } from "aurelia-binding";
export class DfBindingBehavior {
    constructor(signalBindingBehavior) {
        this.signalBindingBehavior = signalBindingBehavior;
    }
    static inject() { return [SignalBindingBehavior]; }
    bind(binding, source) {
        // bind the signal behavior
        this.signalBindingBehavior.bind(binding, source, "aurelia-translation-signal");
        // rewrite the expression to use the DfValueConverter.
        // pass through any args to the binding behavior to the DfValueConverter
        const sourceExpression = binding.sourceExpression;
        // do create the sourceExpression only once
        if (sourceExpression.rewritten) {
            return;
        }
        sourceExpression.rewritten = true;
        const expression = sourceExpression.expression;
        sourceExpression.expression = new ValueConverter(expression, "df", sourceExpression.args, [expression, ...sourceExpression.args]);
    }
    unbind(binding, source) {
        // unbind the signal behavior
        this.signalBindingBehavior.unbind(binding, source);
    }
}
//# sourceMappingURL=df-binding-behavior.js.map