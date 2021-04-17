import { NullableTypeTree } from '@xon/ast';
import { translateTypeTree } from '../type-helper';
import { TypeTranslator } from '../type.translator';

export class NullableTypeTranslator extends TypeTranslator {
    constructor(public tree: NullableTypeTree) {
        super();
    }

    translate() {
        const type = translateTypeTree(this.tree.baseType);
        return `${type}?`;
    }
}
