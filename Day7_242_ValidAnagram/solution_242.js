/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    // t is anagram of s
    // Does all the letters in t exist in s
    let tObj = {};
    let sObj = {};
    for(let i = 0; i < t.length; i++) {
        tObj[t[i]] ? tObj[t[i]]++ : tObj[t[i]] = 1;
    }
    for(let i = 0; i < s.length; i++) {
        sObj[s[i]] ? sObj[s[i]]++ : sObj[s[i]] = 1;
    }

    for(let key in sObj) {
        if(!tObj[key] || tObj[key] !== sObj[key]) return false
    }
    return true;
};