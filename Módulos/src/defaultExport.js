// Método 1 - Con default decides nombrar lo que exportas en el archivo de destino, solo exportar uno por archivo.
/* export default () => {
    return {
        nombre: 'Gonzalo',
        correo: 'gonzalo@gmaol.com',
    }
}; */

// Método 2 - Final del documento.
const obtenerUsuario2 = () => {
    return {
        nombre: 'Exequiel',
        job: 'Médico',
    }
};

export default obtenerUsuario2;