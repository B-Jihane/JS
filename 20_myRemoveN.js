function myRemoveN(myTable , n){
    if (n > -1){
        myTable.splice(n, 1);
        return myTable;
    }
    else return n
}

module.exports = myRemoveN;

