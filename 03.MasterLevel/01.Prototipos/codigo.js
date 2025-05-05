let objeto = {
    "propiedad" : "datos"
};

let numero = 23;

let array = [125, 15, "Julio", true];

array.reverse();

class Objeto {
    constructor(){};
    hablar(){
        console.log("Hola");
    }
}

const newOb = new Objeto;

console.log(objeto);
console.log(numero.__proto__);
console.log(array);
console.log(newOb);