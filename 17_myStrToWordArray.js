function myStrToWordArray(sentence){
    if (sentence === " ") return " "
    else {
        return sentence.split(" ");
    }
}

module.exports = myStrToWordArray;
