import { translateExpression } from '../../../translate';

test('one minus one', () => {
    const code = '1-1';
    expect(translateExpression(code)).toBe('1 - 1');
});
