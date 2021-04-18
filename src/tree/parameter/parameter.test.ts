import { translateParameter } from '../../translate';

test('one_plus_one', () => {
    const code = 'p String';
    expect(translateParameter(code)).toBe('p: string');
});
