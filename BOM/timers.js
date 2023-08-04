/* setTimeOut()
    Nos permite ejecutar una función después de un tiempo que nosotros especifiquemos.
*/

const saludo = () => {
    console.log('Función saludo');
}
// setTimeout(saludo, 1000);

// setTimeout(() => {
//     console.log('Buenos días');
// }, 2000)

let id;
const iniciar = () => {
    console.log('Iniciando...');
    id = setTimeout(saludo, 3000);
};

const detener = () => {
    console.log('Deteniendo...');
    clearTimeout(id);
};

/* setInterval()
    Nos permite ejecutar una función cada cierto tiempo que especifiquemos.
*/
let cuenta = 0;
let id2;

const repetir = () => {
    id = setInterval(() => {
        console.log(cuenta);
        cuenta++;
    }, 1000);
}

const cancelarRepetir = () => {
    console.log('Deteniendo repetición.');
    clearInterval(id);
}