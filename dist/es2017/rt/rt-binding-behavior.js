import { SignalBindingBehavior } from "aurelia-templating-resources";
import { ValueConverter } from "aurelia-binding";
export class RtBindingBehavior {
    constructor(signalBindingBehavior) {
        this.signalBindingBehavior = signalBindingBehavior;
    }
    static inject() { return [SignalBindingBehavior]; }
    bind(binding, source) {
        // bind the signal behavior
        this.signalBindingBehavior.bind(binding, source, "aurelia-translation-signal", "aurelia-relativetime-signal");
        // rewrite the expression to use the RtValueConverter.
        // pass through any args to the binding behavior to the RtValueConverter
        const sourceExpression = binding.sourceExpression;
        // do create the sourceExpression only once
        if (sourceExpression.rewritten) {
            return;
        }
        sourceExpression.rewritten = true;
        const expression = sourceExpression.expression;
        sourceExpression.expression = new ValueConverter(expression, "rt", sourceExpression.args, [expression, ...sourceExpression.args]);
    }
    unbind(binding, source) {
        // unbind the signal behavior
        this.signalBindingBehavior.unbind(binding, source);
    }
}
//# sourceMappingURL=rt-binding-behavior.js.map