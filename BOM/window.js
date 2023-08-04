console.log(`La ventana de tu navegador mide: ${window.innerWidth}`);
console.log(`La ventana de tu navegador mide: ${window.innerHeight}`);

/* window.open()
    Nos permite abrir pestañas del navegador.
    Nota: Es posible que el navegador te pida permisos para abrir una nueva pestaña.
    - 1er parámetro: dirección de la nueva pestaña.
    - 2do parámetro: nombre de la pestaña.
    - 3er parámetro: cadena de texto de opciones, puedes reemplazar una pestaña por una ventana.
    Nos devuelve un objeto para acceder a esa pestaña.
*/

const abrirGoogle = () => {
    window.open('https://google.cl', 'Soy una ventana', 'width=1200,height=600');
}
let ventana;
const abrirVentana = () => {
    ventana = window.open('', 'Soy una ventana', 'width=1200,height=600');
    // write trabajas en texto html.
    ventana.document.write('<h1>Ventana nueva</h1>');
}

const cerrarVentana = () => {
    ventana.close();
}

/* Screen Object
    Representa la pantalla del usuario.
*/
console.log('Ancho de pantalla:', window.screen.width);
console.log('Ancho de pantalla:', window.screen.height);

console.log('Ancho de patalla sin barra de Windows', window.screen.availWidth);
console.log('Ancho de patalla sin barra de Windows', window.screen.availHeight);

