const usuario = {
    nombre: 'Gonzalo',
    pais: 'Chile',
};

// El uso de switch es para cuando se repita mucho una variable con una condición.
switch (usuario.pais) {
    case 'Chile':
        console.log('El usuario es Chileno.');
        break;
    case 'España':
        console.log('El usuario es Español.');
        break;
    case 'Argentina':
        console.log('El usuario es Argentino.');
        break;
    default:
        console.log('El usuario es de otro país.');
}