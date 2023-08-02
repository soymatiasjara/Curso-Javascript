/* Local Scope o Variables Locales.
    - Son las variable declaradas dentro de una función.
    - Solo podemos acceder a ellas desde dentro de la función.
*/
var numero = 1;

// La variable 'numero' dentro de la función solo está disponible para esa función.
    // Si no encuentra la variable dentro de la función, buscará una global.
var obtenerNumeroLetras = (nombre) => {
    var numero = nombre.length;
    console.log(`${nombre} tiene ${numero} letras.`);

    // Como 'numero' toma un valor dentro de la función sin importar en donde, se quedará ahí.
    var funcionAnidada = () => {
        console.log(numero);
        var numero = 4;
        console.log(numero);
    };
    funcionAnidada();
};
obtenerNumeroLetras('Matías');