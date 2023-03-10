/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  let current = 0;
  let k = nums.length;

  while(current <= nums.length -1) {
    if(nums[current] === val) {
      // remove it by shifting the rest left one
      for(let i = current; i < nums.length; i++) {
        nums[i] = nums[i+1]; 
      }
      k--;
    } else {
      current++;
    } 
  }   
  
  return k;
};