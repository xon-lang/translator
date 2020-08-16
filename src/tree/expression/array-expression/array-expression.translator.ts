import { ArrayExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class ArrayExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: ArrayExpressionTree) {
        super();
    }

    translate() {
        const itemsTr = this.tree.items.map(
            (x) => `${x.hasSpread ? '...' : ''}` + getExpressionTranslator(x.value).translate()
        );
        return `[${itemsTr.join(', ')}]`;
    }
}
