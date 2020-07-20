import { IdExpressionTree, parseCode } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';

test('id', () => {
    const code = 'someName';
    const tree = parseCode(code, IdExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('someName');
});
