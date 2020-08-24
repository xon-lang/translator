import { translateExpression } from '../../../translate';

test('bit not', () => {
    const code = 'some.prop[1+1]';
    const result = translateExpression(code);
    expect(result).toBe('some.prop[1 + 1]');
});
