function myObjectValues(myClass){
    let resultat = "";
     for (const [key, value] of Object.entries(myClass)) {
        if ((typeof value !== "function") && (typeof value !== "undefined") && (typeof value !== "object")){
            resultat += `${key}: ${value}, `;
        }
      } return resultat.slice(0, -2);


}

console.log(myObjectValues({name: "fzef", surname: "FEZEF", age: 25, presentation: () => {}}));
// "name: Ganster, surname: Guilian, age: 24"

module.exports = myObjectValues;

