/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    if(nums.length%2!=0) return false;
    for(let i=0;i<nums.length;i++){
        let c=1;
        for(let j=0;j<nums.length;j++){
          if(nums[i]==nums[j]&&i!=j){
              c++;
          }
        }
        if(c%2!=0) return false 
    }
    return true;
};