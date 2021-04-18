import { ParameterTree } from '@xon/ast';
import { BaseTranslator } from '../base.translator';
import { translateTypeTree } from '../type/type-helper';

export class ParameterTranslator extends BaseTranslator {
    constructor(public tree: ParameterTree) {
        super();
    }

    translate() {
        return `${this.tree.name}: ${translateTypeTree(this.tree.type)}`;
    }
}
