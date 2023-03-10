/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let current = m + n - 1;
    let nums1Index = m - 1;
    let nums2Index = n - 1;
     
    while(nums1Index >= 0 && nums2Index >= 0) {
      if(nums1[nums1Index] >= nums2[nums2Index]) {
        nums1[current] = nums1[nums1Index];
        nums1Index--;
      } else {
        nums1[current] = nums2[nums2Index];
        nums2Index--;
      } 
      current--;
    }
  
    for(let i = 0; i <= nums2Index; i++) {
      nums1[i] = nums2[i];
    }
};