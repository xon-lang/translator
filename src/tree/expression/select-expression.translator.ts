import { SelectExpressionTree } from '@xon/ast';
import { getStatementTranslator } from '../statement/statement-helper';
import { getExpressionTranslator } from './expression-helper';
import { ExpressionTranslator } from './expression.translator';

export class SelectExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: SelectExpressionTree) {
        super();
    }

    translate() {
        let results = [];
        const value = this.tree.value && getExpressionTranslator(this.tree.value).translate();
        for (const item of this.tree.cases) {
            let result = ''
            if (value) {
                result += `(${value} === ${getExpressionTranslator(item.value).translate()}) && `
            } else {
                result += `(${getExpressionTranslator(item.value).translate()}) &&`
            }

            result += `(${item.statements.map(x => getStatementTranslator(x).translate()).join(', ')})\n`
            results.push(result);
        }

        return '(' + results.join(' ||') + ')';
    }
}
