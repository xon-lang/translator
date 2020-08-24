import { translateExpression } from '../../../translate';

test('unary plus', () => {
    const code = '2 + + 234';
    const result = translateExpression(code);
    expect(result).toBe('2 + +234');
});
