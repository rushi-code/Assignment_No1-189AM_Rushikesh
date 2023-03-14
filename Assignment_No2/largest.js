function Maximum(Arr) {
    var large = 0;
    var cnt = 0;
    for (cnt = 0; cnt < Arr.length; cnt++) {
        if (large < Arr[cnt]) {
            large = Arr[cnt];
        }
    }
    return large;
}
var Ar = [23, 89, 6, 29, 56, 45, 77, 32];
var Ret = 0;
Ret = Maximum(Ar);
console.log("The maximum number from given array is :" + Ret);
