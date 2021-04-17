import { LiteralTypeTree } from '@xon/ast';
import { TypeTranslator } from '../type.translator';

export class LiteralTypeTranslator extends TypeTranslator {
    constructor(public tree: LiteralTypeTree) {
        super();
    }

    translate() {
        if (this.tree instanceof LiteralTypeTree && this.tree.value === null) return 'void';
        return `${this.tree.toString()}`;
    }
}
