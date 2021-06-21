import { translateTest } from '../../translate';

test('has name', () => {
    const code = 'test "my simple test":\n    actual: 1+1\n    expect: 2';
    expect(translateTest(code)).toBe(`test("my simple test", () => {
    expect(1 + 1).toBe(2);
});`);
});
