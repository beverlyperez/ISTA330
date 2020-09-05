/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  var keepTrackOfLen = 0;
  while(n.length > keepTrackOfLen){
    for(var i = 0; i <= keepTrackOfLen; i++){
      var tempList = [];
      tempList[i] = keepTrackOfLen;
    }
    keepTrackOfLen++;
  }
};
var output = PascalTriangle(4);
console.log(output);