import { LogicalAndExpressionTree, parseCode } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';

test('logical and', () => {
    const code = '88 &&  1 ';
    const tree = parseCode(code, LogicalAndExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('88 && 1');
});
