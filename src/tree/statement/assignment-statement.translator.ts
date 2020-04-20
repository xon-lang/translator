import { AssignmentStatementTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression/expression-helper';
import { StatementTranslator } from './statement.translator';

export class AssignmentStatementTranslator extends StatementTranslator {
    constructor(public tree: AssignmentStatementTree) {
        super();
    }

    translate() {
        const value = getExpressionTranslator(this.tree.value).translate();
        if (!this.lastScope.vars.includes(this.tree.name)) {
            this.lastScope.vars.push(this.tree.name);
        }
        return `${this.tree.name} = ${value}`;
    }
}
