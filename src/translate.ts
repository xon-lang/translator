import { parseCode, parseExpression, ProgramTree } from '@xon/ast';
import { getExpressionTranslator } from './tree/expression/expression-helper';
import { ProgramTranslator } from './tree/program/program.translator';

export function translateExpression(xonCode: string) {
    const tree = parseExpression(xonCode);
    const translator = getExpressionTranslator(tree);
    return translator.translate();
}

export function translateProgram(xonCode: string) {
    const tree = parseCode(xonCode, ProgramTree);
    const translator = new ProgramTranslator(tree);
    return translator.translate();
}
