import { translateExpression } from '../../../translate';

test('string format', () => {
    const code = '"My name is {"John"} and age is {20+7}"';
    expect(translateExpression(code)).toBe('(`My name is ` + `John` + ` and age is ` + (20 + 7))');
});
