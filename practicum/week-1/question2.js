
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
        var tempCookies = cookies;
        for(var i = 0; i < cookies.length; i++){
                if(findMax < cookies[i]){
                        findMax = cookies[i];
                        tempToSkip = i;
                }
        }

        for(var j = 0; j < tempCookies.length; j++){
                if(j != tempToSkip){
                        if(tempExtraCookies != 0){
                                if(tempCookies[j] != findMax){
                                        var temp = tempCookies[j];
                                        var leftoverToMakeEqual = findMax - temp;
                                        tempCookies[j] = temp + leftoverToMakeEqual;
                                        tempExtraCookies = tempExtraCookies - leftoverToMakeEqual;

                                }
                        }
                }
        }
        if(tempExtraCookies != 0){
                return false;

        }
        for(var k = 0; k < tempCookies.length; k++){
                if(tempCookies[k] != findMax){
                        return false;
                }
        }
        
        return true;
 };
