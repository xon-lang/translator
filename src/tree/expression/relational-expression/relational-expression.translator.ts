import { RelationalExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class RelationalExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: RelationalExpressionTree) {
        super();
    }

    translate() {
        const left = getExpressionTranslator(this.tree.left).translate();
        const right = getExpressionTranslator(this.tree.right).translate();
        return `${left} ${this.tree.operation} ${right}`;
    }
}
