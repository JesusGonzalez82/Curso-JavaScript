let peticion;
// Esto nos sirve para utilizar en Microsoft explorer 
if (window.XMLHttpRequest){
    peticion = new XMLHttpRequest();
} else {
    peticion = new ActiveXObject("Microsoft.XMLHTTP");
}


// peticion.addEventListener("readystatechange", ()=>{
//     if (peticion.readyState == 4 && peticion.status == 200) {
//         console.log(peticion.response);
//         console.log(peticion.status);
//     }
// });

peticion.addEventListener("load", ()=>{
    let respuesta;
    if (peticion.status == 200) respuesta = peticion.response;
    else respuesta = "Lo siento no se ha encontrado el fichero";
        console.log(JSON.parse(respuesta).nombre);
})

peticion.open("GET", "informacion.txt");

peticion.send();