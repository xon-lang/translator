import { InstanceExpressionTree } from '@xon/ast';
import { ExpressionTranslator } from '../expression.translator';

export class InstanceExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: InstanceExpressionTree) {
        super();
    }

    translate() {
        return 'this';
    }
}
