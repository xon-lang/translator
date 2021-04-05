import {
    ArrayExpressionTree,
    ExpressionTree,
    IdExpressionTree,
    IndexExpressionTree,
    InstanceExpressionTree,
    LambdaExpressionTree,
    LiteralExpressionTree,
    MemberExpressionTree,
    MethodExpressionTree,
    OperatorExpressionTree,
    ParenthesizedExpressionTree,
} from '@xon/ast';
import { EOL } from '../../util/string.util';
import { ArrayExpressionTranslator } from './array-expression/array-expression.translator';
import { ExpressionTranslator } from './expression.translator';
import { IdExpressionTranslator } from './id-expression/id-expression.translator';
import { IndexExpressionTranslator } from './index-expression/index-expression.translator';
import { InstanceExpressionTranslator } from './instance-expression/instance-expression.translator';
import { LambdaExpressionTranslator } from './lambda-expression/lambda-expression.translator';
import { LiteralExpressionTranslator } from './literal-expression/literal-expression.translator';
import { MemberExpressionTranslator } from './member-expression/member-expression.translator';
import { MethodExpressionTranslator } from './method-expression/method-expression.translator';
import { OperatorExpressionTranslator } from './operator-expression/operator-expression.translator';
import { ParenthesizedExpressionTranslator } from './parenthesized-expression/parenthesized-expression.translator';

export function getExpressionTranslator(tree: ExpressionTree): ExpressionTranslator {
    if (tree === undefined) return undefined;

    if (tree instanceof ParenthesizedExpressionTree)
        return new ParenthesizedExpressionTranslator(tree);
    if (tree instanceof IdExpressionTree) return new IdExpressionTranslator(tree);
    if (tree instanceof LiteralExpressionTree) return new LiteralExpressionTranslator(tree);
    if (tree instanceof ArrayExpressionTree) return new ArrayExpressionTranslator(tree);
    if (tree instanceof IndexExpressionTree) return new IndexExpressionTranslator(tree);
    if (tree instanceof LambdaExpressionTree) return new LambdaExpressionTranslator(tree);
    if (tree instanceof MethodExpressionTree) return new MethodExpressionTranslator(tree);
    if (tree instanceof OperatorExpressionTree) return new OperatorExpressionTranslator(tree);
    if (tree instanceof InstanceExpressionTree) return new InstanceExpressionTranslator(tree);
    if (tree instanceof MemberExpressionTree) return new MemberExpressionTranslator(tree);

    throw Error(`No Expression found for ${tree.metaType}`);
}

export function translateExpressionTree(tree: ExpressionTree): string {
    return getExpressionTranslator(tree).translate();
}

export function translateExpressionsTrees(tree: ExpressionTree[]): string {
    return tree.map((x) => getExpressionTranslator(x).translate()).join(EOL);
}
