import { ProgramTree } from '@xon/ast';
import { EOL, EOL2 } from '../../util/string.util';
import { BaseTranslator } from '../base.translator';
import { DefinitionTranslator } from '../definition/definition.translator';
import { LibraryTranslator } from '../library/library.translator';
import { getStatementTranslator } from '../statement/statement-helper';

export class ProgramTranslator extends BaseTranslator {
    constructor(public tree: ProgramTree) {
        super();
    }

    translate() {
        const libraries = this.tree.libraries.map((x) => new LibraryTranslator(x).translate());

        this.scopes.push([]);

        let statements = [];
        let functions = [];
        for (const stmt of this.tree.statements.map(getStatementTranslator)) {
            statements.push(stmt.translate());
        }

        let definitions = this.tree.definitions.map((x) => new DefinitionTranslator(x).translate());

        let vars = this.scopes.pop().map((x) => `${x.startsWith('_') ? '' : 'export '}let ${x};`);

        let result = libraries.join(EOL);
        result = result.trim() + EOL2 + vars.join(EOL);
        result = result.trim() + EOL2 + statements.join(EOL);
        result = result.trim() + EOL2 + functions.join(EOL2);
        result = result.trim() + EOL2 + definitions.join(EOL2);

        return result.trim();
    }
}
