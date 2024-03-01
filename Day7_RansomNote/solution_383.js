/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let s1 = {};
    for(let i = 0; i < ransomNote.length; i++) {
        s1[ransomNote[i]] === undefined ? s1[ransomNote[i]] = 1 : s1[ransomNote[i]]++;
    }
    let s2 = {};
    for(let i = 0; i < magazine.length; i++) {
        s2[magazine[i]] === undefined ? s2[magazine[i]] = 1 : s2[magazine[i]]++;
    }
    for(let key in s1) {
        if(s2[key] === undefined || s1[key] > s2[key]) return false
    }
    return true
};