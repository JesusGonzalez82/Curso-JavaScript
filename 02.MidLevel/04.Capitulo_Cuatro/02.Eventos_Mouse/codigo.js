// Manera no recomendada de hacerlo

const button = document.querySelector('.button');
const otherButton = document.querySelector('.button-2');
const contenedor = document.querySelector('.container');

button.onclick = () =>{
    alert("Hola Aitana")
}

// Manera actual o recomendada de hacerlo 

otherButton.addEventListener('click', (e) =>{
    alert('Hola Chicas!');
    console.log(e);
});

contenedor.addEventListener('click', (e)=>{
    alert('haz click en el contenedor');
    e.stopPropagation;
},true);


