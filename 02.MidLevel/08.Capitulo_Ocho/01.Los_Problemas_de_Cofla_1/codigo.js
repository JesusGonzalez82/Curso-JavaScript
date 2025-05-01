const getInfo = async ()=>{
    let aprobados = document.querySelector(".num-aprobados");
    let suspensos = document.querySelector(".num-suspensos")
    try {
        resultado = await axios("informacion.txt");
        console.log(resultado);
        aprobados.textContent = resultado.data.aprobados;
        suspensos.textContent = resultado.data.suspensos;
    }catch(e){
        console.log(e);
        aprobados.textContent = "La API fallo";
        suspensos.textContent = "LA API fallo";
    }
}

document.getElementById("getInfo").addEventListener('click', getInfo);