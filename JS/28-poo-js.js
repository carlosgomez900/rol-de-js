//Clases


class Producto {
    constructor(nombre, precio, marca, zona) {
        this.nombre = nombre;
        this.precio =precio;
       // this.marca = marca;
        //this.zona = zona;
    }

    formatearProducto() {
        return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
    }

    // formatearProducto() {
    //     return `Marca de Producto ${this.marca} esta hacia el: ${this.zona}`;
    // }


    obtenerPrecio() {
        console.log(this.precio);
    }
}

const producto2 = new Producto('Monitor curvo de 49"', 800);   
const producto3 = new Producto('Laptop', 300 );
//const producto4 = new Producto('telefono', 250, 'samsung', 'este');

//Herencia

class Libro extends Producto {
    constructor(nombre, precio, isbn) {
       super(nombre, precio);
        this.isbn = isbn;
}
    formatearProducto() {
        return `${super.formatearProducto()} y su isbn es ${this.isbn}`;
    }    

    obtenerPrecio() {
        super.obtenerPrecio();
        console.log('Y si hay en existencia');
    }

}

const libro = new Libro ('JavaScript la Revolucion', 120, '01020397236830');

console.log(libro.formatearProducto());

console.log(libro.obtenerPrecio());

console.log(producto2.formatearProducto());
//console.log(producto3);
//console.log(producto4);
