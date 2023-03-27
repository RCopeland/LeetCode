/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
   nums = nums.map((num) => num * num); 
   return nums.sort((a,b) => a - b); 
};