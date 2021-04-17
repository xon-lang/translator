import { DefinitionTree } from '@xon/ast';
import { braceIndent, NL2 } from '../../util/string.util';
import { BaseTranslator } from '../base.translator';
import { getExpressionTranslator } from '../expression/expression-helper';
import { getStatementTranslator } from '../statement/statement-helper';
import { getTypeTranslator } from '../type/type-helper';
// import { FunctionTranslator } from '../function/function.translator';

export class DefinitionTranslator extends BaseTranslator {
    constructor(public tree: DefinitionTree) {
        super();
    }

    translate() {
        let header = `export class ${this.tree.name}`;

        let properties = this.tree.properties.map((x) => {
            const modifier = x.isPrivate ? 'private' : 'public';
            const type = getTypeTranslator(x.type).translate();
            const value = getExpressionTranslator(x.value)?.translate();

            return `${modifier} ${x.name}: ${type}${value ? ' = ' + value : ''}`;
        });

        let methods = this.tree.methods.map((x) => {
            const modifier = x.isPrivate ? 'private' : 'public';
            const generics = x.declaredGenerics.length
                ? '<' + x.declaredGenerics.join(', ') + '>'
                : '';
            const parameters = x.parameters
                .map((x) => ({
                    name: x.name,
                    type: getTypeTranslator(x.type).translate(),
                }))
                .map((x) => `${x.name}: ${x.type}`)
                .join(', ');
            const returnType = getTypeTranslator(x.returnType)?.translate() || 'void';
            const body = x.body.map((x) => getStatementTranslator(x).translate()).join('\n');

            return `${modifier} ${x.name}${generics}(${parameters}): ${returnType}${braceIndent(
                body
            )}`;
        });

        const body = [...properties, ...methods].join(NL2);
        return header + braceIndent(body);
    }
}
