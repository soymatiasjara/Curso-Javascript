const boton1 = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');
const cajas = document.querySelectorAll('.caja');
const caja1 = cajas[0];
const caja2 = cajas[1];

let toggleClase = () => {
    caja1.classList.toggle('activa');
}

boton1.addEventListener('click', () => {
    caja1.addEventListener('click', toggleClase);
});

boton2.addEventListener('click', () => {
    caja1.removeEventListener('click', (toggleClase));
})

boton1.addEventListener('click', () => {
    caja1.addEventListener('click', toggleClase);
});