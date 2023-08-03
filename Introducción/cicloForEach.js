/* Ciclo forEach
    Es un método de los arreglos que podemos usar para recorrer los elementos.
*/

/* const amigos = ['Gonzalo', 'Iván', 'Exequiel', 'Daniel', 'Agustín'];
amigos.forEach((nombre, index) => {
    console.log(`Mi amigo número #${index + 1} se llama ${nombre}`);
}); */

const amigos = ['Gonzalo', 'Iván', 'Exequiel', 'Daniel', 'Agustín'];
amigos.forEach((nombre, index) => console.log(`Mi amigo número #${index + 1} se llama ${nombre}`));

/* Ciclo for in
    Nos permite recorrer las propiedades de un objeto
*/
const persona = {
    nombre: 'Gonzalo',
    edad: 29,
    correo: 'gonzalo@gmail.com',
};

for (propiedad in persona) {
    persona[propiedad] = '';
};

console.log(persona);

/* Ciclo for of
    Nos permite recorrer los valores de un objeto iterable.
    Podemos recorrer: arreglos, cadenas de texto, mapas, lista de nodos, etc.
*/

const etiquetas = document.head.children;
/* console.log(etiquetas);
for (elemento of etiquetas) {
    console.log(elemento);
}; */

// Método alternativo, transformas el objeto a un arreglo.
[...etiquetas].forEach((etiqueta) => console.log(etiqueta));