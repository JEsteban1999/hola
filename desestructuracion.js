const deadpool = {
    nombre: "Wade",
    apellido: "Wilson",
    poder: "Regeneración",
    getNombre: function(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;

// const {nombre, apellido, poder} = deadpool;
// console.log(nombre, apellido, poder);

function imprimirHeroe(heroe) {
    const {nombre, apellido, poder} = heroe;
    console.log(nombre, apellido, poder);
}

imprimirHeroe(deadpool);