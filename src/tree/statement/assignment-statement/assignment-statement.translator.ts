import { AssignmentStatementTree } from '@xon/ast';
import { getExpressionTranslator } from '../../expression/expression-helper';
import { StatementTranslator } from '../statement.translator';

export class AssignmentStatementTranslator extends StatementTranslator {
    constructor(public tree: AssignmentStatementTree) {
        super();
    }

    translate() {
        // if only variable
        const valueTr = getExpressionTranslator(this.tree.value).translate();
        if (this.tree.name) {
            if (this.scopes.every((x) => !x.includes(this.tree.name))) {
                this.currentSope.push(this.tree.name);
            }
            return `${this.tree.name} = ${valueTr}`;
        }

        // for multiple variables
        const valueId = this.getUniqueId();
        const vars = [
            valueId,
            ...this.tree.singleAssigments.map((x) => x.name),
            ...this.tree.arrayAssginments,
        ];

        for (const variable of vars) {
            if (this.scopes.every((x) => !x.includes(variable))) {
                this.currentSope.push(variable);
            }
        }

        let result = `${valueId} = ${valueTr}`;

        if(this.tree.value.getType().asArray)
        for (const item of this.tree.singleAssigments) {
            result += `\n${item.name} = ${valueId}[${item.index}]`;
        }
        return `${this.tree.name} = ${valueTr}`;
    }
}
