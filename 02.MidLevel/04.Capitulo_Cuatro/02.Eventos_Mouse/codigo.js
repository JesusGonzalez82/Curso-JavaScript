

// Manera no recomendada de hacerlo

const button = document.querySelector('.button');
const otherButton = document.querySelector('.button-2');
const contenedor = document.querySelector('.container');

// button.onclick = () =>{
//     alert("Hola Aitana")
// }

// El evento se dispara cuando el mouse entra del elemento

// otherButton.addEventListener('mouseover', (e) =>{
//     alert('Hola Chicas!');
//     console.log(e);
// });

// El evento se dispara cuando el mouse sale del elemento

otherButton.addEventListener('mouseout', (e) =>{
    alert('Hola Chicas!');
    console.log(e);
});

// contenedor.addEventListener('dblclick', (e)=>{
//     alert('haz click en el contenedor');
// });


