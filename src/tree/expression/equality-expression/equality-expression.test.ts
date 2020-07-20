import { EqualityExpressionTree, parseCode } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';

test('equals', () => {
    const code = 'a == b';
    const tree = parseCode(code, EqualityExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('a == b');
});

test('not equals', () => {
    const code = 'a != b';
    const tree = parseCode(code, EqualityExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('a != b');
});
