let trabajo = "240 minutos trabajando";
let estudio = "100 minutos de estudio";
let trabajoPractico = "100 minutos de trabajos ";
let tareasDomesticas = "30 minutos de tareas domesticas";
let descanso = "10 minutos de descanso";

console.log("TAREAS");

for (let i = 0; i <14 ; i++){
    if (i == 0){
        console.group("Semana 1");
    }
    console.groupCollapsed("Dia " + (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(estudio);
    console.log(trabajoPractico);
    console.log(tareasDomesticas);
    console.groupEnd();
    if (i == 6){
            console.groupEnd();
            console.group("Semana 2");
        }
    }
console.groupEnd();
console.groupEnd();




