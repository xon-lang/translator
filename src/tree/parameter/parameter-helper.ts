import { ParameterTree } from '@xon/ast';
import { ParameterTranslator } from './parameter.translator';

export function translateParameterTree(tree: ParameterTree): string {
    return new ParameterTranslator(tree).translate();
}

export function translateParametersTrees(tree: ParameterTree[]): string[] {
    return tree.map(translateParameterTree);
}
