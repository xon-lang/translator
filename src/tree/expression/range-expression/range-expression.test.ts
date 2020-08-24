import { translateExpression } from "../../../translate";

test('range', () => {
    const code = '[5: 10:3]';
    expect(translateExpression(code)).toBe('range(5, 10, 3)');
});
