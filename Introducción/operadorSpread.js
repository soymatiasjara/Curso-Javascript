/* Operador Spread
    Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
*/
const frutas = ['Mango', 'Sandía', 'Frutilla', 'Melón'];
const comidaFavorita = ['Lasagna', 'Pollo Frito', ...frutas];
console.log(comidaFavorita);

const datosLogin = {
    nombre: 'Daniel',
    correo: 'correo@gmail.com',
    password: '123'
};

const usuario = {
    ...datosLogin,
    nombre: 'Gonzalo',
    edad: 29,
}

console.log(usuario);

/* Parámetro Rest
    Permite que una función contenga un número indefinido de argumtos.
    Los argumentos etra que encuentre los convertirá en un arreglo.
*/
const resgistrarUsuario = (nombre, correo, ...datosAdicionales) => {
    console.log(nombre, correo, datosAdicionales);
}

resgistrarUsuario('Matías', 'matias@gmail.com');
resgistrarUsuario('Gonzalo', 'gonzalo@gmail.com', 29, 'Chile');

/* Destructuración de objetos
    Nos permiite obtener elemetos o propiedades de un arreglo u objeto y guardarlos en una variable.
*/
const amigos = ['Gonzalo', 'Daniel', 'Iván'];
// const primerAmigo = amigos[0];
// const segundoAmigo = amigos[1];

const [primerAmigo, segundoAmigo, tercerAmigo] = amigos;

console.log(`Mis amigos son ${primerAmigo}, ${segundoAmigo} e ${tercerAmigo}.`);

const persona = {
    nombre: 'Exequiel',
    edad: 28,
    pais: 'Chile',
}

const persona2 = {
    nombre: 'Daniel',
    edad: 29,
    pais: 'Chile',
};

const {nombre, pais, edad} = persona;
console.log(nombre, pais, edad);

// Ponerlo entre llaves indica que sacará los datos de un objeto.
const mostrarEdad = ({nombre, edad}) => {
    console.log(`${nombre} tiene ${edad} años`)
};
mostrarEdad(persona.nombre, persona.edad);
mostrarEdad(persona);
mostrarEdad(persona2);