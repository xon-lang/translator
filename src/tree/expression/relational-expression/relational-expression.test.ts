import { parseCode, RelationalExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';

test('great realational', () => {
    const code = 'a > b';
    const tree = parseCode(code, RelationalExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('a > b');
});

test('less realational', () => {
    const code = 'a < b';
    const tree = parseCode(code, RelationalExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('a < b');
});

test('great eq realational', () => {
    const code = 'a >= b';
    const tree = parseCode(code, RelationalExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('a >= b');
});

test('less eq realational', () => {
    const code = 'a <= b';
    const tree = parseCode(code, RelationalExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('a <= b');
});

