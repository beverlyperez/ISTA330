/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
        var maxNum = 0;
        var maxIndex;
        var isTrue = 0;
        for(var i = 0; i < input.length; i++){
                if(input[i] > maxNum){
                        maxNum = input[i];
                        maxIndex = i;
                }
        }
        for(var j = 0; j < input.length; j++){
        
                if(j != maxIndex){

                        if(maxNum > (input[j]*2)){
                                isTrue++;
                        }
                }
        }
        if(isTrue == (input.length - 1)){
                return true;
        }
        return false;
};
