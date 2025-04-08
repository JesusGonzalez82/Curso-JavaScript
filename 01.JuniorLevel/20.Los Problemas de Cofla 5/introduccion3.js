let materias = {
    matematicas: ["Perez","Pavel", "Javi", "Pablo", "Cofla"],
    lenguaje:["Rodriguez","Jesus", "Pavel", "Javi"],
    ingles:["Sanz","Jesus", "Pavel", "Javi", "Pablo", "Cofla"],
    geografia:["Gutierrez","Jesus", "Pavel", "Javi", "Pablo", "Cofla"]
}

const inscribir = (alumno, materia) =>{
    let personas = materias[materia];
    personas.shift();
    let alumnos = personas;
    if (alumno.length >= 20){
        return document.getElementById('mensaje').innerHTML =(`Lo siento <b>${alumno}</b>, las clases de <b>${materia}</b> están llenas`);
    } else {
        alumnos.push(alumno);
        if (materia == "matematicas"){
                materias = {
                    matematicas: alumnos,
                    lenguaje:materias['lenguaje'],
                    ingles:materias['ingles'],
                    geografia:materias['geografia']
            }
        }
        else if (materia == "lenguaje"){
                materias = {
                    matematicas: materias['matematicas'],
                    lenguaje: alumnos,
                    ingles:materias['ingles'],
                    geografia:materias['geografia']
            }
        }
        else if (materia == "ingles"){
                materias = {
                    matematicas: materias['matematicas'],
                    lenguaje: materias['lenguaje'],
                    ingles:alumnos,
                    geografia:materias['geografia']
            }
        }
        else if (materia == "geografia"){
            materias = {
                matematicas: materias['matematicas'],
                lenguaje: materias['lenguaje'],
                ingles: materias['ingles'],
                geografia:alumnos
        }
    }
    return document.getElementById('mensaje').innerHTML = (`Felicidades ${alumno}!! Te has inscrito en ${materia} correctamente`)
    }
}

inscribir("Juan", "matematicas");