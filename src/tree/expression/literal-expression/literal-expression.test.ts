import { LiteralExpressionTree, parseCode } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';

test('int literal', () => {
    const code = '2534';
    const tree = parseCode(code, LiteralExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('2534');
});

test('float literal', () => {
    const code = '2534.32';
    const tree = parseCode(code, LiteralExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('2534.32');
});

test('string literal', () => {
    const code = "'string literal'";
    const tree = parseCode(code, LiteralExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe("'string literal'");
});

test('null literal', () => {
    const code = 'null';
    const tree = parseCode(code, LiteralExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('null');
});

test('boolean literal', () => {
    const code = 'true';
    const tree = parseCode(code, LiteralExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('true');
});
