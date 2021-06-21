import { AssertStatementTree } from '@xon/ast';
import { translateExpressionTree } from '../../expression/expression-helper';
import { StatementTranslator } from '../statement.translator';

export class AssertStatementTranslator extends StatementTranslator {
    constructor(public tree: AssertStatementTree) {
        super();
    }

    translate() {
        const actual = translateExpressionTree(this.tree.actual);
        const expect = translateExpressionTree(this.tree.expect);
        return `expect(${actual}).toBe(${expect});`;
    }
}
