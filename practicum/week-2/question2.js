
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
     var maxSum = 0; 
     var curSum; 
     for(var i = 0; i < input.length; i++){
             curSum = input[i];
             if(curSum > maxSum){
                maxSum = curSum;
                console.log(maxSum);
             }
             for(var j = i; j < input.length; j++){
                     curSum += input[j];
                     if(curSum > maxSum){
                             maxSum = curSum;
                             console.log(maxSum + "this is on the second if");
                     }
             }
     }
     return maxSum;
    
 };
var output = largestSubarray([-12,3,-1,5,-2,1,-7]);
console.log(output);