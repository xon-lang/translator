import { AddSubExpressionTree, parseCode } from '@xon/ast';
import { getExpressionTranslator } from '../../expression/expression-helper';

test('one_plus_one', () => {
    const code = '1+1';
    const tree = parseCode(code, AddSubExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('1 + 1');
});

test('minus operation', () => {
    const code = '1-1';
    const tree = parseCode(code, AddSubExpressionTree);
    const result = getExpressionTranslator(tree).translate();
    expect(result).toBe('1 - 1');
});
