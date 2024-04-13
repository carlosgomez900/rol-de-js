const numero1 = 20;
const numero3 = 30;

console.log(numero1); // esta linea si se ejuecuta 

try {  //esto va hacer que nos marque el error pero va a ejecutar la siguente linea el codigo se ejecuta completamente 
    console.log(numero2); //aqui nos va a marcar error por que no esta esta constante, asi que el nuemro 3 ya no se ejecuta 
} catch (error) {
console.log(error)
}


console.log(numero3); //esta linea ya no se ejecuto por que hay un error 
