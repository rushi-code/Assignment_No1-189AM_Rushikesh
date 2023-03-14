function maximum(Arr : number []): number
{
    var large : number = 0
    var second_large : number = 0

    var cnt:number=0

    for(cnt=0; cnt<Arr.length; cnt++)
    
    {
        if(large < Arr[cnt])
        {
            second_large = large
            large = Arr[cnt]
        }
        else if(second_large < Arr[cnt])
        {
            second_large = arr[cnt] 
        }
    }

    return second_large
}

var arr : number [] =[23,89,6,29,56,45,77,32]
var ret :number =0
ret=maximum(arr)
console.log("The second maximum number is "+ret)
