let numero = 125;
let numeros = [25, 3, 15, 125, 127, 26, 1, 18, -122];
// METODOS
let raizCuadrada = Math.sqrt(numero) // Math.sqrt() Muestra la raiz cuadrada de un numero
let raizCubica = Math.cbrt(numero) // Math.cbrt() Muestra la raíz cubica de un numero
let maxNum = Math.max(...numeros) // Math.max() delvuelve el número mayor.
let minNum = Math.min(...numeros) // Math.max() delvuelve el número menor.
let random = Math.random()*100;// Math.random() devuelve un numero aleatorio entre 0 y 1
let redondeo = Math.round(random); // Math.round() Redondeamos un numero aleatior
let fround = Math.fround(7.7455559955566667778888744999); // Math.froun() devuelve la representación flotante de precisión simple mas cercana.
let floor = Math.floor(124.99) // Math.floor() redondea hacia abajo
let trunc = Math.trunc(fround) // Math.trunc() elimina los decimales
const PI = Math.PI; // Math.PI() nos devuelve el numero pi.


document.getElementById('mensaje').innerHTML = `La raiz cuadrada se calcula con Math.sqrt(). La raiz cuadrada de ${numero} es = <b> ${raizCuadrada} </b>`;

let p = document.createElement('p'); 
p.innerHTML = `La raíz cúbica se calcula con Math.cbrt(). La raiz cúbica de ${numero} es = <b>${raizCubica} </b>`; 
document.body.appendChild(p);

let p1 = document.createElement('p');
p1.innerHTML = `Con Math.max() sacamos el numero más alto de los introducidos, por ejemplo. <b> ${maxNum}</b>`;
document.body.appendChild(p1);

let p2 = document.createElement('p');
p2.innerHTML = `Con Math.min() sacamos el numero más bajo de los introducidos, por ejemplo. <b> ${minNum}</b>`;
document.body.appendChild(p2);

let p3 = document.createElement('p');
p3.innerHTML = `Con Math.random() devuelve un numero aleatorio, por ejemplo. <b> ${random}</b>`;
document.body.appendChild(p3);

let p4 = document.createElement('p');
p4.innerHTML = `Con Math.round() redondea el numero ejemplo. <b> ${redondeo}</b>`;
document.body.appendChild(p4);

let p5 = document.createElement('p');
p5.innerHTML = `Con Math.fround() redondea el número, por ejemplo. <b> ${fround}</b>`;
document.body.appendChild(p5);

let p6 = document.createElement('p');
p6.innerHTML = `Con Math.fround() redondea hacia abajo el número, por ejemplo. <b> ${floor}</b>`;
document.body.appendChild(p6);

let p7 = document.createElement('p');
p7.innerHTML = `Con Math.trunc() quita los decimales, por ejemplo. <b> ${trunc}</b>`;
document.body.appendChild(p7);

let p8 = document.createElement('p');
p8.innerHTML = `Con Math.PI nos da el numero PI, por ejemplo. <b> ${PI}</b>`;
document.body.appendChild(p8);