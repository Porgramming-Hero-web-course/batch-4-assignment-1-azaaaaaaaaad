{
  const removeDuplicates = (nums: number[]): number[] => {
    return nums.reduce((uniqueNums, num)=>{
        if (!uniqueNums.includes(num)) {
            uniqueNums.push(num)
        }
        return uniqueNums;
    }, [] as number[])
  };

  const result = removeDuplicates([1, 2, 3, 2, 4, 1, 5]);
console.log(result)
}
