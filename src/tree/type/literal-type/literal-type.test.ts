import { translateType } from '../../../translate';

test('has true value', () => {
    const code = 'true';
    expect(translateType(code)).toBe('true');
});

test('has string value', () => {
    const code = '"string"';
    expect(translateType(code)).toBe('"string"');
});
