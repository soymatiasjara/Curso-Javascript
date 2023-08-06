/*  API para trabajar con fecha.
    Javascript expone su API para que podamos trabajar con fechas.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/*  Crear un objeto de fecha.
    Para poder trabajar con fechas primero tenemos que crear un objeto de fecha.
*/

const fechaActual = new Date();
// console.log(fechaActual);

const cumpleaños = new Date('1996-04-09T12:00:00');
// console.log(cumpleaños);

// Métodos para trabajar con fechas.
console.log(fechaActual.toString());

//Obtener nombre, mes, día y año.
console.log(fechaActual.toDateString());

//Obtener hora
console.log(fechaActual.toTimeString());

// Obtener mes
console.log(cumpleaños.getMonth() + 1);

// Obtener día
console.log(cumpleaños.getDate());

// Obtener año
console.log(cumpleaños.getFullYear());
