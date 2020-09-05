/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
   var tempN = String(n);
    var maxInN = 0;
    var minInN = 0;

    for(var i = 0; i < tempN.length; i++){
        if(i == 0){
            minInN = tempN[i];
        }
        if(maxInN < tempN[i]){
            maxInN = tempN[i];
        }
        if(minInN > tempN[i]){
            minInN = tempN[i];
        }

    }
     var differenceMaxMin = maxInN - minInN;
    return differenceMaxMin;
};   
var output = maxMinusMin(87034);
 console.log(output);
