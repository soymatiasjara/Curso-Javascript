const boton = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');


boton.addEventListener('click', () => {
    const nombre = prompt('Ingrese nombre:');
    //Tiene que ser una cadena de texto, (identificador, datos)
    localStorage.setItem('nombre', nombre);
});

boton2.addEventListener('click', (e) => {
    localStorage.removeItem('nombre');
});

if (localStorage.nombre) {
    console.log(`Hola ${localStorage.nombre}`);
} else {
    console.log('No hay nombres registrados');
};