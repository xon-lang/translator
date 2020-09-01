import { translateExpression } from '../../../translate';

test('string format', () => {
    const code = "f'My name is {'John'} and age is {20+7}'";
    expect(translateExpression(code)).toBe('(`My name is ` + `John` + ` and age is ` + (20 + 7))');
});
