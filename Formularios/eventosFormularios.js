const formulario = document.forms['formulario-donacion'];

/*  Evento submit
    Nos permite detectar cuando el usuario intenta enviar un formulario.
*/
formulario.addEventListener('submit', (e) => {
    e.preventDefault();



    console.log('Enviando datos...');
});

/*  Evento change
    Nos permite detectar cuando hay un cambio en el valor de un iput, select o textarea.
    Se ejecuta cuando cambiamos el valor del input y damos click afuera.
*/

formulario.pais.addEventListener('change', (e) => {
    console.log(`El país cambió a ${e.target.value}`);
});
formulario['cantidad-5'].addEventListener('change', (e) => console.log(`La cantidad cambió a ${e.target.value}`));
formulario['cantidad-10'].addEventListener('change', (e) => console.log(`La cantidad cambió a ${e.target.value}`));

/*  Evento focus
    Nos permite detectar cuando un input recibe el foco de atención.
*/
formulario.correo.addEventListener('focus', (e) => console.log(`El texto es: ${e.target.value}`));
/*  Evento blue
    Nos permite detectar cuando un input pierde el foco de atención.
*/
formulario.correo.addEventListener('blur', () => console.log(`Focus cancelado`));

/*  Evento keydown
    Nos permite detectar cuando una tecla es presionada sobre un input, al mantener detecta múltiples.
*/
formulario.correo.addEventListener('keydown', (e) => console.log(`Tecla presionada: ${e.key}`));

/*  Evento keyup
    Nos permite detectar cuando una tecla es levantada sobre un input.
*/
formulario.correo.addEventListener('keyup', (e) => console.log(`Tecla levantada: ${e.key}`));