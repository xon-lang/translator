import { translateExpression } from '../../../translate';

test('array', () => {
    const code = "[1+1, 34, 'str']";
    expect(translateExpression(code)).toBe('[1 + 1, 34, `str`]');
});
