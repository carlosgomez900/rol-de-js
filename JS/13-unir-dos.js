// unir dos objetos con el spread operator

const producto = {
    nombreProducto : "Monitor 20 pulgadas",
    precio: 300,
    disponible : true,
}

const medidas = {
    peso: '1kg',
    medida: 'im'
}    

//la buena prectica hoy en dia es no modificar los datos originales 

const nuevoProducto = {... producto, ...medidas };

console.log(producto);
console.log(nuevoProducto);