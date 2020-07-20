import { FunctionStatementTree } from '@xon/ast';
import { BaseTranslator } from '../../base.translator';
import { FunctionTranslator } from '../../function/function.translator';

export class FunctionStatementTranslator extends BaseTranslator {
    constructor(public tree: FunctionStatementTree) {
        super();
    }

    translate() {
        return `function ` + new FunctionTranslator(this.tree.value).translate();
    }
}
