import { MethodExpressionTree } from '@xon/ast';
import { getExpressionTranslator, translateExpressionTree } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class MethodExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: MethodExpressionTree) {
        super();
    }

    translate() {
        const object = getExpressionTranslator(this.tree.instance).translate();
        const args = this.tree.arguments
            .map((x) => x.value)
            .map(translateExpressionTree)
            .join(', ');
        return `${object}(${args})`;
    }
}
