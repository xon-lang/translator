import { translateExpression } from '../../../translate';

test('integer literal', () => {
    const code = '5';
    expect(translateExpression(code)).toBe('5');
});
