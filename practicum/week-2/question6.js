/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the majority element does not exist return undefined.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    var mEle = input.length/2;
    var keepTrack = 0;
    var returnVal = -1;
    for(var i = 0; i < input.length; i++){
        for(var j = 0; j < input.length; j++){
            if(i != j){
                if(input[i] == input[j]){
                    keepTrack++
                }
            }
        }
        if(mEle < keepTrack){
            returnVal = input[i];
        }
    }

    return returnVal;
};
//var output = m_element([1, 2, 2, 3, 2, 7, 2]);
//console.log(output);