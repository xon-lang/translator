import { AddSubExpressionTree, BitNotExpressionTree, ExpressionTree, FunctionExpressionTree, IdExpressionTree, IfExpressionTree, InstanceMemberExpressionTree, LiteralExpressionTree, LogicalAndExpressionTree, LogicalOrExpressionTree, MemberExpressionTree, RelationalExpressionTree, SelectExpressionTree, StringFormatExpressionTree } from '@xon/ast';
import { AddSubExpressionTranslator } from './add-sub-expression/add-sub-expression.translator';
import { BitNotExpressionTranslator } from './bit-not-expression.translator/bit-not-expression.translator';
import { ExpressionTranslator } from './expression.translator';
import { FunctionExpressionTranslator } from './function-expression.translator';
import { IdExpressionTranslator } from './id-expression.translator';
import { IfExpressionTranslator } from './if-expression.translator';
import { InstanceMemberExpressionTranslator } from './instance-expression.translator';
import { LiteralExpressionTranslator } from './literal-expression.translator';
import { LogicalAndExpressionTranslator } from './logical-and-expression.translator';
import { LogicalOrExpressionTranslator } from './logical-or-expression.translator';
import { MemberExpressionTranslator } from './member-expression.translator';
import { RelationalExpressionTranslator } from './relational-expression.translator';
import { SelectExpressionTranslator } from './select-expression.translator';
import { StringFormatExpressionTranslator } from './string-format-expression.translator';

export function getExpressionTranslator(tree: ExpressionTree): ExpressionTranslator {
    if (tree === undefined) return undefined;
    if (tree instanceof IdExpressionTree) return new IdExpressionTranslator(tree);
    if (tree instanceof FunctionExpressionTree) return new FunctionExpressionTranslator(tree);
    if (tree instanceof LiteralExpressionTree) return new LiteralExpressionTranslator(tree);
    if (tree instanceof MemberExpressionTree) return new MemberExpressionTranslator(tree);
    if (tree instanceof InstanceMemberExpressionTree) return new InstanceMemberExpressionTranslator(tree);
    if (tree instanceof RelationalExpressionTree) return new RelationalExpressionTranslator(tree);
    if (tree instanceof AddSubExpressionTree) return new AddSubExpressionTranslator(tree);
    if (tree instanceof LogicalAndExpressionTree) return new LogicalAndExpressionTranslator(tree);
    if (tree instanceof LogicalOrExpressionTree) return new LogicalOrExpressionTranslator(tree);
    if (tree instanceof StringFormatExpressionTree)
        return new StringFormatExpressionTranslator(tree);
    if (tree instanceof BitNotExpressionTree) return new BitNotExpressionTranslator(tree);
    if (tree instanceof IfExpressionTree) return new IfExpressionTranslator(tree);
    if (tree instanceof SelectExpressionTree) return new SelectExpressionTranslator(tree);

    throw Error('No Expression found for ' + tree.treeType);
}
