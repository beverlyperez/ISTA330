/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    var tempKeepTrack = 1;
    var largestDInt = -1;

    for(var i = 0; i < input.length; i++){
        for(var j = 0; j < input.length; j++){
            if(i != j){
                if(input[i] == input[j]){
                    tempKeepTrack++;
                }

            }
        }
        if(tempKeepTrack == input[i]){
            var tempLargest = tempKeepTrack;
            if(tempLargest > largestDInt){
                largestDInt = tempLargest;
            }
        }
        tempKeepTrack = 0;
    }
    
    return largestDInt;
};
