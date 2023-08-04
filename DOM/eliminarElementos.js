const eliminarCaja = () => {
    const contenedor = document.getElementById('contenedor1');
    const cualEliminar = contenedor.querySelector('.caja');

    if (cualEliminar) {
        contenedor.removeChild(cualEliminar);
    } else {
        alert('No quedan cajas');
    }
};