class Circle
{
    Radius:number = 0;
    PI:number = 0;
    
    constructor(R:number)
    {
        this.Radius =R;
        this.PI=3.14;
    }

    CircleArea() : number
    {
        let Area:number = 0;
        Area=this.PI * this.Radius * this.Radius;

        return Area;
    }
}

var obj1 = new Circle(7);
var obj2= new Circle(10);

var Ret:number =0;

Ret = obj1.CircleArea();
console.log("Area of circle of first object is "+Ret);

Ret = obj2.CircleArea();
console.log("Area of circle of second object is "+Ret);
