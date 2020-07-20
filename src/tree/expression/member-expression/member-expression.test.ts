import { MemberExpressionTree, parseCode } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';

test('member', () => {
    const code = 'smth.Anth';
    const tree = parseCode(code, MemberExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('smth.Anth');
});
