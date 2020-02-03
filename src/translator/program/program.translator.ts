import { ProgramTree } from '@xon/ast';
import { BaseTranslator } from '../base.translator';
import { ScopeTranslator } from '../scope/scope.translator';
import { getStatementTranslator } from '../statement/statement-helper';

export class ProgramTranslator extends BaseTranslator {
    constructor(public tree: ProgramTree) {
        super();
    }

    translate() {
        const items = [
            ...this.tree.statements.map(getStatementTranslator),
            ...this.tree.scopes.map(x => new ScopeTranslator(x)),
        ];
        return items.map(x => x.translate()).join('\n');
    }
}
