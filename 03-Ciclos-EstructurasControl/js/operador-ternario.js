
const dia = 5;

const horaActual = 10;

let horaApertura;
let mensaje;

// if (dia === 0 || dia === 6) {
//     console.log('Fin de semana');
//     horaApertura = 9;
// }else{
//     console.log('Dia de semana');
//     horaApertura = 11;
// }

// if (horaActual >= horaApertura) {
//     mensaje = 'Estamos abiertos';   
// }else{
//     mensaje = `Estamos cerrados, hoy abrimos a las ${horaApertura}`;
// }


horaApertura = (dia === 0 || dia === 6) ? 9 : 11;

mensaje = (horaActual >= horaApertura) ? 'Estamos abiertos' : `Estamos cerrados, hoy abrimos a las ${horaApertura}`;

console.log(mensaje);
