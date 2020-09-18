/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. 
You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you've previously visited. 
Return false otherwise.

Example:
    input: "NESSESW"
    output: false
*/
function alreadVisited(diffPlaces, list){
    for(var i = 0; i < diffPlaces.length; i++){
        if(list == diffPlaces[i]){
            return true;
        }
    }
    return false;
}
var isCrossing = function(s) {
    var compass = {N: 1, S: -1, E:-1, W:1};
    var x = 0; 
    var y = 0;
    var diffPlaces = [];
    var visited = false;
    var keepTrack = 0;
    for(var i = 0; i < s.length; i++){
        var key = s[i];
        console.log(key + "this is the key")
        if(s[i] == 'N' || s[i] == 'S'){
            console.log(compass.key);
             x = x + compass.key;
        }
        else if(s[i] == 'E' || s[i] == 'W'){
            y = y + compass.key;
        }
        console.log(x + " = x");
        var temp = [x, y];
        visited = alreadVisited(diffPlaces, [x, y]);
        if(visited) {
            return true;
        }
        else{
            console.log(diffPlaces);
            diffPlaces[keepTrack] = [x, y];
            keepTrack++;
        }
    }
    return false;
};
var output = isCrossing("NESWW");
console.log(output);