var Arithmetic = /** @class */ (function () {
    function Arithmetic(A, B) {
        this.No1 = 0;
        this.No2 = 0;
        this.No1 = A;
        this.No2 = B;
    }
    Arithmetic.prototype.Addition = function () {
        var Add = 0;
        Add = this.No1 + this.No2;
        return Add;
    };
    Arithmetic.prototype.Subtraction = function () {
        var Sub = 0;
        Sub = this.No1 - this.No2;
        return Sub;
    };
    Arithmetic.prototype.Multiplication = function () {
        var Mul = 0;
        Mul = this.No1 * this.No2;
        return Mul;
    };
    Arithmetic.prototype.Division = function () {
        var Div = 0;
        Div = this.No1 / this.No2;
        return Div;
    };
    return Arithmetic;
}());
var object1 = new Arithmetic(11, 10);
var object2 = new Arithmetic(21, 10);
var Ret = 0;
Ret = object1.Addition();
console.log("Addtion By Using First Object is " + Ret);
Ret = object1.Subtraction();
console.log("Subtraction By Using First Object is " + Ret);
Ret = object1.Multiplication();
console.log("Multiplication By Using First Object is " + Ret);
Ret = object1.Division();
console.log("Division By Using First Object is " + Ret);
Ret = object2.Addition();
console.log("Addtion By Using Second Object is " + Ret);
Ret = object2.Subtraction();
console.log("Subtraction By Using Second Object is " + Ret);
Ret = object2.Multiplication();
console.log("Multiplication By Using Second Object is " + Ret);
Ret = object2.Division();
console.log("Division By Using Second Object is " + Ret);
