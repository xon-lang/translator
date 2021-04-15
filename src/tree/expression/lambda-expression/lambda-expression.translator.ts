import { LambdaExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class LambdaExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: LambdaExpressionTree) {
        super();
    }

    translate() {
        const parameters = this.tree.parameters.map((x) => x).join(', ');
        const body = getExpressionTranslator(this.tree.body).translate();
        return `(${parameters}) => ${body}`;
    }
}
