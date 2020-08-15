import { parseExpression } from '@xon/ast';
import { getExpressionTranslator } from './tree/expression/expression-helper';

export function translateExpression(xonCode: string) {
    const tree = parseExpression(xonCode);
    const translator = getExpressionTranslator(tree);
    return translator.translate();
}
