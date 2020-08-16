import { ExpressionTree } from '@xon/ast';
import { BaseTranslator } from '../base.translator';

export abstract class ExpressionTranslator extends BaseTranslator {
    tree: ExpressionTree;
}
