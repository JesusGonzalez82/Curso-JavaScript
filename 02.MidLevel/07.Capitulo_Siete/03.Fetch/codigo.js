fetch("https://reqres.in/api/users", {
    method:  "POST",
    body : JSON.stringify({
        "nombre" : "Jesus",
        "apellido" : "Gonzalez"
    }),
    headers: {
        "Content-type" : "application/json",
        "Authorization": "Bearer reqres-free-v1"
    }      
})

    .then(res=>res.json())
    .then(res=>console.log(res))