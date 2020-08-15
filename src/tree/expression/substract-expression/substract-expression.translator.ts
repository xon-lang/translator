import { SubstractExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class SubstractExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: SubstractExpressionTree) {
        super();
    }

    translate() {
        const left = getExpressionTranslator(this.tree.left).translate();
        const right = getExpressionTranslator(this.tree.right).translate();
        return `${left} - ${right}`;
    }
}
