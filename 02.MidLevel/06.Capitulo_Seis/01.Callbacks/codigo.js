

function prueba(callback){
    callback("Pedro");
}

function decirNombre(nombre){
    console.log(nombre);
}

prueba(decirNombre);

class Persona {
    constructor(nombre, equipo, instagram){
        this.nombre = nombre;
        this.equipo = equipo;
        this.instagram = instagram;
    }
}

const datoPersonas = [
    ["Jesus Gonzalez", "Real Madrid", "@chusoMTB"],
    ["Pablo Llorente", "Fc Barcelona", "@llorenteB"],
    ["Pavel Rodriguez", "Rayo Vallecano", "@pinflas"],
    ["Javier Sanz", "Real Madrid", "@estoNoEsSerio"]
];

let personas = [];

for (let i = 0; i < datoPersonas.length; i++){
    personas[i] = new Persona(datoPersonas[i][0],datoPersonas[i][1],datoPersonas[i][2])
}

console.log(personas)

const obtenerPersona = (id, cb)=>{
    if (personas[id] == undefined){
        cb("No se ha encontrado la persona");
    }else{
        cb(null, personas[id])
    }
}

const obtenerInsta = (id, cb)=>{
    if (personas[id].instagram == undefined){
        cb("No se ha encontrado el instagram");
    }else{
        cb(null, personas[id].instagram)
    }
}

obtenerPersona(0,(err,persona)=>{
    if (err){
        console.log("Error en el nombre");
    }else{
        console.log(persona.nombre);
        console.log(persona.equipo);
        obtenerInsta(0,(err,instagram)=>{
            if(err){
                console.error(err);
            }else{
                console.log(instagram);
            }
        });
    }
});

