/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s==goal) return true;
    let res = s;
    for(let i=0;i<s.length;i++){
       res = res.slice(1) + res.slice(0,1);
       if(res==goal) return true;
    }
    return false;
};