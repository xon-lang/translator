import { SelectExpressionTree } from '@xon/ast';
import { indent } from '../../util/string.util';
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
                result += `\n(${value} === ${getExpressionTranslator(item.value).translate()}) && `
            } else {
                result += `\n(${getExpressionTranslator(item.value).translate()}) &&`
            }

            result += `${item.body.map(x => getStatementTranslator(x).translate()).join('\n')}`
            results.push(result);
        }

        return indent('\n(' + results.join(' ||') + ')');
    }
}
