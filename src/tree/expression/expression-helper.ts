import { AddSubExpressionTree, BitNotExpressionTree, ExpressionTree, FunctionExpressionTree, IdExpressionTree, LiteralExpressionTree, LogicalAndExpressionTree, LogicalOrExpressionTree, MemberExpressionTree, RelationalExpressionTree, StringFormatExpressionTree } from '@xon/ast';
import { AddSubExpressionTranslator } from './add-sub-expression/add-sub-expression.translator';
import { BitNotExpressionTranslator } from './bit-not-expression/bit-not-expression.translator';
import { ExpressionTranslator } from './expression.translator';
import { FunctionExpressionTranslator } from './function-expression/function-expression.translator';
import { IdExpressionTranslator } from './id-expression/id-expression.translator';
import { LiteralExpressionTranslator } from './literal-expression/literal-expression.translator';
import { LogicalAndExpressionTranslator } from './logical-and-expression/logical-and-expression.translator';
import { LogicalOrExpressionTranslator } from './logical-or-expression/logical-or-expression.translator';
import { MemberExpressionTranslator } from './member-expression/member-expression.translator';
import { RelationalExpressionTranslator } from './relational-expression/relational-expression.translator';
import { StringFormatExpressionTranslator } from './string-format-expression/string-format-expression.translator';

export function getExpressionTranslator(tree: ExpressionTree): ExpressionTranslator {
    if (tree instanceof IdExpressionTree) return new IdExpressionTranslator(tree);
    if (tree instanceof FunctionExpressionTree) return new FunctionExpressionTranslator(tree);
    if (tree instanceof LiteralExpressionTree) return new LiteralExpressionTranslator(tree);
    if (tree instanceof MemberExpressionTree) return new MemberExpressionTranslator(tree);
    if (tree instanceof RelationalExpressionTree) return new RelationalExpressionTranslator(tree);
    if (tree instanceof AddSubExpressionTree) return new AddSubExpressionTranslator(tree);
    if (tree instanceof LogicalAndExpressionTree) return new LogicalAndExpressionTranslator(tree);
    if (tree instanceof LogicalOrExpressionTree) return new LogicalOrExpressionTranslator(tree);
    if (tree instanceof StringFormatExpressionTree)
        return new StringFormatExpressionTranslator(tree);
    if (tree instanceof BitNotExpressionTree) return new BitNotExpressionTranslator(tree);

    throw Error('No Expression found for ' + tree.type);
}
