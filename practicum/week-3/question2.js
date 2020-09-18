
/*
Given an array of integers, 1 ≤ input[i] ≤ n (n = size of array), 
some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Example: input: [19,3,2,10,8,2,3,5]
         output: [2,3]
                
          */

 var findDuplicates = function(input) {
     var duplicateList = [];
     var count = 0; 
     var keepTrack = 0; 
     for(var i = 0; i < input.length; i++){
         for(var j = 0; j < input.length; j++){
             if(i != j){
                 if(input[i] == input[j]){

                    count++;
                 }
             }
         }
         if(count == 2){
             duplicateList[keepTrack] = input[i];
             keepTrack++;
             count = 0;
         }
     }
     return duplicateList;
    
 };
