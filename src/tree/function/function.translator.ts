import { FunctionTree } from '@xon/ast';
import { braceIndent, NL } from '../../util/string.util';
import { getAllVariables } from '../../util/variables';
import { BaseTranslator } from '../base.translator';
import { translateParametersTrees } from '../parameter/parameter-helper';
import { translateStatementsTrees } from '../statement/statement-helper';
import { getTypeTranslator, translateTypeTree } from '../type/type-helper';

export class FunctionTranslator extends BaseTranslator {
    constructor(public tree: FunctionTree) {
        super();
    }

    translate() {
        const modifier = this.tree.isPrivate ? '' : 'export ';
        const generics = this.tree.declaredGenerics.length
            ? '<' + this.tree.declaredGenerics.join(', ') + '>'
            : '';
        const parameters = translateParametersTrees(this.tree.parameters).join(', ');
        const returnType = getTypeTranslator(this.tree.returnType).translate();
        const vars = getAllVariables(this.tree.body);
        const body =
            (vars.length
                ? 'var ' +
                  vars.map((x) => `${x.name}: ${translateTypeTree(x.type)}`).join(', ') +
                  NL
                : '') + translateStatementsTrees(this.tree.body).join(NL);

        return `${modifier}function ${
            this.tree.name
        }${generics}(${parameters}): ${returnType}${braceIndent(body)}`;
    }
}
