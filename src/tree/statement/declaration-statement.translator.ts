import { DeclarationStatementTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression/expression-helper';
import { StatementTranslator } from './statement.translator';

export class DeclarationStatementTranslator extends StatementTranslator {
    constructor(public tree: DeclarationStatementTree) {
        super();
    }

    translate() {
        const value = getExpressionTranslator(this.tree.value).translate();
        if (!this.lastScope.vars.includes(this.tree.name)) {
            this.lastScope.vars.push(this.tree.name);
        }
        return `let ${this.tree.name} = ${value};`;
    }
}
