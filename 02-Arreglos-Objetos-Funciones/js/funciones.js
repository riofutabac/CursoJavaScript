
function saludar (nombre) {
    console.log (arguments);
    console.log('Hola ' + nombre);
}



 const saludar2 = function (nombre) {
     console.log('Hola ' + nombre);
 }


saludar('Tony Stark');

saludar2('Peter Parker');

saludar('Tony Stark', 40, true, 'Costa Rica');

const saludarFlecha = () => {
    console.log('Hola Flecha');
}

saludarFlecha();

const saludarFlecha2 = ( nombre ) => {
    console.log('Hola ' + nombre);
}

saludarFlecha2('Goku');

const sumar = (a, b) => {
    return a + b;
}

let num1 = 5;
let num2 = 10;

sumar(num1, num2);

console.log(sumar(num1, num2));


function getAleatorio() {
    return Math.random();
}

