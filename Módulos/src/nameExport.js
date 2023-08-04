// Método 1 - Palabra export.
export const nombre = 'Matías';
export const obtenerPosts = () => {
    return [1, 2, 3];
};

// Método 2 - Final del documento.
const nombre2 = 'Daniel';

const obtenerPosts2 = () => {
    return [3, 2, 1];
};

export { nombre2, obtenerPosts2 };