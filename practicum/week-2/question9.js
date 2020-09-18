/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/
function findAbs(a, b){
    if(a > b){
        return a - b;
    }
    else{
        return b - a;
    }
}

var largestGroupsCount = function(n) {
    var finalList = [];
    var keepTrackForkeepTrack = 0;
    var keepTrack = 1;
    var maxLen = 0;
    
    for(var i = 0; i < n; i++){

        if(i >= 9){
            finalList[findAbs(i, 9)][keepTrack] = i + 1;
            keepTrackForkeepTrack++;
            if(keepTrackForkeepTrack == 9){
                keepTrack++;
                keepTrackForkeepTrack = 0;
            }
            
        }
        else{
            finalList[i] = [i + 1];
        }
        


    }
    for(var l = 0; l < finalList.length; l++){
        if(finalList[l].length > maxLen){
            maxLen = finalList[l].length;
        }
    }
    var lensOfMax = 0;
    for(var l = 0; l < finalList.length; l++){
        if(finalList[l].length == maxLen){
            lensOfMax++;
        }
    }
    return lensOfMax;
};
var output = largestGroupsCount(11);
console.log(output);