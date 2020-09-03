/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    var med;
    var lenOfIn = input.length;
    if(lenOfIn % 2 != 0){
        med = input[Math.floor(lenOfIn/2)];
    }
    else{
        med = (input[Math.floor(lenOfIn/2)] + input[Math.ceil(lenOfIn/2)])/2;
    }
    return med;
};
var output = median([1, 2, 2, 3, 4, 7, 9]);
console.log(output);