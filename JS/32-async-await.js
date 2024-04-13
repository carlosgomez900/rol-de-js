//Async / Await

 function descargarNuevosClientes() {
     return new Promise( resolver => {
         console.log('Descargarndo clientes... espere...')

        setTimeout( () => {
            resolver('Los clientes fueron descargados')
        }, 5000);

     });
 }

 function descargarUltimosPedidos() {
    return new Promise( resolver => {
        console.log('Descargando Pedidos... espere...')

       setTimeout( () => {
           resolver('Los Pedidos fueron descargados')
       }, 3000);

    });
}



async function app () {
    // console.log('app lista');
    try {
    //     const clientes =  await descargarNuevosClientes(); // con esta sintaxis no se ejecutan al mismo tiempo 
    //     const pedidos = await descargarUltimosPedidos();
    //     //console.log( 'Este codigo si se bloquea')  // Esta es la ventaja de Async/Await
    //    // mostrarClientes(resultado);
    //    //console.log('algo'); // si esta despues del awit este codigo se va a completar hasta que el await se haya completado 
    //     console.log(clientes);
    //     console.log(pedidos);

    const resultado =  await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]); //aqui se ejecutan al mismo tiempo
        console.log(resultado[0]); //con esta funcion las descargar aparecen idependientes 
        console.log(resultado [1]);
    } catch (error) {
        console.log(error);
    }
 }

 app();

 //console.log( 'Este codigo no se bloquea')

// setTimeout( function() {    //setIntervalse ejecutaria continuamente en intervalos de los segundos que le asignamos 
//     console.log( 'set timeout...')
// }, 5000);
