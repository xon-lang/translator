import { LogicalOrExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class LogicalOrExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: LogicalOrExpressionTree) {
        super();
    }

    translate() {
        const left = getExpressionTranslator(this.tree.left).translate();
        const right = getExpressionTranslator(this.tree.right).translate();
        return `${left} || ${right}`;
    }
}
