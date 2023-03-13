function ChkPrime(a) {
    var cnt = 0;
    var flag = false;
    for (cnt = 2; cnt < a; cnt++) {
        if (a % cnt == 0) {
            flag = true;
            break;
        }
    }
    if (flag == false)
        console.log("The given number is prime number");
    else
        console.log("The given number is not prime number");
}
var No = 0;
var No = 11;
ChkPrime(No);
