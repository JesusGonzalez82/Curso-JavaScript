const titulo = document.querySelector('.titulo');

let nombreDeClase = "grande";
let valores = titulo.classList.contains(nombreDeClase);

let valor = titulo.classList.toggle('grande', false);

document.writeln(valor);

let reemplazar = titulo.classList.replace('grande', 'enorme');

document.writeln(reemplazar);