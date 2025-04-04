const contenedor = document.querySelector('.contenedor');

const fragmento = document.createDocumentFragment();

for (i = 0; i < 10; i++){
const item = document.createElement('LI');
const textoDelItem = document.createTextNode('Esto es un elemento de la lista')
item.appendChild(textoDelItem);
fragmento.appendChild(item);
}
console.log(fragmento);
contenedor.appendChild(fragmento);
