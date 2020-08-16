import { DefinitionTree } from '@xon/ast';
import { getType } from '../../types';
import { indent, INDENT_STR } from '../../util/string.util';
import { BaseTranslator } from '../base.translator';
import { getExpressionTranslator } from '../expression/expression-helper';
import { FunctionTranslator } from '../function/function.translator';

export class DefinitionTranslator extends BaseTranslator {
    constructor(public tree: DefinitionTree) {
        super();
    }

    translate() {
        let header = `${this.tree.name.startsWith('_') ? '' : 'export '}class ${this.tree.name} {`;

        let properties = [];
        for (const prop of this.tree.properties) {
            const name = prop.name.startsWith('_') ? `private ${prop.name}` : prop.name;
            const type = prop.type ? ': ' + getType(prop.type) : '';
            const value = prop.value ? ` = ${getExpressionTranslator(prop.value).translate()}` : '';
            properties.push(`${INDENT_STR}${name}${type}${value};`);
        }

        let methods = [];
        for (const method of this.tree.methods) {
            const private_tr = method.name.startsWith('_') ? `private ` : '';
            methods.push(indent(`${private_tr}` + new FunctionTranslator(method).translate()));
        }

        return `${header}\n${properties.join('\n')}\n\n${methods.join('\n\n')}\n}`;
    }
}
