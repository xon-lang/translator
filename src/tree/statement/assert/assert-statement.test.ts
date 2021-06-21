import { translateStatement } from '../../../translate';

test('has literal actual', () => {
    const code = 'actual: 1+1\nexpect: 2';
    expect(translateStatement(code)).toBe('expect(1 + 1).toBe(2);');
});
