import { translateExpression } from '../../../translate';

test('instance', () => {
    const code = 'this';
    expect(translateExpression(code)).toBe('this');
});
