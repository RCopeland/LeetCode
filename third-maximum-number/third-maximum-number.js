/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const sortedNums = nums.sort((a,b) => a - b);
    const maxNum = nums[nums.length - 1];
    let currentMax;
    let maxesFound = 0;
  
    for(let i = sortedNums.length - 1; i >= 0; i--) {
       if(currentMax !== sortedNums[i]) {
         currentMax = sortedNums[i];
         maxesFound++;
       }  
  
       if(maxesFound === 3) {
         return currentMax;
       }
 
    }
  
    return maxNum;
};