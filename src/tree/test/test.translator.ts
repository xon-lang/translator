import { TestTree } from '@xon/ast';
import { braceIndent } from '../../util/string.util';
import { BaseTranslator } from '../base.translator';
import { translateExpressionTree } from '../expression/expression-helper';
import { translateStatementsTrees } from '../statement/statement-helper';

export class TestTranslator extends BaseTranslator {
    constructor(public tree: TestTree) {
        super();
    }

    translate() {
        const name = translateExpressionTree(this.tree.name);
        const body = translateStatementsTrees(this.tree.body).join('\n');
        return `test(${name}, () =>` + braceIndent(body) + `);`;
    }
}
