import { translateStatement } from '../../../translate';

test('has empty return', () => {
    const code = 'return ';
    expect(translateStatement(code)).toBe('return;');
});

test('has value after return', () => {
    const code = 'return  123 ';
    expect(translateStatement(code)).toBe('return 123;');
});
