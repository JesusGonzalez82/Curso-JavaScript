const titulo = document.querySelector('.titulo');

let resultado = titulo.textContent; // Devuelve el texto de cualquier elemento
let resultado1 = titulo.innerHTML; // Devuelve el texto visible de un nodo element
let resultado2 = titulo.outerHTML; // Devuelve el códido completo de un elemento

alert(resultado);
alert(resultado1);
alert(resultado2);