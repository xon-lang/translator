import { MemberAssignmentStatementTree } from '@xon/ast';
import { getExpressionTranslator } from '../../expression/expression-helper';
import { StatementTranslator } from '../statement.translator';

export class MemberAssignmentStatementTranslator extends StatementTranslator {
    constructor(public tree: MemberAssignmentStatementTree) {
        super();
    }

    translate() {
        const value = getExpressionTranslator(this.tree.value).translate();
        return `this.${this.tree.name} = ${value};`;
    }
}
