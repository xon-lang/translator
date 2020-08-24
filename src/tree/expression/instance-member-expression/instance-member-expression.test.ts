import { InstanceMemberExpressionTree, parseCode } from '@xon/ast';
import { getExpressionTranslator } from '../expression-helper';

test('instance member', () => {
    const code = 'this.someMember';
    const tree = parseCode(code, InstanceMemberExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('this.someMember');
});
