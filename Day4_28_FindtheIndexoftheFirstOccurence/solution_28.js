/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let length = needle.length;
    for(let i = 0; i < haystack.length; i++) {
        if(haystack[i] === needle[0]) {
            if(haystack.slice(i,i+length) === needle) return i;
        }
    }
    return -1;
};