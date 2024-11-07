{
    const sumArray = (nums: number[]) : number => {
        return nums.reduce((acc,num)=>acc+num,0)
    }

    const sum = sumArray([1,2,3,4,5])
    console.log(sum);
    
    
}