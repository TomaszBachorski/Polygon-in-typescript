import { Point } from "./Point";
import { Polygon } from "./Polygon";

let pointA = new Point(0, 5);
let pointB = new Point(5, 5);
let pointC = new Point(5, 0);
let pointD = new Point(0, 0);

let polygon = new Polygon(4, new Array(pointA, pointB, pointC, pointD));
let area = polygon.getPolygonArea();
let perimeter = polygon.getPerimiter();
let color = polygon.getPolygonColor();
console.log(area.toFixed(2));
console.log(perimeter.toFixed(2));
console.log(color)

