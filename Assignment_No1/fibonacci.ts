function Fibonacci(No : number): void
{
    var x =0
    var y =1

    var fn=x+y
   
    while (fn<=No)
    {
        console.log(fn)
        fn = x + y;
        x = y
        y = fn
    }
}

var A: number = 0
A =21
Fibonacci(A)