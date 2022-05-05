export class Point {
    private _x;
    private _y;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }
    getX() {
        return this._x;
    }
    getY() {
        return this._y;
    }
    setX(x: number) {
        this._x = x;
    }
    setY(y: number) {
        this._y = y;
    }
    getDistance(anotherPoint: Point) {
        return Math.sqrt( (anotherPoint._x-this._x)**2 + (anotherPoint._y-this._y)**2);
    }
    log() {
        console.log(`X: ${this._x} Y: ${this._y}`);
    }
}