/* Estructura de una clase:
    - Definición.
    - Propiedades: la clase puede contener variables. Dentro de una clase se llaman propiedades.
    - Métodos: la clase puede contener funciones. Dentro de una clase se llaman métodos.
    Poner en mayúsculas las clases para diferenciarlas de las variables.
*/

class Usuario {
    tipo = 'usuario';

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;

        console.log('Nuevo usuario registrado');
    }

    obtenerNombre() {
        console.log('Obteniendo datos...');
        return `${this.nombre} ${this.apellido}`;
    }
};

const usuario = new Usuario('Matías', 'Jara');
console.log(usuario.obtenerNombre());

const usuario2 = new Usuario('Gonzalo', 'Arenas');
console.log(usuario2.obtenerNombre());