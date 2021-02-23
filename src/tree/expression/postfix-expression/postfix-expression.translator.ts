import { PostfixExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class PostfixExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: PostfixExpressionTree) {
        super();
    }

    translate() {
        const value = getExpressionTranslator(this.tree.value).translate();
        return `${value}${this.tree.operator}`;
    }
}
