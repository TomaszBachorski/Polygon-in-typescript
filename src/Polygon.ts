import { Point } from "./Point";

//Default types
type rgb = "r" | "g" | "b";

export class Polygon {
    private polygonNumberOfVertices: number;
    private polygonAngles: Point[];
    private polygonColor?: PolygonColor;

    constructor(n: number, vertices: Point[], colors?: [number, number, number]) {
        this.polygonNumberOfVertices = n;
        this.polygonAngles = vertices;
        if (colors) this.polygonColor = new PolygonColor(...colors);
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
    printPolygonInfo(): void {
        console.log(`Number of vertices: ${this.polygonNumberOfVertices}`);
        console.log("Vertices:");
        this.polygonAngles.forEach((vertice)=>vertice.logAsArray());
        console.log("Polygon color: ");
        this.polygonColor ? this.polygonColor.printColors() : console.log("undefined");
        console.log(`Area: ${this.getPolygonArea().toFixed(2)}`);
        console.log(`Perimeter: ${this.getPerimiter().toFixed(2)}`);
    }
    getPolygonArea(): number {
        let fullArea: number = 0;
        for (let i = 0; i < this.polygonNumberOfVertices - 2; i++) {
            fullArea += this.getTriangleArea(new Array(this.polygonAngles[0], this.polygonAngles[i + 1], this.polygonAngles[i + 2]));
        }
        return fullArea;
    }
    getPerimiter(): number {
        let perimeter: number = 0;
        for (let i = 0; i < this.polygonNumberOfVertices - 1; i++) {
            perimeter += this.polygonAngles[i].getDistance(this.polygonAngles[i + 1])
        }
        perimeter += this.polygonAngles[this.polygonNumberOfVertices - 1].getDistance(this.polygonAngles[0]);
        return perimeter;
    }
    getPolygonColor(): PolygonColor {
        if (!this.polygonColor) throw new Error("Polygon color was not defined");
        return this.polygonColor;
    }
}

class PolygonColor {
    private r;
    private g;
    private b;
    constructor(_r: number, _g: number, _b: number) {
        this.r = this.setColorConstructor(_r) || 0;
        this.g = this.setColorConstructor(_g) || 0;
        this.b = this.setColorConstructor(_b) || 0;
    }
    private setColorConstructor(value: number): number {
        if (value<0 || value>255) throw new Error("Color representation must be higher than 0 and lower than 255(rgb)");
        return value;
    }
    getColor(colorRepresentation: rgb): number {
        return this[colorRepresentation];
    }
    getColors(): number[] {
        return new Array(this.r, this.g, this.b);
    }
    setColor(colorRepresentation: rgb, value: number): void {
        if (value<0 || value>255) throw new Error("Color representation must be higher than 0 and lower than 255(rgb)");
        this[colorRepresentation] = value;
    }
    printColors(): void {
        console.log(`rgb(${this.r}, ${this.g}, ${this.b})`)
    }
}