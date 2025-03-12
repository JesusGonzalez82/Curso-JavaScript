// Declaramos e Inicializamos -> condicion -> iteramos

for (let i = 0; i < 20; i++){

    if (i % 2 == 0){
        continue;
    }

    mensaje.innerHTML += i + '<br>';
}