// asasassas RefenreceError

// if (){ SyntaxError

// }

try{
    console.log("Aqui no ha pasado nada");
}
catch(err){
    console.log(err);
} finally{
    console.log("Voy a salir de todas maneras");
}

const pruebaTry = ()=>{
    try{
        return 1;
    }
    catch(e){
        return 2;
    }finally{
        return 3;
    }
}
console.log(pruebaTry());