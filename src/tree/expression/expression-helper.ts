import {
    ArrayExpressionTree,
    ExpressionTree,
    FunctionExpressionTree,
    IdExpressionTree,
    IndexExpressionTree,
    InfixExpressionTree,
    InstanceMemberExpressionTree,
    LambdaExpressionTree,
    LiteralExpressionTree,
    ParenthesizedExpressionTree,
    PostfixExpressionTree,
    PrefixExpressionTree,
    StringFormatExpressionTree,
} from '@xon/ast';
import { EOL } from '../../util/string.util';
import { ArrayExpressionTranslator } from './array-expression/array-expression.translator';
import { ExpressionTranslator } from './expression.translator';
import { FunctionExpressionTranslator } from './function-expression/function-expression.translator';
import { IdExpressionTranslator } from './id-expression/id-expression.translator';
import { IndexExpressionTranslator } from './index-expression/index-expression.translator';
import { InfixExpressionTranslator } from './infix-expression/infix-expression.translator';
import { InstanceMemberExpressionTranslator } from './instance-member-expression/instance-member-expression.translator';
import { LambdaExpressionTranslator } from './lambda-expression/lambda-expression.translator';
import { LiteralExpressionTranslator } from './literal-expression/literal-expression.translator';
import { ParenthesizedExpressionTranslator } from './parenthesized-expression/parenthesized-expression.translator';
import { PostfixExpressionTranslator } from './postfix-expression/postfix-expression.translator';
import { PrefixExpressionTranslator } from './prefix-expression/prefix-expression.translator';
import { StringFormatExpressionTranslator } from './string-format-expression/string-format-expression.translator';

export function getExpressionTranslator(tree: ExpressionTree): ExpressionTranslator {
    if (tree === undefined) return undefined;

    if (tree instanceof ParenthesizedExpressionTree)
        return new ParenthesizedExpressionTranslator(tree);
    if (tree instanceof IdExpressionTree) return new IdExpressionTranslator(tree);
    if (tree instanceof LiteralExpressionTree) return new LiteralExpressionTranslator(tree);
    if (tree instanceof InstanceMemberExpressionTree)
        return new InstanceMemberExpressionTranslator(tree);
    if (tree instanceof StringFormatExpressionTree)
        return new StringFormatExpressionTranslator(tree);
    if (tree instanceof ArrayExpressionTree) return new ArrayExpressionTranslator(tree);
    if (tree instanceof IndexExpressionTree) return new IndexExpressionTranslator(tree);
    if (tree instanceof LambdaExpressionTree) return new LambdaExpressionTranslator(tree);
    if (tree instanceof FunctionExpressionTree) return new FunctionExpressionTranslator(tree);
    if (tree instanceof InfixExpressionTree) return new InfixExpressionTranslator(tree);
    if (tree instanceof PrefixExpressionTree) return new PrefixExpressionTranslator(tree);
    if (tree instanceof PostfixExpressionTree) return new PostfixExpressionTranslator(tree);

    throw Error('No Expression found');
}

export function translateExpressionTree(tree: ExpressionTree): string {
    return getExpressionTranslator(tree).translate();
}

export function translateExpressionsTrees(tree: ExpressionTree[]): string {
    return tree.map((x) => getExpressionTranslator(x).translate()).join(EOL);
}
