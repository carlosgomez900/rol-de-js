//This es una palabra reservada para js 


const reservacion ={
    nombre: 'Carlos',
    apellido: 'Gomez',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}

const reservacion2 ={
    nombre: 'Omar',
    apellido: 'Gomez',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservo y su cantidad a pagar es de ${this.total}`);
    }
}
reservacion.informacion();
reservacion2.informacion();