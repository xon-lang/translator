import {
    AssignmentStatementTree,
    ExpressionStatementTree,
    IfStatementTree,
    PreprocessorStatementTree,
    ReturnStatementTree,
    StatementTree,
} from '@xon/ast';
import { AssignmentStatementTranslator } from './assignment-statement/assignment-statement.translator';
import { ExpressionStatementTranslator } from './expression-statement/expression-statement.translator';
import { IfStatementTranslator } from './if-statement/if-statement.translator';
import { PreprocessorStatementTranslator } from './preprocessor-statement/preprocessor-statement.translator';
import { ReturnStatementTranslator } from './return-statement/return-statement.translator';
import { StatementTranslator } from './statement.translator';

export function getStatementTranslator(tree: StatementTree): StatementTranslator {
    if (tree instanceof AssignmentStatementTree) return new AssignmentStatementTranslator(tree);
    if (tree instanceof PreprocessorStatementTree) return new PreprocessorStatementTranslator(tree);
    if (tree instanceof ExpressionStatementTree) return new ExpressionStatementTranslator(tree);
    if (tree instanceof IfStatementTree) return new IfStatementTranslator(tree);
    if (tree instanceof ReturnStatementTree) return new ReturnStatementTranslator(tree);
    throw 'No Statement found for ' + tree.type;
}
