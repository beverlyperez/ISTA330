/*
Given an array of numbers, for each number in the array 
find out how many numbers in the array are both even and bigger than the number.

Example:
input: [23, 44, 12, 4]
output: [1, 0, 1, 2]
*/

var biggerAndEven = function(input) {
    var timesThroughLoop = 0;
    var returnList = [];
    for(var j = 0; j < input.length; j++){
        returnList[j] = 0;
    }
    console.log(returnList);
    for(var i = 0; i < input.length; i++){
        for(var j = 0; j < input.length; j++){
            if(input[j] > input[i] && input[j] % 2 == 0){
                returnList[i] += 1;
            }
        }
    }
    return returnList;
};
var output = biggerAndEven([1,3,4,2,6,8,5,7]);

console.log(output);
