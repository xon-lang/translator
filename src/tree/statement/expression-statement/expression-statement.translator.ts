import { ExpressionStatementTree } from '@xon/ast';
import { getExpressionTranslator } from '../../expression/expression-helper';
import { StatementTranslator } from '../statement.translator';

export class ExpressionStatementTranslator extends StatementTranslator {
    constructor(public tree: ExpressionStatementTree) {
        super();
    }

    translate() {
        return getExpressionTranslator(this.tree.value).translate();
    }
}
