import { ArgumentTree } from '@xon/ast';
import { BaseTranslator } from '../base.translator';
import { translateExpressionTree } from '../expression/expression-helper';

export class ArgumentTranslator extends BaseTranslator {
    constructor(public tree: ArgumentTree) {
        super();
    }

    translate() {
        if (this.tree.name)
            return `${this.tree.name} = ${translateExpressionTree(this.tree.value)}`;
        return `${translateExpressionTree(this.tree.value)}`;
    }
}
