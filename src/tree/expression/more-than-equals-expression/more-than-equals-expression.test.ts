import { translateExpression } from '../../../translate';

test('more than equals', () => {
    const code = 'a>=b';
    expect(translateExpression(code)).toBe('a >= b');
});
