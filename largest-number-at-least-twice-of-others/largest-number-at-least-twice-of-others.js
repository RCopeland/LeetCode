/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
   let largestNumber = 0;
   let secondLargestNumber; 
  
   nums.map((num) => {
     if(num > largestNumber) {
       secondLargestNumber = largestNumber;
       largestNumber = num;
     } else {
       secondLargestNumber = Math.max(secondLargestNumber, num);
     }
   });
  
   return (largestNumber) / 2 >= secondLargestNumber ? nums.indexOf(largestNumber): -1;
};