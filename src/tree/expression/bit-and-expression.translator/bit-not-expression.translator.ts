import { BitNotExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class BitNotExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: BitNotExpressionTree) {
        super();
    }

    translate() {
        const value = getExpressionTranslator(this.tree.value).translate();
        return `~${value}`;
    }
}
