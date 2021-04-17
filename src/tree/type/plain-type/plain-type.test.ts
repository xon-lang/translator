import { translateType } from '../../../translate';

test('has no generics', () => {
    const code = 'Animal';
    expect(translateType(code)).toBe('Animal');
});

test('has generics', () => {
    const code = 'Animal<Integer>';
    expect(translateType(code)).toBe('Animal<Integer>');
});
