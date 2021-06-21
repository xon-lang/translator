import {
    parseArgument,
    parseDefinition,
    parseExpression,
    parseModule,
    parseModuleFromFile,
    parseParameter,
    parseStatement,
    parseTest,
    parseType,
} from '@xon/ast';
import { translateArgumentTree } from './tree/argument/argument-helper';
import { DefinitionTranslator } from './tree/definition/definition.translator';
import { translateExpressionTree } from './tree/expression/expression-helper';
import { ModuleTranslator } from './tree/module/module.translator';
import { translateParameterTree } from './tree/parameter/parameter-helper';
import { translateStatementTree } from './tree/statement/statement-helper';
import { translateTestTree } from './tree/test/test-helper';
import { translateTypeTree } from './tree/type/type-helper';

export function translateType(code: string) {
    const tree = parseType(code);
    return translateTypeTree(tree);
}

export function translateParameter(code: string) {
    const tree = parseParameter(code);
    return translateParameterTree(tree);
}

export function translateArgument(code: string) {
    const tree = parseArgument(code);
    return translateArgumentTree(tree);
}

export function translateTest(code: string) {
    const tree = parseTest(code);
    return translateTestTree(tree);
}

export function translateExpression(code: string) {
    const tree = parseExpression(code);
    return translateExpressionTree(tree);
}

export function translateStatement(code: string) {
    const tree = parseStatement(code);
    return translateStatementTree(tree);
}

export function translateDefinition(code: string) {
    const tree = parseDefinition(code);
    return new DefinitionTranslator(tree).translate();
}

export function translateModule(code: string) {
    const tree = parseModule(code);
    return new ModuleTranslator(tree).translate();
}

export function translateModuleFromFile(filePath: string) {
    const tree = parseModuleFromFile(filePath);
    return new ModuleTranslator(tree).translate();
}
