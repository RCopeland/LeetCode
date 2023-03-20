/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  let val = -1;
  for(let i = arr.length - 1; i > -1; i--) {
    let tmp = arr[i];
    arr[i] = val;
    val = Math.max(val, tmp);
  }
  
  return arr;
};