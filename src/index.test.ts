import { evalExpression, parseExpression } from '@xon/ast';

test('check ast', () => {
    const code = '3+3';
    const tree = parseExpression(code);
    const result = evalExpression(tree);

    console.log(result);
});
