/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
  // edge cases
  if(!arr || arr.length === 0) return false;
  
  let map = {};

  // 1st pass, add each value to the map
  for(let i = 0; i < arr.length; i++) {
    map[arr[i]] = i; 
  }    
  
  // 2nd pass, if the double of the item is in the map, return true
  for(let j = 0; j < arr.length; j++) {
    if(map[arr[j] * 2] !== undefined && map[arr[j] * 2] !== j) return true;
  }
  
  // after, if not found return false
  return false;
};