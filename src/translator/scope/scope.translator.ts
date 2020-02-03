import { ScopeTree } from '@xon/ast';
import { indent } from '../../util/string.util';
import { BaseTranslator } from '../base.translator';
import { getStatementTranslator } from '../statement/statement-helper';

export class ScopeTranslator extends BaseTranslator {
    constructor(public tree: ScopeTree) {
        super();
    }

    translate() {
        const scope = { name: this.tree.name, vars: [] };
        this.scopes.push(scope);
        const items = [
            ...this.tree.statements.map(getStatementTranslator),
            ...this.tree.scopes.map(x => new ScopeTranslator(x)),
        ];

        const args = this.tree.args
            .map(x => `${x.name}${x.value ? ' = ' + x.value : ''}`)
            .join(', ');
        let body = items.map(x => x.translate()).join('\n');
        const vars = `let ${scope.vars.join(', ')};`;
        if (scope.vars.length) {
            body = vars + '\n' + body;
        }

        this.scopes.pop();
        return `function ${this.tree.name}(${args}) {\n${indent(body)}\n}`;
    }
}
