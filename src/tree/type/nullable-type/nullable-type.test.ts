import { translateType } from '../../../translate';

test('has integer type', () => {
    const code = 'Integer?';
    expect(translateType(code)).toBe('Integer?');
});

test('has integer literal type', () => {
    const code = '7?';
    expect(translateType(code)).toBe('7?');
});
