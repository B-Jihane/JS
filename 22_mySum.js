function mySum (myTable) {
/*     console.log("Level 1 : Utilisation boucles for")
    let sum = 0;
    for (let i = 0; i < myTable.length; i++){
        sum += myTable[i];
    }
    return sum; */

  /*   console.log("Level 2 : Utilisation .map()");
    let y=0;
    myTable.map(x => y += x);
    return y; */

    /* console.log("Level 3 : Utilisation .reduce()"); */
    return myTable.reduce((a, b) => a + b, 0);

}

module.exports = mySum;
