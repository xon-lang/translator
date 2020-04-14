import { AssignmentStatementTree, DeclarationStatementTree, ExpressionStatementTree, FunctionStatementTree, LineBreakStatementTree, PreprocessorStatementTree, ReturnStatementTree, StatementTree } from '@xon/ast';
import { AssignmentStatementTranslator } from './assignment-statement.translator';
import { DeclarationStatementTranslator } from './declaration-statement.translator';
import { ExpressionStatementTranslator } from './expression-statement.translator';
import { FunctionStatementTranslator } from './function-statement.translator';
import { LineBreakStatementTranslator } from './line-break-statement.translator';
import { PreprocessorStatementTranslator } from './preprocessor-statement.translator';
import { ReturnStatementTranslator } from './return-statement.translator';
import { StatementTranslator } from './statement.translator';

export function getStatementTranslator(tree: StatementTree): StatementTranslator {
    if (tree instanceof AssignmentStatementTree) return new AssignmentStatementTranslator(tree);
    if (tree instanceof PreprocessorStatementTree) return new PreprocessorStatementTranslator(tree);
    if (tree instanceof ExpressionStatementTree) return new ExpressionStatementTranslator(tree);
    if (tree instanceof ReturnStatementTree) return new ReturnStatementTranslator(tree);
    if (tree instanceof LineBreakStatementTree) return new LineBreakStatementTranslator(tree);
    if (tree instanceof FunctionStatementTree) return new FunctionStatementTranslator(tree);
    if (tree instanceof DeclarationStatementTree) return new DeclarationStatementTranslator(tree);

    throw Error('No Statement found for ' + tree.treeType);
}
