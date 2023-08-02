/* Operadores Lógicos
    &&  And
    ||  Or
    !   Not
*/

const persona = {
    nombre: 'Roberto',
    edad: 17,
    tieneEntrada: true,
    tienePermiso: true
};

// Ejemplo #1 - && And
//const permitirAcceso = persona.edad >= 18 && persona.tieneEntrada;
//console.log('Permiso para entrar: ' + permitirAcceso);

// Ejemplo #2 - || Or
//const permitirAcceso = (persona.edad >= 18 || persona.tienePermiso) && persona.tieneEntrada;
// console.log('Permiso para entrar: ' + permitirAcceso);

// Ejemplo #3 - ! Not
const variable = true;

console.log(!variable);