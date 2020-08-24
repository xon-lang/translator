import {
    AddExpressionTree,
    ArrayExpressionTree,
    BitAndExpressionTree,
    BitLeftShiftExpressionTree,
    BitNotExpressionTree,
    BitOrExpressionTree,
    BitRightShiftExpressionTree,
    BitXorExpressionTree,
    DivideExpressionTree,
    EqualsExpressionTree,
    ExpressionTree,
    FunctionExpressionTree,
    IdExpressionTree,
    IfExpressionTree,
    IndexExpressionTree,
    InstanceMemberExpressionTree,
    LessThanEqualsExpressionTree,
    LessThanExpressionTree,
    LiteralExpressionTree,
    LogicalAndExpressionTree,
    LogicalOrExpressionTree,
    LoopExpressionTree,
    MemberExpressionTree,
    MoreThanEqualsExpressionTree,
    MoreThanExpressionTree,
    MultiplyExpressionTree,
    NotEqualsExpressionTree,
    ParenthesizedExpressionTree,
    SelectExpressionTree,
    StringFormatExpressionTree,
    SubstractExpressionTree,
} from '@xon/ast';
import { AddExpressionTranslator } from './add-expression/add-expression.translator';
import { ArrayExpressionTranslator } from './array-expression/array-expression.translator';
import { BitAndExpressionTranslator } from './bit-and-expression/bit-and-expression.translator';
import { BitLeftShiftExpressionTranslator } from './bit-left-shift-expression/bit-left-shift-expression.translator';
import { BitNotExpressionTranslator } from './bit-not-expression/bit-not-expression.translator';
import { BitOrExpressionTranslator } from './bit-or-expression/bit-or-expression.translator';
import { BitRightShiftExpressionTranslator } from './bit-right-shift-expression/bit-right-shift-expression.translator';
import { BitXorExpressionTranslator } from './bit-xor-expression/bit-xor-expression.translator';
import { DivideExpressionTranslator } from './divide-expression/divide-expression.translator';
import { EqualsExpressionTranslator } from './equals-expression/equals-expression.translator';
import { ExpressionTranslator } from './expression.translator';
import { FunctionExpressionTranslator } from './function-expression/function-expression.translator';
import { IdExpressionTranslator } from './id-expression/id-expression.translator';
import { IfExpressionTranslator } from './if-expression/if-expression.translator';
import { IndexExpressionTranslator } from './index-expression/index-expression.translator';
import { InstanceMemberExpressionTranslator } from './instance-member-expression/instance-member-expression.translator';
import { LessThanEqualsExpressionTranslator } from './less-than-equals-expression/less-than-equals-expression.translator';
import { LessThanExpressionTranslator } from './less-than-expression/less-than-expression.translator';
import { LiteralExpressionTranslator } from './literal-expression/literal-expression.translator';
import { LogicalAndExpressionTranslator } from './logical-and-expression/logical-and-expression.translator';
import { LogicalOrExpressionTranslator } from './logical-or-expression/logical-or-expression.translator';
import { MemberExpressionTranslator } from './member-expression/member-expression.translator';
import { MoreThanEqualsExpressionTranslator } from './more-than-equals-expression/more-than-equals-expression.translator';
import { MoreThanExpressionTranslator } from './more-than-expression/more-than-expression.translator';
import { MultiplyExpressionTranslator } from './multiply-expression/multiply-expression.translator';
import { NotEqualsExpressionTranslator } from './not-equals-expression/not-equals-expression.translator';
import { ParenthesizedExpressionTranslator } from './parenthesized-expression/parenthesized-expression.translator';
import { SelectExpressionTranslator } from './select-expression/select-expression.translator';
import { StringFormatExpressionTranslator } from './string-format-expression/string-format-expression.translator';
import { SubstractExpressionTranslator } from './substract-expression/substract-expression.translator';

export function getExpressionTranslator(tree: ExpressionTree): ExpressionTranslator {
    if (tree === undefined) return undefined;

    if (tree instanceof IdExpressionTree) return new IdExpressionTranslator(tree);
    if (tree instanceof FunctionExpressionTree) return new FunctionExpressionTranslator(tree);
    if (tree instanceof LiteralExpressionTree) return new LiteralExpressionTranslator(tree);
    if (tree instanceof MemberExpressionTree) return new MemberExpressionTranslator(tree);
    if (tree instanceof InstanceMemberExpressionTree)
        return new InstanceMemberExpressionTranslator(tree);
    if (tree instanceof MoreThanExpressionTree) return new MoreThanExpressionTranslator(tree);
    if (tree instanceof MoreThanEqualsExpressionTree)
        return new MoreThanEqualsExpressionTranslator(tree);
    if (tree instanceof LessThanExpressionTree) return new LessThanExpressionTranslator(tree);
    if (tree instanceof LessThanEqualsExpressionTree)
        return new LessThanEqualsExpressionTranslator(tree);
    if (tree instanceof AddExpressionTree) return new AddExpressionTranslator(tree);
    if (tree instanceof SubstractExpressionTree) return new SubstractExpressionTranslator(tree);
    if (tree instanceof MultiplyExpressionTree) return new MultiplyExpressionTranslator(tree);
    if (tree instanceof DivideExpressionTree) return new DivideExpressionTranslator(tree);
    if (tree instanceof LogicalAndExpressionTree) return new LogicalAndExpressionTranslator(tree);
    if (tree instanceof LogicalOrExpressionTree) return new LogicalOrExpressionTranslator(tree);
    if (tree instanceof StringFormatExpressionTree)
        return new StringFormatExpressionTranslator(tree);
    if (tree instanceof BitAndExpressionTree) return new BitAndExpressionTranslator(tree);
    if (tree instanceof BitLeftShiftExpressionTree)
        return new BitLeftShiftExpressionTranslator(tree);
    if (tree instanceof BitNotExpressionTree) return new BitNotExpressionTranslator(tree);
    if (tree instanceof BitOrExpressionTree) return new BitOrExpressionTranslator(tree);
    if (tree instanceof BitRightShiftExpressionTree)
        return new BitRightShiftExpressionTranslator(tree);
    if (tree instanceof BitXorExpressionTree) return new BitXorExpressionTranslator(tree);
    if (tree instanceof IfExpressionTree) return new IfExpressionTranslator(tree);
    if (tree instanceof SelectExpressionTree) return new SelectExpressionTranslator(tree);
    if (tree instanceof ArrayExpressionTree) return new ArrayExpressionTranslator(tree);
    if (tree instanceof EqualsExpressionTree) return new EqualsExpressionTranslator(tree);
    if (tree instanceof NotEqualsExpressionTree) return new NotEqualsExpressionTranslator(tree);
    if (tree instanceof IndexExpressionTree) return new IndexExpressionTranslator(tree);

    if (tree instanceof ParenthesizedExpressionTree) {
        if (
            'left' in tree.value ||
            tree instanceof SelectExpressionTree ||
            tree instanceof IfExpressionTree ||
            tree instanceof LoopExpressionTree
        ) {
            return new ParenthesizedExpressionTranslator(tree);
        }
        return getExpressionTranslator(tree.value);
    }

    throw Error('No Expression found for ' + tree.treeType);
}
