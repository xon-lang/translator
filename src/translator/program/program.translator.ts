import { ProgramTree } from '@xon/ast';
import { BaseTranslator } from '../base.translator';
import { getStatementTranslator } from '../statement/statement-helper';

export class ProgramTranslator extends BaseTranslator {
    constructor(public tree: ProgramTree) {
        super();
    }

    translate() {
        const items = this.tree.statements.map(getStatementTranslator);
        return items.map(x => x.translate()).join('\n');
    }
}
