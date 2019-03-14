/*
Getting a Different Number
Given an array arr of unique nonnegative integers, implement a function getDifferentNumber that finds the smallest nonnegative integer that is NOT in the array.

Even if your programming language of choice doesn’t have that restriction (like Python), assume that the maximum value an integer can have is MAX_INT = 2^31-1. So, for instance, the operation MAX_INT + 1 would be undefined in our case.

Your algorithm should be efficient, both from a time and a space complexity perspectives.

Solve first for the case when you’re NOT allowed to modify the input arr. If successful and still have time, see if you can come up with an algorithm with an improved space complexity when modifying arr is allowed. Do so without trading off the time complexity.

Analyze the time and space complexities of your algorithm.

Example:

input:  arr = [0, 1, 2, 3]
output: 4 
*/

// time = O(n) space = O(n)
function getDifferentNumber(ar) {
  let hash = {};
  let counter = 0;

  // hash the values
  for(let i in ar) hash[ar[i]] = true;

  // cehck if counter exist in hash than increase it
  while(hash[counter]) {
    counter++
  }
  return counter;
}
getDifferentNumber([0, 1, 2, 3]); //output: 4 


// without extra data structures put each ele in its corresponding index, 
// kicking out the original number, until the target index is out of range.
function getDifferentNumber(ar) {
  let n = ar.length;
  // sort array
  ar = ar.sort((a,b) =>{ return a-b});
  
  // check if ar[i] != i return i because that's the smallestVal not in array otherwise return n
  for(let j = 0; j < ar.length; j++){
    if(ar[j] !== j) return j;
  }
  return n
}

