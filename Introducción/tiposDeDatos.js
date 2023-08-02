/* Tipos de datos que podemos guardar en las variables:
    string - Cadena de Texto
    number - número
    boolean - Booleano (verdadero o falso)
    object - Objeto
    function - Funciones

    null - Valor nulo
    undefined - Valor sin definir 

    Tipos de variables:
    var - Definir variable
    let - Definir variable que puede cambiar de tipo (string a number)
    const - Definir variable permanente
*/
/*const nombre = 'Matías';
const parrafo = 'Este es un "párrafo" usando comillas dobles';
const parrafo2 = "Este es un 'párrafo' usando comillas simples"
const parrafo3 = 'Este es un \'párrafo\' usando solo comillas simples';*/

console.log(nombre, parrafo, parrafo2, parrafo3);

// Number - Número
const numero1 = 4;
const numero2 = -4;

// Boolean - Booleano
const usuarioConectado = false;
const mayorQue = numero1 > numero2;

//console.log(mayorQue);

// Arrays - Arreglo
const arreglo = ['Texto', 777, false, {propiedad: 'valor'}, [1, 2, 3]];

//console.log(arreglo);

// Object - Objeto
const persona = {
    nombre: 'Matías',
    edad: 27,
    carro: {
        marca: 'Subaru',
        color: 'Rojo'
    }
};

//console.log(persona.carro.marca);

// Function - Función
function saludar() {
    console.log('Hola');
}

saludar();

// Null - Nulo
const miVariable = null;

// Undefined
const miVariable2 = undefined;