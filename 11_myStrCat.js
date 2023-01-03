const myAdd = require("./7_myAdd");

function myStrCat(nbrStr1, nbrStr2){
    return myAdd(parseInt(nbrStr1), parseInt(nbrStr2));
}

module.exports = myStrCat;