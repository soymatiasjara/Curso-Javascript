const crearCookie = () => {
    // document.cookie = 'nombre = Matías';
    // Expirar cookie.
    document.cookie = 'nombre=Mathew; expires=1 Oct 2023 01:00:00 UTC';
}

const iniciarSesion = () => {
    const usuario = prompt('Usuario:');
    userName = document.cookie = `nombre=${usuario}; expires=1 Oct 2023 01:00:00 UTC`;
};

console.log('Hola ' + document.cookie);

let userName;

const cook = document.cookie.split('; ');
cook.forEach((cook) => {
    const propiedad = cook.split('=')[0];
    if (propiedad === 'nombre'){
        userName = cook.split('=')[1];
    }
});

if (userName) {
    console.log(`Hola ${userName}`);
} else {
    console.log('No has iniciado sesión');
}

const cerrarSesion = () => {
    console.log(`Cerrando sesión...`);
    document.cookie = 'nombre=; expires=1 Jan 2020 01:00:00 UTC';
}