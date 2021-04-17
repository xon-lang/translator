import { ParenthesizedTypeTree } from '@xon/ast';
import { translateTypeTree } from '../type-helper';
import { TypeTranslator } from '../type.translator';

export class ParenthesizedTypeTranslator extends TypeTranslator {
    constructor(public tree: ParenthesizedTypeTree) {
        super();
    }

    translate() {
        const type = translateTypeTree(this.tree.baseType);
        return `(${type})`;
    }
}
