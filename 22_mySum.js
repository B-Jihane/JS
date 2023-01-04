function mySum (myTable) {
/*     console.log("Level 1 : Utilisation boucles for")
    let sum = 0;
    for (let i = 0; i < myTable.length; i++){
        sum += myTable[i];
    }
    return sum; */

  /*   console.log("Level 2 : Utilisation .map()");
    let y=0;
    let sumTable = myTable.map(x => y += x);
    return sumTable[sumTable.length-1]; */

    /* console.log("Level 2 : Utilisation .reduce()"); */
    let sum = myTable.reduce((a, b) => a + b, 0);
    return sum;
}

module.exports = mySum;
