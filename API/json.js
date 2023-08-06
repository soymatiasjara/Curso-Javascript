/*  JSON
    Javascript Object Notation
*/

/*  Tipos de datos que podemos usar en JSON:
    - Cadena de texto.
    - Número.
    - Objetos (en formato JSON).
    - Arreglos.
    - Booleanos.
    - null.

    Tipos de datos que NO poedemos usar en JSON:
    - Funciones
    - Objetos de fecha.
    - undefined.
*/

//  datos.json
const datos = `
    {
        "id": 1,
        "nombre": "Matías",
        "suscriptor": true,
        "posts": [
            {
                "id": 1,
                "titulo": "título 1",
                "texto": "descripción título 1"
            },
            {
                "id": 2,
                "titulo": "título 2",
                "texto": "descripción título 2"
            }
        ]
    }
`;

/*  parse()
    Le pasamos una cadena de texto con formato JSON y nos devuelve un objeto de Javascript.
*/

const datosJ = JSON.parse(datos);
// console.log(datosJ.nombre);

/*  stringify()
    Nos permite pasarle un objeto de Javascript y nos devuelve una cadena de texto con objeto en formato JSON.
*/

const user = {
    nombre: 'Gonzalo',
    apellido: 'Arenas',
    colores: ['Rojo', 'Verda', 'Azul'],
};

console.log(JSON.stringify(user));
