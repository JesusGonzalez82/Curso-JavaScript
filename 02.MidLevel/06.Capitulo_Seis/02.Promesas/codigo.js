

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
    ["Pavel Rodriguez", "Rayo Vallecano", undefined],
    ["Javier Sanz", undefined, "@estoNoEsSerio"]
];

let personas = [];

for (let i = 0; i < datoPersonas.length; i++){
    personas[i] = new Persona(datoPersonas[i][0],datoPersonas[i][1],datoPersonas[i][2])
}

console.log(personas)

const obtenerPersona = (id)=>{
    return new Promise((resolve, reject)=>{
        if (personas[id]==undefined) reject ("No se ha encontrado a la persona");
        else {resolve(personas[id])}
    });
}

const obtenerEquipo = (id)=>{
    return new Promise((resolve,reject)=>{
        if (personas[id].equipo==undefined) reject("No tiene equipo, es un triste");
        else {resolve(personas[id].equipo)};
    })
}

const obtenerInsta = (id)=>{
    return new Promise ((resolve,reject)=>{
        if(personas[id].instagram == undefined) reject ("Esta persona no tiene instagram");
        else {resolve(personas[id].instagram)}
    });
}

let id = 3;
obtenerPersona(id).then((persona)=>{
    console.log(persona.nombre);
    return obtenerInsta(id);
    }).then((instagram)=>{
        console.log(instagram);
        return obtenerEquipo(id);
    }).then((equipo)=>{
        console.log(equipo);
    }).catch((e)=>{
        console.log("Error",e);
})

