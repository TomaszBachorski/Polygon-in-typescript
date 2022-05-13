export default class Point {
    private _x;
    private _y;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }
    getX(): number {
        return this._x;
    }
    getY(): number {
        return this._y;
    }
    setX(x: number): void {
        this._x = x;
    }
    setY(y: number): void {
        this._y = y;
    }
    getDistance(anotherPoint: Point): number {
        return Math.sqrt( (anotherPoint._x-this._x)**2 + (anotherPoint._y-this._y)**2);
    }
    log(): void {
        console.log(`X: ${this._x} Y: ${this._y}`);
    }
    logAsArray(): void {
        console.log(`[${this._x}, ${this._y}]`);
    }
}