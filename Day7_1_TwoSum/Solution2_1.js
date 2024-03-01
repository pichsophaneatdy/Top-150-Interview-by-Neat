/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let hashTable = {};
    for(let i = 0; i < nums.length; i++) {
        let compliment = target - nums[i];
        // Check if compliment exists in the hash table
        if(hashTable[compliment] !== undefined) return [i, hashTable[compliment]]
        // Add the number to the hash table
        hashTable[nums[i]] = i;
    }
    return []
};