const contenedor = document.querySelector(".flex-container");

const boton = document.querySelector('.send-button');
boton.value = boton.value.toUpperCase();

let contador = 0;

function crearLLave(nombre, modelo, precio){
  contador++;
  img = "<img class='llave-img' src='llave.png'>";
  nombre = `<h4>${nombre}</h4>`;
  modelo = `<h5>${modelo}</h5>`;
  precio = `<p>Precio: <b>${precio}€</b></p>`;
  return [img, nombre, modelo, precio];
}

const changeHidden = (number)=>{
  document.querySelector(".key-data").value = number;
}

let documentFragment = document.createDocumentFragment();

for (let i = 1; i <= 20; i++){
  let modeloRandom = Math.round(Math.random()*10000);
  let precioRandom = Math.round(Math.random()*10+30);
  let llave = crearLLave(`llave ${i}`, `Modelo ${modeloRandom}`, `Precio ${precioRandom}`);
  let div = document.createElement('div');
  div.addEventListener('click',()=>{changeHidden(modeloRandom)});
  div.tabIndex = i;
  div.classList.add(`item${i}`,'flex-item');
  div.innerHTML = llave[0] + llave[1] + llave[2] + llave[3];
  documentFragment.appendChild(div);
}

contenedor.appendChild(documentFragment);




