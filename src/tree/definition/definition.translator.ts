import { DefinitionTree } from '@xon/ast';
import { INDENT_STR } from '../../util/string.util';
import { BaseTranslator } from '../base.translator';
import { getExpressionTranslator } from '../expression/expression-helper';
import { getStatementTranslator } from '../statement/statement-helper';

export class DefinitionTranslator extends BaseTranslator {
    constructor(public tree: DefinitionTree) {
        super();
    }

    translate() {
        let result = `class ${this.tree.name} {`;

        for (const prop of this.tree.properties) {
            const type = prop.type ? `: ${prop.type}` : ''
            const value = prop.value ? ` = ${getExpressionTranslator(prop.value).translate()}` : ''
            result += `\n${INDENT_STR}${prop.name}${type}${value};`
        }

        for (const method of this.tree.methods) {
            let argumentsArr = []
            for (const arg of method.args) {
                const type = arg.type ? `: ${arg.type}` : ''
                const value = arg.value ? ` = ${getExpressionTranslator(arg.value).translate()}` : ''
                argumentsArr.push(`${arg.name}${type}${value}`)
            }
            result += `\n${INDENT_STR}${method.name}(${argumentsArr.join(', ')}) {`
            result += `\n${INDENT_STR}${INDENT_STR}` + method.statements
                .map(getStatementTranslator).map(x => x.translate()).join('\n')
            result += `\n${INDENT_STR}}`
        }


        return result + '\n}'
    }
}
