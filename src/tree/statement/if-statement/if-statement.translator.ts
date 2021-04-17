import { IfStatementTree } from '@xon/ast';
import { braceIndent, NL } from '../../../util/string.util';
import { translateExpressionTree } from '../../expression/expression-helper';
import { translateStatementsTrees } from '../statement-helper';
import { StatementTranslator } from '../statement.translator';

export class IfStatementTranslator extends StatementTranslator {
    constructor(public tree: IfStatementTree) {
        super();
    }

    translate() {
        const condition = translateExpressionTree(this.tree.condition);
        const thenBody = translateStatementsTrees(this.tree.thenBody).join(NL);
        const elseBody = translateStatementsTrees(this.tree.elseBody).join(NL);

        if (elseBody)
            return `if (${condition})${braceIndent(thenBody)} else${braceIndent(elseBody)}`;
        return `if (${condition})${braceIndent(thenBody)}`;
    }
}
