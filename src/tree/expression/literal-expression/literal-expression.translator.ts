import { LiteralExpressionTree, NullLiteralTree, StringLiteralTree } from '@xon/ast';
import { ExpressionTranslator } from '../expression.translator';

export class LiteralExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: LiteralExpressionTree) {
        super();
    }

    translate() {
        if (this.tree.literal instanceof StringLiteralTree) return `"${this.tree.literal.value}"`;
        if (this.tree.literal instanceof NullLiteralTree) return 'null';
        return this.tree.literal.value.toString();
    }
}
