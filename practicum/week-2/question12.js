/*
The Fibonacci numbers, denoted as F(n) is a sequence such that 
each number is the sum of the two preceding ones. 
That is:
F(0) = 0,   F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

var F = function(n) {
    var nextSum = 0;
    var before1 = 0;
    var before2 = 0;
    for(var i = 0; i <= n; i++){
        if(i < 2){
            before2 = i;
        }
        else{
            nextSum = before1 + before2;
            before1 = before2;
            before2 = nextSum;
        }
    }
    return nextSum;

};
