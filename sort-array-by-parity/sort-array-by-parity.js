/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
  let l = 0;
  let r = nums.length - 1;
  
  while(l-r < 0 && l < nums.length && r >= 0) {
    // l is even, r is odd
    if(nums[l] % 2 === 0 && nums[r] % 2 !== 0) {
      l++;
      r--;     
      
    //  l is odd, r is even
    } else if(nums[l] % 2 !== 0 && nums[r] % 2 === 0) {
      let tmp = nums[l];
      nums[l] = nums[r];
      nums[r] = tmp;
      l++;
      r--; 
      
    // l is even, r is even  
    } else if(nums[l] % 2 === 0 && nums[r] % 2 === 0) {
      l++;
      
    // l is odd, r is odd
    } else {
      r--;
    }      
  }
    
  return nums;
};