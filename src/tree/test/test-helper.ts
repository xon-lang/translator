import { TestTree } from '@xon/ast';
import { TestTranslator } from './test.translator';

export function translateTestTree(tree: TestTree): string {
    return new TestTranslator(tree).translate();
}

export function translateTestsTrees(tree: TestTree[]): string[] {
    return tree.map(translateTestTree);
}
