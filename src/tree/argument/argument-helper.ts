import { ArgumentTree } from '@xon/ast';
import { ArgumentTranslator } from './argument.translator';

export function translateArgumentTree(tree: ArgumentTree): string {
    return new ArgumentTranslator(tree).translate();
}

export function translateArgumentsTrees(tree: ArgumentTree[]): string[] {
    return tree.map(translateArgumentTree);
}
