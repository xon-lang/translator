import { UnaryMinusExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class UnaryMinusExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: UnaryMinusExpressionTree) {
        super();
    }

    translate() {
        const value = getExpressionTranslator(this.tree.value).translate();
        return `-${value}`;
    }
}
