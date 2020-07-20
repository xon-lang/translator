import { AddSubExpressionTranslator } from './add-sub-expression.translator';
import { getExpressionTranslator } from '../expression-helper';
import { parseCode, AddSubExpressionTree } from '@xon/ast';

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
