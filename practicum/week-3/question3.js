/*
Given an array input of 0s and 1s and an integer k, 
return true if all ones(1s) are at least k places away from each other, 
otherwise return false.

Example:
input: input = [1,0,0,0,1,0,0,1], k = 2
output: true
*/

var kStepAway = function(input, k) {
    var placeKeeper = 0;
    var flag = false;
    for(var i = 0; i < input.length; i++){

        if(input[i] == 1 && placeKeeper == 0){

            placeKeeper = i;
        }
        else if(input[i] == 1 && (placeKeeper + k + 1) < i){
            return false;
        }
        else if(input[i] == 1 && (placeKeeper + k + 1) >= i){
            placeKeeper = i;
        }
    }
    return true;
};
var output = kStepAway([1,0,0,0,1,0,0,1], 2);
console.log(output + "   this is output");