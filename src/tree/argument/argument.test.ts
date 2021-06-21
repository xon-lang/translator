import { translateArgument } from '../../translate';

test('has name', () => {
    const code = 'p = 123';
    expect(translateArgument(code)).toBe('p = 123');
});

test('has no name', () => {
    const code = '123';
    expect(translateArgument(code)).toBe('123');
});
