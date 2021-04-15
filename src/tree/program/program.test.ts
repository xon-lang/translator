import { parseProgram } from '@xon/ast';
import { ProgramTranslator } from './program.translator';

test('one_plus_one', () => {
    const code = '1 + 1';
    const tree = parseProgram(code);
    const result = new ProgramTranslator(tree).translate();
    expect(result).toBe('1 + 1');
});
