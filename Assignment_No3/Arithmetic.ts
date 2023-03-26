class Arithmetic
{
    No1:number=0;
    No2:number=0;
    
    constructor(A:number,B:number)
    {
        this.No1=A;
        this.No2=B;
    }
    
    Addition ():number
    {
        let Add:number = 0;
        Add = this.No1+this.No2;
        return Add
    }

    Subtraction ():number
    {
        let Sub:number = 0;
        Sub = this.No1-this.No2;
        return Sub;
    }

    Multiplication ():number
    {
        let Mul:number = 0;
        Mul = this.No1*this.No2;
        return Mul
    }

    Division ():number
    {
        let Div:number = 0;
        Div = this.No1/this.No2;
        return Div;
    }
}

var object1 = new Arithmetic (11,10);
var object2 = new Arithmetic (21,10);

var Ret:number = 0;

Ret=object1.Addition();
console.log("Addtion By Using First Object is "+Ret);

Ret=object1.Subtraction();
console.log("Subtraction By Using First Object is "+Ret);

Ret=object1.Multiplication();
console.log("Multiplication By Using First Object is "+Ret);

Ret=object1.Division();
console.log("Division By Using First Object is "+Ret);

Ret=object2.Addition();
console.log("Addtion By Using Second Object is "+Ret);

Ret=object2.Subtraction();
console.log("Subtraction By Using Second Object is "+Ret);

Ret=object2.Multiplication();
console.log("Multiplication By Using Second Object is "+Ret);

Ret=object2.Division();
console.log("Division By Using Second Object is "+Ret);