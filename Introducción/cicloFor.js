const nombres = ['Matías', 'Gonzalo', 'Iván', 'Exequiel', 'Daniel', 'Agustín'];
/* nombres.forEach((nombre) => {
    console.log(nombre);
}); */

/* Ciclo for
    Repite un bloque de código mientras se cumpla una condición.
    Espresión 1: Se ejecuta una sola vez antes de comenzar a repetir el bloque de código.
    Expresión 2: Una condición, mientras se cumple se ejecutará el boque de código.
    Expresión 3: Esta expresión se ejecuta siempre y después de que se ejecute el bloque de código.
*/

for (let num = 1; num <= 100; num++) {
    console.log(num);
};

for (let cuentaAtras = 50; cuentaAtras >= -0; cuentaAtras--) {
    console.log(cuentaAtras);
}

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
};