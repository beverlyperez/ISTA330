/*
Given a set of distinct integers, input, 
return all possible subsets (the power set).

The solution set must not contain duplicate subsets.
 
Example:
 input: [1,2,3]
 output: [
  [],   
  [1],
  [2],
  [3],  
  [1,3],
  [2,3],
  [1,2],
  [1,2,3]
]
*/
function isDuplicate(list, check){
  for(var i = 0; i < list.length; i++){
    if(list[i] == check){
      return true;
    }
  }
  return false;
}

var powerSet = function(input) {
  var output = [[]];
  
  var keepTrack = 1;
  var rounds = 0;
  var i = 0;
  var insideKeepT = 0;
  var ending = input.length-1;
  while(rounds < input.length - 1){
    if(rounds == 0){
      output[keepTrack] = [input[i]];
      keepTrack++;
      i++;
      if(i == input.length){
        rounds++;
        i = 0;
      }
    }
    else if(rounds == 1){
      
      output[keepTrack] = [input[i], input[ending]];
      insideKeepT++;
      i++;
      keepTrack++;
      if(insideKeepT == input.length){
        
        insideKeepT = 0;
        rounds++;
      }
      if(i == ending){
        i = 0;
        ending = i + 1 ;
      }

      
    }
  
  }
  var outputLen = output.length;
  output[outputLen] = input;
  return output;
};
