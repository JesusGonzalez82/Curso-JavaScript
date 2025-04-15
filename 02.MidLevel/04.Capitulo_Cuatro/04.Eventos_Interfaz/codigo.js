const img = document.querySelector(".img__prueba");

// Evento Error

img.addEventListener('error', ()=>{
    console.log('Ha sucedudi un Error');
});

// Evento Load

window.addEventListener("load", ()=>{
    console.log("Ha cargado la pagina web");
});

// Evento beforeunload

addEventListener('beforeunload', ()=>{
    console.log("Estas abandonando la web")
})

// Evento resize

addEventListener('resize', ()=>{
    console.log("Se está actualizando la resolucion");
});

// Evento Scroll

addEventListener('scroll', ()=>{
    console.log("Se está haciendo scroll");
});