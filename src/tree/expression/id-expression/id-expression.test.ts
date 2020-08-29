import { translateExpression } from '../../../translate';

test('id', () => {
    const code = 'someName';
    expect(translateExpression(code)).toBe('someName');
});
