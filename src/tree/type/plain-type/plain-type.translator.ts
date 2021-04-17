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
        return `${this.tree.name}`;
    }
}
