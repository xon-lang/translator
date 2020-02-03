import { BaseTree } from '@xon/ast';

export abstract class BaseTranslator {
    static scopes = [{ name: '', vars: [] }];

    get scopes() {
        return BaseTranslator.scopes;
    }
    get lastScope() {
        return BaseTranslator.scopes[BaseTranslator.scopes.length - 1];
    }

    tree: BaseTree;

    abstract translate();
}
