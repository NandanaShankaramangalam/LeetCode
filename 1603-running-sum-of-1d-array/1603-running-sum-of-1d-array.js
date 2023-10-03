/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let res = [];
    let s = 0;
    for(let i=0;i<nums.length;i++){
       s = s+nums[i];
       res.push(s);
    }
    return res;
};