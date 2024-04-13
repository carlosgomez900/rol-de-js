// Objetos Esto es lo que mas se utiliza en JS

// const nombreProducto ="Monitor 20 pulgadas";
// const precio = 300;
// const disponible = true;

//esta sintaxis es la misma que la de arriba, aqui se juntan en un solo const

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible : true,
}



//console.log(producto.precio); //asi podemos acceder a la propiedad que queremos ver "precio" en este caso
//console.log(producto.nombreProducto);
//console.log(producto.disponible);
//console.log(producto["precio"]) // estas seria otra sintaxis 

//agregar nuevas propiedades
producto.imagen = 'imagen.jpg' //esto nos va a crear una propiedad llamada imagen


//eliminar propiedades
delete producto.disponible;

console.log(producto);
