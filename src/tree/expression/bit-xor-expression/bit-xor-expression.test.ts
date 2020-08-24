import { translateExpression } from '../../../translate';

test('bit xor', () => {
    const code = '234 xor 123';
    const result = translateExpression(code);
    expect(result).toBe('234 ^ 123');
});
