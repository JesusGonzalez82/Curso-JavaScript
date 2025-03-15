let cantidad = parseInt(prompt('Cuantos alumnos son?'));
let alumnosTotales = [];

for (let i = 0; i < cantidad; i++){
  alumnosTotales[i] = [prompt('Nombre del alumno ' + (i + 1)), 0];
}

const asistencias = (nombre, p)=>{
  let presencia = prompt(nombre);
  if (presencia == 'p' || presencia == 'P'){
    alumnosTotales[p][1]++;
  }
}

for (let i = 0; i < 30; i++) {
    for (alumno in alumnosTotales){
      asistencias(alumnosTotales[alumno][0],alumno);
    }
}

// let resultado = "<h3>Resultados Finales</h3>";

for (alumno in alumnosTotales){
    let resultado = `${alumnosTotales[alumno][0]}:<br>
    ___________Presencias: <b>${alumnosTotales[alumno][1]}</b> <br>
    ___________Ausencias: <b>${30 - alumnosTotales[alumno][1]}</b>`;
    if (30 - alumnosTotales[alumno][1] > 18){
      resultado += "<b style='color:red'>Suspenso por faltas reiteradas</b><br><br>";
    }else {
      resultado+= "<br><br>";
    }
  document.write(resultado)    
}



