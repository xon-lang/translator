import { translateExpression } from '../../../translate';

test('instance', () => {
    const code = '@';
    expect(translateExpression(code)).toBe('this');
});
