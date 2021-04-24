import { translateStatement } from '../../../translate';

test('has boolean condition', () => {
    const code = `
while true:
    log(2)
`.trim();
    expect(translateStatement(code)).toBe(
        `
while (true) {
    log(2);
}
`.trim()
    );
});
