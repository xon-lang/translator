import { translateExpression } from '../../../translate';

test('has integer operand', () => {
    const code = '-1';
    expect(translateExpression(code)).toBe('-1');
});