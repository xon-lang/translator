import { IfExpressionTree } from '@xon/ast';
import '../../util/string.util';
import { indent } from '../../util/string.util';
import { getStatementTranslator } from '../statement/statement-helper';
import { getExpressionTranslator } from './expression-helper';
import { ExpressionTranslator } from './expression.translator';

export class IfExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: IfExpressionTree) {
        super();
    }

    translate() {
        const ifCondition = getExpressionTranslator(this.tree.ifCondition).translate();
        const ifStatements = this.tree.ifStatements
            .map(getStatementTranslator)
            .map(x => x.translate())
            .join('\n');

        let result = `if (${ifCondition}) {\n${indent(ifStatements)}\n}`;

        if (this.tree.elseStatements) {
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
