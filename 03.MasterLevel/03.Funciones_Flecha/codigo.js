"use strict";

const saludar = ()=>{
    console.log('Hola');
}

let resultado = saludar();


const objeto = {
    'nombre' : 'Jesus',
    saludo : function(){console.log(`Hola ${this.nombre}`)}
}

const objeto2 = {
    'nombre' : 'Jesus',
    saludo : ()=>{console.log(`Hola ${this.nombre}`)}
}

window.nombre = 'Juan';

objeto.saludo();
objeto2.saludo();

// Las funciones flecha no pueden ser funciones constructoras

function construirPersona(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

const persona = new construirPersona('Jesus', 'Gonzalez');

console.log(persona.nombre);

// This. Hace referencia al objeto al que llama la funcion.

this.nombrecillo = 'Perez';

const saludito = ()=>{
    console.log(`Hola ${this.nombrecillo}`);
}

const objeto3 = {
    nombre : 'pepito',
    saludito
}

objeto3.saludito()