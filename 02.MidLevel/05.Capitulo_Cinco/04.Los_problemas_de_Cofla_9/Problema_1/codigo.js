const sendbutton = document.getElementById('enviar-nota');

sendbutton.addEventListener('click',()=>{
    let resultado, mensaje;

    try{
        prevRes = parseInt(document.getElementById('nota').value);
        if (isNaN(prevRes)){
            throw "error";
        }
        resultado = verificarAprobado(8,5,mensaje);
        mensaje = definirMensaje(resultado[1]);
        
    } catch(e){
        resultado = "Debes introducir un valor numerico";
        mensaje = "Has intentado hackear el sistema";
    }
    abrirModal(resultado[0],mensaje);
})

const definirMensaje = (pr)=>{
    let resultado;
    switch (pr) {
        case 0: resultado = "Insuficiente";
        break;
        case 1: resultado = "Insuficiente";
        break;
        case 2: resultado = "Insuficiente";
        break;
        case 3: resultado = "Insuficiente";
        break;
        case 4: resultado = "Insuficiente";
        break;
        case 5: resultado = "Suficiente";
        break;
        case 6: resultado = "Bien";
        break;
        case 7: resultado = "Notable";
        break;
        case 8: resultado = "Notable";
        break;
        case 9: resultado = "Sobresaliente";
        break;
        case 10: resultado = "Sobresaliente";
        break;
        default: resultado = "Torpe";
    }
    return resultado;
}

const verificarAprobado = (nota1, nota2, prevRes)=>{
    let media = (nota1 + nota2 + prevRes) / 3;
    if (media >= 5){
        return ["<span class='green'>APROBADO</span>",Math.round(media)];
    }else {
        return ["<span class='red'>SUSPENSO</span>",Math.round(media)];
    }
}

const abrirModal = (res, msg)=>{
    document.querySelector('.resultado').innerHTML = res;
    document.querySelector('.mensaje').innerHTML = "Tu prueba: " + msg;
    let modal = document.querySelector('.modal-background');
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}