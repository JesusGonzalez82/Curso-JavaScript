const materias = {
  fisica: [90, 7, 4, "fisica"],
  matematicas: [90, 7, 3, "matematicas"],
  entorno_Cliente: [88, 6, 3, "Desarrollo Web en Entorno Cliente"],
  entorno_Servidor: [100, 7, 3, "Desarrollo Web en Entono Servidor"],
  despliegue: [100, 7, 4, "Despliegue de Aplicaciones Web"],
  diseño_Interfaces: [100, 5, 3, "Diseño de Interfaces Web"],
  inglés: [90, 4, 2, "Inglés"],
  empresa: [85, 6, 3, "Empresa"]
}


const aprobado = ()=>{
  for (materia in materias){
    let asistencias = materias[materia][0];
    let media = materias[materia][1];
    let trabajos = materias[materia][2];

    console.log(materias[materia][3]);

    if (asistencias >= 90){
      console.log("%c  Faltas en orden", "color:green");
    }else {
      console.log("%c  Faltas de asistencia", "color:red");
    }

    if (media >= 7){
      console.log("%c  Media aprobada", "color:green");
    }else{
      console.log("%c  Media no superada", "color:red");
    }

    if (trabajos >= 3){
      console.log("%c Trabajos entregados", "color:green");
    }else{
      console.log("%c Faltan algunos ejercicios practicos", "color:red");
    }
  }
} 

aprobado();



