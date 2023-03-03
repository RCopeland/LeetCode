/**
 * @param {number[][]} accounts
 * @return {number}
 */

var maximumWealth = function(accounts) {
  let maxWealth = 0;
  
  for(let i = 0; i < accounts.length; i++) {
    let sum = accounts[i].reduce((a,b) => a+b);

    maxWealth = Math.max(maxWealth, sum);
  }

  return maxWealth;    
};