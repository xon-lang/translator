import { ReturnStatementTree } from '@xon/ast';
import '../../../util/string.util';
import { indentSkipFirst } from '../../../util/string.util';
import { getExpressionTranslator } from '../../expression/expression-helper';
import { StatementTranslator } from '../statement.translator';

export class ReturnStatementTranslator extends StatementTranslator {
    constructor(public tree: ReturnStatementTree) {
        super();
    }

    translate() {
        if (this.tree.value) {
            const value = getExpressionTranslator(this.tree.value).translate();
            return `return ${indentSkipFirst(value)}`;
        }
        return 'return';
    }
}
