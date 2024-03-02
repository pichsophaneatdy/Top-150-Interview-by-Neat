/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    let j = x.length - 1;
    for(let i = 0; i < j; i++) {
        if(x[i] !== x[j]) return false;
        j--;
    }
    return true;
};