import { NotEqualsExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class NotEqualsExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: NotEqualsExpressionTree) {
        super();
    }

    translate() {
        const left = getExpressionTranslator(this.tree.left).translate();
        const right = getExpressionTranslator(this.tree.right).translate();
        return `${left} == ${right}`;
    }
}
