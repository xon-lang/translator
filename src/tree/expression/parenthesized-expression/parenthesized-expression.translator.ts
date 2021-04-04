import { OperatorExpressionTree, ParenthesizedExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class ParenthesizedExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: ParenthesizedExpressionTree) {
        super();
    }

    translate() {
        const value = getExpressionTranslator(this.tree.value).translate();
        if (this.tree.value instanceof OperatorExpressionTree) return `(${value})`;
        else return `${value}`;
    }
}
