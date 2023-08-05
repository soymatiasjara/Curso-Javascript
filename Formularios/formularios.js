/*  Formularios
    Tenemos dos formas de acceder a los formularios.
    - Mediante el objeto forms.
    - Mediante métidos del DOM.
*/

// console.log(document.forms['formulario-donacion']['correo'].value);

const botonEnviar = document.getElementById('btnEnviar');
botonEnviar.addEventListener('click', (e) => {
    e.preventDefault();

    // const correo = document.querySelector('#formulario-donacion [name="correo"]');
    // console.log(correo.value);

    const correo = document.querySelector('#formulario-donacion [name="correo"]');
    console.log(correo.value);

    console.log(`País: ${document.forms['formulario-donacion']['pais'].value}`);

    const formulario = document.forms['formulario-donacion'];
    console.log(`Donación: ${formulario['donacion'].value} dólares`);
    // console.log(`5 marcado: ${formulario['cantidad-5'].checked}`);
    // console.log(`10 marcado: ${formulario['cantidad-10'].checked}`);

    console.log(`Fecha almacenada: ${formulario.fecha.value}`);
    const fechaSort = formulario.fecha.value.split('-');
    // const nuevaFecha = [fechaSort[2], fechaSort[1], fechaSort[0]];
    fechaSort.splice(0, 3, fechaSort[2], fechaSort[1], fechaSort[0]);
    console.log(`Fecha corregida: ${fechaSort.join('-')}`);


    console.log(`Terminos: ${formulario['terminos-y-condiciones'].checked}`);
});