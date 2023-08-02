// Los valores dentro de los arreglos dentro de Javascript, estos son objetos.

const colores = ['Rojo', 'Verde', 'Azul'];

/* .lenght
    (propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
*/
console.log(colores.length);

/* .toString()
    Nos permite transformar un arreglo a una cadena de texto.
    Por ejemplo para poder mostrarlo en el navegador.
*/
//document.body.innerHTML = colores.toString();
console.log(colores.toString());

/* .join()
    Nos permite transformar un arreglo a una cadena de texto y separar cada elemento.
*/
console.log(colores.join(' - '));
console.log(`Los colores ${colores.join(', ')} son primarios`);

/* .sort()
    Nos permite ordenar un arreglo de cadenas de texto de forma alfabética o ascendente, y esta también se modificará.
    Primeros número y luego letras.
*/
const letras = ['j', 't', 'o', 'b', 'd'];
console.log(letras);
console.log(letras.sort());
console.log(letras);

const numeros = [6, 2, 24, 88, 7];
console.log(numeros.sort());

/* .reverse()
    Nos permite ordenar un arreglo de cadenas de texto, de forma descendente, y esta también se modificará.
    Primeros números y luego letras.

*/
console.log(letras);
console.log(letras.reverse());
console.log(letras);

/* .concat()
    Nos permite juntar dos arreglos en uno solo.
*/
const arreglo1 = [2, 1, 3];
const arreglo2 = ['B', 'C', 'A'];
const arreglo3 = arreglo1.concat(arreglo2);
const arreglo4 = arreglo2.concat(arreglo1);

console.log(arreglo3);
console.log(arreglo4);

/* .push()
    Nos permite agregar un elemento al final de un arreglo.
*/
colores.push('Morado');
console.log(colores);

/* .pop
    Nos permite eliminar el último elemento de un arreglo.
*/
colores.pop();
console.log(colores);

/* .shift
    Elimina el primer elemento de un arreglo y recorre los elementos.
*/
const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
console.log(dias);
const diaEliminado = dias.shift();
console.log(diaEliminado);
console.log(dias);

/* .unshift()
    Agrega un elemento al inicio del arreglo y empuja los elementos.
*/
dias.unshift('Día Extra');
console.log(dias);

/* .splice()
    Nos permite insertar elementos a un arreglo donde le especifiquemos.
    - 1er parámetro - Posición donde queremos comenzar a insertar los elementos.
    - 2do parámetro - Si queremos eliminar elementos del arreglo desde la posición indicada.
    - Resto de parámetros - Los elementos a insertar.
*/
const amigos = ['Gonzalo', 'José', 'Roberto', 'Daniel'];
amigos.splice(1, 2, 'Iván', 'Exequiel');
console.log(amigos);

/* .slice()
    Nos permite copiar una parte de un arreglo a otro.
    - 1er parámetro - Posición desde donde queremos copiar.
    - 2do parámetro - Hasta antes de que elemento copiar.
*/
const frutas = ['Manzana', 'Pera', 'Frutilla', 'Melón', 'Sandía', 'Arándano', 'Piña', 'Naranja'];
const frutasFav = frutas.slice(2,5);
console.log(frutas);
console.log(frutasFav);