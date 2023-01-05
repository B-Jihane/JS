function myObjectValues(myClass){
    let resultat = "";
     for (const [key, value] of Object.entries(myClass)) {
        if (typeof value !== "function"){
            resultat += `${key}: ${value}, `;
        }
      } return resultat.slice(0, -2);


}


module.exports = myObjectValues;

console.log(myObjectValues({name: "Ganster", surname: "Guilian", age: 24, presentation: () => {}}));
// "name: Ganster, surname: Guilian, age: 24"