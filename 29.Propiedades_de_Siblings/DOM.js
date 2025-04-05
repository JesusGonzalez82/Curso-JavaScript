const contenedor = document.querySelector('.contenedor');

const parrafo = document.createElement("p").innerHTML = 'Parrafo';
const titulo = document.createElement('h1');

const h2_antiguo = document.querySelector(".h2");

console.log(h2_antiguo.nextSibling);
console.log(h2_antiguo.nextElementSibling);