import { translateExpression } from "../../../translate";

test('less than', () => {
    const code = 'a < b ';
    expect(translateExpression(code)).toBe('a < b');
});
