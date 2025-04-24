
const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "Desarrollo Web en Entorno Cliente",
        nota: 6
    },{
        nombre: "Desarrollo Web en Entorno Servidor",
        nota: 5
    },{
        nombre: "Diseño Interfaces Web",
        nota: 8
    },{
        nombre: "Despliegue de Aplicaciones Web",
        nota: 7
    },{
        nombre: "Ingles",
        nota: 5
    },{
        nombre: "Empresa",
        nota: 8
    }
];

const obtenerMateria = (id)=>{
    return new Promise((resolve, reject)=>{
        materia =materias[id];
        if(materia == undefined) reject ("Lo siento, no existe esa materia");
        else setTimeout(()=>{resolve(materia)},Math.random()*1000);
    })
}
// obtenerMateria(1).then(res => console.log(res))
// obtenerMateria(2).then(res => console.log(res))
// obtenerMateria(3).then(res => console.log(res))
// obtenerMateria(4).then(res => console.log(res))

const devolverMaterias = async ()=>{
    let materia = [];
    for(let i = 0; i <materias.length; i++){
        materia[i] = await obtenerMateria(i);
        console.log(materia[i]);
        let newHTMLCode = `
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="notas">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode;
    }
}

devolverMaterias();