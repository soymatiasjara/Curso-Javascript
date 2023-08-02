/* Block Scope - Alcance de tipo bloque
    - Pertenecen las variables delaradas con const o let dentro de un bloque { }
    - Solo podemos acceder a ellas dentro del bloque
*/

const edad = 19;
let accesoPermitido = 'Permitido';
if (edad >= 18) {
    const accesoPermitido = true;
    console.log(accesoPermitido);

    if (true) {
        console.log(accesoPermitido);
    }

    const miFuncion = () => {
        console.log(accesoPermitido);
    }
    miFuncion();
}
// accesoPermitido fue definida dentro del bloque como true, pero por fuera es diferente.
console.log(accesoPermitido);

// Al definir una variable con var, esta será una variable global.
if (true) {
    var nombre = 'Matías';
}

console.log(nombre);