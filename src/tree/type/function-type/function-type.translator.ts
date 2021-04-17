import { FunctionTypeTree } from '@xon/ast';
import { translateTypeTree } from '../type-helper';
import { TypeTranslator } from '../type.translator';

export class FunctionTypeTranslator extends TypeTranslator {
    constructor(public tree: FunctionTypeTree) {
        super();
    }

    translate() {
        const generics = this.tree.declaredGenerics.length
            ? '<' + this.tree.declaredGenerics.join(', ') + '>'
            : '';
        const parameters = this.tree.parameters.map(translateTypeTree).join(', ');
        const returnType = translateTypeTree(this.tree.returnType);
        return `${generics}(${parameters})=>${returnType}`;
    }
}
