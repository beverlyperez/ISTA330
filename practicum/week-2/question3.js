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
  var finalTri = [];
  var keepTrackOfLen = 0;
  
  finalTri[0] = [1];
  finalTri[1] = [1, 1];
  console.log(finalTri);

  for(var i = 2; i < n; i++){
    var tempList = [];
    for(var k = 0; k <= i; k++){
      if(k == 0 || k == i){
        tempList[k] = 1;
      }
      else {
        tempList[k] = finalTri[i - 1][k - 1] + finalTri[i - 1][k];
      }
    }
    finalTri[i] = tempList;
    console.log(finalTri);

    
  }
  return finalTri;
};
var output = PascalTriangle(4);
console.log(output);