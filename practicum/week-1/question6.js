/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    var med = 0.0;
    
    var lenOfIn = input.length;
    if(lenOfIn % 2 != 0){
        med = input[Math.floor(lenOfIn/2)];
    }
    else{
        var num1 = input[Math.floor(lenOfIn/2)]; 
        var num2 = input[Math.ceil(lenOfIn/2)];
        med = (input[(lenOfIn/2)-1] + input[lenOfIn/2])/2;
    }
    return med;
};
