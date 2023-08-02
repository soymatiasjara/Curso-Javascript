const personaArreglo = ['Daniel', 28, 'daniel@gmail.com', true, true];
const persona = {
    nombre: 'Gonzalo',
    edad: 29,
    correo: 'gonzalo@gmail.com',
    suscripciones: {
        web: true,
        correo: true
    },
    coloresFav: ['Azul', 'Verde'],
    // Una función dentro de un objeto se le llama método
    saludo: function () {
        alert('Gonzalo está saludando');
    }
};

//console.log(persona.nombre);
// Definir que es una propiedad poniendo ''
//console.log(persona['edad']);

const variable = 'suscripciones';
// console.log(persona[variable]);

// persona.pais = 'Chile';
// console.log(persona.pais);
// persona.pais = 'Argentina';
// console.log('Ahora el pais es ' + persona.pais)

console.log(persona.saludo());