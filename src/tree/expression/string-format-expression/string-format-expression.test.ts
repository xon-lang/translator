import { parseCode, StringFormatExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';

test('string format', () => {
    const code = "f'My name is {'John'} and age is {20+7}'";
    const tree = parseCode(code, StringFormatExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe("'My name is ' + 'John' + ' and age is ' + 20 + 7");
});
