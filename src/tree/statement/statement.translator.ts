import { StatementTree } from '@xon/ast';
import { BaseTranslator } from '../base.translator';

export abstract class StatementTranslator extends BaseTranslator {
    tree: StatementTree;
}
