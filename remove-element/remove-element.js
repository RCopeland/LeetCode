/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let valCount = 0;
    let l = 0;
    let r = nums.length - 1;

    while(l - r <= 0 && l < nums.length && r >= 0) {
        if(nums[r] === val) {
          r--;
          valCount++;
        } else if(nums[l] === val) {
            let tmp = nums[l];
            nums[l] = nums[r];
            nums[r] = tmp;
            l++;
            r--;
            valCount++;
        } else {
            l++;
        }
    }

    return nums.length - valCount;
};