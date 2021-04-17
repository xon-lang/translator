import { translateExpression } from '../../../translate';

test('function call', () => {
    const code = 'non (123,"qwe"  )';
    expect(translateExpression(code)).toBe('non(123, "qwe")');
});
