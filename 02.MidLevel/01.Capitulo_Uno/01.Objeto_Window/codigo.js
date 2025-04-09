// let youtubeURL = "https://youtube.com";

// window.open(youtubeURL);  Abrimos una nueva ventana en el navegador

// window.close(youtubeURL); // cerramos la ventana actual o la ventana en la que se llamo

// window.closed; // indica si la ventana referenciada está cerrada o no.

// window.stop(); // detiene la carga de recursos (deteniene la carga de la web)

// window.alert("Hola, me llamo Jesús") // muestra un cuadro de alerta con el contenido especificado

// prompt("Dame un dato por favor");

// let respuesta = confirm("Estas seguro de salir?");

// console.log(respuesta);

const screen = window.screen;
const screenLeft = window.screenLeft;
const screenTop = window.screenTop;
const scrollY = window.scrollY;
const scrollX = window.scrollX;

console.log(screen);
document.writeln(`Screen <b>${screen}</b></br>
    ScreenLeft <b>${screenLeft}</b><br>
    ScreenTop <b>${screenTop}</b><br>`);

// alert(scrollX + " " + scrollY);

const href = window.location.href;
const hostname = window.location.hostname;
const pathname = window.location.pathname;
const protocol = window.location.protocol;
const assing = window.location.assing;
document.writeln(`<b>href:</b>${href}<br>
    <b>hostname:</b>${hostname}<br>
    <b>pathname:</b>${pathname}<br>
    <b>protocol:</b>${protocol}<br>
    <b>assing:</b>${assing}<br>` 
    
);





