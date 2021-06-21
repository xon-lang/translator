import { translateStatement } from '../../../translate';

test('has literal assignment', () => {
    const code = 'this.a = 5';
    expect(translateStatement(code)).toBe('this.a = 5;');
});
