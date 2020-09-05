/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
    var isMonotoneInc = 0;
    var isMonotoneDec = 0;
    for(var i = 1; i < input.length; i++){
        if(input[i-1] >= input[i]){
            isMonotoneDec++;
        }
    }
    
    for(var j = 0; j < input.length; j++){
        if(input[i-1] <= input[i]){
            isMonotoneInc++;
        }
    }
    if(isMonotoneDec == (input.length - 1)){
        return true;
    }
    else if(isMonotoneInc == (input.length - 1)){
        return true;
    }


    return false;
};
