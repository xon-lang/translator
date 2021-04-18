import { translateType } from '../../../translate';

test('has no generics', () => {
    const code = '(Integer) String';
    expect(translateType(code)).toBe('(number)=>string');
});

test('has generics', () => {
    const code = '<T>(Integer) T';
    expect(translateType(code)).toBe('<T>(number)=>T');
});
