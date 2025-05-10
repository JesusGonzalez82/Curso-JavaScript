"use strict";

// ...args

let valor1 = "Valor 1";
let valor2 = "Valor 2";
let valor3 = "Valor 3";

let arr = ["valor 1", "valor 2", "valor 3"];
console.log(valor1,valor2, valor3)
console.log(...arr)

// Podemos añadir arrays a otro array
let arr2 = ["valor 4", "valor 5"];

arr.push(...arr2);

console.log(arr);

// Concatenar Arrays

let arr3 = [...arr, ...arr2];

console.log(arr3);

// Arguments

const sumar = (num1, num2)=>{
    console.log(num1 + num2);
}

let arrSuma = [5,6];

sumar(...arrSuma);
