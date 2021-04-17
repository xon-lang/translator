import { translateExpression } from '../../../translate';

test('has integer operands', () => {
    const code = '1 and 2';
    expect(translateExpression(code)).toBe('1 && 2');
});
