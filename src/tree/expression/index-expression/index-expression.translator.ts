import { IndexExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class IndexExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: IndexExpressionTree) {
        super();
    }

    translate() {
        const value = getExpressionTranslator(this.tree.object).translate();
        const index = getExpressionTranslator(this.tree.index).translate();
        return `${value}[${index}]`;
    }
}
