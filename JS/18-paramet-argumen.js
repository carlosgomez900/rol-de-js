  
function sumar(nuemro1 = 0, nuemro2 = 0) {  //numero1, y 2 son parametros 
    console.log(nuemro1 + nuemro2);
}

sumar(10, 5); //Argumentos o los valores reales y se pueden reutlizar multiples argumentos 
sumar(3, 3);
sumar(3, 6);
sumar(1);      //parametros por de full si no tienen un argumento toma el vaor 0 


const sumar2 = function(n1, n2){
    console.log(n1 + n2);
}

sumar2(5, 10);
