
// const getName = ()=>{
//     fetch("informacion.txt")
//         .then(res =>{
//             if (res.ok) Promise.resolve(res)
//             else Promise.reject(res);
//         })
//         .then(res=>console.log(res))
//         .catch(e=>console.log(e));
// }

// getName();

const getName = async ()=>{
    let peticion = await fetch("informacion.txt");
    let resultado = await peticion.json();
    let HTMLCode = `Nombre: ${resultado.nombre}
                    Edad: ${resultado.edad}`;
    console.log(resultado);
    document.getElementById('resultado').textContent = HTMLCode;
}

document.getElementById('btn-name').addEventListener("click", getName)