import { Point } from "./Point";

const colorsOrder: ["r", "g", "b"] =  ["r", "g", "b"] 

export class Polygon {
    private polygonNumberOfAngels: number;
    private polygonAngles: Point[];
    private polygonColor: PolygonColor;

    constructor(n: number, angels: Point[], colors?: [number, number, number]) {
        this.polygonNumberOfAngels = n;
        this.polygonAngles = angels;
        this.polygonColor = new PolygonColor();
        if (colors) {
            for (let i = 0; i<colors.length;i++) {
                this.polygonColor.setColor(colorsOrder[i], colors[i]);
            }
        }
    }
    private getTriangleArea(points: Point[]): number {
        let distances = new Array();
        for (let i = 0; i < 2; i++) {
            distances.push(points[i].getDistance(points[i + 1]));
        }
        distances.push(points[2].getDistance(points[0]));
        let p: number = distances.reduce((a, b) => a + b, 0) / 2;
        return Math.sqrt(p * (p - distances[0]) * (p - distances[1]) * (p - distances[2]));
    }
    getPolygonArea(): number {
        //convex polygon
        let fullArea: number = 0;
        for (let i = 0; i < this.polygonNumberOfAngels - 2; i++) {
            fullArea += this.getTriangleArea(new Array(this.polygonAngles[0], this.polygonAngles[i + 1], this.polygonAngles[i + 2]));
        }
        return fullArea;
    }
    getPerimiter(): number {
        let perimeter: number = 0;
        for (let i = 0; i < this.polygonNumberOfAngels - 1; i++) {
            perimeter += this.polygonAngles[i].getDistance(this.polygonAngles[i + 1])
        }
        perimeter += this.polygonAngles[this.polygonNumberOfAngels - 1].getDistance(this.polygonAngles[0]);
        return perimeter;
    }
    getPolygonColor(): PolygonColor {
        return this.polygonColor;
    }
    
}

class PolygonColor {
    private r;
    private g;
    private b;
    constructor(_r?: number, _g?: number, _b?: number) {
        this.r = _r || 0;
        this.g = _g || 0;
        this.b = _b || 0;
    }
    getColor(colorRepresentation: "r" | "g" | "b") {
        return this[colorRepresentation];
    }
    getColors() {
        return new Array(this.r, this.g, this.b);
    }
    setColor(colorRepresentation: "r" | "g" | "b", value: number): void {
        if (value<0 || value>255) 
            throw {error: "Color representation is higher than 255 or lower than 0", errno: 1};
        this[colorRepresentation] = value
    }
}