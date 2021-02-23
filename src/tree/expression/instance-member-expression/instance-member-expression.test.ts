import { translateExpression } from '../../../translate';

test('instance member', () => {
    const code = '@someMember';
    expect(translateExpression(code)).toBe('this.someMember');
});
