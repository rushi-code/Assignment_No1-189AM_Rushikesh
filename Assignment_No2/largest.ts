function Maximum(Arr : number[]): number
{
        var large =0
        var cnt =0

        for (cnt=0;cnt<Arr.length;cnt++)
        {
            if(large<Arr[cnt])
            {
                large=Arr[cnt]
            }
        }
        return large      
}

var Ar:number[]=[23,89,6,29,56,45,77,32]

var Ret:number = 0

Ret = Maximum(Ar)

console.log("The maximum number from given array is :"+Ret)
