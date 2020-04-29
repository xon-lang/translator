import { FunctionTree } from '@xon/ast';
import { INDENT_STR } from '../../util/string.util';
import { BaseTranslator } from '../base.translator';
import { getExpressionTranslator } from '../expression/expression-helper';
import { getStatementTranslator } from '../statement/statement-helper';

export class FunctionTranslator extends BaseTranslator {
    constructor(public tree: FunctionTree) {
        super();
    }

    translate() {
        this.scopes.push([]);
        let argumentsArr = []
        for (const arg of this.tree.args) {
            const type = arg.type ? `: ${arg.type}` : ''
            const value = arg.value ? ` = ${getExpressionTranslator(arg.value).translate()}` : ''
            argumentsArr.push(`${arg.name}${type}${value}`)
        }

        const statements = this.tree.statements.map(getStatementTranslator)
            .map(x => `${INDENT_STR}` + x.translate()).join(`\n`)

        let header = `${this.tree.name}(${argumentsArr.join(', ')}) {`

        let vars = `${this.scopes.pop().join(', ')}`;
        if (vars) {
            vars = `\n${INDENT_STR}let ${vars};`
        }

        return `${header}${vars}\n${statements}\n}`;
    }
}
