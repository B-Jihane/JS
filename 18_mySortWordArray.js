const myStrToWordArray = require ("./17_myStrToWordArray")

function mySortWordArray(sentence){
    return myStrToWordArray(sentence).sort();
}

module.exports = mySortWordArray;

