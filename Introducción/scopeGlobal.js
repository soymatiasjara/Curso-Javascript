/* Global Scopre o Variables Globales
    - Son las variables declaradas fuera de una función
    - Podemos acceder a ellas desde cualquier parte del código
    - Podemos usar const, let y var
*/

var nombre = 'Matías';
console.log(nombre);

const saludo = () => {
    console.log(`Hola ${nombre}`);
    nombre = 'Gonzalo';
    console.log(`Cambiaste el nombre a ${nombre}`);
}
saludo('Matías');