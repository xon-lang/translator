import { translateType } from '../../../translate';

test('has union type value', () => {
    const code = '(Cat | Dog)';
    expect(translateType(code)).toBe('(Cat | Dog)');
});
