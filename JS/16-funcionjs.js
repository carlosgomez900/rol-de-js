// Funciones JavaScrips 
//Declaracion de la funcion 

// function sumar() { //a esto se le conoce como cuerpo de una funcion todo lo que coloquemos aqui dentro 
//     console.log(10 + 10);
// }

// sumar(); //esto es para mandar a llamar a la funcion sumar 

// //Expresion de la funcion 

// const sumar2 = function(){
//     console.log(3 + 3);
// }

// sumar2();


//IIFE //esta funcion no se manda a llamar por que se llaman a ellas mismas se invocan solitas 
//iife son utiles para proteger para que no se mesclen las variables y funciones con las de otros archivos 

// (function() {
//     console.log('esto es una funcion');
// }) ();

 

sumar(); //aqui si mandamos llamar la funcion y luego la definimos no nos marcar error por que es una funcion 
function sumar() { //a esto se le conoce como cuerpo de una funcion todo lo que coloquemos aqui dentro 
    console.log(10 + 10);
}



sumar2(); //en esta si mandamos a llamar la funcion y luego la definimos nos marcara, error por que si es una function no esta declarada con la sintaxis de function
const sumar2 = function(){
    console.log(3 + 3);
}

