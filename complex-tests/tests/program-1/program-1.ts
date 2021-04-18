export class SimpleClass {
    public x: number

    public y: number

    private _prop: number

    public method(t: number, v: number, vt: string): void {
        this.location(t, v);
    }

    public location(a: Complex, b: number): void {
        this._coordinate(a, b);
    }

    private _coordinate(x: number, y: number): void {
        2 + 2;
    }
}