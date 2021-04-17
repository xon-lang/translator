import { translateStatement } from '../../../translate';

test('integer literal', () => {
    const code = '5';
    expect(translateStatement(code)).toBe('5;');
});
