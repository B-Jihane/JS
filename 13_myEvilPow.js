function myEvilPow(nbre, pow){
    if (pow === 0) {
        return 1;
      }
    else {
        return nbre*myEvilPow(nbre,pow-1);
    }
}

module.exports = myEvilPow;