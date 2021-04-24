import { WhileStatementTree } from '@xon/ast';
import { braceIndent, NL } from '../../../util/string.util';
import { translateExpressionTree } from '../../expression/expression-helper';
import { translateStatementsTrees } from '../statement-helper';
import { StatementTranslator } from '../statement.translator';

export class WhileStatementTranslator extends StatementTranslator {
    constructor(public tree: WhileStatementTree) {
        super();
    }

    translate() {
        const expression = translateExpressionTree(this.tree.expression);
        const body = translateStatementsTrees(this.tree.body).join(NL);

        return `while (${expression})${braceIndent(body)}`;
    }
}
