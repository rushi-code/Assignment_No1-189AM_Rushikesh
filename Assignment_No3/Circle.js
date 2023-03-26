var Circle = /** @class */ (function () {
    function Circle(R) {
        this.Radius = 0;
        this.PI = 0;
        this.Radius = R;
        this.PI = 3.14;
    }
    Circle.prototype.CircleArea = function () {
        var Area = 0;
        Area = this.PI * this.Radius * this.Radius;
        return Area;
    };
    return Circle;
}());
var obj1 = new Circle(7);
var obj2 = new Circle(10);
var Ret = 0;
Ret = obj1.CircleArea();
console.log("Area of circle of first object is " + Ret);
Ret = obj2.CircleArea();
console.log("Area of circle of second object is " + Ret);
