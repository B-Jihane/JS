const myStrToWordArray = require ("./17_myStrToWordArray")

function mySortWordArray(sentence){
    if (sentence === "") return ""
    else {
        return myStrToWordArray(sentence).sort();
    }
}

module.exports = mySortWordArray;
