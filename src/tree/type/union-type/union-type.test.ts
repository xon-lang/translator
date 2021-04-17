import { translateType } from '../../../translate';

test('has similar plain types', () => {
    const code = 'Lion | Leopard';
    expect(translateType(code)).toBe('Lion | Leopard');
});

test('has different types', () => {
    const code = 'Boolean | 3 | "Oak"';
    expect(translateType(code)).toBe('Boolean | 3 | "Oak"');
});
