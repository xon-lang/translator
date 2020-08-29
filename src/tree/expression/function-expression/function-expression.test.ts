import { translateExpression } from '../../../translate';

test('function call', () => {
    const code = "on.non (123,'qwe'  )";
    expect(translateExpression(code)).toBe('on.non(123, `qwe`)');
});
