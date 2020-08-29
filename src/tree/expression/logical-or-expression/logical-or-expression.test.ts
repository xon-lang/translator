import { translateExpression } from '../../../translate';

test('logical or', () => {
    const code = '88 ||  1 ';
    expect(translateExpression(code)).toBe('88 || 1');
});
