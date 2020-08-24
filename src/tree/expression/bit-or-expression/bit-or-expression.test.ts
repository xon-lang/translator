import { translateExpression } from '../../../translate';

test('bit not', () => {
    const code = '234 or 123';
    const result = translateExpression(code);
    expect(result).toBe('234 | 123');
});
