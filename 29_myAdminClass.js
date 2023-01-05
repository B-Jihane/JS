const User = require("./28_myUserClass")

class Admin extends User {
    constructor (surname, name, age){
        super(surname, name, age);
        this.role = "administrateur";
    }
}


module.exports = Admin;


let me = new Admin("Guilian", "Ganster", 22);
console.log(me.presentation()); //"Je m'apelle Guilian Ganster, j'ai 22 ans"
console.log(me.role); //"administrateur"