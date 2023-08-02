/* .idexOf()
 Obtenemos el primer index de un elemento.
 Si no hay un elemento nos retorna -1.
*/
const nombres = ['Carlos', 'Roberto', 'Ignacio', 'Daniel', 'Gonzalo', 'Diego', 'Nicolás', 'Ignacio', 5];
console.log(nombres.indexOf('Ignacio'));
console.log(nombres.indexOf('Matías'));

/* .lastIndexOf()
    Obtenemos el último index de un elemento.
*/
console.log(nombres.lastIndexOf('Ignacio'));

/* . forEach()
    Nos permita ejecutar una función por cada elemento.
*/
nombres.forEach((nombre, index) => {
    console.log(`${nombre} es el alumno número ${index + 1}`);
});

/* .find()
    Nos permite recorrer un arreglo y devuelve el primer elemento que retornemos.
    Los textos se pueden usar como arreglos.
*/
const resultado = nombres.find((nombre) => {
    if (nombre[0] === 'D') {
        return nombre;
    }
});

console.log(`------------ ${resultado} -------------`);


/* .map
    Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo
    en base a los resultado de esta función.
*/

const nombresMayus = nombres.map((nombre) => {
    if (typeof nombre === 'string') {
        return nombre.toUpperCase()
    }
});
console.log(nombresMayus);

/* .filter()
    Nos permite ejecutar una función por cada elemento y luego crear un arreglo
    en base a los resultados de esa función.
*/

const nombresFiltro = nombres.filter((nombre) => {
    if (nombre.length === 6) {
        return nombre;
    }
});
console.log(nombresFiltro);

/* .includes()
    Nos permite saber si el arreglo contiene un elemento especificado.
*/

console.log(nombres.includes('Daniel'));
console.log(nombres.includes('Ricardo'));

/* .every()
    Nos permite ejecutar una condicional sobre cada elemento y
    nos devuelve true si todos los elementos cumplieron la condición.
*/

const nombresValidos = nombres.every((nombre) => {
    if (typeof nombre === 'string') {
        return true;
    } else {
        return false;
    }
});

console.log(`¿Todos los elementos son texto? ${nombresValidos}`);

/* .some()
    Nos permite ejecutar una condicional sobre cada elemento y
    nos devuelve true si algún elemento cumplió la condición.
*/

const nombresValidos2 = nombres.some((nombre) => {
    if (typeof nombre !== 'string') {
        return true;
    } else {
        return false;
    }
});

console.log(`¿Todos los elementos son texto? ${nombresValidos2}`);