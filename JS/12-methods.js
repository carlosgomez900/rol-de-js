 //"use strict"  //es decire que debe ejecutar el codigo js de forma extricta que deba de segir las buenas practicas 
 //objeto

 const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible : true,
}


// Object.freeze(producto); //aqui se va a congelas para nopoder agregar mas valores o que sea modificado 

// //producto.imagen = 'imagen.jpg';

// console.log(Object.isFrozen(producto));

// console.log(producto);

Object.seal(producto); //no nos permite eliminar ni agregar pero si nos permite modoficar los existentes

producto.precio = 'NUEVO PRECIO';

delete producto.precio;

console.log(producto);
