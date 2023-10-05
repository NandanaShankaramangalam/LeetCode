/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let nums = [];
    for(let i=0;i<n;i++){
        nums[i] = start+2*i;
    }
    let t = 0;
    for(let j=0;j<nums.length;j++){
       t = t ^ nums[j]
    }
    return t;
};