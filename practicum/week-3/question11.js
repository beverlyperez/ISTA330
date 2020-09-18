/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, two is written as II in Roman numeral, just two one's added together. 
Twelve is written as, XII, which is simply X + II. 
The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. 

There are six instances where subtraction is used:

- I can be placed before V (5) and X (10) to make 4 and 9. 
- X can be placed before L (50) and C (100) to make 40 and 90. 
- C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer. 
Input is guaranteed to be within the range from 1 to 3999.


Example:
input: "IV"
output: 4
*/

var romanToInteger = function(s) {
    var romanObj = {I: 1, V: 5, X:10, L:50, C:100, D:500, M:1000};
    var retInt = 0;
    for(var i = 0; i <= s.length-1; i++){
        console.log(s[0]);
        if(s[i] == 'X'){
            if(s[i+1] == 'L'){
                retInt += romanObj.L - romanObj.X;
                i++;

            }
            else if(s[i+1] == 'C'){
                retInt += romanObj.C - romanObj.X;
                i++;

            }
            else{
                retInt += romanObj.X;
            }
        }
        else if(s[i] == 'I'){
            if(s[i+1] == 'V'){

                retInt += romanObj.V - romanObj.I;
                i++;
            }
            else if(s[i+1] == 'X'){
                retInt += romanObj.X - romanObj.I;
                i++;

            }
            else{
                retInt += romanObj.I;

            }
        }
        
        else if(s[i] == 'C'){

            if(s[i+1] == 'D'){
                retInt += romanObj.D - romanObj.C;
                i++;

            }
            else if(s[i+1] == 'M'){
                retInt += romanObj.M - romanObj.C;
                i++;

            }
            else{
                retInt += romanObj.C;

            }
        }
        else{
            
            var key = s[i];
            retInt += romanObj.key;
        }
        
        
    }
    return retInt;
};
//var output = romanToInteger("IV");
//console.log(output + "the output");