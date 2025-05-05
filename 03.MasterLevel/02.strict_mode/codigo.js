"use strict";

let nombre = "Jesus";

console.log(nombre);

const obj = {};

// Modificar propiedades con defineProperty() y writeable.

Object.defineProperty(obj, 'nombre', {value:'Pedro', writable: false});

console.log(obj.nombre);

// Agregar propiedades

const coche ={
    marca : "Citroen"
};

Object.preventExtensions(coche);

coche.modeolo = "C5";

// console.log(coche.modelo);

// No se puede agregar propiedades a un string

const str = "Jesus Gonzalez";

str.canal = "Blanco"

console.log(str.canal)

// No existen las multiples variables en una funcion

function hablar (texto, texto){
    console.log(texto);
}

hablar("pedro");

// Delete en objetos o variables

let variable = "miNombre";

// delete variable;

console.log(variable);

// Las palabras reservadas no pueden ser usadas como variables

let package = "Pedro"

console.log(package);

// Cambia el This

function saludar(){
    this.nombre = nombre;
    this.saludar = function(){
        console.log(`Hola ${this.nombre}`);
    }
}

obj = new saludar();
obj.saludar();

// Numeros octales con una "o" delante y no existe el with

console.log(021);
console.log(0o21);

// Arguments y Eval no pueden ser variables

arguments = "Hola";
Eval = "Pepe";