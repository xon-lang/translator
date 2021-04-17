import { PlainTypeTree, TypeTree } from '@xon/ast';
import { PlainTypeTranslator } from './plain-type/plain-type.translator';
import { TypeTranslator } from './type.translator';

export function getTypeTranslator(tree: TypeTree): TypeTranslator {
    if (tree instanceof PlainTypeTree) return new PlainTypeTranslator(tree);

    throw Error('No Type found');
}

export function translateTypesTrees(tree: TypeTree[]): string {
    return tree.map((x) => getTypeTranslator(x).translate()).join(', ');
}
