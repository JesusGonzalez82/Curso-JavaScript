let nombres = ['Jesus', 'Javi', 'Pavel', 'Pablo'];
let nombres1 = ['Jesus', 'Javi', 'Pavel', 'Pablo', 'Iker', 'Hugo', 'Ivan', 'Dani', 'Alvaro'];

document.getElementById('mensaje').innerHTML = 'Array Original: <b>' + nombres + '</b>';
// Metodos transformadores
resultado = nombres.pop(); // Elimina el último elemento de un array y lo devuelve
resultado1 = nombres.shift(); // Elimina el primer elemento de un array y lo devuelve
resultado2 = nombres.push('Iker'); // Añade un elemento al final del array
resultado3 = nombres.reverse(); // Invierte el orden del array
// resultado4 = nombres.unshift('Hugo', 'Ivan');  Agrega uno o mas elementos al inicio del array
resultado4 = nombres.sort(); // Ordena el contenido del array
// resultado5 = nombres.splice(0, 1); // Cambia el contenido de un array cambiando elementos existentes y/o agregando elementos nuevos.


// Metodos Accesores
resultado5 = nombres1.join(' - ') // Une todos los elementos de una matriz en una cadena y la devuelve
resultado6 = nombres1.slice(4) // Devuelve una parte del array dentro de un nuevo array empezando por el inicio hasta el fin (final no incluido)
// toString(), indexOf(), lastIndexOf() e includes() funcionan de la misma manera que en los string.

// Metodos de Repetición

resultado7 = nombres1.filter(nombre => nombre.length > 4); // Crea un nuevo array con todos los elementos que cumplan la condición
resultado8 = nombres1.forEach(nombre => nombre + '<br>'); // Ejecuta la función indicada una vez por cada elemento del array

let p = document.createElement('p'); 
p.innerHTML = "Método .pop(): <b style='color:red'>" + resultado + '</b>'; 
document.body.appendChild(p);

let p1 = document.createElement('p');
p1.innerHTML = "Método .shift(): <b>" + resultado1 + '</b>';
document.body.appendChild(p1);

let p2 = document.createElement('p');
p2.innerHTML = "Método .push(): <b>" + resultado2 + '</b> Hemos añadido Iker al final del array';
document.body.appendChild(p2)

let p3 = document.createElement('p');
p3.innerHTML = "Método .reverse(): Le hemos dado la vuelta al array <b>" + resultado3 + '</b>' ;
document.body.appendChild(p3);

let p4 = document.createElement('p');
p4.innerHTML = "Método .sort() devuelve el array ordenado <b>" + resultado4 + '</b>';
document.body.appendChild(p4);

let p5 = document.createElement('p');
p5.innerHTML = 'Método .join(): <b>' + resultado5 + '</b>';
document.body.appendChild(p5);

let p6 = document.createElement('p');
p6.innerHTML = 'Método .slice(): <b>' + resultado6 + '</b>';
document.body.appendChild(p6);

let p7 = document.createElement('p');
p7.innerHTML = 'Método .filter(): <b>' + resultado7 + '</b>';
document.body.appendChild(p7);

let p8 = document.createElement('p');
p8.innerHTML = 'Método .foreach(): <b>' + resultado8 + '</b>';
document.body.appendChild(p8);