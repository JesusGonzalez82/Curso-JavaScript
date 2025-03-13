// Declaramos e Inicializamos -> condicion -> iteramos

// let animales = ['gato', 'perro', 'pterodactilo'];


// for (animal in animales){
//     document.write(animal + '<br>');
// }

// document.write('<br>');

// for (animal of animales){
//     document.write(animal + '<br>');
// }

array1 = ['maria', 'josefa', 'roberta'];
array2 = ['pedro', 'marcelo', array1, 'josefina'];

forRancio:
for (let array in array2){
    if (array == 2){
        for (let array of array1){
           if (array == 'maria'){
            continue forRancio;
        }
           document.write(array + '<br>');
        }
        }else {
            document.write(array2[array] + '<br>');
        }
    }