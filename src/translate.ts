import { parseDefinition, parseExpression, parseProgram, parseStatement } from '@xon/ast';
import { DefinitionTranslator } from './tree/definition/definition.translator';
import { getExpressionTranslator } from './tree/expression/expression-helper';
import { ProgramTranslator } from './tree/program/program.translator';
import { getStatementTranslator } from './tree/statement/statement-helper';

export function translateExpression(xonCode: string) {
    const tree = parseExpression(xonCode);
    const translator = getExpressionTranslator(tree);
    return translator.translate();
}

export function translateStatement(xonCode: string) {
    const tree = parseStatement(xonCode);
    const translator = getStatementTranslator(tree);
    return translator.translate();
}

export function translateDefinition(xonCode: string) {
    const tree = parseDefinition(xonCode);
    const translator = new DefinitionTranslator(tree);
    return translator.translate();
}

export function translateProgram(xonCode: string) {
    const tree = parseProgram(xonCode);
    const translator = new ProgramTranslator(tree);
    return translator.translate();
}
