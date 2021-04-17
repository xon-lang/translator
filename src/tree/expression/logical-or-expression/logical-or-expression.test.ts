import { translateExpression } from '../../../translate';

test('has integer operands', () => {
    const code = '1 or 2';
    expect(translateExpression(code)).toBe('1 || 2');
});
