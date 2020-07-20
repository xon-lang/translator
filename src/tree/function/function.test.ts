import { AddSubExpressionTree, parseCode, FunctionTree } from '@xon/ast';
import { getExpressionTranslator } from '../expression/expression-helper';
import { FunctionTranslator } from './function.translator';

test('function', () => {
    const code = '1+1';
    const tree = parseCode(code, FunctionTree);
    const result = new FunctionTranslator(tree).translate();
    expect(result).toBe('1 + 1');
});
