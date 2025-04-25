// JSON deserializado
const deserializado = '{"variable1" : "Juan", "variable2" : "Luis"}';

const serializado = JSON.stringify(deserializado);
console.log(typeof deserializado);

// JSON serializado
const serializado1 = '{"variable1" : "Juan", "variable2" : "Luis"}';

const desserializado = JSON.parse(serializado1);
console.log(desserializado);