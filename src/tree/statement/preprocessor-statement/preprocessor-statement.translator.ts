import { PreprocessorStatementTree } from '@xon/ast';
import { StatementTranslator } from '../statement.translator';

export class PreprocessorStatementTranslator extends StatementTranslator {
    constructor(public tree: PreprocessorStatementTree) {
        super();
    }

    translate() {
        return this.tree.value;
    }
}
