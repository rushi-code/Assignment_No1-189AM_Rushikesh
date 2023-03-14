function Summation(Arr) {
    var sum = 0;
    var cnt = 0;
    for (cnt = 0; cnt < Arr.length; cnt++) {
        sum = sum + Arr[cnt];
    }
    return sum;
}
var arr = [23, 6, 7, 4, 5, 7];
var Ret = 0;
Ret = Summation(arr);
console.log("The sum of all the elements of given array is :" + Ret);
