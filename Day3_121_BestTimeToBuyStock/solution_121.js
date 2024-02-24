/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let i = 0;
    let j = 1;
    let min = prices[i];
    let max = 0;
    while (i < j && j < prices.length) {
        if(prices[j] - min > max) max = prices[j] - min;
        if(prices[j] < min) {
            i++;
            min = prices[j]
        } 
        j++;
    }
    return max;
};