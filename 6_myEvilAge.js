const MyAge = require("5_myAge.js");

function myEvilAge(ageStr) {
    age = parseInt(ageStr);
    if (age >= 18 || age < 18){
        return MyAge(age);
    }
    else {
        return "Vous n'avez pas entrer un nombre"
    }
}

module.exports = myEvilAge;