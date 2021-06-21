import { parseFunction } from '@xon/ast';
import { FunctionTranslator } from './function.translator';

test('has single statement', () => {
    const code = 'sum(a Integer, b Integer) Integer:\n    c=5\n    return a +b+c';
    const tree = parseFunction(code);
    const result = new FunctionTranslator(tree).translate();
    expect(result).toBe(
        `
export function sum(a: number, b: number): number {
    var c: number
    c = 5;
    return a + b + c;
}
`.trim()
    );
});
