import { AssignmentStatementTree } from '@xon/ast';
import { getExpressionTranslator } from '../../expression/expression-helper';
import { StatementTranslator } from '../statement.translator';

export class AssignmentStatementTranslator extends StatementTranslator {
    constructor(public tree: AssignmentStatementTree) {
        super();
    }

    translate() {
        const value = getExpressionTranslator(this.tree.value).translate();
        return `${this.tree.name} = ${value}`;
    }
}
