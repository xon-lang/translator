import { IfStatementTree } from '@xon/ast';
import '../../../util/string.util';
import { indent } from '../../../util/string.util';
import { getExpressionTranslator } from '../../expression/expression-helper';
import { getStatementTranslator } from '../statement-helper';
import { StatementTranslator } from '../statement.translator';

export class IfStatementTranslator extends StatementTranslator {
    constructor(public tree: IfStatementTree) {
        super();
    }

    translate() {
        const ifCondition = getExpressionTranslator(this.tree.ifCondition).translate();
        const ifStatements = this.tree.ifStatements
            .map(getStatementTranslator)
            .map(x => x.translate())
            .join('\n');

        let result = `if (${ifCondition}) {\n${indent(ifStatements)}\n}`;

        if (this.tree.elseStatements.length) {
            result += ` else `;
            if (this.tree.elseCondition) {
                const elseCondition = getExpressionTranslator(this.tree.elseCondition).translate();
                result += `if (${elseCondition})`;
            }
            const elseStatements = this.tree.elseStatements
                .map(getStatementTranslator)
                .map(x => x.translate())
                .join('\n');
            result += `{\n${indent(elseStatements)}\n}`;
        }
        return result;
    }
}
