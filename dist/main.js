"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = __importDefault(require("./Point"));
const Polygon_1 = __importDefault(require("./Polygon"));
//Program assumptions: 
/*
    -Only convex polygons are calculated
    -Every polygon has 3 or more angels
*/
let square = new Polygon_1.default(4, new Array(new Point_1.default(0, 5), new Point_1.default(5, 5), new Point_1.default(5, 0), new Point_1.default(0, 0)));
console.log("Square: ");
square.printPolygonInfo();
let pentagon = new Polygon_1.default(5, new Array(new Point_1.default(-2, 3), new Point_1.default(4, 0), new Point_1.default(8, 7), new Point_1.default(5, 10), new Point_1.default(1, 10)), [255, 128, 0]);
console.log("\nPentagon: ");
pentagon.printPolygonInfo();
