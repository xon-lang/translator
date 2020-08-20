import { LiteralExpressionTree, StringLiteralTree } from '@xon/ast';
import { ExpressionTranslator } from '../expression.translator';

export class LiteralExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: LiteralExpressionTree) {
        super();
    }

    translate() {
        if (this.tree.literal instanceof StringLiteralTree) {
            return `\`${this.tree.literal.value}\``;
        }
        return this.tree.literal.value.toString();
    }
}
