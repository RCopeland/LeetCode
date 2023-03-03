/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
   const arr = [];

   const getResult = (n) => {
     let test = {
       fizz: n % 3 === 0,
       buzz: n % 5 === 0,
     };

     if(test.fizz && test.buzz) return "FizzBuzz";
     if(test.fizz) return "Fizz";
     if(test.buzz) return "Buzz";
     
     return n.toString();
   } 

   for(let i = 0; i < n; i++) {
     arr[i] = getResult(i+1);
   }

   return arr;
};