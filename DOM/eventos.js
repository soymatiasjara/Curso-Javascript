const botones = document.querySelectorAll('.botones');
const caja1 = document.querySelector('.caja');



botones[0].addEventListener('click', (e) => {
    caja1.classList.toggle('activa');
});

/* Agregando el evento a múltiples elementos.
    Podemos agregar el evento a múltiples elementos recorriéndolos mediante un ciclo.
    Nota: Esta no es la forma más óptima.
*/

const cajas = document.querySelectorAll('.caja');

cajas.forEach((cajita) => {
    cajita.addEventListener('click', (e) => {
        console.log(`Clickeaste en la ${e.target.innerHTML}`);
    });
});