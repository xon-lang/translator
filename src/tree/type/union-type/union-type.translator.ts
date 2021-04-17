import { UnionTypeTree } from '@xon/ast';
import { translateTypesTrees } from '../type-helper';
import { TypeTranslator } from '../type.translator';

export class UnionTypeTranslator extends TypeTranslator {
    constructor(public tree: UnionTypeTree) {
        super();
    }

    translate() {
        return translateTypesTrees(this.tree.types).join(' | ');
    }
}
