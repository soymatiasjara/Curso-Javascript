/*
    - Parámetros: los valores especificados en la defición.
    - Argumentos: los valores que le pasamos a la funcón cuando la invocamos.
*/

const saludo = (nombre = 'amigo') => {
    console.log(`Hola ${nombre}!`);
};

saludo('Matías');
saludo('Morsa');
saludo();

// Múltiples parámetros
const operacion = (tipo, num1, num2) => {
    if (tipo === 'suma') {
        console.log(num1 + num2);
    } else if (tipo === 'resta') {
        console.log(num1 - num2);
    }
};

operacion('suma', 30, 5);
operacion('resta', 27,7);