class Circle
{
    Radius : number=0;
    PI : number = 0;

    constructor(R:number)
    {
        this.Radius = R;
        this.PI = 3.14;
    }

    CircleArea() :number
    {
        let Area :number = 0;
        Area = this.PI * this.Radius * this.Radius;
        return Area;
    }
}

class CircleX extends Circle
{
    constructor(R:number) 
    {
        super(R)
    }

    CircleCircumference() : number
    {
        let Circumference : number = 0;
        Circumference = 2 * this.PI * this.Radius;
        return Circumference;
    }
}

var Obj1 = new CircleX(10);
var Obj2 = new CircleX(11);

var Area :number = 0;

Area = Obj1.CircleArea();
console.log("Area of Fist object is "+Area);

Area = Obj2.CircleArea();
console.log("Area of Second object is "+Area);

var Circumference : number = 0;

Circumference = Obj1.CircleCircumference()
console.log("Circumference of First object is "+Circumference);

Circumference = Obj2.CircleCircumference()
console.log("Circumference of Second object is "+Circumference);



