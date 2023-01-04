function myRemoveDuplicate(myTable){
    let tableResults = [];
    for (let i = 0; i < myTable.length; i++){
        if (!tableResults.includes(myTable[i])){
            tableResults.push(myTable[i]);
        }
    } return tableResults;
}

module.exports = myRemoveDuplicate;


