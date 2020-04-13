import { ScopeStatementTree } from '@xon/ast';
import { indent } from '../../../util/string.util';
import { BaseTranslator } from '../../base.translator';
import { getStatementTranslator } from '../statement-helper';

export class ScopeStatementTranslator extends BaseTranslator {
    constructor(public tree: ScopeStatementTree) {
        super();
    }

    translate() {
        const scope = { name: this.tree.name, vars: [] };
        this.scopes.push(scope);
        const items = this.tree.statements.map(getStatementTranslator);

        const args = this.tree.args
            .map(x => `${x.name}${x.value ? ' = ' + x.value : ''}`)
            .join(', ');
        let body = items.map(x => x.translate()).join('\n');
        const vars = `let ${scope.vars.join(', ')};`;
        if (scope.vars.length) {
            body = vars + '\n' + body;
        }

        this.scopes.pop();
        return `function ${this.tree.name}(${args}) {\n${indent(body)}\n}\n`;
    }
}
