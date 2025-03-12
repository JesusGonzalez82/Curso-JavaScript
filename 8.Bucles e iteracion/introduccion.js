let numeroParaSumar = 0;
let mensaje = document.getElementById('mensaje');

mensaje.textContent = (numeroParaSumar < 10) ? 'Es menor que 10' : 'Es menor que 10;'

if (numeroParaSumar < 10){
    document.getElementById('mensaje').innerHTML = ('Es menor que 10');
}else {
    document.getElementById('mensaje').innerHTML = ('Es mayor que 10');
}

while (numeroParaSumar <= 6){
    numeroParaSumar++;

    let p2 = document.createElement('p');
    p2.textContent = numeroParaSumar;
    mensaje.appendChild(p2);
}

do {
    numeroParaSumar++;

    let p3 = document.createElement('p');
    p3.textContent = numeroParaSumar;
    mensaje.appendChild(p3);
}while (numeroParaSumar <= 6)
