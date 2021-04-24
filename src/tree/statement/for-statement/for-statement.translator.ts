import { ForStatementTree } from '@xon/ast';
import { braceIndent, NL } from '../../../util/string.util';
import { translateExpressionTree } from '../../expression/expression-helper';
import { translateStatementsTrees } from '../statement-helper';
import { StatementTranslator } from '../statement.translator';

export class ForStatementTranslator extends StatementTranslator {
    constructor(public tree: ForStatementTree) {
        super();
    }

    translate() {
        const value = this.tree.valueVarName;
        const index = this.tree.indexVarName;
        const expression = translateExpressionTree(this.tree.expression);
        const body = translateStatementsTrees(this.tree.body).join(NL);

        return `for ([${value}, ${index}] ${expression}.entries())${braceIndent(body)}`;
    }
}
