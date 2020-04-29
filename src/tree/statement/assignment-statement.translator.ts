import { AssignmentStatementTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression/expression-helper';
import { StatementTranslator } from './statement.translator';

export class AssignmentStatementTranslator extends StatementTranslator {
    constructor(public tree: AssignmentStatementTree) {
        super();
    }

    translate() {
        const value = getExpressionTranslator(this.tree.value).translate();
        if (this.scopes.every(x => !x.includes(this.tree.name))) {
            this.currentSope.push(this.tree.name);
        }
        return `${this.tree.name} = ${value}`;
    }
}
