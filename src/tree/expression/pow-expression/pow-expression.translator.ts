import { PowExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class PowExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: PowExpressionTree) {
        super();
    }

    translate() {
        const base = getExpressionTranslator(this.tree.base).translate();
        const exponent = getExpressionTranslator(this.tree.exponent).translate();
        return `Math.pow(${base}, ${exponent})`;
    }
}
