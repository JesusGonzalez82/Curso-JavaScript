
const objeto = {
    propiedad1: "valor1",
    propiedad2: "valor2",
    propiedad3: "valor3"
};

const obtenerInfo=()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve(objeto)},1000)
    })
}

// obtenerInfo().then(resultado => console.log(resultado));

// const mostrarResultado = async()=>{
//     resultado = await obtenerInfo();
//     console.log(resultado);
// }

// mostrarResultado();