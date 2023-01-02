function myGetNbr(nbre){
    if (nbre > 0){
        return "+";
    }
    else if (nbre < 0){
        return "-";
    }
    else {
        return 0;
    }
}

module.exports = myGetNbr;