/*
Given two integer arrays input1 and input2, 
and the integer d, return the d-count 
between the two arrays.

The d-count is defined as 
the number of elements input1[i] such that 
there is not any element input2[j] 
where |input1[i]-input2[j]| <= d.

Example:
input: input1 = [2,1,26,3], input2 = [-5,-2,10,-3,7], d = 6
output: 1
*/

var d_count = function(input1, input2, d) {
    var dCount = 0;
    var tOfF = false;
    for(var i = 0; i < input1.length; i++){
        for(var j = 0; j < input2.length; j++){
            var absoluteVal = 0;

            if(input1[i] > input2[j]){
                absoluteVal = input1[i] - input2[j];
            }

            else if (input2[j] > input1[i]){
                absoluteVal = input2[j] - input1[i];

            }
            if( absoluteVal > d){
                tOfF = true;
            }
            else{
                tOfF = false;
            }
            
        }
        if(tOfF == true){
            dCount++;
        }
        tOfF = false;
    }
    return dCount;
};
