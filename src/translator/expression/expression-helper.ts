import {
    AddSubExpressionTree,
    ExpressionTree,
    FunctionExpressionTree,
    IdExpressionTree,
    LiteralExpressionTree,
    MemberExpressionTree,
    RelationalExpressionTree,
} from '@xon/ast';
import { AddSubExpressionTranslator } from './add-sub-expression/add-sub-expression.translator';
import { ExpressionTranslator } from './expression.translator';
import { FunctionExpressionTranslator } from './function-expression/function-expression.translator';
import { IdExpressionTranslator } from './id-expression/id-expression.translator';
import { LiteralExpressionTranslator } from './literal-expression/literal-expression.translator';
import { MemberExpressionTranslator } from './member-expression/member-expression.translator';
import { RelationalExpressionTranslator } from './relational-expression/relational-expression.translator';

export function getExpressionTranslator(tree: ExpressionTree): ExpressionTranslator {
    if (tree instanceof IdExpressionTree) return new IdExpressionTranslator(tree);
    if (tree instanceof FunctionExpressionTree) return new FunctionExpressionTranslator(tree);
    if (tree instanceof LiteralExpressionTree) return new LiteralExpressionTranslator(tree);
    if (tree instanceof MemberExpressionTree) return new MemberExpressionTranslator(tree);
    if (tree instanceof RelationalExpressionTree) return new RelationalExpressionTranslator(tree);
    console.log(tree.toJson());
    if (tree.type =='AddSubExpression') return new AddSubExpressionTranslator(tree as AddSubExpressionTree);
}
