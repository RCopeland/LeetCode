/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  if(!arr || arr.length < 3 || arr[0] >= arr[1]) return false;
  
  let i = 0;
  
  // find the peak (first decrease)
  while(arr[i] !== undefined && arr[i+1] !== undefined && arr[i] < arr[i+1]) {
     i++; 
  }
  
  // if we're at the beginning or the end, cant be a mountain
  if(i === 0 || i >= arr.length - 1) {
    return false;
  }
  
  // validate the descent
  while(arr[i] !== undefined && arr[i+1] != undefined) {
    if(arr[i+1] >= arr[i]) {
      return false;
    }
    i++;
  }

  return true;
};