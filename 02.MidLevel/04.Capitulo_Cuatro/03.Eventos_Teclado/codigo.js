// const button = document.querySelector('.button');
const contenedor = document.querySelector('.container');
const input = document.querySelector('.input__prueba');

input.addEventListener("keydown", (e)=>{
    console.log('Una tecla fue presionada');
});

input.addEventListener('keypress', (e)=>{
    console.log("Un usuario presiona y suelta una tecla");
});

input.addEventListener('keyup', (e)=>{
    console.log("Una tecla fue soltada");
});