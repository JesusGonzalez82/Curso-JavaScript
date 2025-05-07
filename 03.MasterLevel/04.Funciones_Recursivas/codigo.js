"use strict";

const validarEdad = (msg)=>{
    let edad;
    try{
        if (msg) edad = prompt(msg);
        else edad = prompt('Introduce tu edad');
        edad = parseInt(edad);
        if(isNaN(edad)) throw ('Introduce un numero válido para la edad');
        if (edad >= 18) console.log('Eres mayor de edad');
        else console.log('Aún eres un bebé');
    } catch(e){
        validarEdad(e);
    }
}

validarEdad();