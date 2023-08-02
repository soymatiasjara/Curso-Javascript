/* .toString
    Transforma un valor tipo número a un valor tipo string.
*/
const num1 = 10;
console.log(num1, typeof num1);

const texto = num1.toString();
console.log(texto, typeof texto);

/* .toFixed()
    Permite obtener un número con la cantidad de decimales especificados.
    Puedes truncar un número al no ingresar una cantidad.
*/
const num2 = 2.4532;
console.log(num2.toFixed(2));

/* parseInt()
    Intenta tranformar un valor a un entero.
*/

/* const calcular = () => {
    const num3 = parseInt(prompt('Escribe un número:'));
    const num4 = parseInt(prompt('Escribe otro número:'));
    console.log(num3 + num4);
} */

/*
    .parseFloat()
    Intenta tranformar un valor a un número decimal.
*/

const calcular = () => {
    const num3 = parseFloat(prompt('Escribe un número:'));
    const num4 = parseFloat(prompt('Escribe otro número:'));
    console.log(num3 + num4);
}

/* Math.rendom()
    Genera un número al azar entre 0 y 1.
*/

const numRan = Math.random();
console.log(numRan);

/* Math.floor()
    Redondea hacia abaja un número.
*/
console.log(Math.floor(7.2));
console.log(Math.floor(7.99));

/* Math.ceil
    Redondea hacia arriba un número.
*/
console.log(Math.ceil(7.2));
console.log(Math.ceil(7.99));

/* Math.round()
    Redondea hacie el entero más cercano.
*/
console.log(Math.round(7.5));
console.log(Math.round(7.49));

// Ejemplo de número al azar de 0 a 100

const numAzar = Math.random();
console.log(Math.floor(numAzar * 101));