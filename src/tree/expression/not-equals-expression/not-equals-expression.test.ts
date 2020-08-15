import { translateExpression } from '../../../translate';

test('not equals', () => {
    const code = 'a!= b';
    expect(translateExpression(code)).toBe('a == b');
});
