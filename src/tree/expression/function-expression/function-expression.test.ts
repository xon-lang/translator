import { FunctionExpressionTree, parseCode } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';

test('function call', () => {
    const code = "on.non (123,'qwe'  )";
    const tree = parseCode(code, FunctionExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe("on.non(123, 'qwe')");
});
