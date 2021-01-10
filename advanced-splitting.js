/*
    Advanced Splitting
        0.1a
*/

function strToAdvancedSplit(givenString) {
    let returnArray = [];
    for(var i = 0; i < givenString.split(" ").length; i++) {
        returnArray.push([]);
        for(var i2 = 0; i2 < givenString.split(" ")[i].split("").length; i2++) {
            returnArray[i].push([givenString.split(" ")[i].split("")[i2]]);
        }
    }
    return returnArray;
}