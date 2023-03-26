var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(R) {
        return _super.call(this, R) || this;
    }
    CircleX.prototype.CircleCircumference = function () {
        var Circumference = 0;
        Circumference = 2 * this.PI * this.Radius;
        return Circumference;
    };
    return CircleX;
}(Circle));
var Obj1 = new CircleX(10);
var Obj2 = new CircleX(11);
var Area = 0;
Area = Obj1.CircleArea();
console.log("Area of Fist object is " + Area);
Area = Obj2.CircleArea();
console.log("Area of Second object is " + Area);
var Circumference = 0;
Circumference = Obj1.CircleCircumference();
console.log("Circumference of First object is " + Circumference);
Circumference = Obj2.CircleCircumference();
console.log("Circumference of Second object is " + Circumference);
