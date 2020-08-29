import { translateExpression } from '../../../translate';

test('logical not', () => {
    const code = '!234';
    expect(translateExpression(code)).toBe('!234');
});
