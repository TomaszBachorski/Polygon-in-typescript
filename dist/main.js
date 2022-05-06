"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Point_1 = require("./Point");
const Polygon_1 = require("./Polygon");
//Program assumptions: 
/*
    -Only convex polygons are calculated
    -Every polygon has 3 or more angels
*/
let square = new Polygon_1.Polygon(4, new Array(new Point_1.Point(0, 5), new Point_1.Point(5, 5), new Point_1.Point(5, 0), new Point_1.Point(0, 0)));
console.log("Square: ");
square.printPolygonInfo();
let pentagon = new Polygon_1.Polygon(5, new Array(new Point_1.Point(-2, 3), new Point_1.Point(4, 0), new Point_1.Point(8, 7), new Point_1.Point(5, 10), new Point_1.Point(1, 10)), [255, 128, 0]);
console.log("\nPentagon: ");
pentagon.printPolygonInfo();
