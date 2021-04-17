import { NegativeExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class NegativeExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: NegativeExpressionTree) {
        super();
    }

    translate() {
        const value = getExpressionTranslator(this.tree.value).translate();
        return `-${value}`;
    }
}
