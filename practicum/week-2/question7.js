/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function(M) {
    var finalList = [];
    var insideLen = 0;
    var keepTrack = 0; 
    for(var k = 0; k < M[0].length; k++){
        finalList[k] = [];

    }
    for(var i = 0; i < M.length; i++){

        for(var j = 0; j < M[i].length; j++){
            finalList[keepTrack][insideLen] = M[i][j];
            keepTrack++;
            
            if(keepTrack == M[i].length){
                insideLen++;
            }
        }
        keepTrack = 0;
    }

    return finalList;
};

