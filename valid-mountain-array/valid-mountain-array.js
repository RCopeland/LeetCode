/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(!arr || arr.length < 3 || arr[0] >= arr[1]) return false;
  
  // one pass, flip the mode as soon as the first decrease is found
  // if reach the end, return true, if another increase or duplicate is found return false
  
  let mode = 'inc';
  let hasFlipped = false;
  let prev;
  
  for(let i = 1; i < arr.length; i++) {
    prev = arr[i - 1];
    
    if(mode === 'inc') {
     if(arr[i] < prev) {
       mode = 'dec';
       hasFlipped = true;
     }
      if(arr[i] === prev) {
        return false;
      }
    } else {
     if(arr[i] >= prev) {
       return false; 
     }
    }
    
  }
  
  if(mode === 'inc' || !hasFlipped) return false;
  
return true;

};