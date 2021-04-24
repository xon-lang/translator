import {
    AssignmentStatementTree,
    ExpressionStatementTree,
    ForStatementTree,
    IfStatementTree,
    LoopStatementTree,
    PreprocessorStatementTree,
    ReturnStatementTree,
    StatementTree,
    WhileStatementTree,
} from '@xon/ast';
import { AssignmentStatementTranslator } from './assignment-statement/assignment-statement.translator';
import { ExpressionStatementTranslator } from './expression-statement/expression-statement.translator';
import { ForStatementTranslator } from './for-statement/for-statement.translator';
import { IfStatementTranslator } from './if-statement/if-statement.translator';
import { LoopStatementTranslator } from './loop-statement/loop-statement.translator';
import { PreprocessorStatementTranslator } from './preprocessor-statement/preprocessor-statement.translator';
import { ReturnStatementTranslator } from './return-statement/return-statement.translator';
import { StatementTranslator } from './statement.translator';
import { WhileStatementTranslator } from './while-statement/while-statement.translator';

export function getStatementTranslator(tree: StatementTree): StatementTranslator {
    if (tree === undefined) return undefined;

    if (tree instanceof AssignmentStatementTree) return new AssignmentStatementTranslator(tree);
    if (tree instanceof ExpressionStatementTree) return new ExpressionStatementTranslator(tree);
    if (tree instanceof ForStatementTree) return new ForStatementTranslator(tree);
    if (tree instanceof IfStatementTree) return new IfStatementTranslator(tree);
    if (tree instanceof LoopStatementTree) return new LoopStatementTranslator(tree);
    if (tree instanceof PreprocessorStatementTree) return new PreprocessorStatementTranslator(tree);
    if (tree instanceof ReturnStatementTree) return new ReturnStatementTranslator(tree);
    if (tree instanceof WhileStatementTree) return new WhileStatementTranslator(tree);

    throw Error(`Statement translator not found for "${this.constructor.name}"`);
}

export function translateStatementTree(tree: StatementTree): string {
    return getStatementTranslator(tree).translate();
}

export function translateStatementsTrees(tree: StatementTree[]): string[] {
    return tree?.map(translateStatementTree) || [];
}
