import { UnaryPlusExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class UnaryPlusExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: UnaryPlusExpressionTree) {
        super();
    }

    translate() {
        const value = getExpressionTranslator(this.tree.value).translate();
        return `+${value}`;
    }
}
