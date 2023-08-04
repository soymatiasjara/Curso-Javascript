/* Modificar estilos CSS mediante clases.
    add - remove - toggle - contains
*/

const primeraCaja = document.querySelector('#contenedor1 .caja');
console.log(primeraCaja.classList);

const agregarClase = () => {
    primeraCaja.classList.add('activa');
};

const eliminarClase = () => {
    primeraCaja.classList.remove('activa');
};

const cambiarClase = () => {
    primeraCaja.classList.toggle('activa');
};

const comprobarClase = () => {
    const hayCaja = primeraCaja.classList.contains('activa');
    hayCaja === true ? console.log('Caja activada') : console.log('Caja desactivada');
    console.log('y contiene estas clases: ');
    primeraCaja.classList.forEach((clases) => {
        console.log(clases);
    });
};