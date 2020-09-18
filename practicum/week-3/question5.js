/*
Given an array input of n integers
 where n > 1,  
 return an array output such that 
 output[i] is equal to the product of all the elements of input except input[i].

Example: 
input: [1,2,3,4]
output: [24,12,8,6]
*/

var productOfOthers = function(input) {
    var outputList = [];
    var keepTrack = 0;
    for(var i = 0; i < input.length; i++){
        var finProduct = 1;

        for(var j = 0; j < input.length; j++){
            if(i != j){
                finProduct = finProduct * input[j];
            }
        }
        outputList[i] = finProduct;
    }
    return outputList;

};
var output = productOfOthers([1, 2, 3, 4]);
console.log(output);
