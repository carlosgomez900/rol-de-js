// Arrow Functions


const sumar2 = (n1, n2) => console.log(n1 + n2);
 //esto ya es un arrow functions

sumar2(5, 10);



const aprendiendo = tecnologia => console.log(`Aprendiendo ${tecnologia}`) //se puede eliminar el parentesis de tecnologia por que solo es 1 elemento 

aprendiendo('JavaScript');



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

//forEach
meses.forEach(mes => {
    
     if(mes == 'marzo') {
         console.log('marzo si existe ')
     }  
});

 
let resultado;
//some ideal para arreglo de objetos
resultado = carrito.some(producto => producto.nombre === 'Celular')

//Reduce
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
 
//Filter
resultado = carrito.filter(producto => producto.precio > 400);


resultado = carrito.filter(producto => producto.nombre !== 'Celular');


console.log(resultado);
