class User {
    constructor([rut,codigo]) {
        if (rut != [0]) {
            this.rut = rut;
            this.codigo = codigo;
        }
    };
};

const test = '19245626';
const test2 = '6';


// allUsers guardará todos los usuarios regitrados como objetos dentro de arreglos.
let allUsers = [];

const validateRut = () => {
    const rut = prompt('Ingrese su RUT:');
    let codigo = prompt('Ingrese el código verificador:');
    if (codigo === 'K') {
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
        return [rut, codigo];
    } else {
        alert('Su RUT es inválido');
        return [0, 0];
    }
}




// Mostrar todos los usuarios registrados.
const showUsers = () => {
    console.log(allUsers);
    /* allUsers.forEach((rut) => {
        console.log(`Rut: ${rut.rut}-${rut.codigo}`);
    }) */
};

// Crear un usuario.
const createUser = () => {
    const newUser = new User(validateRut());
    allUsers.push(newUser);
};