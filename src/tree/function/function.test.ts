import { parseFunction } from '@xon/ast';
import { FunctionTranslator } from './function.translator';

test('has single statement', () => {
    const code = 'sum(a Integer, b Integer) Integer:\n    return a +b';
    const tree = parseFunction(code);
    const result = new FunctionTranslator(tree).translate();
    expect(result).toBe(
        `
public sum(a: number, b: number): number {
    return a + b;
}
`.trim()
    );
});
