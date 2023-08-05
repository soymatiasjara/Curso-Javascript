/*  bubbling (false, por defecto)
    El evento del elemento hijo reaccionará primero.

    capturing (true)
    El evento del elemento padre reaccionará primero.
*/

const contenedor = document.getElementById('contenedor1');
contenedor.addEventListener('click', (e) => {
    console.log('Clickeaste el contenedor');
}, /* true o false*/);

const caja1 = document.querySelector('.caja');
caja1.addEventListener('click', (e) => {
    console.log('Clickeaste la caja 1');
});

