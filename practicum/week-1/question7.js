/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.


       [1,3,4,2,6,8,5,7]

       16
*/

var maxSumOfMins = function(input) {
       var findMax = 0;
       var allNumbersAdded = 0;
       var keepTrack = 0;
       var tempInput = input;
       for(var i = 0; i < input.length; i++){
              for(var j = 0; j < input.length; j++){
                     if(i != j){
                            allNumbersAdded += tempInput[i] + tempInput[j];
                            for(var k = 0; k < input.length - 1; k++){
                                   if(k != i && k != j && (keepTrack % 2 == 0) ){
                                         // console.log(tempInput[k] + " value of temp input at " + k);
                                          if(tempInput[k] < tempInput[k+1]){
                                                 allNumbersAdded += tempInput[k];
                                          }

                                          else{
                                                 allNumbersAdded += tempInput[k + 1];
                                          }
                                          
                                          
                                                
                                   }
                                   keepTrack++;
                            }
                            console.log(allNumbersAdded + " value of allNumbers");

                            if(allNumbersAdded > findMax){
                                   findMax = allNumbersAdded;
                            }
                            allNumbersAdded = 0;
                            
                     }
                     
              }
       }
       return findMax;
};

var output = maxSumOfMins([4, 3, 8, 0]);

console.log(output);