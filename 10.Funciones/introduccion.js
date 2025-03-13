/* Una funcion es una porcion de codigo */

function saludar() { // Creamos la funcion
  let respuesta = prompt("Hola! Que tal fue tu día??");

  if (respuesta == "bien") {
    alert("Me alegro de que todo te vaya bien");
  } else if (respuesta == "mal") {
    alert("Pues vaya faena, te pasa algo??");
  } else {
    alert("Si no me contestas, no se que te pasa");
  }
}

// saludar(); // Llamamos a la función

function suma(num1, num2){
  let res = num1 + num2;
  console.log(res);
  return res;
  
}

// suma(12, 32);

function saludar(nombre){
  let frase = `¡Hola ${nombre}! ¿Como te encuentras?`
  console.log(frase);
}

saludar('Jesus');



