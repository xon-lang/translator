import { ArrayExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class ArrayExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: ArrayExpressionTree) {
        super();
    }

    translate() {
        const itemsTr = this.tree.arguments.map((x) =>
            getExpressionTranslator(x.value).translate()
        );
        return `[${itemsTr.join(', ')}]`;
    }
}
