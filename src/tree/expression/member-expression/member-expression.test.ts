import { translateExpression } from '../../../translate';

test('member', () => {
    const code = 'o.prop';
    expect(translateExpression(code)).toBe('o.prop');
});
