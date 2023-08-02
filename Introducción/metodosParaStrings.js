/* .length
    Devuelve el número de carácteres de una cadena de texto.
*/
const texto = 'Hola, yo soy Matías';
console.log(texto.length);

/* .indexOf() .lastIndexOf()
    Devuelve el index del primer / último carácter especificado, si no existe devuelve -1.
*/
console.log(texto.indexOf('a'));
console.log(texto.lastIndexOf('a'));

/* .slice()
    Devuelve un fragmento de una cadena de texto.
    1er parámetro - index desde donde queremos cortar.
    2do parámetro (opcional) - index hasta donde queremos cortar.
*/

console.log(texto.slice(0, 4));
const index = texto.indexOf('M');
console.log(texto.slice(index));
console.log(texto.slice(index, index + 3));
console.log(texto.slice(-6, -1));

/* .replace()
    Devuelve una cadena de texto en donde reemplaza un valor por otro.
    1er parámetro - el texto que queremos reemplazar.
    2do parámetro - el texto que queremos poner.
*/
console.log(texto.replace('Matías', 'Gonzalo'));

/* .split()
    Convierte una cadena de texto en un arreglo.
    Tenemos que especificar donde cortar cada elemento.
    1er parámetro - el carácter que funcionará como separador.
*/
const texto2 = ('Hola-soy-Matías');
console.log(texto.split(' '));
console.log(texto2.split('-'));

/* .toUpperCase() .toLowerCase()
    Devuelve una cadena de texto mayúsculas / minúsculas.
*/
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());