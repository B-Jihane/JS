function myObjectFilter (userTable){
    const adults = userTable.filter(objet => objet.age >= 18);
    return adults.map(objet => `${objet.surname} ${objet.name}`);
}


module.exports = myObjectFilter;
