const myGetNbr = require("./4_myGetNbr");

function myEvilGetNbr (nbrStr) {
    if (parseInt(nbrStr) >= 0 || parseInt(nbrStr) < 0){
        return myGetNbr(parseInt(nbrStr));
    }
    else {
        return "Vous n'avez pas entrer un nombre";
    }
}

module.exports = myEvilGetNbr;