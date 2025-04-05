const contenedor = document.querySelector('.contenedor');

const primerHijo = contenedor.firstElementChild;
const ultimoHijo = contenedor.lastElementChild;
const hijos = contenedor.childNodes;
const ninios = contenedor.children;

// hijos.forEach(hijo => console.log(hijo));
for (ninio of ninios){
    console.log(ninios);
}
console.log(primerHijo);
console.log(ultimoHijo);
console.log(hijos);

