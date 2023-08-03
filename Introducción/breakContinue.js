const nombres = ['Alex', 'Alejandro', 'Gonzalo', 'Ana', 'Andrés', 'Antonio'];

// Mostrar solo nombres que empiezan con A
/* for (let i = 0; i < nombres.length; i++) {
    if (nombres[i][0] === 'A') {
        console.log(nombres[i]);
    }
} */

/* break
    Nos sirve para salir de bloques de tipo Switch.
    Pero también nos sirve para forzar la salida de un ciclo.
*/
for (let i = 0; i < nombres.length; i++) {
    if (nombres[i][0] !== 'A') {
        console.log(`${nombres[i]} no empieza con la letra A, el ciclo se detuvo`);
        break;
    }
    console.log(nombres[i]);
};

/* continue
    Nos sirve para saltar a la siguiente iteración.
    También permite salta un ciclo completo.
*/
const invitados = ['Gonzalo', 'Daniel', 'Iván', 'Roberto', 'Exequiel', 'Exequiel', 'Nicolás'];
console.log('Lista de personas aceptadas: ');

for (let i = 0; i < invitados.length; i++) {
    if (invitados[i] === 'Roberto') {
        continue;
    }
    console.log(invitados[i]);
};