export const INDENT_STR = '    '

export function indent(s: string) {
    return s
        .split('\n')
        .map(x => INDENT_STR + x)
        .join('\n');
}
