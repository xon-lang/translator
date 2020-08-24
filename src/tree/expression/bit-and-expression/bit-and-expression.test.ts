import { translateExpression } from '../../../translate';

test('bit and', () => {
    const code = '234 and 123';
    const result = translateExpression(code);
    expect(result).toBe('234 & 123');
});
