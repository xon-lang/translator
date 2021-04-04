import { translateExpression } from '../../../translate';

test('array', () => {
    const code = '[ 34, "str"]';
    expect(translateExpression(code)).toBe('[34, `str`]');
});
