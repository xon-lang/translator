import { BitNotExpressionTree, parseCode } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';

test('bit not', () => {
    const code = '~234';
    const tree = parseCode(code, BitNotExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('~234');
});
