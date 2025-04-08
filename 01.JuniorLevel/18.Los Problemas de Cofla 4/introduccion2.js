const obtenerInfo = (materia)=>{
    const materias = {
        matematicas: ["Perez","Pavel", "Javi", "Pablo", "Cofla"],
        lenguaje:["Rodriguez","Jesus", "Pavel", "Javi"],
        ingles:["Sanz","Jesus", "Pavel", "Javi", "Pablo", "Cofla"],
        geografia:["Gutierrez","Jesus", "Pavel", "Javi", "Pablo", "Cofla"]
    }
    if (materias[materia] !== undefined){
        return [materias[materia], materia, materias];
    }else {
        return materias;
    }
}

const informacion = (materia) =>{
    let informacion = obtenerInfo(materia);

    if (informacion !== false){
        let profe = informacion[0][0];
        let alumnos = informacion[0];
        alumnos.shift();
        document.getElementById('mensaje').innerHTML = `El profesor de <b>${informacion[1]}</b> es <b>${profe}</b><br>
        Los alumnos matriculados son: <b style="color:red">${alumnos}</b><br>`;
    }
}

const cantidadDeClases = (alumno) =>{
    let informacion = obtenerInfo();
    let clasesPresente = [];
    let cantidadTotal = 0;
    for (info in informacion){
        if (informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresente.push(" " + info);
        }
    }
    return document.getElementById('mensaje').innerHTML = `<b style='color:blue'>${alumno}</b> está matrículado en <b>${cantidadTotal}</b> clases, las clases en las que está matriculado son: <b style='color:green'>${clasesPresente}</b>`;
}


// Info('matematicas');
// mostrarInfo('lenguaje');
// mostrarInfo("geografia");
// mostrarInfo('ingles');
cantidadDeClases('Cofla');


