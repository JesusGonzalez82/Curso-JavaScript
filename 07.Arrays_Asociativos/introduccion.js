let pc1 = {
    nombre: 'Portatil',
    procesador: 'Intel Core i7',
    ram: '16GB',
    storage: '1TB'
}

let pc2 =['Portatil', 'Intel Core i7', '16GB', '1TB'];

document.getElementById('mensaje').textContent = pc2.join(', ');

let nuevoP = document.createElement('p'); // Creamos el nuevo elemento P en HTML
nuevoP.textContent = pc1;
document.getElementById('mensaje').appendChild(nuevoP);

let nombre = pc1['nombre'];
let procesador = pc1['procesador'];
let ram = pc1['ram'];
let storage = pc1['storage'];

let frase = `El nombre de mi pc es: <b>${nombre}</b> <br>
            El procesador es: <b>${procesador}</b> <br>
            Tiene <b>${ram}</b> de memoria <br>
            Y la capacidad del disco duro es: <b>${storage}</b> <br>`;

let nuevoP2 = document.createElement('p');
nuevoP2.innerHTML = (frase);
document.getElementById('mensaje').appendChild(nuevoP2);

