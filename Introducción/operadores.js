/*  Operadores Aritméticos
    =   Operador de asignación. Se usa para asignar valores a una variable.
    +   Suma
    -   Resta
    *   Multiplicación
    /   División
    %   Módulo
    ++  Aumento
    --  Disminución
*/
const resultadoSuma = 10 + 10;
const resultadoResta = 10 + 10;
const resultadoModulo = 10 % 3;

//console.log(resultadoModulo);

let numero = 1;
numero++;

//console.log(numero);

/* Operadores de Asignación
    +=  Suma un número al valor de una variable
    -=  Resta un número al valor de una variable
    *=  Multiplica un número al valor de una variable
    /=  Divide un número al valor de una variable
    %=  Obtiene el sobrante de una divisón y lo asigna a la variable
*/
let numero2 = 10;
// numero2 = numero2 + 5;
numero2 += 5;

/* Operadores de Comparación
Nos permiten comparar valores, dando un Booleano como resultado
    ==  Igual que
    === Igual en valor y tipo de valor
    !=  Diferente
    !== Diferente en valor y tipo de valor
    <   Menor que
    >   Mayor que
    <=  Menor o igual
    >=  Mayor o igual
    ? Operador ternario
*/

const resultadoIgual = 10 == '10';
const resultadoIgual2 = 10 === '10';

//console.log(resultadoIgual, resultadoIgual2);

const resultadoTernario = 7 > 1 ? 'El primer valor es mayor que el segundo' : 'El segudo valor es mayor que el primero';

console.log(resultadoTernario);