import { BitNotExpressionTree, parseCode, SelectExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';

test('select', () => {
    const code = 'select x:\n\t1+1: log()';
    const tree = parseCode(code, SelectExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('((x === 1 + 1) && (log()))');
});
