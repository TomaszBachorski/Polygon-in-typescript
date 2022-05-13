import Point from "./Point";
import Polygon from "./Polygon";

//Program assumptions: 
/* 
    -Only convex polygons are calculated
    -Every polygon has 3 or more angels
*/

let square = new Polygon(
    4, 
    new Array(new Point(0, 5), new Point(5, 5), new Point(5, 0), new Point(0, 0))
);
console.log("Square: ");
square.printPolygonInfo();
let pentagon = new Polygon(
    5, 
    new Array(new Point(-2, 3), new Point(4, 0), new Point(8, 7), new Point(5, 10), new Point(1, 10)),
    [255, 128, 0]     
);
console.log("\nPentagon: ");
pentagon.printPolygonInfo();
