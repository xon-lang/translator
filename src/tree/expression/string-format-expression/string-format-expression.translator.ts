import { StringFormatExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class StringFormatExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: StringFormatExpressionTree) {
        super();
    }

    translate() {
        return getExpressionTranslator(this.tree.value).translate();
    }
}
