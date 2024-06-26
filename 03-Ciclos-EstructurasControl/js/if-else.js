
let a = 10;



const hoy = new Date();

console.log(hoy);

let dia = hoy.getDay();
console.log( dia );
console.log(typeof dia);

// if (dia = 0) { // esto es una asigancion de variable no funciona
//     console.log('Domingo');
// } else {
//     console.log('No es domingo');
// }
console.log(dia==0)

if (dia == 0) {//esto es una comparacion del contenido en el caso de qeue sea otro tipo de dato lo convierte 
    console.log('Domingo');
} else {
    console.log('No es domingo');
}

if (dia === 0) { // esto es una comparacion de contenido y tipo de dato, estricta.
    console.log('Domingo');
} else {
    console.log('No es domingo');
}

let diasSemana = {0: 'Domingo', 1: 'Lunes', 2: 'Martes', 3: 'Miercoles', 4: 'Jueves', 5: 'Viernes', 6: 'Sabado'}; 

let diaIngresado= 3;

console.log(diasSemana[diaIngresado] || 'Dia no definido');
