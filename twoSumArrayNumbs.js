/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example 1:
Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].

Example 2:
Given nums = [2,3,4], target = 6
   return [0, 2]

=========  PSEUDO CODE: =====================
    - check if(ar.length ===0) return [];
    - declare a map: cause keeps the order insertion and it's array that behaves like an obj
    - loop through the ar and check 
        map.has(key exist in map.has(target - ar[i])) then return [(key's Value: target- ar[i]), i)
        else { map.set(ar[i], i)}
        if(map.has(keyInArray)) the trick is to use the difference target - ar[i] IF EXIST GET IT 
            return [map.get((target -ar[i])), i]
        else {
            map.set(ar[i], i)
        }
    - if not pair found return [];
*/

const twoSum = (ar, target) => {
    if(ar.length === 0) return [];
    let map = new Map();
    for(let i=0; i<ar.length; i++) {
        if(map.has((target-ar[i]))) {
            return [map.get(target - ar[i]), i]
        }
        else {
            map.set(ar[i], i)
        }
    }
    return [];
}
twoSum([2,3,4], 6);