function mySum (myTable) {
    console.log("Level 1 : Utilisation boucles for")
    let sum = 0;
    for (let i = 0; i < myTable.length + 1; i++){
        sum = sum + myTable[i];
    }
    return sum;
}

module.exports = mySum;

console.log(mySum([1, 2, 3])); // 6