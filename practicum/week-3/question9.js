/*
Given an array of integers A, 
a move consists of choosing any A[i], 
and incrementing it by 1.

Return the least number of moves to make every value in A unique.

Example:
input: [1,2,2]
output: 1

[3,2,1,2,1,7]
expected: 6
*/
function isADup(list, check){
    for(let i = 0; i < list.length; i++){
        if(list[i] == check){
           return true;
        }
    }
    return false;
}

function findAbs(a, b){
    if(a > b){
        return a - b;
    }
    return b - a;
}

function isSorted(list){
    var flag = true;
    var i = 1;
    var check = 0;
       while(flag){

         if(list[i-1] > list[i]){
            var temp = list[i-1];
            list[i-1] = list[i];
            list[i] = temp;
        }
        
        else if(list.length == i){
            for(var k = 0; k < list.length; k++){
                if(list[k] > list[k+1]){
                    check++;
                }
            }
            if(check == 0){
                flag = false;
            }
            else{
                flag = true;
                check = 0;
                i = 0;
            }
        }
        
        i++;
        
    }
    
    return list;
}

var minMoves = function(A) {
    var listWithoutDup = [];
    var keepTrack = 0; 
    var absVal = 0;
    var minM = 0;
    var isItSorted = false;
    let i = 0;
    for(var j = 0; j < A.length; j++){
        if(!isADup(listWithoutDup, A[j])){
            listWithoutDup[keepTrack] = A[j];
            keepTrack++;
        }

    }

        
    console.log(isSorted(listWithoutDup));
          
    

    for(var k = 0; k < listWithoutDup.length - 1; k++){
        console.log(listWithoutDup + " the list");
      
       absVal = findAbs(listWithoutDup[k], listWithoutDup[k + 1]);
        minM = minM + absVal;
        console.log(minM + " minm");
        console.log(absVal + " absVal");
    }
    return minM;
};
