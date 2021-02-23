import { PrefixExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class PrefixExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: PrefixExpressionTree) {
        super();
    }

    translate() {
        const value = getExpressionTranslator(this.tree.value).translate();
        return `${this.tree.operator}${value}`;
    }
}
