import { InstantiationExpressionTree } from '@xon/ast';
import { getTypeTranslator } from '../../type/type-helper';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class InstantiationExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: InstantiationExpressionTree) {
        super();
    }

    translate() {
        const type = getTypeTranslator(this.tree.type).translate();
        const args = this.tree.arguments
            .map((x) => ({
                name: x.name,
                value: getExpressionTranslator(x.value).translate(),
            }))
            .map((x) => `${x.name ? x.name + ' ' : ''}${x.value}`)
            .join(', ');
        return `new ${type}(${args})`;
    }
}
