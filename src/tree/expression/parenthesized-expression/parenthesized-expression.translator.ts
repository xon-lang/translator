import { ParenthesizedExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class ParenthesizedExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: ParenthesizedExpressionTree) {
        super();
    }

    translate() {
        const value = getExpressionTranslator(this.tree.value).translate();
        return `(${value})`;
    }
}
