console.assert(5 < 3); // Aparece un error si la afirmación no es correcta
console.clear(); // Limpia la consola
console.error("No voy a aprobar"); // Muestra un mensaje de error en la consola
console.info("o si??") // Emite un mensaje informativo
console.log("Y si si??") // Igual que .info muestra un mensaje 
console.table(["Chuso", "Pablo", "Javi", "Pavel"]) // Toma un argumento obligatorio que tiene que ser un array o un objeto y un parametro adicional: columns y nos muestr una tabla en consola
console.warn("No has pulsado el boton correcto"); // Muestra una advertencia
console.dir(["Chuso", "Pablo", "Javi", "Pavel"]); // Despliega una lista interactiva de las propiedades del objeto JS especificado [No estandar]

// Funciones de conteo

console.count(); // Registra el numero de veces que se llama a console.count
console.count();
console.countReset(); // Resetea el contador de console.count
console.count();

// Funciones de agrupacion

console.group(); // Crea un nuevo grupo de linea, lo muestra abierto.
console.groupEnd(); // Borra el grupo creado.
console.groupCollapsed(); // Crea un nuevo grupo, pero aparece cerrado.