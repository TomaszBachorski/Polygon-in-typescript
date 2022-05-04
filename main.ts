import { Point } from "./Point";
import { Polygon } from "./Polygon";

let pointA = new Point(0, 4);
let pointB = new Point(4, 4);
let pointC = new Point(4, 0);
let pointD = new Point(0, 0);

let polygon = new Polygon(4, new Array(pointA, pointB, pointC, pointD));
let area = polygon.getPolygonArea();
console.log(area.toFixed(2))