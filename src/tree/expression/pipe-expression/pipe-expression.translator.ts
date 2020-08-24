import { PipeExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class PipeExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: PipeExpressionTree) {
        super();
    }

    translate() {
        const left = getExpressionTranslator(this.tree.left).translate();
        const right = getExpressionTranslator(this.tree.right).translate();
        return `(${this.tree.arg} => ${right})(${left})`;
    }
}
