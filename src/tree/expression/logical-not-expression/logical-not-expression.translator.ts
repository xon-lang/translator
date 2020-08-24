import { LogicalNotExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class LogicalNotExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: LogicalNotExpressionTree) {
        super();
    }

    translate() {
        const value = getExpressionTranslator(this.tree.value).translate();
        return `!${value}`;
    }
}
