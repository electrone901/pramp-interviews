/*
Shifted Array Search
A sorted array of distinct integers shiftArr is shifted to the left by an unknown offset 
and you don’t have a pre-shifted copy of it. For instance, the sequence 1, 2, 3, 4, 5 
becomes 3, 4, 5, 1, 2, after shifting it twice to the left.

Given shiftArr and an integer num, implement a function shiftedArrSearch that finds and 
returns the index of num in shiftArr. If num isn’t in shiftArr, return -1. Assume that 
the offset doesn’t equal to 0 (i.e. assume the array is shifted at least once) or to 
arr.length - 1 (i.e. assume the shifted array isn’t fully reversed).

Explain your solution and analyze its time and space complexities.

Example:

input:  shiftArr = [9, 12, 17, 2, 4, 5], num = 2 # shiftArr is the
                                                 # outcome of shifting
                                                 # [2, 4, 5, 9, 12, 17]
                                                 # three times to the left

output: 3 # since it’s the index of 2 in arr

*/

function shiftedArrSearch(ar, num) {
	let start = 0,
		end = 0,
		mid,
		last = ar[ar.length-1];

	while(start <= end) {
		mid = Math.floor((start + end)/2);
		if(ar[mid] === num) return mid;
		// checks if curVal > last  & num > last & curVal > num that means that the target is in the left 
		const isLastBigger = ar[mid] > last ? num > last: true;
		if(ar[mid] > num && isLastBigger) end = mid - 1;
		else {
			start = mid + 1;
		}
	}
	return -1;
}



