import { AssignmentStatementTree, ExpressionStatementTree, FunctionStatementTree, LineBreakStatementTree, PreprocessorStatementTree, ReturnStatementTree, StatementTree } from '@xon/ast';
import { AssignmentStatementTranslator } from './assignment-statement/assignment-statement.translator';
import { ExpressionStatementTranslator } from './expression-statement/expression-statement.translator';
import { FunctionStatementTranslator } from './function-statement/function-statement.translator';
import { LineBreakStatementTranslator } from './line-break-statement/line-break-statement.translator';
import { PreprocessorStatementTranslator } from './preprocessor-statement/preprocessor-statement.translator';
import { ReturnStatementTranslator } from './return-statement/return-statement.translator';
import { StatementTranslator } from './statement.translator';

export function getStatementTranslator(tree: StatementTree): StatementTranslator {
    if (tree instanceof AssignmentStatementTree) return new AssignmentStatementTranslator(tree);
    if (tree instanceof PreprocessorStatementTree) return new PreprocessorStatementTranslator(tree);
    if (tree instanceof ExpressionStatementTree) return new ExpressionStatementTranslator(tree);
    if (tree instanceof ReturnStatementTree) return new ReturnStatementTranslator(tree);
    if (tree instanceof LineBreakStatementTree) return new LineBreakStatementTranslator(tree);
    if (tree instanceof FunctionStatementTree) return new FunctionStatementTranslator(tree);

    throw Error('No Statement found for ' + tree.treeType);
}
