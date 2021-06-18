import { MemberExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class MemberExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: MemberExpressionTree) {
        super();
    }

    translate() {
        const object = getExpressionTranslator(this.tree.instance).translate();
        return `${object}.${this.tree.name}`;
    }
}
