function myPow(nbr, pow){
    let resultat = 1;
    if (pow === 0) {
        return 1;
    }
    else {
        for(let k = 0; k < pow ; k++){
            resultat = resultat*nbr;
        }
        return resultat;
    }
    
}

module.exports = myPow;