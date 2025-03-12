
    let variable = ['Jesus', 43, "Madrid"];
    let frutas = ['platano', 'manzana', 'pera', 'mandarina'];

    document.getElementById('mensaje').textContent = frutas.join(', ')

    let nuevoP = document.createElement('p');
    nuevoP.textContent = variable.join(', ');
    document.getElementById('mensaje').appendChild(nuevoP);

    let nuevoP2 = document.createElement('p');
    nuevoP2.textContent = variable[2];
    document.getElementById('mensaje').appendChild(nuevoP2);