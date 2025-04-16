// const saludar = ()=>{
//     document.writeln("Hola");
// };

// setTimeout(saludar, 2000);

let contador = 0;

const intervalo = setInterval(() => {
    document.body.innerHTML += "Penny<br>";
    contador++;

    if (contador === 3){
        clearInterval(intervalo); // Paramos el intervalo
    }
}, 2000); // Tiempo en milisegundos entre intervalos