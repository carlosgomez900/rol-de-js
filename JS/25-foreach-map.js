const carrito = [
    {nombre: 'Monitor 20 pulgadas', precio: 500},
    {nombre: 'Television 50 pulgadas', precio: 700},
    {nombre: 'Tablet', precio: 300},
    {nombre: 'Audifonos', precio: 200},
    {nombre: 'Teclado', precio: 50},
    {nombre: 'Celular', precio: 500},
    {nombre: 'Bocinas', precio: 300},
    {nombre: 'Laptop', precio: 800},
];

//ForEach esto es para mandarlos en pantalla o en la consola 

// carrito.forEach(function(producto){
//     console.log(producto.nombre)
// });

carrito.forEach(producto => console.log(producto.nombre));



//Map   esto es para crear un nuevo arreglo 

const arreglo2 =carrito.map(producto => `${producto.nombre} - ${producto.precio}`);

//console.log(arreglo1); // este nos marca undefined
console.log(arreglo2); // este nos muestra la informacion 