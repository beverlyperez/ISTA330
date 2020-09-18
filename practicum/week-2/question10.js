/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
    var findMinDiff;
    var finalList = [];
    var keepTrack = 0;
    console.log(input.length);

    for(var i = 0; i < input.length; i++){
        console.log(input.length);
        for(var j = 0; j < input.length; j++){

            if(i != j){

                if(findMinDiff == undefined){

                    findMinDiff = input[i] - input[j];
                }
                //make a separate one for findmindiff == math.abs to create a new list to add to finalList[keepTrack]
                var absoluteVal = 0;
                if(input[i] > input[j]){
                   absoluteVal = input[i] - input[j];
                }
                else if(input[j] > input[i]){
                absoluteVal = input[j] - input[i];
                }

                if(findMinDiff > absoluteVal){

                    findMinDiff = absoluteVal;
                    
                }
            


            }
        }
    }

    for(var i = 0; i < input.length; i++){

        for(var j = i; j < input.length; j++){

            if(i != j){
               var absoluteVal = 0;
                if(input[i] > input[j]){
                   absoluteVal = input[i] - input[j];
                }
                else if(input[j] > input[i]){
                absoluteVal = input[j] - input[i];
                }
                if(findMinDiff == absoluteVal){

                    
                    if(input[i] - input[j] == findMinDiff){
                        
                        if(input[j] < input[i]){

                            finalList[keepTrack] = [input[j], input[i]];

                        }
                    }
                    if(input[j] - input[i] == findMinDiff){

                        if(input[i] < input[j]){
                            
                            finalList[keepTrack] = [input[i], input[j]];

                        }
                    }
                    keepTrack++;
                }


            }
        }
    }
    
    return finalList;
};
var output = minPairs([1,-5,-10,24,19,-4,-14,23]);
console.log(output);