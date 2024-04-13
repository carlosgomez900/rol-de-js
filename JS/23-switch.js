const metodoPago = 'Tarjeta';

switch(metodoPago) {
    case 'Tarjeta':
        console.log('Pagaste con Tarjeta');
        break;  //el break es como decir hasta aqui termina de ejecutar el codigo

        case 'Cheque':
        console.log('El usuario va a pagar con cheque, revisaremos los fondos primero');
        break;

        case 'Efectivo':
        console.log('Pagaste con Efectivo');
        break;

        default: //se va a ejecutar cuando ninguno de estos case se cumpla 
                console.log('Aun no has pagado')
            break;
}
