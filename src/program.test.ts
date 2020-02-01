import { evalExpression, parseExpression } from '@xon/ast/test-helper';

test('check ast', () => {
    const code = '100 >> 4 |x: x^x + x |z: z^x && x^z | z + x';
    const tree = parseExpression(code);
    const result = evalExpression(tree);

    console.log(result);
});
