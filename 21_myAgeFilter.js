function myAgeFilter(myTable){
    let majeur = myTable.filter((age) => {return age >=18});
    return majeur;
}

module.exports = myAgeFilter;
