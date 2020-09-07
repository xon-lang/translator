import { ImportsTree } from '@xon/ast';
import { BaseTranslator } from '../base.translator';

export class ImportsTranslator extends BaseTranslator {
    constructor(public tree: ImportsTree) {
        super();
    }

    translate() {
        if (this.tree.allModulesAlias) {
            return `import * as ${this.tree.allModulesAlias} from '${this.tree.path}';`;
        }

        const importMembers = this.tree.members
            .map((x) => `${x.name}${x.alias ? ' as ' + x.alias : ''}`)
            .join(', ');
        return `import { ${importMembers} } from '${this.tree.path}';`;
    }
}
