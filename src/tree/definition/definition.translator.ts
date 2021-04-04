import { DefinitionTree, FunctionTypeTree } from '@xon/ast';
import { getType } from '../../types';
import { indent } from '../../util/string.util';
import { BaseTranslator } from '../base.translator';
import { getStatementTranslator } from '../statement/statement-helper';
// import { FunctionTranslator } from '../function/function.translator';

export class DefinitionTranslator extends BaseTranslator {
    constructor(public tree: DefinitionTree) {
        super();
    }

    translate() {
        this.tree.body();

        let header = `export class ${this.tree.name} {`;

        let properties: string[] = [];
        for (const prop of this.tree.properties) {
            const name = (prop.isPrivate ? 'private ' : 'public ') + prop.name;
            const type = prop.getType() ? ': ' + getType(prop.getType()) : '';
            properties.push(indent(`${name}${type};`));
        }

        let methods: string[] = [];
        for (const method of this.tree.methods) {
            const name = (method.isPrivate ? 'private ' : 'public ') + method.name;
            const parameters = method.parameters
                .map((x) => `${x.name}:${getType(x.getType())}`)
                .join(', ');
            const returnType = getType((method.getType() as FunctionTypeTree).returnType);
            const body = method
                .body()
                .map((x) => getStatementTranslator(x).translate())
                .join('\n');
            methods.push(indent(`${name}(${parameters}): ${returnType} {\n${indent(body)}\n}`));
        }

        return `${header}\n${[...properties, ...methods].join('\n\n')}\n}`;
    }
}
