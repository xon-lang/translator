import { translateStatement } from '../../../translate';

test('one_plus_one', () => {
    const code = 'a = 5';
    expect(translateStatement(code)).toBe('a = 5;');
});
