class User {
    constructor([nombre, password, correo, tipo]) {
        this.nombre = nombre;
        this.password = password;
        this.correo = correo;
        this.tipo = tipo;
    };
};

// allUsers guardará todos los usuarios regitrados como objetos dentro de arreglos.
let allUsers = [];
const pedirDatos = (mod) => {
    nombre = prompt('Ingrese su nombre de usuario:');
    while (nombre.length < 4 && allUsers.length === 0) nombre = prompt('El nombre de usuario debe tener al menos 4 carácteres. Vuelva a intentarlo:');

    for (let i = 0; i < allUsers.length; i++) {
        if (nombre.length >= 4) {
            if (allUsers[i].nombre === nombre) {
                nombre = prompt('El nombre de usuario que ingresó ya existe. Vuelva a intentarlo:');
                i = -1;
            }
        } else {
                nombre = prompt('El nombre de usuario debe tener al menos 4 carácteres. Vuelva a intentarlo:');
                i = -1;
            };
    };

    password = prompt('Ingrese su contraseña:');
    while (password.length < 4) password = prompt('Su contraseña debe tener al menos 4 carácteres. Vuelva a intentarlo:');

    correo = prompt('Ingrese su correo:');
    while (correo.length < 4 && allUsers.length === 0) correo = prompt('El nombre de usuario debe tener al menos 4 carácteres. Vuelva a intentarlo:');

    for (let i = 0; i < allUsers.length; i++) {
        if (correo.length >= 4) {
            if (allUsers[i].correo === correo) {
                correo = prompt('El nombre de usuario que ingresó ya existe. Vuelva a intentarlo:');
                i = -1;
            }
        } else {
                correo = prompt('El nombre de usuario debe tener al menos 4 carácteres. Vuelva a intentarlo:');
                i = -1;
            };
    };


    console.log(`Usuario creado, bienvenido ${nombre}, espero disfrutes de nuestros servicios.`);

    let datos = [nombre, password, correo];
    mod === true ? datos.push('Moderator') : datos.push('Regular');

    return datos;
};

// Mostrar todos los usuarios registrados.
const showUsers = () => {
    allUsers.forEach((nombre) => {
        console.log(`Username: ${nombre.nombre}\nType: ${nombre.tipo}\nPassword: ${nombre.password}\nE-mail: ${nombre.correo}`);
    })
};

// Crear un usuario.
const createUser = (tipo) => {
    const newUser = new User(pedirDatos(tipo));
        allUsers.push(newUser);
};