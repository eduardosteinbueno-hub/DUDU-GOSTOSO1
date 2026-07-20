let num1 = 10
let mum2 = 20
let operador = "+"

switch(operador){
    case "+" :
    console.log(num1 + num2)
    break;
    case "-":
    console.log(num1 - num2)
    break;
    case"*" :
    console.log(num1 * num2)
    break;
    case "/" :
        if ( num == 0 ){
            console.log("O numero não tem divisão")
        }
        else{
            console.log(num1/num2)
        }
        break;

        default:
            console.log("Error 404")

}