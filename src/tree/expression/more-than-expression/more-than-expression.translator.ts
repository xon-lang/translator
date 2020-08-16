import { MoreThanExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class MoreThanExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: MoreThanExpressionTree) {
        super();
    }

    translate() {
        const left = getExpressionTranslator(this.tree.left).translate();
        const right = getExpressionTranslator(this.tree.right).translate();
        return `${left} > ${right}`;
    }
}
