// let peticion;
// Esto nos sirve para utilizar en Microsoft explorer 
// if (window.XMLHttpRequest) peticion = new XMLHttpRequest();
// else peticion = new ActiveXObject("Microsoft.XMLHTTP");

peticion.addEventListener("load", () => {
    if (peticion.status == 200 || peticion.status == 201) {
        console.log(JSON.parse(peticion.response));
    } else {
        console.log("Lo siento, no se ha encontrado el fichero");
    }
});

peticion.open("POST","https://reqres.in/api/users");

peticion.setRequestHeader("Content-type", "application/json;charset=UTF-8");

peticion.send(JSON.stringify({
    "nombre": "Morfeo",
    "status": "lider"
}));