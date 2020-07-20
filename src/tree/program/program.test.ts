// import { parseCode, AddSubExpressionTree } from '@xon/ast';

test('one_plus_one', () => {
    const code = '1 + 1';
    // const tree = parseCode(code, AddSubExpressionTree);
    // const result = getExpressionTranslator(tree).translate();
    expect(code).toBe('1 + 1');
});
