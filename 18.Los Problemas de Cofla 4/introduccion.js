class Calculadora{
  constructor(){
    
  }
sumar(num1, num2){
  return parseInt(num1) + parseInt(num2);
}

restar(num1, num2){
  return parseInt(num1) - parseInt(num2);
}

multiplicar(num1, num2){
  return parseInt(num1) + parseInt(num2);
}
dividir  = (num1, num2)=>{
  if (num2 == 0){
    alert ("No se puede dividir entre 0");
  }else {
  return parseInt(num1) /parseInt(num2);
  }
}
potencia(num, exp){
  return Math.pow(num, exp); // Con Math.pow tenemos función para calcular la potencia
//   let numero = num;
//   for (let i = 1; i < exp; i++){
//     numero = numero * num;
//   }
//   return numero;
}
raizCuadrada(num){
  return Math.sqrt(num);
}

raizCubica(num){
  return Math.cbrt(num);
}
}

const calculadora = new Calculadora();

alert("Que operacion quieres realizar?");
let operacion = parseInt(prompt("1: suma, 2: resta, 3: multiplicacion, 4: division, 5. Potencia, 6. Raiz Cuadrada, 7. Raiz Cúbica"));

let numero1 = parseInt(prompt("Introduce el primer numero de la operacion"));
let numero2;

if (operacion !== 6 && operacion !== 7){
  numero2 = parseInt(prompt("Introduce el segundo numero de la operacion"));
}

switch (operacion){
  case 1:
    resultado = calculadora.sumar(numero1, numero2);
    break;
  case 2:
    resultado = calculadora.restar(numero1, numero2);
    break;
  case 3:
    resultado = calculadora.multiplicar(numero1, numero2);
    break;
  case 4:
    resultado = calculadora.dividir(numero1, numero2);
    break;
  case 5:
    resultado = calculadora.potencia(numero1, numero2);
    break;
  case 6:
    resultado = calculadora.raizCuadrada(numero1);
    break;
  case 7:
    resultado = calculadora.raizCubica(numero1);
    break;
  default:
    alert ("Introduce un numero de operacion correcto");
    resultado = ('operacion no valida');
}
alert ("El resultado de la operacion es " + resultado);


