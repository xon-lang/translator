import { translateExpression } from '../../../translate';

test('logical not', () => {
    const code = '!234';
    const result = translateExpression(code);
    expect(result).toBe('!234');
});
