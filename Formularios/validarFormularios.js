const formulario = document.getElementById('formulario-donacion');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const datos = {
        correo: formulario.correo.value,
        pais: formulario.pais.value,
        donacion: formulario.donacion.value,
        fecha: formulario.fecha.value,
        terminos: formulario['terminos-y-condiciones'].checked,
    };
    if (datos.correo.length < 4) {
        console.log('Correo inválido, debe tener 4 o más carácteres');
        return;
    } else if (!datos.pais) {
        console.log('Seleccione un país');
        return;
    } else if (!datos.donacion) {
        console.log('Seleccione la donación');
        return;
    }   else if (!datos.fecha){
        console.log('Ingrese una fecha');
        return;
    } else if (!datos.terminos) {
        console.log('Debe aceptar los términos y condiciones');
        return;
    }

    console.log(Object.values(datos));
    console.log('Enviando datos...');
});