import { translateStatement } from '../../../translate';

test('has body', () => {
    const code = `
loop:
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
