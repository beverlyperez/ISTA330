/*
There are n soldiers standing in a line. 
Each soldier is assigned a unique rating value.

You have to form a team of 3 soldiers 
under the following rules:

1. Choose 3 soldiers with index (i, j, k) with ratings (rating[i], rating[j], rating[k]).
2. A team is valid if:  (rating[i] < rating[j] < rating[k]) where (0 <= i < j < k < n).

Return the number of teams you can form given the conditions. 
(soldiers can be part of multiple teams).


 Example:
         input: [2,5,3,4,1]
         output: 1
         We can only form one team given the 
         conditions: (2,3,4)
*/
function findMax(input){
        var returnMax = input[0];
        for(var i = 0; i < input.length; i++){
                if(input[i] > returnMax){
                        returnMax = input[i];
                }
        }
        return returnMax;
}
function isSorted(input){
        
        for(var i = 1; i < input.length; i++){
                if(input[i - 1] > input[i]){
                        return false;
                }
        }
        return true;
}

var howManyTeams = function(input) {
        var tempList = [];
        var keepTrack = 0;
        var count = 0;
        var minNum;
        var j = 1;
        var numToAdd = 1;
        var maxNum = findMax(input);
        var runThrough = 0;
        console.log(maxNum + " = max Num")
        for (var i = 0; i < input.length - 3; i++){
                console.log(tempList + " = tempList");

                tempList[keepTrack] = input[i];
                keepTrack++;
                minNum = input[i];

                console.log(minNum + " = minNum");

                while(runThrough != 2){
                      
                        if((tempList[keepTrack - 1] + numToAdd) == maxNum){
                                j++;
                                numToAdd = 0;

                        }

                        if(input[j] == (tempList[keepTrack - 1] + numToAdd)){
                                console.log(input[j]+ "input at j = "+ j);
                                tempList[keepTrack] = input[j];
                                keepTrack++;
                                j++;
                                runThrough++;
                                
                        }
                        else if((tempList[keepTrack - 1] + numToAdd) > maxNum){
                                runThrough = 2;
                        }
                        else{
                                console.log(numToAdd + "num to add to compare");

                                numToAdd++;
                        }
                }
                if(tempList.length == 3 && isSorted(tempList)){
                        count++;
                }
                keepTrack = 0;
        }
        return count;
};

var output = howManyTeams([2,5,3,4,1,6]);
console.log(output + "   this is output");
