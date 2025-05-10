"use strict";

const cambiaTamaño = tamaño =>{
    return ()=>{
        document.querySelector(".texto").style.fontSize = `${tamaño}px`;
    }
}

let px12 = cambiaTamaño(12);
let px14 = cambiaTamaño(14);
let px16 = cambiaTamaño(16);

document.querySelector(".t12").addEventListener("click", px12);
document.querySelector(".t14").addEventListener("click", px14);
document.querySelector(".t16").addEventListener("click", px16);

const suma = (a,b)=>{
    b = typeof b != 'undefined' ? b : 0;
    console.log(a+b);
}

suma(10);