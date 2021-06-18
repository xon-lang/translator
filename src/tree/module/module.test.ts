import { parseModule } from '@xon/ast';
import { ModuleTranslator } from './module.translator';

test('one_plus_one', () => {
    const code = '1 + 1';
    const tree = parseModule(code);
    const result = new ModuleTranslator(tree).translate();
    expect(result).toBe('1 + 1;');
});
