/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const magazineMap = {};

  for(let i = 0; i < magazine.length; i++) {
    if(magazineMap[magazine[i]]) {
      magazineMap[magazine[i]] = magazineMap[magazine[i]] + 1;
    } else {
      magazineMap[magazine[i]] = 1;
    }
  } 

  let index = 0;

  while(index < ransomNote.length) {
    const currentLetter = ransomNote[index]; 
    const mapValue = magazineMap[currentLetter];

    if(!mapValue) {
      return false;
    } else {
      magazineMap[currentLetter] = mapValue - 1;
    } 
    index++; 
  } 


  return true; 
};