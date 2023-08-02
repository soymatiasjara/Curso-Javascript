const boleto = 'VIP';
// let codigoDeAcceso;

// if (boleto === 'VIP') {
//     codigoDeAcceso = 'VIP-123-456';
// } else {
//     codigoDeAcceso = 'REGULAR-123-456';
// }
// console.log(codigoDeAcceso);

const codigoDeAcceso = (boleto === 'VIP') ? 'VIP-123-456' : 'REGULAR-123-456';
//console.log(codigoDeAcceso);

// En múltiples lineas - En este caso sería mejor usar if else
boleto === 'VIP'
?
console.log('Tu boleto es VIP')
:
console.log('Tu boleto es Regular');