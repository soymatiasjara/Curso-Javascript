/* Ventana de lerta
    Para informarle al usuario de algo.
*/
// alert('Soyu una alerta.');

/* Ventana de confirmación
    Una ventana en donde el usuario puede aceptar o cancelar.
    Retorna verdadero o false según la respuesta del usuario.
*/

const ingresar = () => {
    const respuesta = confirm('¿Eres mayor de edad?');
    if (respuesta) {
        alert('Acceso permitido');
    } else {
        alert('Acceso denegado');
    }
};

/* Ventana con input
    Una ventana en donde el usuario puede darnos un valor.
    Retorna una cadena de texto con la respuesta del usuario.
*/
const saludar = () => {
    const nombre = prompt('Escribe tu nombre');
    alert(`Hola ${nombre}`);
};