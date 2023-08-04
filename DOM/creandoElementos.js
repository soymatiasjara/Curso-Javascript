const agregarCaja = () => {
    /* 1. Creamos el elemento
        createElement - Recibe como parámetro una cadena de texto con la etiqueta que queremos crear.
    */
    const nuevaCaja = document.createElement('div');

    // 2. Agregamos texto y atributos.
    nuevaCaja.innerText = 'Nueva Caja';
    nuevaCaja.setAttribute('class', 'caja activa');

    // 3. Agregamos el elemento al DOM.
    const contenedor = document.getElementById('contenedor1');

    // .appendChild() - Agrega un elemento al final.
    //    contenedor.appendChild(nuevaCaja);

    /* .insertAdjacentElement() -Nos permite agregar un elemento.
    Valores:
        afterbegin - como primer elemento.
        beforebegin - antes del elemento padre.
        beforeend - como último elemento.
        afterend - después del elemento padre.
    */
    // contenedor.insertAdjacentElement('afterbegin', nuevaCaja);

    // .replaceWith() - Nos permite reemplzar el elemento por otro.
    const agregarCajita = document.querySelector('#contenedor1 .caja');
    agregarCajita.replaceWith(nuevaCaja);
}