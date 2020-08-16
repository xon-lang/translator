import { MemberExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class MemberExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: MemberExpressionTree) {
        super();
    }

    translate() {
        const object = getExpressionTranslator(this.tree.object).translate();
        return `${object}.${this.tree.memberName}`;
    }
}
