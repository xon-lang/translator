import { DefinitionTree } from '@xon/ast';
import { braceIndent, NL2 } from '../../util/string.util';
import { BaseTranslator } from '../base.translator';
import { getExpressionTranslator } from '../expression/expression-helper';
import { translateParametersTrees } from '../parameter/parameter-helper';
import { translateStatementsTrees } from '../statement/statement-helper';
import { getTypeTranslator } from '../type/type-helper';
// import { FunctionTranslator } from '../function/function.translator';

export class DefinitionTranslator extends BaseTranslator {
    constructor(public tree: DefinitionTree) {
        super();
    }

    translate() {
        let header = `export class ${this.tree.name}`;

        const constructorBody = this.tree.init
            ? translateStatementsTrees(this.tree.init.body).join('\n')
            : '';
        const constructor = this.tree.init ? `constructor()${braceIndent(constructorBody)}` : '';

        const properties = this.tree.properties.map((x) => {
            const modifier = x.isPrivate ? 'private' : 'public';
            const type = getTypeTranslator(x.type).translate();
            const value = getExpressionTranslator(x.value)?.translate();

            return `${modifier} ${x.name}: ${type}${value ? ' = ' + value : ''}`;
        });

        this.tree.parameters
            .map((x) => {
                const modifier = x.isPrivate ? 'private' : 'public';
                const type = getTypeTranslator(x.type).translate();
                return `${modifier} ${x.name}: ${type}`;
            })
            .forEach((x) => properties.unshift(x));

        const methods = this.tree.methods.map((x) => {
            const modifier = x.isPrivate ? 'private' : 'public';
            const generics = x.declaredGenerics.length
                ? '<' + x.declaredGenerics.join(', ') + '>'
                : '';
            const parameters = translateParametersTrees(x.parameters).join(', ');
            const returnType = getTypeTranslator(x.returnType)?.translate() || 'void';
            const body = translateStatementsTrees(x.body).join('\n');

            return `${modifier} ${x.name}${generics}(${parameters}): ${returnType}${braceIndent(
                body
            )}`;
        });

        const body = [...properties, ...(constructor ? [constructor] : []), ...methods].join(NL2);
        return header + braceIndent(body);
    }
}
