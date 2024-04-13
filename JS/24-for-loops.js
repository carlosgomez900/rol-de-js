// For loop va a ir ejecuntando un codigo mientras la condicion sea verdadera y deja de ejecutar cuando esa condicion se deja de cumplir 

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);

// for ( let i = 0; i < 10; i++ ) {    //vamos a iniciar el index o indice desde el 0
//     console.log(i);
// }


// for ( let i = 1; i <= 100; i++ ) {  
//    if( i % 2 === 0) {
//         console.log(`El Numero ${i} es PAR`)
//    } else{
//     console.log(`El Numero ${i} es IMPAR`)
//    }
// }


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


for(let i = 0;  i < carrito.length; i++ ) {
    console.log(carrito[i].nombre);
}

//while loop primero evalua y despues ejecuta

// let i = 20; //indice

// while (i < 10)  {     //en el (va la condicion del while) mientras esta condicion sea evaluada como verdadera

//     console.log(`Desde el while loop`)
   

//     i++; //incremento
// }     


//Do while loop ejecuta el codigo una vez y despues evalua

let i = 100 ;

do { 
    console.log(i)

    i++;
} while(i < 10);