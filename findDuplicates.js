/*
Find The Duplicates
Given two sorted arrays arr1 and arr2 of passport numbers, implement a function 
findDuplicates that returns an array of all passport numbers that are both in 
arr1 and arr2. Note that the output array should be sorted in an ascending order.

Let N and M be the lengths of arr1 and arr2, respectively. Solve for two cases and
analyze the time & space complexities of your solutions: M ≈ N - the array 
lengths are approximately the same M ≫ N - arr2 is much bigger than arr1.

Example:

input:  arr1 = [1, 2, 3, 5, 6, 7], arr2 = [3, 6, 7, 8, 20]

output: [3, 6, 7] # since only these three values are both in arr1 and arr2
*/

function removeDuplicates(ar1, ar2) {
  let dic = {};
  let result = [];

  for(let i=0; i<ar1.length; i++) {
    if(!dic[ar1[i]]) dic[ar1[i]] = ar1[i];
  }

  for(let i=0; i<ar2.length; i++) {
    if(dic[ar2[i]]) result.push(ar2[i]);
  }
  return result;
}
let ar1 = [1, 2, 3, 5, 6, 7];
let ar2 = [3, 6, 7, 8, 20];
// removeDuplicates(ar1, ar2); //output: [3, 6, 7]
/*
		time complexity = log(n)
		space complexity = n
*/



/*
		without using extra data structure
		time complexity = n * log(m)
		space complexity = 0(1)

		Pseudo code: 
			- loop throught the first array 
			- set start=0, end = ar.length-1
			- while(start <= end) mid = start+end/2
			- check if(value < ar[mid]) end = mid-1;
			- if(value > ar[mid]) start = mid+1
			- else result.push(ar[mid])
			- return the result

*/

function removeDuplicatesNoHash(arr1, arr2) {
  let answer = [];

  for(let i=0; i < 6; i++) {
    let start = 0;
    let end = arr2.length-1;

    while(start <= end) {
      let mid = Math.floor((start + end)/2);
      if(arr1[i] < arr2[mid]) end = mid -1;
      else if(arr1[i] > arr2[mid]) start = mid +1;
      else {
        answer.push(arr2[mid]);
        break;
      }  
    }
  }
  return answer;
}
let arr1 = [1, 2, 3, 5, 6, 7];
let arr2 = [3, 6, 7, 8, 20];
removeDuplicatesNoHash(arr1, arr2);
