/*
You are given strings A and B.  
How many of the letters in B are also present in A?

The letters in A are guaranteed distinct, and all characters in A and B are letters.
 Letters are case sensitive.

 Example:
 input: A='gtY', B = 'iTygrtg'
 output: 3
*/

var howManyCommon = function(A, B) {
    var longestLength;
    var shorterLen;
    var commonOnes = 0;
    if(A.length > B.length){
        longestLength = A;
        shorterLen = B;
    }
    else{
        longestLength = B;
        shorterLen = A;
    }
    for(var i = 0; i < shorterLen; i++){
        for(var j = 0; j < longestLength; j++){
            if(shorterLen[i] === longestLength[j]){
                commonOnes++;
            }
        }

    }
    return commonOnes;
};