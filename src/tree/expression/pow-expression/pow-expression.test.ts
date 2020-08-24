import { translateExpression } from '../../../translate';

test('pow', () => {
    const code = '25^ 30';
    expect(translateExpression(code)).toBe('Math.pow(25, 30)');
});
