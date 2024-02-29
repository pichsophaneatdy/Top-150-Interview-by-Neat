/**
 * @param {string} s
 * @return {boolean}
 */

var isNumber = (char) => {
    if(char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) {
        return true
    } else {
        return false
    }
}
var isAlphabet = (char) => {
    if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
        return true;
    } else {
        false;
    }
}
var isPalindrome = function (s) {
    // Edge case where there is only one character
    if (s.length === 1) return true;

    s = s.toLowerCase();

    // Remove all non-alphanumeric characters
    let newS = "";
    for(let i = 0; i < s.length; i++) {
        if ((s[i] !== " ") && (isNumber(s[i]) || isAlphabet(s[i]))) {
            newS = newS + s[i];
        }
    }
    let i = 0;
    let j = newS.length - 1;
    while (i < j) {
        if(newS[i] !== newS[j]) return false;
        i++;
        j--;
    }
    return true;
};