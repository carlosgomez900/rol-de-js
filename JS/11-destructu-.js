 //objeto

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible : true,
}


//como podemos seleccionar precio y crear una variable 
//forma anterior 

// const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombreProducto);


//destructuring de objetos = sacar de una estructura 
//con este codigo se crea la variable y se extraer el valor en un solo paso con destructuring 

const {precio, nombreProducto } = producto;
const { } = producto;

console.log(precio);
console.log(nombreProducto);
