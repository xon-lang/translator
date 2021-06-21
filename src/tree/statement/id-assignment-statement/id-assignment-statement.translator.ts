import { IdAssignmentStatementTree } from '@xon/ast';
import { getExpressionTranslator } from '../../expression/expression-helper';
import { StatementTranslator } from '../statement.translator';

export class IdAssignmentStatementTranslator extends StatementTranslator {
    constructor(public tree: IdAssignmentStatementTree) {
        super();
    }

    translate() {
        const value = getExpressionTranslator(this.tree.value).translate();
        return `${this.tree.name} = ${value};`;
    }
}
