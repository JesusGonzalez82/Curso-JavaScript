let frase = 'Cadena de prueba ';
let frase2 = ' esto es una prueba, utilizando concat() ';
let frase3 = 'ESTO SI QUE MOLA';
let frase4 = '    esto no mola tanto    ';
let frase5 = 45000;

resultado = frase.concat(frase2); // concatenamos dos o mas cadenas y devuelve una nueva
resultado2 = frase.startsWith(frase2); // Nos devuelve true o false si la cadena empieza por la misma palabra
resultado3 = frase.includes('prueba'); // Nos devuelve true o false si la cadena contiene la palabra.
resultado4 = frase.indexOf('prueba'); // Nos devuelve la posición (incluyendo espacios) en la que comienza la cadena solicitada, si no existe, devuelve -1.
resultado5 = frase2.lastIndexOf('prueba')
resultado6 = frase.padStart(43, 'abc'); // Rellena la cadena al principio con los caracteres deseados
resultado7 = frase.padStart(43, 'abcd'); // Rellena la cadena al final con los caracteres deseados
resultado8 = frase.repeat(2); // Devuelve la misma cadena repetida la cantidad de veces que le indiquemos
resultado9 = frase2.split(','); // Devuelve la cadena como le pidamos
resultado10 = frase.substring(3, 9); // Nos devuelve un trozo de la cadena que seleccionemos
resultado11 = frase3.toLowerCase(); // Convierte la cadena a minusculas
resultado12 = frase4.toUpperCase(); // Convierte la cadena a mayusculas
resultado13 = frase5.toString(); // Convierte la variable a string
resultado14 = frase4.trim(); // Elimina los espaciones en la cadena
resultado15 = frase4.trimEnd() // ELimina los espacios al final de la cadena
resultado15 = frase4.trimStart() // ELimina los espacios al principio de la cadena
resultado16 = frase4.valueOf() // devuelve el valor primitivo del objeto

document.getElementById('mensaje').innerHTML = resultado;

let p = document.createElement('p'); // Crear el elemento <p>
p.textContent = resultado2; // Asignar el texto (true o false)
document.body.appendChild(p);

let p2 = document.createElement('p');
p2.textContent = resultado3;
document.body.appendChild(p2);

let p3 = document.createElement('p');
p3.textContent = resultado4;
document.body.appendChild(p3);

let p4 = document.createElement('p');
p4.textContent = resultado5;
document.body.appendChild(p4);

let p5 = document.createElement('p');
p5.textContent = resultado5;
document.body.appendChild(p5);

let p6 = document.createElement('p');
p6.textContent = resultado6;
document.body.appendChild(p6);

let p7 = document.createElement('p');
p7.textContent = resultado7;
document.body.appendChild(p7);

let p8 = document.createElement('p');
p8.textContent = resultado8;
document.body.appendChild(p8);

let p9 = document.createElement('p');
p9.textContent = resultado9;
document.body.appendChild(p9);

let p10 = document.createElement('p');
p10.textContent = resultado10;
document.body.appendChild(p10);

let p11 = document.createElement('p');
p11.textContent = resultado11;
document.body.appendChild(p11);

let p12 = document.createElement('p');
p12.textContent = resultado12;
document.body.appendChild(p12);

let p13 = document.createElement('p');
p13.textContent = resultado13;
document.body.appendChild(p13);

let p14 = document.createElement('p');
p14.textContent = resultado14;
document.body.appendChild(p14);