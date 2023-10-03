/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let ar = [];
    let s = nums.sort((a,b)=>a-b);
    for(let i=0;i<s.length;i++){
        if(nums[i]==target){
            ar.push(i)
        }
    }
    return ar;
};