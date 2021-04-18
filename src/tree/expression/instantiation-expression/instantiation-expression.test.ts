import { translateExpression } from '../../../translate';

test('has generics', () => {
    const code = 'Animal<String>("meow")';
    expect(translateExpression(code)).toBe('new Animal<string>("meow")');
});

test('has no generics', () => {
    const code = 'Animal("meow")';
    expect(translateExpression(code)).toBe('new Animal("meow")');
});

test('has no generics and arguments', () => {
    const code = 'Animal()';
    expect(translateExpression(code)).toBe('new Animal()');
});
