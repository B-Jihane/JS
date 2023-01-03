const MyAge = require("5_myAge.js");

function myEvilGetNbr (nbrStr) {
    if (parseInt(nbrStr) >= 0 || parseInt(nbrStr) < 0){
        return MyAge(parseInt(nbrStr))
    }
    else {
        return "Vous n'avez pas entrer un nombre"
    }
}

module.exports = myEvilGetNbr;