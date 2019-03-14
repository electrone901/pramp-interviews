/**
 * 
 * Pancake Sort
Given an array of integers arr:

Write a function flip(arr, k) that reverses the order of the first k elements in the array arr.
Write a function pancakeSort(arr) that sorts and returns the input array. You are allowed to use only the function flip you wrote in the first step in order to make changes in the array.
Example:

input:  arr = [1, 5, 4, 3, 2]

output: [1, 2, 3, 4, 5] # to clarify, this is pancakeSort's output
Analyze the time and space complexities of your solution.

Note: it’s called pancake sort because it resembles sorting pancakes on a plate with a spatula, where you can only use the spatula to flip some of the top pancakes in the plate. To read more about the problem, see the Pancake Sorting Wikipedia page.

    PSEUDO CODE:
        - loop from the end up to 1 
        - getMaxIdx val, call flip(ar, maxIdx)
                ex input: [1, 5, 4, 3, 2]
                maxIdx = 5
                first time call flip: [5,1,4,3,2]
        - call again flip(ar, i) output: [5,1,4,3,2] => [2,3,4,1,5]
*  */

function pancakeSort(ar) {
    for(let i = ar.length-1; i>0; i--) {
        let maxIdx = findMaxIdx(ar,i);
        flip(ar, maxIdx);
        flip(ar, i);
    }
    return ar;
}
function findMaxIdx(ar, i) {
    let max =0;
    for(let j=0; j<=i; j++) {
        if(ar[j] > ar[max]) {
            max = j;
        }       
    }
    return max;
}

function flip(ar, i) {
    let limit = Math.floor((i+1)/2);
    for(let j=0; j<limit; j++) {
        let temp = ar[j];
        ar[j] = ar[i-j];
        ar[i-j] = temp;
    }
    return ar;
}
pancakeSort([1, 5, 4, 3, 2]); //output: [1, 2, 3, 4, 5]

