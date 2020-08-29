import { translateExpression } from '../../../translate';

test('instance member', () => {
    const code = 'this.someMember';
    expect(translateExpression(code)).toBe('this.someMember');
});
