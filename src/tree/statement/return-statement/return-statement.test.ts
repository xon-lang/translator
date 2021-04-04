import { translateStatement } from '../../../translate';

test('one_plus_one', () => {
    const code = 'return  123 ';
    expect(translateStatement(code)).toBe('return 123');
});
