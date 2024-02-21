/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // majority means the element appear more than [n / 2]
    let occurence = {};
    nums.forEach((num) => {
        occurence[num] ? occurence[num]++ : occurence[num] = 1;
    })
    let major = nums.length / 2;
    for(let key in occurence) {
        if(occurence[key] > major) return key;
    }
};