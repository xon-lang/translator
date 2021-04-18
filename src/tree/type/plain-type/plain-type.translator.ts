import { PlainTypeTree } from '@xon/ast';
import { translateTypesTrees } from '../type-helper';
import { TypeTranslator } from '../type.translator';

export class PlainTypeTranslator extends TypeTranslator {
    constructor(public tree: PlainTypeTree) {
        super();
    }

    translate() {
        const generics = translateTypesTrees(this.tree.generics).join(', ');
        if (generics) return `${this.tree.name}<${generics}>`;

        if (this.tree.name == 'Any') return 'any';
        if (this.tree.name == 'Boolean') return 'boolean';
        if (this.tree.name == 'Float') return 'number';
        if (this.tree.name == 'Integer') return 'number';
        if (this.tree.name == 'Number') return 'number';
        if (this.tree.name == 'String') return 'string';

        return `${this.tree.name}`;
    }
}
