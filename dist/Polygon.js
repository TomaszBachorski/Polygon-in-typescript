"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polygon = void 0;
class Polygon {
    constructor(n, angels, colors) {
        this.polygonNumberOfAngels = n;
        this.polygonAngles = angels;
        if (colors)
            this.polygonColor = new PolygonColor(...colors);
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
    printPolygonInfo() {
        console.log(`Number of angels: ${this.polygonNumberOfAngels}`);
        console.log("Angels:");
        this.polygonAngles.forEach((angel) => angel.logAsArray());
        console.log("Polygon color: ");
        this.polygonColor ? this.polygonColor.printColors() : console.log('undefined');
        console.log(`Area: ${this.getPolygonArea().toFixed(2)}`);
        console.log(`Perimeter: ${this.getPerimiter().toFixed(2)}`);
    }
    getPolygonArea() {
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
        if (!this.polygonColor)
            throw new Error("Polygon color was not defined");
        return this.polygonColor;
    }
}
exports.Polygon = Polygon;
class PolygonColor {
    constructor(_r, _g, _b) {
        this.r = this.setColorConstructor(_r) || 0;
        this.g = this.setColorConstructor(_g) || 0;
        this.b = this.setColorConstructor(_b) || 0;
    }
    setColorConstructor(value) {
        if (value < 0 || value > 255)
            throw new Error("Color representation must be higher than 0 and lower than 255(rgb)");
        return value;
    }
    getColor(colorRepresentation) {
        return this[colorRepresentation];
    }
    getColors() {
        return new Array(this.r, this.g, this.b);
    }
    setColor(colorRepresentation, value) {
        if (value < 0 || value > 255)
            throw new Error("Color representation must be higher than 0 and lower than 255(rgb)");
        this[colorRepresentation] = value;
    }
    printColors() {
        console.log(`rgb(${this.r}, ${this.g}, ${this.b})`);
    }
}
