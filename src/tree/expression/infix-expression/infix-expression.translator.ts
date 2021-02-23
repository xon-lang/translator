import { InfixExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class InfixExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: InfixExpressionTree) {
        super();
    }

    translate() {
        const left = getExpressionTranslator(this.tree.left).translate();
        const right = getExpressionTranslator(this.tree.right).translate();
        return `${left} ${this.tree.operator} ${right}`;
    }
}
