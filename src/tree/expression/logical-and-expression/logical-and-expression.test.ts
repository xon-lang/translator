import { translateExpression } from '../../../translate';

test('logical and', () => {
    const code = '88 &&  1 ';
    expect(translateExpression(code)).toBe('88 && 1');
});
