/*  Expresiones Regulares dentro de formularios.
    Podemos usar expresiones regulares para validar los campos de una forma más precisa.
*/

const formulario = document.getElementById('formulario-donacion');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const expresionCorreo = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    const datos = {
        correo: formulario.correo.value,
    };

    if (!expresionCorreo.test(datos.correo)) {
        console.log('Correo inválido');
        return;
    }

    console.log(Object.values(datos));
    console.log('Enviando datos...');
});