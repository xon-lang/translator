import { translateExpression } from '../../../translate';

test('equals', () => {
    const code = 'a== b';
    expect(translateExpression(code)).toBe('a == b');
});
