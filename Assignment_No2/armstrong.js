function ChkArmstrong(No) {
    var chk = 0;
    var remainder = 0;
    var addition = 0;
    var nodigit = No.toString().length; //  check number of digits   
    chk = No;
    while (No > 0) {
        remainder = (No % 10);
        addition = addition + (Math.pow(remainder, nodigit)); //
        No = (No / 10) | 0;
    }
    if (addition == chk) {
        console.log("Given number is armstrong");
    }
    else {
        console.log("Given number is not armstrong");
    }
}
var No = 153;
ChkArmstrong(No);
