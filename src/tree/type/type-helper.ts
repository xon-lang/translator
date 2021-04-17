import {
    FunctionTypeTree,
    LiteralTypeTree,
    NullableTypeTree,
    ParenthesizedTypeTree,
    PlainTypeTree,
    TypeTree,
    UnionTypeTree,
} from '@xon/ast';
import { FunctionTypeTranslator } from './function-type/function-type.translator';
import { LiteralTypeTranslator } from './literal-type/literal-type.translator';
import { NullableTypeTranslator } from './nullable-type/nullable-type.translator';
import { ParenthesizedTypeTranslator } from './parenthesized-type/parenthesized-type.translator';
import { PlainTypeTranslator } from './plain-type/plain-type.translator';
import { TypeTranslator } from './type.translator';
import { UnionTypeTranslator } from './union-type/union-type.translator';

export function getTypeTranslator(tree: TypeTree): TypeTranslator {
    if (tree === undefined) return undefined;

    if (tree instanceof FunctionTypeTree) return new FunctionTypeTranslator(tree);
    if (tree instanceof LiteralTypeTree) return new LiteralTypeTranslator(tree);
    if (tree instanceof NullableTypeTree) return new NullableTypeTranslator(tree);
    if (tree instanceof ParenthesizedTypeTree) return new ParenthesizedTypeTranslator(tree);
    if (tree instanceof PlainTypeTree) return new PlainTypeTranslator(tree);
    if (tree instanceof UnionTypeTree) return new UnionTypeTranslator(tree);

    throw Error(`Type translator not found for "${this.constructor.name}"`);
}

export function translateTypeTree(tree: TypeTree): string {
    return getTypeTranslator(tree)?.translate();
}
export function translateTypesTrees(tree: TypeTree[]): string[] {
    return tree.map(translateTypeTree);
}
