import { IdExpressionTree } from '@xon/ast';
import { ExpressionTranslator } from '../expression.translator';

export class IdExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: IdExpressionTree) {
        super();
    }

    translate() {
        return `${this.tree.name}`;
    }
}
