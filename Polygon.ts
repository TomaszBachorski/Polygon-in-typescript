import { Point } from "./Point";

export class Polygon {
    private polygonNumberOfAngels: number;
    private polygonAngles: Point[];

    constructor(n: number, angels: Point[]) {
        this.polygonNumberOfAngels = n;
        this.polygonAngles = angels;
    }
    getTriangleArea(points: Point[]): number {
        let distances = new Array();
        for (let i = 0; i < 2; i++) {
            distances.push(points[i].getDistance(points[i + 1]));
        }
        distances.push(points[2].getDistance(points[0]));
        let p: number = distances.reduce((a, b) => a + b, 0) / 2;
        return Math.sqrt(p * (p - distances[0]) * (p - distances[1]) * (p - distances[2]));
    }
    getPolygonArea(): number {
        let fullArea: number = 0;
        for (let i = 0; i < this.polygonNumberOfAngels - 2; i++) {
            fullArea+=this.getTriangleArea(new Array(this.polygonAngles[0], this.polygonAngles[i+1], this.polygonAngles[i+2]));
        }
        return fullArea;
    }
}