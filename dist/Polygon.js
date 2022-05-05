"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polygon = void 0;
const colorsOrder = ["r", "g", "b"];
class Polygon {
    constructor(n, angels, colors) {
        this.polygonNumberOfAngels = n;
        this.polygonAngles = angels;
        this.polygonColor = new PolygonColor();
        if (colors) {
            for (let i = 0; i < colors.length; i++) {
                this.polygonColor.setColor(colorsOrder[i], colors[i]);
            }
        }
    }
    getTriangleArea(points) {
        let distances = new Array();
        for (let i = 0; i < 2; i++) {
            distances.push(points[i].getDistance(points[i + 1]));
        }
        distances.push(points[2].getDistance(points[0]));
        let p = distances.reduce((a, b) => a + b, 0) / 2;
        return Math.sqrt(p * (p - distances[0]) * (p - distances[1]) * (p - distances[2]));
    }
    getPolygonArea() {
        //convex polygon
        let fullArea = 0;
        for (let i = 0; i < this.polygonNumberOfAngels - 2; i++) {
            fullArea += this.getTriangleArea(new Array(this.polygonAngles[0], this.polygonAngles[i + 1], this.polygonAngles[i + 2]));
        }
        return fullArea;
    }
    getPerimiter() {
        let perimeter = 0;
        for (let i = 0; i < this.polygonNumberOfAngels - 1; i++) {
            perimeter += this.polygonAngles[i].getDistance(this.polygonAngles[i + 1]);
        }
        perimeter += this.polygonAngles[this.polygonNumberOfAngels - 1].getDistance(this.polygonAngles[0]);
        return perimeter;
    }
    getPolygonColor() {
        return this.polygonColor;
    }
}
exports.Polygon = Polygon;
class PolygonColor {
    constructor(_r, _g, _b) {
        this.r = _r || 0;
        this.g = _g || 0;
        this.b = _b || 0;
    }
    getColor(colorRepresentation) {
        return this[colorRepresentation];
    }
    getColors() {
        return new Array(this.r, this.g, this.b);
    }
    setColor(colorRepresentation, value) {
        if (value < 0 || value > 255)
            throw { error: "Color representation is higher than 255 or lower than 0", errno: 1 };
        this[colorRepresentation] = value;
    }
}
