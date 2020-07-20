import { BitNotExpressionTree, parseCode, IfExpressionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';

test('if', () => {
    const code = 'if a== 4 && b>5: do()';
    const tree = parseCode(code, IfExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('if (a == 4 && b > 5) {\n    do()\n}');
});
