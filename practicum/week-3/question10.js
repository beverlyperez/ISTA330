/*
Given a string, determine if it is a palindrome, 
considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this question, 
we define empty string as valid palindrome.

Example:
input: 'Was it a car or a cat I saw'
output: true
*/

var isPalindrome = function(s) {
    var flag = true;
    var newString = '';
    var sString = s.replace(/[^\w\s]|_/g, "");
    console.log(newString);
    for(var j = 0; j < sString.length; j++){
        if(sString[j] != ' '){
            newString += sString[j];
        }
    }
    console.log(newString);

    newString = newString.toLowerCase();
    for(var i = 0; i < newString.length; i++){
        
            if(newString[i] == newString[newString.length - i - 1]){
                flag = true;
            }
           
            else{
                return false;
            }
        
    }
    return true;
};
