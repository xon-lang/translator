import { translateExpression } from '../../../translate';

test('parenthesized a', () => {
    const code = '(a)';
    expect(translateExpression(code)).toBe('a');
});

test('parenthesized simple', () => {
    const code = '(1+1)';
    expect(translateExpression(code)).toBe('(1 + 1)');
});

test('parenthesized complex', () => {
    const code = '(1*(1 - 1)/2)';
    expect(translateExpression(code)).toBe('(1 * (1 - 1) / 2)');
});
