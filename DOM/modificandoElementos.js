/* elemento.innerHTML
    Nos permite cambiar el contenido HTML de un elemento.
*/

const primeraCaja = document.querySelector('.caja');
primeraCaja.innerHTML = 'Cajita Feliz';

/* elemento.attribute
    Nos permite acceder y crear/cambiar atributos del elemento.
*/
primeraCaja.id = 'cajita';

/* elemento.setAttribute()
    Nos permite agregar o establecer el valor de un atributo del elemento.
*/
primeraCaja.setAttribute('class', 'caja activa');
primeraCaja.setAttribute('data-id', '123-456');

/* elemento.style.property
    Nos permite cambiar los estilos css de un elemento.
    En caso que la propiedad contenga un guión, se reemplaza por una mayúscula.
    Ejemplo: text-transform -> textTransform
*/

const caja1_2 = document.querySelector('#contenedor2 .caja');
caja1_2.style.background = '#000';
caja1_2.style.color = '#fff';
caja1_2.style.textTransform = 'UpperCase';
