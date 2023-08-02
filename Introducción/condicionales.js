// Estructura de una condicional
if (true) {
    console.log(true);
}

// Ejemplo #1
const usuario = {
    nombre: 'Cam',
    edad: 31,
    pais: 'Chile',
    ticket: 'true',
};

// if (usuario.edad >= 18) {
//     console.log('El usuario es mayor de 18 años, tiene permitido entrar');
// } else {
//     console.log('El usuario es menor de edad, no tiene permitido entrar');
// }

// Ejemplo #2 - Combinando operadores

// if (usuario.edad >= 18 && usuario.ticket) {
//     console.log('El usuario es mayor de edad y tiene ticket');
// } else {
//     console.log('El usuario es menor de edad o no tiene ticket');   
// };

// Ejemplo #3 - Anidando condicionales

// if (usuario.edad >= 18) {
//     if (usuario.ticket) {
//         console.log('El usuario en mayor de edad y tiene ticket.');
//     } else {
//         console.log('El usuario es mayor de edad, pero no tiene ticket.')
//     }
// } else {
//     console.log('El usuario es menor de edad.');
// }

// Ejemplo #4 - else if

if (usuario.pais === 'Chile') {
    console.log('El usuario es de Chile');
} else if (usuario.pais === 'México') {
    console.log('El usuario es de México');    
} else if (usuario.pais === 'Argentina') {
    console.log('El usuario es de Argentina')
} else {
    console.log('El usuario es de otro país');
};