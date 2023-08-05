class User {
    constructor(nombre, rut, codigo) {
        this.nombre = nombre;
        this.rut = rut;
        this.codigo = codigo;
    };
};

const test = '19245626';
const test2 = '6';


// allUsers guardará todos los usuarios regitrados como objetos dentro de arreglos.
let allUsers = [];

const validateRut = () => {
    let nombre = prompt('Ingrese su nombre de usuario:');
    if (!nombre) return;
    while (nombre.length < 4 && allUsers.length === 0) {
        nombre = prompt('El nombre de usuario debe tener al menos 4 carácteres. Vuelva a intentarlo:');
        if (!nombre) return;
    }
    for (let i = 0; i < allUsers.length; i++) {
        if (!nombre) return;
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
    if (!nombre) return;

    const rut = prompt('Ingrese su RUT:');
    if (!rut) return;

    const rut2 = prompt('Ingrese el código verificador:');
    if (!rut2) return;
    
    let codigo = rut2;
    if (codigo === 'K' || codigo === 'k') {
        codigo = 10;
    } else if (codigo === '0') {
        codigo = 11;
    }

    let result = 0;
    let ver = 2;
    for (let i = rut.length; i > 0; i--) {
        if (ver <= 7) {
            result += parseInt(rut[i - 1]) * ver;
            ver++;
        } else {
            ver = 2;
            result += parseInt(rut[i - 1]) * ver;
            ver++;
        }
    }

    result = 11 - (result - (Math.floor(result/11) * 11));

    if (result === parseInt(codigo)) {
        const newUser = new User(nombre, rut, rut2);
        allUsers.push(newUser);
    } else {
        alert('Su RUT es inválido');
    }
}




// Mostrar todos los usuarios registrados.
const showUsers = () => {
    console.clear();
    allUsers.forEach((rut) => {
        console.log(`Nombre: ${rut.nombre}\nRut: ${rut.rut}-${rut.codigo}`);
    })
};

// Crear un usuario.
/* const createUser = () => {
    const newUser = new User(validateRut());
    allUsers.push(newUser);
}; */