//Objeto Math

let resultado;

resultado = Math.PI;
resultado = Math.round(2.7);  //este es para redondear el el numero 
resultado = Math.ceil(2.1);  //ceil siempre redondea hacia arriba incluso un 2.1 va a redondear hacia arriba
resultado = Math.floor(2.9); //floor simpre va a redondear hacia abajo incluso un 2.9 lo va aredondear hacia abajo 
resultado = Math.sqrt(144);  //raiz cuadrada
resultado = Math.abs(-200);  //lo convierte de numero negativo a positivo 
resultado = Math.min(3, 5, 1, 8, 2, 10); //nos va adecir cual es el numero menor del grupo 
resultado = Math.max(3, 5, 1, 8, 2, 10); //nos va a decir cual es el numero mayor del grupo 
resultado = Math.random();  //numero aleatorio pero no es mas de 1 
resultado = Math.floor(Math.random()*30);


console.log(resultado);
