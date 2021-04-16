import { BaseTree } from '@xon/ast';

export abstract class BaseTranslator {
    tree: BaseTree;

    abstract translate();

}
