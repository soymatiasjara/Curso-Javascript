const usuario = {
    nombre: 'Gonzalo',
    edad: 29,
    amigos: ['Matías', 'Exequiel', 'Daniel'],
    saludo: () => {
        console.log(`Gonzalo está saludando`);
    },
};

/*  Métodos propios
    - Los objetos pueden tener métodos personalizados.
*/
usuario.saludo();

/* Object.keys()
    - Nos devuelve un arreglo con las llaves (keys) del objeto.
*/
const elementosUsuario = Object.keys(usuario);
console.log(elementosUsuario);

/* Object.values()
    - Nos devuelve un arreglo con los valores (values) del objeto.
*/
const datosUsuario = Object.values(usuario);
console.log(datosUsuario);

/* Object.entries()
    Nos devuelve un arreglo con las parejas de clave y valor del objeto.
*/
const informacionUsuario = Object.entries(usuario);
console.log(informacionUsuario);