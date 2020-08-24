import { RangeExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class RangeExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: RangeExpressionTree) {
        super();
    }

    translate() {
        const start = getExpressionTranslator(this.tree.start).translate();
        const end = getExpressionTranslator(this.tree.end).translate();
        const step = this.tree.step && getExpressionTranslator(this.tree.step).translate();
        return `range(${start}, ${end}, ${step || 1})`;
    }
}
