import { translateExpression } from '../../../translate';

test('member', () => {
    const code = 'smth.Anth';
    expect(translateExpression(code)).toBe('smth.Anth');
});
