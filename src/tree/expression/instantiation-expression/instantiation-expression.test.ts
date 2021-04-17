import { translateExpression } from '../../../translate';

test('id', () => {
    const code = 'Animal<String>("meow")';
    expect(translateExpression(code)).toBe('new Animal<String>("meow")');
});
