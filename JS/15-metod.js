// Mas metodos con Array
//Array methods

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

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

//forEach este se va a ejecutar al menos una vez por cada ocasion o cada elemnto que hay en el arreglo

meses.forEach(function(mes) {
    //console.log(mes);
     if(mes == 'marzo') {
         console.log('marzo si existe ')
     } //con esta sintaxis podemos ver si un elemnto especifico existe en este caso marzo si existe 
});

 



// Includes  es el equivalente a codigo de foreach

let resultado = meses.includes('diciembre');

//Some ideal para arreglo de objetos 

resultado = carrito.some(function(producto) {
    return producto.nombre === 'Celular'
})


//Reduce va a tomar todos los numeros y nos va a entregar solamente el resutado 

resultado = carrito.reduce(function(total, producto){
    return total + producto.precio
}, 0);


//Filter  para filtrar los elementos en este caso mayores a 400 ya sea menor o mayor 

resultado = carrito.filter(function(producto){
    return producto.precio > 400
});

resultado = carrito.filter(function(producto){
    return producto.nombre !== 'Celular' //=== se trae solo el elemnto celular !== se trae todos menos el elemnto celular 
});

console.log(resultado);
