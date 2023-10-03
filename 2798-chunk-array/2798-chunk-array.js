/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let n = Math.ceil(arr.length/size);
    let ar = [];
    let k = 0
    for(let i=0;i<n;i++){
       ar.push(arr.slice(k,k+size));
       k = k+size;
    }
    return ar;
};
