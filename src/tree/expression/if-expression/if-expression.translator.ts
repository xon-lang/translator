import { IfExpressionTree } from '@xon/ast';
import '../../../util/string.util';
import { indent } from '../../../util/string.util';
import { translateStatementsTrees } from '../../statement/statement-helper';
import { translateExpressionTree } from '../expression-helper';
import { ExpressionTranslator } from '../expression.translator';

export class IfExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: IfExpressionTree) {
        super();
    }

    translate() {
        let result = '';
        for (const item of this.tree.items) {
            if (item.hasElse) {
                result += ' else';
            }
            if (item.condition) {
                const codition = translateExpressionTree(item.condition);
                result += ` if (${codition})`;
            }
            const statements = translateStatementsTrees(item.statements);
            result += ` {\n${indent(statements)}\n}`;
        }

        return result.trim();
    }
}
