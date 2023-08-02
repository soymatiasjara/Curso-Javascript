const arreglo = ['Texto', 777.7, false, {propiedad: 'valor'}, [1, 2, 3]];
console.log(arreglo);

const amigos = ['Gonzalo', 'Daniel', 'Cam'];
// Los Arrays empiezan por el 0
console.log(amigos[2]);

// Agregar valores a un Array
const colores = [];
colores[0] = 'Rojo';
colores[1] = 'Azul';
colores[2] = 'Verde';
colores[2] = 'Amarillo';
console.log('El arreglo colores tiene ' + colores.length + ' colores.');

colores.push('Blanco');
// length determina la cantidad de valores dentro de un Array
console.log('El arreglo colores ahora tiene ' + colores.length + ' colores.');