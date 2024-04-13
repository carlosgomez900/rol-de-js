//Estructuras de control

// const puntaje = 1000; // = esto quiere decir asignar una variable 

// if(puntaje !== 1000) {  //  == es una comparativa  === este operador es mas extricto y va a comparar que sea el valor 
//     console.log('no es igual');
    
// } else {
//     console.log('si el puntaje es 1000');
// }



// const efectivo = 1000;
// const carrito = 800;

// if(efectivo > carrito) {
//     console.log('El Usuario puede pagar')
// }else {
//     console.log('Fondos Insuficientes')
// }


const rol = 'ADMINISTRADOR';

if(rol === 'ADMINISTRADOR' ) {
    console.log('Acceso a todo el sistema');
} else if (rol ==='EDITOR') {
    console.log('Eres editor, puedes entrar pero no puedes hacer mucho')
} else {
    console.log('No tienes acceso')
}

 