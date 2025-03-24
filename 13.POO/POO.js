class Animal{
    constructor(raza, alimentacion, color, habitat){
        this.raza = raza;
        this.alimentacion = alimentacion;
        this.color = color;
        this.hogar = habitat
        this.info = `El animal de raza ${this.raza}, tiene una alimentación de tipo ${this.alimentacion}, suelen ser de color ${this.color} y suelen ser animales ${this.hogar}`
    }
    verInformacion() {
        let mensajeDiv = document.getElementById('mensaje'); // Obtener el div contenedor
        let nuevoParrafo = document.createElement('p'); // Crear un nuevo párrafo
        nuevoParrafo.textContent = this.info; // Asignar el texto al párrafo
        mensajeDiv.appendChild(nuevoParrafo); // Insertarlo en el div
    }
    ladrar(){
        let mensajeDiv = document.getElementById('mensaje');
        let nuevoParrafo = document.createElement('p')
        if (this.raza.toLowerCase()== 'perro'){
            nuevoParrafo.textContent = 'Guau, guau!';
        }else{
            nuevoParrafo.textContent = `No puede ladrar, ya que es un ${this.raza}`;
        }

        mensajeDiv.appendChild(nuevoParrafo);
    }
    maullar(){
        let mensajeDiv = document.getElementById('mensaje');
        let nuevoParrafo = document.createElement('p')
        if (this.raza.toLowerCase()== 'gato'){
            nuevoParrafo.textContent = 'Miau, miau!';
        }else{
            nuevoParrafo.textContent = `No puede maullar, ya que es un ${this.raza}`;
        }

        mensajeDiv.appendChild(nuevoParrafo);
    }
}

    class Perro extends Animal{
        constructor(raza, habitat, color, subclase){
            super(raza, habitat, color);
            this.subclase = subclase;
        }
        static ladrar(){
            alert('GUAU');
        }
}
    class Gato extends Animal{
        constructor(raza, edad, color, subclase){
            super(raza, habitat, color);
            this.subclase = "";
        }
        static maullar(){
            alert('Miau');
        }
        set setRaza(newNAme){
            this.raza = newNAme;
        }

        get getRaza(){
            return this.raza;
        }
    }

const perro = new Perro('perro', 'carnivoro', 'marron', 'domesticos', 'pastor alemán');
const gato = new Animal('gato', 'omnivoro', 'negro', 'domesticos');
const leon = new Animal('león', 'carnivoro', 'marron', 'salvajes');

// console.log(perro.ladrar());
// console.log(gato.ladrar());
// console.log(leon.ladrar());

perro.ladrar();
perro.maullar();
perro.verInformacion();
gato.ladrar();
gato.maullar();
gato.verInformacion();
leon.ladrar();
leon.verInformacion();

// document.getElementById('mensaje').innerHTML = `El animal de raza ${perro.raza}, tiene una alimentación de tipo ${perro.alimentacion}, suelen ser de color ${perro.color} y suelen ser animales ${perro.hogar}`;

