import { DefinitionTree } from '@xon/ast';
import { braceIndent, NL2 } from '../../util/string.util';
import { BaseTranslator } from '../base.translator';
import { getStatementTranslator } from '../statement/statement-helper';
// import { FunctionTranslator } from '../function/function.translator';

export class DefinitionTranslator extends BaseTranslator {
    constructor(public tree: DefinitionTree) {
        super();
    }

    translate() {
        let header = `export class ${this.tree.name}`;

        let properties = this.tree.properties.map(
            (x) => (x.isPrivate ? 'private ' : 'public ') + x.name + ': any'
        );

        let methods: string[] = [];
        for (const method of this.tree.methods) {
            const name = (method.isPrivate ? 'private ' : 'public ') + method.name;
            const parameters = method.parameters.map((x) => x.name).join(', ');
            // const returnType = getType((method.getType() as FunctionTypeTree).returnType);
            const body = method.body.map((x) => getStatementTranslator(x).translate()).join('\n');
            methods.push(`${name}(${parameters})${braceIndent(body)}`);
        }

        const body = [...properties, ...methods].join(NL2);
        return header + braceIndent(body);
    }
}
