// POO    Objeto constructor y Objeto literal

/*Object Literal*/
//un objeto se conpone de esta forma, un objeto tiene diferentes variables en una sola 

const producto = {
    nombre: 'tablet',
    precio: 500
}


//Object constructor tiene una sintaxis a una funcion 
//una clase es una forma en la que vamos a poder almacenar la forma como (datos) que va a tener un objeto en especifico 
//una clase va hacer el contenedor de toda la forma de todos los datos y metodos y funciones que va a tener un objeto en el
function Producto(nombre, precio, marca, zona) {   //parametros
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
        this.zona = zona;
}

//prototypes crea funciones que solo se utilizan en un objeto en especifico

Producto.prototype.formatearProducto = function() {
    return `El Producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
}

const producto2 = new Producto('Monitor curvo de 49",', 800, 'sony', 'sur');    //argumentos 
const producto3 = new Producto('Laptop', 300, 'lg', 'norte');
const producto4 = new Producto('telefono', 250, 'samsung', 'este');
const producto5 = new Producto('tenis', 150, 'adidas', 'oeste')



function formatearProducto(producto) {
    return `El Producto ${producto.nombre} tiene un precio de: $ ${producto.precio}`;
}


console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());
console.log(producto4.formatearProducto());
console.log(producto5.formatearProducto());


console.log( formatearProducto(producto2) );

