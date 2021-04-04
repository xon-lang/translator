import { OperatorExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class OperatorExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: OperatorExpressionTree) {
        super();
    }

    translate() {
        const left = getExpressionTranslator(this.tree.left).translate();
        const right = getExpressionTranslator(this.tree.right).translate();
        return `${left} ${this.tree.operator} ${right}`;
    }
}
