function DisplayFactors(No1) {
    var cnt = 0;
    for (var cnt = 1; cnt < No1; cnt++)
        if (No1 % cnt == 0) {
            console.log(cnt);
        }
}
var A = 20;
DisplayFactors(A);
