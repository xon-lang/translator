import { translateStatement } from '../../../translate';

test('one_plus_one', () => {
    const code = '#{hello my dear friend}';
    expect(translateStatement(code)).toBe('hello my dear friend');
});
