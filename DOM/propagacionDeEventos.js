const contenedor = document.getElementById('contenedor1');
contenedor.addEventListener('click', (e) => {
    console.log('Clickeaste el contenedor');
});

const caja1 = document.querySelector('.caja');
caja1.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('Clickeaste la caja 1');
});