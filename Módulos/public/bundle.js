'use strict';

// Método 1 - Palabra export.
const nombre = 'Matías';
const obtenerPosts = () => {
    return [1, 2, 3];
};

// Método 2 - Final del documento.
const nombre2 = 'Daniel';

const obtenerPosts2 = () => {
    return [3, 2, 1];
};

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

console.log('Hola, vengo del archivo de emptyExport.js');

// Método 1 - Named Imports
console.log('Mi nombre es ' + nombre);
console.log(obtenerPosts());
console.log(nombre2);
console.log(obtenerPosts2());
console.log(obtenerUsuario2());
