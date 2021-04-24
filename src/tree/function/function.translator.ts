import { FunctionTree } from '@xon/ast';
import { braceIndent } from '../../util/string.util';
import { BaseTranslator } from '../base.translator';
import { translateParametersTrees } from '../parameter/parameter-helper';
import { translateStatementsTrees } from '../statement/statement-helper';
import { getTypeTranslator } from '../type/type-helper';
// import { FunctionTranslator } from '../function/function.translator';

export class FunctionTranslator extends BaseTranslator {
    constructor(public tree: FunctionTree) {
        super();
    }

    translate() {
        const modifier = this.tree.isPrivate ? 'private' : 'public';
        const generics = this.tree.declaredGenerics.length
            ? '<' + this.tree.declaredGenerics.join(', ') + '>'
            : '';
        const parameters = translateParametersTrees(this.tree.parameters).join(', ');
        const returnType = getTypeTranslator(this.tree.returnType).translate();
        const body = translateStatementsTrees(this.tree.body).join('\n');

        return `${modifier} ${this.tree.name}${generics}(${parameters}): ${returnType}${braceIndent(
            body
        )}`;
    }
}
