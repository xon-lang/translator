import { ModuloExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class ModuloExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: ModuloExpressionTree) {
        super();
    }

    translate() {
        const left = getExpressionTranslator(this.tree.left).translate();
        const right = getExpressionTranslator(this.tree.right).translate();
        return `${left} % ${right}`;
    }
}
