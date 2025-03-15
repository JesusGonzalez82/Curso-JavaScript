function sumar(num1, num2){
  return parseInt(num1) + parseInt(num2);
}

function restar(num1, num2){
  return parseInt(num1) - parseInt(num2);
}

function multiplicar(num1, num2){
  return parseInt(num1) + parseInt(num2);
}

const dividir  = (num1, num2)=>{
  if (num2 == 0){
    alert ("No se puede dividir entre 0");
  }else {
  return parseInt(num1) /parseInt(num2);
  }
}

alert("Que operacion quieres realizar?");
let operacion = parseInt(prompt("1: suma, 2: resta, 3: multiplicacion, 4: division"));

let numero1 = parseInt(prompt("Introduce el primer numero de la operacion"));
let numero2 = parseInt(prompt("Introduce el segundo numero de la operacion"));

switch (operacion){
  case 1:
    resultado = sumar(numero1, numero2);
    break;
  case 2:
    resultado = restar(numero1, numero2);
    break;
  case 3:
    resultado = multiplicar(numero1, numero2);
    break;
  case 4:
    resultado = dividir(numero1, numero2);
    break;
  default:
    alert ("Introduce un numero de operacion correcto");
    resultado = ('operacion no valida');
}
alert ("El resultado de la operacion es " + resultado);


