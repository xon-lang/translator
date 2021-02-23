import { translateExpression } from "../../../translate";

test('one plus one', () => {
    const code = '1+1';
    expect(translateExpression(code)).toBe('1 + 1');
});
