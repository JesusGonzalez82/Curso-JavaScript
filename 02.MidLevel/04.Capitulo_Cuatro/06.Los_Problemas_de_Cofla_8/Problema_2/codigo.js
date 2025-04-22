alumnos = [{
    nombre: "Jesus Gonzalez",
    email: "jesusgonzalezblanco82@outlook.com",
    asignatura: "DWES"
},{
    nombre: "Laura Martínez",
    email: "laura.martinez@example.com",
    asignatura: "DAW"
},{
    nombre: "Carlos Pérez",
    email: "carlos.perez@example.com",
    asignatura: "DIW"
},{
    nombre: "Isabel Torres",
    email: "isabel.torres@example.com",
    asignatura: "DWEC"
},{
    nombre: "Marta Sánchez",
    email: "marta.sanchez@example.com",
    asignatura: "DWES"
},{
    nombre: "Daniel López",
    email: "daniel.lopez@example.com",
    asignatura: "DAW"
}];

const boton = document.querySelector(".btn-confirm");
const contenedor = document.querySelector(".grid-container");

let htmlCode = "";

for (alumno in alumnos){
    console.log(alumnos[alumno]);
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let asignatura = datos["asignatura"];
    htmlCode += `
            <div class="grid-item nombre">${nombre}</div>
            <div class="grid-item email">${email}</div>
            <div class="grid-item asignatura">${asignatura}</div>
            <div class="grid-item semana">
                <select name="semanal" title="semana" class="semana-elegida">
                    <option value="Semana 1">Semana 1</option>
                    <option value="Semana 2">Semana 2</option>
                </select>
            </div>`;
}
contenedor.innerHTML = htmlCode;

boton.addEventListener("click", ()=>{
    let confirmar = confirm("¿Estas seguro de confirmar?");
    if (confirmar){
        document.body.removeChild(boton);
    let elementos = document.querySelectorAll('.semana');
    let semanasElegidas = document.querySelectorAll(".semana-elegida");
    for (elemento in elementos){
        semana = elementos[elemento];
        semana.innerHTML = semanasElegidas[elemento].value;
        }
    }
});