const myStrToWordArray = require ("./17_myStrToWordArray")

function mySortWordArray(sentence){
    if (sentence === "") return [];
    return myStrToWordArray(sentence).sort();
}

module.exports = mySortWordArray;
