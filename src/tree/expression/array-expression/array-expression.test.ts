import { ArrayExpressionTree, parseCode } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';

test('array', () => {
    const code = "[1+1, 34, 'str']";
    const tree = parseCode(code, ArrayExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe("[1 + 1, 34, `str`]");
});
