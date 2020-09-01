// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


/*const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();*/

// Explanation: 
 // The nested function can access the variable internal because internal is defined the function thus giving it functional scope, also because this variable is defined inside the function, it will only ever be available inside the function! The {} act as gates.  The variable external can be accessed outside of the function as it's globally scoped. 

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */


function summation (n) {
  let count= 0
  for (let i = 0; i <= n; i ++) {
   count += i
  }
  return count
}

console.log(summation(4));




