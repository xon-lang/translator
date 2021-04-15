export class SimpleClass {
    public x: any

    public y: any

    private _prop: any

    public method(t, v, vt) {
        this.location(t, v)
    }

    public location(a, b) {
        this._coordinate(a, b)
    }

    private _coordinate(x, y) {
        2 + 2
    }
}