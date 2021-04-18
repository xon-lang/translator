export class Fibonacci {
    public n: number

    public get(): number {
        if (this.n < 1 || this.n == 1) {
            return this.n;
        }
        return this.get(this.n - 1) + this.get(this.n - 2);
    }
}