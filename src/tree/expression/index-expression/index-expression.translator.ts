import { IndexExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class IndexExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: IndexExpressionTree) {
        super();
    }

    translate() {
        const value = getExpressionTranslator(this.tree.object).translate();
        const index = this.tree.arguments
            .map((x) => getExpressionTranslator(x.value).translate())
            .join(', ');
        return `${value}[${index}]`;
    }
}
