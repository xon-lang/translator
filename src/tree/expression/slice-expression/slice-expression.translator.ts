import { SliceExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class SliceExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: SliceExpressionTree) {
        super();
    }

    translate() {
        const start = getExpressionTranslator(this.tree.start).translate();
        const end = getExpressionTranslator(this.tree.end).translate();
        const step = this.tree.step && getExpressionTranslator(this.tree.step).translate();
        const value = getExpressionTranslator(this.tree.value).translate();
        return `slice(${value}, ${start}, ${end}, ${step || 1})`;
    }
}
