function myRemoveN(myTable , n){
    if (n > -1){
        return myTable.splice(n, 1);
    }
    else return n
}

module.exports = myRemoveN;
