/*  Formularios
    Tenemos dos formas de acceder a los formularios.
    - Mediante el objeto forms.
    - Mediante métidos del DOM.
*/

// console.log(document.forms['formulario-donacion']['correo'].value);

const botonEnviar = document.getElementById('btnEnviar');
botonEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    
    const correo = document.querySelector('#formulario-donacion [name="correo"]');
    console.log(correo.value);

    console.log(document.forms['formulario-donacion']['pais']);
});
