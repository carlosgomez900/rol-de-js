const boton = document.querySelector ('#boton') ;    //es la forma en que vamos a seleccionar contenido Html
boton.addEventListener('click', () => {
    //console.log('diste click')
    Notification.requestPermission()
        .then(resultado => console.log(`Èl resultado es ${resultado}`))
});

if(Notification.permission == 'granted') {
    new Notification ('Esta es una notificacion', {
        icon: 'img/js.jpg',
        body: 'codigo de carlos con practicas de js '
    })
}