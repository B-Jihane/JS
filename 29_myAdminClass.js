const User = require("./28_myUserClass")

class Admin extends User {
    constructor (surname, name, age){
        super(surname, name, age);
        this.role = "administrateur";
    }
}


module.exports = Admin;

