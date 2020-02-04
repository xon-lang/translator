import { LineBreakStatementTree } from '@xon/ast';
import { StatementTranslator } from '../statement.translator';

export class LineBreakStatementTranslator extends StatementTranslator {
    constructor(public tree: LineBreakStatementTree) {
        super();
    }

    translate() {
        return '';
    }
}
