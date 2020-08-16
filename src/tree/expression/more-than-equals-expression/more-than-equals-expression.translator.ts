import { MoreThanEqualsExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class MoreThanEqualsExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: MoreThanEqualsExpressionTree) {
        super();
    }

    translate() {
        const left = getExpressionTranslator(this.tree.left).translate();
        const right = getExpressionTranslator(this.tree.right).translate();
        return `${left} >= ${right}`;
    }
}
