const endpoint = 'https://api.npoint.io/fc6493733def8d2eff1c';

/* fetch(endpoint)
    .then((respuesta) => {
        console.log('El servidor respondió.');

        const promesa = respuesta.json();

        promesa
            .then((datos) => {
                console.log(datos);
            })
            .catch((error) => {
                console.log(error);
            })
    })
    .catch((error) => {
        console.log(error);
    }); */

//  async/await
const obtenerDatos = async() => {
    console.log('Obteniendo datos...');
    const respuesta = await fetch(endpoint);
    const datos = await respuesta.json();
    console.log(datos);
};

obtenerDatos();