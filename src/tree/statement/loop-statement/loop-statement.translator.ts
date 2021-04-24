import { LoopStatementTree } from '@xon/ast';
import { braceIndent, NL } from '../../../util/string.util';
import { translateStatementsTrees } from '../statement-helper';
import { StatementTranslator } from '../statement.translator';

export class LoopStatementTranslator extends StatementTranslator {
    constructor(public tree: LoopStatementTree) {
        super();
    }

    translate() {
        const body = translateStatementsTrees(this.tree.body).join(NL);

        return `while (true)${braceIndent(body)}`;
    }
}
