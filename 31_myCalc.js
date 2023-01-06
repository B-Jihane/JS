class Calc {
    constructor(){
    }
    allResults(result){
        let results = []
        return results.push(result)
    }
    compute(operationStr){
        let operationNum = operationStr.split(/([+-\/*])/);
        let result;
        if (operationNum[1] === "+"){
            result = parseInt(operationNum[0]) + parseInt(operationNum[2]);
        }
        else if (operationNum[1] === "-"){
            result = parseInt(operationNum[0]) - parseInt(operationNum[2]);
        }
        else if (operationNum[1] === "*"){
            result = parseInt(operationNum[0]) * parseInt(operationNum[2]);
        }
        else if (operationNum[1] === "/"){
            result = parseInt(operationNum[0]) / parseInt(operationNum[2]);
        }
        return `${operationStr} = ${result}`;
    }
    lastResult(){

    }
}

module.exports = Calc;

let calc = new Calc();
console.log(calc.compute("1+2")); //"1+2=3"
console.log(calc.compute("2-1")); //"2-1=1"
console.log(calc.compute("2*3")); //"2*3=6"
console.log(calc.compute("10/2")); //"10/2=5"
/* console.log(calc.lastResult()); //5
console.log(calc.history());//["1+2=3","2-1=1","2*3=6","10/2=5"] */