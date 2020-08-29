import { translateExpression } from '../../../translate';

test('if', () => {
    const code = 'if a== 4 && b>5: do()';
    expect(translateExpression(code)).toBe('if (a == 4 && b > 5) {\n    do()\n}');
});
