import { SelectExpressionTree } from '@xon/ast';
import { INDENT_STR } from '../../../util/string.util';
import { getStatementTranslator } from '../../statement/statement-helper';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

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

            result += `(${item.statements.map(x => getStatementTranslator(x).translate()).join(', ')})`
            results.push(result);
        }

        return '(' + results.join(`\n${INDENT_STR}||`) + ')';
    }
}
