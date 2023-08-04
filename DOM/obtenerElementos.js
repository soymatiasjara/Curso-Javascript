/* getElementById
    Nos permite obtener un elemento en base a su atributo id.
*/
// const contenedor1 = document.getElementById('contenedor1');
// console.log(contenedor1);

/* children
Nos permite obtener los elementos hijo.
*/
// console.log(contenedor1.children);

/* parentElement
    Nos permite obtener el elemento padre de un elemento.
*/

// console.log(contenedor1.parentElement);

/* getElementsByTagName
    Nos permite obtener una colleción de elementos en base a la etiqueta.
    Nota: Devuelve una colección HTML. Una colleción no es un arreglo.
*/
// const divs = document.getElementsByTagName('div');
// console.log(divs);
// console.log(`Tenemos ${divs.length} elementos en esta página`);

/* getElementsByClassName
    Nos permite obtener una colleción de elementos en base a su clase CSS.
    Nota: Devuelve una colección HTML..
*/
// const contenedores = document.getElementsByClassName('contenedor');
// console.log(contenedores);

/* querySelector
    Nos devuelve el primer elemento que coincida con un selector estilo CSS.
    Nota: devuelve un nodelist.
    Los nodelist se pueden usar métodos de arreglos.
    # para id.
    . para clase.
*/
// const caja = document.querySelector('#contenedor1 .caja');
// console.log(caja);

/* querySelectorAll
    Nos permite obtener una colección de elementos en base a un selector estilo CSS.
    Nota: devuelve un nodelist.
*/

// const cajas = document.querySelectorAll('.contenedor .caja');
// console.log(cajas);

// cajas.forEach((caja) => {
//     console.log(caja);
// })

/* closest
    Nos permite buscar de adentro hacia afuera en busca de un elemento.
    :last-child es para obtener el último elemento con esa clase.
*/

const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
console.log(ultimaCaja);

console.log(ultimaCaja.closest('.contenedor-principal'));

/* Podemos encadenar todos los métodos para obtener elementos. */

const contenedor2 = document.getElementById('contenedor2');
const contenedor2Cajitas = (contenedor2.querySelectorAll('.caja'));

const contenedor2UnaLinea = document.getElementById('contenedor2').querySelectorAll('.caja');

console.log(contenedor2UnaLinea);
contenedor2UnaLinea.forEach((cajitas) => {
    console.log(cajitas);
});

