import { translateExpression } from '../../../translate';

test('int literal', () => {
    const code = '2534';
    expect(translateExpression(code)).toBe('2534');
});

test('float literal', () => {
    const code = '2534.32';
    expect(translateExpression(code)).toBe('2534.32');
});

test('string literal', () => {
    const code = '"string literal"';
    expect(translateExpression(code)).toBe('`string literal`');
});

test('null literal', () => {
    const code = 'null';
    expect(translateExpression(code)).toBe('null');
});

test('boolean literal', () => {
    const code = 'true';
    expect(translateExpression(code)).toBe('true');
});
