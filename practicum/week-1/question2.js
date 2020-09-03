
/*
The array cookies represent the number of cookies that each kid has. 
Given the array cookies and an integer extraCookies, determine whether there is a
way to distribute the extraCookies among the kids in a way that kids get equal number of cookies.
Example: input: cookies = [3, 5, 8] , extraCookies = 8
         output: true
         Because we can give 5 of the extraCookies to the first kid and the remaining 3 to the second kid
         and therfore each of the three kids will get 8 cookies.
 */

 var canGetEqualCookies = function(cookies, extraCookies) {
        var findMax = 0;
        var tempToSkip = 0;
        var tempExtraCookies = extraCookies;
        for(var i = 0; i < cookies.length; i++){
                if(findMax < cookies[i]){
                        findMax = cookies[i];
                        tempToSkip = i;
                }
        }
        console.log("This is max = " + findMax);

        for(var j = 0; j < cookies.length; j++){
                if(j != tempToSkip){
                        if(tempExtraCookies != 0){
                                if(cookies[j] != findMax){
                                        var temp = cookies[j];
                                        var leftoverToMakeEqual = findMax - temp;
                                        cookies[j] = temp + leftoverToMakeEqual;
                                        console.log("Total in cookies[j] = " + cookies[j]);
                                }
                        }
                }
        }
        for(var k = 0; k < cookies.length; k++){
                if(cookies[k] != findMax){
                        return false;
                }
        }
        return true;
 };