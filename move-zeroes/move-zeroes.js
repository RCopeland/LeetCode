/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//     l 
//        r 
// [1, 0, 1]
var moveZeroes = function(nums) {
    let l = 0;
    for(let r = 1; r < nums.length; r++) {
      if(nums[l] !== 0) {
        l++;
      } else if(nums[l] === 0 && nums[r] !== 0) {
        let tmp = nums[l];
        nums[l] = nums[r];
        nums[r] = tmp;
        l++;
      }
      
    } 
  
   return nums;
};