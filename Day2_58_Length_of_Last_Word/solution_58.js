/**
 * @param {string} 
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // Remove white space at the beginnning and at the end
    let trimS = s.trim();
    // count
    let count = 0;
    // Loop from the end of the string
    for(let i = trimS.length - 1; i >=0; i--) {
        if(trimS[i] === " ") {
            break;
        } else {
            count++;
        }
    }
    return count;
};