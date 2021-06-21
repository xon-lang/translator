export class ArgumentTree {
    private _ctx: ArgumentContext

    public name: string;

    public value: ExpressionTree;

    constructor() {
        if (!ctx) {
            return;
        }
        this.value = getExpressionTree(ctx.expression());
    }

    public toString(): string {

    }
}