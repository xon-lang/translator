export class SimpleClass {
    public x: Number

    public y: Number

    private _prop: Integer

    public method(t: Number, v: Integer, vt: String): void {
        this.location(t, v);
    }

    public location(a: Complex, b: Number): void {
        this._coordinate(a, b);
    }

    private _coordinate(x: Number, y: Number): void {
        2 + 2;
    }
}