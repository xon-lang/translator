import { BitNotExpressionTree, parseCode } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';

test('one_plus_one', () => {
    const code = '~2534';
    const tree = parseCode(code, BitNotExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('~2534');
});
