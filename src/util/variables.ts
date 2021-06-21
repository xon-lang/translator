import {
    ForStatementTree,
    getStatementInference,
    IdAssignmentStatementTree,
    IfStatementTree,
    LoopStatementTree,
    StatementTree,
    TypeTree,
    WhileStatementTree,
} from '@xon/ast';

export function getAllVariables(
    statements: StatementTree[] = [],
    prevVarMap: Map<string, TypeTree> = null
): { name: string; type: TypeTree }[] {
    const varMap: Map<string, TypeTree> = prevVarMap || new Map();
    statements.forEach((x) => {
        if (x instanceof IdAssignmentStatementTree) {
            varMap.set(x.name, getStatementInference(x, new Map()).type);
        }
        if (x instanceof ForStatementTree) getAllVariables(x.body, varMap);
        if (x instanceof LoopStatementTree) getAllVariables(x.body, varMap);
        if (x instanceof WhileStatementTree) getAllVariables(x.body, varMap);
        if (x instanceof IfStatementTree) {
            getAllVariables(x.thenBody, varMap);
            getAllVariables(x.elseBody, varMap);
        }
    });

    return Array.from(varMap.keys()).map((x) => ({ name: x, type: varMap.get(x) }));
}
