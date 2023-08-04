// href - Retorna la URL de la página actual.
console.log(location.href);

// hostname - Retorna el host de la página actual.
console.log(location.host);

// pathname - Retorna la ruta y archivo de la página actual.
console.log(location.pathname);

// protocol - Retorna el protocolo utilizado.
console.log(location.protocol);

const cargarDocumento = () => {
    location.assign('https://google.cl');
}

const volver = () => {
    history.forward();
}