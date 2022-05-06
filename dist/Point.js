"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }
    getX() {
        return this._x;
    }
    getY() {
        return this._y;
    }
    setX(x) {
        this._x = x;
    }
    setY(y) {
        this._y = y;
    }
    getDistance(anotherPoint) {
        return Math.sqrt((anotherPoint._x - this._x) ** 2 + (anotherPoint._y - this._y) ** 2);
    }
    log() {
        console.log(`X: ${this._x} Y: ${this._y}`);
    }
    logAsArray() {
        console.log(`[${this._x}, ${this._y}]`);
    }
}
exports.Point = Point;
