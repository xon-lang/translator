import { translateExpression } from '../../../translate';

test('bit not', () => {
    const code = 'not 234';
    const result = translateExpression(code);
    expect(result).toBe('~234');
});
