//Arreglos o Arrays


const numeros = [10, 20, 30, 40, 50]; //siempre que veamos corchetes sabemos que es un arreglo []

//console.table(numeros);// una mejor manera de ver es con cosole.table


// const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

// console.table(meses);

//la idea del arreglo es tener datos relacionados podemos mezclar todo tipo de datos 

// const arreglo = ["hola", 10, true, "si", null, {nombre: "carlos", trabajo: "programador"}, [1, 2, 3]];

// console.log(arreglo);


//Acceder a los valores de un Arreglo el indiex siempre comienza en cero es decir el 10 - 0 , 20 - 1, 30 - 2, .....

// console.log(numeros[0]);
// console.log(numeros[1]);
// console.log(numeros[2]);  //nos va decir que no esta definido o es existente no nos va a marcar error 
// console.log(numeros[3]);
// console.log(numeros[4]);


// //conocer la extencion de un arreglo 

// console.log(meses.length); //esto nos va a decir cuantos elementos hay en ese arreglo 



// numeros.forEach(function(numero){
//     console.log(numero);
// })


//numeros[5] = 60;
//numeros[6] = 70; //podemos ir agregando elementos al arreglo

numeros.push(60, 70, 80); //esta forma va agregar un elemnto hasta el final sin importar cuantos elementos tenga tambien de pueden agregar elementos por comas (60, 70, 80)

numeros.unshift(-10, -20, -30) //esta forma agrega elementos al inicio 



console.table(numeros);

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];

// meses.pop(); //este va eliminar el ultimo elemnto del arreglo 
// meses.shift(); //este va eliminar el primer elemento del arreglo 

// meses.splice(2, 1)
// console.table(meses);

//Rest operator o Spread operator

const nuevoArreglo =[...meses, 'junio']; // de esta manera aprece al final 
//const nuevoArreglo =['junio', ...meses] // de esta manera aoarace al inicio 

console.log(nuevoArreglo)
