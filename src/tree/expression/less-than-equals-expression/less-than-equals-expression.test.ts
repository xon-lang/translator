import { translateExpression } from "../../../translate";

test('less than equals', () => {
    const code = 'a <= b';
    expect(translateExpression(code)).toBe('a <= b');
});
