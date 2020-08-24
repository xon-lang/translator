import { translateExpression } from '../../../translate';

test('unary minus', () => {
    const code = '- 234';
    const result = translateExpression(code);
    expect(result).toBe('-234');
});
