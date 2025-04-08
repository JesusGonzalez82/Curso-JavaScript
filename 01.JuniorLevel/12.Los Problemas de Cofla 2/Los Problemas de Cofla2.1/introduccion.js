let free = false;

const validar = (time) =>{
  let edad = prompt('¿Cual es tu edad?');
  if (edad >= 18){
    if (time >= 2 && time < 7 && !free ){
      alert('Puedes pasar gratis!! Eres el primero pasadas las 2AM');
      free = true;
    }else {
      alert(`Son las ${time}:00, puedes pasar, pero tienes que pagar`);
    }
  }else{
    alert('Vete a casa con tu mamá, que eres muy pequeño')
  }
}

validar(23);
validar(24);
validar(0.2);
validar(0.6);
validar(1);
validar(2);
validar(2.4);
validar(3);



