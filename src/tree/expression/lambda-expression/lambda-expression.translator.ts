import { LambdaExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class LambdaExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: LambdaExpressionTree) {
        super();
    }

    translate() {
        const args = this.tree.args.map((x) => x.name).join(', ');
        const body = getExpressionTranslator(this.tree.body).translate();
        return `(${args}) => ${body}`;
    }
}
