import { translateType } from '../../../translate';

test('has no generics', () => {
    const code = '(Integer) String';
    expect(translateType(code)).toBe('(Integer)=>String');
});

test('has generics', () => {
    const code = '<T>(Integer) T';
    expect(translateType(code)).toBe('<T>(Integer)=>T');
});
