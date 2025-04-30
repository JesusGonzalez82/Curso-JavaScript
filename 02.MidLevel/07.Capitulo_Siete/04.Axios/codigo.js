// Axios trabaja por defecto con peticiones GET, pero tambien podemos poner axios.get para ser mas especificos
// Para trabajar con POST pondriamos axios.post
axios("informacion.txt")
    .then(res=>console.log(res))