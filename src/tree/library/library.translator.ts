import { LibraryTree } from '@xon/ast';
import { BaseTranslator } from '../base.translator';

export class LibraryTranslator extends BaseTranslator {
    constructor(public tree: LibraryTree) {
        super();
    }

    translate() {
        const members = this.tree.members
            .map((x) => `${x.name}${x.alias ? ' as ' + x.alias : ''}`)
            .join(', ');
        return `import { ${members} } from '${this.tree.scope}/${this.tree.name}';`;
    }
}
