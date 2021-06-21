import { ModuleTree } from '@xon/ast';
import { NL, NL2 } from '../../util/string.util';
import { getAllVariables } from '../../util/variables';
import { BaseTranslator } from '../base.translator';
import { DefinitionTranslator } from '../definition/definition.translator';
import { FunctionTranslator } from '../function/function.translator';
import { LibraryTranslator } from '../library/library.translator';
import { getStatementTranslator } from '../statement/statement-helper';
import { translateTypeTree } from '../type/type-helper';

export class ModuleTranslator extends BaseTranslator {
    constructor(public tree: ModuleTree) {
        super();
    }

    translate() {
        const vars = getAllVariables(this.tree.statements);
        const varsTranslated = vars.length
            ? 'var ' + vars.map((x) => `${x.name}: ${translateTypeTree(x.type)}`).join(', ') + NL
            : '';

        const libraries = this.tree.libraries.map((x) => new LibraryTranslator(x).translate());
        const statements = this.tree.statements.map((x) => getStatementTranslator(x).translate());
        const functions = this.tree.functions.map((x) => new FunctionTranslator(x).translate());
        const definitions = this.tree.definitions.map((x) =>
            new DefinitionTranslator(x).translate()
        );

        return [libraries, [varsTranslated], statements, functions, definitions]
            .map((x) => x.join(NL))
            .filter((x) => x)
            .join(NL2);
    }
}
