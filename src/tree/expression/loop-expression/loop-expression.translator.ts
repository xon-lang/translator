import { LoopExpressionTree } from '@xon/ast';
import { indent } from '../../../util/string.util';
import { getStatementTranslator } from '../../statement/statement-helper';
import { getExpressionTranslator } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class LoopExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: LoopExpressionTree) {
        super();
    }

    translate() {
        const indexName = this.tree.indexName || this.getUniqueId();
        const keyName = this.tree.keyName || this.getUniqueId();
        const valueName = this.tree.valueName || this.getUniqueId();
        const statements = this.tree.statements
            .map((x) => getStatementTranslator(x).translate())
            .join('\n');

        if (this.tree.isInfinity) {
            return `for (;;) {\n${indent(statements)}\n}`;
        }

        const expression = getExpressionTranslator(this.tree.expression).translate();
        return (
            `let ${indexName} = 0;\n` +
            `for (let ${keyName} in ${expression}) {\n` +
            indent(
                `${indexName}++;\n` +
                    `let ${valueName} = (${expression})[${keyName}];\n` +
                    `${statements}`
            ) +
            `\n}`
        );
    }
}
