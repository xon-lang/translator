import { LogicalOrExpressionTree, parseCode } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';

test('logical or', () => {
    const code = '88 ||  1 ';
    const tree = parseCode(code, LogicalOrExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('88 || 1');
});
