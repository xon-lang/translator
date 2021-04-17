import {
    parseDefinition,
    parseExpression,
    parseProgram,
    parseStatement,
    parseType,
} from '@xon/ast';
import { DefinitionTranslator } from './tree/definition/definition.translator';
import { getExpressionTranslator } from './tree/expression/expression-helper';
import { ProgramTranslator } from './tree/program/program.translator';
import { getStatementTranslator } from './tree/statement/statement-helper';
import { translateTypeTree } from './tree/type/type-helper';

export function translateType(code: string) {
    const tree = parseType(code);
    return translateTypeTree(tree);
}

export function translateExpression(code: string) {
    const tree = parseExpression(code);
    const translator = getExpressionTranslator(tree);
    return translator.translate();
}

export function translateStatement(code: string) {
    const tree = parseStatement(code);
    const translator = getStatementTranslator(tree);
    return translator.translate();
}

export function translateDefinition(code: string) {
    const tree = parseDefinition(code);
    const translator = new DefinitionTranslator(tree);
    return translator.translate();
}

export function translateProgram(code: string) {
    const tree = parseProgram(code);
    const translator = new ProgramTranslator(tree);
    return translator.translate();
}
