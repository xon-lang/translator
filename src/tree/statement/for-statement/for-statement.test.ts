import { translateStatement } from '../../../translate';

test('has value and index keys', () => {
    const code = `
for v, i in [1, 2, 3]:
    log(2)
`.trim();
    expect(translateStatement(code)).toBe(
        `
for ([v, i] [1, 2, 3].entries()) {
    log(2);
}
`.trim()
    );
});