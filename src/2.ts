{
  // poblem 2
  const removeDuplicates = (nums: number[]): number[] => {
    return nums.reduce((uniqueNums, num) => {
      if (!uniqueNums.includes(num)) {
        uniqueNums.push(num);
      }
      return uniqueNums;
    }, [] as number[]);
  };
  // console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]));
  // console.log(removeDuplicates([11,13,15,1,9,19,19,20,20,22,23]));
}
