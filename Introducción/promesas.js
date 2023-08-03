const promesa = new Promise((resolve, reject) =>{
    // Acción que se ejecutará.
    setTimeout(() => {
        const exito = false;

        if (exito) {
            resolve('La operación se completó con éxito');
        } else {
            reject('La operación fracasó');
        }
    }, 2000);
});

promesa.then((mensaje) => {
    alert(mensaje);
});

promesa.catch((mensaje) => {
    alert(mensaje);
});
