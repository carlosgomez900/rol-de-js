//Strings o cadenas de texto 

//const producto = "Monitor de 20 pulgadas";
//const producto = "Monitor de 20\""; //para poner comillas dobles en comillas dobles se pone una diagonal invertida o poner comillas sencillas 
//const producto2 = String('monitor 30 pulgadas');
//const producto3 = new String('monitor 50 pulgadas') //siempre que utilicemos el new estos terminan siendo objetos 

//console.log( producto) 
//console.log(typeof producto2) //con este typeof podemos saber que tipo de dato tiene una variable ya sea numero buleano o strings
//console.log(typeof producto3)

//Metodos para los Strings


const tweet = "aprendiando JavaScript con el curs de desarrollo web completo\"";
const producto2 = "Monitor de HD\"";
const email = 'correo@correo.com'



//length es para la extencion
console.log( tweet.length); //.length nos va a decir cuantos caracteres tiene la cadena de texto y esto es una propiedad, no es un metodo como tal pero como no tiene parentesis
console.log( producto2);


//indexOF (retorna posicion) //esto nos va a permitir decirnos en que posicion se encuentra u texto que estamos buscando 

console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('tablet')); //cuando el nuemero en menor a 0 como -1 es que el texto no se encuentra 
console.log(email.indexOf('@'))

//Includes (retorna true o false)

console.log(tweet.includes('JavaScript')); //true porque si encontro javascript
console.log(producto2.includes('tablet')); //false por que no encontro tablet


