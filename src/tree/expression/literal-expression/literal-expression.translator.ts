import { LiteralExpressionTree, StringLiteralTree } from '@xon/ast';
// import {  StringLiteralTree } from '@xon/ast/dist/tree/literal/string-literal/string-literal.tree';
import { ExpressionTranslator } from '../expression.translator';

export class LiteralExpressionTranslator extends ExpressionTranslator {
    constructor(public tree: LiteralExpressionTree) {
        super();
    }

    translate() {
        if (this.tree.literal instanceof StringLiteralTree) {
            const lines = this.tree.literal.value.split('\n');
            if (lines.length > 1) {
                const s = lines.map(x => `'${x}\\n'`).join(` +\n`);
                return `${s}`;
            }
            return `'${this.tree.literal.value}'`;
        }
        return this.tree.literal.value.toString();
    }
}
