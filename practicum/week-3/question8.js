/*
Given an array with n objects colored red, white or blue, 
sort them in-place(refer to https://en.wikipedia.org/wiki/In-place_algorithm) so that objects of the same color are adjacent, 
with the colors in the order red, white and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not supposed to use the library's sort function for this question.

Example:
input:  [2,0,2,1,1,0]
output: [0,0,1,1,2,2]
*/
function isSorted(list){
    for(var i = 0; i < list.length - 1; i++){
        if(list[i] > list[i + 1]){
            return false;
        }
    }
    return true;
}
var sortColors = function(input) {
    var outputList = input;
    var isItSorted = false;
    var i = 0;
    while(isItSorted == false){
        if(outputList[i] > outputList[i+1]){
            var temp = outputList[i];
            outputList[i] = outputList[i + 1];
            outputList[i + 1] = temp;
        }
        if(i == input.length - 1){
         isItSorted = isSorted(outputList);
         i = 0;
        }
        i++;
    }
    return outputList;
};
var output = sortColors([2,0,2,1,1,0]);
console.log(output);