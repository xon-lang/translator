import { ProgramTree } from '@xon/ast';
import { BaseTranslator } from '../base.translator';
import { DefinitionTranslator } from '../definition/definition.translator';
import { getStatementTranslator } from '../statement/statement-helper';

export class ProgramTranslator extends BaseTranslator {
    constructor(public tree: ProgramTree) {
        super();
    }

    translate() {
        const statements = this.tree.statements.map(getStatementTranslator);
        const definitions = this.tree.definitions.map(x => new DefinitionTranslator(x));
        return [...definitions, ...statements].map(x => x.translate()).join('\n');
    }
}
