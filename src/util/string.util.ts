export const NL = '\n';
export const NL2 = NL + NL;
export const INDENT_STR = '    ';

export function braceIndent(s: string) {
    return ' {' + NL + indent(s) + NL + '}';
}

export function indent(s: string) {
    return s
        .split('\n')
        .map((x) => x.trim() && INDENT_STR + x)
        .join('\n');
}

export function indentSkipFirst(s: string) {
    return s
        .split('\n')
        .map((x, i) => (i == 0 ? '' : x.trim() && INDENT_STR) + x)
        .join('\n');
}
