//Promises en JavaScript

const usuarioAutentificado = new Promise ( (resolve, reject) => {
        const auth = true;

        if(auth){
            resolve('Usuario autentificado'); // El Promise se cumple 
        } else {
            reject('no se pudo iniciar sesion');  // El promise no se cumple
        }
}); 

usuarioAutentificado
        .then( resultado =>    console.log(resultado)) //automaticamente se ejecuta una accion cuando accedemos a .then
         

        .catch( function(error) {   // ejecuta el else si hay un error 
            console.log(error)
        })


//En los Promise existen 3 valores posibles 
//Pending : No se ha cumplido pero tampoco se ha rechazado 
//Fulfilled : Ya se cumplio 
//Rejected : Se ha rechazado o no se ha cumplido  