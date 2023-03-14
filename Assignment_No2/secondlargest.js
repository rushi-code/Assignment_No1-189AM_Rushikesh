function maximum(Arr) {
    var large = 0;
    var second_large = 0;
    var cnt = 0;
    for (cnt = 0; cnt < Arr.length; cnt++) {
        if (large < Arr[cnt]) {
            second_large = large;
            large = Arr[cnt];
        }
        else if (second_large < Arr[cnt]) {
            second_large = arr[cnt];
        }
    }
    return second_large;
}
var arr = [23, 89, 6, 29, 56, 45, 77, 32];
var ret = 0;
ret = maximum(arr);
console.log("The second maximum number is " + ret);
