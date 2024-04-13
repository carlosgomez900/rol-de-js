async function obtenerEmpleados() {

    const archivo = 'empleados.json'; //status 404 es error de ejecucion  /  200 se ejecuto correctamente 

    //fetch(archivo)   //esta es la funcion que nos permite usar fetch api, aqui podemos colocar una url o un archivo
      //  .then( resultado => resultado.json()) // aqui nos ahorramos mas codigo que abajo 

            // .then( resultado => {
            //     return resultado.json(); // esto nos va a obligar a usar un nueno .then
            //     //console.log(resultado)
            // })


        //.then( datos => {
               // console.log( datos.empleados);

                // const { empleados } = datos;
                // //console.log(empleados)

                // empleados.forEach( empleado => {
                //     console.log(empleado);
                //     console.log(empleado.id);
                //     console.log(empleado.nombre);
                //     console.log(empleado.puesto);

                //     document.querySelector('.contenido').textContent = empleado.nombre; este codigo es para mostrarlo en el html
                // })
        // } )

    const resultado = await fetch(archivo); //menos codigo con await 
    const datos = await resultado.json();
        console.log(datos)    
        //console.log(resultado)
}

obtenerEmpleados(); 