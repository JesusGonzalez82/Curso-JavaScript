const contenedor = document.querySelector('.contenedor');

const parrafo = document.createElement("p").innerHTML = 'Parrafo';
const titulo = document.createElement('h1');
titulo.innerHTML = "Título";

let h2_antiguo = document.querySelector('.h2_antiguo');

let respuesta = contenedor.hasChildNodes();

if (respuesta){
    document.writeln('El elemento tiene hijos');
}else {
    document.writeln('El elemento NO tiene hijos');
}

contenedor.replaceChild(titulo, h2_antiguo);
// contenedor.removeChild(titulo);