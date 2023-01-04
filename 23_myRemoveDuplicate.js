const myRemoveN = require ("./20_myRemoveN")
function myRemoveDuplicate(myTable){
    for(let i = 0; i < myTable.length; i++){
        for(let j = i+1 ; j < myTable.length; j++){
            if (myTable[i] === myTable[j]){
                return myRemoveN(j)
            }
        }
    }
}

module.exports = myRemoveDuplicate;


console.log(myRemoveDuplicate([1, 2, 2, 3])); // [1, 2, 3]
