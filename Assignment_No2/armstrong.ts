function ChkArmstrong(No : number): void
{
    var chk : number = 0

    var remainder : number = 0
    var addition : number = 0
  
    var nodigit= No.toString().length //  check number of digits   
    
    chk=No
    while(No>0)

      {
        remainder = (No%10)
        addition = addition + (remainder**nodigit) //
        No = (No/10)| 0
       
        
      }

    if (addition == chk)
      {
        console.log("Given number is armstrong")
       }
    else 
      {
        console.log("Given number is not armstrong")
      }

}
var No : number =153
ChkArmstrong(No)
