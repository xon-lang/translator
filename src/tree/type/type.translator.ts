import { TypeTree } from '@xon/ast';
import { BaseTranslator } from '../base.translator';

export abstract class TypeTranslator extends BaseTranslator {
    tree: TypeTree;
}
