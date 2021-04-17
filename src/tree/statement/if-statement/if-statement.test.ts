import { translateStatement } from '../../../translate';

test('has single then statement', () => {
    const code = 'if 2 + 3: return 5';
    expect(translateStatement(code)).toBe('if (2 + 3) {\n    return 5;\n}');
});

test('has two then statements', () => {
    const code = `
if 2 + 3:
    log(2)
    return 5
`.trim();
    expect(translateStatement(code)).toBe(
        `
if (2 + 3) {
    log(2);
    return 5;
}
`.trim()
    );
});

test('has then and else statements', () => {
    const code = `
if 2 + 3:
    log(2)
    return 5
else:
    hello(
        3,
        6+7
    )
    bye + bye
`.trim();
    expect(translateStatement(code)).toBe(
        `
if (2 + 3) {
    log(2);
    return 5;
} else {
    hello(3, 6 + 7);
    bye + bye;
}
`.trim()
    );
});
