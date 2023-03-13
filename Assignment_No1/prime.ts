function ChkPrime(a: number): void
 {
    var cnt: number = 0
    var flag = false
    for (cnt = 2; cnt < a; cnt++) 
    {

        if (a % cnt == 0) 
        {
            flag = true
            break;
        }
    }

    if (flag == false)



        console.log("The given number is prime number")
    else


        console.log("The given number is not prime number")
}
var No: number = 0

var No = 11

ChkPrime(No)